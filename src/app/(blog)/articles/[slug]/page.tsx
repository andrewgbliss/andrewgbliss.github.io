import type { Metadata } from "next";
import { website } from "@/lib/data/website";
import { getArticleBySlug, getPaths } from "@/lib/data/articles";
import { authors } from "@/lib/data/authors";
import { ArticlesPost } from "./_components/ArticlesPost";
import { generateDefaultMetadata } from "@/lib/data/generate-metadata";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    return <div>Article not found</div>;
  }
  const author = authors.find((author) => author.slug === article.authorSlug);
  if (!author) {
    return <div>Author not found</div>;
  }
  return <ArticlesPost slug={slug} article={article} author={author} />;
}

export const generateStaticParams = async () => {
  const paths = await getPaths();
  return paths.map((path) => ({ slug: path }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  const title = `${article.title} - ${website.name}`;
  const url = `${website.url}/articles/${slug}`;
  const description = article.tagline;
  const images = [website.url + "/code1.jpeg"];
  const keywords = article.tags ?? [];
  return {
    ...generateDefaultMetadata({ title, url, description, images, keywords }),
    robots: {
      index: true,
      follow: true,
    },
  };
}
