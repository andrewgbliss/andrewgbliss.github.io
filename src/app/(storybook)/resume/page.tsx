"use client";

import { DEFAULT_RESUME_ID } from "@/lib/resume";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Static export–friendly redirect to the default resume id. */
export default function ResumeIndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/resume/${DEFAULT_RESUME_ID}`);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-300 text-zinc-600">
      <p className="text-sm">Loading resume…</p>
    </main>
  );
}
