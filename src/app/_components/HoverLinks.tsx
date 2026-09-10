"use client";

import Link from "next/link";
import { defaultResumeHref } from "@/lib/resume";
import { website } from "@/lib/website";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "@/components/buttons/dark-mode-toggle";
import { useRef } from "react";
import { TypingWords } from "./TypingWords";
import { mainPortfolio } from "@/lib/portfolio/main_portfolio";

export type HomePost = {
  slug: string;
  title: string;
  date: string;
  tagline: string;
};

type SiteLink = {
  href: string;
  label: string;
  variant: "primary" | "outline";
};

const siteLinks: Array<SiteLink> = [
  {
    href: "/storybook",
    label: "Story Book",
    variant: "primary",
  },
  {
    href: "https://github.com/andrewgbliss",
    label: "GitHub",
    variant: "outline",
  },
  {
    href: "https://www.linkedin.com/in/andrewgbliss/",
    label: "LinkedIn",
    variant: "outline",
  },
  {
    href: defaultResumeHref,
    label: "Resume",
    variant: "outline",
  },
];

const linkButtonClass = {
  primary:
    "inline-flex min-h-11 items-center justify-center border border-black bg-black px-4 py-2 text-sm font-medium text-white dark:border-white dark:bg-white dark:text-black sm:min-h-0",
  outline:
    "inline-flex min-h-11 items-center justify-center border border-black bg-transparent px-4 py-2 text-sm font-medium text-black dark:border-white dark:text-white sm:min-h-0",
} as const;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export function HoverLinks({ posts }: { posts: HomePost[] }) {
  const topRef = useRef<HTMLDivElement>(null);
  const featuredProject = mainPortfolio.projects[0];

  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 text-black dark:bg-black dark:text-gray-100">
      <div ref={topRef} className="mx-auto max-w-2xl px-5 py-10 sm:py-16">
        <header className="border-b-2 border-black pb-8 dark:border-white">
          <div className="flex items-start gap-5">
            <img
              src="/andy.jpg"
              alt="Andrew Bliss"
              className="h-28 w-28 shrink-0 object-cover object-[center_20%] sm:h-36 sm:w-36"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h1 className="font-serif text-3xl leading-tight sm:text-5xl">
                  Andrew Bliss
                </h1>
                <DarkModeToggle />
              </div>
              <p className="mt-3 text-base leading-relaxed sm:text-lg">
                Experienced software engineer with a track record of many
                shipped successful web apps using React, TypeScript, Node.js,
                and PostgreSQL. Developer who likes to code, solve hard
                problems, has empathy to help anyone and mentor people.
              </p>
              <nav className="mt-4 flex flex-wrap gap-2">
                {siteLinks.map(({ href, label, variant }) => (
                  <Link
                    key={href}
                    href={href}
                    className={linkButtonClass[variant]}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <section className="border-b border-black py-6 dark:border-white">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-serif text-xl sm:text-2xl">
              <Link href="/portfolio">Portfolio</Link>
            </h2>
            <Link
              href="/portfolio"
              className="text-sm underline-offset-4 hover:underline"
            >
              See portfolio
            </Link>
          </div>

          {featuredProject ? (
            <article className="flex gap-4">
              <a href={featuredProject.url} className="shrink-0">
                <img
                  src={featuredProject.image}
                  alt=""
                  className="h-20 w-28 object-cover sm:h-24 sm:w-36"
                />
              </a>
              <div className="min-w-0">
                <h3 className="font-serif text-lg leading-snug">
                  <a href={featuredProject.url} className="hover:underline">
                    {featuredProject.name}
                  </a>
                </h3>
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>
            </article>
          ) : null}
        </section>

        <section className="py-10">
          <div className="mb-8 flex items-baseline justify-between border-b border-black pb-3 dark:border-white">
            <h2 className="font-serif text-2xl sm:text-3xl">
              <Link href="/articles">Writing</Link>
            </h2>
            <Link
              href="/articles"
              className="text-sm underline-offset-4 hover:underline"
            >
              All articles
            </Link>
          </div>

          <ol className="divide-y divide-black dark:divide-white">
            {posts.map((post) => (
              <li key={post.slug} className="py-8 first:pt-0">
                <article>
                  <time
                    dateTime={post.date}
                    className="text-xs uppercase tracking-widest"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h3 className="mt-2 font-serif text-2xl leading-snug sm:text-3xl">
                    <Link
                      href={`/articles/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base leading-relaxed">
                    {post.tagline}
                  </p>
                  <p className="mt-4 text-sm">
                    <Link
                      href={`/articles/${post.slug}`}
                      className="underline underline-offset-4"
                    >
                      Read
                    </Link>
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <footer>
        <div className="mx-auto max-w-2xl px-5 py-10">
          <p className="font-serif text-xs uppercase tracking-[0.25em]">
            Links
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
          <div className="mt-8 flex items-end justify-between gap-4 border-t border-black pt-6 text-sm dark:border-white">
            <div>
              <p>
                &copy; {new Date().getFullYear()} {website.name}. All rights
                reserved.
              </p>
              <p className="mt-1">
                powered with Next.js, React, TypeScript, Tailwind, Shadcn, and
                PostgreSQL.
              </p>
            </div>
            <Button
              variant="outline"
              size="xl"
              className="rounded-none border-black text-black hover:bg-transparent dark:border-white dark:text-white"
              onClick={handleScrollToTop}
            >
              Top
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
