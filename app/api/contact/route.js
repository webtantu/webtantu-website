import { rateLimit } from '@/lib/rate-limit';

export async function POST(request) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  
  // Basic Same-Origin Security Check
  if (origin && !origin.includes(host) && process.env.NODE_ENV === 'production') {
    return Response.json({ error: 'Unauthorized origin' }, { status: 403 });
  }

  const ip = request.headers.get('x-forwarded-for') || 'anonymous';
  const { success } = await rateLimit(ip, 5, 60000); // 5 requests per minute

  if (!success) {
    return Response.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  const scriptUrl = process.env.CONTACT_SCRIPT_URL;
  const formSecret = process.env.FORM_SECRET;

  if (!scriptUrl || !formSecret) {
    return Response.json({ error: 'Contact form is not configured.' }, { status: 500 });
  }

  const incoming = await request.formData();
  
  // Honeypot check
  if (incoming.get('website_url')) {
    return Response.json({ ok: true }); // Silent fail for bots
  }

  const payload = new FormData();

  for (const [key, value] of incoming.entries()) {
    if (key !== 'website_url') {
      payload.append(key, value);
    }
  }

  payload.set('secret', formSecret);
  payload.set('sourceButton', incoming.get('sourceButton') || 'Contact');

  try {
    await fetch(scriptUrl, {
      method: 'POST',
      body: payload,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Unable to submit contact form.' }, { status: 502 });
  }
}
