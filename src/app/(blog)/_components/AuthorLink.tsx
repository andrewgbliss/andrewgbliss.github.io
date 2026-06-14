import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Author } from "@/lib/data/authors";
import Link from "next/link";

export const AuthorLink = ({
  author,
}: {
  author: Author | undefined | null;
}) => {
  if (!author) {
    return null;
  }
  return (
    <Link href={`/author/${author.slug}`} className="hover:underline">
      <div className="flex items-center">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author?.image} alt="Author" />
          <AvatarFallback>
            {author?.name
              .split(" ")
              .map((name: string) => name[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 text-left">
          <p className="font-semibold">{author?.name}</p>
          <p className="text-sm">{author?.tagline}</p>
        </div>
      </div>
    </Link>
  );
};

export const AuthorLinkSmall = ({
  author,
}: {
  author: Author | undefined | null;
}) => {
  if (!author) {
    return null;
  }
  return (
    <Link href={`/author/${author.slug}`} className="hover:underline">
      <div className="flex items-center">
        <Avatar className="h-6 w-6">
          <AvatarImage src={author?.image} alt="Author" />
          <AvatarFallback>
            {author?.name
              .split(" ")
              .map((name: string) => name[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="ml-2 text-left">
          <p className="text-sm">{author?.name}</p>
        </div>
      </div>
    </Link>
  );
};
