"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const Nabard = () => {
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
      {/* NABARD Study Section */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h2 className="display-5 fw-bold mb-2">
              IMT NABARD
            </h2>
            <p className="text-white">
              Study on defaults in SHG-bank linkage program in Andhra Pradesh , <br />sponsored by <strong>National Bank for Agriculture and Rural Development (NABARD)</strong>
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
                  NABARD Research Study
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* NABARD Study Content */}
        <section id="nabard-study" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-5">
              <h2 className="section-title">
                Study on Defaults in SHG–Bank Linkage Program in Andhra Pradesh
              </h2>
              <p className="section-description">
                A comprehensive research study sponsored by the{" "}
                <strong>National Bank for Agriculture and Rural Development (NABARD)</strong> to
                understand the causes of defaults and identify the factors contributing to the
                financial performance of Self-Help Groups (SHGs) in Andhra Pradesh.
              </p>
            </div>

            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Overview</h5>
              <p>
                The SHG–Bank Linkage Programme (SHG-BLP), initiated as a pilot with 500 SHGs more
                than two decades ago, has evolved into one of the largest financial outreach
                programs globally. As of March 2016, it covered over 8 million SHGs with savings of
                ₹37,000 crores and credit outstanding of ₹51,545 crores. However, rising defaults in
                recent years have posed significant challenges to the program’s sustainability.
              </p>
            </div>

            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Objective of the Study</h5>
              <div>
                The study aimed to examine:
                <ul>
                  <li>
                    The reasons behind the incidence of defaults among SHGs in Andhra Pradesh.
                  </li>
                  <li>
                    The factors contributing to the good financial performance of non-defaulting SHGs.
                  </li>
                </ul>
                Data was collected from 960 respondents across 240 SHGs from the regions of
                Rayalaseema, North Andhra, and Coastal Andhra using structured interviews and
                analyzed with statistical models like Probit regression, OLS, and factor analysis.
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">
                Key Findings
              </h5>
              <p>
                The study identified multiple dimensions influencing defaults in SHGs:
              </p>
              <ul>
                <li>
                  <strong>Bank Attributes:</strong> Accessibility of bank representatives and
                  frequency of SHG visits to banks significantly affected repayment performance.
                  Over-lending and lack of proper verification also increased default risks.
                </li>
                <li>
                  <strong>Agency Attributes:</strong> Support and training from implementing
                  agencies like SERP improved repayment behavior. Counselling, record-keeping, and
                  frequent visits reduced defaults.
                </li>
                <li>
                  <strong>Village Attributes:</strong> Distance of bank branches from SHGs increased
                  default probability.
                </li>
                <li>
                  <strong>Household Attributes:</strong> Families with more elderly dependents,
                  lower education levels, or high consumption needs had higher defaults.
                </li>
                <li>
                  <strong>SHG Attributes:</strong> Groups with higher savings, larger size, and
                  stronger peer pressure performed better. Defaults were higher among older
                  enterprises and SHGs with prolonged leadership tenure.
                </li>
              </ul>
            </div>

            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Conclusions</h5>
              <p>
                Defaults in SHGs are governed by interconnected social, institutional, and
                behavioral factors. The study highlights the need for regular monitoring,
                responsible lending, and enhanced financial literacy to strengthen SHG sustainability
                in Andhra Pradesh.
              </p>
            </div>

            <div className="card border-0 shadow-sm rounded-3 p-4">
              <h5 className="fw-bold text-warning mb-3">Research Team</h5>
              <ul>
                <li>Dr. Debadutta Kumar Panda</li>
                <li>Dr. Sriharsha Reddy</li>
                <li>Dr. Shabnam Priyadarshini</li>
              </ul>
            </div>
          </div>
        </section>
      </section>

   <style
  dangerouslySetInnerHTML={{
    __html: `
      .faculty-hero {
        background: url("/media/banners/nabard.jpg") no-repeat center center;
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

export default Nabard;
