"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function WorkshopsConferences() {
  // Embedded data for workshops and conferences
  const data = {
workshops: [
  {
    title: "IMT Hyderabad – Amara Raja Future Leaders Program (AR-FLP)",
    company: "Amara Raja Group",
    programDirector:
      "Prof. A Sarath Babu, Prof Kiranmai Pendyala, Prof Dhananjay Singh, Prof Sathish Kumar Kannan",
    image: "/images/edp/1.webp",
    alt: "Workshop 1",
    link: "https://drive.google.com/file/d/1HATMqS_WqRruS7sKGfTbfYAhLVyUwQCL/view",
  },
  {
    title: "PG Certification in Leadership",
    company: "Apitoria Pharma Pvt. Ltd.",
    programDirector: "Prof. (Dr.) Romina Mathew",
    image: "/images/edp/2.webp",
    alt: "Workshop 2",
    link: "https://drive.google.com/file/d/1fGGBfU3TteXq4RE989xD48hK9pwMAKtO/view",
  },
  {
    title: "Enhancing HR Competencies for Effective People Management",
    company: "Telangana State Road Transport Corporation",
    programDirector: "Prof Romina Mathew",
    image: "/images/edp/3.webp",
    alt: "Workshop 3",
    link: "http://drive.google.com/file/d/16GWqCQcX73grc5s1RlZx5jUrCRTswilX/view",
  },
  {
    title: "ASPIRE 7.0",
    company: "Apollo Tyres Ltd",
    programDirector:
      "Prof Romina Mathew, Prof A Sarath Babu, Prof Dhananjay Singh",
    image: "/images/edp/4.webp",
    alt: "Workshop 4",
    link: "https://drive.google.com/file/d/1Yimju-euEQWSS-EEcKwOjjbBeUlNJGaI/view",
  },
  {
    title:
      "Advanced Leadership Excellence Program – Driving Transformation through Strategic Foresight and Leadership Agility",
    company: "Telangana State Road Transport Corporation (TGSRTC)",
    programDirector: "Prof. Sathish Kumar Kannan",
    image: "/images/edp/5.webp",
    alt: "Workshop 5",
    link: "https://drive.google.com/file/d/1V4-8wnfU9Dkd-_q30n9W0o72IU3e3Eha/view",
  },
  {
    title:
      "Finance and Accounting Excellence Program: Strategic Financial Management",
    company: "Telangana State Road Transport Corporation",
    programDirector: "Prof. (Dr.) A. Sarath Babu",
    image: "/images/edp/6.webp",
    alt: "Workshop 6",
    link: "https://drive.google.com/file/d/1WDSiOx69hg7K6AkNEJ1EcP904J4a-PDW/view",
  },
  {
    title: "Mastering People Management and Team Leadership",
    company: "BHARAT Financial Inclusion Ltd",
    programDirector: "Prof. (Dr.) Romina Mathew",
    image: "/images/edp/7.webp",
    alt: "Workshop 7",
    link: "https://drive.google.com/file/d/1vg8QjID1crn6rWql-6f1NORKtRCi1HI3/view",
  },
  {
    title: "CoroElite – Sales Excellence in Retail",
    company: "Coromandel International Ltd.",
    programDirector: "Prof. (Dr.) A. Sarath Babu",
    image: "/images/edp/8.webp",
    alt: "Workshop 8",
    link: "https://drive.google.com/file/d/1GTxg5LjGjjAxZpy5H56U_yB0NL2tyoYw/view",
  },
  {
    title: "Mastering People Management & Team Leadership",
    company: "BHARAT Financial Inclusion Ltd",
    programDirector: "Prof. (Dr.) Pavan Kumar Balivada",
    image: "/images/edp/9.webp",
    alt: "Workshop 9",
    link: "https://drive.google.com/file/d/1iuOCYGj26ciKh8cT8O6ZsxJ4_kkAaPnZ/view",
  },
  {
    title: "Middle Management Development Program",
    company: "Greenko Group",
    programDirector:
      "Prof. (Dr.) Pavan Kumar Balivada & Prof. (Dr.) A. Sarath Babu",
    image: "/images/edp/10.webp",
    alt: "Workshop 10",
    link: "https://drive.google.com/file/d/1bMJsCblLXRnTAWhzXiMcMVke3iZbZpKt/view",
  },
  {
    title:
      "Leadership Training Program: Navigating High-Pressure Environments",
    company: "Telangana State Road Transport Corporation",
    programDirector: "Prof. Dhananjay Singh",
    image: "/images/edp/11.webp",
    alt: "Workshop 11",
    link: "https://drive.google.com/file/d/1oGNREy0blLxRAzWz3lvVZvmwN3bGdwdG/view",
  },
  {
    title: "Building Resilient Leadership for Navigating Change",
    company: "Telangana State Road Transport Corporation",
    programDirector: "Prof. Dhananjay Singh",
    image: "/images/edp/12.webp",
    alt: "Workshop 12",
    link: "https://drive.google.com/file/d/1kSwvVmXET37AucWgAteVFMX0IwNfnZK8/view",
  },
  {
    title: "ASPIRE 6.0 Training Program",
    company: "Apollo Tyres Ltd",
    programDirector:
      "Prof. (Dr.) A Sarath Babu & Prof Dhananjay Singh",
    image: "/images/edp/13.webp",
    alt: "Workshop 13",
    link: "https://drive.google.com/file/d/1155yDcvMaveneLLggh2bSwFpD430SMeo/view",
  },
  {
    title: "Middle Management Development Program",
    company: "Greenko Group",
    programDirector:
      "Prof. (Dr.) Romina Mathew & Prof. (Dr.) A Sarath Babu",
    image: "/images/edp/14.webp",
    alt: "Workshop 14",
    link: "https://drive.google.com/file/d/1F53jY_zimk-2dBzDirzxebSDwy0pMwjf/view",
  },
  {
    title: "Strategic Business Planning and Effective Leadership",
    company: "Telangana State Road Transport Corporation",
    programDirector: "Prof. (Dr.) Pavan Kumar Balivada",
    image: "/images/edp/15.webp",
    alt: "Workshop 15",
    link: "https://drive.google.com/file/d/1F53jY_zimk-2dBzDirzxebSDwy0pMwjf/view",
  },
  {
    title: "Mastering People Management & Team Leadership",
    company: "BHARAT Financial Inclusion Ltd",
    programDirector: "Prof. (Dr.) Romina Mathew",
    image: "/images/edp/16.webp",
    alt: "Workshop 16",
    link: "https://drive.google.com/file/d/1F53jY_zimk-2dBzDirzxebSDwy0pMwjf/view",
  },
  {
    title: "ASPIRE 5 – Refresher Training Program",
    company: "Apollo Tyres Ltd",
    programDirector:
      "Prof. (Dr.) A Sarath Babu & Prof. (Dr.) Romina Mathew",
    image: "/images/edp/17.webp",
    alt: "Workshop 17",
    link: "https://drive.google.com/file/d/1F53jY_zimk-2dBzDirzxebSDwy0pMwjf/view",
  },
  {
    title:
      "CoroXcelerate (Supply Chain, Field Marketing & Category Marketing)",
    company: "Coromandel International",
    programDirector:
      "Prof. (Dr.) A Sarath Babu & Prof. (Dr.) Kalyana C Chejarla",
    image: "/images/edp/18.webp",
    alt: "Workshop 18",
    link: "https://drive.google.com/file/d/1F53jY_zimk-2dBzDirzxebSDwy0pMwjf/view",
  },
  {
    title: "Building Resilient Leadership for Navigating Change",
    company: "Advance Auto Parts India",
    programDirector: "Prof. (Dr.) Romina Mathew",
    image: "/images/edp/19.webp",
    alt: "Workshop 19",
    link: "https://drive.google.com/file/d/1F53jY_zimk-2dBzDirzxebSDwy0pMwjf/view",
  },
  {
    title: "Mastering Self & Team: Navigating Business Success",
    company: "Auro Infra Pvt. Ltd. (Auro Realty)",
    programDirector: "Prof. (Dr.) B. Pavan Kumar",
    image: "/images/edp/20.webp",
    alt: "Workshop 20",
    link: "https://drive.google.com/file/d/1F53jY_zimk-2dBzDirzxebSDwy0pMwjf/view",
  },
  {
    title: "Mastering Self & Team: Navigating Business Success",
    company: "BHARAT Financial Inclusion Ltd",
    programDirector: "Prof. (Dr.) Romina Mathew",
    image: "/images/edp/21.webp",
    alt: "Workshop 21",
    link: "https://drive.google.com/file/d/1DwgdmWcex3YAbK8VxiZ8Y83hLuy-I8zz/view",
  },
  {
    title: "Mastering Self & Team: Navigating Business Success",
    company: "BHARAT Financial Inclusion Ltd",
    programDirector: "Prof. (Dr.) Romina Mathew",
    image: "/images/edp/22.webp",
    alt: "Workshop 22",
    link: "https://drive.google.com/file/d/1LHeZ0TwDV0VBusx-UPGsMmK4a6zIpCFO/view",
  },
  {
    title: "Mastering Self & Team: Navigating Business Success",
    company: "BHARAT Financial Inclusion Ltd",
    programDirector: "Prof. (Dr.) Romina Mathew",
    image: "/images/edp/23.webp",
    alt: "Workshop 23",
    link: "https://drive.google.com/file/d/1YjENikCsmUSGn38s7-QpM1cY0KGlyXUU/view",
  },
  {
    title: "Strategies for Effective Leadership",
    company: "Auro Infra Pvt. Ltd.",
    programDirector: "Prof. (Dr.) A. Sarath Babu",
    image: "/images/edp/24.webp",
    alt: "Workshop 24",
    link: "https://drive.google.com/file/d/1F53jY_zimk-2dBzDirzxebSDwy0pMwjf/view",
  },
  {
    title: "Mastering People Management & Team Leadership",
    company: "Bharat Financial Inclusion Ltd.",
    programDirector: "Prof. (Dr) Romina Mathew",
    image: "/images/edp/25.webp",
    alt: "Workshop 25",
    link: "https://drive.google.com/file/d/1-F9YRghyK79FyyerDsnCcHKRu1FAE1Xu/view",
  },
  {
    title: "Building Productive Workplaces",
    company: "Aurobindo Realty & Infrastructure Pvt. Ltd.",
    programDirector: "Prof. (Dr.) B. Pavan Kumar",
    image: "/images/edp/26.webp",
    alt: "Workshop 26",
    link: "https://drive.google.com/file/d/1F53jY_zimk-2dBzDirzxebSDwy0pMwjf/view",
  },
  {
    title: "Leadership & Personal Effectiveness",
    company: "Bharat Financial Inclusion Ltd",
    programDirector: "Prof. (Dr.) B. Pavan Kumar",
    image: "/images/edp/27.webp",
    alt: "Workshop 27",
    link: "https://drive.google.com/file/d/1P16bhFS5ZYIC0lW_-ZGc61GB68puWLKH/view",
  },
  {
    title: "Leadership & Personal Effectiveness",
    company: "Aurobindo Realty and Infrastructure Pvt. Ltd.",
    programDirector: "Prof. (Dr.) B. Pavan Kumar",
    image: "/images/edp/28.webp",
    alt: "Workshop 28",
    link: "https://drive.google.com/file/d/10WxaJMzs4vuXDZuDNdYWtFKNpnjUDFhs/view",
  },
  {
    title: "PG Certification in Leadership",
    company: "Aurobindo Pharma Ltd.",
    programDirector: "Prof. (Dr.) Romina Mathew",
    image: "/images/edp/29.webp",
    alt: "Workshop 29",
    link: "https://drive.google.com/file/d/1F53jY_zimk-2dBzDirzxebSDwy0pMwjf/view",
  },
  {
    title: "Leadership & Personal Effectiveness",
    company: "Ramky Estates & Farms Ltd.",
    programDirector: "Prof. (Dr.) B. Pavan Kumar",
    image: "/images/edp/30.webp",
    alt: "Workshop 30",
    link: "https://drive.google.com/file/d/1P16bhFS5ZYIC0lW_-ZGc61GB68puWLKH/view",
  },
  {
    title: "Text Analytics Using Python",
    company: "Open Management Development Program",
    programDirector: "Prof. (Dr.) Preeti Sharma",
    image: "/images/edp/31.webp",
    alt: "Workshop 31",
    link: "https://drive.google.com/file/d/1y0GI6AhiZAlDxG0-hJVpgbWiO01tFy2F/view",
  },
  {
    title: "Data Analysis Using SPSS",
    company: "Open Management Development Program",
    programDirector: "Prof. (Dr.) M. Sivagnanasundaram",
    image: "/images/edp/32.webp",
    alt: "Workshop 32",
    link: "https://drive.google.com/file/d/1_5_odh3QVDMAhtTKEUlWGJkL2syfeLm0/view",
  },
  {
    title: "Visual Analytics and Leadership",
    company: "MIT World Peace University",
    programDirector: "Prof. (Dr.) R. Mahesh",
    image: "/images/edp/33.webp",
    alt: "Workshop 33",
    link: "https://drive.google.com/file/d/1sLpJscblRmbWoy46zX-0bRKbNOLKYl6y/view",
  },
  {
    title: "Aspire: First Time Managers’ Program",
    company: "Apollo Tyres Ltd.",
    programDirector: "Prof. (Dr.) Apurva Sanaria",
    image: "/images/edp/34.webp",
    alt: "Workshop 34",
    link: "https://drive.google.com/file/d/137YaMIcD2zWXK8ZxOQcOmPAMawIdIT7J/view",
  },
  {
    title: "TQM Awareness Program",
    company: "Midhani (Mishra Dhatu Nigam Limited)",
    programDirector: "Prof. (Dr.) K. Vinay Kumar",
    image: "/images/edp/35.webp",
    alt: "Workshop 35",
    link: "https://drive.google.com/file/d/13EYCCtXa3IhiZeE91ciXW3BZRXYvPHjP/view",
  },
  {
    title: "Applied Business Analytics Using R: Basics and Advances",
    company: "Open Management Development Program",
    programDirector: "Prof. (Dr.) Sridhar Vaithianathan",
    image: "/images/edp/36.webp",
    alt: "Workshop 36",
    link: "https://drive.google.com/file/d/12WxvzkygZQITZz6ve_w4eiMgKeH9IHID/view",
  },
  {
    title: "Legal Literacy And Legal Aspects Of The Power Sector",
    company:
      "Nuclear Power Corporation of India Ltd., Aeronautics India Ltd., Maharashtra Electricity Regulatory Council, Gujarat Electricity Regulatory Council Ltd., Tata Power, Raheja Corporate Services",
    programDirector: "Prof. (Dr.) D. P. Kar",
    image: "/images/edp/37.webp",
    alt: "Workshop 37",
    link: "https://drive.google.com/file/d/1qC3l2lL_3rimI63BjFh0_3VUWlH_pwth/view",
  },
  {
    title: "Applied Business Analytics Using R: Basics And Advances",
    company:
      "Open Management Development Program",
    programDirector: "Prof. (Dr.) Sridhar Vaithianathan",
    image: "/images/edp/38.webp",
    alt: "Workshop 38",
    link: "https://drive.google.com/file/d/12WxvzkygZQITZz6ve_w4eiMgKeH9IHID/view",
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
      "International Journal of Economics and Business Research (Inderscience, Scopus Indexed, ABDC-C)",
    brochure: {
      label: "Brochure",
      link: "/images/edp/conference-1.pdf",
    },
    flyer: {
      label: "Flyer",
      link: "/images/edp/flyre1.webp",
    },
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
      "International Journal of Environment, Workplace and Employment (Inderscience, Scopus Indexed, ABDC-C)",
    brochure: {
      label: "Brochure",
      link: "/images/edp/conference-2.pdf",
    },
    flyer: {
      label: "Flyer",
      link: "/images/edp/flyre2.pdf",
    },
  },
  {
    title: "MCEM-2017",
    date: "December 08 and 09, 2017",
    conference: "2nd International Conference",
    theme: "Digital Transformation & Evolution of Businesses",
    support:
      "Supported by Association of Management Development Institute of South Asia (AMDISA)",
    journal: "NA",
    brochure: {
      label: "Brochure",
      link: "/images/edp/conference-3.pdf",
    },
    flyer: {
      label: "Flyer",
      link: "/images/edp/flyre3.webp",
    },
  },
  {
    title: "MCEM-2016",
    date: "January 21 and 22, 2016",
    conference: "International Conference",
    theme: "Marketing Challenges in Emerging Markets",
    support:
      "In Collaboration with EM Normandie France and Corvinus University of Budapest",
    journal: "NA",
    brochure: {
      label: "Brochure",
      link: "/images/edp/conference-4.pdf",
    },
    flyer: {
      label: "Flyer",
      link: "/images/edp/flyre4.webp",
    },
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
  <a href="/" className="text-white fw-bold text-decoration-none">
    Home
  </a>
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
                   {workshop.link && (
  <a
    href={workshop.link}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-warning text-dark fw-bold mt-2"
  >
    Read More
  </a>
)}
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
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">
              {conference.title}
            </h5>

            <p className="card-text flex-grow-1">
              <strong>Date:</strong> {conference.date} <br />
              <strong>Conference:</strong> {conference.conference} <br />
              <strong>Theme:</strong> {conference.theme} <br />
              <strong>Support / Collaborations:</strong>{" "}
              {conference.support} <br />
              <strong>Journal:</strong> {conference.journal}
            </p>

            {/* Buttons */}
            <div className="d-flex gap-2 mt-3">
              {conference.brochure?.link && (
                <a
                  href={conference.brochure.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning text-dark fw-bold btn-sm"
                >
                  {conference.brochure.label}
                </a>
              )}

              {conference.flyer?.link && (
                <a
                  href={conference.flyer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning fw-bold btn-sm"
                >
                  {conference.flyer.label}
                </a>
              )}
            </div>
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
