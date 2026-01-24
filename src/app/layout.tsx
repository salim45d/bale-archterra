import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import AOSWrapper from "@/components/aos/aos";

const mulish = localFont({
  src: "./fonts/Mulish-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  title: "Bale Archterra",
  description: "Constructions Service",
  icons: {
    icon: [
      {
        url: "/bale-archterra.svg",
        href: "/bale-archterra.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className}`}>
        <AOSWrapper>{children}</AOSWrapper>
        <Analytics />
      </body>
    </html>
  );
}
