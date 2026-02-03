"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function JournalComponents() {
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
    "2011-12",
    "2010-11",
  ];

  const sortedYears = [...journalYears].sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  /* ---------------- FETCH JOURNALS ---------------- */
  useEffect(() => {
    axios
      .get(`${API_URL}/api/research-journal-publication`)
      .then((res) => {
        setData(res.data?.data || []);
      })
      .catch((err) => {
        console.error("Journal fetch error:", err);
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
        className="tab-pane fade show active bg-white p-4 rounded-4"
        id="tab-journal"
        role="tabpanel"
      >
        {/* ===== SUB TABS (YEARS) ===== */}
        <nav className="nav nav-pills flex-wrap gap-2 mb-4 justify-content-center mt-4">
          {sortedYears.map((year) => {
            const yearKey = year.split("-")[0];
            const isActive = year === activeYear;

            return (
              <Link
                key={year}
                href={`#sub-res-${yearKey}`}
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

        {/* ===== SUB TAB CONTENT ===== */}
        <div className="tab-content container-sm">
          {sortedYears.map((year) => {
            const yearKey = year.split("-")[0];
            const pubs = grouped[year] || [];
            const isActive = year === activeYear;

            return (
              <div
                key={year}
                className={`tab-pane fade ${isActive ? "show active" : ""}`}
                id={`sub-res-${yearKey}`}
                role="tabpanel"
              >
                <div className="container bg-white p-4 rounded-4">
                  {loading ? (
                    <div className="text-center py-5">
                      <div className="spinner-border text-warning" />
                    </div>
                  ) : pubs.length === 0 ? (
                    <div className="text-center py-5 text-muted">
                      <p>No publications for {year} yet.</p>
                    </div>
                  ) : (
                    pubs.map((pub) => (
                      <div key={pub._id} className="card mb-3">
                        <div className="row g-0">
                          {/* IMAGE */}
                          <div className="col-md-4 d-flex justify-content-center align-items-center">
                            {pub.image && (
                              <img
                                src={`${API_URL}/${pub.image}`}
                                className="img-fluid rounded-start w-75"
                                alt={pub.publication_title}
                                style={{ height: 250, objectFit: "cover" }}
                              />
                            )}
                          </div>

                          {/* CONTENT */}
                          <div className="col-md-8">
                            <div className="card-body">
                              <p>
                                <strong>Name:</strong> {pub.author_name}
                              </p>
                              <p>
                                <strong>Title:</strong> {pub.publication_title}
                              </p>
                              <p>
                                <strong>Authors:</strong> {pub.authors}
                              </p>
                              <p>
                                <strong>Journal:</strong> {pub.journal_name}
                              </p>
                                    <p>
                                <strong>Volume:</strong> {pub.volume}
                              </p>

                              {pub.publication_url && (
                                <p>
                                  <strong>URL:</strong>{" "}
                                  <a
                                    href={pub.publication_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary text-decoration-underline"
                                  >
                                    View Publication
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
                            id={`accordion-${pub._id}`}
                          >
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed bg-light fw-bold"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse-${pub._id}`}
                                >
                                  ABSTRACT
                                </button>
                              </h2>
                              <div
                                id={`collapse-${pub._id}`}
                                className="accordion-collapse collapse"
                                data-bs-parent={`#accordion-${pub._id}`}
                              >
<div
  className="accordion-body text-start"
  dangerouslySetInnerHTML={{
    __html: pub.abstract || "No abstract available."
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
