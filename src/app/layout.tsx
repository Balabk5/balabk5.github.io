import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicons.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Balakumar M - Full-Stack Developer & UX/UI Designer",
  description:
    "Portfolio of Balakumar M, a Full-Stack Developer and UX/UI Designer specializing in web accessibility, React, Angular, and modern web technologies. Based in Tamil Nadu, India.",
  keywords: [
    "Full-Stack Developer",
    "UX/UI Designer",
    "Web Developer",
    "React",
    "Angular",
    "TypeScript",
    "Web Accessibility",
    "Portfolio",
  ],
  authors: [{ name: "Balakumar M" }],
  openGraph: {
    title: "Balakumar M - Full-Stack Developer & UX/UI Designer",
    description:
      "Portfolio showcasing projects in web development, UI/UX design, and machine learning applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balakumar M - Full-Stack Developer & UX/UI Designer",
    description:
      "Portfolio showcasing projects in web development, UI/UX design, and machine learning applications.",
    creator: "@Thedevbk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
