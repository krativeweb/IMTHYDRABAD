"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import axios from "axios";

export default function ProgramsOffered() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/program-offered`
        );

        if (res.data?.success) {
          setPrograms(res.data.data.filter((item) => item.isDeleted === false));
        }
      } catch (error) {
        console.error("Failed to fetch programs", error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <section
      className="ttm-row programs-offered-section clearfix py-4"
      id="program"
    >
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h6
              className="subtitle text-center text-warning"
              data-aos="fade-up"
            >
              Our Programs
            </h6>
            <h2
              className="section-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Programs Offered
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Explore our diverse range of programs designed for future leaders.
            </p>
          </div>
        </div>

        {/* Programs Cards */}
        <div className="row g-4 justify-content-center">
          {programs.map((program, index) => (
            <div
              key={program._id}
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="card h-100 shadow border-0 text-center program-card">
                <Link
                  href={
                    program.title === "PGDM Programs"
                      ? "/pgdm-course-in-hyderabad"
                      : program.title === "Fellow Program in Management"
                      ? "/fpm-program-hyderabad"
                      : "/executive-education"
                  }
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${program.image}`}
                    className="card-img-top"
                    alt={program.title}
                  />

                  <div className="card-body">
                    <h5 className="card-title fw-bold text-dark">
                      {program.title}
                    </h5>

                    <div
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(program.description),
                      }}
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
