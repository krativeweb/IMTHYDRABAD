"use client";

import { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default function PGDMFinanceSection() {
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
        background: url("/media/banners/pgdmmarketing.webp") center/cover no-repeat;
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
        <h2 className="display-5 fw-bold mb-2">PGDM Finance</h2>
        <p className="text-white">
          Where financial insight meets strategic foresight. <br />
          Our Finance program prepares analytical leaders who drive growth,
          manage risk, and shape responsible financial systems.
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
                PGDM Finance
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* PGDM Tabs Section */}
      <section id="pgdm-tabs" className="py-5 faculty-tabs">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#08317a" }}>
            PGDM Finance
          </h2>
          <p className="text-center mb-5" style={{ color: "#08317a" }}>
            The Post-Graduate Diploma in Management Finance program aims to
            create a cadre of professionals having specialization in the area of
            Finance. It equips the students to develop strong analytical and
            problem-solving skills with an ethical mindset. It allows them to
            develop ability to think critically and operate successfully in a
            dynamic business environment. The program enables the participants
            to understand business challenges holistically and recognize the
            interplay of finance with other disciplines. The finance department
            is the backbone of any business. If you have interest in
            investments, portfolio management, borrowing, securities analysis,
            fundraising, collections, disbursements, and handling financial
            activities of a business, a PGDM in finance should be your pick.
            This professional course will educate you, develop the much-needed
            skills, and train you well to be a professional in the field of
            finance. Accordingly, the understanding of fiscal and financial
            functioning would be of great significance in meeting the challenges
            of corporate financial management.
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
                      "Financial Reporting & Control",
                      "Corporate Finance",
                      "Advanced Corporate Finance",
                      "Management Accounting and Control",
                      "Financial Derivatives",
                      "Security Analysis",
                      "Commercial Banking",
                      "Financial Services",
                      "Wealth Management",
                      "Strategic Management Accounting",
                      "International Finance",
                      "Financial Statement Analysis",
                      "Portfolio Management",
                      "Fixed Income Securities and their Derivatives",
                      "Risk Management in Banks",
                      "Project Finance",
                      "Investment Banking",
                      "Risk Analytics",
                      "Special Project in Finance and Accounting",
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
                      The PGDM course in finance has been designed especially
                      for finance students through collaboration with
                      experienced professionals.
                    </li>
                    <li>
                      Students gain knowledge about management, accounting,
                      economics, and many other subjects related to finance in
                      this program.
                    </li>
                    <li>
                      The course features insights into the latest market
                      trends, developing strategies, and best financial
                      practices used by the industry at large.
                    </li>
                    <li>
                      Students get to practice said skills through internships,
                      which in turn makes it easier to get good placement offers
                      from companies.
                    </li>
                    <li>
                      The course gives students the confidence to apply the
                      principles and techniques of PGDM finance in real life.
                    </li>
                    <li>
                      PGDM program in Financial Management helps students become
                      a confident management professional as well.
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
                      Impart conceptual knowledge on the basics in finance,
                      accounting, economics, regulatory environment, and human
                      behavior.
                    </li>
                    <li>
                      Develop an appreciation of the interface between financial
                      analysis and other areas such as economics, management,
                      investments, financial markets, international finance,
                      financial services, and corporate strategy to facilitate
                      decision making.
                    </li>
                    <li>
                      Equip the students with cutting-edge technological skills
                      in IT and other key functional areas.
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
                    Once you are done with PGDM in Finance along with the
                    internship, you will have all the experience and
                    qualifications required for getting a job in any of the
                    major companies operating in India right now. In terms of
                    positions, here are some of the roles that you can apply for
                    after PGDM in Finance:
                  </p>
                  <ul className="custom-bullets">
                    <li>Financial Analyst</li>
                    <li>Research Analyst</li>
                    <li>Equity Analyst</li>
                    <li>Portfolio Manager</li>
                    <li>Financial Planner / Adviser</li>
                    <li>Banking and Insurance</li>
                    <li>Treasury</li>
                    <li>Corporate Finance</li>
                  </ul>
                  <p className="mt-3 fw-bold text-warning">
                    Sector-wise Roles:
                  </p>
                  <ul className="custom-bullets">
                    <li>
                      <strong>BFSI:</strong> Financial Associate, Associate
                      Manager - Wealth Advisory, AVP - Financial Planning
                      Division, Analyst - Transaction Advisory, Relationship
                      Manager - Wealth Management, Credit Analyst, Credit
                      Manager
                    </li>
                    <li>
                      <strong>Real Estate:</strong> Associate - Consulting
                      Valuation
                    </li>
                    <li>
                      <strong>Consulting:</strong> Tax Consultant, Advisory
                    </li>
                    <li>
                      <strong>Pharma & Healthcare:</strong> MT - International
                      Portfolio Management
                    </li>
                    <li>
                      <strong>Investment Banking:</strong> Equity Research
                      Analyst, Asset Valuation Associate
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
       Program Learning Outcomes – PGDM (Finance)
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
            knowledge of business functions.
          </li>
          <li>
            <strong>PLO 1.2:</strong> Integrate the principles of finance with
            different functional areas to solve global business problems.
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
            <strong>PLO 2.2:</strong> Develop acumen to make effective financial
            decisions in complex and ambiguous scenarios.
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
                              PGDM (Finance)
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
                                  and contemporary knowledge of business
                                  functions{" "}
                                </li>
                                <li>
                                  <strong>PLO 1.2.</strong> Integrate the
                                  principles of finance with different
                                  functional areas to solve global business
                                  problems{" "}
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
                                  <strong>PLO 2.2.</strong> Develop acumen to
                                  make effective financial decisions in complex
                                  and ambiguous scenarios
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
