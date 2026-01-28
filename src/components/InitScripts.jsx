"use client";

import { useEffect } from "react";

export default function InitScripts() {
  useEffect(() => {
    // Run AFTER browser paint & hydration
    const init = () => {
      if (typeof window === "undefined") return;

      // ---- AOS ----
      if (window.AOS) {
        window.AOS.refreshHard();
      }

      // ---- Owl Carousel ----
      if (window.jQuery) {
        const $ = window.jQuery;
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
      }
    };

    // Run once after mount
    requestAnimationFrame(init);

  }, []); // 🔥 RUN ONCE ONLY

  return null;
}
