import "./css/style.css";

import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Aditya Kalgutkar — Web Developer",
  description:
    "Freelance web developer specializing in WordPress, Shopify, React, and Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-15803G0RQN"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-15803G0RQN');
          `}
        </Script>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={12}
          toastOptions={{
            duration: 4000,
            style: {
              background: "#141414",
              color: "#F0EFEA",
              borderRadius: "6px",
              padding: "16px",
              border: "1px solid #222",
            },
          }}
        />
      </body>
    </html>
  );
}
