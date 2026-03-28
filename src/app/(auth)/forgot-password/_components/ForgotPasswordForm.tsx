"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const recoverySchema = z.object({
  email: z.string().email("Invalid email address"),
});

type RecoveryFormData = z.infer<typeof recoverySchema>;

interface FormState {
  error?: string;
  success?: boolean;
}

export function ForgotPasswordForm() {
  const form = useForm<RecoveryFormData>({
    resolver: zodResolver(recoverySchema),
    defaultValues: {
      email: "",
    },
  });

  const [state, setState] = React.useState<FormState | null>(null);
  const [isPending, setIsPending] = React.useState(false);

  const onSubmit = async (data: RecoveryFormData) => {
    setIsPending(true);
    try {
      // TODO: Implement recovery logic (API call, etc.)
      console.log(data);
      setState({ success: true });
    } catch (error) {
      console.error(error);
      setState({ error: "There was an error processing your request." });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-[500px] text-card-foreground px-8 py-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>
        {state?.error && (
          <div className="mb-4 p-3 rounded bg-red-100 border border-red-400 text-red-700">
            {state.error}
          </div>
        )}
        {state?.success ? (
          <div className="mb-4 p-3 rounded bg-green-100 border border-green-400 text-green-700">
            If an account exists for this email, a password reset link has been
            sent.
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 motion-safe:animate-[spin_1s_linear_infinite]" />
                    Sending password reset link...
                  </>
                ) : (
                  "Send Password Reset Link"
                )}
              </Button>
            </form>
          </Form>
        )}
        <p className="mt-4 text-center text-sm">
          Remember your password?{" "}
          <Link
            href="/login"
            className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
