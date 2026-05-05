import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <main className="pt-40 pb-24 px-6 min-h-screen bg-surface">
      <section className="max-w-3xl mx-auto text-center">
        <p className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
          404
        </p>
        <h1 className="font-headline font-black text-5xl text-primary mb-6">Page not found</h1>
        <p className="text-lg text-on-surface-variant mb-8">
          The page you are looking for may have moved. Explore WebTantu services or return home.
        </p>
        <Link href="/" className="inline-flex px-8 py-4 bg-primary text-on-primary rounded-xl font-bold">
          Go Home
        </Link>
      </section>
    </main>
  );
}
