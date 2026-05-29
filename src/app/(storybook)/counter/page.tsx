"use client";

import { useState, useContext, createContext, useRef, useEffect } from "react";

const CountContext = createContext({
  count: 0,
  setCount: (count: number) => {},
});

const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

function MyButton() {
  const { count, setCount } = useCount();
  const onClick = () => {
    setCount(count + 1);
  };
  const inputRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      console.log("Button element:", inputRef.current);
    }
  }, []);
  return (
    <button onClick={onClick} ref={inputRef}>
      Clicked {count} times!
    </button>
  );
}

export default function Home() {
  return (
    <div style={{ padding: "32px" }}>
      <main>
        <CountProvider>
          <MyButton />
          <MyButton />
        </CountProvider>
      </main>
    </div>
  );
}
