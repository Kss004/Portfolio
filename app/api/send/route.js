import { NextResponse } from "next/server";
import { Resend } from "resend";

let resend;

function getClient() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function POST(req) {
  const client = getClient();
  if (!client) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  try {
    const { email, subject, message } = await req.json();

    const { data, error } = await client.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.PORTFOLIO_OWNER_EMAIL || "shashwat.sandilya@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      reply_to: email,
      text: `From: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
