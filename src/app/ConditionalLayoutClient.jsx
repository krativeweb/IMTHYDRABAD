"use client";
import { usePathname } from "next/navigation";
import Script from "next/script";
import InitScripts from "@/components/InitScripts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const PGDM_PAGE = "/admission/pgdm";

export default function ConditionalHeadAndScripts({ children }) {
  const pathname = usePathname();
  const isPGDMPage = pathname === PGDM_PAGE;

  return (
    <>
      {/* Global / Conditional CSS */}
      {!isPGDMPage && (
        <>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
            rel="stylesheet"
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
          />

          {/* ✅ Custom CSS (kept in /public/css/style.css) */}
          <link rel="stylesheet" href="/css/style.css" />
          <Header/>
        </>
      )}


      {children}

      {/* Conditional JS */}
      {!isPGDMPage && (
        <>
        <Footer/>
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
        </>
      )}
    </>
  );
}
