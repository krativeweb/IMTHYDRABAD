// src/components/AOSInit.jsx
"use client";
import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ once: true, duration: 1000 });
    }
  }, []);
  return null;
}
