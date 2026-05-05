import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-32 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-on-surface-variant">
        <li>
          <Link href="/" className="hover:text-primary">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.href || item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">{item.label}</Link>
            ) : (
              <span className="text-primary font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
