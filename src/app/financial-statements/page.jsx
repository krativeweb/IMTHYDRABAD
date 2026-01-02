"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function FinancialStatements() {
  // ✅ Separate financial data for both tabs
  const FinancialData = {
    incomeExpenditure: [
      {
        year: "2024 - 25",
        link: "https://drive.google.com/file/d/1sJKBIzvcPdobqPysKs8QclLFiFt7BoCx/view?usp=sharing",
      },
      {
        year: "2023 - 24",
        link: "https://drive.google.com/file/d/1cC4Vha2oPCxkXi-8lYf5CJ-BoLVBMpy8/view",
      },
      {
        year: "2022 - 23",
        link: "https://drive.google.com/file/d/1KFHTJ4mW3Jl_Dkr6eSoUmrU_EA8bOeO2/view",
      },
      {
        year: "2021 - 22",
        link: "https://drive.google.com/file/d/1bPV7jGQ5wEzed8e7x14qDmqypFRhz-5e/view",
      },
      {
        year: "2020 - 21",
        link: "https://drive.google.com/file/d/1AvWNIfU0870xzJPNl2e2xuy-tgO2McuM/view",
      },
      {
        year: "2019 - 20",
        link: "https://drive.google.com/file/d/1BzoABySXIZzf1IdBCx2dZo2ttDnv4ypA/view",
      },
    ],
    balanceSheet: [
        {
        year: "2024 - 25",
        link: "https://drive.google.com/file/d/1MNOAbXNi_x_7ogSHfZp2Oxspk6RexIoh/view?usp=sharing",
      },
      {
        year: "2023 - 24",
        link: "https://drive.google.com/file/d/1a1U1NnKKfM24vJjtLZM5HESgwHgYuGe7/view",
      },
      {
        year: "2022 - 23",
        link: "https://drive.google.com/file/d/1QZzG9SRVtWHIA1NmGtmD8jd3pNM2Q0LY/view",
      },
      {
        year: "2021 - 22",
        link: "https://drive.google.com/file/d/1qLnbVCqOSKbgKSH40nVi0htRutcHL_3q/view",
      },
      {
        year: "2020 - 21",
        link: "https://drive.google.com/file/d/1y94s_DpafLHxio1Od9H9tA8zVfRYXzbN/view",
      },
      {
        year: "2019 - 21",
        link: "https://drive.google.com/file/d/1odaZWLoeRImuwwL4Gju2Z30SDBgVmddd/view",
      },
      {
        year: "2018 - 20",
        link: "https://drive.google.com/file/d/1z-IgdKFkMT8hNk1-dWVm3YZ7ThZfMpPj/view",
      },
    ],
  };

  // ✅ Initialize AOS animation
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .faculty-hero {
          background: url("/media/banners/aboutus.webp") center/cover no-repeat;
          position: relative;
          height: 60vh;
            background-position: center !important;
        }
        .faculty-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }
        .faculty-hero h2 {
          margin-top: 150px;
        }
        .nav-pills .nav-link.active {
          background: #ffc107 !important;
          color: #000 !important;
        }
        .table thead th {
          background-color: #08317a !important;
          color: #fff;
          font-weight: 600;
        }
        .table a.btn {
          background-color: #ffc107;
          color: #000;
          border: none;
        }
        .table a.btn:hover {
          background-color: #e0a800;
          color: #fff;
        }

        .faculty-hero {
          background: url("/media/banners/aboutus.webp") center/cover no-repeat;
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
        .faculty-card {
          background: #f8f9fa;
          border: none;
          border-radius: 1.5rem;
        }
        .faculty-img {
          border-radius: 1.2rem;
          transition: transform 0.4s ease;
        }
        .faculty-img:hover {
          transform: scale(1.03);
        }
        .social-icon {
          display: inline-flex;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          background: #ffc107;
          color: #ffffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
          color: #ffffffff;
          transform: translateY(-3px);
        }
        .faculty-tabs .nav-pills .nav-link.active {
          background: #ffc107 !important;
          color: #000000ff !important;
        }
        .small-placeholder::placeholder {
          font-size: 0.85rem;
        }
        .nav-pills .nav-link.active,
        .nav-pills .show > .nav-link {
          border-radius: 50rem !important;
          background: #ffc107 !important;
          color: #333 !important;
          transition: all 0.3s !important;
        }
        .nav-pills .nav-link {
          border-radius: var(--bs-nav-pills-border-radius);
          background-color: #e9ecef;
          border-radius: 30px;
          color: #333;
        }
          /* Gap between tab pills */
#financialTab {
  gap: 12px; /* adjust as needed: 10px–20px */
}

/* Optional: mobile pe thoda aur gap */
@media (max-width: 768px) {
  #financialTab {
    gap: 10px;
  }
}

    `,
        }}
      />

      {/* ✅ Hero Section */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
        >
          <h2 className="display-5 fw-bold mb-2">Financial Statements</h2>
          <p className="text-white">
            Transparent and accountable governance through publicly available
            audited statements.
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
                  Financial Statements
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ✅ Tabs Section */}
      <section className="py-5">
        <div className="container">
          <ul
            className="nav nav-pills justify-content-center mb-4"
            id="financialTab"
            role="tablist"
            data-aos="zoom-in"
          >
            <li className="nav-item " role="presentation">
              <button
                className="nav-link active fw-semibold"
                id="income-tab"
                data-bs-toggle="pill"
                data-bs-target="#income"
                type="button"
                role="tab"
                aria-controls="income"
                aria-selected="true"
              >
                Income & Expenditure
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fw-semibold"
                id="balance-tab"
                data-bs-toggle="pill"
                data-bs-target="#balance"
                type="button"
                role="tab"
                aria-controls="balance"
                aria-selected="false"
              >
                Balance Sheet
              </button>
            </li>
          </ul>

          <div className="tab-content" id="financialTabContent">
            {/* Income & Expenditure */}
            <div
              className="tab-pane fade show active"
              id="income"
              role="tabpanel"
              data-aos="fade-up"
            >
              <div className="card shadow-sm p-4">
                <div className="table-responsive mt-3">
                  <table className="table table-bordered text-center align-middle">
                    <thead>
                      <tr>
                        <th>Financial Year</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FinancialData.incomeExpenditure.map((item, index) => (
                        <tr key={index}>
                          <td>{item.year}</td>
                          <td>
                            <Link
                              href={item.link}
                              className="btn btn-sm"
                              target="_blank"
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

            {/* Balance Sheet */}
            <div
              className="tab-pane fade"
              id="balance"
              role="tabpanel"
              data-aos="fade-up"
            >
              <div className="card shadow-sm p-4">
                <div className="table-responsive mt-3">
                  <table className="table table-bordered text-center align-middle">
                    <thead>
                      <tr>
                        <th>Financial Year</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FinancialData.balanceSheet.map((item, index) => (
                        <tr key={index}>
                          <td>{item.year}</td>
                          <td>
                            <Link
                              href={item.link}
                              className="btn btn-sm"
                              target="_blank"
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
