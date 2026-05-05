import Breadcrumbs from '@/components/Breadcrumbs';
import ContactPageForm from '@/components/ContactPageForm';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import ContactPageHeroButtons from '@/components/ContactPageHeroButtons';
import { organizationJsonLd, serviceJsonLd } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact Us | WebTantu',
  description: 'Get in touch with WebTantu. Contact us for any inquiries, project discussions, or support related to our web development and digital growth services.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={[organizationJsonLd, ...serviceJsonLd]} />
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="Have a question or want to discuss a potential project? Drop us a line and our team will get back to you within 24 hours."
      >
        <ContactPageHeroButtons />
      </PageHero>
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-headline font-bold text-4xl mb-6 text-primary">Start with the problem</h2>
            <p className="text-lg text-on-surface-variant mb-8">
              Share your goal, your current setup, and where growth feels stuck. We will review it and respond with a practical direction, not a generic sales pitch.
            </p>
            <div className="space-y-4 text-on-surface-variant">
              <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">mail</span> connect@webtantu.com</p>
              <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">schedule</span> Mon-Fri, 9am - 6pm</p>
              <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">link</span> LinkedIn: WebTantu</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactPageForm />
          </div>
        </div>
      </section>
    </main>
  );
}
