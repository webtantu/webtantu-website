import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-04-29';

export const sanityConfigured = Boolean(projectId) && !projectId.includes('your-project-id');

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return source ? builder.image(source) : null;
}

const postFields = `{
  ...,
  "slug": slug.current
}`;

const demoPosts = [
  {
    title: 'How High Performance Website Development Improves Conversions',
    slug: 'high-performance-website-development-conversions',
    description: 'Learn how fast loading, stable layouts, clear page structure, and Core Web Vitals support better website conversion rates.',
    publishedAt: '2026-04-08',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'A high-performing website gives every growth channel a stronger base. Faster pages reduce friction, clearer sections improve comprehension, and stronger calls to action help visitors take the next step.' }],
      },
    ],
  },
  {
    title: 'SEO Services for Business Growth: What Matters First',
    slug: 'seo-services-business-growth',
    description: 'A practical breakdown of keyword research, technical SEO, on-page content, and internal linking for growing businesses.',
    publishedAt: '2026-04-08',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Strong SEO starts with search intent. Businesses need service pages that match high-value queries, content that supports buyer education, and technical foundations that search engines can crawl reliably.' }],
      },
    ],
  },
];

export async function getPosts() {
  if (!sanityConfigured) return demoPosts;
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) ${postFields}`);
}

export async function getPost(slug) {
  if (!sanityConfigured) return demoPosts.find((post) => post.slug === slug) || null;
  return client.fetch(`*[_type == "post" && slug.current == $slug][0] ${postFields}`, { slug });
}

export async function getRelatedPosts(currentSlug, limit = 3) {
  if (!sanityConfigured) return demoPosts.filter(p => p.slug !== currentSlug).slice(0, limit);
  return client.fetch(
    `*[_type == "post" && slug.current != $currentSlug] | order(publishedAt desc)[0...$limit] ${postFields}`,
    { currentSlug, limit }
  );
}
