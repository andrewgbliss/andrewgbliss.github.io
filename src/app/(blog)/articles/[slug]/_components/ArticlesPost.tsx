"use client";

import { marked } from "marked";
import { website } from "@/lib/data/website";
import { Article } from "@/lib/data/articles";
import { Author } from "@/lib/data/authors";
import { AuthorLink } from "@/app/(blog)/_components/AuthorLink";
import Link from "next/link";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { useEffect } from "react";
import { BskyIcon } from "@/app/_components/BskyIcon";

export const ArticlesPost = ({
  slug,
  article,
  author,
}: {
  slug: string;
  article: Article;
  author: Author;
}) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const authorLink = (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <AuthorLink author={author} />
        </div>
      </div>
    </>
  );
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="sm:text-5xl text-3xl font-bold">{article.title}</h1>
        <div className="text-sm text-gray-500">{article.date}</div>
      </div>
      <div className="mb-8">{authorLink}</div>
      <div className="mb-8 flex justify-center items-center">
        <img
          src={"/code1.jpeg"}
          alt={article.title}
          className="article-image"
        />
      </div>
      {article.video ? (
        <div className="mb-8 aspect-w-16 aspect-h-9">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={article.video}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      ) : null}
      <div className="">
        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: marked(article.content) }}
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {article.tags?.map((tag) => (
          <Link
            key={tag}
            href={`/articles?tag=${tag}`}
            className="inline-block bg-foreground rounded-md px-2 py-1 text-sm font-medium hover:bg-primary"
          >
            {tag}
          </Link>
        ))}
      </div>
      <div>{authorLink}</div>
    </div>
  );
};
