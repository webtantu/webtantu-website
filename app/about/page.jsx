import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import AboutAnimated from '@/components/AboutAnimated';
import { CtaBand } from '@/components/SectionGrid';
import { organizationJsonLd, serviceJsonLd } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About Our Digital Growth Studio',
  description: 'Learn why WebTantu exists: to help businesses build faster websites, better SEO visibility, practical automation, and real growth systems.',
  path: '/about',
});

const values = [
  { icon: 'flag', title: 'Mission', description: 'Help businesses turn their digital presence into a lead-generating system that is fast, clear, measurable, and easier to manage.' },
  { icon: 'visibility', title: 'Vision', description: 'Make premium web, SEO, and automation thinking accessible to businesses that want growth without unnecessary complexity.' },
  { icon: 'speed', title: 'Performance first', description: 'Speed and clarity are not optional. They shape trust, search visibility, user experience, and conversion.' },
  { icon: 'psychology', title: 'Practical AI', description: 'Automation should save time and improve follow-up. If it does not solve a real workflow problem, it does not belong.' },
  { icon: 'trending_up', title: 'Growth before noise', description: 'We focus on the pages, searches, journeys, and automations most likely to create qualified opportunities.' },
  { icon: 'handshake', title: 'Clear collaboration', description: 'No vague strategy language. You get direct thinking, useful recommendations, and work tied to business outcomes.' },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={[organizationJsonLd, ...serviceJsonLd]} />
      <Breadcrumbs items={[{ label: 'About' }]} />
      
      <AboutAnimated values={values} />

      <CtaBand 
        title="Build a digital system that works harder for your business" 
        description="Book a free consultation and talk through what is slowing your website, visibility, follow-up, or growth." 
      />
    </main>
  );
}

