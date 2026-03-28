"use client";

import { useActionState, startTransition } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
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
import { useRouter } from "next/navigation";

const signupSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

interface FormState {
  error?: string;
}

export function SignupForm() {
  const router = useRouter();
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [state, formAction, isPending] = useActionState<
    FormState | null,
    FormData
  >(async (prevState, formData) => {
    try {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      console.log(email, password);
      router.push("/signup/success");
      return { success: true };
    } catch (error: unknown) {
      console.error(error);
      return {
        error:
          (error as { message?: string })?.message ||
          "There was an error signing up.",
      };
    }
  }, null);

  const onSubmit = (data: SignupFormData) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="min-h-[500px] px-8 py-6 flex flex-col items-center justify-center text-card-foreground">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 ">Sign Up</h1>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </Form>
        <p className="mt-4 text-center text-sm ">
          Already have an account?{" "}
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
