import Link from "next/link";
import { Article } from "@/lib/data/articles";
import { authors } from "@/lib/data/authors";
import { AuthorLinkSmall } from "@/app/(blog)/_components/AuthorLink";

export const ArticleCard = ({ article }: { article: Article }) => {
  const author = authors.find((a) => a.slug === article.authorSlug);
  const firstTwoTags = article.tags?.slice(0, 2) || [];
  return (
    <div>
      <div className="grid grid-cols-[auto_1fr] gap-4 text-white">
        <div className="pt-2">
          <Link
            href={`/articles/${article.slug}`}
            className="text-primary hover:underline block"
          >
            <img
              src={"/code1.jpeg"}
              alt={article.title}
              className="w-24 rounded-lg object-cover"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <Link
              href={`/articles/${article.slug}`}
              className="hover:underline"
            >
              <h3 className="text-lg sm:text-xl font-semibold">
                {article.title}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">{article.tagline}</p>
          </div>
          <div>
            <AuthorLinkSmall author={author} />
          </div>
          <div className="flex flex-wrap gap-2">
            {firstTwoTags?.map((tag) => (
              <Link
                key={tag}
                href={`/articles?tag=${tag}`}
                className="inline-block bg-foreground rounded-md px-2 py-1 text-sm font-medium hover:bg-primary"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
