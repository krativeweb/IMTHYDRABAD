"use client";

import Image from "next/image";
import Link from "next/link";

export default function CentreDigitalTransformation() {
  return (
    <>
      {/* Top Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: "url(./media/banners/cdt.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            height: "60vh",
          }}
        >
          <div
            style={{
              content: '""',
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.3)",
            }}
          />
          <h2
            className="display-5 fw-bold mb-2"
            style={{ position: "relative", zIndex: 1, marginTop: "150px" }}
          >
            Centre For Digital Transformation
          </h2>
          <p className="text-white" style={{ position: "relative", zIndex: 1 }}>
            Driving innovation in the digital era. <br />
            Our Center for Digital Transformation explores emerging
            technologies, data-driven strategy, and digital leadership
            excellence.
          </p>
        </div>

        {/* Breadcrumb */}
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
                  Centre For Digital Transformation
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container mt-5 mb-3">
          <h2
            className="section-title text-center mb-3"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Centre For Digital Transformation
          </h2>

          {/* Tab Section */}
          <div
            className="tab-pane fade show bg-white p-4 rounded-4 text-black"
            id="tab-digi"
            role="tabpanel"
          >
            {/* Sub Tabs */}
            <nav className="nav nav-pills flex-wrap gap-2 mb-4 justify-content-center mt-4">
              <a
                className="nav-link bg-light text-dark rounded-pill tab active"
                data-bs-toggle="pill"
                href="#sub-res-digiabt"
                role="tab"
              >
                About
              </a>
              <a
                className="nav-link bg-light text-dark rounded-pill tab"
                data-bs-toggle="pill"
                href="#sub-res-digipep"
                role="tab"
              >
                People
              </a>
            </nav>

            <div className="tab-content container-sm text-black">
              {/* === About Tab === */}
              <div
                className="tab-pane fade show active"
                id="sub-res-digiabt"
                role="tabpanel"
              >
                <p>
                  “Digital transformation as more than just technology, it’s
                  about rethinking business models, operations, and
                  relationships with customers and ecosystems.” The
                  transformational world of business environment in the digital
                  space has redefined parameters of success and competitiveness.
                  In this context, IMT Hyderabad proposes to set up a Centre for
                  Digital Transformation to provide research and other
                  collaborative insights for Digital Transformation initiatives
                  and provide significant value to a range of stakeholders
                  including corporates, government organisations, non-government
                  organisations, advisory & think tank organisations and
                  students. Using various conceptual frameworks that integrate
                  theories and developments in information systems, economics
                  and other business disciplines, the centre examines digital
                  transformation, emphasizing on the following topics but not
                  limited to:
                </p>

                <br />
                <ul>
                  <li>
                    Role of Artificially intelligent (AI) technologies in
                    organizational and societal transformation
                  </li>
                  <li>Digital processes, products, platforms, and services</li>
                  <li>Digital customer experience</li>
                  <li>Building online marketplaces</li>
                  <li>
                    Digitally enabled customer participation for co-creation and
                    co-innovation
                  </li>
                  <li>Digital business strategy</li>
                  <li>Digital value chain innovations</li>
                  <li>Digital architectures and governance models</li>
                  <li>Business analytics</li>
                  <li>Human emotions and sentiments in the digitized world</li>
                  <li>Digitization and transformation of work</li>
                  <li>Effects of digitization on jobs, incomes, and wages</li>
                </ul>

                <br />
                <h4 style={{ color: "#08317a" }}>
                  <b>Objective of the Centre for Digital Transformation</b>
                </h4>
                <p>
                  The Centre for Digital Transformation aims to provide thought
                  leadership through action research projects and round table
                  discussions in order to promote Digital Transformation of the
                  collaborating partners and community as a whole.
                </p>

                <br />
                <h4 style={{ color: "#08317a" }}>
                  <b>Activities of the Centre for Digital Transformation</b>
                </h4>
                <ul>
                  <li>
                    Entering into MoUs with organisations engaged in Digital
                    Transformation
                  </li>
                  <li>
                    Engaging in practitioner and scholarly research for mutual
                    benefit of industry and academics
                  </li>
                  <li>
                    Conducting training programs on Digital Transformation
                  </li>
                  <li>Conducting seminars on Digital Transformation</li>
                  <li>
                    Funding long-term research studies undertaken by IMT Hyderabad
                    faculty.
                  </li>
                </ul>
              </div>

              {/* === People Tab === */}
              <div
                className="tab-pane fade"
                id="sub-res-digipep"
                role="tabpanel"
              >
                {/* === Advisory Council === */}
                <div className="row mb-4">
                  <h5
                    className="text-center fw-bold fs-3 mb-4"
                    style={{ color: "#163977" }}
                  >
                    ADVISORY COUNCIL
                  </h5>

                  {/* Member 1 */}
                  <div className="col-12 col-md-6 mb-4">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-5">
                          <Image
                            src="/media/csr-dt/1.webp"
                            alt="Jayesh Ranjan"
                            className="img-fluid rounded-start"
                            width={300}
                            height={224}
                            style={{ height: "14rem", objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <p className="fw-bold fs-4">Mr. Jayesh Ranjan</p>
                            <p>
                              Principal Secretary of the Industries & Commerce
                              (I&C) and Information Technology (IT) Departments
                              of the Telangana government
                            </p>
                            <Link
                              href="https://it.telangana.gov.in/about/secretary/"
                              className="btn bg-warning text-white px-3 py-2 rounded-4"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Member 2 */}
                  <div className="col-12 col-md-6 mb-4">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-5">
                          <Image
                            src="/media/csr-dt/2.webp"
                            alt="Sreedhara Srinivasulu Narayanaswamy"
                            className="img-fluid rounded-start"
                            width={300}
                            height={224}
                            style={{ height: "14rem", objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <p className="fw-bold fs-4">
                              Mr. Sreedhara Srinivasulu Narayanaswamy
                            </p>
                            <p>
                              Head, Innovation Centers, Center of Excellence,
                              Cloud Engineering, Japan & Asia Pacific, Oracle
                            </p>
                            <Link
                              href="https://www.imthyderabad.edu.in/assets/images/faculty/pdf/Sreedhara-Narayanaswamy-Brief-Profile.pdf"
                              className="btn bg-warning text-white px-3 py-2 rounded-4"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Member 3 */}
                  <div className="col-12 col-md-6 mb-4">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-5">
                          <Image
                            src="/media/csr-dt/3.webp"
                            alt="Swastik Bihani"
                            className="img-fluid rounded-start"
                            width={300}
                            height={224}
                            style={{ height: "14rem", objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <p className="fw-bold fs-4">Mr. Swastik Bihani</p>
                            <p>Sr. Director of Products & GM, PayPal</p>
                            <Link
                              href="https://www.imthyderabad.edu.in/assets/images/faculty/pdf/swastik.pdf"
                              className="btn bg-warning text-white px-3 py-2 rounded-4"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Member 4 */}
                  <div className="col-12 col-md-6 mb-4">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-5">
                          <Image
                            src="/media/csr-dt/4.webp"
                            alt="Dr. Sriharsha Reddy"
                            className="img-fluid rounded-start"
                            width={300}
                            height={224}
                            style={{ height: "14rem", objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <p className="fw-bold fs-4">Dr. Sriharsha Reddy</p>
                            <p>
                              Dean (New Initiatives) & Professor, IMT Hyderabad
                            </p>
                            <Link
                              href="/faculties"
                              className="btn bg-warning text-white px-3 py-2 rounded-4"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* === Affiliated Faculty & Practitioners === */}
                <div className="row mb-4 mt-5">
                  <h5
                    className="text-center fw-bold fs-3 mb-4"
                    style={{ color: "#163977" }}
                  >
                    AFFILIATED FACULTY & PRACTITIONERS
                  </h5>

                  {/* Faculty 1 */}
                  <div className="col-12 col-md-6 mb-4">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-5">
                          <Image
                            src="/media/csr-dt/5.webp"
                            alt="Dr. Surajit Ghosh Dastidar"
                            className="img-fluid rounded-start"
                            width={300}
                            height={224}
                            style={{ height: "14rem", objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <p className="fw-bold fs-5">
                              Dr. Surajit Ghosh Dastidar
                            </p>
                            <p>
                              Chairperson, Centre for Digital Transformation
                              <br />
                              Associate Professor, Department of Analytics & IT
                            </p>
                            <Link
                              href="/faculties"
                              className="btn bg-warning text-white px-3 py-2 rounded-4"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Faculty 2 */}
                  <div className="col-12 col-md-6 mb-4">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-5">
                          <Image
                            src="/media/csr-dt/6.webp"
                            alt="Dr. Mahesh Ramalingam"
                            className="img-fluid rounded-start"
                            width={300}
                            height={224}
                            style={{ height: "14rem", objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <p className="fw-bold fs-5">
                              Dr. Mahesh Ramalingam
                            </p>
                            <p>
                              Assistant Professor
                              <br />
                              Marketing Management
                            </p>
                            <Link
                              href="/faculties"
                              className="btn bg-warning text-white px-3 py-2 rounded-4"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Faculty 3 */}
                  <div className="col-12 col-md-6 mb-4">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-5">
                          <Image
                            src="/media/csr-dt/7.webp"
                            alt="Dr. Kalyan C Chejarla"
                            className="img-fluid rounded-start"
                            width={300}
                            height={224}
                            style={{ height: "14rem", objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <p className="fw-bold fs-5">
                              Dr. Kalyan C Chejarla
                            </p>
                            <p>
                              Assistant Professor
                              <br />
                              Operations Management
                            </p>
                            <Link
                              href="/faculties"
                              className="btn bg-warning text-white px-3 py-2 rounded-4"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Faculty 4 */}
                  <div className="col-12 col-md-6 mb-4">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-5">
                          <Image
                            src="/media/csr-dt/8.webp"
                            alt="Dr. Indranil Ghosh"
                            className="img-fluid rounded-start"
                            width={300}
                            height={224}
                            style={{ height: "14rem", objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <p className="fw-bold fs-5">Dr. Indranil Ghosh</p>
                            <p>
                              Assistant Professor
                              <br />
                              Department of Analytics & IT
                            </p>
                            <Link
                              href="/faculties"
                              className="btn bg-warning text-white px-3 py-2 rounded-4"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Faculty 5 */}
                  <div className="col-12 col-md-6 mb-4">
                    <div className="card h-100 p-4">
                      <div className="row g-0">
                        <div className="col-md-5">
                          <Image
                            src="/media/faculties/22.webp"
                            alt="Prof Sachin Chaubey"
                            className="img-fluid rounded-start"
                            width={300}
                            height={224}
                            style={{ height: "14rem", objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <p className="fw-bold fs-5">Prof Sachin Chaubey</p>
                            <p>
                              Faculty Associate
                              <br />
                              IT & Analytics
                            </p>
                            <Link
                              href="/faculties"
                              className="btn bg-warning text-white px-3 py-2 rounded-4"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS (can be moved to globals.css later) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .nav-pills .nav-link.active {
        background-color: #ffc107 !important;
        color: #000 !important;
      }

      .nav-pills .nav-link {
        min-width: 79px;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .nav-pills .nav-link:hover {
        background-color: #e0a800 !important;
        transform: translateY(-2px);
      }

      /* Card shadow on hover */
      .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
        transition: all 0.3s ease;
      }

      /* Responsive images */
      .rounded-start {
        object-fit: cover;
      }
    `,
        }}
      />
    </>
  );
}
