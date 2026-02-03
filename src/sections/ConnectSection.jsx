"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConnectSection() {
  const [connects, setConnects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-connect`)
      .then((res) => res.json())
      .then((json) => {
        if (json?.success && Array.isArray(json.data)) {
          setConnects(json.data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section className="py-4" style={{ background: "#151e54" }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {connects.map((c) => (
            <div key={c._id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                {/* IMAGE */}
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${c.image}`}
                  alt={c.title}
                  width={400}
                  height={250}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "250px" }}
                />

                {/* CONTENT */}
                <div className="card-body">
                  <h5 className="card-title text-uppercase fw-bold text-dark">
                    {c.title}
                  </h5>

                  <div
                    className="text-muted mb-3"
                    dangerouslySetInnerHTML={{ __html: c.description }}
                  />

                  <Link
                    href={getConnectLink(c.title)}
                    className="text-warning fw-bold text-decoration-none"
                  >
                    Know More <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* EMPTY STATE */}
          {connects.length === 0 && (
            <p className="text-center text-white">No data available</p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------
   TITLE → LINK MAPPING
---------------------------------------- */
function getConnectLink(title) {
  switch (title.toLowerCase()) {
    case "corporate connect":
      return "/corporate-connect";
    case "global connect":
      return "/studying-at-imt-hyderabad";
    case "community connect":
      return "/community-connect";
    default:
      return "#";
  }
}
