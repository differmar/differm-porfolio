import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Differmar",
  description: "Portfolio de Differmar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/myn6nub.css" />
      </head>
      <body
        className={`${quicksand.variable} antialiased`}
        style={{ fontFamily: "var(--font-quicksand)" }}
      >
        {children}
      </body>
    </html>
  );
}
