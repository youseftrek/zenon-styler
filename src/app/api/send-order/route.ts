import { Resend } from "resend";

import { NextResponse } from "next/server";
import EmailTemplate from "../../../../emails/EmailTamplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const orderData = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Zenon Store <onboarding@resend.dev>",
      to: ["zenon.orders@gmail.com"],
      subject: "📦New Order | Zenon Styler",
      react: EmailTemplate(orderData) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
