import type { Metadata } from "next";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import "./globals.css";
const inter = Inter({ subsets: ['latin'] })
import Header from './components/Header'
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio ของนักพัฒนาเว็บ",
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
    apple: '/Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/Logo.png" />
      </Head>
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