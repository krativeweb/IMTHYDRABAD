"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';

const IndustryRelevance = () => {
  useEffect(() => {
    // Initialize AOS after mount
    const initAOS = async () => {
      if (typeof window !== 'undefined') {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 1200,
          once: true,
        });
      }
    };
    initAOS();

    // Initialize Owl Carousel if needed
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery('#owl-demo').owlCarousel({
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
Curricula shaped with industry insights ensure every graduate is future-ready and market-relevant.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
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
                IMT Hyderabad works to deploy the offerings students need to acquire industry certifications and
                professional credits. IMT Hyderabad works to <strong>increase placement rates</strong> of graduating
                students with advanced training in fundamental skills, best practices, and emerging technologies. IMT
                Hyderabad possesses potential for greater student retention and improved student placement rates.
              </p>
            </div>

            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row flex-md-row-reverse align-items-center">
                  <div className="col-md-4 image-container-right">
                    <img
                      src="/media/IR/images/1.jpg"
                      alt="Industry Mentor-Mentee Program"
                      className="img-fluid rounded shadow clipped-img-1"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">Industry Mentor - Mentee Program 2020</h5>
                    <p className="card-text">
                      Industry Mentor Mentee Program (IM2P) enhances industry readiness and nurtures business leadership.
                      Mentors help students develop interpersonal, critical thinking, and problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row align-items-center">
                  <div className="col-md-4">
                    <img
                      src="/media/IR/images/2.JPG"
                      alt="Leadership Series & MOP"
                      className="img-fluid rounded shadow clipped-img-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">Leadership Series & MOP</h5>
                    <p className="card-text">
                      MOP prepares students from diverse backgrounds, with workshops in leadership, teambuilding, and
                      creativity. Leadership series ensures interaction with business leaders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row flex-md-row-reverse align-items-center">
                  <div className="col-md-4 image-container-right">
                    <img
                      src="/media/IR/images/3.JPG"
                      alt="Leadership Series & Practitioner Session"
                      className="img-fluid rounded shadow clipped-img-1"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">Leadership Series & Practitioner&apos;s Session</h5>
                    <p className="card-text">
                      Industry experts form an integral part of the curriculum. 15-20% of courses are delivered by
                      practitioners. Leadership series ensures regular interaction with students.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row align-items-center">
                  <div className="col-md-4">
                    <img
                      src="/media/IR/images/4.jpg"
                      alt="Internship Program"
                      className="img-fluid rounded shadow clipped-img-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">Internship Program</h5>
                    <p className="card-text">
                      The 14-week intensive internship forms the core of IMT H pedagogy. Faculty and company mentors
                      supervise internships, providing real-world experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row flex-md-row-reverse align-items-center">
                  <div className="col-md-4 image-container-right">
                    <img
                      src="/media/IR/images/5.JPG"
                      alt="Industry-Oriented Courses"
                      className="img-fluid rounded shadow clipped-img-1"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">Industry-Oriented Courses</h5>
                    <p className="card-text">
                      IMT Hyderabad offers specialized elective streams like Business Analytics, Investment Banking, and
                      Digital Marketing. More streams will be introduced in the future.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-3 p-4 d-flex flex-row align-items-center">
                  <div className="col-md-4">
                    <img
                      src="/media/IR/images/6.jpg"
                      alt="Management Project"
                      className="img-fluid rounded shadow clipped-img-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="fw-bold text-warning mb-3">Management Project (MP)</h5>
                    <p className="card-text">
                      The Management Project spans two trimesters of the second year. Students gain higher expertise and
                      develop collaboration skills extending beyond the classroom.
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
                <h4 className="text-warning fw-bold text-center">Quality Policy</h4>
                <p>
                  To continuously improve the quality of all our core and support activities through self-evaluation and
                  total employee involvement so as to achieve maximum satisfaction of all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <style jsx>{`
        .industry-relevance-page {
          width: 100%;
        }

        .faculty-section {
          width: 100%;
        }

        /* Hero Banner */
        .faculty-hero {
          background: url('/media/banners/industryrelevance.webp') no-repeat center center;
          background-size: cover;
          height: 60vh;
          position: relative;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: 150px;
        }

        /* Breadcrumb */
        .breadcrumb {
          background-color: rgb(22, 57, 119);
        }

        /* Section Styles */
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #08317a;
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
          background: #ffc107;
        }

        .section-description {
          max-width: 900px;
          line-height: 1.8;
          color: #333;
          margin: 0 auto;
        }

        /* Card Styles */
        .card {
          background: #f8f9fa;
          border: none;
          border-radius: 1.5rem;
        }

        .card-text {
          line-height: 1.7;
          color: #333;
        }

        /* Image Styles */
        .clipped-img-1 {
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
          height: 30vh;
          object-fit: cover;
          border-radius: 1.2rem;
          transition: transform 0.4s ease;
        }

        .clipped-img-1:hover,
        .clipped-img-2:hover {
          transform: scale(1.03);
        }

        .clipped-img-2 {
          clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
          height: 30vh;
          object-fit: cover;
          border-radius: 1.2rem;
          transition: transform 0.4s ease;
        }

        .image-container-right {
          text-align: end;
        }

        /* Social Icons (unused but included for future use) */
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
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* Tabs (unused but included for future use) */
        .faculty-tabs .nav-pills .nav-link {
          border-radius: 50rem;
          background: #e9ecef;
          color: #333;
          transition: all 0.3s;
        }

        .faculty-tabs .nav-pills .nav-link.active {
          background: #ffc107;
          color: #000000;
        }

        /* Rankings (unused but included for future use) */
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
          color: #08317a;
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
          color: #ffc107;
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

        /* Mobile View Adjustments */
        @media (max-width: 767px) {
          .clipped-img-1,
          .clipped-img-2 {
            height: 20vh;
            clip-path: none;
            object-fit: cover;
          }

          .card.d-flex.flex-row,
          .card.d-flex.flex-row-reverse {
            flex-direction: column !important;
            text-align: center;
          }

          .card .col-md-4,
          .card .col-md-8 {
            max-width: 100%;
          }

          .card .col-md-4 {
            margin-bottom: 15px;
          }

          .image-container-right {
            text-align: center;
          }

          .section-title {
            font-size: 1.7rem;
          }

          .ranking-header {
            font-size: 1.2rem;
          }

          .ranking-list li {
            font-size: 0.9rem;
          }

          .logo-container {
            height: 100px;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 1.5rem;
          }

          .logo-container {
            height: 80px;
            max-width: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default IndustryRelevance;