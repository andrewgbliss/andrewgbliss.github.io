import Link from "next/link";
import { Metadata, Viewport } from "next";
import { DarkModeToggle } from "@/components/buttons/dark-mode-toggle";
import { mainPortfolio } from "@/lib/portfolio/main_portfolio";
import { website } from "@/lib/website";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: `Portfolio — ${website.name}`,
  description: website.description,
  icons: {
    icon: "favicon.ico",
  },
};

export default function Portfolio() {
  return (
    <main className="min-h-screen w-full bg-gray-100 text-black dark:bg-black dark:text-gray-100">
      <div className="mx-auto max-w-4xl px-5 py-10 sm:py-16">
        <header className="border-b-2 border-black pb-8 dark:border-white">
          <div className="flex items-start justify-between gap-3">
            <div>
              <Link href="/" className="text-sm underline underline-offset-4">
                Home
              </Link>
              <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-5xl">
                Portfolio
              </h1>
            </div>
            <DarkModeToggle />
          </div>
        </header>

        <section className="py-10">
          <div className="grid gap-5 sm:grid-cols-2">
            {mainPortfolio.projects.map((project) => (
              <article
                key={project.url}
                className="border border-black dark:border-white"
              >
                <a href={project.url} className="block">
                  <img
                    src={project.image}
                    alt=""
                    className="aspect-video w-full object-cover"
                  />
                </a>
                <div className="border-t border-black p-5 dark:border-white">
                  <h2 className="font-serif text-2xl leading-snug">
                    <a href={project.url} className="hover:underline">
                      {project.name}
                    </a>
                  </h2>
                  <p className="mt-3 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <p className="mt-4 text-sm">
                    <a
                      href={project.url}
                      className="underline underline-offset-4"
                    >
                      View
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer>
        <div className="mx-auto max-w-4xl px-5 py-10">
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
          <p className="mt-8 border-t border-black pt-6 text-sm dark:border-white">
            &copy; {new Date().getFullYear()} {website.name}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
