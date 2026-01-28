"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProgramsSection() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ API call INSIDE this component
  useEffect(() => {
    async function fetchPrograms() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/program-offered-admission`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed to fetch programs");

        const data = await res.json();
        setPrograms(data || []);
      } catch (error) {
        console.error("Programs fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPrograms();
  }, []);

  if (loading || !programs.length) return null;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <section
      className="ttm-row programs-offered-section clearfix py-5"
      style={{ backgroundColor: "#0f265a" }}
      id="program"
    >
      <div className="container-fluid">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h2 className="section-title text-warning">Programs Offered</h2>
            <p className="section-subtitle text-white">
              Explore our diverse range of programs designed for future leaders.
            </p>
          </div>
        </div>

        {/* Programs Cards */}
        <div className="row g-4 justify-content-center">
          {programs.map((program, index) => {
            const imageUrl = program.image.startsWith("http")
              ? program.image
              : `${API_URL}/${program.image}`;

            return (
              <div
                key={program._id}
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="card h-100 shadow border-0 text-center program-card">
                  <img
                    src={imageUrl}
                    className="card-img-top"
                    alt={program.title}
                  />

                  <div className="card-body">
                    <h5 className="card-title fw-bold text-dark">
                      {program.title}
                    </h5>

                    {/* CMS HTML description */}
                    <div
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: program.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* row end */}
      </div>
    </section>
  );
}
