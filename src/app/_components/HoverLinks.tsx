"use client";

import Link from "next/link";
import { Briefcase, FileText, Mail, MapPin } from "lucide-react";
import { defaultResumeHref, resume } from "@/lib/resume";
import { website } from "@/lib/website";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

type SiteLink = {
  href: string;
  label: string;
  icon: typeof FileText;
  variant: "primary" | "outline";
};

const siteLinks: Array<SiteLink> = [
  {
    href: "/storybook",
    label: "Story Book",
    icon: Briefcase,
    variant: "primary",
  },
  {
    href: "https://github.com/andrewgbliss",
    label: "GitHub",
    icon: Briefcase,
    variant: "outline",
  },
  {
    href: "https://www.linkedin.com/in/andrewgbliss/",
    label: "LinkedIn",
    icon: Briefcase,
    variant: "outline",
  },
  {
    href: defaultResumeHref,
    label: "Resume",
    icon: Briefcase,
    variant: "outline",
  },
];

const linkButtonClass = {
  primary:
    "inline-flex min-h-11 items-center justify-center gap-2 bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors active:bg-zinc-950 sm:min-h-0 sm:px-5 sm:py-3",
  outline:
    "inline-flex min-h-11 items-center justify-center gap-2 border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 active:bg-zinc-100 sm:min-h-0 sm:px-5 sm:py-3",
} as const;

/** Placeholder first post until a real blog exists. */
const defaultBlogPost = {
  title: "This site: Next.js, React, and Tailwind on GitHub Pages",
  dateIso: "2026-03-28",
  dateLabel: "March 28, 2026",
  body: `I rebuilt my personal site as a Next.js app with React and Tailwind CSS so I can iterate on layout and content like any other product—components, routing, and static export fit naturally with hosting on GitHub Pages at andrewgbliss.github.io. The stack keeps the UI consistent and fast to change while I use the same repo for resumes, portfolio pages, and small experiments.`,
  repoHref: "https://github.com/andrewgbliss/andrewgbliss.github.io",
} as const;

