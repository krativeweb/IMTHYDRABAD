"use client";

export default function EligibilitySection({ eligibilityHtml }) {
  if (!eligibilityHtml) return null;

  return (
    <section className="eligibility-section py-5 bg-light">
      <div className="container">
        {/* Section Title – keep static */}
        <h2 className="text-center fw-bold mb-4">Eligibility</h2>

        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-12">
            {/* ✅ CMS-controlled eligibility content */}
            <div
              dangerouslySetInnerHTML={{ __html: eligibilityHtml }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
