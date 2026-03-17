import { website } from "@/lib/website";
import { Metadata } from "next";
import { Resume } from "../_components/Resume";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: `${website.name} - Resume`,
  description: `${website.name} - Resume`,
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    title: website.name,
    description: website.description,
    images: [
      {
        url: "andy.jpg",
      },
    ],
    type: "website",
    url: `${website.url}/resume`,
    siteName: website.name,
  },
  twitter: {
    card: "summary_large_image",
    title: website.name,
    description: website.description,
    images: ["andy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="p-5 min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-700 to-slate-900">
        <div className="container mx-auto">
          <Resume />
        </div>
      </div>
    </ThemeProvider>
  );
}
