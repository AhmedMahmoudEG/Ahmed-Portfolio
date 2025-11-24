import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BackgroundEffect from "@/components/BackgroundEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Mahmoud | Full-Stack Engineer",
  description: "Full-Stack Engineer specializing in Node.js, React, Next.js, Express, NestJS, MongoDB, and PostgreSQL.",
  openGraph: {
    title: "Ahmed Mahmoud | Full-Stack Engineer",
    description: "Full-Stack Engineer specializing in Node.js, React, Next.js, Express, NestJS, MongoDB, and PostgreSQL.",
    url: "https://ahmedmahmoud.com", // Placeholder
    siteName: "Ahmed Mahmoud Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Mahmoud Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Mahmoud | Full-Stack Engineer",
    description: "Full-Stack Engineer specializing in Node.js, React, Next.js, Express, NestJS, MongoDB, and PostgreSQL.",
    images: ["/og-image.png"],
    creator: "@ahmedmahmoud", // Placeholder
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import ThemeProvider from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingScreen />
          <ScrollProgress />
          <BackgroundEffect />
          <div className="mx-auto w-full max-w-5xl px-6 flex-1 flex flex-col">
            <Header />
            <main className="flex-1 py-12 pt-28">
              {children}
            </main>
          </div>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
