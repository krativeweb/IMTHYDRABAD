"use client";

import Link from "next/link";

export default function Campus() {
  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('./media/banners/campus.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
              backgroundPosition: "center !important"
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Campus</h2>
          <p className="text-white">
            The IMT Hyderabad campus is a vibrant, eco-friendly, and modern
            learning environment <br />
            fostering innovation, collaboration, and holistic student
            development.
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
                  Campus
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section id="campus" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#08317a" }}>
              Campus
            </h2>
            <p
              className="mx-auto"
              style={{
                maxWidth: "900px",
                lineHeight: "1.8",
                color: "#333",
              }}
            >
              Built on a sprawling 30-acre green campus, IMT Hyderabad is just
              15 minutes from Rajiv Gandhi International Airport. The campus
              includes academic blocks, hostels, dining halls, seven water
              bodies, and state-of-the-art infrastructure for learning,
              recreation, and sports.
            </p>
          </div>

          <div className="row g-4">
            {/* Academic Block */}
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row align-items-center">
                <div className="col-md-4">
                  <img
                    src="./media/Stealth/IMG_4014.webp"
                    alt="Academic Block"
                    className="img-fluid rounded shadow clipped-img-1"
                  />
                </div>
                <div className="col-md-8">
                  <h5 className="fw-bold text-warning mb-3">Academic Block</h5>
                  <p style={{ lineHeight: "1.7", color: "#333" }}>
                    The academic building showcases modern architecture, offers
                    cutting-edge teaching facilities, and gives the precinct
                    dynamic and vibrant atmosphere in its celebration of open
                    spaces and natural light. The academic block houses 15 smart
                    futuristic classrooms, each equipped with the finest audio
                    visual and interactive technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Smart Campus Facilities */}
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row flex-md-row-reverse align-items-center">
                <div className="col-md-4" style={{ textAlign: "end" }}>
                  <img
                    src="./media/Stealth/IMG_4015.webp"
                    alt="Smart Campus Facilities"
                    className="img-fluid rounded shadow clipped-img-2"
                  />
                </div>
                <div className="col-md-8">
                  <h5 className="fw-bold text-warning mb-3">
                    Smart Campus Facilities
                  </h5>
                  <p style={{ lineHeight: "1.7", color: "#333" }}>
                    IMT Hyderabad has a fully Wi-Fi enabled campus which is
                    connected to a backbone of 10 GPBS fiber connectivity with
                    multi-layer, high-end network devices. The Wi-Fi enabled IMT
                    Hyderabad campus boasts of world class IT infrastructure.
                    Further IMT Hyderabad has academic alliance with SAP
                    University, Microsoft and SAS.
                  </p>
                </div>
              </div>
            </div>

            {/* Learning Resource Centre */}
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row align-items-center">
                <div className="col-md-4">
                  <img
                    src="./media/Stealth/IMG_4005.webp"
                    alt="Learning Resource Centre"
                    className="img-fluid rounded shadow clipped-img-1"
                  />
                </div>
                <div className="col-md-8">
                  <h5 className="fw-bold text-warning mb-3">
                    Learning Resource Centre
                  </h5>
                  <p style={{ lineHeight: "1.7", color: "#333" }}>
                    Learning Resource Centre is open to all students, Faculty,
                    Research Associates, and Staff of the institute. The
                    learning resource center is equipped with huge collection of
                    books, journals, CDs and electronic databases.
                  </p>
                </div>
              </div>
            </div>

            {/* Hostels */}
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row flex-md-row-reverse align-items-center">
                <div className="col-md-4" style={{ textAlign: "end" }}>
                  <img
                    src="./media/Stealth/UMA_7894.webp"
                    alt="Hostels"
                    className="img-fluid rounded shadow clipped-img-2"
                  />
                </div>
                <div className="col-md-8">
                  <h5 className="fw-bold text-warning mb-3">Hostels</h5>
                  <p style={{ lineHeight: "1.7", color: "#333" }}>
                    IMT Hyderabad’s PGDM programs are residential in nature and
                    all students are required to stay in hostel. Students are
                    provided with single accommodation. The institute has a
                    clinic and necessary assistance is provided to students.
                  </p>
                </div>
              </div>
            </div>

            {/* Gymnasium */}
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row align-items-center">
                <div className="col-md-4">
                  <img
                    src="./media/Stealth/Gym-1.webp"
                    alt="Gymnasium"
                    className="img-fluid rounded shadow clipped-img-1"
                  />
                </div>
                <div className="col-md-8">
                  <h5 className="fw-bold text-warning mb-3">Gymnasium</h5>
                  <p style={{ lineHeight: "1.7", color: "#333" }}>
                    Here are few things as alluring as a healthy lifestyle, and
                    the recreation center at IMT Hyderabad is determined to
                    ensure that students pursue healthier habits during their
                    time on campus. The gym is located just above the student
                    dining hall and is not far away from student hostels.
                  </p>
                </div>
              </div>
            </div>

            {/* Sports Facilities */}
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row flex-md-row-reverse align-items-center">
                <div className="col-md-4" style={{ textAlign: "end" }}>
                  <img
                    src="./media/Stealth/Sports-6.webp"
                    alt="Sports Facilities"
                    className="img-fluid rounded shadow clipped-img-2"
                  />
                </div>
                <div className="col-md-8">
                  <h5 className="fw-bold text-warning mb-3">
                    Sports Facilities
                  </h5>
                  <p style={{ lineHeight: "1.7", color: "#333" }}>
                    The sport complex houses a Cricket ground, a Football
                    ground, a Basketball court, Tennis court and Badminton
                    court.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === ORIGINAL CSS (Slanted Images + Mobile Responsive) === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .faculty-hero {
        position: relative;
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

      .clipped-img-1 {
        clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
        height: 30vh;
        object-fit: cover;
      }

      .clipped-img-2 {
        clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
        height: 30vh;
        object-fit: cover;
      }

      /* Mobile View Adjustments */
      @media (max-width: 767px) {
        .clipped-img-1,
        .clipped-img-2 {
          height: 20vh;
          clip-path: none;
          border-radius: 0.75rem;
        }

        .card.d-flex.flex-row,
        .card.d-flex.flex-row-reverse {
          flex-direction: column !important;
          text-align: center;
        }

        .card .col-md-4,
        .card .col-md-8 {
          max-width: 100%;
          padding: 0;
        }

        .card .col-md-4 {
          margin-bottom: 15px;
        }
      }
    `,
        }}
      />
    </>
  );
}
