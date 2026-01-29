"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function LeadershipSection() {
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .faculty-hero {
          background: url("/media/banners/faculty.webp");
          position: relative;
          background-size: cover;
          height: 60vh;
            background-position: center !important;
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

        #leadership-section .nav-tabs .nav-link {
          border-radius: 50px;
          background: #e9ecef;
          color: #333;
          font-weight: 600;
          margin: 5px 5px;
          transition: all 0.3s ease;
        }

        .leader-img-box {
  width: 320px;        /* fixed width */
  height: auto;       /* control height freely */
  overflow: hidden;
  border-radius: 12px;
  margin: 0px auto;      /* center horizontally */
}

.leader-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

        #leadership-section .nav-tabs .nav-link.active {
          background: #ffc107;
          color: #000;
        }

        #leadership-section .nav-tabs .nav-link:hover {
          background: #ffc107;
          color: #000;
        }
          @media screen and (min-width: 1000px) {
  .your-class {
    margin-top: -60px !important;
  }
}
  .director-message {
  line-height: 1.7;
  color: #333;
}

/* FLOAT IMAGE */
.director-img {
  float: left;
  width: 300px;
  margin: 6px 30px 0px 0;
}

.director-img img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* CLEAR FLOAT AT END */
.director-message::after {
  content: "";
  display: block;
  clear: both;
}

/* MOBILE */
@media (max-width: 768px) {
  .director-img {
    float: none;
    margin: 0 auto 20px;
    width: 100%;
    max-width: 320px;
  }
}
.director-message p {
  line-height: 22px;          /* increase line height */
  text-align: justify;
}
  .president-message {
  line-height: 22px;
  color: #333;
  text-align: justify;
}

/* FLOAT IMAGE */
.president-img {
  float: left;
  width: 300px;
  margin: 6px 30px 20px 0;
}

