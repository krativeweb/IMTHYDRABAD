"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const NewsArchieve = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ===== STATIC YEARS ===== */
  const years = [
    "2024-25",
    "2023-24",
    "2022-23",
    "2020-21",
    "2019-20",
    "2017-18",
  ];

  /* ---------------- FETCH NEWS ARTICLES ---------------- */
  useEffect(() => {
    axios
      .get(`${API_URL}/api/research-news-article`)
      .then((res) => {
        setData(res.data?.data || []);
      })
      .catch((err) => {
        console.error("News article fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, [API_URL]);

  /* Helper: get content by year */
  const getContentByYear = (year) =>
    data.find((item) => item.year === year)?.content || "";

  return (
    <div className="tab-content container mt-4">
      <div
        className="tab-pane fade bg-white p-4 rounded-4"
        id="tab-article"
        role="tabpanel"
      >
        {/* ===== STATIC YEAR TABS ===== */}
        <nav className="nav nav-pills flex-wrap gap-2 mb-4 justify-content-center mt-4">
          {years.map((year, index) => (
            <a
              key={year}
              className={`nav-link bg-light text-dark rounded-pill ${
                index === 0 ? "active" : ""
              }`}
              data-bs-toggle="pill"
              href={`#news-${year.replace(/\W/g, "")}`}
              role="tab"
            >
              {year}
            </a>
          ))}
        </nav>

        {/* ===== TAB CONTENT ===== */}
        <div className="tab-content container-sm">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-warning" />
            </div>
          ) : (
            years.map((year, index) => {
              const content = getContentByYear(year);

              return (
                <div
                  key={year}
                  className={`tab-pane fade p-2 text-center ${
                    index === 0 ? "show active" : ""
                  }`}
                  id={`news-${year.replace(/\W/g, "")}`}
                  role="tabpanel"
                >
                  {content ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content),
                      }}
                    />
                  ) : (
                    <p className="text-muted">
                      No articles available for {year}.
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsArchieve;
