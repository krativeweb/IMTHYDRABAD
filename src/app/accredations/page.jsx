// src/sections/ApprovalsAccreditation.jsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function ApprovalsAccreditation() {
  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5 position-relative"
          style={{
            backgroundImage: "url('/media/banners/contactus.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
            }}
          />
          <h2
            className="display-5 fw-bold mb-2"
            style={{ zIndex: 2, marginTop: "100px" }}
          >
          Accreditation
          </h2>
          <p className="position-relative text-white" style={{ zIndex: 2 }}>
            Our accreditations reflect our dedication to excellence, integrity,{" "}
            <br />
            and innovation in education.
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
                  Approvals & Accreditation
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-4">
        <div className="container">
          {/* Main Tabs */}
          <nav className="nav nav-pills justify-content-center flex-wrap gap-2 mb-4">
            {/* <Link
              className="nav-link rounded-pill bg-white active"
              data-bs-toggle="tab"
              href="#tab-aicte"
              role="tab"
            >
              AICTE Approvals
            </Link>
            <Link
              className="nav-link rounded-pill bg-white"
              data-bs-toggle="tab"
              href="#tab-aiu"
              role="tab"
            >
              AIU Certificates
            </Link> */}
            <Link
              className="nav-link rounded-pill bg-white active"
              data-bs-toggle="tab"
              href="#tab-nba"
              role="tab"
            >
              Accreditation
            </Link>
            <Link
              className="nav-link rounded-pill bg-white"
              data-bs-toggle="tab"
              href="#tab-saqs"
              role="tab"
            >
              SAQS Accredited
            </Link>
          </nav>

          <div className="tab-content mt-4 mb-4">
            {/* Accreditation */}
            <div
              className="tab-pane fade show active bg-white p-4 rounded-4"
              id="tab-nba"
              role="tabpanel"
            >
              <div className="card p-4">
                <h2
                  className="section-title text-center"
                  style={{ color: "#08317a" }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Accreditations
                </h2>

          

                {/* Content */}
                <div className="row justify-content-center">
                  <div className="col-lg-12 text-justify">
                    <p>
                      IMT Hyderabad is a nationally accredited and
                      internationally aligned business school committed to
                      delivering high-quality management education in India. Our
                      accreditations and global memberships reflect rigorous
                      academic standards, strong governance practices, and a
                      culture of continuous improvement aligned with global
                      benchmarks in management education.
                    </p>

                    <p>
                      IMT Hyderabad’s PGDM programs are accredited by the
                      National Board of Accreditation (NBA), the highest
                      national accreditation body for technical and professional
                      education in India. NBA accreditation confirms the quality
                      of our curriculum, faculty, teaching-learning processes,
                      student outcomes, and institutional systems. In addition,
                      the PGDM program at IMT Hyderabad is recognized as
                      equivalent to an MBA by the Association of Indian
                      Universities (AIU), ensuring nationwide academic and
                      industry acceptance.
                    </p>

                    <p>
                      At the international level, IMT Hyderabad holds SAQS
                      accreditation, awarded by AMDISA. SAQS accreditation
                      evaluates institutions on multiple dimensions including
                      academic rigor, governance, internationalization,
                      corporate connect, ethics, sustainability, and societal
                      impact. This international accreditation places IMT
                      Hyderabad among a select group of globally benchmarked
                      business schools in South Asia.
                    </p>

                    <p>
                      IMT Hyderabad is also a member of AACSB International and
                      EFMD Global, two of the world’s most respected
                      accreditation and quality assurance bodies for business
                      schools. AACSB and EFMD membership signals our alignment
                      with global best practices in management education and our
                      active engagement with international quality assurance
                      frameworks.
                    </p>

                    <p className="mb-0">
                      Together, NBA accreditation, AIU equivalence, SAQS
                      accreditation, and memberships in AACSB and EFMD
                      underscore IMT Hyderabad’s position as a globally oriented
                      management institute in India. At IMT Hyderabad,
                      accreditation is not a one-time achievement but an ongoing
                      commitment to excellence in management education.
                    </p>
                  </div>
                </div>
                      {/* Logos */}
          {/* Accreditations */}
<h3 className="text-center my-3">Accreditations & Approvals</h3>
<div className="d-flex justify-content-center flex-wrap gap-4 my-4">
  <Image src="/media/acc/nba.png" alt="NBA Accreditation" width={80} height={80} />
  <Image src="/media/acc/sas.jpg" alt="SAQS Accreditation" width={80} height={80} />
  <Image src="/media/acc/aiu.png" alt="AIU Recognition" width={80} height={80} />
  <Image src="/media/acc/aicte.png" alt="AICTE Approval" width={80} height={80} />
</div>

{/* Members */}
<h3 className="text-center my-3">Members</h3>
<div className="d-flex justify-content-center flex-wrap gap-4 my-4">
  <Image src="/media/aacsb-logo.webp" alt="AACSB Member" width={80} height={70} />
  <Image src="/media/acc/ITU Acd Member Logo.jpg" alt="ITU Academic Member" width={80} height={80} />
  <Image src="/media/acc/Shastri Logo.png" alt="Shastri Indo-Canadian Institute" width={80} height={80} />
</div>
              </div>
            </div>

            {/* SAQS */}
            <div
              className="tab-pane fade bg-white p-4 rounded-4"
              id="tab-saqs"
              role="tabpanel"
            >
              <div className="card p-4">
                <h2
                  className="section-title text-center"
                  style={{ color: "#08317a" }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  SAQS Accreditation
                </h2>
                <div className="row justify-content-center mt-3">
                  <div className="col-lg-12 text-justify">
                    <p className="mb-4">
                      <Link
                        href="https://drive.google.com/file/d/1NrHVlBSUTOqXC13joaJI58A87G45s2_v/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SAQS Accreditation Award Certificate-IMT Hyderabad
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .nav-pills .nav-link.active {
        background-color: #ffc107 !important;
        color: #212529 !important;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 2;
      }
    `,
        }}
      />
    </>
  );
}
