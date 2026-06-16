import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { UseInViewOptions } from "motion/react";

type MarginType = UseInViewOptions["margin"];

export function SlideDiv({
  children,
  dir = "bottom",
  margin = "0px 0px -100px 0px",
  once = false,
}: {
  children: React.ReactNode;
  dir?: "top" | "left" | "bottom" | "right";
  margin?: MarginType;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin });
  let to = { y: 0, x: 0 };
  if (dir === "top") {
    to = { x: 0, y: -24 };
  } else if (dir === "left") {
    to = { x: -24, y: 0 };
  } else if (dir === "bottom") {
    to = { x: 0, y: 24 };
  } else if (dir === "right") {
    to = { x: 24, y: 0 };
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...to }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...to }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin }}
    >
      {children}
    </motion.div>
  );
}
