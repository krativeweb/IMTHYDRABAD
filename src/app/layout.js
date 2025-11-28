// src/app/layout.jsx
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
import Script from "next/script";
import InitScripts from "@/components/InitScripts";
import NavbarWrapper from "@/components/NavbarWrapper";
import GoogleTagManager from "@/components/Analytics/GoogleTagManager";
import ClarityScript from "@/components/Analytics/ClarityScript";
import ConditionalHeadAndScripts, {
  ConditionalFooterAndExtras,
} from "./ConditionalLayoutClient";
import { getMetadata } from "@/utils/getMetadata";



export async function generateMetadata() {
  const fallbackSEO = getMetadata("/");

  return {
    ...fallbackSEO,
    icons: {
      icon: "/imthyd-logo.jpg",
      shortcut: "/imthyd-logo.jpg",
      apple: "/imthyd-logo.jpg",
    },
    verification: {
      google: "Pj9TR1mJn2yGb757lYXOqtgVymre8cK7STLaLLETt98",
      other: {
        "msvalidate.01": "56D96AD8B0551D1F20D444BB7B6B6BE0",
      },
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Minimal required meta tags */}
        <meta charSet="UTF-8" />
   
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HVZVXG6M1M"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-HVZVXG6M1M');
      `,
    }}
  />

 
      </head>
      <body>
        <GoogleTagManager />
        <ClarityScript />
        <ConditionalHeadAndScripts>
          <NavbarWrapper />
          <main>{children}</main>
          {/* <Footer /> */}

          
          {/* <AOSInit /> */}
        </ConditionalHeadAndScripts>
        
      </body>
    </html>
  );
}
