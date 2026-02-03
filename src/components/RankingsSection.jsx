"use client";

import React from "react";

export default function RankingsSection({ featuresHtml }) {
  if (!featuresHtml) return null;

  return (
    <section className="ttm-row features-section clearfix py-4">
      <div className="container">
        <div className="row ttm-vertical_sep">
          <div className="col-12">
            {/* ✅ Render CMS HTML exactly */}
            <div
              dangerouslySetInnerHTML={{ __html: featuresHtml }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
