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
            backgroundPosition: "center !important",
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
          <h2 className="display-5 fw-bold mb-2 position-relative"  style={{ zIndex: 2, marginTop: "100px!important" }}>
            Top Business Schools Rankings
          </h2>
          <p className="text-white px-3">
            Recognized nationally for excellence and innovation. <br />
            Our consistent rankings reflect academic quality and our growing
            reputation in management education.
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
      <section id="rankings" className="py-5 ">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{ color: "#08317a" }}>
             Top Business Schools Rankings
            </h2>
            {/* <p className="text-muted">
              Consistent Growth Across All Major National Agencies
            </p> */}
          </div>

          <div className="rankings-grid">
            {/* 1. NIRF - High Impact Highlight */}
            <div className="ranking-box featured-card">
              <div className="card-top-glow"></div>
              <div className="ranking-source">
                <img
                  src="/media/acc/r-nirf.png"
                  alt="NIRF"
                  className="source-logo"
                />
                NIRF Ranking
              </div>
              <div className="row text-center mt-3">
                <div className="col-6 border-end">
                  <div className="year-tag gold">2025</div>
                  <div className="display-rank text-primary">
                    72<sup>nd</sup>
                  </div>
                  <div className="small-text">
                    {" "}
                    Ranked Among 1026 Participating Management Institutes
                  </div>
                </div>
                <div className="col-6">
                  <div className="year-tag muted">2024</div>
                  <div className="display-rank text-muted">
                    97<sup>th</sup>
                  </div>
                  <div className="small-text">
                    {" "}
                    Ranked Among 1026 Participating Management Institutes
                  </div>
                </div>
              </div>
            </div>

            {/* 2. GHRDC - Rank 1 Highlight */}
            <div className="ranking-box">
              <div className="ranking-source">
                <img
                  src="/media/acc/logo-Ghrdc.jpg"
                  alt="GHRDC"
                  className="source-logo"
                />
                GHRDC B-School Survey
              </div>
              <div className="highlight-pill animate-pulse">
                #1 Private B-School in Telangana
              </div>

              <div className="year-comparison mt-3">
                <div className="year-col">
                  <span className="year-tag">2025</span>
                  <div className="rank-item">
                    <span className="rank-pill">1st</span> Private B-School in
                    Telangana (Govt/Pvt)
                  </div>
                  <div className="rank-item">
                    <span className="rank-pill">10th</span> Ranked Among 69
                    Private B-Schools in India
                  </div>
                </div>
                <div className="year-col mt-3 pt-2 border-top">
                  <span className="year-tag muted">2024</span>
                  <div className="rank-item opacity-75">
                    <span className="rank-pill muted">1st</span> Ranked Private
                    B-School in Telangana
                  </div>

                  <div className="rank-item opacity-75">
                    <span className="rank-pill muted">9th</span> Ranked Among 58
                    Private B-Schools in India
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Careers360 - Rating Highlight */}
            <div className="ranking-box flashy-border">
              <div className="ranking-source">
                <img
                  src="/media/acc/r-360.png"
                  alt="Careers360"
                  className="source-logo"
                />
                Careers360
              </div>
              <div className="rating-badge-glow">AAAA+ RATING (2025)</div>
              <div className="year-col mt-3">
                <span className="year-tag">2025</span>
                <div className="rank-item">
                  <span className="rank-pill">31st</span> Ranked Among Private
                  B-Schools
                </div>
                <div className="rank-item">
                  <span className="rank-pill">3rd</span> in Supply Chain &
                  Operations Domain
                </div>
                <div className="rank-item">
                  <span className="rank-pill">AAAA+</span> Among Government and
                  Private B-Schools from all over India
                </div>
              </div>
              <div className="mt-2 pt-2 border-top">
                <span className="year-tag muted">2024</span>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">AAAA+</span> Among
                  Government and Private B-Schools from all-over India
                </div>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">38th</span> Ranked Among
                  Private B-Schools
                </div>
              </div>
            </div>

            {/* 4. Education Post IIRF */}
            <div className="ranking-box ">
              <div className="ranking-source">
                <img
                  src="/media/acc/logo-iirf.jpeg"
                  alt="IIRF"
                  className="source-logo"
                />
                Education Post – IIRF
              </div>
              <div className="highlight-pill bg-warning text-dark">
                #1 Telangana (PGDM)
              </div>
              <div className="year-tag mt-3">2025 Rankings</div>
              <div className="rank-item ">
                <span className="rank-pill gold">1st</span> Ranked Private
                B-School in Telangana state for PGDM program
              </div>
              <div className="rank-item ">
                <span className="rank-pill gold">18th</span> Ranked Among 100
                Private B-Schools from all-over India offering PGDM program
                India
              </div>
              <div className="rank-item ">
                <span className="rank-pill gold">20th</span> Ranked Among 122
                Private B-Schools from all-over India India
              </div>
              <div className="rank-item -50 mt-2 small">
                ✓ Comprehensive academic performance
              </div>
            </div>

            {/* 5. The Week - Hansa Research */}
            <div className="ranking-box">
              <div className="ranking-source">
                <img
                  src="/media/acc/logo-hansa.png"
                  alt="The Week"
                  className="source-logo"
                />
                The Week – Hansa Research Survey
              </div>
              <div className="year-tag">2025</div>
              <div className="rank-item">
                <span className="rank-pill">8th</span> Ranked Among 89 Private
                B-Schools in South India
              </div>
              <div className="rank-item">
                <span className="rank-pill">13th</span> Ranked Among 95
                Government and Private B-Schools in South India
              </div>
              <div className="rank-item">
                <span className="rank-pill">33th</span> Ranked Among 211 Private
                B-Schools from all-over India
              </div>
              <div className="rank-item">
                <span className="rank-pill">49th</span> Ranked Among 233
                Government and Private B-Schools from all-over India
              </div>

              <div className="mt-3 pt-2 border-top">
                <span className="year-tag muted">2024</span>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">8th</span> Ranked Among 84
                  Private B-Schools in South India
                </div>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">12th</span>Ranked Among 89
                  Government and Private B-Schools in South India
                </div>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">35th</span> Ranked Among 213
                  Private B-Schools from all-over India
                </div>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">49th</span> Ranked Among 235
                  Government and Private B-Schools from all-over India
                </div>
              </div>
            </div>

            {/* 6. Fortune India */}
            <div className="ranking-box">
              <div className="ranking-source">
                <img
                  src="/media/acc/fortune-logo.webp"
                  alt="Fortune India"
                  className="source-logo"
                />
                Fortune India
              </div>
              <div className="year-tag">2025</div>
              <div className="rank-item">
                <span className="rank-pill">11th</span> Ranked Among 87
                Government and Private B-Schools in South India
              </div>
              <div className="rank-item">
                <span className="rank-pill">26th</span> Ranked Among 197 Private
                B-Schools from all-over India
              </div>
              <div className="rank-item">
                <span className="rank-pill">54th</span> Ranked Among 234
                Government and Private B-Schools from all-over India
              </div>

              <div className="mt-3 pt-2 border-top">
                <span className="year-tag muted">2024</span>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">13th</span>Ranked Among 90
                  Government and Private B-Schools in South India
                </div>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">25th</span> Ranked Among 192
                  Private B-Schools from all-over India
                </div>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">55th</span> Ranked Among 233
                  Government and Private B-Schools from all-over India
                </div>
              </div>
            </div>

            {/* 7. Business Today */}
            <div className="ranking-box">
              <div className="ranking-source">
                <img
                  src="/media/acc/bt-logo.png"
                  alt="Business Today"
                  className="source-logo"
                />
                Business Today – MDRA
              </div>
              <div className="year-tag">2025</div>
              <div className="rank-item">
                <span className="rank-pill">12th</span> Ranked among 91
                Government and Private B-Schools in South India
              </div>
              <div className="rank-item">
                <span className="rank-pill">33rd</span> Ranked Among 100 Private
                B-Schools from all-over India
              </div>
              <div className="rank-item">
                <span className="rank-pill">54th</span> Ranked Among 270
                Government and Private B-Schools from all-over India
              </div>

              <div className="mt-3 pt-2 border-top">
                <span className="year-tag muted">2024</span>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">14th</span> Ranked among Top
                  20 Government and Private B-Schools in South India
                </div>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">33rd</span> Ranked Among 100
                  Private B-Schools from all-over India
                </div>
                <div className="rank-item opacity-75">
                  <span className="rank-pill muted">53rd</span>Ranked Among 275
                  Government and Private B-Schools from all-over India
                </div>
              </div>
            </div>

            {/* 8. Education World */}
            <div className="ranking-box">
              <div className="ranking-source">
                <img
                  src="/media/acc/r-ew.png"
                  alt="Education World"
                  className="source-logo"
                />
                Education World
              </div>
              <div className="year-tag">2025</div>
              <div className="rank-item mt-2">
                <span className="rank-pill gold">15th</span>
                <strong>Ranked Among Top 100 Business Schools in India</strong>
              </div>
              <br />
              <div className="ranking-source">
                <img
                  src="/media/acc/it-logo.png"
                  alt="India Today"
                  className="source-logo"
                />
                India Today B-Rankings 
              </div>
              <span className="year-tag muted">2024</span>
              <div className="rank-item opacity-75">
                <span className="rank-pill muted">11th</span> Ranked among Top
                85 Private B-Schools in South India
              </div>
              <div className="rank-item opacity-75">
                <span className="rank-pill muted">33rd</span> Ranked Among 243
                Private B-Schools from all-over India
              </div>
            </div>

            {/* 9. India Today & BW (Combined Highlights) */}
            <div className="ranking-box">
              <div className="ranking-source">
                <img
                  src="/media/acc/r-bw.png"
                  alt="BusinessWorld"
                  className="source-logo"
                />
                BusinessWorld (BW) Rankings
              </div>
              <span className="year-tag muted">2024</span>
              <div className="rank-item opacity-75">
                <span className="rank-pill muted">9th</span> Ranked among 57
                Private B-Schools in South India
              </div>
              <div className="rank-item opacity-75">
                <span className="rank-pill muted">24th</span> Ranked among 154
                Private B-Schools
              </div>
              <div className="rank-item opacity-75">
                <span className="rank-pill muted">39th</span> Ranked among 175
                Government and Private B-Schools
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-5" style={{ backgroundColor: "#151f54" }}>
        <div className="container">
          <div className="row logos_section_inner justify-content-center g-4">
            {["r-nirf.png", "r-ew.png", "r-bw.png", "r-360.png"].map(
              (img, i) => (
                <div key={i} className="col-sm-6 col-md-3">
                  <div className="ranking-logo-card text-center">
                    <div className="logo-container">
                      <img src={`/media/acc/${img}`} alt="logo" />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Global Adjustments */
      body { color: #333; line-height: 1.6; }
      .section-title { font-size: 2.5rem; font-weight: 800; position: relative; padding-bottom: 15px; }
      .section-title::after { content: ""; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 100px; height: 4px; background: #ffc107; border-radius: 2px; }

      /* Hero & Banner */
      .faculty-hero { display: flex; flex-direction: column; justify-content: center; align-items: center; }
      .faculty-hero h2 { margin-top: 0 !important; }

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
      /* Grid Layout */
      .rankings-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 25px;
      }

      /* Card Styling */
      .ranking-box {
        background: #ffffff;
        border-radius: 20px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        transition: all 0.3s ease;
        border: 1px solid #edf2f7;
        position: relative;
        overflow: hidden;
      }
      .ranking-box:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

      /* Specific Card Types */
      .featured-card { border: 2px solid #08317a; background: #f0f7ff; }
      .dark-card { background: #08317a; color: white; }
      .card-top-glow { position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: linear-gradient(90deg, #ffc107, #08317a); }

      /* Rankings Headers */
      .ranking-source { font-size: 1.1rem; font-weight: 800;  color: #08317a; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }
      .source-logo { height: 50px; object-fit: contain; }

      /* Badges & Tags */
      .year-tag { display: inline-block; background: #08317a; color: #fff; font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: 50px; margin-bottom: 12px; }
      .year-tag.gold { background: #ffc107; color: #000; }
      .year-tag.muted { background: #e2e8f0; color: #64748b; }

      .highlight-pill { background: #ebf4ff; color: #08317a; font-weight: 800; padding: 8px 15px; border-radius: 12px; text-align: center; margin-bottom: 15px; font-size: 0.9rem; border: 1px dashed #08317a; }
      .rating-badge-glow { background: #ffc107; color: #000; font-weight: 900; text-align: center; padding: 10px; border-radius: 10px; box-shadow: 0 0 15px rgba(255, 193, 7, 0.5); animation: pulse-glow 2s infinite; }

      /* Ranks */
      .display-rank { font-size: 2.5rem; font-weight: 900; line-height: 1; margin-bottom: 5px; }
      .small-text { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }

      .rank-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 0.92rem; font-weight: 500; }
      .rank-pill { min-width: 55px; height: 26px; display: flex; align-items: center; justify-content: center; background: #ffc107; color: #000; font-weight: 800; border-radius: 50px; font-size: 0.8rem; }
      .rank-pill.muted { background: #cbd5e1; }
      .rank-pill.gold { background: #ffc107; box-shadow: 0 4px 10px rgba(255,193,7,0.3); }

      /* Logos Section */
      .ranking-logo-card { background: white; border-radius: 15px; padding: 20px; transition: 0.3s; height: 120px; display: flex; align-items: center; justify-content: center; }
      .ranking-logo-card:hover { transform: scale(1.05); }
      .logo-container img { max-height: 70px; max-width: 100%; object-fit: contain; }

      /* Animations */
      @keyframes pulse-glow {
        0% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 193, 7, 0.4); }
        50% { transform: scale(1.02); box-shadow: 0 0 20px rgba(255, 193, 7, 0.7); }
        100% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 193, 7, 0.4); }
      }
      .animate-pulse { animation: pulse-glow 2s infinite; }

      @media (max-width: 768px) {
        .rankings-grid { grid-template-columns: 1fr; }
        .section-title { font-size: 1.8rem; }
      }
        /* Hover Background & Text Color Fix */
.ranking-box:hover {
  background: #09327a;
  border-color: #09327a;
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(9, 50, 122, 0.35);
}

/* Make all text white on hover */
.ranking-box:hover,
.ranking-box:hover .ranking-source,
.ranking-box:hover .ranking-year,
.ranking-box:hover .ranking-item,
.ranking-box:hover .small-text,
.ranking-box:hover .highlight-pill {
  color: #ffffff;
}

/* Rank pill adjustments on hover */
.ranking-box:hover .rank-pill {
  background: #ffc107;
  color: #000;
}

/* Year tags on hover */
.ranking-box:hover .year-tag {
  background: #ffc107;
  color: #000;
}

/* Dashed highlight pill fix */
.ranking-box:hover .highlight-pill {
  background: rgba(255, 255, 255, 0.12);
  border-color: #ffc107;
}

/* If card is dark-card already, keep consistency */
.dark-card:hover {
  background: #09327a;
}
  /* Disable hover color change for featured card */
.featured-card:hover {
  background: #f0f7ff;           /* original background */
  border-color: #08317a;
  transform: none;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

/* Keep original text colors on hover */
.featured-card:hover,
.featured-card:hover .ranking-source,
.featured-card:hover .display-rank,
.featured-card:hover .small-text {
  color: inherit;
}

/* Prevent hover rules from affecting inner elements */
.featured-card:hover .rank-pill,
.featured-card:hover .year-tag {
  background: inherit;
  color: inherit;
}


    `,
        }}
      />
    </>
  );
}


