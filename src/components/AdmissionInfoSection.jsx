"use client";

export default function AdmissionInfoSection({ infoHtml }) {
  if (!infoHtml) return null;

  return (
    <section className="ttm-row features-section clearfix" id="more">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* ✅ CMS-controlled admission information */}
            <div
              dangerouslySetInnerHTML={{ __html: infoHtml }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
