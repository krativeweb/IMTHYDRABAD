"use client";

import React from "react";

export default function AdvantagesSection({ advantagesHtml }) {
  if (!advantagesHtml) return null;

  return (
    <section
      className="ttm-row introduction-section_1 py-5"
      id="about"
      style={{ background: "#f8f9fa" }}
    >
      <div className="container">
        {/* Section Title – keep static (SEO + consistency) */}
        <div className="section-title title-style-center_text mb-5">
          <div className="title-header">
            <h2 className="title">Advantage of IMT Hyderabad</h2>
            <h5 className="mt-3">
            Innovate • Create • Transform • Dominate
            </h5>
          </div>
          <div className="heading-seperator text-center">
            <span />
          </div>
        </div>

        {/* ✅ CMS-controlled advantage boxes */}
        <div
          dangerouslySetInnerHTML={{ __html: advantagesHtml }}
        />
      </div>
    </section>
  );
}
