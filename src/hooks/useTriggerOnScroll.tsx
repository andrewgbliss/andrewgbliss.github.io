import { RefObject, useEffect } from "react";

function isInViewport(el: HTMLDivElement | null, offset = 0) {
  if (!el) return false;
  const top = el.getBoundingClientRect().top;
  return top + offset >= 0 && top - offset <= window.innerHeight;
}

export default function useTriggerOnScroll(
  ref: RefObject<HTMLDivElement | null>,
  onTrigger: () => void,
) {
  useEffect(() => {
    function onScroll() {
      if (isInViewport(ref.current)) {
        onTrigger();
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref, onTrigger]);
}
