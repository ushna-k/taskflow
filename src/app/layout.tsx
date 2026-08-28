import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "A simple task management workspace",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-50 font-sans text-zinc-950">
        <header className="border-b border-zinc-200 bg-white">
          <nav className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              TaskFlow
            </Link>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-zinc-600">
              <Link href="/" className="transition-colors hover:text-zinc-950">
                Dashboard
              </Link>
              <Link href="/tasks" className="transition-colors hover:text-zinc-950">
                Tasks
              </Link>
              <Link href="/settings" className="transition-colors hover:text-zinc-950">
                Settings
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto flex w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
