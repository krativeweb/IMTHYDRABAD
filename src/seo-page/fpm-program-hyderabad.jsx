"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function FPMProgram() {
  const [pageData, setPageData] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pageRes, studentRes] = await Promise.all([
          fetch(`${API_BASE}/api/fellowprogram-in-management`),
          fetch(`${API_BASE}/api/students-on-roll`),
        ]);

        const pageJson = await pageRes.json();
        const studentJson = await studentRes.json();

        setPageData(pageJson?.[0] || null);
        setStudents(studentJson?.data || []);
      } catch (error) {
        console.error("Failed to load FPM page data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* Loader */
  if (loading) return <Loader fullScreen />;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: `url(${API_BASE}${pageData?.banner_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: pageData?.banner_text }} />
        </div>

        {/* ================= BREADCRUMB ================= */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22, 57, 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold">
                  FPM-Program
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ================= OVERVIEW ================= */}
        <section className="py-5">
          <div className="container">
            <div
              dangerouslySetInnerHTML={{
                __html: pageData?.pgdm_overview,
              }}
            />
          </div>
        </section>

        {/* ================= STUDENTS ================= */}
        <section className="mt-4 mb-5">
          <div className="container bg-white p-4 rounded-4">
            <h2 className="text-center fw-bold mb-5">Students on Roll</h2>

            <div className="row">
              {students.map((student) => (
                <div key={student._id} className="col-12 col-md-6 mb-4">
                  <div className="card h-100 p-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <Image
                          src={`${API_BASE}/${student.image}`}
                          alt={student.name}
                          width={224}
                          height={224}
                          className="img-fluid rounded-start"
                          style={{ height: "14rem", objectFit: "cover" }}
                        />
                      </div>

                      <div className="col-md-8">
                        <div className="card-body">
                          <p>
                            <strong>Name:</strong> {student.name}
                          </p>
                          <p>
                            <strong>Joining Year:</strong>{" "}
                            {student.joining_year}
                          </p>
                          <p>
                            <strong>Specialization:</strong>{" "}
                            {student.specialization}
                          </p>
                          <p>
                            <strong>Qualification:</strong>{" "}
                            {student.qualification}
                          </p>
                          <p>
                            <strong>Research Interests:</strong>{" "}
                            {student.research_interests}
                          </p>
                          <p>
                            <strong>Email:</strong>{" "}
                            <Link href={`mailto:${student.email}`}>
                              {student.email}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{ __html: student.bio }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Faculty Hero */
        .faculty-hero {
          background: url('/media/banners/Group 12.jpg') !important;
          position: relative;
          background-size: cover !important;
          height: 60vh;
            background-position: center !important;
        }
        .faculty-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }
        .faculty-hero h2,
        .faculty-hero p {
          position: relative;
          z-index: 1;
        }
        .faculty-hero h2 {
          margin-top: 150px;
        }

        /* Card styling */
        .faculty-card {
          background: #f8f9fa;
          border: none;
          border-radius: 1.5rem;
        }

        /* Image glow & hover effect */
        .faculty-img {
          border-radius: 1.2rem;
          transition: transform 0.4s ease;
        }
        .faculty-img:hover {
          transform: scale(1.03);
        }

        /* Social icons */
        .social-icon {
          display: inline-flex;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          background: #ffc107;
          color: #ffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* Table styling */
        .table thead th {
          background-color: #08317a !important;
          color: #fff;
          font-weight: 600;
        }
        .table td, .table th {
          vertical-align: middle;
        }
    `,
        }}
      />
    </>
  );
}
