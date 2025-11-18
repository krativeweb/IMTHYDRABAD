"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const Scope = () => {
  useEffect(() => {
    // Initialize AOS after mount
    const initAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default;
        AOS.init({
          duration: 1200,
          once: true,
        });
      }
    };
    initAOS();
  }, []);

  return (
    <div className="industry-relevance-page">
      {/* IMT SCOPE Study Section */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h2 className="display-5 fw-bold mb-2">IMT SCOPE</h2>
            <p className="text-white">
              Study on “Digital Transformation in PSEs” <br />
              Sponsored by{" "}
              <strong>The Standing Conference of Public Enterprises (SCOPE)</strong>
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
                  IMT SCOPE
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* SCOPE Study Content */}
        <section id="scope-study" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            {/* Overview */}
            <div className="text-center mb-5">
              <h2 className="section-title">
                Study on “Digital Transformation in PSEs”
              </h2>
              <p className="section-description">
                Indian Central Public Sector Enterprises (CPSEs) are rapidly embracing
                digitalization to enhance efficiency, foster innovation, and deliver better
                public services. With over 40% of businesses expected to perish within the
                next decade if they fail to adopt digital transformation, this study
                underscores the urgent need for digital integration across the PSE sector.
              </p>
            </div>

            {/* Sponsoring Agency */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Sponsoring Agency</h5>
              <p>
                The study is sponsored by{" "}
                <strong>The Standing Conference of Public Enterprises (SCOPE)</strong> in
                collaboration with{" "}
                <strong>Institute of Management Technology (IMT), Hyderabad</strong>. It
                aims to examine the scope, challenges, and opportunities of digital
                transformation within Central Public Sector Enterprises (CPSEs).
              </p>
            </div>

            {/* Objective */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Objective of the Study</h5>
              <ul>
                <li>
                  Understand the key digital initiatives undertaken by various CPSEs to
                  improve efficiency, transparency, and public service delivery.
                </li>
                <li>
                  Identify the major challenges faced by PSEs during digital transformation.
                </li>
                <li>
                  Provide recommendations on leveraging digital technologies for sustainable
                  growth and operational excellence.
                </li>
              </ul>
            </div>

            {/* Methodology */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Methodology</h5>
              <p>
                The study employs a{" "}
                <strong>qualitative and exploratory research approach</strong>, involving
                in-person interviews with{" "}
                <strong>25 Central Public Sector Enterprises (CPSEs)</strong> across
                multiple sectors such as Oil & Gas, Power Generation, Engineering, Services,
                Finance, Chemicals, and Fertilizers. Insights were gathered from senior
                leadership to assess digital transformation readiness, technology adoption,
                and innovation frameworks.
              </p>
            </div>

            {/* Key Focus Areas */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Key Focus Areas</h5>
              <ul>
                <li>Mapping digital initiatives across sectors and identifying best practices.</li>
                <li>Assessing organizational readiness for digital transformation.</li>
                <li>Evaluating the impact of technology on performance and service delivery.</li>
                <li>Understanding policy and regulatory challenges in digital adoption.</li>
              </ul>
            </div>

            {/* Expected Outcome */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Expected Outcome</h5>
              <p>
                The study will culminate in a comprehensive report developed in consultation
                with key stakeholders. It will provide actionable insights and a roadmap for
                accelerating digital transformation in CPSEs, enabling them to become
                future-ready, efficient, and innovation-driven public organizations.
              </p>
            </div>

            {/* Research Team */}
            <div className="card border-0 shadow-sm rounded-3 p-4">
              <h5 className="fw-bold text-warning mb-3">Research Team</h5>
              <ul>
                <li>Dr. Surajit Ghosh Dastidar</li>
                <li>Dr. Romina Mathew</li>
                <li>Dr. Manoj Das</li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      {/* Styles */}
     <style
  dangerouslySetInnerHTML={{
    __html: `
      .faculty-hero {
        background: url("/media/banners/scope.jpg") no-repeat center center;
        background-size: cover;
        height: 60vh !important;
        position: relative;
      }

      .hero-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        padding-top: 150px;
      }

      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

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

      .card {
        background: #f8f9fa;
        border-radius: 1.5rem;
      }

      .card ul {
        padding-left: 1.5rem;
        margin-top: 0.5rem;
      }

      .card ul li {
        margin-bottom: 0.5rem;
      }

      @media (max-width: 767px) {
        .section-title {
          font-size: 1.6rem;
        }
        .faculty-hero {
          height: 40vh;
        }
      }
    `,
  }}
/>

    </div>
  );
};

export default Scope;
