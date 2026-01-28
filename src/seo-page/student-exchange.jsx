"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";

export default function StudentExchangePage() {
  const [loading, setLoading] = useState(true);
  const [seo, setSeo] = useState(null);
  const [outbound, setOutbound] = useState([]);
  const [inbound, setInbound] = useState([]);
  const [applicationForm, setApplicationForm] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const baseURL = process.env.NEXT_PUBLIC_API_URL;

        const [seoRes, outRes, inRes, formRes] = await Promise.all([
          fetch(`${baseURL}/api/student-exchange-seo`),
          fetch(`${baseURL}/api/outbound-exchange`),
          fetch(`${baseURL}/api/inbound-exchange`),
          fetch(`${baseURL}/api/inbound-application-form`),
        ]);

        const seoData = await seoRes.json();
        const outData = await outRes.json();
        const inData = await inRes.json();
        const formData = await formRes.json();

        setSeo(seoData?.[0] || null);
        setOutbound(outData?.data || []);
        setInbound(inData?.data || []);
        setApplicationForm(formData?.content || "");
      } catch (err) {
        console.error("Student Exchange API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <Loader fullScreen />;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: seo?.banner_image
              ? `url(${process.env.NEXT_PUBLIC_API_URL}${seo.banner_image}) no-repeat center center`
              : "url('/media/banners/Group 4.jpg') no-repeat center center",
            backgroundSize: "cover",
            height: "60vh",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 1,
            }}
          />
          <div
            className="hero-content"
            style={{ position: "relative", zIndex: 2, marginTop: "150px" }}
            dangerouslySetInnerHTML={{
              __html:
                seo?.banner_text ||
                `<h2 class="display-5 fw-bold mb-2">Student Exchange</h2>
                 <p class="text-white">Learning without boundaries.<br/>Our student exchange programs connect classrooms across continents.</p>`,
            }}
          />
        </div>

        <InternationalAssociationStickyBtns />

        {/* ================= BREADCRUMB ================= */}
        <div
          className="breadcrumb p-md-4"
          style={{ backgroundColor: "#163977" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold">
                  Student Exchange
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ================= MAIN TABS ================= */}
        <nav className="nav nav-pills justify-content-center gap-2 mt-5 mb-5">
          <a
            className="nav-link rounded-pill bg-white active text-black"
            data-bs-toggle="tab"
            href="#tab-out"
            role="tab"
          >
            Outbond Exchange
          </a>
          <a
            className="nav-link rounded-pill bg-white text-black"
            data-bs-toggle="tab"
            href="#tab-ie"
            role="tab"
          >
            Inbound Exchange
          </a>
        </nav>

        {/* ================= TAB CONTENT ================= */}
        <div className="tab-content container mt-4">
          {/* ================= OUTBOUND ================= */}
          <div
            className="tab-pane fade show active bg-white p-4 rounded-4"
            id="tab-out"
            role="tabpanel"
          >
            <div className="row">
              {/* LEFT NAV */}
              <div className="col-12 col-md-3 mb-3">
                <div
                  className="nav nav-pills scrollable-columns"
                  role="tablist"
                  aria-orientation="horizontal"
                >
                  {outbound.map((s, i) => (
                    <a
                      key={s._id}
                      className={`nav-link rounded-pill bg-light text-black mt-2 ${
                        i === 0 ? "active" : ""
                      }`}
                      data-bs-toggle="pill"
                      href={`#v-pills-std${i + 1}`}
                      role="tab"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="col-12 col-md-9">
                <div className="tab-content">
                  {outbound.map((s, i) => (
                    <div
                      key={s._id}
                      className={`tab-pane fade card p-md-4 mt-4 mx-md-5 ${
                        i === 0 ? "show active" : ""
                      }`}
                      id={`v-pills-std${i + 1}`}
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${s.image}`}
                            alt={s.name}
                          />
                        </div>
                        <div
                      
                          style={{ flex: 1 }}
                          dangerouslySetInnerHTML={{ __html: s.content }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= INBOUND (FIXED) ================= */}
          <div className="tab-content container mt-4 mb-4">
            <div
              className="tab-pane fade show bg-white p-md-4 rounded-4 text-black"
              id="tab-ie"
              role="tabpanel"
            >
              <nav className="nav nav-pills gap-2 mb-3 justify-content-center p-3 mt-md-2 mt-3">
                <a
                  className="nav-link bg-light text-dark rounded-pill tab active"
                  data-bs-toggle="pill"
                  href="#sub-in-ex"
                >
                  Exchange students
                </a>
                <a
                  className="nav-link bg-light text-dark rounded-pill tab"
                  data-bs-toggle="pill"
                  href="#sub-in-form"
                >
                  Application Form
                </a>
              </nav>

              <div className="tab-content container-sm text-black mb-5">
                {/* ===== INBOUND STUDENTS ===== */}
                <div className="tab-pane fade show active" id="sub-in-ex">
                  <div className="row g-4">
                    <div className="col-12 col-md-4">
                      <div
                        className="position-sticky top-0"
                        style={{
                          maxHeight: "80vh",
                          overflowY: "auto",
                          padding: "0.5rem",
                        }}
                      >
                        <nav className="nav nav-pills flex-column gap-2">
                          {inbound.map((s, i) => (
                            <a
                              key={s._id}
                              className={`nav-link bg-light text-dark rounded-pill ${i === 0 ? "active" : ""}`}
                              data-bs-toggle="pill"
                              href={`#in-std${i + 1}`}
                            >
                              {s.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>

                    <div className="col-12 col-md-8">
                      <div className="tab-content">
                        {inbound.map((s, i) => (
                          <div
                            key={s._id}
                            className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
                            id={`in-std${i + 1}`}
                          >
                            <div className="card mb-3">
                              <div className="row g-0">
                                <div className="col-md-4">
                                  <img
                                    src={`${process.env.NEXT_PUBLIC_API_URL}/${s.image}`}
                                    className="img-fluid rounded-start"
                                    alt={s.name}
                                  />
                                </div>
                                <div className="col-md-8">
                                  <div
                                 
                                    dangerouslySetInnerHTML={{
                                      __html: s.content,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ===== APPLICATION FORM ===== */}
                <div className="tab-pane fade" id="sub-in-form">
                  <div dangerouslySetInnerHTML={{ __html: applicationForm }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SCOPED STYLES */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Gradient banner with subtle overlay */
      .faculty-hero {
   
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

      .nav-pills .nav-link.active {
        background-color: var(--bs-warning) !important;
        color: var(--bs-dark) !important;
      }

      .scrollable-columns {
        max-height: 400px;
        overflow-y: auto;
        column-count: 2;
        column-gap: 1rem;
        padding-right: 10px;
      }

      .scrollable-columns .nav-link {
        display: inline-block;
        width: 100%;
        margin-bottom: 0.5rem;
      }
        .student-img {
        height: 290px;
  max-width: 245px;        /* image size control */
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}
  

/* ===== Medium screens (Tablet) ===== */
@media (max-width: 991px) and (min-width: 768px) {
  .student-img {
    max-width: 220px;
    margin-bottom: 10px;
  }
}

/* ===== Small screens (Mobile) ===== */
@media (max-width: 767px) {
  .student-img {
    max-width: 100%;
    display: block;
    margin: 0 auto 15px auto; /* center image */
  }

  .student-content {
    text-align: center;
  }
}
/* ===== Wrapper ===== */
.student-flex-wrap {
  width: 100%;
}

/* ===== Image Container ===== */
.student-img-box {
  flex: 0 0 35%;
  min-width: 250px;
  max-height: 260px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f8f9fa;
  border-radius: 6px;
}

/* ===== Image ===== */
.student-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* desktop */
}

/* ===== Content ===== */
.student-content {
  flex: 1;
  padding-left: 16px !important;
  padding-right: 8px !important;

  text-align: left;         
}

/* ===== Force text start (Bootstrap override safe) ===== */
.student-content *,
.student-content h5,
.student-content h6,
.student-content p {
  text-align: left !important;
}

/* ===== Mobile View ===== */
@media (max-width: 767px) {
  .student-img-box {
    width: 100%;
    min-width: unset;
    max-height: 220px;
  }

  .student-img {
    object-fit: contain; /* mobile me full image */
  }

  .student-content {
    padding: 12px 8px 0;
    text-align: left;
    
  }
}

    `,
        }}
      />
    </>
  );
}
