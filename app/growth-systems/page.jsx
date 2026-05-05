import SeoPage from '@/components/SeoPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Digital Growth Systems by WebTantu',
  description: 'Digital growth systems that combine websites, SEO, AI automation, funnels, analytics, and conversion improvements into one lead engine.',
  path: '/growth-systems',
});

export default function GrowthSystemsPage() {
  return (
    <SeoPage
      breadcrumb="Growth Systems"
      hero={{
        eyebrow: 'Growth Systems',
        title: 'A system that continuously brings leads and growth',
        description: 'Growth becomes inconsistent when your website, SEO, follow-up, and analytics work separately. WebTantu connects them into one practical system built to attract, convert, and improve over time.',
      }}
      sections={[
        {
          title: 'One connected engine for digital growth',
          description: 'A growth system gives every part of your digital presence a role: attract the right visitors, guide them to action, follow up quickly, and learn from the data.',
          items: [
            { icon: 'campaign', title: 'Lead generation systems', description: 'Offers, service pages, lead magnets, and capture points designed around what buyers are already trying to solve.' },
            { icon: 'filter_alt', title: 'Funnels', description: 'Simple paths that move people from first visit to enquiry, consultation, proposal, or purchase.' },
            { icon: 'analytics', title: 'Analytics dashboards', description: 'Clear reporting that shows which pages, channels, and campaigns are creating real opportunities.' },
            { icon: 'percent', title: 'Conversion optimization', description: 'Better messaging, proof, CTAs, forms, and page flow based on how visitors behave.' },
            { icon: 'search', title: 'SEO integration', description: 'Search visibility that sends people to pages built to convert, not just inform.' },
            { icon: 'psychology', title: 'AI follow-up', description: 'Automation that responds faster, routes leads, updates records, and keeps prospects moving.' },
          ],
        },
      ]}
      benefits={['A repeatable lead flow', 'Clearer growth decisions', 'Website, SEO, and AI working together']}
      links={[
        { title: 'SEO Services', href: '/seo-services' },
        { title: 'AI Automation', href: '/ai-automation' },
      ]}
    />
  );
}
