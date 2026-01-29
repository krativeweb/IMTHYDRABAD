"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function PlacementDataSection() {
  // Initialize AOS
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }, []);

  // Placement data for each tab
  const placementData = {
    pgdm: [
      {
        year: "2023 - 25",
        link: "https://drive.google.com/file/d/1H7YBWB80qbv1oUWy3OIdMIzzKWXmrDKT/view?usp=sharing",
      },
      {
        year: "2022 - 24",
        link: "https://drive.google.com/file/d/1aSxe0RZl3TAmz2KuKFmsMT-KWgZkXQmS/view?usp=sharing",
      },
      {
        year: "2021 - 23",
        link: "https://drive.google.com/file/d/1qNrQVvwFfb19Ytdc8ZFFfoD2uWaBevX8/view?usp=sharing",
      },

      {
        year: "2020 - 22",
        link: "https://drive.google.com/file/d/14pKySbYLBdsHNtsopLVfbB67yUkbYQtL/view",
      },
      {
        year: "2019 - 21",
        link: "https://drive.google.com/file/d/1akoh7Ml_OTY6e7kIRLpxjDK3FDRJ4dQ5/view",
      },
      {
        year: "2018 - 20",
        link: "https://drive.google.com/file/d/19YY8GmXPbVxgKUVeu5tYxQHOUB2x5ybL/view",
      },
    ],
    "pgdm-finance": [
      {
        year: "2020 - 22",
        link: "https://drive.google.com/file/d/1xsIWjOCibHq0aeZMgPqcb1R0a0BuD0w_/view",
      },
      {
        year: "2019 - 21",
        link: "http://drive.google.com/file/d/1zu9dEIxxtQhjFd_6r8GzThDEiSLnHe__/view",
      },
      {
        year: "2018 - 20",
        link: "https://drive.google.com/file/d/1rZOzFUvlANWo7rJHiTI1l5rH2-8J2fdH/view",
      },
    ],
    "pgdm-marketing": [
      {
        year: "2021 - 23",
        link: "https://drive.google.com/file/d/1XV3vkjC7An0j0AT2Mf4_Ov7xMd-M8hdd/view",
      },
      {
        year: "2020 - 22",
        link: "https://drive.google.com/file/d/180qm15y4YS_vPpLIoqn54ksHWvvpsy_q/view",
      },
      {
        year: "2019 - 21",
        link: "https://drive.google.com/file/d/1j8SVJ3gEw3bQx1Fju7X0V_9-69grxZ8f/view",
      },
      {
        year: "2018 - 20",
        link: "https://drive.google.com/file/d/1Pn3AlbjbhlPhkCrGl_Y2YMcwkjDKgpY9/view",
      },
    ],
  };

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Faculty Hero */
      .faculty-hero {
        background: url("/media/banners/placement.webp") center/cover no-repeat;
        position: relative;
        height: 60vh;
      }
      .faculty-hero::before {
        content: "";
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

      /* AIU Certificates Tabs */
      .aiu-certificates .nav-pills .nav-link {
        border-radius: 50rem;
        background-color: #f1f1f1;
        color: #08317a;
        margin: 5px;
        padding: 10px 25px;
        transition: all 0.3s ease;
        font-weight: 600;
      }
      .aiu-certificates .nav-pills .nav-link.active {
        background-color: #ffc107;
        color: #000;
        font-weight: 600;
      }

      /* Card Styling */
      .aiu-certificates .card {
        background-color: #fff;
        border-radius: 12px;
        border: 1px solid #eee;
        padding: 1.5rem;
      }

      /* Table Styling */
      .aiu-certificates h4 {
        color: #08317a;
      }
      .table thead th {
        background-color: #08317a !important;
        color: #fff;
        font-weight: 600;
      }
      .table td {
        vertical-align: middle;
      }
      .table a.btn {
        background-color: #ffc107;
        color: #000;
        border: none;
        transition: all 0.3s ease;
      }
      .table a.btn:hover {
        background-color: #e0a800;
        color: #fff;
      }
      .table a.btn-outline-primary {
        border: 1px solid #08317a;
        color: #08317a;
      }
      .table a.btn-outline-primary:hover {
        background-color: #08317a;
        color: #fff;
      }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }
    `,
        }}
      />

      {/* Top Banner */}
      <div
        className="faculty-hero text-center text-white py-5"
        data-aos="fade-up"
      >
        <h2 className="display-5 fw-bold mb-2">Placement Data</h2>
        <p className="text-white">
          Proven outcomes through real-world success. <br />
          Our placement record reflects strong industry trust, competitive
          performance, and a network of distinguished recruiters.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb p-4">
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent p-0 m-0">
              <li className="breadcrumb-item">
                <Link
                  href="/"
                  className="text-white fw-bold"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item active text-warning fw-bold"
                aria-current="page"
              >
                Placement Data
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Placement Data Tabs Section */}
      <section className="aiu-certificates py-5 faculty-tabs model">
        <div className="container">
          {/* Tabs Navigation */}
          <ul
            className="nav nav-pills justify-content-center mb-4"
            id="aiuTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active fw-semibold"
                id="pgdm-tab"
                data-bs-toggle="pill"
                data-bs-target="#pgdm"
                type="button"
                role="tab"
                aria-controls="pgdm"
                aria-selected="true"
              >
                PGDM
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fw-semibold"
                id="pgdm-finance-tab"
                data-bs-toggle="pill"
                data-bs-target="#pgdm-finance"
                type="button"
                role="tab"
                aria-controls="pgdm-finance"
                aria-selected="false"
              >
                PGDM - Finance
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fw-semibold"
                id="pgdm-marketing-tab"
                data-bs-toggle="pill"
                data-bs-target="#pgdm-marketing"
                type="button"
                role="tab"
                aria-controls="pgdm-marketing"
                aria-selected="false"
              >
                PGDM - Marketing
              </button>
            </li>
          </ul>

          {/* Tabs Content */}
          <div className="tab-content" id="aiuTabContent">
            {/* PGDM Tab */}
            <div
              className="tab-pane fade show active"
              id="pgdm"
              role="tabpanel"
              aria-labelledby="pgdm-tab"
            >
              <div className="card shadow-sm p-4">
                <h4 className="fw-bold text-warning mb-3">
                  PGDM - Placement Data
                </h4>
                <div className="table-responsive mt-4">
                  <table className="table table-bordered align-middle text-center">
                    <thead className="table-warning">
                      <tr>
                        <th scope="col">Academic Year</th>
                        <th scope="col">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {placementData.pgdm.map((item, index) => (
                        <tr key={index}>
                          <td>{item.year}</td>
                          <td>
                            <Link
                              href={item.link}
                              className="btn btn-sm btn-warning rounded-pill fw-semibold"
                            >
                              Click Here
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* PGDM Finance Tab */}
            <div
              className="tab-pane fade"
              id="pgdm-finance"
              role="tabpanel"
              aria-labelledby="pgdm-finance-tab"
            >
              <div className="card shadow-sm p-4">
                <h4 className="fw-bold text-warning mb-3">
                  PGDM - Finance Placement Data
                </h4>
                <div className="table-responsive mt-4">
                  <table className="table table-bordered align-middle text-center">
                    <thead className="table-primary">
                      <tr>
                        <th>Academic Year</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {placementData["pgdm-finance"].map((item, index) => (
                        <tr key={index}>
                          <td>{item.year}</td>
                          <td>
                            <Link
                              href={item.link}
                              className="btn btn-primary rounded-pill btn-sm"
                            >
                              Click Here
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* PGDM Marketing Tab */}
            <div
              className="tab-pane fade"
              id="pgdm-marketing"
              role="tabpanel"
              aria-labelledby="pgdm-marketing-tab"
            >
              <div className="card shadow-sm p-4">
                <h4 className="fw-bold text-warning mb-3">
                  PGDM - Marketing Placement Data
                </h4>
                <div className="table-responsive mt-4">
                  <table className="table table-bordered align-middle text-center">
                    <thead className="table-primary">
                      <tr>
                        <th>Academic Year</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {placementData["pgdm-marketing"].map((item, index) => (
                        <tr key={index}>
                          <td>{item.year}</td>
                          <td>
                            <Link
                              href={item.link}
                              className="btn btn-primary rounded-pill btn-sm"
                            >
                              Click Here
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
