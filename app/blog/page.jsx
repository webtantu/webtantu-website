import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import AnimatedBlogList from '@/components/AnimatedBlogList';
import { organizationJsonLd, serviceJsonLd } from '@/data/site';
import { getPosts, urlFor } from '@/lib/sanity';
import { pageMetadata } from '@/lib/seo';

export const revalidate = 300; // Optimized ISR: Revalidate every 5 minutes

export const metadata = pageMetadata({
  title: 'WebTantu Blog for SEO and AI Growth',
  description: 'Explore the WebTantu knowledge hub for practical guidance on website performance, SEO, AI automation, and digital growth systems.',
  path: '/blog',
});

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <JsonLd data={[organizationJsonLd, ...serviceJsonLd]} />
      <Breadcrumbs items={[{ label: 'Blog' }]} />
      <PageHero
        eyebrow="Knowledge Hub"
        title="Practical insights for websites, SEO, AI, and growth"
        description="The WebTantu blog is built for business owners and teams who want clearer decisions, better digital systems, and fewer guesses about what actually creates leads."
      />
      
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedBlogList posts={posts} />
        </div>
      </section>
    </main>
  );
}
