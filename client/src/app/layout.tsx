import { Figtree } from "next/font/google";
import localFont from "next/font/local";

import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});
const estedad = localFont({
  src: [
    {
      path: "../../public/fonts/estedad/Estedad.woff2",
      weight: "200 400 500 600 700 800 900",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      lang="fa"
      className={`${estedad.variable} ${figtree.variable}`}
    >
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gray-300">
        <Header />
        <div className="flex flex-1 justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
