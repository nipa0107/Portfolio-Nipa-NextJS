import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
const inter = Inter({ subsets: ['latin'] })
import Header from './components/Header'
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio ของนักพัฒนาเว็บ",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className="container mx-auto px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}