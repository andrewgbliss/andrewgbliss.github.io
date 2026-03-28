import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-[500px] px-8 py-6 flex flex-col items-center justify-center text-card-foreground">
      <Card className="w-full max-w-md p-8 mx-auto border-0">
        <div className="space-y-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Verification Failed
          </h1>
          <p className="text-muted-foreground">
            There was an error verifying your email address. The verification
            link may be invalid or expired.
          </p>
          <div className="flex justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
            >
              Back to Sign Up
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
