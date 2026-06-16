import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen text-white flex flex-col bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <main className="flex-1 flex flex-col items-center justify-center">
        <article className="container mx-auto px-4 py-12 max-w-4xl text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8">
            Oops! The page you&apos;re looking for seems to have vanished into
            the digital void.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Return to Homepage
          </Link>
        </article>
      </main>
    </div>
  );
}
