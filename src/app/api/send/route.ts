import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
// ... (rest of the code trimmed for brevity, I should provide the full block)

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Resend API Key is missing on the server' },
        { status: 500 }
      );
    }

    console.log(`Sending email from ${name} (${email}) for ${service}`);

    const { data, error } = await resend.emails.send({
      from: 'SIORA Inquiry <onboarding@resend.dev>',
      to: [process.env.RECIPIENT_EMAIL || 'puneetkushwaha88@gmail.com'],
      subject: `New Inquiry from ${name} - ${service}`,
      replyTo: email,
      html: `
        <div style="font-family: serif; padding: 40px; background-color: #fcfaf7; color: #1a1a1a; max-width: 600px; margin: auto; border: 1px solid #e5e5e5;">
          <h1 style="font-size: 24px; letter-spacing: 0.2em; border-bottom: 2px solid #c5a059; padding-bottom: 20px; text-transform: uppercase;">New Inquiry Received</h1>
          
          <div style="margin-top: 30px; line-height: 1.8;">
            <p style="font-size: 12px; letter-spacing: 0.1em; color: #c5a059; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">From</p>
            <p style="font-size: 16px; margin: 0;">${name} (${email})</p>
          </div>

          <div style="margin-top: 20px; line-height: 1.8;">
            <p style="font-size: 12px; letter-spacing: 0.1em; color: #c5a059; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Phone Number</p>
            <p style="font-size: 16px; margin: 0;">${phone}</p>
          </div>

          <div style="margin-top: 20px; line-height: 1.8;">
            <p style="font-size: 12px; letter-spacing: 0.1em; color: #c5a059; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Service Requested</p>
            <p style="font-size: 16px; margin: 0;">${service}</p>
          </div>

          <div style="margin-top: 20px; line-height: 1.8;">
            <p style="font-size: 12px; letter-spacing: 0.1em; color: #c5a059; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Message</p>
            <p style="font-size: 16px; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 10px; color: #999; letter-spacing: 0.1em; text-align: center; text-transform: uppercase;">
            © 2026 SIORA INFRA & DESIGN
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message || 'Resend error occurred' }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (err) {
    console.error("API Route error:", err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
