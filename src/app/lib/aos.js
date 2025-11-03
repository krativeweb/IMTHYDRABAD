// src/lib/aos.jsx
"use client";
import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    import("aos").then((AOS) => AOS.init({ duration: 1000, once: true }));
  }, []);
  return null;
}