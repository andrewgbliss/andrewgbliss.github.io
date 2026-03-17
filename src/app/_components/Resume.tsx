"use client";

import { resume } from "@/lib/resume";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  HomeIcon,
  BookIcon,
  CalendarIcon,
  LinkIcon,
  CircleIcon,
  SchoolIcon,
} from "lucide-react";
import { ModeToggle } from "@/components/ui/dark-mode-toggle";
import { Facebook, Twitter } from "lucide-react";
import { website } from "@/lib/website";
import { QRCodeSVG } from "qrcode.react";
import { BskyIcon } from "@/app/_components/BskyIcon";
import Link from "next/link";

export function Resume() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:px-4 sm:py-6 pb-24 sm:pb-6">
      <Card className="relative p-6">
        <div className="absolute right-4 top-4 flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden h-8 px-3 text-xs sm:inline-flex"
            onClick={() => window.open("Resume.pdf", "_blank")}
          >
            Download PDF
          </Button>
          <ModeToggle />
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
          <img
            src={`andy.jpg`}
            alt={resume.name}
            className="h-28 w-28 rounded-full object-cover"
          />
          <div className="flex-1 space-y-2 text-center sm:text-left">
            <Link href="/">
              <h1 className="text-3xl font-bold tracking-tight">
                {resume.name}
              </h1>
            </Link>
            <p className="text-sm text-muted-foreground">{resume.bio}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground sm:justify-start">
              <div className="flex items-center gap-2">
                <HomeIcon className="h-4 w-4" />
                <span>
                  {resume.address.city}, {resume.address.state}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookIcon className="h-4 w-4" />
                <span>{resume.email}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg tracking-tight">{resume.tagline}</h2>
        <Separator className="my-3" />
        <div className="space-y-6">
          {resume.workExperience.map((work, i) => (
            <div key={i}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-base">
                  {work.title} / {work.company}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarIcon className="h-3 w-3" />
                  <span>
                    {work.from} - {work.to}
                  </span>
                </div>
              </div>
              <ul className="mt-3 space-y-2">
                {work.bulletpoints.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CircleIcon className="mt-1 h-3 w-3 shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              {work.skills.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {work.skills.map((skill, k) => (
                    <Badge key={k} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
              {i < resume.workExperience.length - 1 && (
                <Separator className="my-4" />
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                <span className="font-medium uppercase tracking-wide text-muted-foreground">
                  Education
                </span>
                <span className="text-muted-foreground">•</span>
                <div className="flex min-w-0 items-center gap-2">
                  <SchoolIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <span className="min-w-0 truncate text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {resume.education.school}
                    </span>{" "}
                    — {resume.education.name} ({resume.education.from}–
                    {resume.education.to})
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Links
                </div>
                <div className="space-y-1 text-xs">
                  {resume.links.map((href, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <LinkIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="truncate text-muted-foreground hover:underline"
                      >
                        {href}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Skills
                </div>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${website.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1877F2]"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${website.url}&text=Check%20this%20out!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1DA1F2]"
                >
                  <Twitter size={22} />
                </a>
                <a
                  href={`https://bsky.app/intent/compose?text=${encodeURIComponent(
                    `${resume.name} - ${website.url}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0085FF]"
                  title="Share on Bluesky"
                >
                  <BskyIcon height={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:w-40">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <QRCodeSVG value="https://andrewgbliss.github.io" size={112} />
            </div>
          </div>
        </div>
      </Card>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/90 p-4 backdrop-blur sm:hidden">
        <Button
          className="w-full"
          onClick={() => window.open("Resume.pdf", "_blank")}
        >
          Download PDF
        </Button>
      </div>
    </div>
  );
}
