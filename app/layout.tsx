import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactQuery } from "@/Providers/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";

const roadRage = localFont({
  src: "./fonts/RoadRage-Regular.ttf",
  variable: "--font-geist-roadRage",
  weight: "100 900",
});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ishot-it",
  description: "Ishot-it app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roadRage.variable}  ${geistMono.variable} antialiased`}
      >
        <ReactQuery>
          <AuthProvider>{children}</AuthProvider>
          <Toaster />
        </ReactQuery>
      </body>
    </html>
  );
}
