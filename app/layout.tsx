import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import "./globals.css";
// components
import Header from "@/components/header";
// utils
import { cn } from "@/lib/utils";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodied",
  description: "Have to food & share love",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("bg-background antialiased", urbanist.variable)}>
          <Image
            src="/img/hero.svg"
            alt=""
            className="absolute -z-10 top-0 right-0 w-full md:w-[60%]"
            width={100}
            height={100}
          />
          <Header userId={userId} />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
