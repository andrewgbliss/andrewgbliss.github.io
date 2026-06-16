import Link from "next/link";
import { website } from "@/lib/data/website";
import { QRCodeSVG } from "qrcode.react";

export const Footer = () => {
  return (
    <footer className="bg-black text-zinc-300">
      <div className="container mx-auto page-p py-12 sm:max-w-4xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-indigo-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="transition-colors hover:text-indigo-400"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="transition-colors hover:text-indigo-400"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-indigo-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-indigo-400"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Social Media
            </h3>
            <div className="flex space-x-4"></div>
          </div>
          <div className="flex justify-start w-full md:justify-end">
            <div className="w-fit h-fit rounded-lg bg-white p-5">
              <QRCodeSVG value={website.url} size={128} />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {website.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
