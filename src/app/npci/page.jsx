"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const NPCI = () => {
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
      {/* NPCI Study Section */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h2 className="display-5 fw-bold mb-2">IMT NPCI</h2>
            <p className="text-white">
              Study on Adoption of Cashless Transaction Solutions by Small Merchants
              in the tier 2 and tier 3 cities of Telangana State, <br />
              sponsored by{" "}
              <strong>National Payment Corporation of India (NPCI)</strong>
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
                  IMT NPCI
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* NPCI Study Content */}
        <section id="npci-study" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-5">
              <h2 className="section-title">
                Study on Adoption of Cashless Transaction Solutions by Small Merchants
                in the Tier 2 and Tier 3 Cities of Telangana State
              </h2>
              <p className="section-description">
                A research study sponsored by the{" "}
                <strong>National Payment Corporation of India (NPCI)</strong> to
                understand the motivators and challenges in adopting Cashless Transaction
                Solutions (CTS) among small merchants and customers in Telangana.
              </p>
            </div>

            {/* Overview */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Overview</h5>
              <p>
                The persistence of physical money remains discouraging, particularly in a
                developing economy like India. Despite significant innovation in digital
                payment solutions, a large section of the population continues to rely on
                cash-based transactions. This study was undertaken to:
              </p>
              <ul>
                <li>
                  Identify the reasons behind the adoption of Cashless Transaction Solutions (CTS) by small merchants and their customers.
                </li>
                <li>
                  Understand the challenges (pain points) faced during the adoption process.
                </li>
                <li>
                  Suggest potential measures to overcome these challenges and increase CTS adoption.
                </li>
              </ul>
            </div>

            {/* Methodology */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Methodology</h5>
              <p>
                The study adopted both qualitative and quantitative approaches to capture
                perceptions, challenges, and motivators of CTS adoption. Data was collected
                through semi-structured and structured interviews from{" "}
                <strong>300 small merchants</strong> and{" "}
                <strong>600 customers</strong> across four Tier 2 and Tier 3 cities of
                Telangana — Warangal, Karimnagar, Mahbubnagar, and Nalgonda.
              </p>
              <p>
                Data validation was ensured via transcription and audio recordings.
                Qualitative analysis employed narrative inquiry and causality analysis,
                while quantitative data was analyzed using descriptive statistics, factor
                analysis, cluster analysis, and discriminant analysis.
              </p>
            </div>

            {/* Key Findings */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Key Findings</h5>
              <ul>
                <li>
                  Merchants were divided equally — 49% adopters and 51% non-adopters of CTS.
                </li>
                <li>
                  68% of non-adopters perceived CTS as unnecessary for their business.
                </li>
                <li>
                  Education and ownership type did not significantly affect adoption decisions,
                  but higher business revenue positively influenced CTS adoption.
                </li>
                <li>
                  Implementation costs and employee numbers had minimal influence on adoption rates.
                </li>
                <li>
                  Two key sub-groups of non-adopters emerged —{" "}
                  <strong>anti-technology merchants</strong> and{" "}
                  <strong>technology-ignorant merchants</strong> — each requiring
                  different policy interventions to boost adoption.
                </li>
                <li>
                  Common concerns included <strong>poor network connectivity</strong>,
                  <strong> delayed transactions</strong>, and <strong>security fears</strong>
                  due to perceived risks of hacking and third-party access.
                </li>
              </ul>
            </div>

            {/* Customer Insights */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Customer Insights</h5>
              <p>
                Only 38% of customers adopted CTS. Similar to merchants, two customer sub-groups
                were identified — <strong>technology antagonists</strong> and{" "}
                <strong>technology ignorants</strong>. The former displayed pessimism and
                conservatism, while the latter suffered from unawareness and risk aversion.
              </p>
              <p>
                Both groups cited common challenges like safety concerns, poor internet
                connectivity, delayed transactions, smartphone dependency, and transaction charges.
              </p>
            </div>

            {/* Positive Outcomes */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Positive Outcomes & Success Stories</h5>
              <p>
                The study highlighted multiple success cases of CTS adoption among small merchants.
                The primary drivers of adoption included:
              </p>
              <ul>
                <li>Ease of use and time-saving transactions</li>
                <li>Cost and operational efficiency</li>
                <li>Increased sales and simplified accounting</li>
                <li>Enhanced safety, reduced cash handling, and resolution of fake currency issues</li>
              </ul>
              <p>
                Notably, merchants reported that when customers adopted CTS, they too were encouraged
                to shift, establishing a mutually reinforcing adoption cycle.
              </p>
            </div>

            {/* Conclusion */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Conclusion</h5>
              <p>
                The study concludes that successful CTS adoption in Tier 2 and Tier 3 cities of
                Telangana requires a multi-faceted approach — improving infrastructure, enhancing
                awareness, building trust, and ensuring smooth technological functionality.
                Policy-level interventions addressing both merchants and customers simultaneously
                can accelerate the transition toward a cashless ecosystem.
              </p>
            </div>

            {/* Research Team */}
            <div className="card border-0 shadow-sm rounded-3 p-4">
              <h5 className="fw-bold text-warning mb-3">Research Team</h5>
              <ul>
                <li>Dr. Sriharsha Reddy</li>
                <li>Dr. Debadutta Kumar Panda</li>
                <li>Dr. Sridhar Vaithianathan</li>
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
        background: url("/media/banners/npci.jpg") no-repeat center center;
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

export default NPCI;
