"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const MagazineArchieve = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ---------------- FETCH MAGAZINES ---------------- */
  useEffect(() => {
    axios
      .get(`${API_URL}/api/research-magazines`)
      .then((res) => {
        setData(res.data?.data || []);
      })
      .catch((err) => {
        console.error("Magazines fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, [API_URL]);

  return (
    <div className="tab-content container mt-4">
      <div
        className="tab-pane fade bg-white p-4 rounded-4"
        id="tab-magazines"
        role="tabpanel"
      >
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SNo</th>
                <th>Author Name</th>
                <th>Title of the article</th>
                <th>Publisher</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    <div className="spinner-border text-warning" />
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4">
                    No magazine articles available.
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.author_name}</td>
                    <td>{item.article_title}</td>
                    <td>{item.publisher}</td>
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

export default MagazineArchieve;
