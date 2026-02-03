"use client";

import React from "react";

export default function DiversitySection({ diversityHtml }) {
  if (!diversityHtml) return null;

  return (
    <section className="py-4" style={{ background: "#f8f9fa" }}>
      <div className="container">
        {/* ✅ CMS-controlled Diversity Blocks */}
        <div
          dangerouslySetInnerHTML={{ __html: diversityHtml }}
        />
      </div>
    </section>
  );
}
