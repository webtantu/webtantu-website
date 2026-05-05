import Link from 'next/link';

export default function PageHero({ eyebrow, title, description, ctaHref = '/contact', cta = 'Get Free Consultation', children }) {
  return (
    <section className="relative py-20 px-6 hero-gradient">
      <div className="max-w-7xl mx-auto">
        <p className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
          {eyebrow}
        </p>
        <h1 className="font-headline font-extrabold text-5xl lg:text-7xl leading-[1.1] text-primary tracking-tight mb-6 max-w-5xl">
          {title}
        </h1>
        <p className="text-lg text-on-surface-variant max-w-3xl mb-8 leading-relaxed">
          {description}
        </p>
        {children ? (
          <div className="flex flex-col sm:flex-row gap-4 mt-8 relative z-10">
            {children}
          </div>
        ) : (
          <Link href={ctaHref} className="inline-flex px-8 py-4 bg-primary-container text-on-primary rounded-xl font-bold shadow-lg hover:shadow-xl transition-all mt-8 relative z-10">
            {cta}
          </Link>
        )}
      </div>
    </section>
  );
}
