"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
        <h2 className="text-3xl font-semibold text-white mb-6">
          Something went wrong
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          We encountered an unexpected error while processing your request. Our
          team has been notified and is working to fix the issue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
