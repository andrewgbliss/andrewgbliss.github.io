---
slug: "nextjs-user-login"
date: "2025-04-13"
title: "NextJS User login"
tagline: "Learn how to implement secure user login in your NextJS application"
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/brand/NEXTJS/icon/dark-background/nextjs-icon-dark-background.svg"
published: false
tags: ["nextjs"]
---

This article is the second in a series of articles that will go through building a basic auth system for NextJs.

If you haven't read the first article about user signup please have a look here:

[NextJS User Signup](/articles/nextjs-user-signup)

## Login Page

First let's create a login page. This is pretty much the same thing as the signup page with branding, however it shows a login form instead of a signup form.

```js
import { Metadata } from "next";
import { website } from "@/lib/data/website";
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
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative hidden md:flex items-center justify-center bg-slate-900 p-8">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="relative space-y-6 text-center">
              <h1 className="text-4xl font-bold text-white tracking-tight">
                {website.name}
              </h1>
              <div className="mx-auto h-28 w-28 rounded-xl bg-white/10 p-4 ring-2 ring-white/30">
                <svg
                  className="h-full w-full text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    strokeWidth="1.5"
                  />
                  <path d="M2 7h20" strokeWidth="1.5" />
                  <rect x="4" y="9" width="16" height="6" strokeWidth="1.5" />
                  <path d="M8 20h8" strokeWidth="1.5" />
                  <path d="M12 17v3" strokeWidth="1.5" />
                  <circle cx="5" cy="5" r="0.5" fill="currentColor" />
                  <circle cx="8" cy="5" r="0.5" fill="currentColor" />
                  <circle cx="11" cy="5" r="0.5" fill="currentColor" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">
                  Join Our Developer Community
                </h2>
                <p className="text-sm text-white/80 max-w-sm mx-auto">
                  Connect with fellow developers, access exclusive resources,
                  and stay up to date with the latest in development
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-8 bg-white">
            <div className="md:hidden mb-8 text-center">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {website.name}
              </h1>
              <p className="text-sm text-slate-600">
                Join our developer community
              </p>
            </div>
            <LoginForm />
            <div className="mt-6 text-center text-xs text-slate-400">
              <p>
                © {new Date().getFullYear()} {website.shortUrl}. All rights
                reserved.
              </p>
              <div className="mt-1 flex justify-center gap-4">
                <a href="/privacy" className="text-slate-400">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-slate-400">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Login Form

Now let's create the actual login form that will handle validation and a form submit.

```js
"use client";

import { handleLoginForm } from "@/app/(auth)/actions/login";
import { useActionState, startTransition } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface FormState {
  error?: string;
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [state, formAction, isPending] = useActionState<
    FormState | null,
    FormData
  >(async (prevState, formData) => {
    try {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const redirectTo = formData.get("redirectTo") as string;
      await handleLoginForm(email, password, redirectTo);
      return null;
    } catch (error) {
      return { error: (error as Error).message };
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
    <div className="min-h-[500px] bg-white dark:bg-slate-800 px-8 py-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-slate-900 dark:text-white">
          Login
        </h1>
        {state?.error && (
          <div className="mb-4 p-3 rounded bg-red-100 border border-red-400 text-red-700">
            {state.error}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            Sign in
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
```

Just like the signup form we will use `react-hook-form` and `zod` for validation.

## Server Action

Now let's create our server action which will check the database and compare passwords. Then it will sign the jwt if everything goes well and login us in.

```js
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authJwt, AuthJwtPayload } from "@/lib/auth/authJwt";
import { authDb } from "@/lib/auth/authDb";

export async function handleAuthJwt(payload: AuthJwtPayload) {
  const token = await authJwt(payload);
  const cookieStore = await cookies();
  cookieStore.set(process.env.AUTH_COOKIE_NAME || "user-session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: parseInt(process.env.AUTH_COOKIE_MAX_AGE || "604800"),
  });
}

export async function handleLoginForm(
  email: string,
  password: string,
  redirectTo: string
) {
  const payload = await authDb(email, password);
  await handleAuthJwt(payload);
  redirect(redirectTo);
}
```

## Database Credential Strategy

Now let's create the function that will actuall check the database.

```js
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createHash } from "crypto";

export async function authDb(email: string, password: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)
    .then((rows) => rows[0]);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  if (!user.verified) {
    throw new Error("Account not verified");
  }

  if (user.deletedAt) {
    throw new Error("Account deleted");
  }

  const hashedPassword = createHash("sha256").update(password).digest("hex");

  if (hashedPassword !== user.password) {
    throw new Error("Invalid credentials");
  }

  return {
    id: user.id,
    email: user.email,
  };
}
```

## Conclusion

In this article, we've implemented a secure user login system for Next.js applications. We covered:

- Creating a polished login page with responsive design
- Building a login form with client-side validation using React Hook Form and Zod
- Implementing secure password checking against hashed credentials in the database
- Handling various authentication states (unverified accounts, deleted accounts)
- Setting up JWT-based session management with HTTP-only cookies

The code provides a solid foundation for user authentication that follows security best practices:

- Never storing or transmitting plain text passwords
- Using cryptographic hashing for password verification
- Implementing proper error handling and user feedback
- Securing sessions with HTTP-only cookies
- Protecting against common authentication vulnerabilities

You can build upon this implementation to add features like:

- Password reset functionality
- Remember me option
- Multi-factor authentication
- OAuth integration
- Session management and logout

For the complete authentication flow, make sure to check out the user signup article as well.

Continue to the next article about user authentication here:

[NextJS User Authentication](/articles/nextjs-user-authentication)
