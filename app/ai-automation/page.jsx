import SeoPage from '@/components/SeoPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'AI Automation for Businesses',
  description: 'AI automation for businesses that want faster lead response, cleaner workflows, CRM automation, and fewer repetitive manual tasks.',
  path: '/ai-automation',
});

export default function AiAutomationPage() {
  return (
    <SeoPage
      breadcrumb="AI Automation"
      hero={{
        eyebrow: 'AI Automation',
        title: 'AI automation that removes busywork from growth',
        description: 'AI should not feel like a science project. WebTantu builds practical automation for lead capture, follow-up, CRM updates, and repeatable tasks so your team can spend more time on work that actually moves the business.',
      }}
      problems={[
        { title: 'Manual work slows the team', description: 'Copying details, sending reminders, updating sheets, and chasing follow-ups quietly consume hours every week.' },
        { title: 'Leads go cold too fast', description: 'When response depends on memory or manual checking, interested prospects can lose momentum before anyone replies.' },
        { title: 'Tools do not talk to each other', description: 'Forms, inboxes, CRMs, and spreadsheets create messy handoffs when they are not connected.' },
      ]}
      sections={[
        {
          title: 'Automation that fits how your business works',
          description: 'We start with the process, then connect the tools. The goal is simple: fewer missed steps, faster response, and cleaner operations.',
          items: [
            { icon: 'smart_toy', title: 'Lead chat and intake', description: 'Capture visitor questions, qualify interest, collect details, and route enquiries without making people wait.' },
            { icon: 'account_tree', title: 'Workflow automation', description: 'Send notifications, assign tasks, trigger follow-ups, and move information between tools automatically.' },
            { icon: 'contacts', title: 'CRM automation', description: 'Create leads, update stages, add notes, and remind your team when a prospect needs attention.' },
            { icon: 'auto_awesome', title: 'AI business assistants', description: 'Use AI to summarize enquiries, draft replies, organize information, and support repetitive internal tasks.' },
          ],
        },
        {
          title: 'Real use cases, not hype',
          description: 'The best automation is easy to understand: it saves time, prevents missed leads, and makes routine work more consistent.',
          items: [
            { icon: 'storefront', title: 'Small businesses', description: 'Answer common questions, capture enquiries, and send follow-up messages without hiring extra admin support.' },
            { icon: 'deployed_code', title: 'SaaS teams', description: 'Qualify demos, summarize feedback, support onboarding, and keep product requests organized.' },
            { icon: 'support_agent', title: 'Service businesses', description: 'Automate quote requests, consultation reminders, scheduling prompts, and post-call follow-up.' },
          ],
        },
      ]}
      benefits={['Faster lead response', 'Less manual admin', 'Cleaner CRM and follow-up']}
      links={[
        { title: 'Growth Systems', href: '/growth-systems' },
        { title: 'Contact WebTantu', href: '/contact' },
      ]}
    />
  );
}
