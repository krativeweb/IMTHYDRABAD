"use client";

import Link from "next/link";
import { useState } from "react";

export default function CampusPlacements() {
  const [activeTab, setActiveTab] = useState("final");

  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('./media/banners/admission.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
            backgroundPosition: "center !important",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Campus Placements</h2>
          <p className="text-white">
            An institution where preparation meets performance. <br />
            Our campus placements reflect rigorous training, industry relevance,
            and a track record of successful career launches.
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
                  Campus Placements
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Campus Placements Section */}
      <section id="Campus-Placements" className="py-5">
        <div className="container">
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Campus Placements
          </h2>

          {/* Tabs Navigation */}
          <ul
            className="nav nav-pills justify-content-center mb-4"
            id="Campus-PlacementsTabs"
            role="tablist"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {[
              { id: "head", label: "Head CRO Message" },
              { id: "final", label: "Final Placements" },
              { id: "Procedure", label: "Placements Procedure" },
              { id: "placement", label: "Placements Brochure" },
              { id: "student", label: "Students Committees for Placements" },
              { id: "Contact", label: "Contact Us" },
            ].map((tab) => (
              <li
                key={tab.id}
                className="nav-item mx-1 mb-2"
                role="presentation"
              >
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  role="tab"
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <hr className="my-4" />

          {/* Tab Content */}
          <div
            className="tab-content card bg-light p-4"
            id="Campus-PlacementsTabsContent"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Final Placements */}
            {activeTab === "final" && (
              <div className="tab-pane fade show active">
                <h4
                  className="fw-semibold mb-3 text-center"
                  style={{ color: "#08317a" }}
                >
                  Placement Policy
                </h4>
                <p>
                  Final Placements at IMT Hyderabad are conducted for
                  second-year students starting in the month of October. At
                  IMTH, a <strong>“one student, one offer”</strong> policy is
                  followed. A student, after being placed, is signed out of the
                  placement process.
                </p>
                <p>
                  A student who receives a{" "}
                  <strong>Pre-Placement Offer (PPO)</strong> during internship
                  or before the placement process, and the offer salary is{" "}
                  <strong>
                    greater than the institute’s last year’s average CTC
                  </strong>
                  , is <strong>bound to accept</strong> the offer and will be
                  considered out of the placement process.
                </p>
                <p>
                  However, if the PPO offered is{" "}
                  <strong>
                    less than the institute’s last year’s average CTC
                  </strong>
                  , the student has the right to either{" "}
                  <strong>accept or decline</strong> the offer.
                </p>

                <h3 className="fw-bold mb-4 mt-5" style={{ color: "#08317a" }}>
                  Placement Reports
                </h3>
                <p className="text-muted mb-4">
                  Download official placement reports for past batches
                </p>

                <div className="row justify-content-center g-3">
                  {[
                    {
                      year: "2022–24",
                      link: "https://drive.google.com/file/d/1enL8H4RLdKhTCY5-9jsjsrldLB_z0eE5/view?usp=sharing",
                    },
                    {
                      year: "2021–23",
                      link: "https://drive.google.com/file/d/1xmr80PZutr6dTw4dHjnYjMm1-y5dMYLi/view?usp=share_link",
                    },
                    {
                      year: "2020–22",
                      link: "https://drive.google.com/file/d/1oYExgoV2vPMp054XGdt2GcHdsjnmsLUh/view?usp=sharing",
                    },
                    {
                      year: "2019–21",
                      link: "https://drive.google.com/file/d/1mopf1f5hUlgUqTWtNZJ7gksHH7RIcrNM/view?usp=share_link",
                    },
                    {
                      year: "2018–20",
                      link: "assets/images/recruiters/pdf/Placements Report-2020-latest.pdf",
                    },
                    {
                      year: "2017–19",
                      link: "assets/images/recruiters/pdf/Placement Report-2019.pdf",
                    },
                    {
                      year: "2016–18",
                      link: "assets/images/recruiters/pdf/Placement Report-2018.pdf",
                    },
                    {
                      year: "2015–17",
                      link: "assets/images/recruiters/pdf/Placement Report-2017.pdf",
                    },
                    {
                      year: "2014–16",
                      link: "assets/images/recruiters/pdf/Placement Report-2016.pdf",
                    },
                    {
                      year: "2013–15",
                      link: "assets/images/recruiters/pdf/Placement Report-2015.pdf",
                    },
                    {
                      year: "2012–14",
                      link: "assets/images/recruiters/pdf/Placement Report-2014.pdf",
                    },
                    {
                      year: "2011–13",
                      link: "assets/images/recruiters/pdf/Placement Report-2013.pdf",
                    },
                  ].map((report) => (
                    <div key={report.year} className="col-12 col-md-6 col-lg-4">
                      <Link
                        href={report.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-block text-decoration-none text-dark"
                      >
                        <div
                          className="card border-0 shadow-sm rounded-3 text-center p-3 h-100 placement-card"
                          style={{
                            backgroundColor: "#fff",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                          }}
                        >
                          <i className="bi bi-file-earmark-pdf text-warning fs-4 mb-2"></i>
                          <small className="fw-bold">{report.year}</small>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Head CRO Message */}
            {activeTab === "head" && (
              <div className="tab-pane fade show active">
                <img
                  src="/media/imt-prasanth.webp"
                  className="profile-img img-fluid"
                  alt="Prakash Pathak"
                  style={{
                    float: "left",
                    margin: "0 1.5rem 0.5rem 0",
                    width: "150px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "0.75rem",
                    border: "2px solid #0d0d0d",
                    boxShadow: "0 5px 15px rgba(56, 54, 51, 0.3)",
                  }}
                />

                <h4
                  className="fw-semibold mb-3 text-center"
                  style={{ color: "#08317a" }}
                >
                  Head – Corporate Relations Message
                </h4>

                <p className="mb-3">Dear Recruiters,</p>

                <p className="mb-3">
                  I am pleased to invite you for campus placements of our PGDM
                  Class of 2026 students. IMT Hyderabad is a part of the IMT
                  Group and the institute is well known for its quality
                  education and is a preferred destination for students who are
                  seeking management education. With our management education
                  experience of more than four decades, we have been able to
                  provide an edge over our contemporaries, which goes a long way
                  in grooming our students to not only be industry-ready, but
                  also future-ready.
                </p>

                <p className="mb-3">
                  The last year witnessed several global and domestic
                  developments that impacted campus placements across institutes
                  and universities. However, IMT Hyderabad responded proactively
                  by implementing additional measures to strengthen our
                  placement processes. Recruiters such as Arcesium, BNY, Micron,
                  HCL, Berkedia, Oracle, PepsiCo, Volvo, Zeta Global, Sony
                  India, Wipro, Infosys, Cognizant, Advance Auto Parts, Voltas,
                  Nerolac, CRISIL, Netelixir, and many others participated in
                  our placement process and selected our students. The highest
                  CTC offered stood at 31 LPA, with an average CTC of 12.2 LPA.
                </p>

                <p className="mb-3">
                  The PGDM batch of 2024–26 represents a diverse academic mix
                  comprising students from Engineering (18%), Arts &amp;
                  Commerce (47%), Management (18%), and Science (16%). The
                  cohort includes students with work experience greater than two
                  years (5%), less than two years (14%), and freshers (81%). The
                  batch also reflects healthy gender diversity, with 34% female
                  students.
                </p>

                <p className="mb-3">
                  Students specialize across key functional areas including
                  Marketing, Finance, Human Resources, Operations, Information
                  Technology, Analytics, and General Management.
                </p>

                <p className="mb-3">
                  All students have successfully completed a mandatory 12-week
                  summer internship, enabling them to gain strong exposure to
                  market trends and real-world business challenges. During their
                  internships, students contribute meaningfully to organizations
                  while acquiring valuable hands-on learning.
                </p>

                <p className="mb-3">
                  I extend a warm invitation to you to participate in the final
                  placement process for the PGDM Class of 2026 and look forward
                  to building a strong and mutually beneficial relationship.
                </p>

                <div className="clearfix"></div>

                <div className="signature mt-4">
                  Warm Regards
                  <br />
                  <strong>Prakash Pathak</strong>
                  <br />
                  Head – Corporate Relations
                </div>
              </div>
            )}

            {/* {activeTab === "head" && (
              <div className="tab-pane fade show active">
                <img
                  src="/media/imt-prasanth.webp"
                  className="profile-img img-fluid"
                  alt="Prakash Pathak"
                  style={{
                    float: "left",
                    margin: "0 1.5rem 0.5rem 0",
                    width: "150px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "0.75rem",
                    border: "2px solid #0d0d0d",
                    boxShadow: "0 5px 15px rgba(56, 54, 51, 0.3)",
                  }}
                />
                <h4
                  className="fw-semibold mb-3 text-center"
                  style={{ color: "#08317a" }}
                >
                  Head CRO Message
                </h4>
                <p className="mb-3">
                  IMT Hyderabad is a part of the IMT Group, which has a legacy
                  of over 40 years in management education. IMT Hyderabad offers
                  2-year full time residential Post Graduate Diploma in
                  Management (PGDM) Programs and the institute is well known for
                  its quality education and is a preferred destination for
                  students who are seeking management education. With our
                  management education experience of more than four decades, we
                  have been able to provide an edge over our contemporaries,
                  that goes a long way in grooming our students to not only be
                  industry-ready, but also future-ready.
                </p>
                <p className="mb-3">
                  Widely experienced faculty, state of the art infrastructure
                  combined with innovative pedagogy and rigorous learning
                  processes render IMT Hyderabad as the most apt platform for
                  grooming and moulding the business leaders of tomorrow.
                </p>
                <p className="mb-3">
                  The global market conditions have presented challenges across
                  various industries in recent years. However, IMT Hyderabad has
                  been proactive in addressing these dynamics, ensuring our
                  students are well-prepared to excel as industry-ready
                  professionals. This year, esteemed recruiters like DE Shaw,
                  BNY, Micron, Oxane Partners, HDFC Ltd, Arcesium, HCL, Oracle,
                  Advance Auto Parts, Infosys, Cognizant, Tata Advanced Systems,
                  Invesco, and so on conducted campus placement process and
                  selected our students. We achieved an excellent placement
                  record for the class of 2024 with an average CTC of INR 12.3
                  LPA and highest CTC of INR 25.5 LPA.
                </p>
                <p className="mb-3">
                  The batch of 2023-25 is a good mix of students from all
                  backgrounds, and has students from engineering background
                  (24%), Arts & Commerce (48%), Management (15%) and science
                  (13%). There are students with work experience greater than 2
                  years (7%), work experience less than 2 years (10%) and
                  freshers (83%). Besides diverse backgrounds, the batch is a
                  good mix of gender diversity with (32%) female students.
                </p>
                <p className="mb-3">
                  The students specialize in the areas of Marketing, Finance,
                  HR, Operations, Analytics and General Management.
                </p>
                <p className="mb-3">
                  All the students have undergone a 12-week summer internship
                  which gives them a good notion of the market trends. The
                  students contribute substantially and at the same time get a
                  good amount of learning during their summer internships.
                </p>
                <p className="mb-3">
                  I extend a warm invite to you to attend our final placement
                  process for the class of 2025 and look forward for a symbiotic
                  relationship.
                </p>
                <div className="clearfix"></div>
                <div className="signature mt-4">
                  Warm Regards
                  <br />
                  <strong>Prakash Pathak</strong>
                  <br />
                  Head – Corporate Relations
                </div>
              </div>
            )} */}

            {/* Placements Procedure */}
            {activeTab === "Procedure" && (
              <div className="tab-pane fade show active">
                <h4
                  className="fw-semibold mb-3 text-center"
                  style={{ color: "#08317a" }}
                >
                  Pre-Placement Talk (PPT)
                </h4>
                <p>
                  PPT is an ideal platform for interaction between corporate
                  fraternity and students. The recruiters share their company’s
                  vision, work culture and opportunities available at Management
                  Trainee and middle management levels. This is then followed by
                  a detailed Q&A session to help the students gain deeper
                  understanding about the organization and role offered.
                </p>

                <h4
                  className="fw-semibold mb-3 mt-4 text-center"
                  style={{ color: "#08317a" }}
                >
                  Application
                </h4>
                <p>
                  The interested students apply to the organization through the
                  placement office. As part of application, they submit their
                  detailed resume which is then shared with the organization by
                  the placement office.
                </p>

                <h4
                  className="fw-semibold mb-3 mt-4 text-center"
                  style={{ color: "#08317a" }}
                >
                  Placement Interviews
                </h4>
                <p>
                  The recruiters shortlist candidates for either GD rounds or
                  Personal Interview rounds depending on the organization’s
                  recruitment policy. This gives organizations and students an
                  excellent opportunity to interact with each other and
                  understand the role and profile in detail.
                </p>

                <h4
                  className="fw-semibold mb-3 mt-4 text-center"
                  style={{ color: "#08317a" }}
                >
                  Offer and Acceptance
                </h4>
                <p>
                  Once the final interview round is conducted, the company makes
                  a firm offer to the candidate. The offer should include
                  regular details such as job role, compensation package,
                  location and other terms and conditions required by the
                  candidate to make a further decision.
                </p>

                <h4
                  className="fw-semibold mb-3 mt-4 text-center"
                  style={{ color: "#08317a" }}
                >
                  Pre-Placement Offer
                </h4>
                <p>
                  Students receiving Pre-Placement Offers with a salary greater
                  than the previous year’s average campus placement salary will
                  not be considered in the placement process. Students with PPOs
                  less than this salary, if they wish to, will be allowed to sit
                  in the campus placement process, provided they have formally
                  rejected the PPO and marked a copy to the Head of Placements.
                  Once a PPO has been accepted by the student, they will be
                  automatically removed from the placement process.
                </p>
              </div>
            )}

            {/* Placements Brochure */}
            {activeTab === "placement" && (
              <div className="tab-pane fade show active">
                <h4
                  className="fw-semibold mb-3 text-center"
                  style={{ color: "#08317a" }}
                >
                  Placement Brochure
                </h4>
                <p>
                  <Link
                    href="https://drive.google.com/file/d/1jkjfW8OBofArrSCjurKNVK5Vr2YS_KvB/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark fw-semibold"
                  >
                    Download Placement Brochure
                  </Link>
                </p>
              </div>
            )}

            {/* Student Committees */}
            {activeTab === "student" && (
              <div className="tab-pane fade show active">
                <h4
                  className="fw-semibold mb-4 text-center"
                  style={{ color: "#08317a" }}
                >
                  Student Committee of Placements (SCOP)
                </h4>
                <p>
                  SCOP at IMT Hyderabad abbreviates as “Student Committee of
                  Placements” and is an integral part of the Placements Team.
                  The committee acts as a bridge between the students and the
                  Corporate Relations Group, and between the Institute and
                  corporates through campus engagement activities like
                  leadership series, practitioner sessions, and pre-placement
                  talks. The committee is responsible for the smooth conduction
                  of summer and final placement processes across both batches.
                  In addition, SCOP is entrusted with framing placement
                  guidelines and ensuring the best possible fit between students
                  and job opportunities. The Student Committee of Placements
                  works under the motto:{" "}
                  <strong>“One for all and All for one.”</strong>
                </p>

                <div className="table-responsive rounded-4 shadow-sm overflow-hidden">
                  <table className="table table-bordered text-center mb-0">
                    <thead className="bg-warning">
                      <tr>
                        <th
                          className="fw-bold text-dark border-0"
                          style={{ width: "10%" }}
                        >
                          S. No
                        </th>
                        <th
                          className="fw-bold text-dark border-0"
                          style={{ width: "90%" }}
                        >
                          SCOP Committee Members
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white">
                      {[
                        "Ankur Srivastava",
                        "Akhil Thulasi Das",
                        "Akshay Pathania",
                        "Aditya Shankar",
                        "Bipasha Guha",
                        "Dharmesh Babu",
                        "Garima Sharma",
                        "Kanak Sharma",
                        "Ketaki Bedekar",
                        "Madhura Kulkarni",
                        "Rohit Gupta",
                        "R. Vignesh",
                        "Shashank Jha",
                        "Shivani Sathaye",
                        "Tanmay Dey",
                      ].map((name, i) => (
                        <tr key={i}>
                          <td className="fw-medium">{i + 1}</td>
                          <td className="text-dark">{name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Contact Us */}
            {activeTab === "Contact" && (
              <div className="tab-pane fade show active">
                <h4
                  className="fw-semibold mb-4 text-center"
                  style={{ color: "#08317a" }}
                >
                  Contact Details
                </h4>

                <div className="table-responsive rounded-4 shadow-sm overflow-hidden mb-4">
                  <table className="table table-bordered text-center mb-0">
                    <thead className="bg-warning">
                      <tr>
                        <th className="fw-bold text-dark border-0">Name</th>
                        <th className="fw-bold text-dark border-0">
                          Designation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="fw-medium text-dark">
                          Mr. Prakash Pathak
                        </td>
                        <td className="text-dark">
                          Head - Corporate Relations
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-medium text-dark">
                          Mr. Murali Prasad T
                        </td>
                        <td className="text-dark">
                          Manager - Corporate Relations & Placements
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-center fs-6 text-dark mb-4">
                  <p className="mb-2">
                    <strong>Email ID:</strong>{" "}
                    <Link
                      href="mailto:cro@imthyderabad.edu.in"
                      className="text-decoration-none text-dark"
                    >
                      cro@imthyderabad.edu.in
                    </Link>
                  </p>
                  <p className="mb-0">
                    <strong>Mobile No:</strong>{" "}
                    <Link
                      href="tel:+919391424224"
                      className="text-decoration-none text-dark"
                    >
                      +91 93914 24224
                    </Link>
                  </p>
                </div>

                <div className="text-center">
                  <Link
                    href="mailto:cro@imthyderabad.edu.in"
                    className="btn btn-warning btn-lg rounded-pill fw-semibold"
                  >
                    Send Email to Corporate Relations
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* === ORIGINAL CSS (Tabs, Hover, Profile Image, Tables) === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Gradient banner with subtle overlay */
      .faculty-hero {
        background: url("./media/hero.webp");
        position: relative;
        background-size: cover;
        height: 50vh;
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

      /* UPDATED: Enhanced Wide Card Styles */
      .placement-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        margin: 0 !important;
      }
      .placement-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
      }
      .placement-card img {
        transition: transform 0.3s ease;
      }
      .placement-card:hover img {
        transform: scale(1.02);
      }

      @media (min-width: 1200px) {
        .container-fluid {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
      }
      @media (max-width: 768px) {
        .placement-card {
          max-height: 60vh;
          border-radius: 1rem !important;
        }
        .container-fluid {
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
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
        color: #ffffffff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390d9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

      /* Tabs */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #333;
        transition: all 0.3s;
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000000ff !important;
      }
      .small-placeholder::placeholder {
        font-size: 0.85rem;
      }
      .nav-pills .nav-link.active,
      .nav-pills .show > .nav-link {
        border-radius: 50rem !important;
        background: #ffc107 !important;
        color: #333 !important;
        transition: all 0.3s !important;
      }
      .nav-pills .nav-link {
        border-radius: var(--bs-nav-pills-border-radius);
        background-color: #e9ecef;
        border-radius: 30px;
        color: #333;
      }

      /* Adjusted Image Margin */
      .profile-img {
        float: left;
        margin: 0 1.5rem 0.5rem 0;
        width: 150px;
        height: 200px;
        object-fit: cover;
        border-radius: 0.75rem;
        border: 2px solid #0d0d0dff;
        box-shadow: 0 5px 15px rgba(56, 54, 51, 0.3);
      }

      /* Removed Top Margin from First Paragraph */
      .inv-txt:first-of-type {
        margin-top: 0;
      }
    `,
        }}
      />
    </>
  );
}
