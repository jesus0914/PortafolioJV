import type { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";
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

        <main className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-12">{children}</div>
        </main>

        {/* 📱 Botón de WhatsApp (se adapta a pantallas) */}
        <div className="fixed bottom-28 right-5 md:bottom-20 z-50">
          <WhatsappWidget />
        </div>

        <Footer />

        {/* 💬 Tawk.to con offsets separados para mobile/desktop */}
        <Script
          id="tawkto"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {};
              Tawk_API.customStyle = {
                visibility: {
                  desktop: {
                    position: 'br',
                    xOffset: 20,
                    yOffset: 140
                  },
                  mobile: {
                    position: 'br',
                    xOffset: 20,
                    yOffset: 140
                  }
                }
              };
              var Tawk_LoadStart = new Date();
              (function(){
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/68afc1473b2d9e1926a2061f/1j3n8m063';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
