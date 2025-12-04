"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const CII = () => {
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
      {/* IMT CII Study Section */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h2 className="display-5 fw-bold mb-2">IMT CII</h2>
            <p className="text-white">
              Impact of COVID-19 Pandemic on Small and Medium Enterprises (SMEs){" "}
              <br />
              Sponsored by{" "}
              <strong>Centre for General Education Society, Ghaziabad</strong>
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
                  IMT CII
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* CII Study Content */}
        <section id="cii-study" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            {/* Overview */}
            <div className="text-center mb-5">
              <h2 className="section-title">
                Impact of COVID-19 Pandemic on Small and Medium Enterprises
                (SMEs)
              </h2>
              <p className="section-description">
                The Micro, Small & Medium Enterprises (MSME) sector contributes
                28% to the country’s GDP, employs over 110 million people, and
                accounts for nearly 50% of total exports. This study
                investigates the impact of the COVID-19 pandemic on SMEs in
                Telangana and Andhra Pradesh, focusing on pain points, survival
                strategies, and growth responses.
              </p>
            </div>

            {/* Methodology */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Methodology</h5>
              <p>
                This study adopted the <strong>narrative inquiry method</strong>{" "}
                for both data collection and analysis. A purposive sampling
                method was followed to select organizations and respondents,
                with support from the{" "}
                <strong>
                  Confederation of Indian Industry (CII), Hyderabad
                </strong>
                . Senior executives (CEOs, MDs, or Chairpersons) were
                interviewed to narrate how the pandemic impacted their business
                operations. Each 30-minute interview was video recorded,
                transcribed, and analyzed using coding and constant comparison
                techniques.
              </p>
              <p>
                Data analysis followed the classic{" "}
                <strong>Grounded Theory model</strong> to develop a framework
                connecting causality, central phenomenon, moderators,
                strategies, and outcomes.
              </p>
            </div>

            {/* Key Findings */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Key Findings</h5>
              <h6 className="fw-bold">Causality</h6>
              <ul>
                <li>
                  <strong>Pandemic Fear:</strong> The fear of infection led to
                  widespread absenteeism and disruption in workflows.
                </li>
                <li>
                  <strong>Government Regulations:</strong> Lockdowns and
                  movement restrictions disrupted the business ecosystem,
                  affecting employees, suppliers, and customers.
                </li>
              </ul>

              <h6 className="fw-bold mt-3">
                Central Phenomenon: Impact on Business
              </h6>
              <ul>
                <li>
                  <strong>Raw Material & Import Constraints:</strong> Transport
                  halts and border closures caused severe supply shortages.
                </li>
                <li>
                  <strong>Employee Retention Issues:</strong> Migration and job
                  insecurity led to manpower shortages.
                </li>
                <li>
                  <strong>Falling Consumer Spending:</strong> Reduced demand due
                  to lockdowns and canceled orders impacted production.
                </li>
                <li>
                  <strong>Logistics & Supply Chain Malfunctions:</strong>{" "}
                  Traditional supply chains collapsed without contingency plans.
                </li>
                <li>
                  <strong>Nonalignment with COVID Protocols:</strong>{" "}
                  Manufacturing setups struggled to enforce social distancing.
                </li>
                <li>
                  <strong>Exports:</strong> Manufacturing exports suffered while
                  IT-based SMEs fared better.
                </li>
                <li>
                  <strong>Managing Fixed Costs:</strong> High fixed costs and
                  idle capacity led to severe financial strain.
                </li>
              </ul>
            </div>

            {/* Moderating Factor */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">
                Moderating Factor: Government Support
              </h5>
              <p>
                Government support came mainly in the form of credit lines for
                liquidity, but most SMEs found the measures insufficient or
                inaccessible. Many feared future regulatory burdens or were
                penalized for unavoidable service delays during lockdowns.
              </p>
            </div>

            {/* Strategic Responses */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">
                Strategic Responses by SMEs
              </h5>
              <ul>
                <li>
                  <strong>Trust Building:</strong> Employers reassured staff
                  through empathy, communication, and salary assurance to build
                  confidence.
                </li>
                <li>
                  <strong>Support Systems:</strong> SMEs rapidly adopted remote
                  work and communication tools to stay connected.
                </li>
                <li>
                  <strong>Vaccination Drives:</strong> Many SMEs organized
                  internal vaccination programs to ensure workforce safety.
                </li>
                <li>
                  <strong>Business Model Reengineering:</strong> Transitioning
                  from fixed to variable cost models improved resilience.
                </li>
              </ul>
            </div>

            {/* Outcomes */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Outcomes</h5>
              <ul>
                <li>
                  <strong>Revenue and Profit Shrinkage:</strong> Supply chain
                  breakdowns and delays reduced profitability.
                </li>
                <li>
                  <strong>Increased Employee Retention Costs:</strong> SMEs
                  raised salaries or provided incentives to retain workers.
                </li>
                <li>
                  <strong>Factory Shutdowns:</strong> Many SMEs faced production
                  halts due to input shortages and logistics constraints.
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="card border-0 shadow-sm rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-warning mb-3">Conclusion</h5>
              <p>
                The study developed 30 caselets illustrating SME leaders’
                experiences during the pandemic. These findings offer valuable
                insights for policymakers to strengthen SME resilience, improve
                crisis response mechanisms, and design effective recovery
                frameworks.
              </p>
            </div>

            {/* Research Team */}
            <div className="card border-0 shadow-sm rounded-3 p-4">
              <h5 className="fw-bold text-warning mb-3">Research Team</h5>
              <ul>
                <li>Dr. Debadutta Kumar Panda</li>
                <li>Dr. Sriharsha Reddy</li>
                <li>Dr. Tulika Sharma</li>
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
        background: url("/media/img/2.webp") no-repeat center center;
        background-size: cover;
        height: 60vh !important;
        position: relative;
          background-position: center !important;
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

export default CII;
