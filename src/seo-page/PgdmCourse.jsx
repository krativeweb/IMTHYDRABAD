"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Faculties from "@/seo-page/FacultiesClient";
// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default function PGDMProgramsSection() {
  // Initialize AOS
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }, []);

  // Faculty filtering state
  const [currentDept, setCurrentDept] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const facultyData = [
    {
      dept: "general-management",
      name: "Prof (Dr) AHMAD FARAZ KHAN",
      title: "ASSOCIATE PROFESSOR",
      img: "/media/faculties/1.webp",
      email: "ananya@imt.edu",
    },
    {
      dept: "general-management",
      name: "Prof (Dr) Aindrila Chatterjee",
      title: "Assistant Professor",
      img: "/media/faculties/2.webp",
      email: "ravi@imt.edu",
    },
    {
      dept: "human-resource",
      name: "Prof (Dr) Akhila Veldandi",
      title: "Assistant Professor",
      img: "/media/faculties/3.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "general-management",
      name: "Prof Basit Abdullah",
      title: "Faculty Associate",
      img: "/media/faculties/3.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "marketing",
      name: "Prof Dhananjay Singh",
      title: "Adjunct Faculty",
      img: "/media/faculties/4.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "it-analytics",
      name: "Prof (Dr) Indranil Ghosh",
      title: "Assistant Professor & Area Chairperson",
      img: "/media/faculties/5.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "general-management",
      name: "Prof (Dr) Irfan Ahmad Shah",
      title: "Assistant Professor",
      img: "/media/faculties/6.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "general-management",
      name: "Prof (Dr) K M Baharul Islam",
      title: "Director & Professor",
      img: "/media/faculties/7.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "operations-management",
      name: "Prof (Dr) Kalyana C Chejarla",
      title: "Associate Professor",
      img: "/media/faculties/8.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "human-resource",
      name: "Prof (Dr) Kiranmai Dutt Pendyala",
      title: "Adjunct Faculty",
      img: "/media/faculties/8.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "marketing",
      name: "Prof (Dr) Mahesh Ramalingam",
      title: "Associate Professor & Area Chairperson",
      img: "/media/faculties/9.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "human-resource",
      name: "Prof (Dr) Mamata Vegunta",
      title: "Adjunct Faculty",
      img: "/media/faculties/10.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "human-resource",
      name: "Prof (Dr) Musarrat Shaheen",
      title: "Assistant Professor",
      img: "/media/faculties/11.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "finance-accounting",
      name: "Prof (Dr) Nikhil Rastogi",
      title: "Professor",
      img: "/media/faculties/12.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "marketing",
      name: "Prof (Dr) Nitin Gupta",
      title: "Professor",
      img: "/media/faculties/13.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "marketing",
      name: "Prof (Dr) Pranay Sindhu",
      title: "Assistant Professor",
      img: "/media/faculties/14.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "operations-management",
      name: "Prof (Dr) Puram Praveen",
      title: "Assistant Professor",
      img: "/media/faculties/15.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "finance-accounting",
      name: "Prof (Dr) Purnima Khemani",
      title: "Assistant Professor",
      img: "/media/faculties/16.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "operations-management",
      name: "Prof (Dr) Pushpesh Pant",
      title: "Assistant Professor",
      img: "/media/faculties/17.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "finance-accounting",
      name: "Prof Rohan Kumar Mishra",
      title: "Faculty Associate",
      img: "/media/faculties/18.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "human-resource",
      name: "Prof (Dr) Romina Mathew",
      title: "Professor & Area Chairperson",
      img: "/media/faculties/19.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "human-resource",
      name: "Prof (Dr) Rona Elizabeth Kurian",
      title: "Assistant Professor",
      img: "/media/faculties/20.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "it-analytics",
      name: "Prof Sachin Choubey",
      title: "Faculty Associate",
      img: "/media/faculties/21.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "operations-management",
      name: "Prof (Dr) Sanchari Guha Niyogi",
      title: "Assistant Professor",
      img: "/media/faculties/22.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "finance-accounting",
      name: "Prof (Dr) Sarath Babu",
      title: "Associate Professor & AREA CHAIRPERSON",
      img: "/media/faculties/23.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "marketing",
      name: "Mr Sathish Kumar Kannan",
      title: "Adjunct Faculty",
      img: "/media/faculties/24.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "marketing",
      name: "Prof (Dr) Shaon Sen",
      title: "Assistant Professor",
      img: "/media/faculties/25.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "general-management",
      name: "Prof (Dr) Sivadasan T. M",
      title: "Assistant Professor",
      img: "/media/faculties/26.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "operations-management",
      name: "Prof (Dr) Sourabh Bhattacharya",
      title: "Professor & Area Chairperson",
      img: "/media/faculties/27.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "operations-management",
      name: "Prof (Dr) Sricharan Chirra",
      title: "Assistant Professor",
      img: "/media/faculties/28.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "finance-accounting",
      name: "Prof (Dr) Sriharsha Reddy K",
      title: "Dean (New Initiatives) & Professor",
      img: "/media/faculties/29.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "general-management",
      name: "Prof (Dr) Steven Raj Padakandla",
      title: "Associate Professor, Area Chairperson & Chairperson PGP",
      img: "/media/faculties/30.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "it-analytics",
      name: "Prof (Dr) Surajit Ghosh Dastidar",
      title: "Associate Professor",
      img: "/media/faculties/31.webp",
      email: "sneha@imt.edu",
    },
    // Commented-out faculty as per original HTML
    // {
    //   dept: "marketing",
    //   name: "Prof (Dr) Swetarupa Chatterjee",
    //   title: "Assistant Professor",
    //   img: "/1709019294_swetarupa.jpeg",
    //   email: "sneha@imt.edu",
    // },
    // {
    //   dept: "general-management",
    //   name: "Prof (Dr) Tulika Sharma",
    //   title: "Assistant Professor",
    //   img: "/1672639140_f36.jpeg",
    //   email: "sneha@imt.edu",
    // },
    {
      dept: "finance-accounting",
      name: "Prof (Dr) Venkata Chaturvedula C",
      title: "Professor",
      img: "/media/faculties/32.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "operations-management",
      name: "Prof (Dr) Vinay Kumar Kalakbandi",
      title: "Associate Professor & Associate Dean (Accreditation & Ranking)",
      img: "/media/faculties/33.webp",
      email: "sneha@imt.edu",
    },
    {
      dept: "marketing",
      name: "Prof Vinod Kumar A",
      title: "Adjunct Faculty",
      img: "/media/faculties/34.webp",
      email: "sneha@imt.edu",
    },
  ];

  const filterFaculty = () => {
    const filtered = facultyData.filter((faculty) => {
      const matchDept = currentDept === "all" || faculty.dept === currentDept;
      const matchName = faculty.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchDept && matchName;
    });
    return filtered;
  };

  const filteredFaculty = filterFaculty();

  // Owl Carousel options
  const carouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* General Table Styles */
      .table thead th {
        background-color: #08317a !important;
        color: #fff;
        font-weight: 600;
      }
      .table td {
        vertical-align: middle;
      }
      .table a.btn {
        background-color: #ffc107;
        color: #000;
        border: none;
        transition: all 0.3s ease;
      }
      .table a.btn:hover {
        background-color: #e0a800;
        color: #fff;
      }

      /* Faculty Hero */
