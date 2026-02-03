"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import DOMPurify from "dompurify";

export default function CasesArchive() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const journalYears = [
    "2025-26",
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
    "2017-18",
    "2016-17",
    "2015-16",
    "2014-15",
    "2013-14",
    "2012-13",
  ];

  const sortedYears = [...journalYears].sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  /* ---------------- FETCH CASES ---------------- */
  useEffect(() => {
    axios
      .get(`${API_URL}/api/research-cases-publication`)
      .then((res) => {
        setData(res.data?.data || []);
      })
      .catch((err) => {
        console.error("Cases fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, [API_URL]);

  /* ---------------- GROUP BY YEAR ---------------- */
  const grouped = data.reduce((acc, item) => {
    const year = item.academic_year || "Unknown";
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

  const activeYear =
    sortedYears.find((year) => grouped[year]) || sortedYears[0];

  return (
    <div className="tab-content container mt-4">
      <div
        className="tab-pane fade bg-white p-4 rounded-4"
        id="tab-cases"
        role="tabpanel"
      >
        {/* ===== YEAR SUB-TABS ===== */}
        <nav className="nav nav-pills flex-wrap gap-2 mb-4 justify-content-center mt-4">
          {sortedYears.map((year) => {
            const yearKey = year.split("-")[0];
            const isActive = year === activeYear;

            return (
              <Link
                key={year}
                href={`#sub-case-${yearKey}`}
                className={`nav-link bg-light text-dark rounded-pill ${
                  isActive ? "active" : ""
                }`}
                data-bs-toggle="pill"
                role="tab"
              >
                {year}
              </Link>
            );
          })}
        </nav>

        {/* ===== YEAR CONTENT ===== */}
        <div className="tab-content container-sm">
          {sortedYears.map((year) => {
            const yearKey = year.split("-")[0];
            const cases = grouped[year] || [];
            const isActive = year === activeYear;

            return (
              <div
                key={year}
                className={`tab-pane fade ${isActive ? "show active" : ""}`}
                id={`sub-case-${yearKey}`}
                role="tabpanel"
              >
                <div className="container bg-white p-4 rounded-4">
                  {loading ? (
                    <div className="text-center py-5">
                      <div className="spinner-border text-warning" />
                    </div>
                  ) : cases.length === 0 ? (
                    <div className="text-center py-5 text-muted">
                      <p>No cases published for {year} yet.</p>
                    </div>
                  ) : (
                    cases.map((item) => (
                      <div key={item._id} className="card mb-3">
                        <div className="row g-0">
                          {/* IMAGE */}
                          <div className="col-md-4 d-flex justify-content-center align-items-center">
                            {item.image && (
                              <img
                                src={`${API_URL}/${item.image}`}
                                className="img-fluid rounded-start w-75"
                                alt={item.title}
                                style={{ height: 250, objectFit: "cover" }}
                              />
                            )}
                          </div>

                          {/* CONTENT */}
                          <div className="col-md-8">
                            <div className="card-body">
                              <p>
                                <strong>Name:</strong> {item.name}
                              </p>
                              <p>
                                <strong>Title:</strong> {item.title}
                              </p>
                              <p>
                                <strong>Authors:</strong> {item.authors}
                              </p>

                              {item.publisher && (
                                <p>
                                  <strong>Publisher:</strong> {item.publisher}
                                </p>
                              )}

                              {item.reference && (
                                <p>
                                  <strong>Reference No:</strong>{" "}
                                  {item.reference}
                                </p>
                              )}

                              {item.case_url && (
                                <p>
                                  <strong>URL:</strong>{" "}
                                  <a
                                    href={item.case_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary text-decoration-underline"
                                  >
                                    View Case
                                  </a>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* ABSTRACT */}
                        <div className="bg-light text-center py-2 rounded-4 fw-bold mb-3">
                          <div
                            className="accordion"
                            id={`accordion-${item._id}`}
                          >
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed bg-light fw-bold"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse-${item._id}`}
                                >
                                  ABSTRACT
                                </button>
                              </h2>
                              <div
                                id={`collapse-${item._id}`}
                                className="accordion-collapse collapse"
                                data-bs-parent={`#accordion-${item._id}`}
                              >
                                <div
                                  className="accordion-body text-start"
                                  dangerouslySetInnerHTML={{
                                    __html: item.abstract
                                      ? DOMPurify.sanitize(item.abstract)
                                      : "<p>No abstract available.</p>",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
