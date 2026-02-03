"use client";

export default function AdmissionProcessSection({ processHtml }) {
  if (!processHtml) return null;

  return (
    <section className="py-5 bg-light" id="admission">
      <div className="container">
        {/* Section Title – keep static */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Admission <span>Process</span>
          </h2>
          <p className="text-muted">
            Follow these simple steps to complete your admission
          </p>
        </div>

        {/* ✅ CMS-controlled admission steps */}
        <div
          dangerouslySetInnerHTML={{ __html: processHtml }}
        />
      </div>
    </section>
  );
}
