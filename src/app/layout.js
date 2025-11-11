// src/app/layout.jsx
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
import Script from "next/script";
import InitScripts from "@/components/InitScripts";
import NavbarWrapper from "@/components/NavbarWrapper";
export const metadata = {
  title: "IMT Hyderabad: Best PGDM Colleges/B Schools in Hyderabad, Telangana",
  description: "Top PGDM college in Hyderabad, Telangana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<meta name="robots" content="index, follow" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Bootstrap */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
            media="print"
          onLoad="this.media='all'"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
          rel="stylesheet"
            media="print"
          onLoad="this.media='all'"
        ></link>
        {/* Owl Carousel */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
            media="print"
          onLoad="this.media='all'"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
            media="print"
          onLoad="this.media='all'"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
          rel="stylesheet"
            media="print"
          onLoad="this.media='all'"
        ></link>
        {/* AOS */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
            
        />

        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
            media="print"
          onLoad="this.media='all'"
        />

        {/* ✅ Custom CSS (kept in /public/css/style.css) */}
        <link rel="stylesheet" href="/css/style.css" />
      </head>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
       <NavbarWrapper />
        <main>{children}</main>
        <Footer />
        <AOSInit />

        {/* ✅ External Scripts in proper order */}
        {/* ✅ Load jQuery first — before anything else */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"
          strategy="afterInteractive"
        />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <InitScripts />
      </body>
    </html>
  );
}