.faculty-hero-pgdm {
  background: url("/media/banners/pgdm.webp") center/cover no-repeat !important;
  position: relative;
  height: 60vh;
}
.faculty-hero-pgdm::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}
      .faculty-hero-pgdm h2,
      .faculty-hero-pgdm p {
        position: relative;
        z-index: 1;
      }
      .faculty-hero-pgdm h2 {
        margin-top: 150px;
      }

      /* Faculty Card */
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
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000000ff !important;
      }
      .faculty-tabs .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #333;
        transition: all 0.3s;
      }

      /* Tabs Styles */
      .tabs-container {
        padding: 1.5rem;
        border-radius: 12px;
        margin-bottom: 2rem;
      }
      .tab-button {
        border: none;
        border-radius: 50px;
        padding: 12px 28px;
        margin: 0 8px 12px;
        color: #000;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
      }
      .tab-button:hover {
        background: #d0d0d0;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      .tab-button.active {
        background: #ffc107;
        color: #000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      .tab-content {
        background: white;
        border-radius: 12px;
        padding: 2.5rem;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        border: 1px solid #eee;
      }

      /* Content Styles */
      .content-section h4 {
        color: #004a80;
        margin-bottom: 1.5rem;
        padding-bottom: 0.8rem;
        border-bottom: 2px solid #e9ecef;
      }
      .content-section h5 {
        color: #0066cc;
        margin: 1.5rem 0 1rem;
      }

      /* Specialization Cards */
      .specialization-card {
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        height: 100%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      }
      .specialization-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
      }
      .specialization-card h5 {
        background: #004a80;
        color: white;
        padding: 12px;
        margin: 0;
        border-radius: 10px 10px 0 0;
      }
      .specialization-card ul {
        padding: 1.5rem;
        list-style-type: none;
      }
      .specialization-card li {
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;
      }
      .specialization-card li:before {
        content: "•";
        color: #004a80;
        font-weight: bold;
        font-size: 24px;
        position: absolute;
        left: 0;
      }

      /* Program Structure Tables */
      .program-structure-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
      }
      .program-structure-table th {
        background-color: #004a80;
        color: white;
        padding: 12px 15px;
        text-align: left;
      }
      .program-structure-table td {
        padding: 10px 15px;
        border-bottom: 1px solid #e0e0e0;
      }
      .program-structure-table tr:last-child td {
        border-bottom: none;
      }

      /* Accordion Styles */
      .accordion-button {
        background: #f8f9fa;
        font-weight: 600;
        color: #004a80;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        margin-bottom: 8px;
      }
      .accordion-button:not(.collapsed) {
        background: #e9f0fa;
        color: #004a80;
        box-shadow: none;
      }
      .accordion-item {
        border: none;
        border-radius: 8px;
        margin-bottom: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }

      /* Placements Section */
      .placement-card {
        text-align: center;
        padding: 1.5rem;
        border-radius: 10px;
        background: #f8f9fa;
        transition: all 0.3s ease;
      }
      .placement-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
      .placement-card h6 {
        color: #004a80;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      .placement-card h2 {
        font-size: 2.2rem;
        color: #0066cc;
        margin: 0;
        font-weight: 700;
      }

      /* Video Carousel Section */
      .video-carousel-section {
        background: #163977;
      }
      .video-wrapper {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .video-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
      }
      .video-wrapper iframe:hover {
        transform: scale(1.03);
      }
      .owl-carousel .owl-nav button.owl-prev,
      .owl-carousel .owl-nav button.owl-next {
        position: absolute;
        top: 40%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 50%;
      }
      .owl-carousel .owl-nav button.owl-prev {
        left: -25px;
      }
      .owl-carousel .owl-nav button.owl-next {
        right: -25px;
      }
      .owl-theme .owl-dots .owl-dot {
        display: inline-block;
        zoom: 1;
      }
      .owl-carousel .owl-nav button.owl-next,
      .owl-carousel .owl-nav button.owl-prev,
      .owl-carousel button.owl-dot {
        background: 0 0;
        color: white;
        border: none;
        padding: 0 !important;
        font: inherit;
        background-color: #163977 !important;
      }

      .mx-1 {
        margin-top: 9px;
      }
        .pgdm-course{
        display:none;
        }

      @media (max-width: 768px) {
        .tab-button {
          width: 100%;
          max-width: 280px;
          margin: 0.5rem auto;
        }
        .tabs-container {
          padding: 1rem;
        }
        .tab-content {
          padding: 1.5rem;
        }
        .placement-card {
          margin-bottom: 1.5rem;
        }
      }


      @media (max-width: 576px) {
        .tab-button {
          width: 100%;
          max-width: 100%;
        }
        .section-header h1 {
          font-size: 2rem;
        }
        .tab-content {
          padding: 1.5rem;
        }
      }

    `,
        }}
      />

      {/* Top Banner */}
      <div
        className="faculty-hero-pgdm text-center text-white py-5"
        data-aos="fade-up"
      >
        <h2 className="display-5 fw-bold mb-2">About-PGDM-Programs</h2>
        <p className="text-white">
          A program built for dynamic business leadership. <br />
          Our PGDM equips students with analytical depth, strategic agility, and
          ethical grounding for a rapidly evolving world.
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
                About-PGDM-Programs
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container py-3">
        <div className="section-header">
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            About-PGDM-Programs
          </h2>
        </div>
        <section id="executive-education" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="card p-4">
              <h2
                className="section-title text-center"
                style={{ color: "#08317a" }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Introduction
              </h2>
              <div className="row justify-content-center mt-3">
                <div className="col-lg-12 text-justify">
                  <p>
                    IMT Hyderabad, a leading B School in India, offers programs
                    in the area of Management at post graduate level and
                    doctorial level. IMT Hyderabad is accredited by South Asian
                    Quality Systems (SAQS) & National Board of Accreditation
                    (NBA) and committed to nurture socially responsible business
                    leaders through quality management education.
                  </p>
                  <p>
                    Excellence, innovation and responsible leadership have
                    always remained basic tenets guiding all the processes at
                    IMT Hyderabad. The mission of IMT Hyderabad is to promote
                    academic excellence, to enhance industry readiness through
                    learner centric pedagogy and industry inspired curriculum
                    and to instill social conscientiousness.
                  </p>
                  <p>
                    Industry relevant curriculum, participant centered learning,
                    practitioner sessions, long duration internship program,
                    International student exchange program, global immersion,
                    social immersion, community connect, leadership series,
                    psychometric assessment, wide range of elective choices are
                    some of the salient features of curriculum design at IMT
                    Hyderabad. In pursuit of academic excellence, IMT Hyderabad
                    provides curricular and extracurricular inputs through live
                    projects, simulations, showcases, industrial visits,
                    skillathons, leadership lab, sports fest, management fest,
                    debate clubs, cultural clubs and many more.
                  </p>
                  <h5 style={{ color: "#08317a" }}>
                    Program Education Objectives (PEOs)
                  </h5>
                  <ul>
                    <li>
                      <b>PO1:</b> Apply knowledge of management theories and
                      practices to analyze and solve business problems
                      effectively.
                    </li>
                    <li>
                      <b>PO2:</b> Foster analytical and critical thinking
                      abilities for data-driven decision-making.
                    </li>
                    <li>
                      <b>PO3:</b> Develop value-based leadership abilities to
                      lead individuals and teams ethically and effectively.
                    </li>
                    <li>
                      <b>PO4:</b> Understand, analyze, and communicate global,
                      economic, legal, and ethical aspects of business.
                    </li>
                    <li>
                      <b>PO5:</b> Lead self and others in achieving
                      organizational goals while contributing effectively in a
                      team environment.
                    </li>
                    <li>
                      <b>PO6:</b> Develop responsible and sustainable business
                      strategies with due consideration of all key stakeholders.
                    </li>
                  </ul>

                  <h5 style={{ color: "#08317a" }}>Program Goals</h5>
                  <ul>
                    <li>
                      <strong>CG1: Business Acumen:</strong>
                      Graduating students should demonstrate proficiency in
                      applying core business concepts and integrate knowledge
                      from various business disciplines to analyze and solve
                      global business challenges.
                    </li>
                    <li>
                      <strong>CG2: Leadership:</strong>
                      Graduating students should have the capacity to lead and
                      inspire others and the capability to make strategic
                      decisions.
                    </li>
                    <li>
                      <strong>CG3: Responsibility:</strong>
                      Graduating students should be committed to responsible and
                      sustainable business practices that balance stakeholder
                      priorities.
                    </li>
                  </ul>

                  <p>
                    The PGDM program structure is based on the trimester system,
                    where each trimester is on an average of 12 weeks. The
                    intervening period between the first and second year is the
                    summer term of about 12 weeks duration. During the summer
                    term students can opt for Internship (IP) or Student
                    Exchange Program (SEP) or pursue management thesis and
                    seminars (MTS). MTS is designed for those who want to build
                    a career in research fields.
                  </p>
                  <p>
                    The PGDM Programs at IMT Hyderabad address the varied
                    aspirations of the students by offering a large variety of
                    electives. It follows the cafeteria approach wherein a
                    student has the flexibility to choose electives based on
                    their career aspirations. All the PGDM students are required
                    to take 12 elective courses in addition to 3 core elective
                    course. First year course are common for all the programs
                    and the elective courses are offered in the second year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Tabs Navigation */}
      <section className="py-4">
        <div className="container">
          <div className="tabs-container">
            <ul
              className="nav nav-pills justify-content-center flex-wrap"
              id="pgdmTabs"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="tab-button active"
                  id="leap-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#leap"
                  type="button"
                  role="tab"
                  aria-controls="leap"
                  aria-selected="true"
                >
                  Programs Uniqueness: LEAP
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="tab-button"
                  id="specializations-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#specializations"
                  type="button"
                  role="tab"
                  aria-controls="specializations"
                  aria-selected="false"
                >
                  Specializations
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="tab-button"
                  id="structure-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#structure"
                  type="button"
                  role="tab"
                  aria-controls="structure"
                  aria-selected="false"
                >
                  Program Structure
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="tab-button"
                  id="calendar-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#calendar"
                  type="button"
                  role="tab"
                  aria-controls="calendar"
                  aria-selected="false"
                >
                  Academic Calendar
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="tab-button"
                  id="placements-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#placements"
                  type="button"
                  role="tab"
                  aria-controls="placements"
                  aria-selected="false"
                >
                  Placements
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="tab-button"
                  id="faculty-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#faculty"
                  type="button"
                  role="tab"
                  aria-controls="faculty"
                  aria-selected="false"
                >
                  Faculty
                </button>
              </li>
            </ul>
          </div>

          {/* Tab Content */}
          <div className="tab-content" id="pgdmTabContent">
            {/* LEAP Tab */}
            <div
              className="tab-pane fade show active"
              id="leap"
              role="tabpanel"
              aria-labelledby="leap-tab"
            >
              <div className="content-section">
                <h4>Leadership Engagement & Academic Program (LEAP)</h4>
                <p>
                  LEAP is a value-added Business Leadership Program offered by
                  IMTH to all the students in line with its' vision of{" "}
                  <b>nurturing socially responsible business leaders</b>. LEAP
                  is embedded in the existing program architecture offered by
                  IMTH. The purpose of LEAP is to nurture communication skills,
                  cognitive & interpersonal skills, contemporary digital skills
                  and develop business acumen & social consciousness among
                  students of IMTH. LEAP outcomes are achieved through select
                  core & elective courses, labs, workshops, social immersion,
                  projects, leadership series & symposium and one to one
                  coaching by industry mentors.
                </p>
                <div className="accordion" id="leapAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        One to One Mentoring by Industry Leaders
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#leapAccordion"
                    >
                      <div className="accordion-body">
                        Industry Mentor Mentee Program (IM2P) is initiated by
                        IMTH to enhance industry readiness and nurture business
                        leadership among students. Industry mentors will help
                        students to hone their interpersonal skills, critical
                        thinking and problem-solving skills in real situations.
                        Through this program, final year students will be able
                        to appreciate roles, responsibilities, and challenges of
                        a particular career path in specific industry.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Global Immersion
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#leapAccordion"
                    >
                      <div className="accordion-body">
                        Students will be given opportunity to pursue global
                        immersion programs with IMT Dubai and 44+ partner
                        institutes across continents for a duration of one week
                        to a trimester.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Hands on Workshops in Emerging Areas
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#leapAccordion"
                    >
                      <div className="accordion-body">
                        IMTH offers hands on workshops during first year of the
                        program in the emerging areas such as programming using
                        python, blockchain technologies, advanced spreadsheet
                        modelling, personal branding, leadership lab, creativity
                        innovation workshop and design thinking.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Distinguished Speaker Series
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#leapAccordion"
                    >
                      <div className="accordion-body">
                        CXOs from leading corporates are invited to share their
                        business building experience with students and update
                        them about the happenings in the corporate world.
                        Students learn about the challenges that these leaders
                        had to face while achieving their goal, which gives them
                        the motivation to think out-of the box solutions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Industry Immersion
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#leapAccordion"
                    >
                      <div className="accordion-body">
                        During the intervening summer term between the first and
                        second years, students undergo a 12 week
                        faculty-supervised internship in an organization to
                        apply the knowledge they have acquired during the first
                        year of their program and bridge the perceived gap
                        between theory and practice. The IP enables students to
                        experience the rigors of the professional environment,
                        both in terms of form and substance. It provides them
                        with opportunities to learn and practice business
                        knowledge and professional behavior.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Social Immersion
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#leapAccordion"
                    >
                      <div className="accordion-body">
                        The community outreach initiatives at IMT Hyderabad
                        started off in 2011 by PAHEL a volunteer student cell.
                        The Community Connect Cell was established in 2018, with
                        the objective of sensitizing the students towards the
                        society so as to bring about positive change in the
                        communities and address real life societal challenges.
                        The Cell has envisaged its activities under the
                        following four headings of Abhiyaan, Nirmaan, Sahayam
                        and Sambbad towards fulfilment of its Daaitva
                        (Responsibility).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specializations Tab */}
            <div
              className="tab-pane fade"
              id="specializations"
              role="tabpanel"
              aria-labelledby="specializations-tab"
            >
              <div className="content-section">
                <h4>Specializations</h4>
                <p>
                  IMT Hyderabad offers a wide range of elective courses,
                  allowing students to specialize in their area of interest.
                  Students can choose from the following domains:
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="specialization-card">
                      <h5>Strategy</h5>
                      <ul>
                        <li>International Business</li>
                        <li>Entrepreneurship Development</li>
                        <li>Managing Strategic Networks</li>
                        <li>Business Negotiation</li>
                        <li>Managing Strategic Change</li>
                        <li>Public Policy and Management</li>
                        <li>Global Markets and Geopolitics</li>
                        <li>Social and Economic Networks</li>
                        <li>
                          Special Project / Organization-Based Project in
                          Economics and Strategy
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="specialization-card">
                      <h5>Human Resource Management</h5>
                      <ul>
                        <li>Talent Planning & Acquisition</li>
                        <li>Managing Work Place</li>
                        <li>Organization Change and Development</li>
                        <li>Performance Management</li>
                        <li>Industrial Relations & Labor Laws</li>
                        <li>Learning and Development</li>
                        <li>Compensation and Benefits</li>
                        <li>Managing Across Cultures</li>
                        <li>Psychometrics and Behavioural Research</li>
                        <li>Strategic HRM</li>
                        <li>Competency Mapping and Profiling</li>
                        <li>International HRM</li>
                        <li>HR Analytics</li>
                        <li>Leadership & Organizational Effectiveness</li>
                        <li>
                          Special Project / Organization-Based Project in HRM
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="specialization-card">
                      <h5>Marketing</h5>
                      <ul>
                        <li>Services Marketing</li>
                        <li>Consumer Behavior</li>
                        <li>Brand Management</li>
                        <li>Marketing Research</li>
                        <li>Retail Management</li>
                        <li>Product Management</li>
                        <li>Social Media Marketing & Media Management</li>
                        <li>International Marketing</li>
                        <li>E-Commerce and Digital Marketing</li>
                        <li>Integrated Marketing Communication</li>
                        <li>Sales & Distribution Management</li>
                        <li>Business to Business Marketing</li>
                        <li>Marketing Analytics</li>
                        <li>Customer Relationship Management</li>
                        <li>Strategic Marketing Management</li>
                        <li>Rural Marketing</li>
                        <li>Marketing Metrics</li>
                        <li>
                          Special Project / Organization-Based Project in
                          Marketing
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="specialization-card">
                      <h5>Analytics and Information Technology</h5>
                      <ul>
                        <li>Machine Learning Algorithm using Python</li>
                        <li>Business Forecasting</li>
                        <li>Visual Analytics</li>
                        <li>Big Data Analytics</li>
                        <li>Decision Analytics</li>
                        <li>Web & Text Analytics</li>
                        <li>Block chain for Managers</li>
                        <li>Artificial Intelligence and Deep Learning</li>
                        <li>
                          Special Project / Organization-Based Project in
                          Analytics and Information Technology
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="specialization-card">
                      <h5>Finance & Accounting</h5>
                      <ul>
                        <li>Financial Derivatives</li>
                        <li>Security Analysis</li>
                        <li>Commercial Banking</li>
                        <li>Financial Services</li>
                        <li>Wealth Management</li>
                        <li>International Finance</li>
                        <li>Financial Statement Analysis</li>
                        <li>Portfolio Management</li>
                        <li>Fixed Income Securities and their Derivatives</li>
                        <li>Project Finance</li>
                        <li>Investment Banking</li>
                        <li>Risk Analytics</li>
                        <li>
                          Special Project / Organization-Based Project in
                          Finance and Accounting
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="specialization-card">
                      <h5>Operations Management</h5>
                      <ul>
                        <li>Project Management</li>
                        <li>Logistics Management</li>
                        <li>Lean Six Sigma</li>
                        <li>Service Operations Management</li>
                        <li>Supply Chain Analytics</li>
                        <li>Retail Supply Chain Management</li>
                        <li>
                          International Logistics & Supply Chain Management
                        </li>
                        <li>New Product Development</li>
                        <li>Supplier Relationship Management</li>
                        <li>Technology and Operations Strategy</li>
                        <li>Business Process Management</li>
                        <li>Multi-Criteria Decision Making</li>
                        <li>
                          Special Project / Organization-Based Project in
                          Operations Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Structure Tab */}
            <div
              className="tab-pane fade"
              id="structure"
              role="tabpanel"
              aria-labelledby="structure-tab"
            >
              <div className="content-section">
                <h4>Program Structure</h4>
                <h5>Year 1</h5>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-header bg-warning text-white">
                        Term I (July - September)
                      </div>
                      <div className="card-body">
                        <table className="program-structure-table">
                          <tbody>
                            <tr>
                              <td>Business Statistics</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Financial Accounting</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Managerial Economics</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Organizational Behavior – I</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Marketing Management – I</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Operations Management</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Workshop -1</td>
                              <td>e</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-header bg-warning text-white">
                        Term II (October – December)
                      </div>
                      <div className="card-body">
                        <table className="program-structure-table">
                          <tbody>
                            <tr>
                              <td>Data Analysis for Decision Making</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Corporate Finance - I</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Management Accounting</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Business Communication</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Organizational Behavior - II</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Marketing Management - II</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Operations Research</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Workshop -2</td>
                              <td>e</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-header bg-warning text-white">
                        Term III (January - March)
                      </div>
                      <div className="card-body">
                        <table className="program-structure-table">
                          <tbody>
                            <tr>
                              <td>Business Research Methods</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>IT for Managers</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Corporate Finance - II</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Business Environment</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Strategic Management-I</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Human Resource Management</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Supply Chain Management</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Workshop – 3</td>
                              <td>e</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-header bg-warning text-white">
                        Summer Term (April - June)
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li>Internship Program</li>
                          <li>Management Thesis & Seminar</li>
                          <li>Student Exchange Program</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="mt-5">Year 2</h5>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-header bg-warning text-white">
                        Term IV (July - September)
                      </div>
                      <div className="card-body">
                        <table className="program-structure-table">
                          <tbody>
                            <tr>
                              <td>Strategic Management-II</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Legal Aspects of Business</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Elective #1</td>
                              <td>E</td>
                            </tr>
                            <tr>
                              <td>Elective #2</td>
                              <td>e</td>
                            </tr>
                            <tr>
                              <td>Elective #3</td>
                              <td>E</td>
                            </tr>
                            <tr>
                              <td>Elective #4</td>
                              <td>E</td>
                            </tr>
                            <tr>
                              <td>Elective #5</td>
                              <td>E</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-header bg-warning text-white">
                        Term V (October – December)
                      </div>
                      <div className="card-body">
                        <table className="program-structure-table">
                          <tbody>
                            <tr>
                              <td>Ethics & CSR</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Sustainability</td>
                              <td>c</td>
                            </tr>
                            <tr>
                              <td>Elective #6</td>
                              <td>E</td>
                            </tr>
                            <tr>
                              <td>Elective #7</td>
                              <td>E</td>
                            </tr>
                            <tr>
                              <td>Elective #8</td>
                              <td>E</td>
                            </tr>
                            <tr>
                              <td>Elective #9</td>
                              <td>E</td>
                            </tr>
                            <tr>
                              <td>Management Project Commences</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-header bg-warning text-white">
                        Term VI (January - March)
                      </div>
                      <div className="card-body">
                        <table className="program-structure-table">
                          <tbody>
                            <tr>
                              <td>Elective #10</td>
                              <td>E</td>
                            </tr>
                            <tr>
                              <td>Elective #11</td>
                              <td>E</td>
                            </tr>
                            <tr>
                              <td>Elective #12</td>
                              <td>E</td>
                            </tr>
                            <tr>
                              <td>Management Project</td>
                              <td>MP</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-header bg-warning text-white">
                        Audit Courses
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li>Mock Interviews</li>
                          <li>Psychometric Assessment/Counselling Sessions</li>
                          <li>Leadership Series</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-light rounded">
                  <p>
                    <strong>Note:</strong>
                  </p>
                  <ul>
                    <li>1 Credit equals 10 classroom contact hours.</li>
                    <li>
                      C – core courses, E – elective courses, MP – Management
                      Project
                    </li>
                    <li>
                      To major in a discipline, 6 elective courses (minimum)
                      should be chosen; 4 elective courses (minimum) should be
                      chosen to minor in a discipline.
                    </li>
                    <li>
                      For PGDM (Finance) and PGDM (Marketing) students, it is
                      mandatory to choose 6 elective courses in Finance and
                      Marketing respectively.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic Calendar Tab */}
            <div
              className="tab-pane fade"
              id="calendar"
              role="tabpanel"
              aria-labelledby="calendar-tab"
            >
              <div className="content-section">
                <h4>Academic Calendar</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Academic Year</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2025 - 26</td>
                        <td>
                          <Link
                            href="https://drive.google.com/file/d/1VV-1cHqZJEfv22V_d5WEzyvPAzR8upiV/view?usp=sharing"
                            target="_blank"
                            rel="noopener"
                            className="btn btn-warning"
                          >
                            <i className="fas fa-download me-2"></i>Download
                            Calendar
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Placements Tab */}
            <div
              className="tab-pane fade"
              id="placements"
              role="tabpanel"
              aria-labelledby="placements-tab"
            >
              <div className="content-section">
                <h4>Placement Highlights</h4>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="placement-card">
                      <h6>Highest CTC</h6>
                      <h2>25 LPA</h2>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="placement-card">
                      <h6>Median CTC</h6>
                      <h2>11 LPA</h2>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="placement-card">
                      <h6>Average CTC</h6>
                      <h2>12 LPA</h2>
                    </div>
                  </div>
                </div>
                <h5 className="text-center mt-4">Average of Top Offers</h5>
                <div className="row mt-3">
                  <div className="col-md-3 mb-4">
                    <div className="placement-card">
                      <h6>Top 10</h6>
                      <h2>20.20 LPA</h2>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="placement-card">
                      <h6>Top 20</h6>
                      <h2>18.10 LPA</h2>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="placement-card">
                      <h6>Top 50</h6>
                      <h2>15.75 LPA</h2>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="placement-card">
                      <h6>Top 100</h6>
                      <h2>13.51 LPA</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Faculty Tab */}
            <div
              className="tab-pane fade"
              id="faculty"
              role="tabpanel"
              aria-labelledby="faculty-tab"
            >
              <Faculties />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Carousel Section */}
      <section className="video-carousel-section py-5">
        <div className="container-fluid">
          <h2 className="text-center fw-bold mb-4 text-warning">
            LEARN ABOUT THE PROGRAM
          </h2>
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {[
              "CMLanyWFTME",
              "QwEmFPKaA-o",
              "WtN09_qclMs?si=aqUBOfsve2WGVDVb",
              "CD_6_echnCo?si=pGMl3I8ck7OIkWDM",
              "t8KrTbNpDn0?si=h-lq-fbmDUZykP36",
              "bPrwMQ5vOFI?si=CQVYPvKuglUN0BRP",
              "DhOWt7ABkIE",
              "ycFyCZ5dREs",
              "-9I-E3pPmFE",
              "UZNqlVb_ru4",
              "iwADM_Hk1l0",
              "Ukp9r6Z0ncU",
            ].map((videoId, index) => (
              <div key={index} className="item">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}
