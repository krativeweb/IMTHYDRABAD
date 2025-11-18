"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const IndustryRelevance = () => {
  useEffect(() => {
    // Initialize AOS after mount

    // Initialize Owl Carousel if needed
    if (
      typeof window !== "undefined" &&
      window.jQuery &&
      window.jQuery.fn.owlCarousel
    ) {
      window.jQuery("#owl-demo").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1 },
          600: { items: 3 },
          1000: { items: 4 },
        },
      });
    }
  }, []);

  return (
    <div className="industry-relevance-page">
      {/* Faculty Section */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h2 className="display-5 fw-bold mb-2">Industry Relevance</h2>
            <p className="text-white">
              A campus where academia meets the pulse of industry. <br />
              Curricula shaped with industry insights ensure every graduate is
              future-ready and market-relevant.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4">
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
                  Industry Relevance
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Industry Relevance Section */}
        <section id="industry-relevance" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-5">
              <h2 className="section-title">Industry Relevance</h2>
              <p className="section-description">
                IMT Hyderabad works to deploy the offerings students need to
                acquire industry certifications and professional credits. IMT
                Hyderabad works to <strong>increase placement rates</strong> of
                graduating students with advanced training in fundamental
                skills, best practices, and emerging technologies. IMT Hyderabad
                possesses potential for greater student retention and improved
                student placement rates.
              </p>
            </div>

            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row flex-md-row-reverse align-items-center">
                  <div className="col-md-4 image-container-right">
                    <img
                      src="/media/IR/1.jpg"
                      alt="Industry Mentor-Mentee Program"
                      className="img-fluid rounded shadow clipped-img-1"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">
                      Industry Mentor - Mentee Program 2020
                    </h5>
                    <p className="card-text">
                      Industry Mentor Mentee Program (IM2P) enhances industry
                      readiness and nurtures business leadership. Mentors help
                      students develop interpersonal, critical thinking, and
                      problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row align-items-center">
                  <div className="col-md-4">
                    <img
                      src="/media/IR/2.JPG"
                      alt="Leadership Series & MOP"
                      className="img-fluid rounded shadow clipped-img-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">
                      Leadership Series & MOP
                    </h5>
                    <p className="card-text">
                      MOP prepares students from diverse backgrounds, with
                      workshops in leadership, teambuilding, and creativity.
                      Leadership series ensures interaction with business
                      leaders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row flex-md-row-reverse align-items-center">
                  <div className="col-md-4 image-container-right">
                    <img
                      src="/media/IR/3.JPG"
                      alt="Leadership Series & Practitioner Session"
                      className="img-fluid rounded shadow clipped-img-1"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">
                      Leadership Series & Practitioner&apos;s Session
                    </h5>
                    <p className="card-text">
                      Industry experts form an integral part of the curriculum.
                      15-20% of courses are delivered by practitioners.
                      Leadership series ensures regular interaction with
                      students.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row align-items-center">
                  <div className="col-md-4">
                    <img
                      src="/media/IR/4.jpg"
                      alt="Internship Program"
                      className="img-fluid rounded shadow clipped-img-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">
                      Internship Program
                    </h5>
                    <p className="card-text">
                      The 14-week intensive internship forms the core of IMT H
                      pedagogy. Faculty and company mentors supervise
                      internships, providing real-world experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row flex-md-row-reverse align-items-center">
                  <div className="col-md-4 image-container-right">
                    <img
                      src="/media/IR/5.jpeg"
                      alt="Industry-Oriented Courses"
                      className="img-fluid rounded shadow clipped-img-1"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">
                      Industry-Oriented Courses
                    </h5>
                    <p className="card-text">
                      IMT Hyderabad offers specialized elective streams like
                      Business Analytics, Investment Banking, and Digital
                      Marketing. More streams will be introduced in the future.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row align-items-center">
                  <div className="col-md-4">
                    <img
                      src="/media/IR/6.jpg"
                      alt="Management Project"
                      className="img-fluid rounded shadow clipped-img-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">
                      Management Project (MP)
                    </h5>
                    <p className="card-text">
                      The Management Project spans two trimesters of the second
                      year. Students gain higher expertise and develop
                      collaboration skills extending beyond the classroom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Policy Section */}
        <section className="py-5">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <h4 className="text-warning fw-bold text-center">
                  Quality Policy
                </h4>
                <p>
                  To continuously improve the quality of all our core and
                  support activities through self-evaluation and total employee
                  involvement so as to achieve maximum satisfaction of all
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

   <style
  dangerouslySetInnerHTML={{
    __html: `
      /* Makes ANY active tab (main or sub) turn yellow (bg-warning) */
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

      /* For screens wider than 1300px */
      @media (min-width: 1300px) {
        .scrollable-columns {
          max-height: 580px;
        }
      }

      .scrollable-columns .nav-link {
        display: inline-block;
        width: 100%;
        margin-bottom: 0.5rem;
      }

      .date-box {
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      /* Gradient banner with subtle overlay */
      .faculty-hero {
        background: url("/media/banners/aboutus.webp");
        position: relative;
        background-size: cover;
        height: 60vh;
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

      /* Limit height for the full tab area */
      .tab-pane.fade.show.active.bg-white.p-4.rounded-4.text-black {
        height: 80vh;
        overflow: hidden;
      }

      /* Left side (tabs) */
      .col-md-3.mb-3 {
        max-height: 80vh;
        overflow-y: auto;
        padding-right: 8px;
        border-right: 2px solid #eee;
      }

      /* Right side (content) */
      .col-md-9 {
        max-height: 80vh;
        overflow-y: auto;
        padding-left: 10px;
      }

      /* Optional: nice scrollbar */
      .col-md-3.mb-3::-webkit-scrollbar,
      .col-md-9::-webkit-scrollbar {
        width: 6px;
      }
      .col-md-3.mb-3::-webkit-scrollbar-thumb,
      .col-md-9::-webkit-scrollbar-thumb {
        background: #bbb;
        border-radius: 10px;
      }
    `,
  }}
/>

    </div>
  );
};

export default IndustryRelevance;
