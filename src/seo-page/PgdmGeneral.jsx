"use client";

import { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default function PGDMGeneralSection() {
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
        background: url("/media/banners/programs.webp") center/cover no-repeat;
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
      }
      .curriculum-item i {
        font-size: 8px;
        margin-right: 8px;
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
        <h2 className="display-5 fw-bold mb-2">PGDM General</h2>
        <p className="text-white">
          A foundation for versatile and visionary leadership. <br />
          The General PGDM equips students with multidisciplinary understanding
          and strategic agility for diverse management challenges.
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
                PGDM General
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* PGDM Tabs Section */}
      <section id="pgdm-tabs" className="py-5 faculty-tabs">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#08317a" }}>
            PGDM General
          </h2>
          <p className="text-center mb-5" style={{ color: "#08317a" }}>
            The PGDM program aims to expose students to various tools and
            requisite skills to effectively manage the business functions
            through experiential learning, practice orientation, and skill
            development.
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
                    List of courses offered in the PGDM program include:
                  </p>
                  <div className="row">
                    {[
                      "Business Statistics",
                      "IT for Managers",
                      "Data Analysis for Decision Making",
                      "Business Research Methods",
                      "Financial Accounting",
                      "Corporate Finance",
                      "Management Accounting",
                      "Advanced Corporate Finance",
                      "Managerial Economics",
                      "Business Communication",
                      "Business Environment",
                      "Strategic Management-I",
                      "Strategic Management-II",
                      "Legal Aspects of Business",
                      "Ethics & CSR",
                      "Sustainability",
                      "Organizational Behavior – I",
                      "Organizational Behavior - II",
                      "Human Resource Management",
                      "Principles of Marketing",
                      "Advanced Marketing Management",
                      "Operations Research",
                      "Operations Management",
                      "Supply Chain Management",
                      "Workshops",
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
                      The PGDM course has been designed especially for students
                      interested in multi-functional aspects of management.
                    </li>
                    <li>
                      Students gain knowledge about Strategy, HRM, IT &
                      Analytics, Operations, Finance, and Marketing in this
                      program.
                    </li>
                    <li>
                      The program gives insights into the latest market trends,
                      developing strategies, and best management practices used
                      by the industry at large.
                    </li>
                    <li>
                      Students get to practice said skills through internships,
                      which in turn makes it easier to get good placement offers
                      from companies.
                    </li>
                    <li>
                      The course gives students the confidence to apply the
                      principles and techniques of management in real life.
                    </li>
                    <li>
                      PGDM program helps students become a confident management
                      professional as well.
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
                      Impart conceptual knowledge on the basics in various
                      functions of management.
                    </li>
                    <li>
                      Develop an appreciation of the interface among areas such
                      as economics, finance, marketing, operations, IT &
                      Analytics, HR, and corporate strategy to facilitate
                      decision making.
                    </li>
                    <li>
                      Equip students with cutting-edge technological skills in
                      IT and other key functional areas.
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
                    The courses are delivered using a mix of various pedagogical
                    methods such as case discussions, lectures, simulation,
                    business games, seminars, and practitioner’s sessions.
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
                    Once you are done with PGDM along with the internship, you
                    will have all the experience and qualification required for
                    getting a job in any of the major companies operating in
                    India right now. In terms of positions, here are some of the
                    roles that you can apply for after PGDM:
                  </p>
                  <ul className="custom-bullets">
                    <li>Business Analyst</li>
                    <li>Research Analyst</li>
                    <li>Equity Analyst</li>
                    <li>Branch Manager</li>
                    <li>Management Trainee</li>
                    <li>Business Development Specialist in BFSI</li>
                    <li>Brand Specialist</li>
                    <li>Business Partner – HR</li>
                    <li>Operations Analyst</li>
                    <li>Data Scientist</li>
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
       Program Learning Outcomes (PGDM)
    </h4>

    <ul className="list-unstyled">

      {/* CG 1 */}
      <li className="mb-4">
        <h5 className="fw-bold">CG 1. Business Acumen</h5>
        <p>
          Graduating students should demonstrate proficiency in applying core
          business concepts and integrate knowledge from various business
          disciplines to analyze and solve global business challenges.
        </p>

        <ul>
          <li>
            <strong>PLO 1.1:</strong> Demonstrate in-depth and contemporary
            knowledge of all business functions.
          </li>
          <li>
            <strong>PLO 1.2:</strong> Integrate different functional areas to
            solve global business problems.
          </li>
        </ul>
      </li>

      {/* CG 2 */}
      <li className="mb-4">
        <h5 className="fw-bold">CG 2. Leadership</h5>
        <p>
          Graduating students should have the capacity to lead and inspire
          others and the capability to make strategic decisions.
        </p>

        <ul>
          <li>
            <strong>PLO 2.1:</strong> Demonstrate interpersonal skills to
            communicate ideas and resolve conflicts effectively.
          </li>
          <li>
            <strong>PLO 2.2:</strong> Develop acumen for effective decision
            making in complex and ambiguous scenarios.
          </li>
        </ul>
      </li>

      {/* CG 3 */}
      <li className="mb-4">
        <h5 className="fw-bold">CG 3. Responsibility</h5>
        <p>
          Graduating students should be committed to responsible and
          sustainable business practices that balance stakeholder priorities.
        </p>

        <ul>
          <li>
            <strong>PLO 3.1:</strong> Demonstrate sensitivity towards
            environmental and social implications of business decisions.
          </li>
          <li>
            <strong>PLO 3.2:</strong> Develop responsible and sustainable
            business strategies with due consideration to all key internal
            and external stakeholders.
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
                              PGDM
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
                                  <strong>PLO 1.1.</strong> Demonstrate In-depth
                                  and contemporary knowledge of all business
                                  functions
                                </li>
                                <li>
                                  <strong>PLO 1.2.</strong> Integrate different
                                  functional areas to solve global business
                                  problems
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
                                  <strong>PLO 2.1.</strong> Demonstrate
                                  interpersonal skills to communicate ideas and
                                  resolve conflicts effectively.
                                </li>
                                <li>
                                  <strong>PLO 2.2.</strong> Develop acumen for
                                  effective decision making in complex and
                                  ambiguous scenarios
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
                                  <strong>PLO 3.1.</strong> Demonstrate
                                  sensitivity towards environmental and social
                                  implications of business decisions.
                                </li>
                                <li>
                                  <strong>PLO 3.2.</strong> Develop responsible
                                  and sustainable business strategies with due
                                  consideration to all key internal and external
                                  stakeholders
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
