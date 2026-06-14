---
slug: "nextjs-user-signup-server-action"
date: "2025-04-13"
title: "NextJS User Signup Server Action"
tagline: "Creating as NextJS Server Action to create users"
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/brand/NEXTJS/icon/dark-background/nextjs-icon-dark-background.svg"
published: false
tags: ["nextjs", "server actions"]
---

## 3. Server Action

Now let's create our server action.

```js
"use server";

import { redirect } from "next/navigation";
import { updateUserVerificationToken, createUser } from "../_data/credentials";
import { sendSignupVerificationEmail } from "../_data/notifications/emails";

export async function handleSignupForm(email: string, password: string) {
  const user = await createUser(email, password);
  await sendSignupVerificationEmail(email, user.verificationToken);
  redirect("/login?credentials=true");
}

export async function handleResendVerification(token: string) {
  try {
    const user = await updateUserVerificationToken(token);
    await sendSignupVerificationEmail(user.email, user.verificationToken);
  } catch (error) {
    console.error(error);
    redirect("/signup/error");
  }
}

```

## 4. Data Layer

### Create User

Let's create the user.

```js
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createHash, randomBytes } from "crypto";

export async function createUser(email: string, password: string) {
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)
    .then((rows) => rows[0]);

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = createHash("sha256").update(password).digest("hex");
  const verificationToken = randomBytes(32).toString("hex");

  const user = await db.insert(users).values({
    email,
    password: hashedPassword,
    verificationToken,
    verificationTokenExpiresAt: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
    verified: false,
  }).returning();

  return user[0];
}
```

### Verify User

Now let's create a function to verify the user.

```js
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function verifyUser(verificationToken: string) {
  if (!verificationToken) {
    throw new Error("No verification token provided");
  }

  const user = await db
    .select()
    .from(users)
    .where(eq(users.verificationToken, verificationToken))
    .limit(1)
    .then((rows) => rows[0]);

  if (!user) {
    throw new Error("Invalid verification token");
  }

  if (user.verified) {
    throw new Error("User already verified");
  }

  if (
    user.verificationTokenExpiresAt &&
    user.verificationTokenExpiresAt < new Date()
  ) {
    throw new Error("Verification token expired");
  }

  const updatedUser = await db
    .update(users)
    .set({
      verified: true,
    })
    .where(eq(users.id, user.id))
    .returning();

  return updatedUser[0];
}
```

### Setting the auth cookie

```js
"use server";

import { cookies } from "next/headers";
import { sign } from "../_data/jwt";
import { JwtPayload } from "../_data/jwt/types";

export async function handleAuthJwt(payload: JwtPayload) {
  const token = await sign(payload);
  const cookieStore = await cookies();
  cookieStore.set(process.env.AUTH_COOKIE_NAME || "user-session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: parseInt(process.env.AUTH_COOKIE_MAX_AGE || "604800"),
  });
}
```

### Signing the JWT

```js
import { SignJWT, jwtVerify } from "jose";
import { JwtPayload } from "./types";

const JWT_MAX_AGE = process.env.JWT_MAX_AGE || 604800;
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "default-secret-key"
);

export async function sign(payload: JwtPayload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(JWT_MAX_AGE + "s")
    .sign(JWT_SECRET);
  return token;
}
```

## 5. Route Handler

The email being sent will contain the verification token. Once the user clicks on the button in the email to verify they will be brought to this route handler.

```js
import { NextRequest, NextResponse } from "next/server";
import { handleAuthJwt } from "../../../actions/login";
import { verifyUser } from "../../../_data/credentials";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ verificationToken: string }> }
) {
  const { verificationToken } = await params;
  try {
    const payload = await verifyUser(verificationToken);
    await handleAuthJwt(payload);
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } catch (error) {
    console.error("Verification error:", error);
    if (
      error instanceof Error &&
      error.message === "Verification token expired"
    ) {
      return NextResponse.redirect(
        new URL(`/signup/resend/${verificationToken}`, request.url)
      );
    }
    return NextResponse.redirect(new URL(`/signup/error`, request.url));
  }
}

```

## Verify the token

This will check the database and make sure we have a valid token. If not it will kick it back out to an error page. This will also handle a page where if they need to resend the email.

```js
export async function verifyUser(verificationToken: string) {
  if (!verificationToken) {
    throw new Error("No verification token provided");
  }

  const user = await db
    .select()
    .from(users)
    .where(eq(users.verificationToken, verificationToken))
    .limit(1)
    .then((rows) => rows[0]);

  if (!user) {
    throw new Error("Invalid verification token");
  }

  if (user.verified) {
    throw new Error("User already verified");
  }

  if (
    user.verificationTokenExpiresAt &&
    user.verificationTokenExpiresAt < new Date()
  ) {
    throw new Error("Verification token expired");
  }

  const updatedUser = await db
    .update(users)
    .set({
      verified: true,
    })
    .where(eq(users.id, user.id))
    .returning();

  return updatedUser[0];
}
```

## Conclusion

Continue to the next article about user login here:

[NextJS User Login](/articles/nextjs-user-login)
