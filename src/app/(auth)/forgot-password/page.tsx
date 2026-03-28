import { Metadata } from "next";
import { website } from "@/lib/website";
import { ForgotPasswordForm } from "./_components/ForgotPasswordForm";

export const metadata: Metadata = {
  title: `${website.name} - Forgot Password`,
  description: "Forgot your password?",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
