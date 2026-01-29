// Save this as: components/CasesArchive.jsx  (or inside your page)

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import DOMPurify from "dompurify";

export default function CasesArchive() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const sortedYears = [...journalYears].sort((a, b) => {
    const aNum = parseInt(a.split("-")[0]);
    const bNum = parseInt(b.split("-")[0]);
    return bNum - aNum;
  });

  useEffect(() => {
    axios
      .get("https://thekreativeweb.com/codes/imt_hydrabad/api/case_publication")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Cases fetch error:", err);
        setLoading(false);
      });
  }, []);

  const grouped = data.reduce((acc, item) => {
    const year = item.res_year || "Unknown";
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
        {/* SUB-TABS */}
        <nav className="nav nav-pills flex-wrap gap-2 mb-4 justify-content-center mt-4">
          {sortedYears.map((year) => {
            const yearKey = year.split("-")[0];
            const isActive = year === activeYear;
            return (
              <Link
                key={year}
                href={`#sub-case-${yearKey}`}
                className={`nav-link bg-light text-dark rounded-pill tab ${isActive ? "active" : ""
                  }`}
                data-bs-toggle="pill"
                role="tab"
              >
                {year}
              </Link>
            );
          })}
        </nav>

        {/* SUB-TAB CONTENT */}
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
                      <div
                        className="spinner-border text-warning"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : cases.length === 0 ? (
                    <div className="text-center py-5 text-muted">
                      <p>No cases published for {year} yet.</p>
                    </div>
                  ) : (
                    cases.map((item) => (
                      <div key={item.gen_id} className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img
                              src={
                                item.final_image

                                  ? item.final_image
                                  : ""
                              }
                              className="img-fluid rounded-start w-75"
                              alt={item.res_title}
                              style={{ height: 250 }}

                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <p className="card-title">
                                <strong>Name:</strong> {item.res_name}
                              </p>
                              <p className="card-text fs6">
                                <strong>Title:</strong> {item.res_title}
                              </p>
                              <p className="card-text fs6">
                                <strong>Authors:</strong> {item.res_authors}
                              </p>
                              {item.case_publisher && (
                                <p className="card-text fs6">
                                  <strong>Publisher:</strong>{" "}
                                  {item.case_publisher}
                                </p>
                              )}
                              {item.case_reff_no && (
                                <p className="card-text fs6">
                                  <strong>Reference No:</strong>{" "}
                                  {item.case_reff_no}
                                </p>
                              )}
                              {item.res_url && (
                                <p className="card-text fs6">
                                  <strong>URL:</strong>{" "}
                                  <a
                                    href={item.res_url}
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

                        {/* ABSTRACT ACCORDION */}
                        <div className="bg-light h-100 w-100 text-center py-2 rounded-4 fw-bold mb-3">
                          <div
                            className="accordion"
                            id={`accordion-case-${item.gen_id}`}
                          >
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed bg-light fw-bold rounded-4"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse-case-${item.gen_id}`}
                                >
                                  ABSTRACT
                                </button>
                              </h2>
                              <div
                                id={`collapse-case-${item.gen_id}`}
                                className="accordion-collapse collapse"
                                data-bs-parent={`#accordion-case-${item.gen_id}`}
                              >
                                <div
                                  className="accordion-body text-start"
                                  dangerouslySetInnerHTML={{
                                    __html: item.res_abstract
                                      ? DOMPurify.sanitize(item.res_abstract)
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

