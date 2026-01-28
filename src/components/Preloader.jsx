"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div id="preloader" className={`preloader ${loaded ? "fade-out" : ""}`}>
      <Image
        src="/media/imtpilllogo.webp"
        alt="IMT Hyderabad Logo"
        width={300}
        height={100}
        priority
        unoptimized
      />
    </div>
  );
}
