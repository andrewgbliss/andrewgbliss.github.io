import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-[500px] px-8 py-6 flex flex-col items-center justify-center text-card-foreground">
      <Card className="w-full max-w-md p-8 mx-auto border-0">
        <div className="space-y-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Signup Successful
          </h1>
          <p className="text-muted-foreground">
            Thanks for signing up! Please check your email inbox to confirm your
            account before you can log in.
          </p>
          <div className="flex justify-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
