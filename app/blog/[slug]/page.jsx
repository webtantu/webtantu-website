import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import AnimatedArticle from '@/components/AnimatedArticle';
import { organizationJsonLd, serviceJsonLd, siteUrl } from '@/data/site';
import { getPost, getPosts, getRelatedPosts, urlFor } from '@/lib/sanity';
import { pageMetadata } from '@/lib/seo';
import { extractPlainText, calculateReadingTime, extractHeadings } from '@/utils/blog';

export const revalidate = 300; // Optimized ISR: Revalidate every 5 minutes

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.metaTitle || post.title;
  const bodyText = extractPlainText(post.content || post.body || []);
  const description = post.metaDescription || post.description || bodyText.slice(0, 155);

  const meta = pageMetadata({
    title: title.slice(0, 60),
    description: description.slice(0, 160),
    path: `/blog/${post.slug}`,
    image: post.mainImage ? urlFor(post.mainImage)?.width(1200).height(630).url() : '/favicon.svg',
  });

  // Add Canonical and Open Graph refinements
  return {
    ...meta,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      ...meta.openGraph,
      images: [
        {
          url: post.mainImage ? urlFor(post.mainImage)?.width(1200).height(630).url() : `${siteUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ]
    }
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value)?.width(1200).url();
      return (
        <div className="my-12 relative aspect-[16/9] overflow-hidden rounded-2xl shadow-xl border border-outline-variant/20">
          <Image
            src={imageUrl}
            alt={value.alt || 'Blog visual content'}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <Link 
          href={value.href} 
          rel={rel}
          className="text-primary font-bold underline decoration-primary/30 underline-offset-4 hover:decoration-primary hover:text-primary-container transition-all"
        >
          {children}
        </Link>
      );
    },
  },
  block: {
    h2: ({ children }) => {
      const id = children[0].toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h2 id={id} className="text-3xl md:text-4xl font-headline font-extrabold text-primary mt-20 mb-8 tracking-tight scroll-mt-24">{children}</h2>;
    },
    h3: ({ children }) => {
      const id = children[0].toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h3 id={id} className="text-2xl md:text-3xl font-headline font-bold text-primary mt-16 mb-6 scroll-mt-24">{children}</h3>;
    },
    normal: ({ children }) => <p className="leading-relaxed mb-8 text-on-surface-variant/90 text-lg">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-8 py-4 italic text-primary/80 bg-primary/5 rounded-r-2xl my-12 text-xl font-medium">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-outside ml-6 space-y-4 mb-10 text-lg">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-outside ml-6 space-y-4 mb-10 text-lg">{children}</ol>,
  },
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return (
      <main className="py-40 px-6 text-center bg-surface">
        <h1 className="text-4xl font-headline font-bold text-primary mb-6">Post not found</h1>
        <p className="text-on-surface-variant mb-8">The article you're looking for might have been moved or deleted.</p>
        <Link href="/blog" className="px-8 py-3 bg-primary text-on-primary rounded-xl font-bold">Back to Blog</Link>
      </main>
    );
  }

  const relatedPosts = await getRelatedPosts(post.slug);
  const headings = extractHeadings(post.content || post.body || []);
  const readingTime = calculateReadingTime(post.content || post.body || []);
  const displayDate = post.updatedAt || post.publishedAt;
  const isUpdated = Boolean(post.updatedAt);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.description || extractPlainText(post.content || post.body || []).slice(0, 160),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { '@type': 'Organization', name: 'WebTantu' },
    publisher: { '@type': 'Organization', name: 'WebTantu', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.svg` } },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    image: post.mainImage ? urlFor(post.mainImage)?.width(1200).height(675).url() : `${siteUrl}/logo.png`,
  };

  return (
    <main className="bg-surface min-h-screen">
      <JsonLd data={[organizationJsonLd, ...serviceJsonLd, articleJsonLd]} />
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
      
      <article className="py-20 px-6">
        <AnimatedArticle>
          <div className="max-w-4xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-16">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <span className="text-sm font-bold text-primary/60 uppercase tracking-widest">
                  {isUpdated ? 'Updated on ' : 'Published on '}
                  {new Date(displayDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant/40" />
                <span className="text-sm font-bold text-secondary tracking-widest uppercase">{readingTime}</span>
              </div>
              <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-primary tracking-tight mb-8">
                {post.title}
              </h1>
            </div>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-2xl mb-20 group">
                <Image 
                  src={urlFor(post.mainImage).width(1200).height(675).url()} 
                  alt={post.mainImage?.alt || post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  priority 
                />
              </div>
            )}

            {/* Main Layout Grid */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-16">
              {/* Sidebar: Table of Contents */}
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-32">
                  <h4 className="font-headline font-bold text-primary uppercase tracking-widest text-xs mb-6">Table of Contents</h4>
                  <nav className="space-y-3">
                    {headings.map((heading, idx) => (
                      <a 
                        key={idx} 
                        href={`#${heading.id}`}
                        className={`block text-sm transition-colors hover:text-primary ${heading.level === 'h3' ? 'pl-4 text-on-surface-variant/60' : 'font-medium text-on-surface-variant'}`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-9 max-w-3xl">
                {/* Mobile ToC */}
                {headings.length > 0 && (
                  <div className="lg:hidden mb-12 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/20">
                    <h4 className="font-headline font-bold text-primary uppercase tracking-widest text-xs mb-4">Jump to section</h4>
                    <nav className="grid grid-cols-1 gap-2">
                      {headings.map((heading, idx) => (
                        <a key={idx} href={`#${heading.id}`} className="text-sm text-primary underline decoration-primary/20 underline-offset-4">
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                <div className="prose prose-lg prose-emerald max-w-none text-on-surface-variant 
                  prose-headings:font-headline prose-headings:text-primary 
                  prose-p:leading-relaxed prose-p:mb-8
                  prose-img:rounded-3xl prose-img:shadow-xl">
                  <PortableText value={post.content || post.body || []} components={portableTextComponents} />
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="mt-32 pt-16 border-t border-outline-variant/30">
                    <h3 className="font-headline font-black text-3xl text-primary mb-10">You might also like</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {relatedPosts.map((rp) => (
                        <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                          <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all">
                            {rp.mainImage && <Image src={urlFor(rp.mainImage).width(600).height(340).url()} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />}
                          </div>
                          <h4 className="font-headline font-bold text-xl text-primary group-hover:text-primary-container transition-colors leading-tight">{rp.title}</h4>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Section */}
                <div className="mt-32 p-8 md:p-12 rounded-3xl bg-primary text-on-primary shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container/20 rounded-full -ml-32 -mb-32 blur-3xl" />
                  
                  <div className="relative z-10">
                    <h2 className="font-headline font-bold text-3xl md:text-4xl mb-6 leading-tight">
                      Ready to build your growth engine?
                    </h2>
                    <p className="text-on-primary/80 text-lg mb-10 max-w-xl leading-relaxed">
                      We help businesses build high-performance websites and AI automation that actually creates leads.
                    </p>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-primary font-bold text-lg hover:bg-secondary-container transition-all"
                    >
                      Get Free Consultation
                      <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedArticle>
      </article>
    </main>
  );
}
