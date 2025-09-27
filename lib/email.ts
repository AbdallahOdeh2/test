import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface sendEmailValues {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail({ to, subject, text }: sendEmailValues) {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // Use Resend's testing email
      to,
      subject,
      text,
    });
    console.log("Email sent:", response);
    return { success: true, data: response };
  } catch (err) {
    console.error("Failed to send email:", err);
  }
}
