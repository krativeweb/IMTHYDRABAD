"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const SponsoredResearch = () => {
  useEffect(() => {
    // Only initialize AOS
    const initAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default;
        AOS.init({
          duration: 1200,
          once: true,
          offset: 100,
        });
      }
    };

    initAOS();
  }, []);

  return (
    <div className="sponsored-research-page">
      {/* Hero Section */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url('/media/banners/Group 9.jpg') no-repeat center center`,
            backgroundSize: "cover",
            height: "60vh",
            position: "relative",
          }}
        >
          <div
            style={{
              content: '""',
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 1,
            }}
          />
          <div
            className="hero-content"
            style={{ position: "relative", zIndex: 2, marginTop: "150px" }}
          >
            <h2 className="display-5 fw-bold mb-2">
              Sponsored Research & Advisory Services
            </h2>
            <p className="text-white">
              Advancing knowledge through collaboration and impact. <br />
              Our sponsored research initiatives address real-world challenges
              through industry partnerships and academic expertise.
            </p>
          </div>
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
                  Sponsored Research & Advisory Services
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Tabs Section */}
        <section id="research-tabs" className="py-5 faculty-tabs">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <h2
              className="text-center fw-bold mb-4"
              style={{ color: "#08317a" }}
            >
              Sponsored Research & Advisory Services
            </h2>

            {/* Tabs Navigation */}
            <ul
              className="nav nav-pills justify-content-center mb-4"
              id="researchTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fw-bold"
                  id="sponsored-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#sponsored"
                  type="button"
                  role="tab"
                  aria-controls="sponsored"
                  aria-selected="true"
                >
                  Sponsored Research
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw-bold"
                  id="advisory-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#advisory"
                  type="button"
                  role="tab"
                  aria-controls="advisory"
                  aria-selected="false"
                >
                  Advisory Services
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="tab-content" id="researchTabContent">
                  {/* === Sponsored Research Tab === */}
                  <div
                    className="tab-pane fade show active"
                    id="sponsored"
                    role="tabpanel"
                    aria-labelledby="sponsored-tab"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <p>
                          IMT Hyderabad undertakes sponsored research in
                          collaboration with leading industry partners,
                          government organizations, and academic institutions.
                          Our research spans areas like business analytics,
                          finance, marketing, operations, sustainability, and
                          technology management. The aim is to generate
                          actionable insights, promote innovation, and
                          contribute to academic and industry knowledge.
                        </p>
                        <p>
                          Our sponsored research projects have consistently led
                          to impactful publications, patents, and knowledge
                          dissemination through conferences and workshops.
                        </p>
                        <p>
                          IMT Hyderabad has been working with National and
                          International organizations in private and public
                          sector to carry out research and generate knowledge
                          for the benefit of the Society. The focus of research
                          includes cost management, quantitative studies,
                          Information Systems, Marketing Research,
                          Sustainability, operational efficiency, productivity
                          improvement, etc.
                        </p>
                        <p>
                          The institute had the following studies in recent
                          times:
                        </p>

                        <h5 className="fw-bold mt-4 text-center">
                          Completed Projects:
                        </h5>
                        <ul className="list-unstyled ps-3">
                          <li className="mb-2">
                            <strong>
                              Study on Impact of Covid Pandemic on Small and
                              Medium Enterprises (SMEs)
                            </strong>{" "}
                            in collaboration with Confederation of Indian
                            Industry (CII). The team comprising 3 Faculty
                            Members.
                          </li>
                          <li className="mb-2">
                            <strong>
                              Study on Design and Implementation of Activity
                              Based Costing
                            </strong>{" "}
                            in collaboration with ACG Capsules Pvt. Ltd (ACG).
                            The team comprising 3 Faculty Members.
                          </li>
                          <li className="mb-2">
                            <strong>
                              Study on Adoption of Cashless transactions at
                              small merchants in Tier 2 & 3 cities of Telangana
                            </strong>{" "}
                            in collaboration with National Payments Corporation of India
                            (NPCI). The team comprising 3 Faculty Members.
                          </li>
                          <li className="mb-2">
                            <strong>
                              Study on Defaults in SHG-Bank Linkage Program in
                              Andhra Pradesh
                            </strong>{" "}
                            in collaboration with National Bank of Agriculture
                            and Rural Development (NABARD). The team comprising
                            3 Faculty Members.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* === Advisory Services Tab === */}
                  <div
                    className="tab-pane fade"
                    id="advisory"
                    role="tabpanel"
                    aria-labelledby="advisory-tab"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <p>
                          IMT Hyderabad has expertise in various research areas
                          to provide knowledge and intellectual inputs which are
                          of interest to the industry and other organizations.
                          The institute undertakes both long term and short term
                          collaborative research activities to solve key
                          problems faced by the industry clients.
                        </p>
                        <p>
                          The advisory services are provided by a team of
                          faculty members with sufficient expertise on a matter
                          of operational and strategic importance. The value of
                          the advisory team provides not only includes an
                          in-depth and external analysis of the problem but also
                          an assessment on the ramifications associated with
                          implementation of a particular solution suggested.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* === CSS (Scoped with <style jsx>) === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Hero Section */
      .faculty-hero {
        position: relative;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
      }
      .hero-content {
        position: relative;
        z-index: 2;
      }

      /* Tabs Styling */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #08317a;
        margin: 0 10px;
        transition: all 0.3s;
        padding: 10px 25px;
        font-size: 1rem;
      }

      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000 !important;
      }

      /* Card */
      .card {
        border-radius: 1rem;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .hero-content {
          margin-top: 100px !important;
        }
        .nav-pills .nav-link {
          margin: 5px !important;
          font-size: 0.9rem;
          padding: 8px 16px;
        }
      }
    `,
        }}
      />
    </div>
  );
};

export default SponsoredResearch;
