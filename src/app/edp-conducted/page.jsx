'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EDPConducted() {
  // Embedded data for EDP programs
  const data = [
    {
      id: 1,
      title: 'Finance and Accounting Excellence Program: Strategic Financial Management',
      company: 'Telangana State Road Transport Corporation',
      programDirector: 'Prof. (Dr.) A. Sarath Babu',
      image: '/images/EDP-1.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 2,
      title: 'Mastering People Management and Team Leadership',
      company: 'BHARAT Financial Inclusion Ltd',
      programDirector: 'Prof. (Dr.) Romina Mathew',
      image: '/images/EDP-2.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 3,
      title: 'CoroElite – Sales Excellence in Retail',
      company: 'Coromandel International Ltd',
      programDirector: 'Prof. (Dr.) A. Sarath Babu',
      image: '/images/EDP-3.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 4,
      title: 'Mastering People Management & Team Leadership',
      company: 'BHARAT Financial Inclusion Ltd.',
      programDirector: 'Prof. (Dr.) Pavan Kumar Balivada',
      image: '/images/EDP-4.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 5,
      title: 'Middle Management Development Program',
      company: 'Greenko Group',
      programDirector: 'Prof. (Dr.) Pavan Kumar Balivada & Prof. (Dr.) A. Sarath Babu',
      image: '/images/EDP-5.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 6,
      title: 'Leadership Training Program: Navigating High-Pressure Environments',
      company: 'Telangana State Road Transport Corporation',
      programDirector: 'Prof. Dhananjay Singh',
      image: '/images/EDP-6.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 7,
      title: 'Building Resilient Leadership for Navigating Change',
      company: 'Telangana State Road Transport Corporation',
      programDirector: 'Prof. Dhananjay Singh',
      image: '/images/EDP-6.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 8,
      title: 'Leadership Training Program: Navigating High-Pressure EnvironmentsMastering People Management and Team Leadership',
      company: 'Telangana State Road Transport Corporation',
      programDirector: 'Prof. (Dr.) Romina Mathew',
      image: '/images/EDP-7.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 9,
      title: 'ASPIRE 6.0 Training Program',
      company: 'Apollo Tyres Ltd',
      programDirector: 'Prof. (Dr.) A Sarath Babu & Prof Dhananjay Singh',
      image: '/images/EDP-8.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 10,
      title: 'Middle Management Development Program',
      company: 'Greenko Group',
      programDirector: 'Prof. (Dr.) Romina Mathew & Prof. (Dr.) A Sarath Babu',
      image: '/images/EDP-9.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 11,
      title: 'Strategic Business Planning and Effective Leadership',
      company: 'Telangana State Road Transport Corporation',
      programDirector: 'Prof. (Dr.) Pavan Kumar Balivadaw',
      image: '/images/EDP-10.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
    {
      id: 12,
      title: 'Mastering People Management & Team Leadership',
      company: 'BHARAT Financial Inclusion Ltd',
      programDirector: 'Prof. (Dr.) Romina Mathew',
      image: '/images/EDP-11.webp',
      month: 'Unknown',
      year: 'Unknown',
    },
  ];

  // State for search filters
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Handle search
  const handleSearch = () => {
    const filtered = data.filter((program) => {
      const monthMatch = selectedMonth ? program.month === selectedMonth : true;
      const yearMatch = selectedYear ? program.year === selectedYear : true;
      return monthMatch && yearMatch;
    });
    setFilteredData(filtered);
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

  // Months and years for dropdowns
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const years = ['2025', '2024', '2023', '2022', '2021', '2020', '2019'];

  return (
    <>
      {/* Embedded CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Faculty Hero */
        .faculty-hero {
          background: url('/media/hero.webp');
          position: relative;
          background-size: cover;
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

        /* Tabs (unused but retained from original) */
        .faculty-tabs .nav-pills .nav-link {
          border-radius: 50rem;
          background: #e9ecef;
          color: #333;
          transition: all 0.3s;
        }
        .faculty-tabs .nav-pills .nav-link.active {
          background: #ffc107;
          color: #000000;
        }

        /* Custom card styling */
        .card {
          border-radius: 1rem;
        }
        .card-img-top {
          width: 100%;
          height: auto;
          border-radius: 0.8rem;
        }
        .btn-warning {
          background-color: #ffc107;
          border-color: #ffc107;
        }
        .btn-warning:hover {
          background-color: #e0a800;
          border-color: #e0a800;
        }
      `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Faculty Section - Hero and Breadcrumb */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/hero.webp')",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center !important",
            height: "60vh",
          }}
        >
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">
            EDP Conducted
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            animi illum <br /> facere fuga eaque ducimus, praesentium in
            distinctio
          </p>
        </div>
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22, 57, 119)" }}
        >
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
                  EDP Conducted
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section>
        <div className="container mt-4" data-aos="fade-up" data-aos-delay="200">
          <div className="card p-2 rounded-5">
            <div className="card-body">
              <div className="row mx-4">
                <div className="col-md-5 mb-2">
                  <label htmlFor="monthSelect" className="form-label">
                    Select Month
                  </label>
                  <select
                    className="form-select"
                    id="monthSelect"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    required
                  >
                    <option value="">Months</option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-5 mb-2">
                  <label htmlFor="yearSelect" className="form-label">
                    Select Year
                  </label>
                  <select
                    className="form-select"
                    id="yearSelect"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    required
                  >
                    <option value="">Years</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-2" style={{ marginTop: "30px" }}>
                  <button
                    className="bg-warning px-4 py-2 rounded-pill border-0"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EDP Cards */}
        <div className="container mt-4">
          {filteredData.length === 0 ? (
            <p className="text-center">
              No programs found for the selected filters.
            </p>
          ) : (
            <div className="row">
              {filteredData.map((program) => (
                <div
                  className="col-md-4 p-4 d-flex"
                  key={program.id}
                  data-aos="fade-up"
                  data-aos-delay={program.id * 100}
                >
                  <div className="card p-2 rounded-4 h-100">
                    <div className="card-body">
                      <div className="img">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="img-responsive img-thumbnail faculty-img card-img-top"
                        />
                      </div>
                      <div className="row mt-3 mb-3">
                        <h5 className="fs-6 fw-bold">{program.title}</h5>
                        <div className="col-sm-6 mt-2">
                          <strong>Company</strong>
                        </div>
                        <div className="col-sm-6 mt-2">
                          <p>{program.company}</p>
                        </div>
                        <div className="col-sm-6 mt-1">
                          <strong>Program Director</strong>
                        </div>
                        <div className="col-sm-6 mt-1">
                          <p>{program.programDirector}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                          <button className="rounded-pill btn btn-warning px-3 py-2">
                            About the Program
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}