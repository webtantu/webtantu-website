import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import JsonLd from './JsonLd';
import PageHero from './PageHero';
import { CtaBand, SectionGrid } from './SectionGrid';
import { organizationJsonLd, serviceJsonLd } from '@/data/site';

export default function SeoPage({ breadcrumb, hero, problems, sections, benefits, links = [] }) {
  return (
    <main>
      <JsonLd data={[organizationJsonLd, ...serviceJsonLd]} />
      <Breadcrumbs items={[{ label: breadcrumb }]} />
      <PageHero {...hero} />
      {problems && (
        <section className="py-24 bg-primary text-on-primary px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-on-primary-container font-bold uppercase tracking-widest mb-10">Where growth breaks down</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem) => (
                <article key={problem.title}>
                  <span className="material-symbols-outlined text-error mb-4">cancel</span>
                  <h2 className="text-2xl font-headline font-bold mb-3">{problem.title}</h2>
                  <p className="text-on-primary-container/80">{problem.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {sections.map((section) => (
        <SectionGrid key={section.title} {...section} />
      ))}
      {benefits && (
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline font-bold text-4xl mb-12 text-primary">Outcomes you can measure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="bg-surface-container-lowest p-8 rounded-2xl">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-5">check_circle</span>
                  <h3 className="font-bold text-xl">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {links.length > 0 && (
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline font-bold text-3xl mb-6 text-primary">Build the next part of your system</h2>
            <div className="flex flex-wrap gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="px-5 py-3 rounded-xl bg-surface-container-low text-primary font-bold hover:bg-secondary-container transition-colors">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand title="Turn your digital presence into a growth channel" description="Book a free consultation and get a clear plan for the website, SEO, automation, or growth system your business needs next." />
    </main>
  );
}
