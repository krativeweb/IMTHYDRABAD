"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import axios from "axios";
// -------------------------------------------------
// Helper – extract <li> text from an HTML string
// -------------------------------------------------
const extractListItems = (htmlString) => {
  if (!htmlString) return [];
  const div = document.createElement("div");
  div.innerHTML = DOMPurify.sanitize(htmlString);
  return Array.from(div.querySelectorAll("li"))
    .map((li) => li.textContent?.trim())
    .filter(Boolean);
};

// -------------------------------------------------
// Helper – education + service (both live inside the same HTML block)
// -------------------------------------------------
const parseEducationAndService = (htmlString) => {
  const education = [];
  const service = [];

  if (!htmlString) return { education, service };

  const div = document.createElement("div");
  div.innerHTML = DOMPurify.sanitize(htmlString);

  const eduUl = div.querySelector("#menu5 ul");
  const srvUl = div.querySelector("#menu6 ul");

  // ----- Education -----
  if (eduUl) {
    eduUl.querySelectorAll("li").forEach((li) => {
      const txt = li.textContent?.trim();
      if (txt) {
        // Example: "Ph.D. from Aligarh Muslim University, Aligarh, India (2012 – 2014)"
        const m = txt.match(/(.+?)\s*from\s*(.+?)\s*\((.+?)\)/);
        if (m) {
          education.push({
            degree: m[1].trim(),
            institution: m[2].trim(),
            years: m[3].trim(),
          });
        } else {
          education.push({ degree: txt, institution: "", years: "" });
        }
      }
    });
  }

  // ----- Service -----
  if (srvUl) {
    srvUl.querySelectorAll("li").forEach((li) => {
      const txt = li.textContent?.trim();
      if (txt) {
        const m = txt.match(/(.+?)\s*Assistant Professor.+?(.+?),\s*(.+)/);
        if (m) {
          service.push({
            years: m[1].trim(),
            role: "Assistant Professor",
            institution: `${m[2].trim()}, ${m[3].trim()}`,
          });
        } else {
          service.push({ years: "", role: txt, institution: "" });
        }
      }
    });
  }

  return { education, service };
};

// -------------------------------------------------
// Helper – publications (journal + conference)
// -------------------------------------------------
const parsePublications = (htmlString) => {
  const journalPapers = [];
  const conferencePapers = [];

  if (!htmlString) return { journalPapers, conferencePapers };

  const div = document.createElement("div");
  div.innerHTML = DOMPurify.sanitize(htmlString);

  const jUl = div.querySelector("#menu3 ul");
  const cUl = div.querySelector("#menu4 ul");

  jUl?.querySelectorAll("li").forEach((li) => {
    const citation = li.innerHTML.trim();
    if (citation) journalPapers.push({ citation });
  });

  cUl?.querySelectorAll("li").forEach((li) => {
    const citation = li.innerHTML.trim();
    if (citation) conferencePapers.push({ citation });
  });

  return { journalPapers, conferencePapers };
};

// -------------------------------------------------
// Helper – awards (each <p> contains "YEAR – text")
// -------------------------------------------------
const parseAwards = (htmlString) => {
  const awards = [];
  if (!htmlString) return awards;

  const div = document.createElement("div");
  div.innerHTML = DOMPurify.sanitize(htmlString);

  div.querySelectorAll("p").forEach((p) => {
    const txt = p.textContent?.trim();
    if (txt && txt.includes("–")) {
      const parts = txt.split("–");
      const year = parts[0].trim();
      const description = parts.slice(1).join("–").trim();
      if (year && description) {
        awards.push({ year, description: parse(description) });
      }
    }
  });

  return awards;
};

