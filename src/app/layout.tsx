import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import StickyCursor from "@/components/StickyCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sticky Cursor Demo",
  description:
    "Demo of a sticky cursor react component made with framer motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={clsx(inter.className, "bg-white")}>
        <StickyCursor />
        {children}
      </body>
    </html>
  );
}
