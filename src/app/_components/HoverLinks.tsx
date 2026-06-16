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
import { TypingWords } from "./TypingWords";
import { motion, useInView } from "motion/react";

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

const blogPosts = [
  {
    title: "Making a React sliding animation with motion",
    dateLabel: "2026-06-16",
    body: `Modern websites have come a long way in animation. While a static website is just fine, adding animations can make your website feel more professional. However adding too many animations can make it feel clunky and confuse people. This article will go over how to make a simple react component using the package motion to create a sublte sliding animation.`,
    href: "/articles/making-a-react-sliding-animation-with-motion",
  },
  {
    title: "How to Create an Auto Coder Pad with React and Tailwind CSS",
    dateLabel: "2020-10-06",
    body: `I was on the Tailwind CSS website the other day, and I noticed they have an awesome auto coder pad on their main page. As the auto coder pad types it changes the css so you can see how to use Tailwind CSS to create styled components. So naturally I wanted to add it on my website.`,
    href: "/articles/how-to-create-an-auto-coder-pad-with-react-and-tailwind-css",
  },
  {
    title: "How to Build a Star Rating Component in React",
    dateLabel: "2020-10-26",
    body: `Chances are if you are developing a blog or a CMS you want the user to be able to rate articles or products. This will give you the ability to recommend products based on how popular a products has become. This article will go over how to build a Star Rating component in React.`,
    href: "/articles/how-to-build-a-star-rating-component-in-react",
  },
];

export function HoverLinks() {
  const targetRef = useRef<HTMLDivElement>(null);
  const targetRef3 = useRef<HTMLDivElement>(null);

  const handleScroll = (e: any) => {
    // 2. Prevent the traditional href page refresh
    e.preventDefault();

    // 3. Smoothly scroll to the element
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  return (
    <div ref={targetRef3} className="w-full">
      <div className="flex flex-col gap-5">
        <div className="bg-[url('/pexels-danny-meneses-340146-943096.jpg')] bg-cover bg-center h-screen">
          <div className="flex sm:flex-row flex-col gap-5 py-10 max-w-4xl px-5 ">
            <div className="text-white gap-5 flex flex-col">
              <motion.h3
                className="text-4xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Welcome Wanderer,
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                <TypingWords
                  className="text-xl"
                  startNow
                  text="You have stumbled onto the professional website of Andrew Bliss. Senior Full Stack Software Engineer."
                />
              </motion.div>
              <motion.p
                className="text-4xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 3 }}
              >
                <Button
                  className="text-lg cursor-pointer"
                  size={"xl"}
                  onClick={handleScroll}
                >
                  Begin your journey 👉
                </Button>
              </motion.p>
            </div>
          </div>
        </div>
        <div ref={targetRef} className="">
          <div className="text-center pt-20 h-50">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <div className="flex justify-center flex-wrap gap-10">
                <h3 className="text-5xl">Let's work together!</h3>
                <p className="w-100">
                  Experienced Full Stack Developer. Background in web
                  development, apps, mobile, with a track record in optimized,
                  responsive design.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col items-center py-10 gap-10">
            <div className="py-10 flex flex-col gap-10">
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
                  <div className="mt-4 px-5  sm:px-7">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                      <img
                        src="/hover-illustration.svg"
                        className="w-50 sm:w-100  border-2 rounded-2xl"
                      />
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
          <div className="bg-[url('/code1.jpeg')] bg-cover bg-center h-100"></div>
          <div className="flex flex-col items-center py-10 gap-10">
            <div className="text-center pt-10">
              <motion.h2
                ref={ref}
                className="text-5xl"
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                Blog
              </motion.h2>
            </div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {blogPosts.map((post, index) => {
                  return (
                    <Card key={index}>
                      <CardHeader>
                        <h3 className="text-base font-semibold leading-snug text-zinc-950 sm:text-lg">
                          {post.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-zinc-500">
                          <time>{post.dateLabel}</time>
                        </p>
                      </CardHeader>
                      <CardContent>
                        <article className="mt-4 max-w-full">
                          <header></header>
                          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                            {post.body}
                          </p>
                          <p className="mt-4 text-sm">
                            <a
                              href={post.href}
                              className="font-medium text-zinc-900 underline-offset-4 hover:underline"
                            >
                              View article
                            </a>
                          </p>
                        </article>
                      </CardContent>
                      <CardFooter></CardFooter>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
            <div className="text-center pt-10">
              <motion.h2
                ref={ref}
                className="text-5xl"
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                Portfolio
              </motion.h2>
            </div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                <Card>
                  <CardHeader>
                    <a href="/zero-fall">
                      <img
                        src="/screenshots/zero-fall.png"
                        className="rounded-xl w-full"
                      />
                    </a>
                  </CardHeader>
                  <CardContent>
                    <div className="">
                      <a href="/zero-fall">
                        <h3 className="text-2xl pb-2">Zero Fall Studios</h3>
                      </a>
                      <p>
                        Game studio with experienced developers ready to turn
                        your ideas into reality. Zero Fall Studios has many
                        title like Junkyard Quest, and Fall Quest: The Last
                        Corruption.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <a href="https://tipodd.itch.io/godot-weather">
                      <img
                        src="https://img.itch.zone/aW1nLzI2OTk5Njc2LnBuZw==/315x250%23c/TKN80F.png"
                        className="rounded-xl w-full"
                      />
                    </a>
                  </CardHeader>
                  <CardContent>
                    <div className="">
                      <a href="https://tipodd.itch.io/godot-weather">
                        <h3 className="text-2xl pb-2">Godot Weather</h3>
                      </a>
                      <p>
                        Weather simulation for different weather types in Godot.
                        Since it uses gpu particles it works best on an actual
                        app rather than a web export.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <a href="https://tipodd.itch.io/pixel-ui">
                      <img
                        src="https://img.itch.zone/aW1nLzI2OTE5Mzg0LnBuZw==/315x250%23c/BxVVZ9.png"
                        className="rounded-xl  w-full"
                      />
                    </a>
                  </CardHeader>
                  <CardContent>
                    <div className="">
                      <a href="https://tipodd.itch.io/pixel-ui">
                        <h3 className="text-2xl pb-2">UI Asset Packs</h3>
                      </a>
                      <p>
                        This pack has all in one UI images. Everything comes
                        with the png and aseprite files.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white">
        <div className="container mx-auto page-p py-12 sm:max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold ">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-indigo-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="transition-colors hover:text-indigo-400"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="transition-colors hover:text-indigo-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="transition-colors hover:text-indigo-400"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} {website.name}. All rights
              reserved.
            </p>
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
        </div>
      </footer>
    </div>
  );
}
