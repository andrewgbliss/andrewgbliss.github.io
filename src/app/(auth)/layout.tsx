import Link from "next/link";
import { website } from "@/lib/website";
import { DarkModeToggle } from "@/components/buttons/dark-mode-toggle";
import { Header } from "./_components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-screen p-4 pt-20">
        <div className="w-full max-w-4xl overflow-hidden rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative hidden md:flex items-center justify-center dark:bg-card bg-card-foreground p-8">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="relative space-y-6 text-center">
                <h1 className="text-4xl font-bold dark:text-card-foreground text-card tracking-tight">
                  <Link href="/">{website.name}</Link>
                </h1>
                <div className="mx-auto h-28 w-28 rounded-xl bg-white/10 p-4 ring-2 ring-white/30">
                  <svg
                    className="h-full w-full dark:text-card-foreground text-card"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      strokeWidth="1.5"
                    />
                    <path d="M2 7h20" strokeWidth="1.5" />
                    <rect x="4" y="9" width="16" height="6" strokeWidth="1.5" />
                    <path d="M8 20h8" strokeWidth="1.5" />
                    <path d="M12 17v3" strokeWidth="1.5" />
                    <circle cx="5" cy="5" r="0.5" fill="currentColor" />
                    <circle cx="8" cy="5" r="0.5" fill="currentColor" />
                    <circle cx="11" cy="5" r="0.5" fill="currentColor" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold dark:text-card-foreground text-card">
                    Join Our Developer Community
                  </h2>
                  <p className="text-sm dark:text-card-foreground/80 text-card max-w-sm mx-auto">
                    Connect with fellow developers, access exclusive resources,
                    and stay up to date with the latest in development
                  </p>
                  <DarkModeToggle />
                </div>
              </div>
            </div>
            <div className="p-4 md:p-8 bg-card">
              <div className="md:hidden mb-8 text-center">
                <h1 className="text-3xl font-bold dark:text-card-foreground text-card mb-2">
                  <Link href="/">{website.name}</Link>
                </h1>
                <p className="text-sm dark:text-card-foreground/80 text-card/80">
                  Join our developer community
                </p>
              </div>
              {children}
              <div className="mt-6 text-center text-xs text-card-foreground/80">
                <p>
                  © {new Date().getFullYear()} {website.name}. All rights
                  reserved.
                </p>
                <div className="mt-1 flex justify-center gap-4">
                  <Link href="/privacy" className="text-card-foreground/80">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-card-foreground/80">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
