const SEND_EMAIL_URL = 'https://aqqhbkroobfgenfvtgyf.supabase.co/functions/v1/send-email';

interface EmailOptions {
  subject: string;
  html: string;
}

export async function sendEmail({ subject, html }: EmailOptions): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(SEND_EMAIL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, html }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return { success: false, error: data?.error || `HTTP ${res.status}` };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: String(err) };
  }
}
