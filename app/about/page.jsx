import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { CtaBand, SectionGrid } from '@/components/SectionGrid';
import { organizationJsonLd, serviceJsonLd } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About WebTantu Digital Growth Studio',
  description: 'Learn why WebTantu exists: to help businesses build faster websites, better SEO visibility, practical automation, and real growth systems.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={[organizationJsonLd, ...serviceJsonLd]} />
      <Breadcrumbs items={[{ label: 'About' }]} />
      <PageHero
        eyebrow="About WebTantu"
        title="WebTantu exists because most businesses need more than a website"
        description="A website alone does not create growth. WebTantu helps businesses build the full digital system around it: clear positioning, fast pages, search visibility, lead capture, and practical automation."
      />
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <article>
            <h2 className="font-headline font-bold text-4xl mb-6 text-primary">Why WebTantu was built</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              WebTantu was created for businesses that are tired of digital work that looks busy but does not move the numbers. Many companies have a website, post content, and collect leads, but the pieces do not work together. We help turn those disconnected parts into a system that can actually support growth.
            </p>
          </article>
          <article>
            <h2 className="font-headline font-bold text-4xl mb-6 text-primary">How we think about growth</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We do not treat design, development, SEO, and automation as separate boxes to tick. Each part should help someone find you, understand you, trust you, contact you, and receive a faster response. That is the standard we build around.
            </p>
          </article>
        </div>
      </section>
      <SectionGrid
        title="What WebTantu stands for"
        items={[
          { icon: 'flag', title: 'Mission', description: 'Help businesses turn their digital presence into a lead-generating system that is fast, clear, measurable, and easier to manage.' },
          { icon: 'visibility', title: 'Vision', description: 'Make premium web, SEO, and automation thinking accessible to businesses that want growth without unnecessary complexity.' },
          { icon: 'speed', title: 'Performance first', description: 'Speed and clarity are not optional. They shape trust, search visibility, user experience, and conversion.' },
          { icon: 'psychology', title: 'Practical AI', description: 'Automation should save time and improve follow-up. If it does not solve a real workflow problem, it does not belong.' },
          { icon: 'trending_up', title: 'Growth before noise', description: 'We focus on the pages, searches, journeys, and automations most likely to create qualified opportunities.' },
          { icon: 'handshake', title: 'Clear collaboration', description: 'No vague strategy language. You get direct thinking, useful recommendations, and work tied to business outcomes.' },
        ]}
      />
      <CtaBand title="Build a digital system that works harder for your business" description="Book a free consultation and talk through what is slowing your website, visibility, follow-up, or growth." />
    </main>
  );
}
