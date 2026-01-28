"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import InitScripts from "@/components/InitScripts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PGDM_PAGE = "/admissions/pgdm";
const THANK_YOU_PAGE = "/admissions/pgdm-thankyou";

export default function ConditionalHeadAndScripts({ children }) {
  const pathname = usePathname();
  const isPGDMPage = pathname === PGDM_PAGE;
  const isThankYouPage = pathname === THANK_YOU_PAGE;

  return (
    <>
      {/* =======================
          GLOBAL / CONDITIONAL CSS
      ======================= */}
      {!isPGDMPage && !isThankYouPage && (
        <>
          {/* Bootstrap */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          />

          {/* Bootstrap Icons */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          />

          {/* Google Fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
          />

          {/* Owl Carousel CSS */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
          />

          {/* AOS CSS (ONLY ONE VERSION) */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
          />

          {/* FontAwesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          />

          {/* Custom CSS */}
          <link rel="stylesheet" href="/css/style.css" />

          <Header />
        </>
      )}

      {/* =======================
              PAGE CONTENT
      ======================= */}
      {children}

      {/* =======================
          CONDITIONAL JS + FOOTER
      ======================= */}
      {!isPGDMPage && !isThankYouPage && (
        <>
          <Footer />

          {/* jQuery MUST load first */}
          <Script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            strategy="beforeInteractive"
          />

          {/* Bootstrap JS */}
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            strategy="afterInteractive"
          />

          {/* Owl Carousel */}
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
            strategy="afterInteractive"
          />

          {/* AOS JS (ONLY ONE VERSION) */}
          <Script
            src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"
            strategy="afterInteractive"
          />

          {/* Your custom JS (LAST) */}
          <Script
            src="/js/main.js"
            strategy="lazyOnload"
            onLoad={() => {
              // Ensure plugins initialize AFTER everything is ready
              if (window.AOS) {
                window.AOS.init({ once: true });
              }
            }}
          />

          <InitScripts />
        </>
      )}
    </>
  );
}
