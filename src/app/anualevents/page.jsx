// src/sections/AnnualEvents.jsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function AnnualEvents() {
  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5 position-relative"
          style={{
            backgroundImage: "url('/media/banners/annualevents.webp')",
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
            Annual Events
          </h2>
          <p className="position-relative text-white" style={{ zIndex: 2 }}>
            Celebrating the spirit of learning and leadership. <br />
            Our annual events bring together ideas, innovation, and community in
            vibrant academic and cultural engagement.
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
                  Annual Events
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Annual Events Section */}
      <section id="annual-events" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#08317a" }}>
            Annual Events
          </h2>

          <div className="row g-4">
            {/* TEDxIMTHyderabad */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <h5 className="fw-bold text-warning mb-3">TEDxIMTHyderabad</h5>
                <p>
                  IdeasWorth Spreading is what TED stands for and serves a
                  perfect platform for visionaries who want to make a
                  difference. TEDxIMTHyderabad brings students, employees, and
                  industry experts together to share and get inspired.
                  <br />
                  <strong>This year's theme:</strong> ‘Imperfect Blend.’
                </p>
              </div>
            </div>

            {/* Periodos */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <h5 className="fw-bold text-warning mb-3">Periodos</h5>
                <p>
                  ‘Troth Pride Glory’ defines Periodos—the annual sports event
                  of IMT Hyderabad. Students compete with other B-schools across
                  different sports, creating lifelong memories.
                </p>
              </div>
            </div>

            {/* Ace Connect */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <h5 className="fw-bold text-warning mb-3">Ace Connect</h5>
                <p>
                  Ace Connect is a forum where sportsmanship meets professional
                  networking. Teams from prestigious corporates come together to
                  compete in sports and strengthen relationships with academia.
                </p>
              </div>
            </div>

            {/* Impelz */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <h5 className="fw-bold text-warning mb-3">Impelz</h5>
                <p>
                  Impelz is the annual cultural and management fest of IMT
                  Hyderabad. It combines fun, innovation, and knowledge,
                  attracting students from premier colleges and B-schools for
                  diverse competitions.
                </p>
              </div>
            </div>
          </div>

          {/* Grid Images Section */}
          <div className="row g-3 mt-5">
            <h4 className="display-5 fw-bold mb-4">Glimpse of Annual Events</h4>

            {/* Responsive Image Grid (No Owl Carousel) */}
            <div className="row g-3">
              {[
                "/media/events/event1.webp",
                "/media/events/event2.webp",
                "/media/events/event3.webp",
                "/media/events/event4.webp",
              ].map((src, i) => (
                <div key={i} className="col-12 col-sm-6 col-lg-3">
                  <Image
                    src={src}
                    alt={`Event ${i + 1}`}
                    width={400}
                    height={300}
                    className="img-fluid rounded shadow"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
