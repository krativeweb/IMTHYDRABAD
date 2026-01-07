"use client";

import { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function ExecutiveEducation() {
  //recent programs
  const data = {
    workshops: [
      {
        title: "IMT Hyderabad – Amara Raja Future Leaders Program (AR-FLP) ",
        company: "Amara Raja Group",
        programDirector:
          " Prof. A Sarath Babu, Prof Kiranmai Pendyala, Prof Dhananjay Singh, Prof Sathish Kumar Kannan",
        image: "/images/edp/1.webp",
      },
      {
        title: "PG Certification in Leadership",
        company: "Apitoria Pharma Pvt. Ltd.",
        programDirector: "Prof. (Dr.) Romina Mathew",
        image: "/images/edp/2.webp",
      },
      {
        title: " Enhancing HR Competencies for Effective People Management",
        company: " Telangana State Road Transport Corporation",
        programDirector: "Prof Romina Mathew",
        image: "/images/edp/3.webp",
      },
      {
        title: "ASPIRE 7.0",
        company: "Apollo Tyres Ltd ",
        programDirector:
          "Prof Romina Mathew, Prof A Sarath Babu, Prof Dhananjay Singh",
        image: "/images/EDP-38.webp",
      },
      {
        title:
          "Advanced Leadership Excellence Program – Driving Transformation through Strategic Foresight and Leadership Agility",
        company: "Telangana State Road Transport Corporation (TGSRTC) ",
        programDirector: "Prof. Sathish Kumar Kannan ",
        image: "/images/EDP-39.webp",
      },
      {
        title:
          "Leadership Training Program: Navigating High-Pressure Environments",
        company: "Telangana State Road Transport Corporation",
        programDirector: "Prof. Dhananjay Singh",
        image: "/images/EDP-6.webp",
      },
    ],
  };
  const recentPrograms = data.workshops.slice(0, 3);
  // Data for EDP Calendar
  const edpCalendar = [
    {
      function: "Marketing",
      program: "Customer Orientation and Sales Effectiveness",
      director: "Prof. Dhananjay Singh",
      duration: "2 Days",
      dates: "09 & 10 Jan 2025",
    },
    {
      function: "Information Technology",
      program: "Block Chain Management",
      director: "Prof.(Dr.) R. Mahesh",
      duration: "3 Days",
      dates: "23 – 25 Jan 2025",
    },
    {
      function: "Operations",
      program: "The Science of Operations Management",
      director: "Prof.(Dr.) Kalyana C Chejarla",
      duration: "4 Days",
      dates: "30 & 31 Jan, 3 & 4 Feb 2025",
    },
    {
      function: "Finance",
      program: "Business Valuation",
      director: "Prof.(Dr.) Nikhil Rastogi",
      duration: "2 Days",
      dates: "09 & 10 Feb 2025",
    },
    {
      function: "Strategy",
      program: "Decision Making in Uncertain Environment",
      director: "Prof.(Dr.) Kalyana C Chejarla",
      duration: "4 Days",
      dates: "21 & 22, 27 & 28 Feb 2025",
    },
    {
      function: "Finance",
      program: "Finance for Non-Finance Executives",
      director: "Prof.(Dr.) A. Sarath Babu",
      duration: "2 Days",
      dates: "07 & 08 Mar 2025",
    },
    {
      function: "Finance",
      program: "Financial Modelling Using Excel",
      director: "Prof.(Dr.) Chakrapani",
      duration: "2 Days",
      dates: "21 & 22 Mar 2025",
    },
    {
      function: "Marketing",
      program: "Sales Management – Shaping Future Sales Leaders",
      director: "Prof.(Dr.) Shaon Sen",
      duration: "2 Days",
      dates: "28 & 29 Mar 2025",
    },
    {
      function: "General Management",
      program: "Strategy and Leadership in VUCA World",
      director: "Prof.(Dr.) Pavan Kumar Balivada",
      duration: "5 Days",
      dates: "08 – 12 Apr 2025",
    },
    {
      function: "Finance",
      program: "Business Valuation",
      director: "Prof.(Dr.) Nikhil Rastogi",
      duration: "2 Days",
      dates: "17 & 18 Apr 2025",
    },
    {
      function: "Operations",
      program: "Lean Management and Process Improvement",
      director: "Prof.(Dr.) Kalyana C Chejarla",
      duration: "3 Days",
      dates: "24 – 26 Apr 2025",
    },
    {
      function: "Human Resource Management",
      program: "Emotional Intelligence for Leadership Effectiveness",
      director: "Prof.(Dr.) Romina Mathew",
      duration: "2 Days",
      dates: "02 & 03 May 2025",
    },
    {
      function: "Human Resource Management",
      program: "Leadership and Personal Effectiveness",
      director: "Prof.(Dr.) Pavan Kumar Balivada",
      duration: "3 Days",
      dates: "15 – 17 May 2025",
    },
    {
      function: "Marketing",
      program: "Strategic Digital Marketing",
      director: "Prof.(Dr.) Nitin Gupta",
      duration: "3 Days",
      dates: "05 – 07 Jun 2025",
    },
    {
      function: "Human Resource Management",
      program: "Effective Communication for Managers and Leaders",
      director: "Prof.(Dr.) Pavan Kumar Balivada",
      duration: "4 Days",
      dates: "25 – 28 Jun 2025",
    },
  ];
  // Data for Future Leaders Program Content
  const flpContent = [
    {
      title: "Self-Management",
      items: [
        "MBTI Assessment: Personal Profiling to understand your areas of strength and development",
        "Empathetic communication",
        "Building your personal brand",
        "Effective decision making",
      ],
    },
    {
      title: "Essentials of Management",
      items: [
        "Customer and business orientation",
        "Finance for managerial decisions",
        "Data driven decision making",
        "Capitalizing on digital transformation",
      ],
    },
    {
      title: "Essentials of Leadership",
      items: [
        "The art of motivation",
        "Emotional intelligence for effective leadership",
        "Building high performance teams",
        "Nurturing diversity at workplace",
        "Transforming business through design thinking",
      ],
    },
    {
      title: "Strategic Leadership",
      items: [
        "Managing relationship with stakeholders",
        "Strategic thinking and business acumen",
        "Driving strategic innovation",
        "Simulations (Gamified learning)",
        "Leader Connect: Sessions with ex CEOs / CXOs / Leaders from other industries / companies",
      ],
    },
  ];

  // Data for Clients Carousel
  const clients = [
    { src: "/media/eeclients/1.jpg", alt: "Logo 1" },
    { src: "/media/eeclients/2.png", alt: "Logo 2" },
    { src: "/media/eeclients/3.jpg", alt: "Logo 3" },
    { src: "/media/eeclients/4.png", alt: "Logo 4" },
    { src: "/media/eeclients/5.jpg", alt: "Logo 5" },
    { src: "/media/eeclients/6.jpg", alt: "Logo 6" },
    { src: "/media/eeclients/7.png", alt: "Logo 7" },
    { src: "/media/eeclients/8.png", alt: "Logo 8" },
    { src: "/media/eeclients/9.jpg", alt: "Logo 9" },
    { src: "/media/eeclients/10.jpeg", alt: "Logo 10" },
    { src: "/media/eeclients/11.png", alt: "Logo 11" },
  ];

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
        /* Faculty Hero */
        .faculty-hero {
          background: url('/media/banners/executiveeducation.webp');
          position: relative;
          background-size: cover;
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

        /* Card styling */
        .faculty-card {
          background: #f8f9fa;
          border: none;
          border-radius: 1.5rem;
        }

        /* Image glow & hover effect */
        .faculty-img {
          border-radius: 1.2rem;
          transition: transform 0.4s ease;
        }
        .faculty-img:hover {
          transform: scale(1.03);
        }

        /* Social icons */
        .social-icon {
          display: inline-flex;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          background: #ffc107;
          color: #ffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* Tabs */
        .nav-pills .nav-link {
          border-radius: 30px;
          background: #e9ecef;
          color: #333;
          transition: all 0.3s;
        }
        .nav-pills .nav-link.active {
          background: #ffc107 !important;
          color: #000000 !important;
        }

        /* Owl Carousel */
        .owl-carousel .item {
          background: #ffffff;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s;
        }
        .owl-carousel .item:hover {
          transform: translateY(-5px);
        }
        .owl-carousel .item img {
          max-height: 80px;
          object-fit: contain;
        }

        /* Custom Card Hover */
        .custom-card {
          transition: background-color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .custom-card:hover {
          background-color: #ffc107;
          border: 1px solid #03255f;
          transform: translateY(-5px);
        }

        /* Table */
        .table th {
          background-color: #151e54;
          color: #ffc107;
        }

        .mx-1 {
          margin-top: 10px;
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
            background: "url('/media/banners/executiveeducation.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
          }}
        >
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">
            Executive Education
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            Empowering professionals to lead with confidence in a changing
            business facet.
            <br />
            Executive learning that blends strategy, leadership, and innovation.
            this content in the subtext
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
                  Executive Education
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="executive-education" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="card p-4">
            <h2
              className="section-title text-center"
              style={{ color: "#08317a" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Executive Education – An Introduction
            </h2>
            <div className="row justify-content-center mt-3">
              <div className="col-lg-12 text-justify">
                <p className="mb-4">
                  Executive Education has been and continues to be a valuable
                  enterprise. There is a continued need for reskilling as the
                  employment landscape and technology evolve. This reskilling
                  reduces skill gaps and leads to improved ROI, employee
                  satisfaction and retention, all of which cultivate company
                  growth. There is a continuous need for working professionals
                  to upgrade their qualifications to keep up with the industry’s
                  growing skill demand driven by automation.
                </p>
                <p className="mb-4">
                  While the demand for digital workforce and technical skills in
                  Big Data Analytics, Artificial Intelligence, and Internet of
                  Things is going to rise, the demand for functional skills in
                  negotiation, problem solving and assessment will also
                  increase. The changing macro environment driven by the COVID
                  pandemic calls for a more specialised approach, improvements
                  to the quality of offerings, and the creation of relevant,
                  robust programmes. We at <strong>IMT Hyderabad</strong> are
                  conscious of this changing environment and have adopted online
                  formats for greater flexibility and customization in our
                  programme offerings.
                </p>
                <p className="mb-4">
                  IMT Hyderabad designs and delivers open and customized,
                  industry-relevant programs to address the training needs of
                  working executives. Our Executive Education helps working
                  executives acquire industry-relevant skills with a focus on
                  imparting conceptual, technical, and people-management
                  capabilities. Our rich portfolio of executive learning and
                  development programs includes high-impact, solutions-oriented
                  courses ranging from three days to eleven months in length.
                </p>
                <p>
                  These programs are custom-designed to meet both organizational
                  and individual development goals and are delivered using a
                  pedagogical blend of case studies, videos, movies, simulation
                  games, and lectures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Programs Section */}
      <section
        id="recent-programs"
        className="py-5"
        style={{ backgroundColor: "#151e54" }}
      >
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <h2
            className="text-center text-warning"
            style={{ fontWeight: 700 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Recent Programs
          </h2>
          <p
            className="text-center text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore our latest Executive Development and Leadership Workshops.
          </p>

          <div className="row g-4 mt-3">
            {recentPrograms.map((program, index) => (
              <div
                className="col-md-6 col-lg-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <img
                    src={program.image}
                    className="card-img-top"
                    alt={program.title}
                    style={{ objectFit: "cover", height: "220px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{program.title}</h5>
                    <p className="mb-1">
                      <strong>Company:</strong> {program.company}
                    </p>
                    <p className="mb-0">
                      <strong>Program Director:</strong>{" "}
                      {program.programDirector}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Link
              href="/conferences-workshops"
              className="btn btn-warning px-4 rounded-pill border-dark"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* EDP Calendar Section */}
<section id="calendar" className="py-4">
  <div className="container" data-aos="fade-up" data-aos-delay="200">
    <div className="card p-3">
      <h2
        className="section-title text-center mb-4"
        style={{ color: "#08317a", fontWeight: 700 }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        EDP Calendar (January – June 2026)
      </h2>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-bordered table-striped table-hover align-middle mb-0">
          <thead className="table text-center">
            <tr>
              <th scope="col">Function</th>
              <th scope="col">Programs</th>
              <th scope="col">Program Director</th>
              <th scope="col">Duration</th>
              <th scope="col">Dates</th>
              <th scope="col">Know More</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                function: "Finance",
                program: "Business Valuation",
                director: "Prof (Dr) Nikhil Rastogi",
                duration: "2 Days",
                dates: "8 - 9 January’26",
              },
              {
                function: "Strategy",
                program: "Decision Making in Uncertain Environment",
                director: "Prof (Dr) Romina Mathew",
                duration: "3 Days",
                dates: "22 - 24 January’26",
              },
              {
                function: "Operations",
                program: "The Science of Operations Management",
                director: "Prof (Dr) Kalyana C Chejarla",
                duration: "4 Days",
                dates: "29 - 30 January & 5 - 6 February’26",
              },
              {
                function: "Human Resource Management",
                program: "Leadership and Personal Effectiveness",
                director: "Prof (Dr) Romina Mathew",
                duration: "2 Days",
                dates: "20 - 21 February’26",
              },
              {
                function: "Marketing",
                program: "Strategic Digital Marketing",
                director: "Prof (Dr) Pranay Sindhu",
                duration: "3 Days",
                dates: "26 - 28 February’26",
              },
              {
                function: "Marketing",
                program: "Sales Management - Shaping Future Sales Leaders",
                director: "Prof Dhananjay Singh",
                duration: "2 Days",
                dates: "6 - 7 March’26",
              },
              {
                function: "Operations",
                program: "Lean Management and Process Improvement",
                director: "Prof (Dr) Kalyana C Chejarla",
                duration: "3 Days",
                dates: "12 - 14 March’26",
              },
              {
                function: "General Management",
                program: "Strategy and Leadership in VUCA World",
                director: "Prof (Dr) Romina Mathew",
                duration: "5 Days",
                dates: "7 - 11 April’26",
              },
              {
                function: "Finance",
                program: "Finance for Non-Finance Executives",
                director: "Prof (Dr) A Sarath Babu",
                duration: "2 Days",
                dates: "17 - 18 April’26",
              },
              {
                function: "Marketing",
                program: "Customer Orientation and Sales Effectiveness",
                director: "Prof (Dr) Pranay Sindhu",
                duration: "2 Days",
                dates: "24 - 25 April’26",
              },
              {
                function: "Finance",
                program: "Financial Modelling Using Excel",
                director: "Prof (Dr) VC Chakrapani",
                duration: "2 Days",
                dates: "7 - 8 May’26",
              },
              {
                function: "Human Resource Management",
                program: "Emotional Intelligence for Leadership Effectiveness",
                director: "Prof (Dr) Romina Mathew",
                duration: "2 Days",
                dates: "21 - 22 May’26",
              },
              {
                function: "Information Technology",
                program: "Block Chain Management",
                director: "Prof (Dr) R Mahesh",
                duration: "3 Days",
                dates: "4 - 6 June’26",
              },
              {
                function: "Human Resource Management",
                program: "Effective Communication for Managers and Leaders",
                director: "Prof (Dr) Romina Mathew",
                duration: "3 Days",
                dates: "17 - 19 June’26",
              },
            ].map((program, index) => (
              <tr key={index}>
                <td>{program.function}</td>
                <td>{program.program}</td>
                <td>{program.director}</td>
                <td>{program.duration}</td>
                <td>{program.dates}</td>
                <td className="text-center">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>


      {/* Offerings Section */}
      <section id="offering" className="py-5">
        <div className="container">
          <h2
            className="section-title text-center  mb-4"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Offerings
          </h2>
          {/* Tabs Navigation */}
          <ul
            className="nav nav-pills justify-content-center mb-4"
            id="offeringsTabs"
            role="tablist"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link active"
                id="short-tab"
                data-bs-toggle="pill"
                data-bs-target="#short"
                type="button"
                role="tab"
                aria-controls="short"
                aria-selected="true"
              >
                Short Duration Programs
              </button>
            </li>
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link"
                id="long-tab"
                data-bs-toggle="pill"
                data-bs-target="#long"
                type="button"
                role="tab"
                aria-controls="long"
                aria-selected="false"
              >
                Long Duration Programs
              </button>
            </li>
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link"
                id="firsttime-tab"
                data-bs-toggle="pill"
                data-bs-target="#firsttime"
                type="button"
                role="tab"
                aria-controls="firsttime"
                aria-selected="false"
              >
                First Time Manager Program
              </button>
            </li>
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link"
                id="certificate-tab"
                data-bs-toggle="pill"
                data-bs-target="#certificate"
                type="button"
                role="tab"
                aria-controls="certificate"
                aria-selected="false"
              >
                Certificate Program
              </button>
            </li>
          </ul>
          <hr />
          {/* Tabs Content */}
          <div
            className="tab-content card bg-light p-4"
            id="offeringsTabsContent"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {/* Short Duration */}
            <div
              className="tab-pane fade show active"
              id="short"
              role="tabpanel"
              aria-labelledby="short-tab"
            >
              <h4 className="fw-semibold mb-3 text-center">
                Management Development Programs
              </h4>
              <p className="mb-2">
                <strong>Open Programs:</strong> These widely praised
                open-enrollment programs span a broad spectrum of topics in
                Business Management, focusing on essential fundamentals and
                sector-specific issues. Additionally, General Management
                Programs are available for middle and senior business leaders.
              </p>
              <p className="mb-0">
                <strong>Curated MDPs:</strong> Tailored to meet precise
                corporate needs, these customized modules are collaboratively
                designed with the client organization. They can be scheduled for
                two to five days or over staggered intervals for long duration
                programs.
              </p>
            </div>
            {/* Long Duration */}
            <div
              className="tab-pane fade"
              id="long"
              role="tabpanel"
              aria-labelledby="long-tab"
            >
              <h4 className="fw-semibold mb-4 text-center">
                Future Leaders Program
              </h4>
              {/* ========= INNER TABS NAV ========= */}
              <ul
                className="nav nav-pills justify-content-center mb-4"
                id="flpInnerTabs"
                role="tablist"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link active"
                    id="flp-overview-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#flp-overview"
                    type="button"
                    role="tab"
                    aria-controls="flp-overview"
                    aria-selected="true"
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="flp-objectives-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#flp-objectives"
                    type="button"
                    role="tab"
                    aria-controls="flp-objectives"
                    aria-selected="false"
                  >
                    Objectives
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="flp-who-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#flp-who"
                    type="button"
                    role="tab"
                    aria-controls="flp-who"
                    aria-selected="false"
                  >
                    Who Should Attend
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="flp-content-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#flp-content"
                    type="button"
                    role="tab"
                    aria-controls="flp-content"
                    aria-selected="false"
                  >
                    Program Content
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="flp-benefits-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#flp-benefits"
                    type="button"
                    role="tab"
                    aria-controls="flp-benefits"
                    aria-selected="false"
                  >
                    Benefits
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="flp-fee-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#flp-fee"
                    type="button"
                    role="tab"
                    aria-controls="flp-fee"
                    aria-selected="false"
                  >
                    Fee
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="flp-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#flp-contact"
                    type="button"
                    role="tab"
                    aria-controls="flp-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </li>
              </ul>
              {/* ========= INNER TABS CONTENT ========= */}
              <div className="tab-content" id="flpInnerTabsContent">
                {/* Overview */}
                <div
                  className="tab-pane fade show active"
                  id="flp-overview"
                  role="tabpanel"
                  aria-labelledby="flp-overview-tab"
                >
                  <p>
                    Leadership skills matter as leaders have a profound impact
                    on a company's performance. Every manager aspiring to ascend
                    the corporate ladder needs to develop knowledge and insights
                    over and above functional competencies to manifest their
                    true leadership potential. Today’s business world is agile
                    and dynamic. Traditional management hierarchies are
                    crumbling as more dispersed and virtual organizations become
                    the norm and the intellectual content of work changes
                    dramatically.
                  </p>
                  <p>
                    The Future Leaders Program, offered by IMT Hyderabad, takes
                    a structured approach towards making you an effective
                    leader. We understand that everyone is not born a great
                    leader, but anyone can foster core leadership competencies
                    for themselves and become actionable, effective leaders. The
                    program focuses on professional growth, self-awareness, and
                    essential management skills you can apply to real-world
                    situations.
                  </p>
                </div>
                {/* Objectives */}
                <div
                  className="tab-pane fade"
                  id="flp-objectives"
                  role="tabpanel"
                  aria-labelledby="flp-objectives-tab"
                >
                  <ul>
                    <li>
                      Enable participants to develop their skills &amp;
                      capabilities for challenging leadership positions
                    </li>
                    <li>
                      Increase managerial capabilities to take up leadership
                      positions in future
                    </li>
                    <li>
                      Holistically develop managers in terms of self, team and
                      business
                    </li>
                    <li>
                      Develop proven talent with high potential for the “NEXT
                      LEVEL” leadership roles
                    </li>
                  </ul>
                </div>
                {/* Who Should Attend */}
                <div
                  className="tab-pane fade"
                  id="flp-who"
                  role="tabpanel"
                  aria-labelledby="flp-who-tab"
                >
                  <ul>
                    <li>
                      Business executives who want to take on greater leadership
                      responsibilities
                    </li>
                    <li>
                      Mid-level Managers aspiring to take up higher leadership
                      roles
                    </li>
                    <li>Top talent in organizations</li>
                    <li>Leaders aspiring to become CXOs</li>
                    <li>Leaders of teams/functional specialists</li>
                    <li>
                      Senior-level leaders at large companies who are inspired
                      to innovate
                    </li>
                    <li>
                      Senior-level leaders at growth companies who are
                      challenged to scale
                    </li>
                    <li>
                      Seasoned and influential executives who are motivated to
                      make a difference
                    </li>
                  </ul>
                </div>
                {/* Program Content */}
                <div
                  className="tab-pane fade"
                  id="flp-content"
                  role="tabpanel"
                  aria-labelledby="flp-content-tab"
                >
                  <p className="mb-4 text-center">
                    The curriculum covers the entire spectrum of skills and
                    diverse toolkits needed to become effective managers and
                    leaders.
                  </p>
                  <div className="row g-4">
                    {/* Card 1 */}
                    <div className="col-md-6">
                      <div className="custom-card card h-100 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title fw-semibold">
                            Self-Management
                          </h5>
                          <ul className="mb-0">
                            <li>
                              MBTI Assessment: Personal Profiling to understand
                              your areas of strength and development
                            </li>
                            <li>Empathetic communication</li>
                            <li>Building your personal brand</li>
                            <li>Effective decision making</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-md-6">
                      <div className="custom-card card h-100 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title fw-semibold">
                            Essentials of Management
                          </h5>
                          <ul className="mb-0">
                            <li>Customer and business orientation</li>
                            <li>Finance for managerial decisions</li>
                            <li>Data driven decision making</li>
                            <li>Capitalizing on digital transformation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-md-6">
                      <div className="custom-card card h-100 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title fw-semibold">
                            Essentials of Leadership
                          </h5>
                          <ul className="mb-0">
                            <li>The art of motivation</li>
                            <li>
                              Emotional intelligence for effective leadership
                            </li>
                            <li>Building high performance teams</li>
                            <li>Nurturing diversity at workplace</li>
                            <li>
                              Transforming business through design thinking
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="col-md-6">
                      <div className="custom-card card h-100 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title fw-semibold">
                            Strategic Leadership
                          </h5>
                          <ul className="mb-0">
                            <li>Managing relationship with stakeholders</li>
                            <li>Strategic thinking and business acumen</li>
                            <li>Driving strategic innovation</li>
                            <li>Simulations (Gamified learning)</li>
                            <li>
                              Leader Connect: Sessions with ex CEOs / CXOs /
                              Leaders from other industries / companies
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Benefits */}
                <div
                  className="tab-pane fade"
                  id="flp-benefits"
                  role="tabpanel"
                  aria-labelledby="flp-benefits-tab"
                >
                  <ul>
                    <li>Develop your career path in the organization</li>
                    <li>
                      Exposure to contemporary topics in management and
                      leadership
                    </li>
                    <li>
                      Learn from seasoned academicians and corporate
                      practitioners
                    </li>
                    <li>Learn and network with industry leaders</li>
                    <li>
                      Program design and delivery in blended format capturing
                      the demands of work-life balance
                    </li>
                    <li>
                      Online masterclasses with faculty and industry experts
                    </li>
                    <li>
                      Weekend sessions with 6-8 hours of learning commitment per
                      week
                    </li>
                    <li>
                      Dedicated Program Manager for resolving academic and
                      non-academic queries
                    </li>
                    <li>
                      Learn with an accomplished and diverse group of
                      professionals in your cohort
                    </li>
                    <li>MBTI profiling</li>
                    <li>Become a member of IMT Alumni Network</li>
                    <li>Certificate of completion by IMT Hyderabad</li>
                  </ul>
                </div>
                {/* Fee */}
                <div
                  className="tab-pane fade"
                  id="flp-fee"
                  role="tabpanel"
                  aria-labelledby="flp-fee-tab"
                >
                  <p>
                    The program fee is <strong>INR 1,00,000</strong> (one lakh),
                    excluding taxes, per participant.
                  </p>
                </div>
                {/* Contact */}
                <div
                  className="tab-pane fade"
                  id="flp-contact"
                  role="tabpanel"
                  aria-labelledby="flp-contact-tab"
                >
                  <p>
                    <strong>Prof. (Dr.) A. Sarath Babu</strong>
                    <br />
                    Associate Professor, Chairperson – Executive Education
                    <br />
                    Institute of Management Technology, Hyderabad
                    <br />
                    Email:{" "}
                    <a href="mailto:exedu@imthyderabad.edu.in">
                      exedu@imthyderabad.edu.in
                    </a>
                    <br />
                    Mobile: +91&nbsp;9160501754
                    <br />
                    Survey 38, Shamshabad, Hyderabad, Telangana, 501218
                  </p>
                </div>
              </div>
              {/* /tab-content */}
            </div>
            {/* First Time Manager */}
            {/* First Time Manager Program */}
            <div
              className="tab-pane fade"
              id="firsttime"
              role="tabpanel"
              aria-labelledby="firsttime-tab"
            >
              <h4 className="fw-semibold mt-4 mb-3 text-center">
                First Time Manager Program
              </h4>
              <h6 className="text-center mb-4 text-warning">
                Empowering Emerging Leaders for Managerial Success
              </h6>

              {/* Inner Tabs */}
              <ul
                className="nav nav-pills justify-content-center mb-4"
                id="ftmInnerTabs"
                role="tablist"
              >
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link active"
                    id="ftm-overview-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#ftm-overview"
                    type="button"
                    role="tab"
                    aria-controls="ftm-overview"
                    aria-selected="true"
                  >
                    Program Overview
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="ftm-features-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#ftm-features"
                    type="button"
                    role="tab"
                    aria-controls="ftm-features"
                    aria-selected="false"
                  >
                    Key Features
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="ftm-pedagogy-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#ftm-pedagogy"
                    type="button"
                    role="tab"
                    aria-controls="ftm-pedagogy"
                    aria-selected="false"
                  >
                    Pedagogy & Evaluation
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="ftm-who-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#ftm-who"
                    type="button"
                    role="tab"
                    aria-controls="ftm-who"
                    aria-selected="false"
                  >
                    Who Should Attend
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="ftm-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#ftm-contact"
                    type="button"
                    role="tab"
                    aria-controls="ftm-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </li>
              </ul>

              {/* Inner Tabs Content */}
              <div className="tab-content" id="ftmInnerTabsContent">
                {/* Overview */}
                <div
                  className="tab-pane fade show active"
                  id="ftm-overview"
                  role="tabpanel"
                  aria-labelledby="ftm-overview-tab"
                >
                  <p>
                    The <strong>First Time Manager Program</strong> by the
                    Institute of Management Technology, Hyderabad (IMT
                    Hyderabad) is designed to prepare professionals stepping
                    into managerial roles for the first time. The program
                    bridges the gap between being an individual contributor and
                    becoming an effective team leader, equipping participants
                    with the essential skills, tools, and mindset needed to lead
                    with confidence and impact.
                  </p>
                  <p>
                    It focuses on helping current and aspiring managers develop
                    core leadership competencies essential for success in
                    dynamic business environments. Through an engaging blend of
                    theory and practical learning, participants gain insights
                    into:
                  </p>
                  <ul>
                    <li>Ownership and Accountability</li>
                    <li>Planning and Prioritization</li>
                    <li>Finance for Non-Finance Professionals</li>
                    <li>Building Workplace Relationships</li>
                    <li>Conflict Management</li>
                    <li>Feedback and Communication</li>
                    <li>Driving Results</li>
                    <li>Presentation and People Management Skills</li>
                  </ul>
                  <p>
                    The program provides actionable frameworks and experiential
                    learning to strengthen decision-making, enhance
                    interpersonal effectiveness, and improve team outcomes.
                  </p>
                </div>

                {/* Key Features */}
                <div
                  className="tab-pane fade"
                  id="ftm-features"
                  role="tabpanel"
                  aria-labelledby="ftm-features-tab"
                >
                  <ul>
                    <li>
                      <strong>Duration:</strong> 5 months, designed for flexible
                      learning and application at the workplace
                    </li>
                    <li>
                      <strong>Industry-Integrated Learning:</strong> Sessions
                      facilitated by IMT faculty and seasoned industry mentors
                    </li>
                    <li>
                      <strong>Company Mentorship:</strong> Ensures alignment
                      with organizational goals
                    </li>
                    <li>
                      <strong>Experiential Pedagogy:</strong> Role plays, group
                      exercises, simulations, and case discussions
                    </li>
                    <li>
                      <strong>Action Learning Projects:</strong> Hands-on
                      assignments to apply learning directly to real business
                      challenges
                    </li>
                  </ul>
                </div>

                {/* Pedagogy & Evaluation */}
                <div
                  className="tab-pane fade"
                  id="ftm-pedagogy"
                  role="tabpanel"
                  aria-labelledby="ftm-pedagogy-tab"
                >
                  <p>
                    Learning in this program is deeply experiential.
                    Participants engage in real-world case discussions,
                    reflection exercises, and 360-degree feedback assessments to
                    track progress. Assignments, group projects, and
                    self-assessment tools ensure a sustained transfer of
                    learning to the workplace.
                  </p>
                </div>

                {/* Who Should Attend */}
                <div
                  className="tab-pane fade"
                  id="ftm-who"
                  role="tabpanel"
                  aria-labelledby="ftm-who-tab"
                >
                  <ul>
                    <li>Professionals transitioning into managerial roles</li>
                    <li>Aspiring team leaders and supervisors</li>
                    <li>
                      Early-career managers seeking to enhance leadership
                      effectiveness
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div
                  className="tab-pane fade"
                  id="ftm-contact"
                  role="tabpanel"
                  aria-labelledby="ftm-contact-tab"
                >
                  <p>
                    <strong>Prof. (Dr.) A. Sarath Babu</strong>
                    <br />
                    Associate Professor & Chairperson – Executive Education
                    <br />{" "}
                    <a href="mailto:sarathbabu@imthyderabad.edu.in">
                      sarathbabu@imthyderabad.edu.in
                    </a>{" "}
                    | +91 9160501754
                  </p>
                  <p>
                    <strong>Ms. Susan Thomas</strong>
                    <br />
                    Manager – Executive Education
                    <br />{" "}
                    <a href="mailto:exedu@imthyderabad.edu.in">
                      exedu@imthyderabad.edu.in
                    </a>{" "}
                    /{" "}
                    <a href="mailto:susanthomas@imthyderabad.edu.in">
                      susanthomas@imthyderabad.edu.in
                    </a>{" "}
                    | +91 9971802773
                  </p>
                </div>
              </div>
            </div>

            {/* Certificate Programs */}
            <div
              className="tab-pane fade"
              id="certificate"
              role="tabpanel"
              aria-labelledby="certificate-tab"
            >
              <h4 className="fw-semibold mb-4 mt-3 text-center">
                Certificate Programs
              </h4>

              <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-4 col-sm-6">
                  <a
                    href="https://www.nseacademy.com/pages/executives_education/IMTHYD-Data_Science-AI/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    <div className="custom-card card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          PG Certificate Program in Data Science &amp; AI
                        </h5>
                        <p className="card-text mb-1">
                          <strong>Mode:</strong> Online / Hybrid
                        </p>
                        <p className="card-text">
                          <strong>Duration:</strong> 6 Months
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 col-sm-6">
                  <a
                    href="https://www.nseacademy.com/pages/executives_education/imt-pg-certificate-financial-technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    <div className="custom-card card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          PG Certificate Program in Financial Technologies
                        </h5>
                        <p className="card-text mb-1">
                          <strong>Mode:</strong> Online
                        </p>
                        <p className="card-text">
                          <strong>Duration:</strong> 6 Months
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 col-sm-6">
                  <a
                    href="#"
                  
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    <div className="custom-card card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          Sales and Marketing
                        </h5>
                        <p className="card-text mb-1">
                          <strong>Mode:</strong> Classroom / Online
                        </p>
                        <p className="card-text">
                          <strong>Duration:</strong> 4 Months
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Card 4 */}
                <div className="col-md-4 col-sm-6">
                  <a
                    href="#"
                   
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    <div className="custom-card card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          Strategic Digital Marketing
                        </h5>
                        <p className="card-text mb-1">
                          <strong>Mode:</strong> Online
                        </p>
                        <p className="card-text">
                          <strong>Duration:</strong> 5 Months
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Card 5 */}
                <div className="col-md-4 col-sm-6">
                  <a
                    href="#"
                  
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    <div className="custom-card card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          Compensation Management
                        </h5>
                        <p className="card-text mb-1">
                          <strong>Mode:</strong> Hybrid
                        </p>
                        <p className="card-text">
                          <strong>Duration:</strong> 3 Months
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Card 6 */}
                <div className="col-md-4 col-sm-6">
                  <a
                    href="#"
                   
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    <div className="custom-card card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          AI and Machine Learning
                        </h5>
                        <p className="card-text mb-1">
                          <strong>Mode:</strong> Online / Hybrid
                        </p>
                        <p className="card-text">
                          <strong>Duration:</strong> 6 Months
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        className="placement-alliances-section py-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container text-center">
          <h6
            className="subtitle text-center text-warning"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Our Clients
          </h6>
          <h2
            className="section-title mb-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Our Distinguished Clients
          </h2>
          <p className="mb-5" data-aos="fade-up" data-aos-delay="300">
            We are proud to be associated with top companies.
          </p>
          <OwlCarousel
            className="owl-carousel owl-theme"
            loop
            margin={20}
            nav
            dots={false}
            autoplay
            autoplayTimeout={2000}
            autoplayHoverPause
            responsive={{
              0: { items: 1 },
              600: { items: 3 },
              1000: { items: 4 },
            }}
          >
            {clients.map((client, index) => (
              <div className="item" key={index}>
                <img src={client.src} alt={client.alt} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>

      {/* Contact Strip */}
      <section
        className="py-3"
        style={{ backgroundColor: "rgb(21, 30, 84)", color: "white" }}
      >
        <h4
          className="text-center fw-bold text-warning"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Contact Details
        </h4>
        <div
          className="container d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start gap-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div data-aos="fade-up" data-aos-delay="200">
            <strong className="text-warning">Email ID :</strong>
            <Link
              href="mailto:exedu@imthyderabad.edu.in"
              className="text-light text-decoration-none ms-1"
            >
              exedu@imthyderabad.edu.in
            </Link>
          </div>
          <div className="vr d-none d-md-block"></div>
          <div data-aos="fade-up" data-aos-delay="200">
            <strong className="text-warning">Phone :</strong>
            <Link
              href="tel:9971802773"
              className="text-light text-decoration-none ms-1"
            >
              9971802773
            </Link>{" "}
            /
            <Link
              href="tel:9160501754"
              className="text-light text-decoration-none"
            >
              9160501754
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
