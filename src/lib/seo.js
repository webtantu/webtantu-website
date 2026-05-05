import { siteUrl } from '@/data/site';

export function pageMetadata({ title, description, path, image = '/favicon.svg' }) {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'WebTantu',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
