'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function PlacementData() {
  // Placement data
  const placementData = {
    pgdm: [
      { year: '2020 - 22', link: '#' },
      { year: '2019 - 21', link: '#' },
      { year: '2018 - 20', link: '#' },
    ],
    pgdmFinance: [
      { year: '2020 - 22', link: '#' },
      { year: '2019 - 21', link: '#' },
      { year: '2018 - 20', link: '#' },
    ],
    pgdmMarketing: [
      { year: '2021 - 23', link: '#' },
      { year: '2020 - 22', link: '#' },
      { year: '2019 - 21', link: '#' },
      { year: '2018 - 20', link: '#' },
    ],
  };

  // Initialize AOS
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <>
      {/* Embedded CSS */}
      <style jsx global>{`
        /* Faculty Hero */
        .faculty-hero {
          background: url('/media/banners/placement.webp') !important;
          position: relative;
          background-size: cover !important;
          height: 60vh;
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
        .aiu-certificates .card {
          background-color: #fff;
          border-radius: 12px;
          border: 1px solid #eee;
        }

        /* Tabs */
        .aiu-certificates .nav-pills .nav-link {
          border-radius: 50rem;
          background-color: #f1f1f1;
          color: #08317a;
          margin: 5px;
          padding: 10px 25px;
          transition: all 0.3s ease;
        }
        .aiu-certificates .nav-pills .nav-link.active {
          background: #ffc107 !important;
          color: #000 !important;
          font-weight: 600;
        }

        /* Table styling */
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
  
      `}</style>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Faculty Section - Hero and Breadcrumb */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/placement.webp')",
            position: 'relative',
            backgroundSize: 'cover',
            height: '60vh',
          }}
        >
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">
            Placement Data
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi illum <br /> facere fuga eaque
            ducimus, praesentium in distinctio.
          </p>
        </div>
        <div className="breadcrumb p-4" style={{ backgroundColor: 'rgb(22, 57, 119)' }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
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
            <ul className="nav nav-pills justify-content-center mb-4" id="aiuTab" role="tablist" data-aos="zoom-in">
              {[
                { id: 'pgdm', label: 'PGDM' },
                { id: 'pgdm-finance', label: 'PGDM - Finance' },
                { id: 'pgdm-marketing', label: 'PGDM - Marketing' },
              ].map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link fw-semibold ${tab.id === 'pgdm' ? 'active' : ''}`}
                    id={`${tab.id}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#${tab.id}`}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={tab.id === 'pgdm'}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Tabs Content */}
            <div className="tab-content" id="aiuTabContent">
              {/* PGDM Tab */}
              <div
                className="tab-pane fade show active"
                id="pgdm"
                role="tabpanel"
                aria-labelledby="pgdm-tab"
                data-aos="fade-up"
              >
                <div className="card shadow-sm p-4">
                  <h4 className="fw-bold text-warning mb-3">PGDM - Placement Data</h4>
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
                              <Link href={item.link} className="btn btn-sm btn-warning fw-semibold">
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
                data-aos="fade-up"
              >
                <div className="card shadow-sm p-4">
                  <h4 className="fw-bold text-warning mb-3">PGDM - Finance Placement Data</h4>
                  <div className="table-responsive mt-4">
                    <table className="table table-bordered align-middle text-center">
                      <thead className="table-primary">
                        <tr>
                          <th>Academic Year</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {placementData.pgdmFinance.map((item, index) => (
                          <tr key={index}>
                            <td>{item.year}</td>
                            <td>
                              <Link href={item.link} className="btn btn-sm btn-warning fw-semibold">
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
                data-aos="fade-up"
              >
                <div className="card shadow-sm p-4">
                  <h4 className="fw-bold text-warning mb-3">PGDM - Marketing Placement Data</h4>
                  <div className="table-responsive mt-4">
                    <table className="table table-bordered align-middle text-center">
                      <thead className="table-primary">
                        <tr>
                          <th>Academic Year</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {placementData.pgdmMarketing.map((item, index) => (
                          <tr key={index}>
                            <td>{item.year}</td>
                            <td>
                              <Link href={item.link} className="btn btn-sm btn-warning fw-semibold">
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
      </section>
    </>
  );
}
