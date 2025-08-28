import type { Metadata } from "next";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsappWidget from "./components/whatsappWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesús Villarreal | Portafolio",
  description: "Ingeniero de Sistemas - Desarrollador Full Stack",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
        <Navbar />
        
        <main className="max-w-6xl mx-auto px-6 py-12">{children}
         <WhatsappWidget /> {/* ✅ Se carga en todas las páginas */}
        </main>
        <Footer />
        
      </body>
    </html>
  );
}
