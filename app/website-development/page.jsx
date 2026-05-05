import SeoPage from '@/components/SeoPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'High Performance Website Development',
  description: 'High-performance website development for businesses that need faster pages, clearer UX, and more qualified leads from their website.',
  path: '/website-development',
});

export default function WebsiteDevelopmentPage() {
  return (
    <SeoPage
      breadcrumb="Website Development"
      hero={{
        eyebrow: 'Website Development',
        title: 'Websites that generate leads, not just look good',
        description: 'A beautiful website is not enough if it loads slowly, confuses visitors, or fails to turn attention into enquiries. WebTantu builds fast, clear, conversion-focused websites designed to support real business growth.',
      }}
      problems={[
        { title: 'Slow pages lose trust', description: 'Visitors decide quickly. If your site feels heavy or unstable, they leave before your offer has a chance to work.' },
        { title: 'Poor UX blocks action', description: 'Most websites fail because users cannot quickly understand what you do, why it matters, or what to do next.' },
        { title: 'Good traffic gets wasted', description: 'Without strong messaging, proof, and focused CTAs, even qualified visitors turn into missed opportunities.' },
      ]}
      sections={[
        {
          title: 'Built around speed, clarity, and conversion',
          description: 'We design and develop websites around how people actually make decisions, from first impression to final enquiry.',
          items: [
            { icon: 'ads_click', title: 'Landing pages', description: 'Focused pages for campaigns, offers, launches, and consultations where every section moves visitors toward one action.' },
            { icon: 'business', title: 'Business websites', description: 'Clear service pages, trust-building content, and simple navigation that make your business easier to choose.' },
            { icon: 'dashboard', title: 'SaaS dashboards', description: 'Clean dashboard experiences for products and internal tools where speed, usability, and clarity matter every day.' },
          ],
        },
        {
          title: 'Performance is part of the strategy',
          description: 'Speed is not a technical extra. It affects trust, search visibility, paid campaign performance, and the number of people who complete your forms.',
          items: [
            { icon: 'speed', title: 'Fast first impression', description: 'Important content loads quickly so visitors can understand your offer without waiting.' },
            { icon: 'view_quilt', title: 'Stable experience', description: 'Layouts stay steady across devices, preventing frustrating jumps and broken mobile experiences.' },
            { icon: 'touch_app', title: 'Responsive interactions', description: 'Buttons, menus, forms, and animations feel smooth without getting in the way of action.' },
          ],
        },
      ]}
      benefits={['More leads from existing traffic', 'Faster pages on mobile', 'A website built around buyer decisions']}
      links={[
        { title: 'SEO Services', href: '/seo-services' },
        { title: 'Growth Systems', href: '/growth-systems' },
      ]}
    />
  );
}
