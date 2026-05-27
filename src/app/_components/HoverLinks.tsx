import Link from "next/link";
import { Briefcase, FileText, Mail, MapPin } from "lucide-react";
import { defaultResumeHref, resume } from "@/lib/resume";
import { website } from "@/lib/website";

const currentRole = resume.workExperience[0];

type SiteLink = {
  href: string;
  label: string;
  icon: typeof FileText;
  variant: "primary" | "outline";
};

const siteLinks: Array<SiteLink> = [
  {
    href: "/site-components",
    label: "Portfolio",
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
];

const linkButtonClass = {
  primary:
    "inline-flex min-h-11 items-center justify-center gap-2 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 active:bg-zinc-950 sm:min-h-0 sm:px-5 sm:py-3",
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
      <div className="w-full">
        <img
          src="/andy.jpg"
          alt=""
          className="aspect-5/4 max-h-[min(40vh,16rem)] w-full object-cover object-[center_20%] sm:aspect-21/9 sm:max-h-[min(52vh,22rem)] sm:object-[center_15%]"
        />
      </div>

      <div className="px-4 pb-12 pt-8 sm:px-10 sm:pb-16 sm:pt-10 lg:px-12">
        {/* Introduction */}
        <section aria-labelledby="intro-heading">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Introduction
          </p>
          <h1
            id="intro-heading"
            className="mt-3 text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl sm:leading-[1.1]"
          >
            {resume.name}
          </h1>
          <p className="mt-1 text-base font-medium text-zinc-800 sm:text-lg">
            {resume.bio}
          </p>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-zinc-600 sm:text-base">
            {resume.tagline}
          </p>
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
                  {currentRole?.title ?? resume.bio}
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  {currentRole
                    ? `${currentRole.company} · ${currentRole.location}`
                    : `${resume.address.city}, ${resume.address.state}`}
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
              <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                <Link
                  href={defaultResumeHref}
                  className="inline-flex w-full items-center justify-center gap-2 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 sm:w-auto sm:justify-center"
                >
                  <FileText size={18} className="opacity-90" aria-hidden />
                  View full resume
                </Link>
                {resume.pdfFilename && (
                  <a
                    href={resume.pdfFilename}
                    className="inline-flex w-full items-center justify-center border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white sm:w-auto"
                  >
                    Download PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Blog (default post) */}
        <section
          className="border-b border-zinc-200 py-10"
          aria-labelledby="blog-heading"
        >
          <h2
            id="blog-heading"
            className="text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            Blog
          </h2>
          <article className="mt-4 max-w-prose rounded-lg border border-zinc-200 bg-white px-5 py-5 sm:px-6 sm:py-6">
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

        {/* Site links */}
        <section
          className="border-b border-zinc-200 py-10"
          aria-labelledby="links-heading"
        >
          <h2
            id="links-heading"
            className="text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            On this site
          </h2>
          <nav
            className="mt-4 flex flex-wrap gap-2 sm:gap-3"
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
