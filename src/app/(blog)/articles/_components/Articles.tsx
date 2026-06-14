"use client";

import { Article } from "@/lib/data/articles";
import { ArticleCard } from "./ArticleCard";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Articles = ({
  articles,
  defaultTag,
}: {
  articles: Article[];
  defaultTag?: string;
}) => {
  const router = useRouter();
  const query = useSearchParams();
  const tag = query.get("tag") || defaultTag;
  const [search, setSearch] = useState(tag);

  const filteredArticles = tag
    ? articles.filter((article) => {
        if (!tag || !article.tags) return false;
        return article.tags.some(
          (articleTag) =>
            articleTag.toLowerCase().includes(tag.toLowerCase()) ||
            tag.toLowerCase().includes(articleTag.toLowerCase())
        );
      })
    : articles;

  const handleSearch = (value: string) => {
    setSearch(value);
    router.push(`/articles?tag=${value}`);
  };

  useEffect(() => {
    if (search !== tag) {
      setSearch(tag || "");
    }
  }, [search, tag]);

  return (
    <div className="w-full">
      <div className="mb-6 w-full flex sm:flex-row flex-col justify-between gap-2 items-center">
        <div className="mb-2 text-sm">
          {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "result" : "results"} found
        </div>
        <div className="w-full sm:w-64 flex">
          <Input
            type="search"
            placeholder="Search by tag..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="mx-auto text-black w-full"
          />
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-2 pb-4 text-sm">
        Popular tags:
        {Object.entries(
          articles
            .flatMap((article) => article.tags || [])
            .reduce((acc: Record<string, number>, tag: string) => {
              acc[tag] = (acc[tag] || 0) + 1;
              return acc;
            }, {})
        )
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([tag, count]) => (
            <Link
              key={tag}
              href={`/articles?tag=${tag}`}
              className="inline-block bg-foreground rounded-md px-2 py-1 text-sm font-medium hover:bg-primary"
            >
              {tag} ({count})
            </Link>
          ))}
      </div>
      <div className="my-8">
        <hr />
      </div>
      <div className="grid gap-10 grid-cols-1">
        {filteredArticles.length === 0 ? (
          <div className="col-span-full text-center text-lg">
            No articles found
          </div>
        ) : (
          <>
            {filteredArticles
              .slice(
                (Number(query?.get("page") || 1) - 1) * 5,
                Number(query?.get("page") || 1) * 5
              )
              .map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            <div className="flex justify-center gap-2">
              {Array.from(
                { length: Math.ceil(filteredArticles.length / 5) },
                (_, i) => (
                  <Link
                    key={i + 1}
                    href={`/articles?${new URLSearchParams({
                      ...(tag ? { tag } : {}),
                      page: String(i + 1),
                    })}`}
                    className={`px-3 py-1 rounded ${
                      Number(query?.get("page") || 1) === i + 1
                        ? "bg-primary text-white"
                        : "bg-foreground hover:bg-primary"
                    }`}
                  >
                    {i + 1}
                  </Link>
                )
              )}
            </div>
          </>
        )}
      </div>
      <div className="my-8">
        <hr />
      </div>
      <div className="flex items-center flex-wrap gap-2 pb-4 text-sm">
        Popular tags:
        {Object.entries(
          articles
            .flatMap((article) => article.tags || [])
            .reduce((acc: Record<string, number>, tag: string) => {
              acc[tag] = (acc[tag] || 0) + 1;
              return acc;
            }, {})
        )
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([tag, count]) => (
            <Link
              key={tag}
              href={`/articles?tag=${tag}`}
              className="inline-block bg-foreground rounded-md px-2 py-1 text-sm font-medium hover:bg-primary"
            >
              {tag} ({count})
            </Link>
          ))}
      </div>
    </div>
  );
};
