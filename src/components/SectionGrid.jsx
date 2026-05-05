import Link from 'next/link';

export function SectionGrid({ title, description, items }) {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-headline font-bold text-4xl mb-4 text-primary">{title}</h2>
          {description && <p className="text-lg text-on-surface-variant max-w-3xl">{description}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="p-8 bg-surface-container-lowest rounded-2xl shadow-[0px_8px_16_rgba(0,52,43,0.04)] h-full">
              {item.icon && <span className="material-symbols-outlined text-primary mb-6 text-3xl">{item.icon}</span>}
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
              {item.href && (
                <Link href={item.href} className="inline-flex mt-6 text-primary font-bold text-sm hover:text-primary-container">
                  Learn more
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, description }) {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline font-black text-5xl mb-6 text-primary leading-tight">{title}</h2>
        <p className="text-xl text-on-surface-variant mb-12">{description}</p>
        <Link href="/contact" className="inline-flex px-10 py-5 bg-primary-container text-on-primary rounded-xl font-bold text-lg shadow-xl">
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}
