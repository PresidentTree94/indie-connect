import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";
import Link from "next/link";

const dm_sans = DM_Sans({variable: "--font-base", subsets: ["latin"],});
const space_grotesk = Space_Grotesk({variable: "--font-display", subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Indie Connect",
  description: "Collaborate and share indie projects together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${space_grotesk.variable}`}>
        <nav className="pale flex justify-between items-center px-8 bg-card h-16 fixed top-0 w-full z-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 block flex justify-center items-center bg-primary text-background rounded-xl font-bold text-xl font-display">I</span>
            <h3>Indie Connect</h3>
          </Link>
          <div className="flex gap-6 font-medium">
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <a>Ideas</a>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-emphasis font-medium rounded-xl border border-emphasis">Create Project</button>
            <Link href="/profile" className="px-4 py-2 bg-primary text-background font-medium rounded-xl">Profile</Link>
          </div>
        </nav>
        <main className="mt-16 px-8 py-20 max-w-7xl mx-auto flex flex-col gap-20">{children}</main>
      </body>
    </html>
  );
}
