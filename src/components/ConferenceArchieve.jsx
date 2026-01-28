"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const ConferenceArchieve = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ---------------- FETCH CONFERENCE DATA ---------------- */
  useEffect(() => {
    axios
      .get(`${API_URL}/api/research-conference-proceeding`)
      .then((res) => {
        setData(res.data?.data || []);
      })
      .catch((err) => {
        console.error("Conference fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, [API_URL]);

  return (
    <div className="tab-content container mt-4">
      <div
        className="tab-pane fade bg-white p-4 rounded-4"
        id="tab-conference"
        role="tabpanel"
      >
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Author Name</th>
                <th>Title of the article</th>
                <th>Published / Presented</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    <div className="spinner-border text-warning" />
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-4">
                    No conference proceedings available.
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item._id}>
                    <td>{item.author_name}</td>
                    <td>{item.article_title}</td>
                    <td>{item.published_presented}</td>
                    <td>{item.year}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConferenceArchieve;
