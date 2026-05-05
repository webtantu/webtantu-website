import { getPosts } from '@/lib/sanity';

const baseUrl = 'https://www.webtantu.com';

const routes = [
  '',
  '/services',
  '/website-development',
  '/seo-services',
  '/ai-automation',
  '/growth-systems',
  '/case-studies',
  '/blog',
  '/about',
  '/contact',
];

export default async function sitemap() {
  const posts = await getPosts();
  const pages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...pages, ...blogPosts];
}
