"use client";

import { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default function PGDMLSCMSection() {
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

  // Owl Carousel options
  const carouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

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
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Faculty Hero */
      .faculty-hero {
        background: url("/media/banners/pgdm(lscm).webp") center/cover no-repeat;
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

      /* Faculty Tabs */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #08317a;
        margin: 5px;
        transition: all 0.3s;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: bold;
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107;
        color: #000;
      }

      /* Custom Bullets */
      .custom-bullets li {
        position: relative;
        padding-left: 25px;
        margin-bottom: 10px;
        list-style: none;
      }
      .custom-bullets li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #ffc107;
        font-weight: bold;
      }

      /* Curriculum List */
      .curriculum-item {
        color: #142a53;
        display: flex;
        align-items: flex-start;
        font-size: 16px;
        line-height: 1.4;
      }
      .curriculum-item i {
        font-size: 8px;
        margin-right: 8px;
        margin-top: 6px;
      }

      /* Video Carousel Section */
      .video-carousel-section {
        background: #163977;
      }
      .video-wrapper {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .video-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
      }
      .video-wrapper iframe:hover {
        transform: scale(1.03);
      }
      .owl-carousel .owl-nav button.owl-prev,
      .owl-carousel .owl-nav button.owl-next {
        position: absolute;
        top: 40%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 50%;
      }
      .owl-carousel .owl-nav button.owl-prev {
        left: -25px;
      }
      .owl-carousel .owl-nav button.owl-next {
        right: -25px;
      }
      .owl-theme .owl-dots .owl-dot {
        display: inline-block;
        zoom: 1;
      }
      .owl-carousel .owl-nav button.owl-next,
      .owl-carousel .owl-nav button.owl-prev,
      .owl-carousel button.owl-dot {
        background: 0 0;
        color: white;
        border: none;
        padding: 0 !important;
        font: inherit;
        background-color: #163977 !important;
      }

      /* Card Styling */
      .card {
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .card-body {
        padding: 2rem;
      }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }
    `,
        }}
      />

      {/* Top Banner */}
      <div
        className="faculty-hero text-center text-white py-5"
        data-aos="fade-up"
      >
        <h2 className="display-5 fw-bold mb-2">PGDM LSCM</h2>
        <p className="text-white">
          Building problem-solvers for a connected and efficient world. <br />
          The ISCM specialization develops expertise in operations, logistics,
          and supply chain excellence with global perspective.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb p-4">
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
                PGDM (Logistics & Supply Chain Management)
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* PGDM Tabs Section */}
      <section id="pgdm-tabs" className="py-5 faculty-tabs">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#08317a" }}>
            PGDM (Logistics & Supply Chain Management)
          </h2>
          <p className="text-center mb-5" style={{ color: "#08317a" }}>
            The Indian logistics industry, valued at an estimated USD 435.43 Bn
            in 2023, plays a pivotal role in shaping up the nation’s economy.
            With rapid advancements in technology, massive government impetus,
            and infrastructure growth, this sector is poised for a
            transformative change. The phenomenal growth in the ecommerce
            business, huge investments by both domestic and as well foreign
            players, are fueling the growth of this sector, which has resulted
            in a big demand for logistics professionals. The PGDM (LSCM) program
            launched by IMT(H) in collaboration with CII, Institute of Logistics
            is aimed to bridge this talent gap of smart logistics professionals.
          </p>
          <h4 className="text-warning fw-bold">About CII-IL:</h4>
          <p>
            CII-Institute of Logistics (CII-IL) was incepted in year 2004 by
            Confederation of Indian Industry as a Centre of Excellence, in
            Logistics and Supply Chain Management. CII-IL, centering industry as
            a pivotal player in national development provide Logistics and
            Supply Chain solutions through industry specific training programs
            governing the metrics set for their growth with global benchmark
            practices to enhance productivity, efficiency, and profitability
            both at macro and micro level.{" "}
            <Link
              href="https://ciilogistics.com/imt/"
              className="text-decoration-none text-warning fw-bold"
            >
              Know More About CII-IL and IMT-H partnership
            </Link>
          </p>

          {/* Tabs Navigation */}
          <ul
            className="nav nav-pills justify-content-center mb-4 flex-wrap"
            id="pgdmTab"
            role="tablist"
          >
            <li className="nav-item m-1" role="presentation">
              <button
                className="nav-link active fw-bold"
                id="curriculum-tab"
                data-bs-toggle="pill"
                data-bs-target="#curriculum"
                type="button"
                role="tab"
                aria-controls="curriculum"
                aria-selected="true"
              >
                CURRICULUM
              </button>
            </li>
            <li className="nav-item m-1" role="presentation">
              <button
                className="nav-link fw-bold"
                id="keyfeatures-tab"
                data-bs-toggle="pill"
                data-bs-target="#keyfeatures"
                type="button"
                role="tab"
                aria-controls="keyfeatures"
                aria-selected="false"
              >
                KEY FEATURES
              </button>
            </li>
            <li className="nav-item m-1" role="presentation">
              <button
                className="nav-link fw-bold"
                id="programoutcome-tab"
                data-bs-toggle="pill"
                data-bs-target="#programoutcome"
                type="button"
                role="tab"
                aria-controls="programoutcome"
                aria-selected="false"
              >
                PROGRAM OUTCOME
              </button>
            </li>
            <li className="nav-item m-1" role="presentation">
              <button
                className="nav-link fw-bold"
                id="pedagogy-tab"
                data-bs-toggle="pill"
                data-bs-target="#pedagogy"
                type="button"
                role="tab"
                aria-controls="pedagogy"
                aria-selected="false"
              >
                PEDAGOGY
              </button>
            </li>
            <li className="nav-item m-1" role="presentation">
              <button
                className="nav-link fw-bold"
                id="career-tab"
                data-bs-toggle="pill"
                data-bs-target="#career"
                type="button"
                role="tab"
                aria-controls="career"
                aria-selected="false"
              >
                CAREER OPPORTUNITIES
              </button>
            </li>
            <li className="nav-item m-1" role="presentation">
              <button
                className="nav-link fw-bold"
                id="competency-tab"
                data-bs-toggle="pill"
                data-bs-target="#competency"
                type="button"
                role="tab"
                aria-controls="competency"
                aria-selected="false"
              >
                Program Learning Outcomes
              </button>
            </li>
          </ul>

          {/* Tabs Content */}
          <div className="card">
            <div className="card-body">
              <div className="tab-content" id="pgdmTabContent">
                {/* Curriculum Tab */}
                <div
                  className="tab-pane fade show active"
                  id="curriculum"
                  role="tabpanel"
                  aria-labelledby="curriculum-tab"
                >
                  <p className="text-warning fw-bold">
                    List of courses offered in the PGDM (Logistics and Supply
                    Chain Management) program include:
                  </p>
                  <div className="row">
                    {[
                      "Logistics and Supply Chains Management Overview",
                      "Logistics Strategy and Planning",
                      "Supply Chain Strategies and Operations Management",
                      "Advanced Inventory and Materials Management",
                      "Total Quality Management for SCM",
                      "Global and SCM Environment for Businesses",
                      "International Logistics",
                      "E-Commerce and Retail Supply Chain Management",
                      "Strategic Sourcing and Procurement in Supply Chain",
                      "Warehousing and Distribution Facilities Management",
                      "IT Enabled Supply Chain Management",
                      "Freight Transport Management",
                      "Maritime Business and Economics",
                      "Cold Chain Logistics Management",
                      "Supply Chain Analytics, Modelling, and Risk Management",
                      "EXIMS and Customs & Port Management",
                      "Project and Change Management for Supply Chains",
                      "Container Trade",
                      "Shipping Law and Marine Insurance",
                      "Supply Chain Sustainability and Closed Loop SCM",
                      "Intra-Logistics, Outbound Logistics and Supply Chain Automation & Digitisation 4.0",
                      "Trade Routes and Shipping Overview",
                      "Role of SCM in Entrepreneur Development",
                      "Multi-modal Transportation Management",
                    ].map((course, index) => (
                      <div
                        key={index}
                        className="col-md-4 mb-2 curriculum-item"
                      >
                        <i className="fas fa-circle me-2"></i>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features Tab */}
                <div
                  className="tab-pane fade"
                  id="keyfeatures"
                  role="tabpanel"
                  aria-labelledby="keyfeatures-tab"
                >
                  <ul className="custom-bullets">
                    <li>
                      Focused program for students interested in making a career
                      in the logistics and supply chain management profession.
                    </li>
                    <li>
                      The entire curriculum is designed and delivered by
                      professionals and academicians with significant logistics
                      experience.
                    </li>
                    <li>
                      Close interaction with industry in terms of guest
                      lectures, industry visits, internship, and management
                      projects.
                    </li>
                    <li>
                      Mentoring by senior leaders from the industry to hone the
                      skills of students to be industry-ready.
                    </li>
                    <li>
                      Leverage the wide network of CII for industry support and
                      collaboration.
                    </li>
                  </ul>
                </div>

                {/* Program Outcome Tab */}
                <div
                  className="tab-pane fade"
                  id="programoutcome"
                  role="tabpanel"
                  aria-labelledby="programoutcome-tab"
                >
                  <p className="text-warning fw-bold">The programme aims to:</p>
                  <ul className="custom-bullets">
                    <li>
                      Equip the students with functional knowledge of Logistics
                      and Supply Chain domains.
                    </li>
                    <li>
                      Illustrate how companies are adding exceptional value to
                      their customers through effective and efficient LSCM.
                    </li>
                    <li>
                      Teach the ability to understand, process, analyze LSCM
                      data so that right insights are drawn and decisions are
                      taken.
                    </li>
                    <li>
                      Showcase the latest developments and technological
                      advancements that logistics players are leveraging in
                      designing solutions.
                    </li>
                  </ul>
                </div>

                {/* Pedagogy Tab */}
                <div
                  className="tab-pane fade"
                  id="pedagogy"
                  role="tabpanel"
                  aria-labelledby="pedagogy-tab"
                >
                  <p>
                    The courses are delivered using a mix of pedagogical methods
                    such as case discussions, lectures, simulation, industry
                    visits, seminars, guest lectures, and leverages experiential
                    learning through industry projects.
                  </p>
                </div>

                {/* Career Opportunities Tab */}
                <div
                  className="tab-pane fade"
                  id="career"
                  role="tabpanel"
                  aria-labelledby="career-tab"
                >
                  <p>
                    The graduating students will be suitable for the following
                    profiles / organizations:
                  </p>
                  <ul className="custom-bullets">
                    <li>
                      Operations, Logistics, and SCM Consultants with Management
                      Consulting Organizations
                    </li>
                    <li>
                      Operations, Logistics, and SCM Analysts with IT and ITES
                      Organizations
                    </li>
                    <li>
                      Business Development Managers with Logistics Service
                      Providers
                    </li>
                    <li>
                      Operations, Logistics, and SCM Analysts with Logistics
                      Solutions companies and Logistics Startups
                    </li>
                    <li>
                      Operations, Logistics, and SCM Managers with End User
                      companies such as manufacturers, retailers, ecommerce
                      companies etc.
                    </li>
                  </ul>
                </div>

                {/* compentency */}
                <div
                  className="tab-pane fade"
                  id="competency"
                  role="tabpanel"
                  aria-labelledby="competency-tab"
                >
                  <div className="container my-5">
                    <h4 className="fw-semibold text-center mb-4">
                       Program Learning Outcomes – PGDM (LSCM)
                    </h4>

                    <ul className="list-unstyled">
                      {/* CG 1 */}
                      <li className="mb-4">
                        <h5 className="fw-bold">CG 1. Business Acumen</h5>
                        <p>
                          Graduating students should demonstrate proficiency in
                          applying core business concepts and integrate
                          knowledge from various business disciplines to analyze
                          and solve global business challenges.
                        </p>

                        <ul>
                          <li>
                            <strong>PLO 1.1:</strong> Acquire LSCM functional
                            skills and domain-specific expertise.
                          </li>
                          <li>
                            <strong>PLO 1.2:</strong> Deploy global benchmarks
                            and real-world scenarios for effective LSCM
                            decision-making.
                          </li>
                        </ul>
                      </li>

                      {/* CG 2 */}
                      <li className="mb-4">
                        <h5 className="fw-bold">CG 2. Leadership</h5>
                        <p>
                          Graduating students should have the capacity to lead
                          and inspire others and the capability to make
                          strategic decisions.
                        </p>

                        <ul>
                          <li>
                            <strong>PLO 2.1:</strong> Leverage emerging
                            technologies to achieve superior leadership and
                            performance in LSCM.
                          </li>
                          <li>
                            <strong>PLO 2.2:</strong> Extract, process, and
                            analyze LSCM data to generate insights for informed
                            decision-making.
                          </li>
                        </ul>
                      </li>

                      {/* CG 3 */}
                      <li className="mb-4">
                        <h5 className="fw-bold">CG 3. Responsibility</h5>
                        <p>
                          Graduating students should be committed to responsible
                          and sustainable business practices that balance
                          stakeholder priorities.
                        </p>

                        <ul>
                          <li>
                            <strong>PLO 3.1:</strong> Understand and apply ESG
                            concepts within the LSCM domain.
                          </li>
                          <li>
                            <strong>PLO 3.2:</strong> Design and implement
                            responsible and sustainable LSCM practices.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <div
                  className="tab-pane fade"
                  id="competency"
                  role="tabpanel"
                  aria-labelledby="competency-tab"
                >
                  <div class="container my-5">
                    <div class="table-responsive">
                      <table class="table table-bordered table-striped">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">Competency Goal</th>
                            <th className="text-center" scope="col">
                              Goal Description
                            </th>
                            <th className="text-center" scope="col">
                              PGDM (LSCM)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="align-middle">
                              <strong>CG 1. Business Acumen</strong>
                            </td>
                            <td class="align-middle">
                              Graduating students should demonstrate proficiency
                              in applying core business concepts and integrate
                              knowledge from various business disciplines to
                              analyze and solve global business challenges.
                            </td>
                            <td>
                              <ul class="list-unstyled mb-0">
                                <li>
                                  <strong>PLO 1.1.</strong> Acquire LSCM
                                  functional skills and expertise{" "}
                                </li>
                                <li>
                                  <strong>PLO 1.2.</strong> Deploy global
                                  benchmarks and scenarios for LSCM{" "}
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle">
                              <strong>CG 2. Leadership</strong>
                            </td>
                            <td class="align-middle">
                              Graduating students should have the capacity to
                              lead and inspire others and the capability to make
                              strategic decisions
                            </td>
                            <td>
                              <ul class="list-unstyled mb-0">
                                <li>
                                  <strong>PLO 2.1.</strong> Leverage emerging
                                  technology for a leading LSCM performance
                                </li>
                                <li>
                                  <strong>PLO 2.2.</strong> Extract, process,
                                  analyze LSCM data for insights and decision
                                  making
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle">
                              <strong>CG 3. Responsibility</strong>
                            </td>
                            <td class="align-middle">
                              Graduating students should be committed to
                              responsible and sustainable business practices
                              that balance stakeholder priorities
                            </td>
                            <td>
                              <ul class="list-unstyled mb-0">
                                <li>
                                  <strong>PLO 3.1.</strong> Understand and apply
                                  ESG concepts in LSCM domain
                                </li>
                                <li>
                                  <strong>PLO 3.2.</strong> Design responsible
                                  LSCM
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Carousel Section */}
      <section className="video-carousel-section py-5">
        <div className="container-fluid">
          <h2 className="text-center fw-bold mb-4 text-warning">
            LEARN ABOUT THE PROGRAM
          </h2>
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {[
              "CMLanyWFTME",
              "QwEmFPKaA-o",
              "WtN09_qclMs?si=aqUBOfsve2WGVDVb",
              "CD_6_echnCo?si=pGMl3I8ck7OIkWDM",
              "t8KrTbNpDn0?si=h-lq-fbmDUZykP36",
              "bPrwMQ5vOFI?si=CQVYPvKuglUN0BRP",
              "DhOWt7ABkIE",
              "ycFyCZ5dREs",
              "-9I-E3pPmFE",
              "UZNqlVb_ru4",
              "iwADM_Hk1l0",
              "Ukp9r6Z0ncU",
            ].map((videoId, index) => (
              <div key={index} className="item">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}
