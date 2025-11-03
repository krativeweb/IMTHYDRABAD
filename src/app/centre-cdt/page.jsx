"use client";

import Image from "next/image";
import Link from "next/link";

export default function CentreDigitalTransformation() {
  return (
    <>
      {/* Top Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: "url(./media/banners/cdt.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            height: "60vh",
          }}
        >
          <div
            style={{
              content: '""',
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.3)",
            }}
          />
          <h2
            className="display-5 fw-bold mb-2"
            style={{ position: "relative", zIndex: 1, marginTop: "150px" }}
          >
            Centre For Digital Transformation
          </h2>
          <p className="text-white" style={{ position: "relative", zIndex: 1 }}>
            Driving innovation in the digital era. <br />
           Our Center for Digital Transformation explores emerging technologies, data-driven strategy, and digital leadership excellence.
          </p>
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22, 57, 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link
                    href="/"
                    className="text-white fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Centre For Digital Transformation
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mt-5 mb-5">
        <h2
          className="section-title text-center mb-4"
          style={{ color: "#08317a" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Centre For Digital Transformation
        </h2>

        {/* Sub Tabs: About | People */}
        <div className="tab-content">
          <div
            className="tab-pane fade show active bg-white p-4 rounded-4"
            id="tab-digi"
          >
            <nav className="nav nav-pills flex-wrap gap-3 justify-content-center mb-5 mt-4">
              <Link
                className="nav-link bg-light text-dark rounded-pill px-4 py-2 active"
                data-bs-toggle="pill"
                href="#sub-res-digiabt"
                role="tab"
              >
                About
              </Link>
              <Link
                className="nav-link bg-light text-dark rounded-pill px-4 py-2"
                data-bs-toggle="pill"
                href="#sub-res-digipep"
                role="tab"
              >
                People
              </Link>
            </nav>

            <div className="tab-content">
              {/* === ABOUT TAB === */}
              <div className="tab-pane fade show active" id="sub-res-digiabt">
                <p>
                  “Digital transformation as more than just technology, it’s
                  about rethinking business models, operations, and
                  relationships with customers and ecosystems.” The
                  transformational world of business environment in the digital
                  space has redefined parameters of success and competitiveness.
                  In this context, IMT Hyderabad proposes to set up a Centre for
                  Digital Transformation to provide research and other
                  collaborative insights for Digital Transformation initiatives
                  and provide significant value to a range of stakeholders
                  including corporates, government organisations, non-government
                  organisations, advisory & think tank organisations and
                  students. Using various conceptual frameworks that integrate
                  theories and developments in information systems, economics
                  and other business disciplines, the centre examines digital
                  transformation, emphasizing on the following topics but not
                  limited to
                </p>
                <br />
                <ul className="list-unstyled ps-3">
                  {[
                    "Role of Artificially intelligent (AI) technologies in organizational and societal transformation",
                    "Digital processes, products, platforms, and services",
                    "Digital customer experience",
                    "Building online marketplaces",
                    "Digitally enabled customer participation for co-creation and co-innovation",
                    "Digital business strategy",
                    "Digital value chain innovations",
                    "Digital architectures and governance models",
                    "Business analytics",
                    "Human emotions and sentiments in the digitized world",
                    "Digitization and transformation of work",
                    "Effects of digitization on jobs, incomes, and wages",
                  ].map((item, i) => (
                    <li key={i} className="mb-2 position-relative ps-4">
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#ffc107",
                          fontWeight: "bold",
                        }}
                      >
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <br />
                <h4 style={{ color: "#08317a" }}>
                  <b>Objective of the Centre for Digital Transformation</b>
                </h4>
                <p>
                  The Centre for Digital Transformation aims to provide thought
                  leadership through action research projects and round table
                  discussions in order to promote Digital Transformation of the
                  collaborating partners and community as a whole.
                </p>
                <br />
                <h4 style={{ color: "#08317a" }}>
                  <b>Activities of the Centre for Digital Transformation</b>
                </h4>
                <ul className="list-unstyled ps-3">
                  {[
                    "Entering into MoUs with organisations engaged in Digital Transformation",
                    "Engaging in practitioner and scholarly research for mutual benefit of industry and academics",
                    "Conducting training programs on Digital Transformation",
                    "Conducting seminars on Digital Transformation",
                    "Funding long-term research studies undertaken by IMT H faculty.",
                  ].map((item, i) => (
                    <li key={i} className="mb-2 position-relative ps-4">
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#ffc107",
                          fontWeight: "bold",
                        }}
                      >
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* === PEOPLE TAB === */}
              <div className="tab-pane fade" id="sub-res-digipep">
                {/* Advisory Council */}
                <div className="mb-5">
                  <h5
                    className="text-center fw-bold fs-3 mb-4"
                    style={{ color: "#163977" }}
                  >
                    ADVISORY COUNCIL
                  </h5>
                  <div className="row g-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="col-12 col-md-6">
                        <div className="card h-100 p-4 shadow-sm border-0">
                          <div className="row g-0">
                            <div className="col-5">
                              <Image
                                src="/media/csr-dt/1.webp"
                                alt="Member"
                                width={200}
                                height={224}
                                className="img-fluid rounded-start"
                                style={{ height: "14rem", objectFit: "cover" }}
                              />
                            </div>
                            <div className="col-7">
                              <div className="card-body p-3">
                                <p className="card-title fw-bold mb-1">
                                  Shri Ashok K. Pavadia
                                </p>
                                <p className="card-text small text-muted mb-0">
                                  Founder & Director
                                </p>
                                <p className="card-text small text-muted mb-0">
                                  Council for Research on Policy and Governance
                                </p>
                                <p className="card-text small text-muted mb-2">
                                  Lead expert and Mentor
                                </p>
                                <button className="btn btn-warning text-dark px-3 py-2 rounded-pill fw-semibold">
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Affiliated Faculty & Practitioners */}
                <div>
                  <h5
                    className="text-center fw-bold fs-3 mb-4"
                    style={{ color: "#163977" }}
                  >
                    AFFILIATED FACULTY & PRACTITIONERS
                  </h5>
                  <div className="row g-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="col-12 col-md-6">
                        <div className="card h-100 p-4 shadow-sm border-0">
                          <div className="row g-0">
                            <div className="col-5">
                              <Image
                                src="/media/csr-dt/2.webp"
                                alt="Faculty"
                                width={200}
                                height={224}
                                className="img-fluid rounded-start"
                                style={{ height: "14rem", objectFit: "cover" }}
                              />
                            </div>
                            <div className="col-7">
                              <div className="card-body p-3">
                                <p className="card-title fw-bold mb-1">
                                  Shri Ashok K. Pavadia
                                </p>
                                <p className="card-text small text-muted mb-0">
                                  Founder & Director
                                </p>
                                <p className="card-text small text-muted mb-0">
                                  Council for Research on Policy and Governance
                                </p>
                                <p className="card-text small text-muted mb-2">
                                  Lead expert and Mentor
                                </p>
                                <button className="btn btn-warning text-dark px-3 py-2 rounded-pill fw-semibold">
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS (can be moved to globals.css later) */}
      <style jsx global>{`
        /* Active tab yellow */
        .nav-pills .nav-link.active {
          background-color: #ffc107 !important;
          color: #000 !important;
        }

        /* Sub-tab spacing */
        .nav-pills .nav-link {
          min-width: 79px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .nav-pills .nav-link:hover {
          background-color: #e0a800 !important;
          transform: translateY(-2px);
        }

        /* List bullets */
        ul.list-unstyled li:before {
          content: "•";
          color: #ffc107;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        /* Card shadow on hover */
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
          transition: all 0.3s ease;
        }

        /* Responsive images */
        .rounded-start {
          object-fit: cover;
        }
      `}</style>
    </>
  );
}
