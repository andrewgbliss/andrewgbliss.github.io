import type { Metadata } from "next";
import { website } from "@/lib/data/website";
import { authors } from "@/lib/data/authors";
import { AuthorProfile } from "./_components/AuthorProfile";

export default async function Page({
  params,
}: {
  params: Promise<{ authorSlug: string }>;
}) {
  const { authorSlug } = await params;
  const author = authors.find((author) => author.slug === authorSlug);
  if (!author) {
    throw new Error("Author not found");
  }
  return (
    <div className="py-8">
      <AuthorProfile author={author} />
    </div>
  );
}

export const generateStaticParams = async () => {
  return authors.map((author) => ({ authorSlug: author.slug }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ authorSlug: string }>;
}): Promise<Metadata> {
  const { authorSlug } = await params;
  const author = authors.find((author) => author.slug === authorSlug);
  return {
    title: `${website.name} - ${author?.name}`,
    metadataBase: new URL(website.url),
    openGraph: {
      title: `${author?.name}`,
      description: author?.tagline,
      images: [
        {
          url: author?.image ?? "",
        },
      ],
      type: "website",
      url: `${website.url}/author/${authorSlug}`,
      siteName: `${author?.name}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${author?.name}`,
      description: author?.tagline,
      images: [author?.image ?? ""],
    },
  };
}
