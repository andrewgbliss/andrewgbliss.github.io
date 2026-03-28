import { Metadata } from "next";
import { website } from "@/lib/website";
import { SignupForm } from "./_components/SignupForm";

export const metadata: Metadata = {
  title: `${website.name} - Sign Up`,
  description: "Create a new account",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return <SignupForm />;
}
