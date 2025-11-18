// src/sections/AboutIMTHyderabad.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutIMTHyderabad() {
  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5 position-relative"
          style={{
            backgroundImage: "url('/media/banners/aboutus.webp')",
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
            className="display-5 fw-bold mb-2 position-relative"
            style={{ zIndex: 2, marginTop: "100px" }}
          >
            About IMT Hyderabad
          </h2>
          <p
            className="position-relative text-white"
            style={{ zIndex: 2, fontSize: "1.1rem" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            animi illum <br />
            facere fuga eaque ducimus, praesentium in distinctio
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
                  About IMT Hyderabad
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ABOUT" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="card p-4">
            <h2
              className="section-title text-center"
              style={{ color: "#08317a" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              About IMT Hyderabad
            </h2>
            <div className="row justify-content-center mt-3">
              <div className="col-lg-12 text-justify">
                <p className="mb-4">
                  Institute of Management Technology Hyderabad was established
                  in 2011 as an institution that would be managed by a society.
                  The institute is governed by a council led by Shri. Bakul
                  Nath, Educationalist and philanthropist, proactively supported
                  by Shri Dipankar Chatterji, Smt. Simran Nath, Shri Ishaat
                  Hussain, Shri S S Mundra, Prof Subhash Bhatnagar, Prof
                  Mithileshwar Jha and Dr. Partha Ray.
                </p>
                <p className="mb-4">
                  IMT Hyderabad offers 2-year full time residential Post
                  Graduate Diploma in Management (PGDM) Program and also Post
                  Graduate Diploma in Management Program for Executives.
                </p>
                <p className="mb-4">
                  Widely experienced faculty, state of the art infrastructure
                  combined with innovative pedagogy and rigorous learning
                  processes render IMT Hyderabad as the most apt platform for
                  grooming and molding the business leaders of tomorrow.
                </p>
                <p className="mb-4">
                  IMT Hyderabad constantly endeavors to provide its students an
                  excellent learning experience through unique pedagogy and
                  curriculum that matches contemporary business requirements.
                  IMT Hyderabad firmly believes in imparting holistic
                  development of the future leaders to face the challenges of
                  today’s dynamic world.
                </p>
                <p className="mb-4">
                  Over the years, achievements of our students have strengthened
                  our belief in their potential to create an enviable future for
                  themselves at the same time proving themselves to be a
                  responsible global citizen.
                </p>
                <p className="mb-4">
                  The institute is built on a sprawling and lush green 30 acres’
                  land. IMT Hyderabad state-of-the art campus is located 15
                  minutes away from Rajiv Gandhi International Airport. The
                  beautifully landscaped campus has an academic block, a library
                  building, dining halls, hostels and entire campus is well
                  paved, well lit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission mb-5">
        <div className="container">
          <div className="row">
            {/* Vision */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="fw-bold text-warning">Vision</h4>
                  <p>
                    To be a leading management Institute that nurtures socially
                    responsible business leaders.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="fw-bold text-warning">Mission</h4>
                  <ul className="mb-0">
                    <li>To promote academic excellence.</li>
                    <li>
                      To enhance industry readiness through learner-centric
                      pedagogy and industry-inspired curriculum.
                    </li>
                    <li>To instill social consciousness.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder’s Message */}
      <section id="founder-message" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden p-4 p-md-5">
            <div className="row align-items-center g-4">
              {/* Founder Image */}
              <div className="col-md-4">
                <div className="founder-image position-relative">
                  <Image
                    src="/media/Shri-Mahendra-Nath.png"
                    alt="Shri Mahendra Nath"
                    width={400}
                    height={500}
                    className="img-fluid rounded shadow"
                    style={{
                      borderRadius: "12px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.5))",
                      borderRadius: "12px",
                    }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 text-center text-white p-3">
                    <h4 className="fw-bold mb-1">Shri Mahendra Nath</h4>
                    <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                      Founder, IMT Group of Institutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder Message */}
              <div className="col-md-8">
                <div
                  className="card-body px-2 px-md-4"
                  style={{ lineHeight: 1.8, color: "#333" }}
                >
                  <h2
                    className="fw-bold text-center mb-4"
                    style={{ color: "#08317a", letterSpacing: "1px" }}
                  >
                    Founder’s Message
                  </h2>
                  <hr
                    className="mx-auto mb-4"
                    style={{ width: "60px", border: "2px solid #ffb433" }}
                  />

                  <p
                    className="fst-italic text-secondary mb-4 text-center"
                    style={{ fontSize: "1rem" }}
                  >
                    “A visionary whose life was a testament to determination,
                    humility, and service to humanity.”
                  </p>

                  <p className="mb-3">
                    Shri Mahendra Nath was a monarch of whatever he surveyed — a
                    patriot, an eminent industrialist and educationist, a
                    visionary, an institution builder, and above all, a{" "}
                    <strong>“karma yogi.”</strong>
                  </p>

                  <p className="mb-3">
                    Born in a humble middle-class family, he learnt early that
                    honesty and hard work lead to success. Inspired by his
                    father, a medical practitioner and follower of Swami
                    Dayanand Saraswati, he developed strong determination,
                    tenacity, and empathy for the underprivileged.
                  </p>

                  <p className="mb-0">
                    He began his career as an insurance agent in Meerut, where
                    his pleasant personality and relationship-building skills
                    brought him quick success. Soon, he expanded into film
                    distribution, publishing, and power transmission,
                    establishing one of India’s largest high-tension
                    transmission companies through vision and perseverance.
                  </p>
                </div>
              </div>
            </div>

            {/* Full Width Text */}
            <div className="row mt-4">
              <div className="col-12 px-3 px-md-5">
                <p className="mb-3" style={{ lineHeight: 1.8, color: "#333" }}>
                  Despite lacking formal managerial or technical training, he
                  gained immense respect for his sharp analytical mind, business
                  understanding, and tireless pursuit of excellence.
                </p>

                <p className="mb-4" style={{ lineHeight: 1.8, color: "#333" }}>
                  He founded the <strong>Dr. K. Nath Public Trust</strong> to
                  promote education and social welfare. The trust established
                  the{" "}
                  <strong>
                    Institute of Management Technology (IMT), Ghaziabad
                  </strong>{" "}
                  in 1980, with the mission to provide world-class management
                  education and develop future leaders.
                </p>

                <blockquote className="blockquote ps-4 border-start border-3 border-warning my-4">
                  <p className="mb-0 fst-italic" style={{ fontSize: "1rem" }}>
                    “If we are to achieve, we must look for the opportunity in
                    every difficulty instead of the difficulty in every
                    opportunity.”
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Walter E. Cole — A belief he lived by
                  </footer>
                </blockquote>

                <p
                  className="fw-semibold text-end mt-4 mb-0"
                  style={{ color: "#08317a" }}
                >
                  — Shri Mahendra Nath
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
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
        .text-justify {
          text-align: justify;
        }
      `}</style>
    </>
  );
}
