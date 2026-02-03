"use client";

import React from "react";

export default function PlacementsSection({ placementHtml }) {
  if (!placementHtml) return null;

  return (
    <section className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container-fluid">
        {/* Section Heading – keep static */}
        <h2 className="text-center fw-bold mb-5 text-warning text-uppercase">
          Impeccable Placements
        </h2>

        {/* ✅ CMS-controlled placement cards */}
        <div
          dangerouslySetInnerHTML={{ __html: placementHtml }}
        />
      </div>
    </section>
  );
}
