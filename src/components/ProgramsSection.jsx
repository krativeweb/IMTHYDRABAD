// components/ProgramsSection.jsx
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function ProgramsSection() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
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
          {/* Program 1 */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="card h-100 shadow border-0 text-center program-card">
              <img
                src="/media/img/b.webp"
                className="card-img-top"
                alt="PGDM"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">PGDM</h5>
                <p className="card-text">
                  Build strong foundations in management, strategy, and
                  leadership across all business functions.
                </p>
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="card h-100 shadow border-0 text-center program-card">
              <img
                src="/media/img/d.webp"
                className="card-img-top"
                alt="PGDM Finance"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">PGDM (Finance)</h5>
                <p className="card-text">
                  Gain expertise in corporate finance, investment analysis, risk
                  management, and financial planning.
                </p>
              </div>
            </div>
          </div>

          {/* Program 3 */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="card h-100 shadow border-0 text-center program-card">
              <img
                src="/media/img/c.webp"
                className="card-img-top"
                alt="PGDM Marketing"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">
                  PGDM (Marketing)
                </h5>
                <p className="card-text">
                  Master brand strategy, market research, digital marketing, and
                  customer engagement techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Program 4 */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="card h-100 shadow border-0 text-center program-card">
              <img
                src="/media/img/a.webp"
                className="card-img-top"
                alt="PGDM Logistics & Supply Chain Management"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">
                  PGDM (Logistics & Supply Chain Management)
                </h5>
                <p className="card-text">
                  Learn procurement, inventory control, and end-to-end supply
                  chain optimization for seamless operations.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
    </section>
  );
}
