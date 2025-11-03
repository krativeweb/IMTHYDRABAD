"use client";
import Link from "next/link";
export default function ProgramsOffered() {
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
          {/* Program 1 */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="card h-100 shadow border-0 text-center program-card">
             <Link href="/pgdm-course-in-hyderabad">
               <img
                src="/media/img/b.webp"
                className="card-img-top"
                alt="PGDM"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">PGDM Programs</h5>
                <p className="card-text">
                  Gain expertise in financial management, investment strategies,
                  and corporate finance.
                </p>
              </div>
             </Link>
            </div>
          </div>

          {/* Program 2 */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="card h-100 shadow border-0 text-center program-card">
              <Link href="/fpm-program-hyderabad">
                <img
                src="/media/img/d.webp"
                className="card-img-top"
                alt="Fellow Program in Management"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">
                  Fellow Program in Management
                </h5>
                <p className="card-text">
                  Develop skills in brand management, market research, and
                  financial strategies.
                </p>
              </div>
              </Link>
            </div>
          </div>

          {/* Program 3 */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="card h-100 shadow border-0 text-center program-card">
              <Link href="/executive-education">
                <img
                src="/media/img/c.webp"
                className="card-img-top"
                alt="Executive Education"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">
                  Executive Education
                </h5>
                <p className="card-text">
                  Learn effective talent management, organizational behavior,
                  and leadership skills.
                </p>
              </div>
              </Link>
            </div>
          </div>

          {/* Uncomment below if you want Programs 4 & 5 */}
          {/* 
          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="card h-100 shadow border-0 text-center program-card">
              <img src="https://www.imthyderabad.edu.in/imt/images/pgdm-it.webp" className="card-img-top" alt="PGDM IT" />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">PGDM (Information Technology)</h5>
                <p className="card-text">
                  Explore technology strategy, project management, and information systems leadership.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="500">
            <div className="card h-100 shadow border-0 text-center program-card">
              <img src="https://www.imthyderabad.edu.in/imt/images/pgdm-logistics-updated.png" className="card-img-top" alt="PGDM Logistics" />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">PGDM (Logistics & Supply Chain)</h5>
                <p className="card-text">
                  Master supply chain, logistics, and process optimization strategies for businesses.
                </p>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
