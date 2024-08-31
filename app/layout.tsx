import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "./loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Who did you offend?",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${inter.className} bg-zinc-900 flex justify-center items-center flex-col gap-16`}
      >
        <div className=" text-zinc-200 font-mono text-5xl text-center underline">
          Who did you offend?
        </div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
