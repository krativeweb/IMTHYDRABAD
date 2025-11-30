"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function WorkshopsConferences() {
  // Embedded data for workshops and conferences
  const data = {
    workshops: [
      {
        title:
          "Finance and Accounting Excellence Program: Strategic Financial Management",
        company: "Telangana State Road Transport Corporation",
        programDirector: "Prof. (Dr.) A. Sarath Babu",
        image: "/images/EDP-1.webp",
        alt: "Workshop 1",
      },
      {
        title: "Mastering People Management and Team Leadership",
        company: "BHARAT Financial Inclusion Ltd",
        programDirector: "Prof. (Dr.) Romina Mathew",
        image: "/images/EDP-2.webp",
        alt: "Workshop 2",
      },
      {
        title: "CoroElite – Sales Excellence in Retail",
        company: "Coromandel International Ltd.",
        programDirector: "Prof. (Dr.) A. Sarath Babu",
        image: "/images/EDP-3.webp",
        alt: "Workshop 3",
      },
      {
        title: "Mastering People Management & Team Leadership",
        company: "BHARAT Financial Inclusion Ltd",
        programDirector: "Prof. (Dr.) Pavan Kumar Balivada",
        image: "/images/EDP-4.webp",
        alt: "Workshop 4",
      },
      {
        title: "Middle Management Development Program",
        company: "Greenko Group",
        programDirector:
          "Prof. (Dr.) Pavan Kumar Balivada & Prof. (Dr.) A. Sarath Babu",
        image: "/images/EDP-5.webp",
        alt: "Workshop 5",
      },
      {
        title:
          "Leadership Training Program: Navigating High-Pressure Environments",
        company: "Telangana State Road Transport Corporation",
        programDirector: "Prof. Dhananjay Singh",
        image: "/images/EDP-6.webp",
        alt: "Workshop 6",
      },
      {
        title: "Building Resilient Leadership for Navigating Change",
        company: "Telangana State Road Transport Corporation",
        programDirector: "Prof. Dhananjay Singh",
        image: "/images/EDP-7.webp",
        alt: "Workshop 7",
      },
      {
        title: "ASPIRE 6.0 Training Program",
        company: "Apollo Tyres Ltd",
        programDirector: "Prof. (Dr.) A Sarath Babu & Prof Dhananjay Singh",
        image: "/images/EDP-8.webp",
        alt: "Workshop 8",
      },
      {
        title: "Strategic Business Planning and Effective Leadership",
        company: "Telangana State Road Transport Corporation",
        programDirector: "Prof. (Dr.) Pavan Kumar Balivada",
        image: "/images/EDP-9.webp",
        alt: "Workshop 9",
      },
    ],
    conferences: [
      {
        title: "MCEM-2020",
        date: "January 17 and 18, 2020",
        conference: "4th International Conference",
        theme: "Marketing Challenges in Emerging Markets",
        support: "Tie Ups",
        journal:
          "International Journal of Economics and Business Research (An Inderscience Journal, Scopus Indexed, and ABDC-C category)",
        brochure: "Flyer",
      },
      {
        title: "MCEM-2019",
        date: "January 18 and 19, 2019",
        conference: "3rd International Conference",
        theme:
          "Digital Practices and Trends in Emerging Economies: Social & Business Perspective",
        support:
          "Supported by Association of Management Development Institute of South Asia (AMDISA)",
        journal:
          "International Journal of Environment, Workplace and Employment (An Inderscience Journal, Scopus Indexed, and ABDC-C category)",
        brochure: "Flyer",
      },
      {
        title: "MCEM-2017",
        date: "December 08 and 09, 2017",
        conference: "2nd International Conference",
        theme: "Digital Transformation & Evolution of Businesses",
        support:
          "Supported by Association of Management Development Institute of South Asia (AMDISA)",
        journal: "NA",
        brochure: "Flyer",
      },
      {
        title: "MCEM-2016",
        date: "January 21 and 22, 2016",
        conference: "International Conference",
        theme: "Marketing Challenges in Emerging Markets",
        support:
          "In Collaboration with EM Normandie France and Corvinus University of Budapest",
        journal: "NA",
        brochure: "Flyer",
      },
    ],
  };

  // Initialize AOS
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <>
      {/* Embedded CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Hero Section */
      .faculty-hero {
        background: url('/media/banners/industryrelevance.webp') center/cover no-repeat;
        position: relative;
        height: 60vh;
      }
      .faculty-hero::before {
        content: '';
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

      /* Nav Pills */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #08317a;
        margin: 5px;
        transition: all 0.3s;
        padding: 10px 20px;
        font-size: 1rem;
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107;
        color: #000;
      }

      /* Card Styling */
      .card {
        transition: transform 0.3s ease;
      }
      .card:hover {
        transform: translateY(-5px);
      }
      .card-img-top {
        height: 200px;
        object-fit: cover;
      }
      .btn-warning {
        background-color: #ffc107;
        border-color: #ffc107;
      }
      .btn-warning:hover {
        background-color: #e0a800;
        border-color: #e0a800;
      }
    `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Faculty Section - Hero and Breadcrumb */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/industryrelevance.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Workshops & Conferences</h2>
          <p className="text-white">
            Creating platforms for dialogue, discovery, and development. <br />
            Our workshops and conferences bring academia and industry together
            to exchange insights and shape future business thought.
          </p>
        </div>
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
                    className="text-white fw-bold text-decoration-none"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Workshops & Conferences
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Workshops & Conferences Section */}
      <section id="workshop-conference" className="py-5 faculty-tabs">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#08317a" }}>
            Workshops & Conferences
          </h2>
          <p className="text-center mb-5">
            Explore our recent workshops and conferences designed to inspire and
            educate professionals across domains.
          </p>

          {/* Tabs Navigation */}
          <ul
            className="nav nav-pills justify-content-center mb-4 flex-wrap"
            id="workshopTab"
            role="tablist"
          >
            <li className="nav-item m-1" role="presentation">
              <button
                className="nav-link active fw-bold"
                id="workshop-tab"
                data-bs-toggle="pill"
                data-bs-target="#workshop"
                type="button"
                role="tab"
                aria-controls="workshop"
                aria-selected="true"
              >
                WORKSHOPS
              </button>
            </li>
            <li className="nav-item m-1" role="presentation">
              <button
                className="nav-link fw-bold"
                id="conference-tab"
                data-bs-toggle="pill"
                data-bs-target="#conference"
                type="button"
                role="tab"
                aria-controls="conference"
                aria-selected="false"
              >
                CONFERENCES
              </button>
            </li>
          </ul>

          {/* Tabs Content */}
          <div className="tab-content" id="workshopTabContent">
            {/* Workshops Tab */}
            <div
              className="tab-pane fade show active"
              id="workshop"
              role="tabpanel"
              aria-labelledby="workshop-tab"
            >
              <div className="row g-4">
                {data.workshops.map((workshop, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card h-100 shadow-sm border-0">
                      <img
                        src={workshop.image}
                        className="card-img-top rounded-top"
                        alt={workshop.alt}
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{workshop.title}</h5>
                        <p className="card-text">
                          <strong>Company:</strong> {workshop.company} <br />
                          <strong>Program Director:</strong>{" "}
                          {workshop.programDirector}
                        </p>
                        <Link
                          href="#"
                          className="btn btn-warning text-dark fw-bold mt-2"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conferences Tab */}
            <div
              className="tab-pane fade"
              id="conference"
              role="tabpanel"
              aria-labelledby="conference-tab"
            >
              <div className="row g-4 mt-3">
                {data.conferences.map((conference, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          {conference.title}
                        </h5>
                        <p className="card-text">
                          <strong>Date:</strong> {conference.date} <br />
                          <strong>Conference:</strong> {conference.conference}{" "}
                          <br />
                          <strong>Theme:</strong> {conference.theme} <br />
                          <strong>Support / Collaborations:</strong>{" "}
                          {conference.support} <br />
                          <strong>Journal:</strong> {conference.journal} <br />
                          <strong>Brochure:</strong> {conference.brochure}
                        </p>
                        <Link
                          href="#"
                          className="btn btn-warning text-dark fw-bold mt-2"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
