import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const backLinkClass =
  "inline-flex min-h-11 items-center justify-center gap-2 border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 active:bg-zinc-100 sm:min-h-0 sm:px-5 sm:py-3";

const projects = [
  {
    title: "Andrew Bliss Github Site",
    description: "Personal site for web development and design services.",
    url: "https://andrewgbliss.com",
  },
];

export default function Portfolio() {
  return (
    <div className="w-full">
      <div className="px-4 pb-12 pt-8 sm:px-10 sm:pb-16 sm:pt-10 lg:px-12">
        <section
          className="border-b border-zinc-200 pb-10"
          aria-labelledby="portfolio-heading"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Work
          </p>
          <h1
            id="portfolio-heading"
            className="mt-3 text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl sm:leading-[1.1]"
          >
            Portfolio
          </h1>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-zinc-600 sm:text-base">
            A selection of sites and products I have designed and built—client
            work, personal projects, and tools that ship on the web.
          </p>
          <nav className="mt-8" aria-label="Back to home">
            <Link href="/" className={backLinkClass}>
              <ArrowLeft
                size={18}
                className="shrink-0 opacity-90"
                aria-hidden
              />
              Back to home
            </Link>
          </nav>
        </section>

        <section className="py-10" aria-labelledby="projects-heading">
          <h2
            id="projects-heading"
            className="text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            Selected projects
          </h2>
          <ul className="mt-6 grid list-none grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.url}>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-[border-color,box-shadow] hover:border-zinc-300 hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                >
                  <div className="px-5 py-4 sm:px-6 sm:py-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold leading-snug text-zinc-950 sm:text-lg">
                        {project.title}
                      </h3>
                      <ExternalLink
                        size={18}
                        className="mt-0.5 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-600"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
                      {project.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-zinc-900 underline-offset-4 group-hover:underline">
                      Visit site
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
