import { Resend } from "resend";
import { NextResponse } from "next/server";
import EmailVerificationTemplate from "./EmailVerificationTemplate";

const resend = new Resend("re_4yyJobCa_JtcwVtcacofPzgtti5b5FZn8");
export async function POST(request: Request) {
  let { code, firstName } = await request.json();
  console.log(code, firstName)
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["emekaeric12@gmail.com"],
    subject: "Capital Bank Verification",
    react: EmailVerificationTemplate({ code, firstName }),
  });
  return NextResponse.json({ success: true, data: null, message: "Code Sent" }, { status: 200 });
}