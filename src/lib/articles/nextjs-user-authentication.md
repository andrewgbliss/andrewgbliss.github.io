---
slug: "nextjs-user-authentication"
date: "2025-05-01"
title: "NextJS User authentication"
tagline: "Learn how to implement secure user authentication in your NextJS application"
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/brand/NEXTJS/icon/dark-background/nextjs-icon-dark-background.svg"
published: false
tags: ["nextjs"]
---

This article is the third in a series of articles that will go through building a basic auth system for NextJs.

If you haven't read the second article about user login please have a look here:

[NextJS User Login](/articles/nextjs-user-login)

## Authenticated Page

Now we have a signup and login process we can now check if the user is logged into our system.

Let's make a page that checks if the user is logged in. If they are not we will send them to the login page.

```js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUser } from "@/app/(auth)/actions/get-user";
import { logout } from "../actions/logout";

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col gap-8 mt-28">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border-2 border-white shadow-lg">
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="text-right">
              <p className="font-medium text-white">{user.email}</p>
              <p className="text-sm text-gray-300">
                Member since {user.joinedDate}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="backdrop-blur-sm bg-white/10 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-gray-200">
                  <span>Total Projects</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex items-center justify-between text-gray-200">
                  <span>Active Tasks</span>
                  <span className="font-bold">5</span>
                </div>
                <div className="flex items-center justify-between text-gray-200">
                  <span>Completed</span>
                  <span className="font-bold">24</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Track your recent activities and progress
                </p>
                <form action="/dashboard/activity">
                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    View Activity Log
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Customize your account preferences and security settings
                </p>
                <form action="/dashboard/settings">
                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Manage Settings
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          <Button onClick={logout}>Logout</Button>
        </div>
      </div>
    </div>
  );
}
```

## Get User Authentication Function

Now we have a page, we need to lock it down so only authenticated users should have access to it.

This will call a server action we have setup.

```js
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { unpackJwt } from "@/lib/auth/authJwt";

export async function getUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(process.env.AUTH_COOKIE_NAME || "user-session");

  if (!token) {
    redirect("/login");
  }

  const payload = await unpackJwt(token.value);

  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, payload.id as number))
    .limit(1)
    .then((rows) => rows[0]);

  if (!user) {
    redirect("/login");
  }

  if (!user.verified) {
    redirect("/login");
  }

  if (user.deletedAt) {
    redirect("/login");
  }

  return user;
}
```

If we don't even have a cookie with the JWT it will kick them out to the login page. If it does find the user it will then check if that user is verified and not deleted.

Now we can lock down any page by calling this function to get the user.

## Logout

Now let's create a logout server action that will delete the JWT.

```js
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(process.env.AUTH_COOKIE_NAME || "user-session");
  redirect("/login");
}
```

This will delete the cookie and redirect them to login.

## Conclusion

In this article, we've implemented a robust user authentication system for Next.js applications that:

- Securely verifies user sessions using JWT tokens stored in HTTP-only cookies
- Protects routes by requiring valid authentication
- Automatically redirects unauthenticated users to the login page
- Validates user account status (verified and not deleted)
- Provides a clean API for accessing the authenticated user in any server component

This authentication system provides a solid foundation that you can build upon for your Next.js applications. Combined with the signup and login flows from previous articles, you now have a complete and secure user authentication system.

If you haven't read the previous articles here is the list:

Continue to the next article about user authentication here:

[NextJS User Signup](/articles/nextjs-user-signup)

[NextJS User Login](/articles/nextjs-user-login)
