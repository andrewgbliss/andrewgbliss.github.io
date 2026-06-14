"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { website } from "@/lib/data/website";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [title, setTitle] = useState("");
  const [opaque, setOpaque] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isOpaque = window.scrollY > 100;
      setOpaque(isOpaque);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set initial title
    if (document.title) {
      const title = document.title.split(" - ")[0];
      setTitle(title);
    }

    // Function to update title
    const updateTitle = () => {
      if (document.title) {
        const title = document.title.split(" - ")[0];
        setTitle(title);
      }
    };

    // Listen for route changes in Next.js
    window.addEventListener("routeChangeComplete", updateTitle);

    // For initial load and when Next.js updates the DOM
    const observer = new MutationObserver(() => {
      updateTitle();
    });

    // Observe the document head for title changes
    observer.observe(document.head, {
      subtree: true,
      childList: true,
    });

    // Clean up on unmount
    return () => {
      window.removeEventListener("routeChangeComplete", updateTitle);
      observer.disconnect();
    };
  }, []);
  return (
    <header className="relative">
      <div
        className={`fixed top-0 z-20 w-full transition-colors duration-1000 text-center ${
          opaque ? "bg-black bg-opacity-80" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2 p-2">
          <Link href="/articles">
            <img
              src="/favicon-32x32.png"
              alt={website.title}
              className="rounded-full w-8 h-8"
            />
          </Link>
          <Link
            href={pathname}
            className={`text-md text-ellipsis overflow-hidden whitespace-nowrap sm:text-lg transition-opacity duration-1000 text-white ${opaque ? "opacity-100" : "opacity-0"}`}
          >
            {title}
          </Link>
        </div>
      </div>
    </header>
  );
};
