"use client";

import { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default function PGDMMarketingSection() {
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
        background: url("/media/banners/csr.webp") center/cover no-repeat;
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
      .custom-bullets {
        margin: 0;
        padding-left: 1.2rem;
        list-style-type: disc;
        color: #142a53;
      }
      .custom-bullets li {
        margin-bottom: 8px;
        line-height: 1.6;
        text-align: justify;
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
        <h2 className="display-5 fw-bold mb-2">PGDM Marketing</h2>
        <p className="text-white">
          Crafting leaders who understand markets and move minds. <br />
          Our Marketing program fuses creativity, analytics, and brand strategy
          to build future-ready marketing professionals.
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
                PGDM Marketing
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* PGDM Tabs Section */}
      <section id="pgdm-tabs" className="py-5 faculty-tabs">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#08317a" }}>
            PGDM Marketing
          </h2>
          <p className="text-center mb-5" style={{ color: "#08317a" }}>
            The PGDM Marketing course at Institute of Management Technology
            Hyderabad (IMTH) is a program for aspirants in management, seeking
            to pursue Marketing as their major specialization. Marketing is
            undoubtedly a function that helps an organization to generate its
            revenue through identifying and satisfying customer needs. The PGDM
            Marketing program will prove to be beneficial to the students who
            have a predetermined choice of their specialization and will give
            them the right direction in their professional growth towards a
            career in Marketing. The program has been curated for people seeking
            knowledge and skills in the domain of marketing but also allows them
            to supplement this with the option to choose a minor subject from
            the other fields of study. This course will help in shaping the
            individuals into dynamic corporate ready professionals through deep
            understanding of marketing strategies and business acumen they would
            have garnered by the end of the program.
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
                  <h5 className="text-warning fw-bold">
                    List of courses offered in the PGDM program include:
                  </h5>
                  <div className="row">
                    {[
                      "Principles of Marketing",
                      "Advanced Marketing Management",
                      "Services Marketing",
                      "Consumer Behavior",
                      "Brand Management",
                      "Marketing Research",
                      "Retail Management",
                      "Product Management",
                      "Social Media Marketing & Media Management",
                      "International Marketing",
                      "E-Commerce and Digital Marketing",
                      "Integrated Marketing Communication",
                      "Sales & Distribution Management",
                      "Business to Business Marketing",
                      "Marketing Analytics",
                      "Customer Relationship Management",
                      "Strategic Marketing Management",
                      "Rural Marketing",
                      "Marketing Metrics",
                      "Special Project / Organization-Based Project in Marketing",
                    ].map((course, index) => (
                      <div
                        key={index}
                        className="col-md-4 mb-2 curriculum-item"
                      >
                        <li>{course}</li>
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
                      This PGDM course has been designed especially for
                      marketing students in collaboration with experienced
                      marketing professionals.
                    </li>
                    <li>
                      Gaining real-life experience through internships makes it
                      easier to get pre-placement offers from companies since
                      they don’t have to worry about training inexperienced
                      people.
                    </li>
                    <li>
                      The course provides insights into the latest market
                      trends, developing strategies and best marketing practices
                      adopted by the industry at large.
                    </li>
                    <li>
                      The course offers practical experience in understanding
                      the role of a good marketing professional.
                    </li>
                    <li>
                      The course gives students the confidence to apply the
                      principles and techniques of PGDM-Marketing in real life.
                    </li>
                    <li>
                      The course helps students become a confident sales
                      professional as well, thanks to their knowledge of
                      consumer behavior and selling skills honed during the
                      program.
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
                      Participants who are taking up this program would be able
                      to apply functional and foundational concepts to think
                      critically and solve business problems related to
                      marketing.
                    </li>
                    <li>
                      Innovative Thinking: Issue spotting and opportunity
                      recognition. Participants would be able to identify
                      options to convert problems into business opportunities.
                      Creative approaches learned through case discussions help
                      participants to generate unique solutions to problems or
                      ways to respond to opportunities.
                    </li>
                    <li>
                      Ethical Responsibility: Participants would be able to make
                      ethical decision making by recognizing ethical issues,
                      applying ethical frameworks to analyse them, then choose
                      and defend a solution.
                    </li>
                    <li>
                      Reflective thinking: Participants of the program would
                      demonstrate consideration of a belief, form of knowledge,
                      action, or experience, evaluate it, and develop insight
                      toward future action.
                    </li>
                    <li>
                      Initiative to seek opportunities for active involvement in
                      curricular areas. Taking others perspectives and to
                      demonstrate an understanding of another person’s point of
                      view.
                    </li>
                    <li>
                      Communication Skills: Emphasis would be given that results
                      in enhancing communication skills in
                    </li>
                    <li>
                      <strong>Writing:</strong> produce quality business
                      documents that exhibit competence in content,
                      organization, quality, and referencing.
                    </li>
                    <li>
                      <strong>Presenting:</strong> create and deliver quality
                      business presentations that exhibit competence in content,
                      technology, verbal and non-verbal presentation skills,
                      organization and clarity.
                    </li>
                    <li>
                      Interpersonal skills and teamwork: communicate effectively
                      in small group situations.
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
                    business games, seminars and practitioner’s sessions.
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
                    It can be a career-defining move to get this kind of
                    experience as part of your resume, along with the
                    distinction of being a PGDM holder. Having these two will
                    make any marketing student a must-have recruit for any of
                    the thousands of companies operating in our country, or even
                    abroad. To give you an idea about what kind of jobs you can
                    have in this field, here is a list of various job titles in
                    the marketing segment.
                  </p>
                  <ul className="custom-bullets">
                    <li>Marketing Manager</li>
                    <li>Communications Manager</li>
                    <li>Public Relations Specialist</li>
                    <li>Brand Manager</li>
                    <li>Sales Manager</li>
                    <li>Product Marketing Manager</li>
                    <li>Advertising Manager</li>
                    <li>Market Research Analyst</li>
                    <li>Digital Marketing Specialist</li>
                    <li>Content Marketing Specialist</li>
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
                      Program Learning Outcomes – PGDM (Marketing)
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
                            <strong>PLO 1.1:</strong> Demonstrate in-depth and
                            contemporary knowledge of business functions.
                          </li>
                          <li>
                            <strong>PLO 1.2:</strong> Integrate the principles
                            of marketing with different functional areas to
                            solve global business problems.
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
                            <strong>PLO 2.1:</strong> Demonstrate interpersonal
                            skills to communicate ideas and resolve conflicts
                            effectively.
                          </li>
                          <li>
                            <strong>PLO 2.2:</strong> Develop acumen to make
                            effective marketing decisions in complex and
                            ambiguous scenarios.
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
                            <strong>PLO 3.1:</strong> Demonstrate sensitivity
                            towards environmental and social implications of
                            business decisions.
                          </li>
                          <li>
                            <strong>PLO 3.2:</strong> Develop responsible and
                            sustainable business strategies with due
                            consideration to all key internal and external
                            stakeholders.
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
                  <div className="container my-5">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">Competency Goal</th>
                            <th className="text-center" scope="col">
                              Goal Description
                            </th>
                            <th className="text-center" scope="col">
                              PGDM (Marketing)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="align-middle">
                              <strong>CG 1. Business Acumen</strong>
                            </td>
                            <td className="align-middle">
                              Graduating students should demonstrate proficiency
                              in applying core business concepts and integrate
                              knowledge from various business disciplines to
                              analyze and solve global business challenges.
                            </td>
                            <td>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <strong>PLO 1.1.</strong>Demonstrate In-depth
                                  and contemporary knowledge of business
                                  functions{" "}
                                </li>
                                <li>
                                  <strong>PLO 1.2.</strong> . Integrate the
                                  principles of Marketing with different
                                  functional areas to solve global business
                                  problems
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle">
                              <strong>CG 2. Leadership</strong>
                            </td>
                            <td className="align-middle">
                              Graduating students should have the capacity to
                              lead and inspire others and the capability to make
                              strategic decisions
                            </td>
                            <td>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <strong>PLO 2.1.</strong> Demonstrate
                                  interpersonal skills to communicate ideas and
                                  resolve conflicts effectively.{" "}
                                </li>
                                <li>
                                  <strong>PLO 2.2.</strong> Develop acumen to
                                  make effective marketing decisions in complex
                                  and ambiguous scenarios
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle">
                              <strong>CG 3. Responsibility</strong>
                            </td>
                            <td className="align-middle">
                              Graduating students should be committed to
                              responsible and sustainable business practices
                              that balance stakeholder priorities
                            </td>
                            <td>
                              <ul className="list-unstyled mb-0">
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
