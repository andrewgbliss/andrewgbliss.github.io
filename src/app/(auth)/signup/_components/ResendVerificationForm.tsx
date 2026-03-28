"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ResendVerificationForm({
  verificationToken,
}: {
  verificationToken: string;
}) {
  const [success, setSuccess] = useState(false);

  const handleClick = async () => {
    try {
      console.log(verificationToken);
      setSuccess(true);
    } catch (error) {
      console.error("Failed to resend verification:", error);
    }
  };

  return (
    <div className="w-full max-w-md p-8">
      <div className="space-y-6 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Verification Expired
        </h1>
        {success ? (
          <div className="mb-4 p-3 rounded bg-green-100 border border-green-400 text-green-700">
            Please check your email inbox to confirm your account.
          </div>
        ) : (
          <>
            <p className="text-muted-foreground">
              The verification time limit for your email address has expired.
              Click below to resend the verification email.
            </p>
            <div className="flex justify-center">
              <Button onClick={handleClick}>Resend Email</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
