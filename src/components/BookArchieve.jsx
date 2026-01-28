"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const BookArchieve = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ---------------- FETCH BOOKS ---------------- */
  useEffect(() => {
    axios
      .get(`${API_URL}/api/research-books`)
      .then((res) => {
        setData(res.data?.data || []);
      })
      .catch((err) => {
        console.error("Books fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, [API_URL]);

  return (
    <div className="tab-content container mt-4">
      <div
        className="tab-pane fade bg-white p-4 rounded-4"
        id="tab-books"
        role="tabpanel"
      >
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Author Name</th>
                <th>Name of the Book</th>
                <th>Chapter Edited in the Book</th>
                <th>Published</th>
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
                    No book records available.
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item._id}>
                    <td>{item.author_name}</td>
                    <td>{item.book_name}</td>
                    <td>{item.chapter_edited || "-"}</td>
                    <td>{item.published}</td>
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

export default BookArchieve;
