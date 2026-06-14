import { getRants } from "@/lib/data/articles";
import { Articles } from "../articles/_components/Articles";
import { Suspense } from "react";
import { Metadata } from "next";
import { website } from "@/lib/data/website";

export const metadata: Metadata = {
  title: `${website.name} - Rants`,
};

export default async function RantsFrontPage() {
  const articles = await getRants();
  return (
    <>
      <div className="relative min-h-screen flex flex-col pt-16 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        <main className="min-h-screen grow flex items-start justify-center py-12">
          <div className="w-full min-h-screen">
            <div className="container mx-auto sm:max-w-4xl relative z-10 flex flex-col items-center justify-center text-white min-h-screen page-p">
              <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-2">Rants</h1>
                <p className="text-lg">For my unfiltered biased view points</p>
              </header>
              <div className="w-full min-h-screen">
                <Suspense fallback={<div></div>}>
                  <Articles articles={articles} />
                </Suspense>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