.president-img img {
  width: 90%;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* CLEAR FLOAT */
.president-message::after {
  content: "";
  display: block;
  clear: both;
}

/* PARAGRAPH SPACING */
.president-message p {
  line-height: 22px;
  
}

/* MOBILE */
@media (max-width: 768px) {
  .president-img {
    float: none;
    margin: 0 auto 20px;
    width: 100%;
    max-width: 320px;
  }
}

    `,
        }}
      />

      <section className="faculty-section">
        {/* Top Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
        >
          <h2 className="display-5 fw-bold mb-2">Leadership & Governance</h2>
          <p className="text-white">
            Leadership that speaks with vision and purpose. <br />
            Messages from our directors and deans reflect our values, direction,
            and academic excellence.
          </p>
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22 57 119)" }}
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
                  Leadership & Governance
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Leadership Section with Tabs */}
        <section id="leadership-section" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            {/* Nav Tabs */}
            <ul
              className="nav nav-tabs justify-content-center mb-4"
              id="leadershipTabs"
              role="tablist"
            >
              {[
                { id: "director", label: "Director’s Message", active: true },
                { id: "president", label: "President’s Message" },
                { id: "governing", label: "Governing Council" },
                { id: "board", label: "Board of Governors" },
              ].map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link ${tab.active ? "active" : ""}`}
                    id={`${tab.id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${tab.id}`}
                    type="button"
                    role="tab"
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="card border-0 shadow-sm rounded-3 overflow-hidden p-4 p-md-5">
              {/* Tab Content */}
              <div className="tab-content" id="leadershipTabsContent">
                {/* President’s Message */}
                <div
                  className="tab-pane fade"
                  id="president"
                  role="tabpanel"
                  aria-labelledby="president-tab"
                >
                  <h4 className="fw-bold mb-4" style={{ color: "#08317a" }}>
                    President&apos;s Message
                  </h4>

                  <div className="president-message">
                    {/* FLOAT IMAGE */}
                    <div className="president-img">
                      <img src="/media/shri-bakul-nath.jpg" alt="President" />
                      <div className="text-center mt-2">
                        <h4 className="mb-2" style={{ fontSize: "20px" }}>
                          Shri Bakul Nath
                        </h4>
                        <h6 className="text-warning">President</h6>
                      </div>
                    </div>

                    {/* TEXT – wraps beside image, then full width */}
                    <p>
                      Educational excellence was the mantra with which Institute
                      of Management Technology (IMT) started. Nearly forty years
                      later, IMT continues to be at the forefront of management
                      education in India, grooming leaders and entrepreneurs.
                    </p>

                    <p>
                      Upholding the motto of the IMT group, Institute of
                      Management Technology Hyderabad (IMTH) has within a short
                      span of eight years carved a niche for itself as an
                      institution with global academic standards.
                    </p>

                    <p>
                      A competent and committed faculty body have worked to
                      create an excellent learning experience through practice
                      oriented pedagogy and industry relevant curriculum. The
                      associations with corporates, communities and global
                      academic partners ensure that the students are industry
                      ready, responsible citizens and prepared for global
                      leadership roles.
                    </p>

                    <p>
                      IMT Hyderabad offers something for all its stakeholders –
                      an enriching learning experience for the students, a
                      collegial environment for faculty and staff, ready talent
                      and knowledge pool for the industry.
                    </p>
                  </div>

                  <blockquote className="blockquote ps-4 border-start border-3 border-warning my-4">
                    <p className=" mb-2" style={{ fontSize: "17px" }}>
                      There is a sense of pride in seeing the institute do well
                      and belief that the institute and its graduates will be
                      able to scale the pinnacle of success and contribute to
                      the growth of the nation and its citizens.
                    </p>
                    <footer className="blockquote-footer mt-2">
                      Shri Bakul Nath
                    </footer>
                  </blockquote>
                </div>

                {/* Governing Council */}
                <div
                  className="tab-pane fade"
                  id="governing"
                  role="tabpanel"
                  aria-labelledby="governing-tab"
                >
                  <div className="text-center py-4 mb-4">
                    <h4 className="fw-bold" style={{ color: "#08317a" }}>
                      Governing Council
                    </h4>
                    <p
                      style={{
                        maxWidth: "800px",
                        margin: "auto",
                        lineHeight: 1.8,
                        color: "#333",
                      }}
                    >
                      The Governing Council of IMT Hyderabad consists of
                      renowned academicians, industry experts, and thought
                      leaders who guide the institution’s strategic vision and
                      uphold its academic excellence.
                    </p>
                  </div>
                  <div className="row g-4 justify-content-center">
                    {[
                      {
                        title: "President",
                        name: "Mr. Bakul Nath",
                        role: "Centre for Advanced Education",
                      },
                      {
                        title: "Vice-President",
                        name: "Mr. Dipankar Chatterji",
                        role: "Sr. Partner, M/s. L. B. Jha & Co",
                      },
                      {
                        title: "Vice-President",
                        name: "Mrs. Simran Nath",
                        role: "Centre for Advanced Education",
                      },
                      {
                        title: "Member",
                        name: "Mr. Ishaat Hussain",
                        role: "Former Director, Tata Sons Limited",
                      },
                      {
                        title: "Member",
                        name: "Mr. S.S. Mundra",
                        role: "Former Deputy Governor of Reserve Bank of India",
                      },
                      {
                        title: "Member",
                        name: "Prof. Subhash Bhatnagar",
                        role: "Former Professor IIM Ahmedabad",
                      },
                      {
                        title: "Member",
                        name: "Prof. Mithileshwar Jha",
                        role: "Former Professor IIM Bangalore",
                      },
                      {
                        title: "Member",
                        name: "Dr. Partha Ray",
                        role: "Director, National Institute of Bank Management, Pune",
                      },
                    ].map((member, index) => (
                      <div className="col-md-4" key={index}>
                        <div
                          className="card border-0 shadow-sm rounded-3 p-3 text-center h-100"
                          style={{
                            backgroundColor: "#5371a629",
                            border: "1px solid #ffc107 !important",
                          }}
                        >
                          <h6 className="text-warning fw-bold mb-2">
                            {member.title}
                          </h6>
                          <h5 className="fw-semibold mb-1">{member.name}</h5>
                          <p className="mb-0 text-muted">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Board of Governors */}
                <div
                  className="tab-pane fade"
                  id="board"
                  role="tabpanel"
                  aria-labelledby="board-tab"
                >
                  <div className="text-center py-4 mb-4">
                    <h4 className="fw-bold" style={{ color: "#08317a" }}>
                      Board of Governors
                    </h4>
                    <p
                      style={{
                        maxWidth: "800px",
                        margin: "auto",
                        lineHeight: 1.8,
                        color: "#333",
                      }}
                    >
                      The Board of Governors plays a pivotal role in ensuring
                      institutional growth, innovation, and alignment with
                      global education standards. They provide valuable insights
                      into governance, finance, and academic planning.
                    </p>
                  </div>
                  <div className="row g-4 justify-content-center">
                    {[
                      {
                        title: "Chairperson",
                        name: "Prof. Mithileshwar Jha",
                        role: "Former Professor, Indian Institute of Management Bangalore",
                      },
                      {
                        title: "Member Secretary",
                        name: "Prof. K M Baharul Islam",
                        role: "Director, IMT Hyderabad",
                      },
                      {
                        title: "Member",
                        name: "Prof. Amarlal H Kalro",
                        role: "Eminent Academician\nFormer Provost, Ahmedabad University\nFormer Director, Indian Institute of Management Kozhikode",
                      },
                      {
                        title: "Member",
                        name: "Prof. Atanu Ghosh",
                        role: "Former Dean, SME, IIT Jodhpur\nFormer Professor of SJMSOM, IIT Bombay\nFormer Visiting Professor and Dean (AER) IIM Ahmedabad",
                      },
                      {
                        title: "Member",
                        name: "Mr. P R Ramesh",
                        role: "Former Chairman, Deloitte India",
                      },
                      {
                        title: "Member",
                        name: "Mr. Santanu Mukherjee",
                        role: "Managing Director (Retd.), State Bank of Hyderabad",
                      },
                      {
                        title: "Member",
                        name: "Mr. Narendra Pal",
                        role: "Director-Finance, IMT Group",
                      },
                      {
                        title: "Member",
                        name: "Dr. Steven Raj Padakandla",
                        role: "Chairperson, PG Programmes, IMT Hyderabad",
                      },
                      {
                        title: "Member",
                        name: "Dr. Vinay Kumar Kalakbandi",
                        role: "Associate Dean (Accreditation & Ranking), IMT Hyderabad",
                      },
                    ].map((member, index) => (
                      <div className="col-md-4" key={index}>
                        <div
                          className="card border-0 shadow-sm rounded-3 p-3 text-center h-100"
                          style={{
                            backgroundColor: "#5371a629",
                            border: "1px solid #ffc107 !important",
                          }}
                        >
                          <h6 className="text-warning fw-bold mb-2">
                            {member.title}
                          </h6>
                          <h5 className="fw-semibold mb-1">{member.name}</h5>
                          <p
                            className="mb-0 text-muted"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Director’s Message */}
                <div
                  className="tab-pane fade show active"
                  id="director"
                  role="tabpanel"
                  aria-labelledby="director-tab"
                >
                  <h4 className="fw-bold mb-4" style={{ color: "#08317a" }}>
                    Director&apos;s Message
                  </h4>

                  <div className="director-message">
                    {/* FLOAT IMAGE */}
                    <div className="director-img">
                      <img src="/media/prof-Islam.webp" alt="Director" />
                      <div className="text-center mt-2">
                        <h4 className="mb-2" style={{ fontSize: "20px" }}>
                          Prof (Dr) K M Baharul Islam
                        </h4>
                        <h6 className="text-warning">Director</h6>
                      </div>
                    </div>

                    {/* TEXT – auto wraps + full width after image */}
                    <p>
                      The world around us is changing at an unprecedented pace.
                      Technology is reshaping industries, redefining our work,
                      and creating new possibilities. While technology may
                      disrupt traditional work methods, it also opens doors to
                      innovation, creativity, and growth.
                    </p>

                    <p>
                      At IMT Hyderabad, we are dedicated to preparing you for
                      this evolving landscape. Our programs are designed to help
                      you develop the skills that matter most—critical thinking,
                      adaptability, and the ability to collaborate effectively
                      in a digital-first world.
                    </p>

                    <p>
                      Here at IMT Hyderabad, you will find more than a
                      management institute. You will find a vibrant ecosystem
                      that encourages curiosity, innovation, and growth. Our
                      faculty, industry partners, and alums are here to support
                      you as you explore new ideas, take on challenges, and
                      discover your unique potential.
                    </p>

                    <p>
                      As you step into this new phase of your journey, I urge
                      you to make the most of every moment. Engage deeply with
                      your peers, embrace new perspectives, and push yourself to
                      grow as a professional and a person. Remember, the world
                      needs leaders who are not only skilled but also
                      compassionate and socially conscious.
                    </p>

                    <p>
                      With great excitement and pride, I welcome you to IMT
                      Hyderabad, a place where aspirations meet opportunities
                      and where the leaders of tomorrow are shaped today.With
                      great excitement and pride, I welcome you to IMT
                      Hyderabad, a place where aspirations meet opportunities
                      and where tomorrow's leaders are shaped today. Let us work
                      together to create a bold, inclusive, and transformative
                      future. Famous poet Robert Frost beautifully captured the
                      essence of embarking on this journey.
                    </p>
                  </div>

                  <blockquote className="blockquote ps-4 border-start border-3 border-warning my-4">
                    <p className="mb-0" style={{ fontSize: "17px" }}>
                      &quot;Two roads diverged in a wood, and I took the one
                      less travelled by, And that has made all the
                      difference.&quot;
                    </p>
                    {/* <footer className="blockquote-footer mt-2">
                      Robert Lee Frost
                    </footer> */}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
