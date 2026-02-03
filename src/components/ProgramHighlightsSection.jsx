"use client";
import React, { useState, useEffect } from "react";

export default function ProgramHighlightsSection({
  highlightsHtml,
  knowMoreHtml,
}) {
  const [showFaq, setShowFaq] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    email: "",
    mobile: "",
  });

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/contact-info`,
        );
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setContactInfo({
            email: data[0].admission_pgdm_email,
            mobile: data[0].admission_mobile,
          });
        }
      } catch (error) {
        console.error("Failed to fetch contact info", error);
      }
    };

    fetchContactInfo();
  }, []);
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
      {/* CONTACT STRIP (API BASED) */}
      {(contactInfo.email || contactInfo.mobile) && (
        <section className="contact-strip">
          <div className="container">
            <div className="strip-inner">
              <h4>Contact Details</h4>

              <div className="strip-info">
                {contactInfo.email && (
                  <span>
                    <strong>Email ID :</strong>{" "}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="contact-link"
                    >
                      {contactInfo.email}
                    </a>
                  </span>
                )}

                {contactInfo.email && contactInfo.mobile && (
                  <span className="divider">|</span>
                )}

                {contactInfo.mobile && (
                  <span>
                    <strong>Phone :</strong> {contactInfo.mobile}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
