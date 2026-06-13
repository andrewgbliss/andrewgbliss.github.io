"use client";

import Link from "next/link";
import { website } from "@/lib/website";

export const Header = () => {
  return (
    <header className="relative">
      <div className="fixed top-0 z-20 w-full transition-colors duration-1000 text-center">
        <div className="flex items-center gap-2 p-2">
          <Link href="/articles">
            <img
              src="/favicon-96x96.png"
              alt={website.name}
              className="rounded-full w-8 h-8"
            />
          </Link>
          <Link
            href={"/"}
            className={`text-md text-ellipsis overflow-hidden whitespace-nowrap sm:text-lg transition-opacity duration-1000 text-white`}
          >
            {website.name}
          </Link>
        </div>
      </div>
    </header>
  );
};
