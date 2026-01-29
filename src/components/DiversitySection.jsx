// components/DiversitySection.jsx
import Image from "next/image";
import React from "react";

export default function DiversitySection() {
  return (
    <section className="py-4" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <div
          className="row g-4 justify-content-center"
          style={{ maxWidth: 1000, margin: "auto" }}
        >
          {/* Gender Diversity */}
          <div className="col-12 col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center">
              <img
                src="/admission/media/gen.jpg"
                alt="Gender Diversity"
                className="img-fluid rounded-3 mb-3"
              />
              <h5 className="fw-semibold text-warning mt-2">
                Gender Diversity
              </h5>
            </div>
          </div>
          {/* Work Experience */}
          <div className="col-12 col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center">
              <img
                src="/admission/media/work.jpg"
                alt="Work Experience"
                className="img-fluid rounded-3 mb-3"
              />
              <h5 className="fw-semibold text-warning mt-2">Work Experience</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
