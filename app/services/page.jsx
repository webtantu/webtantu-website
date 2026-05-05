import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { CtaBand, SectionGrid } from '@/components/SectionGrid';
import { organizationJsonLd, serviceJsonLd, services } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'WebTantu Services for Digital Growth',
  description: 'Explore WebTantu services for websites, SEO, AI automation, and growth systems built to attract leads and turn traffic into revenue.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={[organizationJsonLd, ...serviceJsonLd]} />
      <Breadcrumbs items={[{ label: 'Services' }]} />
      <PageHero
        eyebrow="WebTantu Services"
        title="Digital services built to turn attention into leads"
        description="Most businesses do not have a traffic problem alone. They have a system problem. WebTantu connects your website, SEO, automation, and conversion flow so more of the right people find you and take action."
      />
      <SectionGrid
        title="Choose the service your growth depends on next"
        description="Start with one priority or connect the full system. Every service is designed to remove friction between visibility, trust, lead capture, and follow-up."
        items={services.map((service) => ({
          title: service.title,
          description: service.description,
          href: service.href,
          icon: service.icon,
        }))}
      />
      <section className="py-24 px-6 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <article>
            <h2 className="font-headline font-bold text-3xl mb-4">Websites that convert</h2>
            <p className="text-on-primary-container">Your website should explain the offer fast, build confidence, and make the next step obvious on every device.</p>
          </article>
          <article>
            <h2 className="font-headline font-bold text-3xl mb-4">Search that brings buyers</h2>
            <p className="text-on-primary-container">SEO is not just rankings. It is showing up when people are already looking for the problem you solve.</p>
          </article>
          <article>
            <h2 className="font-headline font-bold text-3xl mb-4">Follow-up that does not slip</h2>
            <p className="text-on-primary-container">AI and CRM workflows help you respond faster, reduce manual work, and keep leads moving toward a decision.</p>
          </article>
        </div>
      </section>
      <CtaBand title="Build the growth system your business is missing" description="Get a free consultation and leave with a clear next step for your website, SEO, automation, or full growth flow." />
    </main>
  );
}
