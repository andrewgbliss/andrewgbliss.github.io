import { Resume } from "@/app/_components/Resume";
import { getAllResumeIds, getResumeById } from "@/lib/resume";
import { website } from "@/lib/website";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#d4d4d8",
};

export async function generateStaticParams() {
  return getAllResumeIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const doc = getResumeById(id);
  if (!doc) {
    return { title: "Resume not found" };
  }

  const pageUrl = `${website.url}/resume/${doc.id}`;
  const ogTitle = doc.seo.title;
  const ogDescription = doc.seo.description;

  return {
    title: doc.seo.title,
    description: doc.seo.description,
    icons: {
      icon: "favicon.ico",
    },
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: "andy.jpg",
        },
      ],
      type: "website",
      url: pageUrl,
      siteName: website.name,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: ["andy.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ResumeByIdPage({ params }: PageProps) {
  const { id } = await params;
  const doc = getResumeById(id);
  if (!doc) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-zinc-300">
      <div className="mx-auto min-h-screen max-w-3xl border-x border-zinc-300 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        <Resume document={doc} />
      </div>
    </main>
  );
}
