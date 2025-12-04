"use client";
import Link from "next/link";
export default function Rankings() {
  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('./media/banners/ranking.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
              backgroundPosition: "center !important"
          }}
        >
          <h2 className="display-5 fw-bold mb-2">
            Top Business Schools Rankings
          </h2>
          <p className="text-white">
            Recognized nationally for excellence and innovation. <br />
            Our consistent rankings reflect academic quality, strong outcomes,
            and our growing reputation in management education.
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
                  Top Business Schools Rankings
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section id="rankings" className="py-5">
        <div className="container">
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Top Business Schools Rankings
          </h2>

          <div className="rankings-card">
            <div className="row">
              {/* NIRF Ranking */}
              <div className="mb-4">
                <div className="ranking-header" style={{ color: "#08317a" }}>
                  National Institutional Ranking Framework (NIRF) India Rankings
                  2025
                </div>
                <ul className="list-group ranking-list">
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">72nd</span> Ranked Among
                    1026 Participating Management Institutes
                  </li>
                </ul>
              </div>

              {/* The Week-Hansa Ranking */}
              <div className="mb-4">
                <div className="ranking-header" style={{ color: "#08317a" }}>
                  The Week-Hansa Best B-School Rankings 2024
                </div>
                <ul className="list-group ranking-list">
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">8th</span> Ranked Among
                    84 Private B-Schools in South India
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">12th</span> Ranked Among
                    89 Government and Private B-Schools in South India
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">35th</span> Ranked Among
                    213 Private B-Schools from all-over India
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">49th</span> Ranked Among
                    235 Government and Private B-Schools from all-over India
                  </li>
                </ul>
              </div>

              {/* Fortune India-ACRA Ranking */}
              <div className="mb-4">
                <div className="ranking-header" style={{ color: "#08317a" }}>
                  Fortune India-ACRA B-School Rankings 2024
                </div>
                <ul className="list-group ranking-list">
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">13th</span> Ranked Among
                    90 Government and Private B-Schools in South India
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">25th</span> Ranked Among
                    192 Private B-Schools from all-over India
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">55th</span> Ranked Among
                    233 Government and Private B-Schools from all-over India
                  </li>
                </ul>
              </div>

              {/* Education World Ranking */}
              <div className="mb-4">
                <div className="ranking-header" style={{ color: "#08317a" }}>
                  Education World (EW) Higher Education Rankings 2024-25
                </div>
                <ul className="list-group ranking-list">
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">17th</span> Ranked Among
                    India’s top 100 private B-Schools
                  </li>
                </ul>
              </div>

              {/* Businessworld Ranking */}
              <div className="mb-4">
                <div className="ranking-header" style={{ color: "#08317a" }}>
                  Businessworld B-School Rankings 2024
                </div>
                <ul className="list-group ranking-list">
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">9th</span> Ranked Among
                    57 Private B-Schools in South India
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">24th</span> Ranked Among
                    154 Private B-Schools
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">39th</span> Ranked Among
                    175 Government and Private B-Schools
                  </li>
                </ul>
              </div>

              {/* Business Today Ranking */}
              <div className="mb-4">
                <div className="ranking-header" style={{ color: "#08317a" }}>
                  Business Today - MDRA B-School Ranking 2024
                </div>
                <ul className="list-group ranking-list">
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">14th</span> Ranked Among
                    Top 20 Government and Private B-Schools in South India
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">33rd</span> Ranked Among
                    100 Private B-Schools from all-over India
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">53rd</span> Ranked Among
                    275 Government and Private B-Schools from all-over India
                  </li>
                </ul>
              </div>

              {/* Careers 360 Ranking */}
              <div className="mb-4">
                <div className="ranking-header" style={{ color: "#08317a" }}>
                  Careers 360 Rankings of India’s Best B-Schools 2025
                </div>
                <ul className="list-group ranking-list">
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">38th</span> Ranked Among
                    Private B-Schools
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">AAAA Rated</span> Among
                    Government and Private B-Schools from all-over India
                  </li>
                </ul>
              </div>

              {/* GHRDC Ranking */}
              <div className="mb-0">
                <div className="ranking-header" style={{ color: "#08317a" }}>
                  GHRDC B-School Ranking 2025
                </div>
                <ul className="list-group ranking-list">
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">1st</span> Ranked Private
                    B-School in Telangana
                  </li>
                  <li className="list-group-item bg-transparent border-0">
                    <span className="institution-rank">10th</span> Ranked Among
                    69 Private B-Schools in India
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-5" style={{ backgroundColor: "#151f54" }}>
        <div className="container">
          <div className="row logos_section_inner justify-content-center g-4">
            {/* NIRF */}
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="ranking-logo-card text-center">
                <div className="logo-container">
                  <img src="/media/acc/r-nirf.png" alt="NIRF Ranking" />
                </div>
                <div className="logo-title-dark">
                  National Institutional Ranking Framework
                </div>
              </div>
            </div>

            {/* Education World */}
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="ranking-logo-card text-center">
                <div className="logo-container">
                  <img src="/media/acc/r-ew.png" alt="Education World" />
                </div>
                <div className="logo-title-dark">Education World Rankings</div>
              </div>
            </div>

            {/* Business World */}
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="ranking-logo-card text-center">
                <div className="logo-container">
                  <img src="/media/acc/r-bw.png" alt="Business World" />
                </div>
                <div className="logo-title-dark">Businessworld Rankings</div>
              </div>
            </div>

            {/* Careers 360 */}
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="ranking-logo-card text-center">
                <div className="logo-container">
                  <img src="/media/acc/r-360.png" alt="Careers 360" />
                </div>
                <div className="logo-title-dark">Careers 360 Rankings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === ORIGINAL CSS (No Truncation) === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
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

      body {
        color: #333;
        line-height: 1.6;
      }

      .section-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--imt-primary);
        margin-bottom: 1.5rem;
        position: relative;
        padding-bottom: 0.5rem;
      }

      .section-title::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: var(--imt-secondary);
      }

      .rankings-card {
        background: #fff;
        border-radius: 1rem;
        box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);
        padding: 1.75rem;
        margin-bottom: 2rem;
        border: 1px solid #e9ecef;
      }

      .ranking-header {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--imt-primary);
        margin: 1.5rem 0 0.75rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #eee;
      }

      .ranking-list li {
        padding: 0.5rem 0;
        font-size: 0.95rem;
      }

      .institution-rank {
        font-weight: 700;
        color: var(--imt-secondary);
        min-width: 40px;
        display: inline-block;
      }

      .section-bg {
        background-color: #151f54;
        padding: 3rem 0;
        border-radius: 15px;
        margin: 2rem 0;
      }

      .ranking-logo-card {
        background: white;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        padding: 1.5rem;
        transition: all 0.3s ease;
        height: 100%;
      }

      .logo-container {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        max-width: 200px;
      }

      .logo-container img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
        filter: brightness(0.9);
        transition: all 0.3s ease;
      }

      @media (max-width: 768px) {
        .logo-container {
          height: 100px;
        }
        .section-title {
          font-size: 1.5rem;
        }
      }

      @media (max-width: 576px) {
        .logo-container {
          height: 80px;
          max-width: 150px;
        }
        .section-title {
          font-size: 1.3rem;
        }
      }

      @media (max-width: 768px) {
        .section-title {
          font-size: 1.7rem;
        }
        .ranking-header {
          font-size: 1.2rem;
        }
        .ranking-list li {
          font-size: 0.9rem;
        }
      }

      @media (max-width: 576px) {
        .section-title {
          font-size: 1.5rem;
        }
      }
    `,
        }}
      />
    </>
  );
}
