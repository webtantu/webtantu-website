import SeoPage from '@/components/SeoPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'SEO Services for Business Growth',
  description: 'SEO services that help businesses rank for the right searches, bring qualified traffic, and turn organic visibility into leads.',
  path: '/seo-services',
});

export default function SeoServicesPage() {
  return (
    <SeoPage
      breadcrumb="SEO Services"
      hero={{
        eyebrow: 'SEO Services',
        title: 'SEO that brings traffic with buying intent',
        description: 'SEO is simple at its core: help the right people find your business when they are already searching for a solution. WebTantu builds search strategies that connect rankings to leads, not vanity traffic.',
      }}
      problems={[
        { title: 'The wrong people find you', description: 'Traffic means little if it does not match the services you sell or the customers you want.' },
        { title: 'Your best pages are unclear', description: 'Search engines and buyers both need simple page structure, focused content, and clear next steps.' },
        { title: 'Competitors own the answers', description: 'When your site does not answer buyer questions, competitors become the trusted option first.' },
      ]}
      sections={[
        {
          title: 'A practical SEO system for growth',
          description: 'We focus on the parts of SEO that move business results: choosing the right searches, improving important pages, publishing useful content, and guiding visitors toward action.',
          items: [
            { icon: 'manage_search', title: 'Keyword research', description: 'We find the searches that signal real demand, from service needs to comparison and problem-based queries.' },
            { icon: 'article', title: 'On-page SEO', description: 'We rewrite and structure pages so they are easier to understand, rank, and act on.' },
            { icon: 'settings_suggest', title: 'Technical SEO', description: 'We remove the issues that stop search engines from crawling, indexing, and trusting your key pages.' },
            { icon: 'edit_note', title: 'Content strategy', description: 'We plan articles and resources that support your services instead of publishing content with no purpose.' },
            { icon: 'link', title: 'Authority basics', description: 'We help build credibility through useful assets, profiles, partnerships, and natural linking opportunities.' },
            { icon: 'analytics', title: 'Lead-focused reporting', description: 'We track rankings and traffic, but the real focus is enquiries, calls, and qualified opportunities.' },
          ],
        },
      ]}
      benefits={['Rank for searches that matter', 'More qualified organic leads', 'Clearer pages that convert traffic']}
      links={[
        { title: 'Blog', href: '/blog' },
        { title: 'Website Development', href: '/website-development' },
      ]}
    />
  );
}
