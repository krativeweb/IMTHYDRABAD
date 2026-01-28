"use client";
import React, { useState } from "react";

export default function ProgramHighlightsSection({
  highlightsHtml,
  knowMoreHtml,
}) {
  const [showFaq, setShowFaq] = useState(false);

  if (!highlightsHtml) return null;

  return (
    <>
      {/* PROGRAM HIGHLIGHTS */}
      <section className="py-5" style={{ background: "#0f265a" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-warning">
            PROGRAM HIGHLIGHTS
          </h2>

          <div dangerouslySetInnerHTML={{ __html: highlightsHtml }} />
        </div>
      </section>

      {/* KNOW MORE BAND */}
      {knowMoreHtml && (
        <section style={{ background: "#0f2559" }}>
          <div className="container py-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            <h3 className="mb-0 text-white fw-semibold">
              Know more about IMT-Hyderabad
            </h3>

            <button
              className="btn btn-warning px-4 py-2 fw-semibold"
              onClick={() => setShowFaq(!showFaq)}
              style={{ background: "#ffc108" }}
            >
              {showFaq ? "Hide" : "Read More"}
            </button>
          </div>
        </section>
      )}

      {/* KNOW MORE CONTENT (DYNAMIC) */}
      {showFaq && knowMoreHtml && (
        <section className="py-4 bg-white">
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: knowMoreHtml }} />
          </div>
        </section>
      )}
    </>
  );
}
