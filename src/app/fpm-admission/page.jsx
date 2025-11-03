"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FpmAdmission() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <h4 className="fw-bold text-primary mb-3">Program Overview</h4>
            <p>
              The <strong>Fellow Program in Management (FPM)</strong> is the
              doctoral program of the institute, designed to develop high-quality
              researchers, educators, and thought leaders in the field of
              management. The program focuses on advanced research, academic
              rigor, and developing innovative solutions to complex business
              challenges.
            </p>
            <p>
              It provides a solid foundation in management theory, research
              methodology, and interdisciplinary learning, enabling scholars to
              contribute to academia, industry, and public policy.
            </p>
          </>
        );

      case "specializations":
        return (
          <>
            <h4 className="fw-bold text-primary mb-3">Specializations</h4>
            <ul>
              <li>Marketing Management</li>
              <li>Finance and Accounting</li>
              <li>Organizational Behaviour & Human Resource Management</li>
              <li>Operations Management</li>
              <li>Information Systems</li>
              <li>Economics and Public Policy</li>
              <li>Strategy and General Management</li>
            </ul>
          </>
        );

      case "admission":
        return (
          <>
            <h4 className="fw-bold text-primary mb-3">Admission Process</h4>
            <p>
              Admission to the FPM program is based on academic merit, research
              aptitude, and personal interviews. Candidates with strong academic
              records and valid test scores in any one of the following exams are
              eligible:
            </p>
            <ul>
              <li>CAT / GRE / GMAT / GATE / UGC-JRF</li>
            </ul>
            <p>
              Shortlisted candidates will be called for a personal interview
              based on academic performance, test scores, and statement of
              purpose (SOP).
            </p>
          </>
        );

      case "course":
        return (
          <>
            <h4 className="fw-bold text-primary mb-3">Course Structure</h4>
            <div className="table-responsive">
              <table className="table table-bordered table-striped text-center align-middle">
                <thead className="table-primary">
                  <tr>
                    <th colSpan="7">FPM COURSE STRUCTURE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th rowSpan="4">Preparatory (Jun-Jul) 4 weeks</th>
                    <th>SUBJECT</th>
                    <th>CREDITS</th>
                    <th>SUBJECT</th>
                    <th>CREDITS</th>
                    <th>SUBJECT</th>
                    <th>CREDITS</th>
                  </tr>
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
                  <tr>
                    <td></td>
                    <td colSpan="6" className="bg-light">
                      The FPM scholars are required to attend the following
                      compulsory courses from Preparatory work (Foundation
                      courses) - Spreadsheet modelling, Case Learning Pedagogy,
                      Business Statistics/Quantitative Methods, and Personal &
                      Professional Growth Lab. Remaining courses are optional.
                      The first year course work will begin soon after the
                      foundation course work.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );

      case "financial":
        return (
          <>
            <h4 className="fw-bold text-primary mb-3">Financial Aid</h4>
            <p>
              Admitted FPM scholars receive comprehensive financial support that
              includes:
            </p>
            <ul>
              <li>Full tuition fee waiver</li>
              <li>Monthly fellowship stipend</li>
              <li>Contingency grant for research and fieldwork</li>
              <li>Support for attending national and international conferences</li>
            </ul>
          </>
        );

      case "aicte":
        return (
          <>
            <h4 className="fw-bold text-primary mb-3">AICTE Approval</h4>
            <p>
              The <strong>Fellow Program in Management (FPM)</strong> is
              approved by the{" "}
              <strong>All India Council for Technical Education (AICTE)</strong>.
            </p>
            <p>
              This recognition ensures that the program adheres to national
              standards of academic excellence and research quality in management
              education.
            </p>
          </>
        );

      case "contact":
        return (
          <>
            <h4 className="fw-bold text-primary mb-3">Contact Us</h4>
            <p>
              For further details regarding admission to the FPM program, please
              contact:
            </p>
            <p>
              <strong>FPM Office, IMT Hyderabad</strong> <br />
              Email:{" "}
              <a href="mailto:fpm@imthyderabad.edu.in">
                fpm@imthyderabad.edu.in
              </a>{" "}
              <br />
              Phone: +91-40-3046-1600 <br />
              Website:{" "}
              <a
                href="https://www.imthyderabad.edu.in"
                target="_blank"
                rel="noreferrer"
              >
                www.imthyderabad.edu.in
              </a>
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fpm-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">
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
            ["course", "Course Structure"],
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

      <style jsx>{`
        .nav-pills .nav-link {
          border-radius: 30px;
          color: #0d47a1;
          font-weight: 500;
          border: 1px solid #0d47a1;
          transition: all 0.3s ease;
        }
        .nav-pills .nav-link.active {
          background-color: #0d47a1;
          color: white;
        }
        .nav-pills .nav-link:hover {
          background-color: #1565c0;
          color: white;
        }
        table {
          font-size: 14px;
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
      `}</style>
    </div>
  );
}
