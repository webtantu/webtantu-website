import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProblemSolution from '@/components/ProblemSolution';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import JsonLd from '@/components/JsonLd';
import { organizationJsonLd, serviceJsonLd } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'WebTantu | Build, Grow & Automate Online',
  description: 'Build high-performance websites, SEO growth systems, and AI automation with WebTantu. Get scalable digital systems that convert leads.',
  path: '/',
});

export default function HomePage() {
  return (
    <main>
      <JsonLd data={[organizationJsonLd, ...serviceJsonLd]} />
      <Hero />
      <Services />
      <Features />
      <ProblemSolution />
      <Process />
      <About />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
