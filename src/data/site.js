export const siteUrl = 'https://www.webtantu.com';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WebTantu',
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  email: 'connect@webtantu.com',
  sameAs: ['https://www.linkedin.com/company/webtantu/'],
  description:
    'WebTantu builds lead-focused websites, search visibility, AI automation, and growth systems for businesses that want measurable digital growth.',
};

export const services = [
  {
    title: 'Website Development',
    href: '/website-development',
    icon: 'language',
    keyword: 'High Performance Website Development',
    description:
      'Fast, conversion-focused websites built to explain your offer clearly, earn trust quickly, and turn visitors into qualified leads.',
  },
  {
    title: 'SEO Services',
    href: '/seo-services',
    icon: 'search_insights',
    keyword: 'SEO Services for Business Growth',
    description:
      'Search strategy, page improvements, and content planning that help the right people find your business when they are ready to act.',
  },
  {
    title: 'AI Automation',
    href: '/ai-automation',
    icon: 'psychology',
    keyword: 'AI Automation for Businesses',
    description:
      'Practical automations for leads, follow-ups, CRM updates, and repetitive work so your team moves faster without adding more admin.',
  },
  {
    title: 'Growth Systems',
    href: '/growth-systems',
    icon: 'hub',
    keyword: 'Digital Growth Systems',
    description:
      'A connected system that brings together your website, SEO, AI follow-up, and analytics so growth is easier to track and improve.',
  },
];

export const serviceJsonLd = services.map((service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  serviceType: service.keyword,
  provider: {
    '@type': 'Organization',
    name: 'WebTantu',
    url: siteUrl,
  },
  areaServed: 'Worldwide',
  url: `${siteUrl}${service.href}`,
  description: service.description,
}));

export const caseStudies = [
  {
    title: 'Legal Firm Lead Generation Engine',
    image: '/case-studies/legal.png',
    problem: 'A mid-sized legal practice had a traditional website that acted as a digital brochure but failed to convert search traffic into consultation bookings.',
    solution: 'WebTantu rebuilt the site architecture around practice areas, optimized for mobile speed, and implemented clear, trust-building consultation funnels.',
    results: ['73% increase in qualified form enquiries', '46% improvement in mobile page speed', '32% higher service-page engagement'],
  },
  {
    title: 'B2B Consulting SEO Growth Sprint',
    image: '/case-studies/consulting.png',
    problem: 'A management consultancy relied solely on referrals and had zero visibility for high-intent industry keywords, limiting their growth potential.',
    solution: 'We implemented a strategic content pillar system, optimized technical SEO for core services, and created a lead-capture flow for expert resources.',
    results: ['58% organic traffic growth in 90 days', '21 new first-page keyword positions', '39% increase in consultation bookings'],
  },
  {
    title: 'Real Estate CRM & Follow-Up Automation',
    image: '/case-studies/real-estate.png',
    problem: 'A busy real estate agency was losing leads due to slow manual follow-ups and a lack of centralized tracking for website inquiries.',
    solution: 'WebTantu integrated website forms directly into their CRM and built an automated qualification workflow to notify agents of high-priority leads instantly.',
    results: ['64% faster first response time', '11 hours saved per week on admin', '28% lift in booked discovery calls'],
  },
];
