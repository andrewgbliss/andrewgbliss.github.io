"use client";

import { useState, useTransition } from "react";

export default function Page() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState<any>([]);

  const LIST_SIZE = 20000;

  function handleChange(e: any) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <div>
      <input
        className="border"
        type="text"
        value={input}
        onChange={handleChange}
      />
      {isPending
        ? "Loading..."
        : list.map((item: any, index: any) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
}
