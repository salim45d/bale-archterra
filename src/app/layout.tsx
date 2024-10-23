import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const mulish = localFont({
  src: "./fonts/Mulish-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  title: "Bale Archterra",
  description: "Constructions Service",
  icons: {
    icon: [
      {
        url: "/bale-archterra.png",
        href: "/bale-archterra.png",
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
      <body className={`${mulish.className}`}>{children}</body>
    </html>
  );
}
