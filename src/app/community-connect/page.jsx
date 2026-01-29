'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function CommunityConnect() {
  // Initialize AOS
  useEffect(() => {
    import('aos').then((AOS) => {
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
      /* Faculty Hero */
      .faculty-hero {
        background: url('/media/banners/newsletter.webp');
        position: relative;
        background-size: cover;
        height: 60vh;
          background-position: center !important;
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

      /* Tabs (not used in this page, but included for consistency) */
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

      /* List Group */
      .list-group-item {
        background-color: transparent;
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
            background: "url('/media/banners/newsletter.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
              backgroundPosition: "center !important"
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Community Connect</h2>
          <p className="text-white">
            More than a campus, our institution is a collective of purpose.
            <br />
            Our community embodies collaboration, respect, and a shared vision
            of shaping ethical, empathetic leaders.
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
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-white fw-bold"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Community Connect
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Community Connect Section */}
      <section className="py-4">
        <div className="container bg-white p-4 mb-4 rounded-4">
          <div className="text-center mb-5">
            <h2
              className="section-title fw-bold"
              style={{ color: "#08317a" }}
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Community Connect
            </h2>
            <p
              className="text-muted fs-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Mission: To develop responsible citizens who can be harbingers of
              change in the society
            </p>
          </div>

          {/* Intro Paragraph */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
            <p>
              The community outreach initiatives at IMT Hyderabad started off in
              2011 by <strong>PAHEL</strong>, a volunteer student cell. The{" "}
              <strong>Community Connect Cell</strong> was established in 2018,
              with the objective of sensitizing students towards the society to
              bring about positive change in communities and address real-life
              societal challenges.
            </p>
            <p>
              The Cell has envisaged its activities under four key headings —{" "}
              <strong>Abhiyaan, Nirmaan, Sahayam</strong>, and{" "}
              <strong>Sambbad</strong> — towards fulfilment of its{" "}
              <strong>Daaitva (Responsibility)</strong>.
            </p>
          </div>

          {/* Image */}
          <div
            className="text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <img
              src="/media/cc.png"
              className="img-fluid rounded-4"
              alt="Community Connect"
            />
          </div>

          {/* Initiatives */}
          <div className="row g-4" data-aos="fade-up" data-aos-delay="400">
            <div className="col-md-12">
              <div className="card shadow-sm h-100 p-3 border-0 rounded-4">
                <h5 className="fw-bold text-warning mb-3">
                  Some of the initiatives undertaken
                </h5>
                <ul className="list-group list-group-flush text-muted">
                  <li className="list-group-item border-0 ps-0">
                    Around 25 villages in the Samshabad Mandal were surveyed by
                    first-year students to identify key challenges in health,
                    education, employability, and infrastructure.
                  </li>
                  <li className="list-group-item border-0 ps-0">
                    Twenty students collaborated with NGOs like GMRVF, Tharuni,
                    BVIC over two terms on projects such as social media
                    fund-raising campaigns, B2B selling for rural artisan
                    products, and analyzing skill training programs.
                  </li>
                  <li className="list-group-item border-0 ps-0">
                    IIEMS First Aid Medical Training Workshop was conducted for
                    students and faculty.
                  </li>
                  <li className="list-group-item border-0 ps-0">
                    PAHEL conducted drives including blood donations,
                    fundraisers, Haritha Haram (plantation), and visits to
                    schools.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
