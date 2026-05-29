import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  FileText,
  Home,
  KeyRound,
  LayoutDashboard,
  LogIn,
  MailCheck,
  PartyPopper,
  UserPlus,
  List,
  Plus,
} from "lucide-react";
import { Metadata, Viewport } from "next";
import { defaultResumeHref } from "@/lib/resume";
import { website } from "@/lib/website";

export const viewport: Viewport = {
  themeColor: "#d4d4d8",
};

export const metadata: Metadata = {
  title: `Site map · ${website.name}`,
  description:
    "Links to pages on this site—auth flows, resume, plan, and more.",
  icons: {
    icon: "favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type ShowcaseCard = {
  href: string;
  label: string;
  description: string;
  icon: typeof LogIn;
};

const authPages: Array<ShowcaseCard> = [
  {
    href: "/login",
    label: "Login",
    description: "Sign in to your account.",
    icon: LogIn,
  },
  {
    href: "/signup",
    label: "Sign up",
    description: "Create a new account.",
    icon: UserPlus,
  },
  {
    href: "/forgot-password",
    label: "Forgot password",
    description: "Request a password reset.",
    icon: KeyRound,
  },
  {
    href: "/signup/message",
    label: "Signup message",
    description: "Post-signup notice (e.g. check your email).",
    icon: MailCheck,
  },
  {
    href: "/signup/success",
    label: "Signup success",
    description: "Confirmation after a successful sign-up.",
    icon: PartyPopper,
  },
];

const mainPages: Array<ShowcaseCard> = [
  {
    href: "/",
    label: "Home",
    description: "Landing page with links and intro.",
    icon: Home,
  },
  {
    href: "/plan",
    label: "Plan",
    description: "Planning dashboard content.",
    icon: LayoutDashboard,
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    description: "Project and work highlights.",
    icon: Briefcase,
  },
  {
    href: defaultResumeHref,
    label: "Resume",
    description: "Résumé view (default variant).",
    icon: FileText,
  },
  {
    href: "/resume",
    label: "Resume (redirect)",
    description: "Short redirect to the default résumé slug.",
    icon: FileText,
  },
];

const testPages: Array<ShowcaseCard> = [
  {
    href: "/counter",
    label: "React Counter",
    description: "Basic button click react state counter",
    icon: Plus,
  },
  {
    href: "/todos",
    label: "React Todos",
    description: "Basic todos app",
    icon: List,
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
        {title}
      </h2>
      <ul className="grid gap-2 sm:grid-cols-2">{children}</ul>
    </section>
  );
}

function ShowcaseLink({ item }: { item: ShowcaseCard }) {
  const Icon = item.icon;
  return (
    <li>
      <Link
        href={item.href}
        className="group flex gap-3 rounded-xl border border-zinc-200 bg-zinc-50/80 p-4 transition-colors hover:border-zinc-300 hover:bg-white"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white group-hover:bg-zinc-800">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-baseline justify-between gap-2">
            <span className="font-medium text-zinc-900">{item.label}</span>
            <span className="font-mono text-[11px] text-zinc-400 truncate max-w-[45%] sm:max-w-none">
              {item.href}
            </span>
          </span>
          <span className="mt-0.5 block text-sm text-zinc-600">
            {item.description}
          </span>
        </span>
      </Link>
    </li>
  );
}

export default function SiteComponentsPage() {
  return (
    <main className="min-h-screen w-full bg-zinc-300">
      <div className="mx-auto min-h-screen max-w-3xl border-x border-zinc-300 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        <header className="border-b border-zinc-200 px-6 py-8 sm:px-10">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to home
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Story Book
          </h1>
          <p className="mt-2 max-w-xl text-sm text-zinc-600">
            Links to all pages, apps, and testing
          </p>
        </header>

        <div className="space-y-10 px-6 py-8 sm:px-10 sm:py-10">
          <Section title="Authentication">
            {authPages.map((item) => (
              <ShowcaseLink key={item.href} item={item} />
            ))}
          </Section>

          <Section title="Site">
            {mainPages.map((item) => (
              <ShowcaseLink key={`${item.href}-${item.label}`} item={item} />
            ))}
          </Section>

          <Section title="Testing">
            {testPages.map((item) => (
              <ShowcaseLink key={`${item.href}-${item.label}`} item={item} />
            ))}
          </Section>
        </div>
      </div>
    </main>
  );
}
