"use client";

import { useActionState, startTransition } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface FormState {
  error?: string;
}

interface LoginFormProps {
  onSuccess?: () => void;
  showSignup?: boolean;
}

export function LoginForm({ onSuccess, showSignup = true }: LoginFormProps) {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [state, formAction, isPending] = useActionState<
    FormState | null,
    FormData
  >(async (prevState, formData) => {
    try {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const redirectTo = formData.get("redirectTo") as string;
      console.log(email, password, redirectTo);
      onSuccess?.();
      return null;
    } catch (error) {
      console.error(error);
      return { error: "There was an error logging in." };
    }
  }, null);

  const onSubmit = (data: LoginFormData) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("redirectTo", "/dashboard");
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="w-full text-card-foreground flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        {state?.error && (
          <div className="mb-4 p-3 rounded bg-red-100 border border-red-400 text-red-700">
            {state.error}
          </div>
        )}
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 motion-safe:animate-[spin_1s_linear_infinite]" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </Form>
        {showSignup ? (
          <p className="mt-4 text-center text-sm ">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
              onClick={() => onSuccess?.()}
            >
              Sign up
            </Link>
          </p>
        ) : null}
        {showSignup ? (
          <p className="mt-4 text-center text-sm ">
            <Link
              href="/forgot-password"
              className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
              onClick={() => onSuccess?.()}
            >
              Forgot password?
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
