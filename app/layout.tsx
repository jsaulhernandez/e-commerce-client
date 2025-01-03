import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { cn } from "@/lib/utils";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodied",
  description: "Have to food & share love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("bg-background antialiased", urbanist.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
