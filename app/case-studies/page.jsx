import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { CtaBand } from '@/components/SectionGrid';
import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudies, organizationJsonLd, serviceJsonLd } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'WebTantu Case Studies and Results',
  description: 'Explore WebTantu case studies showing how better websites, SEO, AI automation, and growth systems improve leads and efficiency.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <main>
      <JsonLd data={[organizationJsonLd, ...serviceJsonLd]} />
      <Breadcrumbs items={[{ label: 'Case Studies' }]} />
      <PageHero
        eyebrow="Case Studies"
        title="Proof that better systems create better growth"
        description="These case studies show how WebTantu approaches common business problems: websites that do not convert, SEO that does not bring leads, and manual follow-up that slows revenue down."
      />
      <section className="py-24 px-6 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand 
        title="Your growth problem probably has a system behind it" 
        description="Get a free consultation and we will identify where your website, SEO, automation, or follow-up flow is costing you leads." 
      />
    </main>
  );
}
