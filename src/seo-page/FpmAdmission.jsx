"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function FpmAdmission() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <h4 className="fw-bold text-warnig mb-3">Program Overview</h4>
            <p>
              The Fellow Programme in Management at IMT Hyderabad is a full-time
              doctoral program designed for students, working executives and
              academicians with strong academic orientation, to undertake
              rigorous and original research. The program aims to develop
              outstanding scholars for careers in academia, research, and
              consulting for the industry, government and social sector. The FPM
              is a four-year program during which scholars will undergo rigorous
              coursework comprising general management subjects, core courses,
              and advanced courses. After completing the Comprehensive
              Examination, scholars will be engaged in their doctoral
              dissertations in the third and fourth year. The time duration may
              be extended up to seven years, depending upon the progress report
              of the scholar. All full time scholars will receive a monthly
              stipend that covers all costs in addition to being provided with a
              modest accommodation. IMT-H provides an excellent ecosystem &
              facilities for pursuing research
            </p>

            {/* <!-- Responsive Table Section --> */}
            <div className="table-responsive mt-4">
              <h5 className="fw-bold text-warning mb-3">
                FPM Course Structure
              </h5>

              {/* <!-- Preparatory --> */}
              <table className="table table-bordered align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th colSpan="7">Preparatory (Jun-Jul) – 4 weeks</th>
                  </tr>
                  <tr>
                    <th>Subject</th>
                    <th>Credits</th>
                    <th>Subject</th>
                    <th>Credits</th>
                    <th>Subject</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Spreadsheet Modelling</td>
                    <td>NC</td>
                    <td>Microeconomics</td>
                    <td>NC</td>
                    <td>Personality Growth Lab</td>
                    <td>NC</td>
                  </tr>
                  <tr>
                    <td>Case Learning Pedagogy</td>
                    <td>NC</td>
                    <td>Financial Accounting (Self Study Material)</td>
                    <td>NC</td>
                    <td>Personal & Professional Etiquette</td>
                    <td>NC</td>
                  </tr>
                  <tr>
                    <td>Business Statistics / Quantitative Methods</td>
                    <td>NC</td>
                    <td>Communications & Group Discussion Lab</td>
                    <td>NC</td>
                    <td>Experiential Learning Lab</td>
                    <td>NC</td>
                  </tr>
                </tbody>
              </table>

              <p className="small text-muted mt-2">
                <strong>Note:</strong> The FPM scholars are required to attend
                the following compulsory courses from Preparatory work
                (Foundation courses) — Spreadsheet Modelling, Case Learning
                Pedagogy, Business Statistics/Quantitative Methods, and Personal
                & Professional Growth Lab. Remaining courses are optional. The
                first year course work will begin soon after the foundation
                course work.
              </p>

              {/* <!-- Year 1 --> */}
              <table className="table table-bordered align-middle text-center mt-4">
                <thead className="table-light">
                  <tr>
                    <th colSpan="7">Year 1 Coursework (Total Credits = 45)</th>
                  </tr>
                  <tr>
                    <th>Term I (Jul–Sep)</th>
                    <th>Credits</th>
                    <th>Term II (Oct–Dec)</th>
                    <th>Credits</th>
                    <th>Term III (Jan–Mar)</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Quantitative Methods</td>
                    <td>3</td>
                    <td>Advanced Research Methods - Quantitative</td>
                    <td>3</td>
                    <td>Strategic Management</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Marketing Management</td>
                    <td>3</td>
                    <td>Business and Corporate Finance</td>
                    <td>3</td>
                    <td>Design Thinking</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Organizational Behaviour</td>
                    <td>3</td>
                    <td>Human Resource Management</td>
                    <td>3</td>
                    <td>Critical Thinking and Technical Writing</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Macroeconomics Principles and Policies</td>
                    <td>3</td>
                    <td>Introduction to Management Thought</td>
                    <td>3</td>
                    <td>Advanced Research Methods - Qualitative</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Operations Management</td>
                    <td>3</td>
                    <td>
                      Core Elective I (as per specialization —
                      Marketing/Finance/HR/Operations)
                    </td>
                    <td>3</td>
                    <td>Data Science (AI / Machine Learning)</td>
                    <td>3</td>
                  </tr>
                  <tr className="fw-bold table-light">
                    <td>Total Credits Term I</td>
                    <td>15</td>
                    <td>Total Credits Term II</td>
                    <td>15</td>
                    <td>Total Credits Term III</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>

              {/* <!-- Year 2 --> */}
              <table className="table table-bordered align-middle text-center mt-4">
                <thead className="table-light">
                  <tr>
                    <th colSpan="7">Year 2 Coursework (Total Credits = 36)</th>
                  </tr>
                  <tr>
                    <th>Term IV (3 Months)</th>
                    <th>Credits</th>
                    <th>Term V (3 Months)</th>
                    <th>Credits</th>
                    <th>Term VI (3 Months)</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Case Writing</td>
                    <td>3</td>
                    <td>Review of Literature (ROL) - Writing a Review Paper</td>
                    <td>3</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Area Core Course #1</td>
                    <td>3</td>
                    <td>Pedagogies in Management</td>
                    <td>3</td>
                    <td>Area Elective Course #3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Area Core Course #2</td>
                    <td>3</td>
                    <td>Area Core Course #4</td>
                    <td>3</td>
                    <td>Area Elective Course #4</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Area Core Course #3</td>
                    <td>3</td>
                    <td>Area Elective Course #1</td>
                    <td>3</td>
                    <td>Short Research Project</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Area Elective Course #2</td>
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="fw-bold table-light">
                    <td>Total Credits Term IV</td>
                    <td>12</td>
                    <td>Total Credits Term V</td>
                    <td>12</td>
                    <td>Total Credits Term VI</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>

              <p className="small text-muted mt-2">
                *CE: Comprehensive Examination (P/F) — The Scholars will appear
                for CE within 3 months of completing Term VI. All FPM Year 2
                courses carry 3 credits each.
              </p>
            </div>
          </>
        );

      case "specializations":
        return (
          <>
            <div class="container">
              <div class="inner_text">
                <h2 class="text-center fw-bold">Specializations</h2>
                <div class="crs_list">
                  <ul>
                    <li>Economics and Business Environment</li>
                    <li>Strategy and General Management</li>
                    <li>Marketing</li>
                    <li>Finance and Accounting</li>
                    <li>
                      Organization Behavior and Human Resources Management
                    </li>
                    <li>Operations Management and Quantitative Techniques</li>
                    <li>Information Technology and Analytics</li>
                  </ul>
                </div>
                <p class="inv-txt">
                  The candidate's area of research will be considered final
                  based on the area mentioned in the offer letter. While
                  undergoing the coursework, the candidate may be allowed to
                  change the area of specialization with the approval of the FPM
                  Committee. The candidate may be required to do additional
                  courses to suit the requirement of the changed area.
                </p>
                <h3>Courses Offered for FPM</h3>

                {/* <!-- Specialization Tabs --> */}
                <div class="specialization-tabs">
                  <ul
                    className="nav nav-pills justify-content-start flex-wrap mb-3"
                    id="specializationTabs"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="menu1-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#menu1"
                        type="button"
                        role="tab"
                        aria-controls="menu1"
                        aria-selected="true"
                      >
                        Compulsory Coursework for First Year
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="menu2-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#menu2"
                        type="button"
                        role="tab"
                        aria-controls="menu2"
                        aria-selected="false"
                      >
                        Area Level Courses
                      </button>
                    </li>
                  </ul>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
        /* Inline-style alternative for Bootstrap control */
        .nav-pills .nav-link {
          background-color: #e0e0e0 !important;
          color: #000 !important;
          border-radius: 50px !important;
          font-weight: 600 !important;
          margin-right: 8px !important;
          padding: 8px 20px !important;
          transition: all 0.3s ease;
        }
        .nav-pills .nav-link.active {
          background-color: #ffc107 !important;
          color: #000 !important;
        }
        .nav-pills .nav-link:hover {
          opacity: 0.85;
        }
    `,
                    }}
                  />

                  <div class="tab-content" id="specializationTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="menu1"
                      role="tabpanel"
                      aria-labelledby="menu1-tab"
                    >
                      <div class="inner_text journal_pb">
                        <div class="jur-tab-container">
                          <div class="custom-tabb">
                            <ul
                              class="nav nav-pills justify-content-center flex-wrap mb-3"
                              id="courseTabs"
                              role="tablist"
                            >
                              <li class="nav-item" role="presentation">
                                <button
                                  class="nav-link active"
                                  id="menuu1-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#menuu1"
                                  type="button"
                                  role="tab"
                                  aria-controls="menuu1"
                                  aria-selected="true"
                                >
                                  Courses offered along with PGDM Full time
                                  students
                                </button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button
                                  class="nav-link"
                                  id="menuu2-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#menuu2"
                                  type="button"
                                  role="tab"
                                  aria-controls="menuu2"
                                  aria-selected="false"
                                >
                                  Courses offered exclusively to FPM students
                                </button>
                              </li>
                            </ul>

                            <div class="tab-content" id="courseTabContent">
                              <div
                                class="tab-pane fade show active"
                                id="menuu1"
                                role="tabpanel"
                                aria-labelledby="menuu1-tab"
                              >
                                <p>
                                  Scholars will be required to select courses
                                  from the below list
                                </p>
                                <div class="crs_list">
                                  <ul>
                                    <li>Business Communication</li>
                                    <li>Marketing Management</li>
                                    <li>Operations Management</li>
                                    <li>Organizational Behaviour</li>
                                    <li>Financial Accounting</li>
                                    <li>
                                      Macroeconomics Principles and Policies
                                    </li>
                                    <li>Managerial Information Systems</li>
                                    <li>Legal Aspects of Business</li>
                                    <li>Business Environment</li>
                                    <li>Business and Corporate Finance</li>
                                    <li>Managerial Accounting</li>
                                    <li>Supply Chain Management</li>
                                    <li>Human Resource Management</li>
                                    <li>Business Research Methods</li>
                                    <li>Strategic Management</li>
                                    <li>Core Elective#1</li>
                                    <li>Core Elective#2</li>
                                    <li>Core Elective#3</li>
                                    <li>Core Elective#4</li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="menuu2"
                                role="tabpanel"
                                aria-labelledby="menuu2-tab"
                              >
                                <div class="crs_list">
                                  <ul>
                                    <li>
                                      Advanced Research Methods-Quantitative
                                    </li>
                                    <li>
                                      Data Science (Artificial
                                      Intelligence/Machine Learning)
                                    </li>
                                    <li>Introduction to Management Thought</li>
                                    <li>Pedagogies in Management</li>
                                    <li>Review of Literature</li>
                                    <li>Case Writing</li>
                                    <li>
                                      Advanced Research Methods – Qualitative
                                    </li>
                                    <li>
                                      Critical Thinking and Technical Writing
                                    </li>
                                    <li>3 Core courses from the area</li>
                                    <li>4 Elective courses from the area</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="menu2"
                      role="tabpanel"
                      aria-labelledby="menu2-tab"
                    >
                      <div class="prg_structure new_inner_prg">
                        <div class="i_a_logo">
                          <div class="row logos_section_inner">
                            <div class="col-sm-4 mb-4">
                              <div class="inner_i_a_l pg_strr">
                                <div class="inner_str">
                                  <h4>Economics and Business Environment</h4>
                                  <ul>
                                    <li>Advance Microeconomic theory</li>
                                    <li>Advance Macroeconomic theory</li>
                                    <li>Networks in Economics and Finance</li>
                                    <li>Financial Economics</li>
                                    <li>History of Economic Thought</li>
                                    <li>New Institutional Economics</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 mb-4">
                              <div class="inner_i_a_l pg_strr">
                                <div class="inner_str">
                                  <h4>Strategy and General Management</h4>
                                  <ul>
                                    <li>
                                      Theories of Organization and Strategic
                                      Management
                                    </li>
                                    <li>
                                      Seminar in Global Strategic Management
                                    </li>
                                    <li>Seminar in Corporate Governance</li>
                                    <li>
                                      Advances in Strategic Entrepreneurship
                                    </li>
                                    <li>Business History</li>
                                    <li>Nonprofit Management</li>
                                    <li>Business Ethics</li>
                                    <li>International Trade and Business</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 mb-4">
                              <div class="inner_i_a_l pg_strr">
                                <div class="inner_str">
                                  <h4>Finance and Accounting</h4>
                                  <ul>
                                    <li>Corporate Finance Theory</li>
                                    <li>Asset Pricing</li>
                                    <li>Behavioral Finance</li>
                                    <li>Market Microstructure</li>
                                    <li>Auditing Research</li>
                                    <li>Continuous Financial Economics</li>
                                    <li>Empirical Research in Accounting</li>
                                    <li>
                                      Empirical Research Methods in Finance-1
                                    </li>
                                    <li>
                                      Empirical Research Methods in Finance -2
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row logos_section_inner">
                            <div class="col-sm-4 mb-4">
                              <div class="inner_i_a_l pg_strr">
                                <div class="inner_str">
                                  <h4>Marketing</h4>
                                  <ul>
                                    <li>
                                      Empirical Modeling Approaches in Marketing
                                    </li>
                                    <li>
                                      Seminar Course on Retail Management
                                      Theories
                                    </li>
                                    <li>Theories in Consumer Behavior</li>
                                    <li>Doctoral Seminar in Marketing</li>
                                    <li>
                                      Seminar course on Services Marketing
                                      Theories
                                    </li>
                                    <li>
                                      Digital Marketing & Strategy: A Research
                                      Perspective
                                    </li>
                                    <li>
                                      Seminar course on Strategic Marketing
                                      Management
                                    </li>
                                    <li>
                                      Advanced Theories of Brand Management
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 mb-4">
                              <div class="inner_i_a_l pg_strr">
                                <div class="inner_str">
                                  <h4>
                                    Organization Behavior and Human Resource
                                    Management
                                  </h4>
                                  <ul>
                                    <li>
                                      Seminar in Advanced Organizational
                                      Behavior
                                    </li>
                                    <li>
                                      Doctoral Seminar in Organizational Theory
                                      -1
                                    </li>
                                    <li>Seminar in Strategic HRM</li>
                                    <li>
                                      Advanced Theoretical Foundations of HRM
                                    </li>
                                    <li>
                                      Psychological and Sociological Foundations
                                      of Research in Management
                                    </li>
                                    <li>Advance Leadership Theories</li>
                                    <li>
                                      Doctoral Seminar in Organization Theory -2
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 mb-4">
                              <div class="inner_i_a_l pg_strr">
                                <div class="inner_str">
                                  <h4>
                                    Operations Management and Quantitative
                                    Techniques
                                  </h4>
                                  <ul>
                                    <li>Seminar in Operations Management I</li>
                                    <li>Seminar in Operations Management II</li>
                                    <li>Multi-criteria Decision Making</li>
                                    <li>
                                      Advanced Probability & Stochastic
                                      Processes
                                    </li>
                                    <li>
                                      Combinatorial Optimization & Meta
                                      Heuristics
                                    </li>
                                    <li>Revenue and Yield Management</li>
                                    <li>Queueing Theory</li>
                                    <li>
                                      Supply Chain Modeling and Algorithms
                                    </li>
                                    <li>
                                      Stochastic Models for Supply Chain
                                      Management
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row logos_section_inner">
                            <div class="col-sm-4 mb-4">
                              <div class="inner_i_a_l pg_strr">
                                <div class="inner_str">
                                  <h4>Information Technology and Analytics</h4>
                                  <ul>
                                    <li>Visual Analytics</li>
                                    <li>Programming for Data Sciences</li>
                                    <li>
                                      Machine Learning Algorithm Using Python
                                    </li>
                                    <li>
                                      Artificial Intelligence (AI) and Deep
                                      Learning
                                    </li>
                                    <li>Advanced Machine Learning Algorithm</li>
                                    <li>Big Data Analytics</li>
                                    <li>Forecasting Analytics</li>
                                    <li>Text Analytics</li>
                                    <li>CRM Analytic</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "admission":
        return (
          <>
            <div class="container">
              <div class="inner_text">
                <h3>Admission Process</h3>
                <p class="inv-txt">
                  The IMT Hyderabad Fellow Program in Management (FPM)
                  Admissions Process for 2025 is online. The details of the
                  admissions and subsequent selection process is as follows:
                </p>
                <h5>Eligibility</h5>
                <div class="content-sec-area">
                  <p class="inv-txt">The candidates must have,</p>
                  <p class="inv-txt">
                    Master's degree or it's equivalent in any discipline
                    (minimum 60%)
                  </p>
                  <p class="inv-txt">OR</p>
                  <p class="inv-txt">
                    Five-year integrated Master's Degree Program in any
                    discipline (minimum 60%)
                  </p>
                  <p class="inv-txt">OR</p>
                  <p class="inv-txt">
                    A graduate degree with a professional
                    qualification-CA/CMA/CS
                  </p>
                </div>
                <br />
                <p class="inv-txt">
                  <b>Note:</b>
                </p>
                <p class="inv-txt">
                  Candidates who are in the final year of their master's
                  program, will be allowed to join the program provisionally
                  subject to the submission of a certificate, issued on or
                  before September 30, 2025, from the head of the institution
                  stating that he/she has completed all requirements for
                  obtaining the degree. Their admission will be confirmed only
                  when they submit the mark sheets, and a certificate of having
                  passed the master's/equivalent qualification referred to in
                  the certificate issued by their college/institutes. The
                  deadline for submission of mark sheet and the certificate is
                  December 31, 2025.
                </p>
                <br />
                <h5>Selection Process</h5>
                <p class="inv-txt">
                  Candidates applying for FPM at IMT Hyderabad are required to
                  take the CAT/XAT/GMAT/GRE/GATE/ Test scores received after
                  January 1, 2020, will be considered valid. UGC NET qualified
                  is also eligible to apply. Applicants should submit a research
                  proposal of about 1000 words in their area of research
                  interest along with their application form. Shortlisted
                  candidates will be called for selection process at IMT
                  Hyderabad in April/May 2025.
                </p>
                <br />
                <h5>Admissions Calendar</h5>
                <div class="table_sec fee_s">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Application Opens</td>
                        <td>March 20, 2025</td>
                      </tr>
                      <tr>
                        <td>Application Closes</td>
                        <td>May 31, 2025</td>
                      </tr>
                      <tr>
                        <td>Interview</td>
                        <td>June 15, 2025</td>
                      </tr>
                      <tr>
                        <td>Result Declaration</td>
                        <td>June 20, 2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        );

      // case "course":
      //   return (
      //     <>
      //       <h4 className="fw-bold text-warnig mb-3">Course Structure</h4>
      //       <div className="table-responsive">
      //         <table className="table table-bordered table-striped text-center align-middle">
      //           <thead className="table-primary">
      //             <tr>
      //               <th colSpan="7">FPM COURSE STRUCTURE</th>
      //             </tr>
      //           </thead>
      //           <tbody>
      //             <tr>
      //               <th rowSpan="4">Preparatory (Jun-Jul) 4 weeks</th>
      //               <th>SUBJECT</th>
      //               <th>CREDITS</th>
      //               <th>SUBJECT</th>
      //               <th>CREDITS</th>
      //               <th>SUBJECT</th>
      //               <th>CREDITS</th>
      //             </tr>
      //             <tr>
      //               <td>Spreadsheet Modelling</td>
      //               <td>NC</td>
      //               <td>Microeconomics</td>
      //               <td>NC</td>
      //               <td>Personality Growth Lab</td>
      //               <td>NC</td>
      //             </tr>
      //             <tr>
      //               <td>Case Learning Pedagogy</td>
      //               <td>NC</td>
      //               <td>Financial Accounting (Self Study Material)</td>
      //               <td>NC</td>
      //               <td>Personal & Professional Etiquette</td>
      //               <td>NC</td>
      //             </tr>
      //             <tr>
      //               <td>Business Statistics / Quantitative Methods</td>
      //               <td>NC</td>
      //               <td>Communications & Group Discussion Lab</td>
      //               <td>NC</td>
      //               <td>Experiential Learning Lab</td>
      //               <td>NC</td>
      //             </tr>
      //             <tr>
      //               <td></td>
      //               <td colSpan="6" className="bg-light">
      //                 The FPM scholars are required to attend the following
      //                 compulsory courses from Preparatory work (Foundation
      //                 courses) - Spreadsheet modelling, Case Learning Pedagogy,
      //                 Business Statistics/Quantitative Methods, and Personal &
      //                 Professional Growth Lab. Remaining courses are optional.
      //                 The first year course work will begin soon after the
      //                 foundation course work.
      //               </td>
      //             </tr>
      //           </tbody>
      //         </table>
      //       </div>
      //     </>
      //   );

      case "financial":
        return (
          <>
            <h4 className="fw-bold text-warnig mb-3">Financial Aid</h4>
            <p>
              IMT Hyderabad offers full time Residential mode of study under the
              FPM Program. Scholars will be paid a monthly stipend of INR 50,000
              that covers all the costs in addition to being provided with a
              modest accommodation. No family accommodation would be provided to
              married candidates. The stipend will be paid for a period of four
              years from the date of joining the program, or until the candidate
              joins employment, whichever is earlier.
            </p>
          </>
        );

      case "aicte":
        return (
          <>
            <div class="container">
              <div class="inner_text">
                <h3>AICTE Approval</h3>
                <div class="table_sec fee_s">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>Details</th>
                        <th>Academic year</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>To view AICTE Approval</td>
                        <td>2025-2026</td>
                        <td>
                          <a
                            href="https://drive.google.com/file/d/1E_QsPVjZeBhRoyehHE5NuhRB2MSy6t_V/view?usp=sharing"
                            target="_blank"
                          >
                            Click Here
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        );

      case "contact":
        return (
          <>
            <div class="container">
              <div class="inner_text">
                <h3>Contact Us</h3>
                <div class="table_sec">
                  <div className="table-responsive mt-4">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Contact Number</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="tel:9391424273">9391424273</a> /{" "}
                            <a href="tel:9391424275">9391424275</a>
                          </td>
                          <td>
                            <a href="mailto:fpmadmissions@imthyderabad.edu.in">
                              fpmadmissions@imthyderabad.edu.in
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="faculty-hero text-center text-white py-5 position-relative"
        style={{
          backgroundImage: 'url("/media/banners/Group 16.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div className="overlay"></div>
        <div className="container position-relative z-2">
          <h2
            className="display-5 fw-bold mb-2"
            data-aos="fade-up"
            style={{ marginTop: "150px" }}
          >
            Fellow Program in Management (FPM)
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            Pursue cutting-edge research and contribute to the world of
            management knowledge.
            <br />
            The Fellow Program in Management (FPM) — nurturing future scholars,
            researchers, and academic leaders.
          </p>
        </div>
      </section>

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
                Fellow Program in Management (FPM)
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="fpm-page py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-warnig">
              Fellow Program in Management (FPM)
            </h2>
            <p className="text-muted">
              Discover academic excellence and research opportunities at IMT
              Hyderabad.
            </p>
          </div>

          {/* NAV TABS */}
          <ul className="nav nav-pills justify-content-center mb-4 flex-wrap">
            {[
              ["overview", "Program Overview"],
              ["specializations", "Specializations"],
              ["admission", "Admission Process"],
              // ["course", "Course Structure"],
              ["financial", "Financial Aid"],
              ["aicte", "AICTE Approval"],
              ["contact", "Contact Us"],
            ].map(([key, label]) => (
              <li key={key} className="nav-item m-1">
                <button
                  className={`nav-link ${activeTab === key ? "active" : ""}`}
                  onClick={() => setActiveTab(key)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* TAB CONTENT */}
          <div className="tab-content bg-light p-4 rounded shadow-sm">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Table styling */
        .table thead th {
          background-color: #08317a !important;
          color: #fff;
          font-weight: 600;
        }
        .table td,
        .table th {
          vertical-align: middle;
        }
        .faculty-hero .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }

        .nav-pills .nav-link {
          border-radius: 30px;
          color: #0d47a1;
          font-weight: 500;
          border: 1px solid #0d47a1;
          transition: all 0.3s ease;
        }

        .nav-pills .nav-link.active {
          background-color: #f2cf21ff;
          color: black;
        }

        .nav-pills .nav-link:hover {
          background-color: #f2cf21ff;
          color: white;
        }

        /* Tabs */
        .nav-pills .nav-link {
          border-radius: 30px;
          background: #e9ecef;
          color: #333;
          transition: all 0.3s;
        }

        .nav-pills .nav-link.active {
          background: #ffc107 !important;
          color: #000000 !important;
        }

        table {
          font-size: 14px;
        }

        /* Specialization Tabs */
        .specialization-tabs .nav-pills .nav-link {
          border-radius: 50px;
          padding: 10px 20px;
          margin: 0 5px 10px;
          color: #000;
          font-weight: 600;
        }

        .specialization-tabs .nav-pills .nav-link.active {
          background-color: #ffc107;
          color: #000;
        }

        th {
          background-color: #e3f2fd;
        }

        @media (max-width: 768px) {
          .nav-pills .nav-link {
            font-size: 14px;
            padding: 8px 12px;
          }
          table {
            font-size: 12px;
          }
        }
    `,
        }}
      />
    </>
  );
}
