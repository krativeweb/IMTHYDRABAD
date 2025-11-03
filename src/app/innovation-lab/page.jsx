"use client";

import Link from "next/link";

export default function InnovationLab() {
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
Our Innovation Lab empowers students to experiment, prototype, and bring transformative solutions to real-world challenges.
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
            className="section-title text-center text-center mb-3"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Innovation Lab
          </h2>

          {/* Innovation Tab */}
          <div
            className="tab-pane fade bg-white p-4 rounded-4 text-black show active"
            id="tab-lab"
            role="tabpanel"
          >
            {/* Sub-Tab Navigation */}
            <nav className="nav nav-pills flex-wrap gap-2 mb-3 justify-content-center">
              <Link
                className="nav-link bg-light text-dark rounded-pill active"
                data-bs-toggle="pill"
                href="#sub-res-lababt"
              >
                About
              </Link>
              <Link
                className="nav-link bg-light text-dark rounded-pill"
                data-bs-toggle="pill"
                href="#sub-res-labpep"
              >
                People
              </Link>
              <Link
                className="nav-link bg-light text-dark rounded-pill"
                data-bs-toggle="pill"
                href="#sub-res-labstart"
              >
                Start-up Accelerator Program
              </Link>
            </nav>

            {/* Sub-Tab Content */}
            <div className="tab-content container-sm text-black">
              {/* === About === */}
              <div
                className="tab-pane fade show active"
                id="sub-res-lababt"
                role="tabpanel"
              >
                <p>
                  IMT Hyderabad aims to develop socially responsible business
                  leaders and contribute to the growth of the economy. The major
                  drivers behind both the growth of the economy and individual
                  satisfaction involve innovative and entrepreneurial
                  activities. The institutional supports such as Start-up India
                  programme, and other incentives also encourage the
                  establishment of innovative entrepreneurial ventures in India.
                  Specially, in the context of economic recession, and external
                  uncertainty due to Covid-19, formation of a new company would
                  be the best approach to seize the new opportunities emerging
                  in the dynamic business environment. However, individuals
                  struggle in their entrepreneurial journey from ideation phase
                  to commercialization phase. Existence of a vibrant ecosystem
                  can provide the necessary supports, and help the individuals
                  to grow and contribute to the social welfare through
                  innovation and entrepreneurship.
                </p>
                <p>
                  To achieve the above goals, Innovation Lab facilitates various
                  activities at IMT Hyderabad. Innovation Lab provides an active
                  platform to stakeholders such as students, startups,
                  incubators, accelerators, mentors, angel investors, venture
                  capitalists, research institutions, etc., fostering a
                  collaborative environment to nurture innovation and
                  entrepreneurship.
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
                  With the help of student-driven entrepreneurship-cell
                  Prarambh, the activities of Innovation Lab include:
                </p>
                <div className="crs_list">
                  <ul>
                    <li>
                      Chamber of Ice Breakers – A platform for IMTH students to
                      showcase talent and collaborate on
                      innovation/entrepreneurship
                    </li>
                    <li>
                      MERAKI – Business plan competition to cultivate
                      entrepreneurial mindset among IMTians
                    </li>
                    <li>
                      Pitch-Up – National-level flagship event for business plan
                      competitions
                    </li>
                    <li>Walk the Talk – Speaker series</li>
                    <li>Food Fiesta – Student-led food festival</li>
                    <li>Smart India Hackathon</li>
                    <li>Hult Prize Competition</li>
                  </ul>
                </div>
              </div>

              {/* === People === */}
              <div
                className="tab-pane fade"
                id="sub-res-labpep"
                role="tabpanel"
              >
                <div className="row mb-4 mt-4">
                  <h5
                    className="text-center fw-bold fs-3 mb-3"
                    style={{ color: "#163977" }}
                  >
                    AFFILIATED FACULTY & PRACTITIONERS
                  </h5>

                  {/* Row 1 */}
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="/media/center-csr/il1.webp"
                            className="img-fluid rounded-start"
                            alt="Profile"
                            style={{ height: "14rem" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title fw-bold mb-2">
                              Shri Ashok K. Pavadia
                            </h5>
                            <p className="card-text">
                              Founder & Director, Council for Research on Policy
                              and Governance
                            </p>
                            <p className="card-text">Lead Expert and Mentor</p>
                            <button className="btn btn-warning rounded-4">
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="/media/center-csr/il1.webp"
                            className="img-fluid rounded-start"
                            alt="Profile"
                            style={{ height: "14rem" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title fw-bold mb-2">
                              Shri Ashok K. Pavadia
                            </h5>
                            <p className="card-text">
                              Founder & Director, Council for Research on Policy
                              and Governance
                            </p>
                            <p className="card-text">Lead Expert and Mentor</p>
                            <button className="btn btn-warning rounded-4">
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-4 mt-4">
                  {/* Row 2 */}
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="/media/center-csr/il1.webp"
                            className="img-fluid rounded-start"
                            alt="Profile"
                            style={{ height: "14rem" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title fw-bold mb-2">
                              Shri Ashok K. Pavadia
                            </h5>
                            <p className="card-text">
                              Founder & Director, Council for Research on Policy
                              and Governance
                            </p>
                            <p className="card-text">Lead Expert and Mentor</p>
                            <button className="btn btn-warning rounded-4">
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="/media/center-csr/il1.webp"
                            className="img-fluid rounded-start"
                            alt="Profile"
                            style={{ height: "14rem" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title fw-bold mb-2">
                              Shri Ashok K. Pavadia
                            </h5>
                            <p className="card-text">
                              Founder & Director, Council for Research on Policy
                              and Governance
                            </p>
                            <p className="card-text">Lead Expert and Mentor</p>
                            <button className="btn btn-warning rounded-4">
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* === Start-up Accelerator Program === */}
              <div
                className="tab-pane fade"
                id="sub-res-labstart"
                role="tabpanel"
              >
                <h3 className="fw-bold mb-3" style={{ color: "#08317a" }}>
                  Rolling Call for Application
                </h3>
                <p className="text-muted mb-4">
                  (Applications reviewed on a monthly basis)
                </p>

                <h5 className="fw-bold mb-3" style={{ color: "#08317a" }}>
                  Supports Provided (Free for One Year)
                </h5>
                <div className="crs_list">
                  <ul>
                    <li>State-of-the-art office space</li>
                    <li>Research and industry mentorship</li>
                    <li>Networking with industry leaders</li>
                    <li>Talented students as interns</li>
                    <li>Accommodation on campus</li>
                    <li>
                      Campus facilities (sports, gym, medical center, ATM,
                      cafeteria, greenery)
                    </li>
                  </ul>
                </div>

                <h5 className="fw-bold mb-3 mt-4" style={{ color: "#08317a" }}>
                  Eligibility
                </h5>
                <ul className="mb-4">
                  <li>Current students/Alumni of IMT Hyderabad</li>
                  <li>
                    Already established a startup or planning to establish one
                    within 6 months
                  </li>
                </ul>

                <h5 className="fw-bold mb-3" style={{ color: "#08317a" }}>
                  Selection Process
                </h5>
                <ol className="mb-4">
                  <li>
                    Fill the application form and send to{" "}
                    <Link href="mailto:saikatb@imthyderabad.edu.in">
                      saikatb@imthyderabad.edu.in
                    </Link>
                  </li>
                  <li>
                    Shortlisted applicants present to Innovation Lab members
                    (15-minute pitch covering:)
                  </li>
                  <ul className="ps-4 mb-3">
                    <li>Founder profiles</li>
                    <li>Vision/goals</li>
                    <li>Business idea</li>
                    <li>Growth plan</li>
                    <li>Evidence of strengths</li>
                    <li>Support needed from IMT Hyderabad</li>
                  </ul>
                  <li>
                    Selected startups notified to begin operations on campus
                  </li>
                  <li>
                    Applications reviewed monthly; presentations scheduled first
                    week of next month
                  </li>
                </ol>

                {/* Buttons */}
                <div className="d-grid gap-2 mb-4">
                  <Link
                    href="https://imtindia-my.sharepoint.com/..."
                    target="_blank"
                    className="btn btn-warning"
                    style={{ width: "fit-content" }}
                  >
                    Download Application Form
                  </Link>
                  <Link
                    href="https://imtindia-my.sharepoint.com/..."
                    target="_blank"
                    className="btn btn-warning"
                    style={{ width: "fit-content" }}
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === PRESERVE ALL ORIGINAL CSS === */}
      <style jsx global>{`
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
      `}</style>
    </>
  );
}
