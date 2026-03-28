import Link from "next/link";
import { FileText, Linkedin } from "lucide-react";
import { FrontPageGameCard } from "./FrontPageGameCard";
import { frontPageCards } from "@/lib/front_page_cards";
import { defaultResumeHref } from "@/lib/resume";
import { website } from "@/lib/website";

function slugToLabel(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function Plan() {
  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src="/andy.jpg"
          alt=""
          className="aspect-[5/4] max-h-[min(40vh,16rem)] w-full object-cover object-[center_20%] sm:aspect-21/9 sm:max-h-[min(52vh,22rem)] sm:object-[center_15%]"
        />
      </div>

      <div className="px-4 pb-12 pt-6 sm:px-10 sm:pb-16 sm:pt-8 lg:px-12">
        <div className="flex w-full flex-col gap-8 sm:gap-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <header className="min-w-0 w-full text-left sm:max-w-2xl sm:flex-1 sm:pr-4">
              <h1 className="text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl sm:leading-[1.1]">
                {website.name}
              </h1>
              <p className="mt-2.5 max-w-prose font-mono text-sm leading-relaxed text-zinc-500 sm:mt-3.5 sm:text-base">
                {website.description}
              </p>
            </header>
          </div>
        </div>

        <section className="" aria-labelledby="games-heading">
          <ul className="m-0 mt-6 list-none divide-y divide-zinc-200 p-0 sm:mt-1">
            {[...frontPageCards.cards]
              .sort((a, b) => Number(!!b.topLevel) - Number(!!a.topLevel))
              .map((card) => {
                const slug =
                  new URL(card.url).pathname
                    .replace(/\/$/, "")
                    .split("/")
                    .pop() ?? "Game";
                const label = slugToLabel(slug);
                const featured = card.topLevel === true;
                return (
                  <li key={card.url} className="min-w-0">
                    <FrontPageGameCard
                      href={card.url}
                      imageUrl={card.imageUrl}
                      label={label}
                      description={card.description}
                      featured={featured}
                    />
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
    </div>
  );
}