export function HoverLinks() {
  const targetRef = useRef<HTMLDivElement>(null);
  const targetRef2 = useRef<HTMLDivElement>(null);
  const targetRef3 = useRef<HTMLDivElement>(null);

  const handleScroll = (e: any) => {
    // 2. Prevent the traditional href page refresh
    e.preventDefault();

    // 3. Smoothly scroll to the element
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll2 = (e: any) => {
    // 2. Prevent the traditional href page refresh
    e.preventDefault();

    // 3. Smoothly scroll to the element
    if (targetRef2.current) {
      targetRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll3 = (e: any) => {
    // 2. Prevent the traditional href page refresh
    e.preventDefault();

    // 3. Smoothly scroll to the element
    if (targetRef3.current) {
      targetRef3.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div ref={targetRef3} className="w-full pb-10">
      <div className="flex flex-col gap-5">
        <div className="bg-[url('/pexels-danny-meneses-340146-943096.jpg')] bg-cover bg-center h-screen">
          <div className="flex sm:flex-row flex-col gap-5 py-10 max-w-4xl px-5 ">
            <div className="text-white gap-5 flex flex-col">
              <h3 className="text-4xl">Welcome,</h3>
              <p className="text-xl">
                You have stumbled onto my professional website. Dreams of
                conduct of code.
              </p>
              <p className="text-lg">
                <Button className="text-lg" size={"xl"} onClick={handleScroll}>
                  Click here to start 👉
                </Button>
              </p>
            </div>
          </div>
        </div>
        <div ref={targetRef} className="">
          <div className="flex flex-col items-center py-10 gap-10">
            <div className="flex sm:flex-row flex-col gap-5 items-center py-10">
              <img
                src="/hover-illustration.svg"
                className="w-50 sm:w-100  border-2 rounded-2xl"
              />
              <div className="sm:w-120 flex flex-col gap-5 p-5 sm:justify-start sm:items-start justify-center items-center">
                <p className="sm:text-4xl text-2xl">Let's work together!</p>
                <p>
                  Experienced Full Stack Developer. Background in web
                  development, apps, mobile, with a track record in optimized,
                  responsive design. You can find my contact information below.
                </p>
                <Button size={"xl"} onClick={handleScroll2}>
                  Contact Info 👉
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
              <Card>
                <CardHeader>
                  <a href="https://andrewgbliss.itch.io/godot-weather">
                    <img
                      src="https://img.itch.zone/aW1nLzI2OTk5Njc2LnBuZw==/315x250%23c/TKN80F.png"
                      className="rounded-xl w-full"
                    />
                  </a>
                </CardHeader>
                <CardContent>
                  <div className="">
                    <a href="https://andrewgbliss.itch.io/godot-weather">
                      <h3 className="text-2xl pb-2">Godot Weather</h3>
                    </a>
                    <p>
                      Weather simulation for different weather types in Godot.
                      Since it uses gpu particles it works best on an actual app
                      rather than a web export.
                    </p>
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <a href="https://andrewgbliss.itch.io/pixel-ui">
                    <img
                      src="https://img.itch.zone/aW1nLzI2OTE5Mzg0LnBuZw==/315x250%23c/BxVVZ9.png"
                      className="rounded-xl  w-full"
                    />
                  </a>
                </CardHeader>
                <CardContent>
                  <div className="">
                    <a href="https://andrewgbliss.itch.io/pixel-ui">
                      <h3 className="text-2xl pb-2">UI Asset Packs</h3>
                    </a>
                    <p>
                      This pack has all in one UI images. Everything comes with
                      the png and aseprite files.
                    </p>
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2
                    id="card-heading"
                    className="text-xs font-medium uppercase tracking-widest text-zinc-500 pb-5"
                  >
                    Blog
                  </h2>
                  <h3 className="text-base font-semibold leading-snug text-zinc-950 sm:text-lg">
                    {defaultBlogPost.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-zinc-500">
                    <time dateTime={defaultBlogPost.dateIso}>
                      {defaultBlogPost.dateLabel}
                    </time>
                  </p>
                </CardHeader>
                <CardContent>
                  <article className="mt-4 max-w-full rounded-lg border border-zinc-200 bg-white px-5 py-5 sm:px-6 sm:py-6">
                    <header></header>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                      {defaultBlogPost.body}
                    </p>
                    <p className="mt-4 text-sm">
                      <a
                        href={defaultBlogPost.repoHref}
                        className="font-medium text-zinc-900 underline-offset-4 hover:underline"
                      >
                        View source on GitHub
                      </a>
                    </p>
                  </article>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>
          </div>
          <div className="bg-[url('/code1.jpeg')] bg-cover bg-center h-100"></div>
          <div ref={targetRef2} className="py-10 flex flex-col gap-10">
            <Card>
              <CardHeader>
                <div className="flex sm:flex-row flex-col gap-10 flex-wrap sm:items-center">
                  <img
                    src="/andy.jpg"
                    alt=""
                    className="aspect-5/4 max-h-[min(40vh,16rem)] w-50 object-cover object-[center_20%] sm:aspect-21/14 sm:max-h-full sm:object-[center_10%] rounded-xl"
                  />
                  <div>
                    <h1
                      id="intro-heading"
                      className="sm:mt-3 text-xl font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl sm:leading-[1.1]"
                    >
                      {website.name}
                    </h1>
                    <h2 className="mt-1 text-base font-medium text-zinc-800 sm:text-xl">
                      software, audio, create
                    </h2>
                  </div>

                  <nav className="flex flex-wrap gap-2 sm:gap-3">
                    {siteLinks.map(({ href, label, icon: Icon, variant }) => (
                      <Link
                        key={href}
                        href={href}
                        className={linkButtonClass[variant]}
                      >
                        <Icon
                          size={18}
                          className="shrink-0 opacity-90"
                          aria-hidden
                        />
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <h2
                  id="card-heading"
                  className="text-xs font-medium uppercase tracking-widest text-zinc-500"
                >
                  Contact
                </h2>
              </CardHeader>
              <CardContent>
                <div className="mt-4 px-5 py-6  sm:px-7 sm:py-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div className="min-w-0">
                      <p className="text-lg font-semibold text-zinc-950 sm:text-xl">
                        {resume.name}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-zinc-700">
                        {resume.bio}
                      </p>
                      <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-700">
                        <a
                          href={`mailto:${resume.email}`}
                          className="inline-flex w-fit items-center gap-2 text-zinc-900 underline-offset-4 hover:underline"
                        >
                          <Mail
                            size={16}
                            className="shrink-0 text-zinc-500"
                            aria-hidden
                          />
                          {resume.email}
                        </a>
                        <span className="inline-flex items-center gap-2 text-zinc-600">
                          <MapPin
                            size={16}
                            className="shrink-0 text-zinc-400"
                            aria-hidden
                          />
                          {resume.address.city}, {resume.address.state}
                        </span>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:items-end"></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <footer className="pt-10 px-5 text-sm font-semibold italic flex justify-between">
        <div>
          <p>Copyright &copy; {new Date().toLocaleDateString()}</p>
          <p className="">
            powered with Next.js, React, TypeScript, Tailwind, Shadcn, and
            PostgreSQL.
          </p>
        </div>
        <div className="flex justify-end">
          <Button variant={"outline"} size={"xl"} onClick={handleScroll3}>
            👆
          </Button>
        </div>
      </footer>
    </div>
  );
}
