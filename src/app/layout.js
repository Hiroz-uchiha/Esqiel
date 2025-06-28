import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Beranda from "./Beranda";
import Navbar from "./Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EsqielDB",
  description: "Website pembelajaran Database Mysql dan mongodb terlengkap",
  icons: { icon: "/logoesqiel.png" }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Hand+Pre:wght@400..700&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Hand+Pre:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Hand+Pre:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,500;1,500&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap" rel="stylesheet"></link>

        {/* Google */}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8ABCDE123"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8ABCDE123');
  `}
        </Script>



      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white flex h-screen flex-col`}
      >
        <Navbar />
        <div className="flex flex-1 h-screen">
          <Beranda />
          <div className=" flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
