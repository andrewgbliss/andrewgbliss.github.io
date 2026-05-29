import Link from "next/link";
import { Briefcase, FileText, Mail, MapPin } from "lucide-react";
import { defaultResumeHref, resume } from "@/lib/resume";
import { website } from "@/lib/website";

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
    "inline-flex min-h-11 items-center justify-center gap-2 bg-blue-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800 active:bg-zinc-950 sm:min-h-0 sm:px-5 sm:py-3",
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
  return (
    <div className="w-full">
      <div className="px-4 pb-12 pt-8 sm:px-10 sm:pb-16 sm:pt-10 lg:px-12">
        <section aria-labelledby="intro-heading" className="flex gap-10">
          <div>
            <img
              src="/andy.jpg"
              alt=""
              className="aspect-5/4 max-h-[min(40vh,16rem)] w-full object-cover object-[center_20%] sm:aspect-21/14 sm:max-h-full sm:object-[center_10%] rounded-xl"
            />
          </div>
          <div>
            <h1
              id="intro-heading"
              className="mt-3 text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl sm:leading-[1.1]"
            >
              {website.name}
            </h1>
            <h2 className="mt-1 text-base font-medium text-zinc-800 sm:text-xl">
              software, audio, create
            </h2>
            <hr className="pb-2" />
            <p className="mt-1 text-base font-medium text-zinc-800 sm:text-lg">
              Feel free to look around, check out blog articles, lookup some
              React components, and resume links.
            </p>
          </div>
        </section>

        <section className="pt-10" aria-labelledby="assets-heading">
          <h2
            id="blog-heading"
            className="text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            Asset Packs
          </h2>
          <article className="mt-4 max-w-full rounded-lg border border-zinc-200 bg-white px-5 py-5 sm:px-6 sm:py-6 flex gap-4 flex-col sm:flex-row">
            <a href="https://andrewgbliss.itch.io/godot-weather">
              <img
                src="https://img.itch.zone/aW1nLzI2OTk5Njc2LnBuZw==/315x250%23c/TKN80F.png"
                className="rounded-xl w-full"
              />
            </a>
            <div className="sm:w-1/3">
              <a href="https://andrewgbliss.itch.io/godot-weather">
                <h3 className="text-2xl pb-2">Godot Weather</h3>
              </a>
              <p>
                Weather simulation for different weather types in Godot. Since
                it uses gpu particles it works best on an actual app rather than
                a web export.
              </p>
            </div>
          </article>
          <article className="mt-4 max-w-full rounded-lg border border-zinc-200 bg-white px-5 py-5 sm:px-6 sm:py-6 flex gap-4 flex-col sm:flex-row">
            <a href="https://andrewgbliss.itch.io/pixel-ui">
              <img
                src="https://img.itch.zone/aW1nLzI2OTE5Mzg0LnBuZw==/315x250%23c/BxVVZ9.png"
                className="rounded-xl  w-full"
              />
            </a>
            <div className="w-1/3">
              <a href="https://andrewgbliss.itch.io/pixel-ui">
                <h3 className="text-2xl pb-2">UI Asset Packs</h3>
              </a>
              <p>
                This pack has all in one UI images. Everything comes with the
                png and aseprite files.
              </p>
            </div>
          </article>
        </section>

        <section className="pt-10" aria-labelledby="blog-heading">
          <h2
            id="blog-heading"
            className="text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            Blog
          </h2>
          <article className="mt-4 max-w-full rounded-lg border border-zinc-200 bg-white px-5 py-5 sm:px-6 sm:py-6">
            <header>
              <h3 className="text-base font-semibold leading-snug text-zinc-950 sm:text-lg">
                {defaultBlogPost.title}
              </h3>
              <p className="mt-1.5 text-sm text-zinc-500">
                <time dateTime={defaultBlogPost.dateIso}>
                  {defaultBlogPost.dateLabel}
                </time>
              </p>
            </header>
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
        </section>

        {/* Business card */}
        <section className="pt-10" aria-labelledby="card-heading">
          <h2
            id="card-heading"
            className="text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            Contact
          </h2>
          <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50/80 px-5 py-6 shadow-sm sm:px-7 sm:py-7">
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
        </section>

        <section className="pt-10" aria-labelledby="links-heading">
          <h2
            id="links-heading"
            className="text-xs font-medium uppercase tracking-widest text-zinc-500"
          ></h2>
          <nav
            className="flex flex-wrap gap-2 sm:gap-3"
            aria-label="Main navigation"
          >
            {siteLinks.map(({ href, label, icon: Icon, variant }) => (
              <Link key={href} href={href} className={linkButtonClass[variant]}>
                <Icon size={18} className="shrink-0 opacity-90" aria-hidden />
                {label}
              </Link>
            ))}
          </nav>
        </section>
      </div>
    </div>
  );
}
