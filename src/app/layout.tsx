import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { website } from "@/lib/data/website";
import { generateDefaultMetadata } from "@/lib/data/generate-metadata";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = website.title;
const url = website.url;
const description = website.description;
const images = ["https://www.andrewgbliss.com/code1.jpeg"];
const keywords = [
  "software",
  "audio",
  "create",
  "nextjs",
  "react",
  "typescript",
  "javascript",
  "web development",
  "web design",
  "web design agency",
  "web design company",
  "web design services",
  "web design studio",
  "web design agency",
  "web design company",
  "web design services",
  "web design studio",
];

export const metadata: Metadata = {
  ...generateDefaultMetadata({ title, url, description, images, keywords }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BK1W9GTN3E"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BK1W9GTN3E');`}
      </Script>
      <body className={`${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
