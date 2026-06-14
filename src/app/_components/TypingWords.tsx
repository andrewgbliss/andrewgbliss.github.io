import { useEffect, useState, useRef } from "react";
import useTriggerOnScroll from "@/hooks/useTriggerOnScroll";

type TypingWordsProps = {
  text: string;
  className?: string;
  startNow?: boolean;
};

export function TypingWords({
  text,
  className,
  startNow = false,
}: TypingWordsProps) {
  const el = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState("");
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);
  useTriggerOnScroll(el, () => {
    setStart(true);
  });
  useEffect(() => {
    if (startNow) {
      setStart(true);
    }
    if (!start) {
      return;
    }
    const type = () => {
      setContent(content + text[index]);
      setIndex((prev) => prev + 1);
    };
    if (index < text.length) {
      setTimeout(type, 30);
    }
  }, [start, startNow, content]);
  return (
    <div ref={el}>
      <p className={className || ""}>{content}</p>
    </div>
  );
}
