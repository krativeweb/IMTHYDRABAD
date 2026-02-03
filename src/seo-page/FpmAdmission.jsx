"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function FpmAdmission() {
  const [activeTab, setActiveTab] = useState("overview");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------- Fetch API ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API}/api/fellow-program-management`);
        const json = await res.json();
        setData(json?.[0]);
      } catch (err) {
        console.error("FPM API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader fullScreen />;

  /* ---------------- Tab Content Resolver ---------------- */
  const tabContentMap = {
    overview: data?.program_overview,
    specializations: data?.specializations,
    admission: data?.admission_process,
    financial: data?.financial_aid,
    aicte: data?.aicte_approval,
    contact: data?.contact_us,
  };

  return (
    <>
      {/* HERO */}
      <section
        className="faculty-hero text-center text-white py-5 position-relative"
        style={{
          backgroundImage: `url(${API}/${data?.banner_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div className="overlay"></div>

        <div
          className="container position-relative z-2"
          style={{ marginTop: "150px" }}
          dangerouslySetInnerHTML={{ __html: data?.banner_text }}
        />
      </section>

      {/* BREADCRUMB */}
      <div className="breadcrumb p-4" style={{ background: "rgb(22,57,119)" }}>
        <div className="container-fluid">
          <ol className="breadcrumb bg-transparent p-0 m-0">
            <li className="breadcrumb-item">
              <Link
                href="/"
                className="text-white fw-bold text-decoration-none"
              >
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active text-warning fw-bold">
              {data?.page_title}
            </li>
          </ol>
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
          <div
            className="tab-content bg-light p-4 rounded shadow-sm"
            dangerouslySetInnerHTML={{
              __html: tabContentMap[activeTab] || "",
            }}
          />
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
    </>
  );
}
