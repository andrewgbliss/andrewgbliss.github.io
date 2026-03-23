"use client";

import type { ReactNode } from "react";
import { resumeDocuments, type ResumeDocument } from "@/lib/resume";
import {
  HomeIcon,
  BookIcon,
  CalendarIcon,
  LinkIcon,
  SchoolIcon,
  FileText,
  ArrowLeft,
} from "lucide-react";
import { Facebook, Twitter } from "lucide-react";
import { website } from "@/lib/website";
import { QRCodeSVG } from "qrcode.react";
import { BskyIcon } from "@/app/_components/BskyIcon";
import Link from "next/link";

const primaryNavBtn =
  "inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 bg-zinc-900 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 active:bg-zinc-950 sm:min-h-0 sm:w-auto sm:flex-none sm:min-w-38 sm:px-5 sm:py-3";

const outlineNavBtn =
  "inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 border border-zinc-300 bg-white px-3 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 active:bg-zinc-100 sm:min-h-0 sm:w-auto sm:flex-none sm:min-w-38 sm:px-5 sm:py-3";

function SkillPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}

export function Resume({ document }: { document: ResumeDocument }) {
  const pdfName = document.pdfFilename ?? "Resume.pdf";
  const resumePageUrl = `${website.url}/resume/${document.id}`;

  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src="/andy.jpg"
          alt=""
          className="aspect-5/4 max-h-[min(40vh,16rem)] w-full object-cover object-[center_20%] sm:aspect-21/9 sm:max-h-[min(52vh,22rem)] sm:object-[center_15%]"
        />
      </div>

      <div className="px-4 pb-28 pt-6 sm:px-10 sm:pb-16 sm:pt-8 lg:px-12">
        <div className="flex w-full flex-col gap-8 sm:gap-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <header className="min-w-0 w-full text-left sm:max-w-2xl sm:flex-1 sm:pr-4">
              <h1 className="text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl sm:leading-[1.1]">
                {document.name}
              </h1>
              <p className="mt-2.5 max-w-prose font-mono text-sm leading-relaxed text-zinc-500 sm:mt-3.5 sm:text-base">
                {document.bio}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <HomeIcon className="h-4 w-4 shrink-0" aria-hidden />
                  <span>
                    {document.address.city}, {document.address.state}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BookIcon className="h-4 w-4 shrink-0" aria-hidden />
                  <span>{document.email}</span>
                </div>
              </div>
            </header>

            <nav
              className="flex w-full shrink-0 flex-row gap-2 sm:w-auto sm:flex-wrap sm:justify-end sm:gap-3"
              aria-label="Resume actions"
            >
              <button
                type="button"
                className={primaryNavBtn}
                onClick={() => window.open(pdfName, "_blank")}
              >
                <FileText size={18} className="shrink-0 opacity-80" aria-hidden />
                Download PDF
              </button>
              <Link href="/" className={outlineNavBtn}>
                <ArrowLeft
                  size={18}
                  className="shrink-0 text-zinc-500"
                  aria-hidden
                />
                Home
              </Link>
            </nav>
          </div>

          <section
            className="border-t border-zinc-200 pt-8"
            aria-labelledby="summary-heading"
          >
            <h2
              id="summary-heading"
              className="text-lg font-semibold tracking-tight text-zinc-950"
            >
              Summary
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-zinc-700 sm:text-base">
              {document.tagline}
            </p>
          </section>

          <section aria-labelledby="experience-heading">
            <h2
              id="experience-heading"
              className="text-lg font-semibold tracking-tight text-zinc-950"
            >
              Experience
            </h2>
            <ul className="m-0 mt-6 list-none divide-y divide-zinc-200 p-0 sm:mt-8">
              {document.workExperience.map((work, i) => (
                <li key={i} className="min-w-0 py-7 sm:py-10">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="text-base font-semibold text-zinc-950">
                      {work.title} / {work.company}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <CalendarIcon className="h-3 w-3 shrink-0" aria-hidden />
                      <span>
                        {work.from} – {work.to}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {work.bulletpoints.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"
                          aria-hidden
                        />
                        <span className="text-zinc-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {work.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {work.skills.map((skill, k) => (
                        <SkillPill key={k}>{skill}</SkillPill>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section
            className="border-t border-zinc-200 pt-10"
            aria-labelledby="education-heading"
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 flex-1 space-y-8">
                <div>
                  <h2
                    id="education-heading"
                    className="text-xs font-medium uppercase tracking-wide text-zinc-500"
                  >
                    Education
                  </h2>
                  <div className="mt-3 flex min-w-0 items-start gap-2 text-sm text-zinc-700">
                    <SchoolIcon
                      className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500"
                      aria-hidden
                    />
                    <p>
                      <span className="font-semibold text-zinc-950">
                        {document.education.school}
                      </span>
                      {" — "}
                      {document.education.name} ({document.education.from}–
                      {document.education.to})
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Links
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {document.links.map((href, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <LinkIcon
                          className="h-3.5 w-3.5 shrink-0 text-zinc-500"
                          aria-hidden
                        />
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="min-w-0 truncate text-zinc-600 underline decoration-zinc-300 underline-offset-2 transition-colors hover:text-zinc-950 hover:decoration-zinc-400"
                        >
                          {href}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Skills
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {document.skills.map((skill) => (
                      <SkillPill key={skill}>{skill}</SkillPill>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Share
                  </h3>
                  <div className="mt-3 flex gap-4">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(resumePageUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition-colors hover:text-zinc-600"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={22} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(resumePageUrl)}&text=${encodeURIComponent(`Check out ${document.name}'s resume`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition-colors hover:text-zinc-600"
                      aria-label="Share on X"
                    >
                      <Twitter size={22} />
                    </a>
                    <a
                      href={`https://bsky.app/intent/compose?text=${encodeURIComponent(
                        `${document.name} — ${resumePageUrl}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition-colors hover:text-zinc-600"
                      title="Share on Bluesky"
                      aria-label="Share on Bluesky"
                    >
                      <BskyIcon height={22} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 justify-center lg:w-40 lg:justify-end">
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                  <QRCodeSVG value={resumePageUrl} size={112} />
                </div>
              </div>
            </div>
          </section>

          <footer
            className="border-t border-zinc-200 pt-10"
            aria-label="Other resume versions"
          >
            <h2 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Resumes
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2 sm:gap-3">
              {resumeDocuments.map((doc) => {
                const isCurrent = doc.id === document.id;
                return (
                  <li key={doc.id}>
                    {isCurrent ? (
                      <span className="inline-flex items-center rounded-full border border-zinc-900 bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white">
                        {doc.navLabel}
                      </span>
                    ) : (
                      <Link
                        href={`/resume/${doc.id}`}
                        className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-950"
                      >
                        {doc.navLabel}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </footer>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 p-4 backdrop-blur-sm sm:hidden">
        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center gap-2 bg-zinc-900 text-sm font-medium text-white transition-colors hover:bg-zinc-800 active:bg-zinc-950"
          onClick={() => window.open(pdfName, "_blank")}
        >
          <FileText size={18} className="shrink-0 opacity-80" aria-hidden />
          Download PDF
        </button>
      </div>
    </div>
  );
}
