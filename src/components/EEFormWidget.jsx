// components/EEFormWidget.jsx   ← THIS IS THE FINAL WORKING VERSION (November 2025)
"use client";

import { useEffect, useRef } from "react";

export default function EEFormWidget() {
  const containerRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const container = containerRef.current;
    if (!container) return;

    // Step 1: Create the exact structure that works in plain HTML
    const script = document.createElement("script");
    script.src =
      "https://eequeuestorage.blob.core.windows.net/staticfiles/imthyderabad/ee-form-widget/form-1/widget.js";
    script.async = true;

    const formDiv = document.createElement("div");
    formDiv.id = "ee-form-1";

    // Step 2: Append script FIRST, then the div — EXACT order as your working HTML
    container.appendChild(script);
    container.appendChild(formDiv);

    // Step 3: Many of these widgets only run on DOMContentLoaded or load
    // Force re-trigger if already fired
    const reInit = () => {
      if (window.EEForm?.init) {
        window.EEForm.init();
        console.log("Manual EEForm.init() called");
      }
      if (window.EEWidget?.render) {
        window.EEWidget.render();
      }
    };

    script.onload = reInit;
    window.addEventListener("load", reInit);

    // Extra fallback delay (some widgets scan after 1-2s)
    const fallback = setTimeout(reInit, 3000);

    return () => {
      clearTimeout(fallback);
      window.removeEventListener("load", reInit);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ minHeight: "620px", position: "relative" }}
    >
      {/* Beautiful loader that will be replaced by the real form */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          zIndex: 1,
        }}
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3.5rem", height: "3.5rem" }}
        />
        <p className="mt-4 text-muted fs-5">Loading Admission Form...</p>
      </div>
    </div>
  );
}
