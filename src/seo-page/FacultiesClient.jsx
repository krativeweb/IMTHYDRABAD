// src/app/faculty/page.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function Faculty() {
  const [facultyData, setFacultyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDept, setCurrentDept] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL; // set in .env.local

  // --------------------------------------------------------------
  // 1. FETCH ALL FACULTY
  // --------------------------------------------------------------
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get(`${baseURL}/faculties`);
        if (Array.isArray(response.data)) {
          // ---- decode showassets2.php images ----
          const decoded = response.data.map((f) => ({
            ...f,
            prof_image: f.prof_image.includes("showassets2.php")
              ? `https://thekreativeweb.com/codes/imt_hydrabad/showassets2.php?id=${
                  f.prof_image.split("id=")[1]
                }`
              : f.prof_image,
          }));
          setFacultyData(decoded);
        } else {
          setFacultyData([]);
        }
      } catch (err) {
        console.error("Error fetching faculties:", err);
        setError("Failed to load faculty data");
      } finally {
        setLoading(false);
      }
    };
    fetchFaculty();
  }, [baseURL]);

  // --------------------------------------------------------------
  // 2. AOS
  // --------------------------------------------------------------
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });
  }, []);

  // --------------------------------------------------------------
  // 3. DEPARTMENT TABS
  // --------------------------------------------------------------
  const departments = [
    { id: "all", label: "All" },
    { id: "IT & Analytics", label: "IT & Analytics" },
    { id: "Finance & Accounting", label: "Finance & Accounting" },
    { id: "General Management", label: "Strategy & General Management" },
    { id: "Economics & Public Policy", label: "Economics & Public Policy" },
    { id: "HRM", label: "Human Resource" },
    { id: "Marketing", label: "Marketing" },
    { id: "Operations Management", label: "Operations Management" },
  ];

  // --------------------------------------------------------------
  // 4. FILTER LOGIC
  // --------------------------------------------------------------
  const filteredFaculty = facultyData.filter((faculty) => {
    const fullText = `${faculty.prof_prefix || ""} ${faculty.prof_name || ""} ${
      faculty.prof_designation || ""
    } ${faculty.prof_functional_area || ""}`
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .trim();

    const search = searchQuery
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .trim();

    const currentDeptNormalized = currentDept.toLowerCase().trim();

    const searchWords = search.split(/\s+/).filter(Boolean);
    const matchesSearch = searchWords.every((w) => fullText.includes(w));

    const deptMatch =
      currentDept === "all" ||
      faculty.prof_functional_area
        ?.toLowerCase()
        .includes(currentDeptNormalized);

    return matchesSearch && deptMatch;
  });

  // --------------------------------------------------------------
  // 5. RENDER
  // --------------------------------------------------------------
  return (
    <>
      {/* ------------------------------------------------------- */}
      {/* GLOBAL STYLES (copy-paste from your original) */}
      {/* ------------------------------------------------------- */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .faculty-hero {
          background: url("/media/banners/faculty.webp") center/cover no-repeat !important;
          position: relative;
          height: 60vh;
        }
        .faculty-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
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
          width: 100%;
          height: 370px;
          object-fit: cover;
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
          color: #ffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
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
          color: #000;
        }
        .spinner-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40vh;
        }
      `,
        }}
      />

      {/* HERO */}
      <section className="faculty-section pgdm-course">
        <div className="faculty-hero text-center text-white py-5">
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">
            Faculties of IMT HYDERABAD
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            A collective of experts shaping tomorrow’s management thinkers.
            <br />
            Diverse, dynamic, and deeply committed to quality learning outcomes.
          </p>
        </div>

        {/* BREADCRUMB */}
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
                  IMT HYDERABAD FACULTIES
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section className="container my-5 faculty-tabs">
        {/* SEARCH */}
        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control rounded-start-pill small-placeholder"
                placeholder="Search faculty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="input-group-text bg-warning text-dark border-0 rounded-end-pill">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>

        {/* DEPARTMENT TABS */}
        <ul className="nav nav-pills justify-content-center mb-4" id="deptTabs">
          {departments.map((dept) => (
            <li className="nav-item mx-1 py-2" key={dept.id}>
              <button
                className={`nav-link ${
                  currentDept === dept.id ? "active" : ""
                }`}
                onClick={() => setCurrentDept(dept.id)}
              >
                {dept.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CONTENT */}
        {loading ? (
          <div className="spinner-wrapper">
            <div
              className="spinner-border text-warning"
              role="status"
              style={{ width: "4rem", height: "4rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <p className="text-center text-danger">{error}</p>
        ) : (
          <div className="row g-4" id="facultyGrid">
            {filteredFaculty.map((faculty, index) => (
              <div
                className="col-sm-6 col-lg-4 faculty-card-wrap"
                key={faculty.fd_id}
                data-aos="fade-up"
                data-aos-delay={100 + (index % 12) * 100}
              >
                <div className="card faculty-card shadow h-100 p-3 text-center">
                  <Link href={`/faculty/${faculty.page_slug}`}>
                    <Image
                      src={faculty.prof_image}
                      alt={faculty.prof_name}
                      className="faculty-img img-fluid mb-3"
                      width={370}
                      height={370}
                    />
                  </Link>

                  <h5 className="fw-bold">
                    {faculty.prof_prefix} {faculty.prof_name}
                  </h5>
                  <p className="text-muted">{faculty.prof_designation}</p>
                  <p className="small text-secondary">
                    {faculty.prof_functional_area}
                  </p>

                  <div>
                    {faculty.prof_linkedin && (
                      <Link
                        href={faculty.prof_linkedin}
                        target="_blank"
                        className="social-icon me-2"
                      >
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    )}
                    {faculty.prof_email && (
                      <Link
                        href={`mailto:${faculty.prof_email}`}
                        className="social-icon"
                      >
                        <i className="bi bi-envelope"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NO RESULTS */}
        {!loading && filteredFaculty.length === 0 && (
          <div className="card mt-3">
            <p className="text-center fw-bold text-danger mt-4">
              Sorry, No Such Record Found.
            </p>
          </div>
        )}
      </section>
    </>
  );
} 

