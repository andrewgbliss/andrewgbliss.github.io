import React, { useState, useEffect } from 'react';
import ChevronDoubleUp from '../Icons/ChevronDoubleUp';

export default function ScrollArrow() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  return (
    <div
      className="scrollTop h-14 rounded-lg"
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    >
      <ChevronDoubleUp />
    </div>
  );
}
