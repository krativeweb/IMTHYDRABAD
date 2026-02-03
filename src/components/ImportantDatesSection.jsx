"use client";

export default function ImportantDatesSection({ datesHtml }) {
  if (!datesHtml) return null;

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#0f265a" }}
      id="important-dates"
    >
      <div className="container">
        {/* Section Title – keep static */}
        <h2 className="text-center text-warning fw-bold mb-5">
          REMEMBER IMPORTANT DATES
        </h2>

        {/* ✅ CMS-controlled important dates */}
        <div
          dangerouslySetInnerHTML={{ __html: datesHtml }}
        />
      </div>
    </section>
  );
}
