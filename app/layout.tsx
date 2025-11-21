import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
