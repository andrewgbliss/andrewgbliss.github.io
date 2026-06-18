import { Author } from "@/lib/data/authors";
import Link from "next/link";

export const AuthorProfile = ({ author }: { author: Author }) => {
  return (
    <div className="sm:max-w-4xl mx-auto">
      <div className="">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background">
            <img
              src={author.image}
              alt="Author avatar"
              className="object-cover"
            />
          </div>
          <div className="flex-1 md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {author.name}
            </h1>
            <p className="mb-4">{author.tagline}</p>
            <hr className="my-4" />
            <p className="mb-4">{author.bio}</p>
            <div className="flex gap-4 mb-4">
              {author.portfolio && (
                <Link
                  href={author.portfolio}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Portfolio
                </Link>
              )}
              {author.resume && (
                <Link
                  href={author.resume}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Resume
                </Link>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <p className="">Links:</p>
              {author.links?.map((link) => (
                <Link
                  href={link}
                  key={link}
                  className="hover:underline"
                  target="_blank"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
