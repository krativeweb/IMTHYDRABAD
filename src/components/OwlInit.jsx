// src/components/OwlInit.jsx
"use client";
import { useEffect } from "react";

export default function OwlInit() {
  useEffect(() => {
    const initOwl = () => {
      if (!window.$ || !window.$.fn.owlCarousel) return false;

      // Initialize all Owl carousels
      window.$("#owl-demo, #placement-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1 },
          600: { items: 3 },
          1000: { items: 4 },
        },
      });

      return true;
    };

    // Try immediately
    if (initOwl()) return;

    // Poll every 100ms until Owl is ready (max 5 seconds)
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (initOwl()) {
        clearInterval(interval);
      } else if (attempts > 50) {
        console.warn("Owl Carousel failed to load after 5s");
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
}
