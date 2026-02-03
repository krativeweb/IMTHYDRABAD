// src/app/layout.jsx
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
import Script from "next/script";
import InitScripts from "@/components/InitScripts";
import NavbarWrapper from "@/components/NavbarWrapper";
import ConditionalHeadAndScripts, {
  ConditionalFooterAndExtras,
} from "./ConditionalLayoutClient";
export const metadata = {
  title: "IMT Hyderabad: Best PGDM Colleges/B Schools in Hyderabad, Telangana",
  description: "Top PGDM college in Hyderabad, Telangana",
  icons: {
    icon: "/imthyd-logo.jpg",
    shortcut: "/imthyd-logo.jpg",
    apple: "/imthyd-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Minimal required meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
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
