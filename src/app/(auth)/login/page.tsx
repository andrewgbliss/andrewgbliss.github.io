import { Metadata } from "next";
import { website } from "@/lib/website";
import { LoginForm } from "./_components/LoginForm";

export const metadata: Metadata = {
  title: `${website.name} - Login`,
  description: "Login to your account",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <div className="w-full">
      <div className="min-h-[500px] px-8 py-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center mb-6 ">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