// -------------------------------------------------
// Component
// -------------------------------------------------
export default function FacultyProfile({ params }) {
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // -----------------------------------------------------------------
  // Fetch data
  // -----------------------------------------------------------------
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
       const res = await axios.get(
         `${process.env.NEXT_PUBLIC_BASE_URL}/faculties/${params.id}`
       );
      const data = res.data;

        // ----- Parse all HTML fields -----
        const { education, service } = parseEducationAndService(
          data.prof_education || ""
        );

        const teachingInterests = extractListItems(
          data.prof_teaching_interest || ""
        );

        // Research interests are inside the same block – take the second half
        const researchInterests = extractListItems(
          data.prof_teaching_interest || ""
        ).slice(teachingInterests.length);

        const { journalPapers, conferencePapers } = parsePublications(
          data.prof_publications || ""
        );

        const awards = parseAwards(data.prof_awards || "");

        const otherActivities = extractListItems(
          data.prof_other_activity || ""
        );

        // ----- Build the final object -----
        const formatted = {
          name: `${data.prof_prefix || ""} ${data.prof_name || ""}`.trim(),
          designation: data.prof_designation || "",
          qualification: data.prof_qualification || "",
          functionalArea: data.prof_functional_area || "",
          dateOfJoining: new Date(data.joining_date)
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
            .replace(/ /g, " "),
          email: data.prof_email || "",
          phone:
            `+91 ${data.prof_mobile?.replace(/(\d{5})(\d{5})/, "$1 $2")}` || "",
          image: data.prof_image || "",
          qrCode: `${data.prof_qrcode}`,
          brief: parse(
            DOMPurify.sanitize(
              (data.prof_description || "")
                .replace(/\\u003C/g, "<")
                .replace(/\\u003E/g, ">")
            )
          ),
          education,
          teachingInterests,
          researchInterests,
          journalPapers,
          conferencePapers,
          awards,
          service,
          otherActivities,
          social: {
            linkedin: data.prof_linkedin || "",
            website: data.prof_website || "",
            scholar: data.prof_scholar_link || "",
            researchGate: data.prof_research_gate || "",
          },
        };

        setFaculty(formatted);
      } catch (err) {
        setError(err.message);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [params.id]);

  // -----------------------------------------------------------------
  // Initialise AOS (optional – keep if you already use it)
  // -----------------------------------------------------------------
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000, once: true });
      });
    }
  }, []);

  // -----------------------------------------------------------------
  // Loading UI
  // -----------------------------------------------------------------
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !faculty) return null; // 404 already triggered

  // -----------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------
  return (
    <>
      {/* ------------------------------------------------- CSS ------------------------------------------------- */}
      <style jsx global>{`
        .faculty-hero {
          background: url("/media/banners/faculty.webp") !important;
          background-size: cover !important;
          height: 60vh;
          position: relative;
            background-position: center !important;
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
        .faculty-hero h2,
        .faculty-hero p {
          position: relative;
          z-index: 1;
        }
        .faculty-card {
          background: #f8f9fa;
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
          color: #fff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
          transform: translateY(-3px);
        }
        .nav-pills .nav-link {
          border-radius: 50rem;
          background: #e9ecef;
          color: #333;
        }
        .nav-pills .nav-link.active {
          background: #ffc107;
          color: #000;
        }
      `}</style>

      {/* ------------------------------------------------- Google Tag Manager ------------------------------------------------- */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* ------------------------------------------------- Hero ------------------------------------------------- */}
      <section className="faculty-section">
        <div className="faculty-hero text-center text-white py-5">
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">
            Our Inspiring Faculties
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            Meet the mentors shaping the future
          </p>
        </div>

        {/* ------------------------------------------------- Breadcrumb ------------------------------------------------- */}
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
                <li className="breadcrumb-item">
                  <Link
                    href="/faculty"
                    className="text-white fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    Faculty
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  {faculty.name}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ------------------------------------------------- Profile Card ------------------------------------------------- */}
        <div className="container mt-5">
          <div
            className="row faculty-card shadow-lg p-4 rounded-4 align-items-center g-4"
            data-aos="fade-up"
          >
            {/* Photo */}
            <div className="col-lg-3 col-md-4 text-center">
              <Image
                src={faculty.image}
                alt={faculty.name}
                className="img-fluid rounded-4 faculty-img shadow-sm"
                width={310}
                height={310}
                style={{ maxHeight: "310px", objectFit: "cover" }}
              />
            </div>

            {/* Details */}
            <div className="col-lg-6 col-md-8">
              <h3
                className="fw-bold mb-3"
                style={{ color: "rgb(22, 57, 119)" }}
              >
                <i>{faculty.name}</i>
              </h3>
              <ul className="list-unstyled mb-4">
                <li>
                  <strong>Designation:</strong> {faculty.designation}
                </li>
                <li>
                  <strong>Qualification:</strong> {faculty.qualification}
                </li>
                <li>
                  <strong>Functional Area:</strong> {faculty.functionalArea}
                </li>
                <li>
                  <strong>Date of Joining:</strong> {faculty.dateOfJoining}
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <Link
                    href={`mailto:${faculty.email}`}
                    className="link-primary"
                  >
                    {faculty.email}
                  </Link>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <Link
                    href={`tel:${faculty.phone.replace(/\s/g, "")}`}
                    className="link-primary"
                  >
                    {faculty.phone}
                  </Link>
                </li>
              </ul>

              {/* Social Icons (only render when a link exists) */}
                  <div className="d-flex gap-3">
                {/* LinkedIn */}
                <Link
                  href={faculty?.social?.linkedin?.trim() || "#"}
                  className={`social-icon ${
                    !faculty?.social?.linkedin ? "disabled-icon" : ""
                  }`}
                  target={faculty?.social?.linkedin ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>

                {/* Website */}
                <Link
                  href={faculty?.social?.website?.trim() || "#"}
                  className={`social-icon ${
                    !faculty?.social?.website ? "disabled-icon" : ""
                  }`}
                  target={faculty?.social?.website ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe"></i>
                </Link>

                {/* Google Scholar */}
                <Link
                  href={faculty?.social?.scholar?.trim() || "#"}
                  className={`social-icon ${
                    !faculty?.social?.scholar ? "disabled-icon" : ""
                  }`}
                  target={faculty?.social?.scholar ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-google"></i>
                </Link>

                {/* ResearchGate */}
                <Link
                  href={faculty?.social?.researchGate?.trim() || "#"}
                  className={`social-icon ${
                    !faculty?.social?.researchGate ? "disabled-icon" : ""
                  }`}
                  target={faculty?.social?.researchGate ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-search"></i>
                </Link>

                {/* Anthropic (optional) */}
                <Link
                  href={faculty?.social?.anthropic?.trim() || "#"}
                  className={`social-icon ${
                    !faculty?.social?.anthropic ? "disabled-icon" : ""
                  }`}
                  target={faculty?.social?.anthropic ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-anthropic"></i>
                </Link>
              </div>
            </div>

            {/* QR Code */}
            <div className="col-lg-3 text-center">
              <Image
                src={faculty.qrCode}
                alt="QR Code"
                className="img-fluid"
                width={240}
                height={240}
                style={{ maxWidth: "240px" }}
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------- Tabs ------------------------------------------------- */}
        <div className="container my-5">
          <div className="faculty-tabs mt-4">
            {/* Nav Pills */}
            <ul
              className="nav nav-pills justify-content-center flex-wrap gap-2 mb-4"
              id="facultyTab"
              role="tablist"
            >
              {[
                "Brief",
                "Education",
                "Teaching & Research Interests",
                "Publications",
                "Awards & Honors",
                "Service",
                "Other Professional Activities",
              ].map((tab, i) => (
                <li className="nav-item" key={i}>
                  <button
                    className={`nav-link ${i === 0 ? "active" : ""}`}
                    id={`${tab
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/\s/g, "-")}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${tab
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/\s/g, "-")}`}
                    type="button"
                    role="tab"
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>

            {/* Tab Content */}
            <div className="tab-content p-4 rounded-4 shadow-sm bg-light">
              {/* Brief */}
              <div
                className="tab-pane fade show active"
                id="brief"
                role="tabpanel"
              >
                <div>{faculty.brief}</div>

                {/* Icon Section */}
                <div className="d-flex gap-3 mt-3 flex-wrap">
                  {[
                    { icon: "bi bi-instagram" },
                    { icon: "bi bi-twitter-x" },
                    { icon: "fas fa-globe" },
                    { icon: "bi bi-stripe" },
                    { icon: "fa-regular fa-lightbulb" },
                    { icon: "fa-regular fa-square-minus" },
                    {
                      icon: "fa-solid fa-a mx-1",
                      secondIcon: "fa-solid fa-x me-1",
                    },
                    {
                      icon: "fa-solid fa-b mx-1",
                      secondIcon: "fa-solid fa-r me-1",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#!"
                      onClick={(e) => e.preventDefault()} // prevent reload
                      className="social-icon rounded-0"
                    >
                      <i className={social.icon}></i>
                      {social.secondIcon && (
                        <i className={social.secondIcon}></i>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="tab-pane fade" id="education" role="tabpanel">
                <h5>
                  <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                    Education
                  </span>
                </h5>
                <ul className="list-group list-group-flush mt-3">
                  {faculty.education.map((edu, i) => (
                    <li className="list-group-item" key={i}>
                      <strong>{edu.degree}</strong> – {edu.institution} (
                      {edu.years})
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teaching & Research Interests */}
              <div
                className="tab-pane fade"
                id="teaching-research-interests"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <h5>
                      <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                        Teaching Interests
                      </span>
                    </h5>
                    <ul className="mt-3">
                      {faculty.teachingInterests.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                        Research Interests
                      </span>
                    </h5>
                    <ul className="mt-3">
                      {faculty.researchInterests.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Publications */}
              <div className="tab-pane fade" id="publications" role="tabpanel">
                <ul className="nav nav-pills mb-3">
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      id="journals-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#journals"
                    >
                      Journal Papers
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="conferences-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#conferences"
                    >
                      Conference Presentations
                    </button>
                  </li>
                </ul>

                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="journals"
                    role="tabpanel"
                  >
                    <ul className="list-group list-group-flush">
                      {faculty.journalPapers.map((p, i) => (
                        <li
                          className="list-group-item"
                          key={i}
                          dangerouslySetInnerHTML={{ __html: p.citation }}
                        />
                      ))}
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="conferences"
                    role="tabpanel"
                  >
                    <ul className="list-group list-group-flush">
                      {faculty.conferencePapers.map((p, i) => (
                        <li
                          className="list-group-item"
                          key={i}
                          dangerouslySetInnerHTML={{ __html: p.citation }}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Awards & Honors */}
              <div className="tab-pane fade" id="awards-honors" role="tabpanel">
                <ul className="list-group list-group-flush">
                  {faculty.awards.map((a, i) => (
                    <li className="list-group-item" key={i}>
                      <strong>{a.year} –</strong> {a.description}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service */}
              <div className="tab-pane fade" id="service" role="tabpanel">
                <h5>
                  <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                    Service
                  </span>
                </h5>
                <ul className="list-group list-group-flush mt-3">
                  {faculty.service.map((s, i) => (
                    <li className="list-group-item" key={i}>
                      {s.years}: {s.role}, {s.institution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Professional Activities */}
              <div
                className="tab-pane fade"
                id="other-professional-activities"
                role="tabpanel"
              >
                <h5>
                  <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                    Other Professional Activities
                  </span>
                </h5>
                <ul className="list-group list-group-flush mt-3">
                  {faculty.otherActivities.map((act, i) => (
                    <li className="list-group-item" key={i}>
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
