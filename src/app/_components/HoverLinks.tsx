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
    <>
      <div ref={targetRef3} className="">
        <div className="">
          <div className="bg-[url('/pexels-danny-meneses-340146-943096.jpg')] bg-cover bg-center bg-fixed bg-no-repeat h-screen">
            <div className="mx-auto flex flex-col justify-center">
              <div className="text-white gap-5 flex flex-col py-5 px-5">
                <motion.h3
                  className="text-4xl flex items-center gap-5"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img
                    src="/andy.jpg"
                    alt=""
                    className="aspect-5/4 max-h-[min(40vh,16rem)] w-50 sm:w-50 object-cover object-[center_20%] sm:aspect-21/14 sm:max-h-full sm:object-[center_10%] rounded-xl"
                  />
                  Andrew Bliss
                </motion.h3>
                <motion.div
                  className="min-h-24 sm:min-h-10"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                  <TypingWords
                    className="text-lg"
                    startNow
                    text="Looking for a software engineer? I'm available for hire."
                  />
                </motion.div>
                <motion.p
                  className="text-4xl"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                >
                  <Button
                    className="text-xl w-full sm:w-auto cursor-pointer"
                    size={"xl"}
                    onClick={handleScroll}
                  >
                    Contact me 👉
                  </Button>
                </motion.p>
              </div>
            </div>
          </div>
          <div
            ref={targetRef}
            className="bg-zinc-900 p-5 sm:p-5 md:p-10 md:gap-10 flex flex-col"
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <div className="flex flex-col lg:flex-row gap-5 md:gap-10 max-w-5xl mx-auto py-10">
                <Card className="flex-1">
                  <CardHeader>
                    <h2
                      id="card-heading"
                      className="text-xs font-medium uppercase tracking-widest text-zinc-500"
                    >
                      Let's work together!
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="">
                      Experienced Software Engineer with a background in full
                      stack web development. I love programming code to make
                      apps that impress clients and users.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
                <Card className="flex-1">
                  <CardHeader>
                    <h2
                      id="card-heading"
                      className="text-xs font-medium uppercase tracking-widest text-zinc-500 pb-5"
                    >
                      Projects
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-10 sm:items-center">
                      <img
                        src="/hover-illustration.svg"
                        className="w-75 sm:w-50 border-2 rounded-2xl"
                      />
                      <nav className="flex flex-wrap gap-2 sm:gap-3">
                        {siteLinks.map(
                          ({ href, label, icon: Icon, variant }) => (
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
                          ),
                        )}
                      </nav>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </motion.div>
            <div className="flex flex-col items-center gap-10 max-w-5xl mx-auto">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <h3 className="text-2xl font-bold text-white py-5">Projects</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <Card>
                    <CardHeader>
                      <a href="/zero-fall">
                        <img
                          src="/screenshots/zero-fall.png"
                          className="rounded-xl h-44 aspect-video object-cover"
                        />
                      </a>
                    </CardHeader>
                    <CardContent>
                      <div className="">
                        <a href="/zero-fall">
                          <h3 className="text-xl pb-2">Zero Fall Studios</h3>
                        </a>
                        <p className="text-sm">
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
                          className="rounded-xl h-44 aspect-video object-cover"
                        />
                      </a>
                    </CardHeader>
                    <CardContent>
                      <div className="">
                        <a href="https://tipodd.itch.io/godot-weather">
                          <h3 className="text-2xl pb-2">Godot Weather</h3>
                        </a>
                        <p>
                          Weather simulation for different weather types in
                          Godot. Since it uses gpu particles it works best on an
                          actual app rather than a web export.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <a href="https://tipodd.itch.io/pixel-ui">
                        <img
                          src="/kana-balloons.png"
                          className="rounded-xl h-44 aspect-video object-cover"
                        />
                      </a>
                    </CardHeader>
                    <CardContent>
                      <div className="">
                        <a href="https://tipodd.itch.io/kana-balloons">
                          <h3 className="text-2xl pb-2">Kana Balloons</h3>
                        </a>
                        <p>
                          Learn Japanese Hiragana and Katakana by poppong
                          balloons.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <h3 className="text-2xl font-bold text-white py-5">
                  <a href="/articles">Blog</a>
                </h3>
                <div className="flex flex-col gap-5">
                  {blogPosts.map((post, index) => {
                    return (
                      <Card key={index} className="flex-1">
                        <CardHeader className="">
                          <h3 className="text-base font-semibold text-zinc-950 sm:text-lg">
                            {post.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-zinc-500">
                            <time>{post.dateLabel}</time>
                          </p>
                        </CardHeader>
                        <CardContent>
                          <div className="overflow-hidden">
                            <p className="text-sm text-zinc-600 sm:text-base">
                              {post.body}
                            </p>
                          </div>
                          <p className="text-sm">
                            <a
                              href={post.href}
                              className="font-medium text-zinc-900 hover:underline"
                            >
                              View article
                            </a>
                          </p>
                        </CardContent>
                        <CardFooter></CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white">
        <div className="mx-auto py-12 max-w-5xl px-5 md:px-10 lg:px-10 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
    </>
  );
}
