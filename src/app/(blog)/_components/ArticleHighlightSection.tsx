"use client";

import { Article } from "@/lib/data/articles";
import { ArticleBigCard } from "@/app/(blog)/articles/_components/ArticleBigCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ArticleHighlightSection = ({
  title,
  tagline,
  article,
}: {
  title: string;
  tagline: string;
  article: Article;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"], // Changed offset to show earlier
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }} // Added initial state
      animate={{ y: 0, opacity: 1 }} // Added animate state
      style={{ y, opacity }}
      transition={{ type: "spring", bounce: 0.4 }}
      className="flex items-center justify-center w-full"
    >
      <div className="page-p container mx-auto sm:max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h2>
            <p>{tagline}</p>
          </div>
          <div>
            <ArticleBigCard article={article} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
