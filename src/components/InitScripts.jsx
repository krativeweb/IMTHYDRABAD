"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function InitScripts() {
  const pathname = usePathname(); // Detect route changes

  useEffect(() => {
    const checkReady = setInterval(() => {
      const $ = window.$;
      if (window.jQuery && window.AOS && $?.fn?.owlCarousel) {
        console.log("✅ Scripts loaded successfully");

        // Initialize AOS
        window.AOS.init();
        window.AOS.refresh();

        // Initialize Owl Carousel if it exists and not already initialized
        const $carousel = $("#researchCardCarousel");
        if ($carousel.length && !$carousel.hasClass("owl-loaded")) {
          $carousel.owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              992: { items: 4 },
            },
          });
        }

        clearInterval(checkReady);
      }
    }, 300);

    return () => clearInterval(checkReady);
  }, [pathname]); // ✅ Add pathname as dependency

  return null;
}
