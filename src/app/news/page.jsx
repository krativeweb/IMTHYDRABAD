"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function NewsSection() {
  // Initialize AOS
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }, []);

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Styles */}
      <style jsx global>{`
        .faculty-hero {
          background: url("/media/banners/newsletter.webp") center/cover no-repeat;
          position: relative;
          height: 60vh;
        }
        .faculty-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }
        .faculty-hero h2,
        .faculty-hero p {
          position: relative;
          z-index: 1;
        }
        .faculty-hero h2 {
          margin-top: 150px;
        }
        .faculty-card {
          background: #f8f9fa;
          border: none;
          border-radius: 1.5rem;
        }
        .faculty-img {
          border-radius: 1.2rem;
          transition: transform 0.4s ease;
        }
        .faculty-img:hover {
          transform: scale(1.03);
        }
        .social-icon {
          display: inline-flex;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          background: #ffc107;
          color: #ffffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
          color: #ffffffff;
          transform: translateY(-3px);
        }
        .faculty-tabs .nav-pills .nav-link {
          border-radius: 50rem;
          background: #e9ecef;
          color: #333;
          transition: all 0.3s;
        }
        .faculty-tabs .nav-pills .nav-link.active {
          background: #ffc107;
          color: #000000ff;
        }
      `}</style>

      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-2">News</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi illum
            <br /> facere fuga eaque ducimus, praesentium in distinctio
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ backgroundColor: "rgb(22, 57, 119)" }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  News
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* News Section */}
        <section>
          <div className="container bg-white p-4 mb-4 rounded-4">
            <div className="mb-4">
              <h2 className="fw-bold text-center mt-2" style={{ color: "#022D7C" }}>
                NEWS
              </h2>
            </div>

            <p className="mb-4">DIRECTOR VISIT TO EAIE CONFERENCE 2015 AT GLASGOW, UK</p>

            <div className="card mb-4 w-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/images/news1.webp" className="img-fluid rounded-start" alt="News 1" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p>
                      Dr. Satish Ailwadi, Director, IMT Hyderabad had visited EAIE Conference 2015 at Glasgow, UK during
                      15th - 18th September 2015.
                    </p>
                    <p>
                      He had met representatives of over 35 different business schools from Europe and Latin America. Out of
                      which the following universities showed keen interest in having tie up with IMT
                    </p>
                    <p>
                      <strong>Group:</strong>
                    </p>
                    <div className="crs_list">
                      <ul>
                        {[
                          "Universidad Autonoma de Baja California, Mexico",
                          "University of Vic Central University of Catalonia, Barcelona",
                          "Universite de Bourgogne, France",
                          "IPEK University, Turkey",
                          "La Rochelle Business School, France",
                          "EBC Hochschule, Berlin, Germany",
                          "University of Hull, UK",
                          "University of La Laguna, Laguna, Canary Islands",
                        ].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3 w-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/images/news2.webp" className="img-fluid rounded-start" alt="News 2" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p>
                      To begin with, most of the business schools are keen in establishing tie ups with IMT Group in respect
                      of the following:
                    </p>
                    <div className="crs_list">
                      <ul>
                        {[
                          "Student Exchange on one term basis – both ways",
                          "Faculty Exchange to facilitate a course – both ways",
                          "Short term exchange program with an objective of country immersion in the form of summer school, etc.",
                          "Joint Research Publications",
                        ].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}