"use client";

import Link from "next/link";
import { useState } from "react";
export default function InnovationLab() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <>
      {/* ===== Banner Section ===== */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url(./media/banners/lab.webp)",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Innovation Lab</h2>
          <p className="text-white">
            A space where ideas evolve into impact. <br />
            Our Innovation Lab empowers students to experiment, prototype, and
            bring transformative solutions to real-world challenges.
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
                    style={{ textDecoration: "none" }}
                    className="text-white fw-bold"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Innovation Lab
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container mt-5 mb-4">
          <h2
            className="section-title text-center mb-3"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Innovation Lab
          </h2>

          {/* Navigation Tabs */}
          <nav className="nav nav-pills flex-wrap gap-2 mb-3 justify-content-center">
            <button
              className={`nav-link bg-light text-dark rounded-pill ${
                activeTab === "about" ? "active" : ""
              }`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <button
              className={`nav-link bg-light text-dark rounded-pill ${
                activeTab === "people" ? "active" : ""
              }`}
              onClick={() => setActiveTab("people")}
            >
              People
            </button>
            <button
              className={`nav-link bg-light text-dark rounded-pill ${
                activeTab === "startup" ? "active" : ""
              }`}
              onClick={() => setActiveTab("startup")}
            >
              Start-up Accelerator Program
            </button>
          </nav>

          {/* Tabs Content */}
          <div className="tab-content container-sm text-black">
            {/* === ABOUT TAB === */}
            {activeTab === "about" && (
              <div className="bg-white p-4 rounded-4">
                <p>
                  IMT Hyderabad aims to develop socially responsible business
                  leaders and contribute to the growth of the economy. The major
                  drivers behind both the growth of the economy and individual
                  satisfaction involve innovative and entrepreneurial
                  activities...
                </p>
                <p>
                  To achieve the above goals, Innovation Lab facilitates various
                  activities at IMT Hyderabad. It provides a platform for
                  students, startups, incubators, investors, and research
                  institutions to nurture innovation and entrepreneurship.
                </p>

                <h4 className="fw-bold" style={{ color: "#08317a" }}>
                  Objective
                </h4>
                <p>
                  To develop an ecosystem encouraging and supporting research
                  and practice of innovation and entrepreneurship among students
                  and stakeholders.
                </p>

                <h4 className="fw-bold" style={{ color: "#08317a" }}>
                  Activities
                </h4>
                <p>
                  With the help of the student-driven entrepreneurship cell
                  <b> Prarambh</b>, the Innovation Lab conducts:
                </p>
                <ul className="crs_list">
                  <li>
                    Chamber of Ice Breakers – Platform for students to showcase
                    talent and collaborate
                  </li>
                  <li>MERAKI – Business plan competition</li>
                  <li>Pitch-Up – National-level flagship event</li>
                  <li>Walk the Talk – Speaker series</li>
                  <li>Food Fiesta – Student-led food festival</li>
                  <li>Smart India Hackathon</li>
                  <li>Hult Prize Competition</li>
                </ul>
              </div>
            )}

            {/* === PEOPLE TAB === */}
            {activeTab === "people" && (
              <div className="bg-white p-4 rounded-4">
                <div className="row mb-4 mt-4">
                  <h5
                    className="text-center fw-bold fs-3 mb-3"
                    style={{ color: "#163977" }}
                  >
                    AFFILIATED FACULTY & PRACTITIONERS
                  </h5>

                  {[
                    {
                      name: "Prof. (Dr.) Aindrila Chatterjee",
                      img: "./media/center-csr/il1.webp",
                      role: "Chairperson – Innovation Lab",
                      details:
                        "Assistant Professor & Area Chairperson, General Management",
                    },
                    {
                      name: "Prof Ahmad Faraz Khan",
                      img: "./media/faculties/1.webp",
                      role: "Co-Chairperson – Innovation Lab",
                      details:
                        "Associate Professor,Strategy & General Management",
                    },
                    {
                      name: "Prof Sathish Kannan",
                      img: "./media/faculties/25.webp",
                      role: "Adjunct Faculty – Innovation Lab",
                      details: "Marketing",
                    },
                    // {
                    //   name: "Prof. (Dr.) Arun Kumar Biswal",
                    //   img: "./media/center-csr/il2.webp",
                    //   role: "Assistant Professor & Area Chairperson",
                    //   details: "Operations Management",
                    // },
                    // {
                    //   name: "Prof. (Dr.) B Pavan Kumar",
                    //   img: "./media/center-csr/il3.webp",
                    //   role: "Assistant Professor & Area Chairperson",
                    //   details: "Human Resource",
                    // },
                    // {
                    //   name: "Prof. (Dr.) Krishna Dixit",
                    //   img: "./images/csr1.webp",
                    //   role: "Assistant Professor",
                    //   details: "General Management",
                    // },
                  ].map((person, index) => (
                    <div key={index} className="col-12 col-md-6 mb-3">
                      <div className="card h-100 p-4">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={person.img}
                              alt={person.name}
                              className="img-fluid rounded-start"
                              style={{ height: "14rem" }}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title fw-bold mb-2">
                                {person.name}
                              </h5>
                              <p className="card-text">{person.role}</p>
                              <p className="card-text">{person.details}</p>
                              <a
                                href="/faculties"
                                className="btn btn-warning rounded-4 text-white"
                              >
                                View Profile
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* === STARTUP TAB === */}
            {activeTab === "startup" && (
              <div className="bg-white p-4 rounded-4">
                <h3 className="fw-bold mb-3" style={{ color: "#08317a" }}>
                  Rolling Call for Application
                </h3>
                <p className="text-muted mb-4">
                  (Applications reviewed on a monthly basis)
                </p>

                <h5 className="fw-bold mb-3" style={{ color: "#08317a" }}>
                  Supports Provided (Free for One Year)
                </h5>
                <ul>
                  <li>State-of-the-art office space</li>
                  <li>Research and industry mentorship</li>
                  <li>Networking with industry leaders</li>
                  <li>Talented students as interns</li>
                  <li>Accommodation on campus</li>
                  <li>Campus facilities (sports, gym, cafeteria, etc.)</li>
                </ul>

                <h5 className="fw-bold mt-4" style={{ color: "#08317a" }}>
                  Eligibility
                </h5>
                <ul>
                  <li>Current students/Alumni of IMT Hyderabad</li>
                  <li>
                    Already established a startup or planning to establish one
                    within 6 months
                  </li>
                </ul>

                <h5 className="fw-bold" style={{ color: "#08317a" }}>
                  Selection Process
                </h5>
                <ol>
                  <li>
                    Fill the application form and send to{" "}
                    <a href="mailto:aindrila.chatterjee@imthyderabad.edu.in">
                      aindrila.chatterjee@imthyderabad.edu.in
                    </a>
                  </li>
                  <li>
                    Shortlisted applicants present a 15-minute pitch covering
                    founder profiles, goals, business idea, and growth plan.
                  </li>
                  <li>Selected startups begin operations on campus.</li>
                  <li>
                    Applications reviewed monthly; presentations held first week
                    of the next month.
                  </li>
                </ol>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a
                    href="https://imtindia-my.sharepoint.com/..."
                    target="_blank"
                    className="btn btn-warning text-white"
                  >
                    Download Application Form
                  </a>
                  <a
                    href="https://imtindia-my.sharepoint.com/..."
                    target="_blank"
                    className="btn btn-warning text-white"
                  >
                    Know More
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* === PRESERVE ALL ORIGINAL CSS === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Active tab yellow */
      .nav-pills .nav-link.active {
        background-color: var(--bs-warning) !important;
        color: var(--bs-dark) !important;
      }

      /* Gradient banner with subtle overlay */
      .faculty-hero {
        background: url("./media/hero.jpg");
        position: relative;
        background-size: cover;
        height: 50vh;
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
        background: #ffc107;
        color: #000000ff;
      }
    `,
        }}
      />
    </>
  );
}

