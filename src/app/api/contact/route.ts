import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM || "Vantum Website <onboarding@resend.dev>";
const RESEND_TO = "sam@vantumcap.com";

function isPlaceholder(value: string | undefined) {
  if (!value) return true;
  return value.includes("your_");
}

function hasResendConfig() {
  return Boolean(RESEND_API_KEY && !isPlaceholder(RESEND_API_KEY));
}

export async function POST(request: Request) {
  try {
    if (!hasResendConfig()) {
      return NextResponse.json({ error: "Email service is not configured. Add RESEND_API_KEY in .env.local." }, { status: 500 });
    }

    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const resend = new Resend(RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: RESEND_FROM,
      to: [RESEND_TO],
      subject: "Website Inquiry",
      replyTo: email,
      text: `New website inquiry\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>New website inquiry</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ error: "Unable to send message. Verify your Resend API key/domain setup." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json({ error: "Unable to send message. Check server logs for details." }, { status: 500 });
  }
}
