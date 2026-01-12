// src/sections/ApprovalsAccreditation.jsx
"use client";

import Link from "next/link";

export default function ApprovalsAccreditation() {
  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5 position-relative"
          style={{
            backgroundImage: "url('/media/banners/contactus.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
            }}
          />
          <h2
            className="display-5 fw-bold mb-2"
            style={{ zIndex: 2, marginTop: "100px" }}
          >
            Approvals
          </h2>
          <p className="position-relative text-white" style={{ zIndex: 2 }}>
            Our accreditations reflect our dedication to excellence, integrity,{" "}
            <br />
            and innovation in education.
          </p>
        </div>

        {/* Breadcrumb */}
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
                  Approvals & Accreditation
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-4">
        <div className="container">
          {/* Main Tabs */}
          <nav className="nav nav-pills justify-content-center flex-wrap gap-2 mb-4">
            <Link
              className="nav-link rounded-pill bg-white active"
              data-bs-toggle="tab"
              href="#tab-aicte"
              role="tab"
            >
              AICTE Approvals
            </Link>
            <Link
              className="nav-link rounded-pill bg-white"
              data-bs-toggle="tab"
              href="#tab-aiu"
              role="tab"
            >
              AIU Certificates
            </Link>
            <Link
              className="nav-link rounded-pill bg-white"
              data-bs-toggle="tab"
              href="#tab-nba"
              role="tab"
            >
              NBA Accredited
            </Link>
            {/* <Link
              className="nav-link rounded-pill bg-white"
              data-bs-toggle="tab"
              href="#tab-saqs"
              role="tab"
            >
              SAQS Accredited
            </Link> */}
          </nav>

          <div className="tab-content mt-4 mb-4">
            {/* AICTE */}
            <div
              className="tab-pane fade show active bg-white p-4 rounded-4"
              id="tab-aicte"
              role="tabpanel"
            >
              <div className="card p-4">
                <h2
                  className="section-title text-center"
                  style={{ color: "#08317a" }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  AICTE Approvals
                </h2>
                <div className="table-responsive mt-4">
                  <table className="table table-bordered align-middle text-center">
                    <thead className="table-primary">
                      <tr>
                        <th scope="col">Academic Year</th>
                        <th scope="col">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          year: "2011-12",
                          link: "https://drive.google.com/file/d/1mtomUMSmHMvwPmsOFo8RWSVef7QU0MCi/view?usp=sharing",
                        },
                        {
                          year: "2012-13",
                          link: "https://drive.google.com/file/d/1_Ybx1EFFdmqV8F5w5TGo6h83_nEez1Bi/view?usp=sharing",
                        },
                        {
                          year: "2013-14",
                          link: "https://drive.google.com/open?id=1TBfLIjIXh-YHe1Dq4d_Y18G1EWb_6b3O",
                        },
                        {
                          year: "2014-15",
                          link: "https://drive.google.com/file/d/17Vw34zLiRDz6pGS9NW1GghVI3QkXbZYT/view?usp=sharing",
                        },
                        {
                          year: "2015-16",
                          link: "https://drive.google.com/open?id=1h86L3rlGv4rYtTiCMIKH7IEbtx9VZxbi",
                        },
                        {
                          year: "2016-17",
                          link: "https://drive.google.com/open?id=1ecQNzI3zNHgcGfywvIdW6N6z1eWqr6RK",
                        },
                        {
                          year: "2017-18",
                          link: "https://drive.google.com/open?id=1waV988BuOAs-RxlrMt0UabaBVz56-WJe",
                        },
                        {
                          year: "2018-19",
                          link: "https://drive.google.com/open?id=1N7g5QEUw8dmhhJHQt4vSz0cswCnzsp8Y",
                        },
                        {
                          year: "2019-20",
                          link: "https://drive.google.com/open?id=1huteQqIohunc2DE19MFNEfTV-zYILoEc",
                        },
                        {
                          year: "2020-21",
                          link: "https://drive.google.com/file/d/1WGI-RVVG7_WrKe8ft5LHRCVol9dEeniy/view?usp=sharing",
                        },
                        {
                          year: "2021-22",
                          link: "https://drive.google.com/file/d/1JxMM446f5TbzE2CeU8xhS-xNxkwpOJFH/view?usp=sharing",
                        },
                        {
                          year: "2022-23",
                          link: "https://drive.google.com/file/d/1IjwUDvdCLlyiAoL4CV4G84UxGl4UKqTI/view?usp=sharing",
                        },
                        {
                          year: "2023-24",
                          link: "https://drive.google.com/file/d/1JqX_ExIppJv3ynJ5tk4FrITUSzfU1pA8/view?usp=share_link",
                        },
                        {
                          year: "2024-25",
                          link: "https://drive.google.com/file/d/1BiF6t77wdmJwMXx3fBIq7PjlntuER09W/view?usp=sharing",
                        },
                        {
                          year: "2025-26",
                          link: "https://drive.google.com/file/d/1E_QsPVjZeBhRoyehHE5NuhRB2MSy6t_V/view?usp=sharing",
                        },
                      ].map((item, i) => (
                        <tr key={i}>
                          <td>{item.year}</td>
                          <td>
                            <Link
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-warning fw-semibold"
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

            {/* AIU */}
            <div
              className="tab-pane fade bg-white p-4 rounded-4"
              id="tab-aiu"
              role="tabpanel"
            >
              <ul
                className="nav nav-pills justify-content-center mb-4"
                id="aiuTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link rounded-pill active fw-semibold"
                    id="pgdm-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pgdm"
                    type="button"
                    role="tab"
                  >
                    PGDM
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link rounded-pill fw-semibold"
                    id="pgdm-finance-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pgdm-finance"
                    type="button"
                    role="tab"
                  >
                    PGDM - Finance
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link rounded-pill fw-semibold"
                    id="pgdm-marketing-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pgdm-marketing"
                    type="button"
                    role="tab"
                  >
                    PGDM - Marketing
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="aiuTabContent">
                {/* PGDM */}
                <div
                  className="tab-pane fade show active"
                  id="pgdm"
                  role="tabpanel"
                >
                  <div className="card shadow-sm p-4">
                    <h4 className="fw-bold text-warning mb-3">
                      PGDM - AIU Certificate
                    </h4>
                    <p>
                      The PGDM program offered by IMT Hyderabad is recognized as
                      equivalent to an MBA by the Association of Indian
                      Universities (AIU).
                    </p>
                    <div className="table-responsive mt-4">
                      <table className="table table-bordered align-middle text-center">
                        <thead className="table-warning">
                          <tr>
                            <th>Academic Year</th>
                            <th>View</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              year: "2024-25",
                              link: "https://drive.google.com/file/d/1F9Y4vH5QR2K0EpCN_9h4hPtOVU1NHnkB/view?usp=sharing",
                            },
                            {
                              year: "2023-24",
                              link: "https://drive.google.com/file/d/1FVSCp745uHLj3ndZeHIY03ulpG47bOxG/view?usp=share_link",
                            },
                            {
                              year: "2022-23",
                              link: "https://drive.google.com/file/d/1FVSCp745uHLj3ndZeHIY03ulpG47bOxG/view?usp=share_link",
                            },
                            {
                              year: "2021-22",
                              link: "https://drive.google.com/file/d/1DNMqVntL3GRoVnstIX7teCarH_E0acuX/view?usp=sharing",
                            },
                            {
                              year: "2020-21",
                              link: "https://drive.google.com/file/d/1WP9Bf3ScPYdqgB4EKFHYQo9tfI0TwX3K/view?usp=sharing",
                            },
                            {
                              year: "2019-20",
                              link: "https://drive.google.com/file/d/1Y2MGjoxmkGEP495SCM97iSeVAQBDa_Ei/view?usp=sharing",
                            },
                            {
                              year: "2018-19",
                              link: "https://drive.google.com/file/d/1wsWDnRedKQEIdRx1RwqHRO_vEQAv9rDV/view?usp=sharing",
                            },
                            {
                              year: "2017-18",
                              link: "https://drive.google.com/file/d/1wsWDnRedKQEIdRx1RwqHRO_vEQAv9rDV/view?usp=sharing",
                            },
                          ].map(({ year, link }) => (
                            <tr key={year}>
                              <td>{year}</td>
                              <td>
                                <Link
                                  href={link}
                                  target="_blank"
                                  className="btn btn-sm btn-warning fw-semibold"
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

                {/* PGDM Finance */}
                <div
                  className="tab-pane fade"
                  id="pgdm-finance"
                  role="tabpanel"
                >
                  <div className="card shadow-sm p-4">
                    <h4 className="fw-bold text-warning mb-3">
                      PGDM - Finance AIU Certificate
                    </h4>

                    <p>
                      The PGDM-Finance program is approved by AICTE and has
                      received equivalence to an MBA degree from AIU.
                    </p>

                    <div className="table-responsive mt-4">
                      <table className="table table-bordered align-middle text-center">
                        <thead className="table-primary">
                          <tr>
                            <th>Academic Year</th>
                            <th>View</th>
                          </tr>
                        </thead>

                        <tbody>
                          {[
                            {
                              year: "2026-30",
                              pdf: "/pdf/PGDM-Finance-AIU-2026-2030.pdf",
                            },
                            {
                              year: "2024-25",
                              link: "https://drive.google.com/file/d/12JTDsdF-97ytKQLA5E_Z4PwywNBkf5RU/view?usp=sharing",
                            },
                            {
                              year: "2023-24",
                              link: "https://drive.google.com/file/d/1aHf3xwBFpFV2B5WQlBHvbCeghVVSliRO/view?usp=share_link",
                            },
                            {
                              year: "2022-23",
                              link: "https://drive.google.com/file/d/1aHf3xwBFpFV2B5WQlBHvbCeghVVSliRO/view?usp=share_link",
                            },
                            {
                              year: "2021-22",
                              link: "https://drive.google.com/file/d/14fGBQVceuEdbA7wZhCoqHQ2yfUMcXcAK/view?usp=sharing",
                            },
                            {
                              year: "2020-21",
                              link: "https://drive.google.com/file/d/1kazLbEtgc_j8tQb4OWR6KAwQXBcsc8Cl/view?usp=sharing",
                            },
                            {
                              year: "2019-20",
                              link: "https://drive.google.com/file/d/1AJ0B9pchk2OZ-xC1ZO-eTlaMGb-POcWc/view?usp=sharing",
                            },
                            {
                              year: "2018-19",
                              link: "https://drive.google.com/file/d/1tEbwo5WDdYRt3uU70d-EerwKRS2XVbOh/view?usp=sharing",
                            },
                            {
                              year: "2017-18",
                              link: "https://drive.google.com/file/d/1tEbwo5WDdYRt3uU70d-EerwKRS2XVbOh/view?usp=sharing",
                            },
                          ].map(({ year, link }) => (
                            <tr key={year}>
                              <td>{year}</td>
                              <td>
                                <a
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-warning btn-sm"
                                >
                                  Click Here
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* PGDM Marketing */}
                <div
                  className="tab-pane fade"
                  id="pgdm-marketing"
                  role="tabpanel"
                >
                  <div className="card shadow-sm p-4">
                    <h4 className="fw-bold text-warning mb-3">
                      PGDM - Marketing AIU Certificate
                    </h4>
                    <p>
                      The PGDM-Marketing program of IMT Hyderabad is recognized
                      by AIU as equivalent to an MBA, ensuring its global
                      academic credibility.
                    </p>
                    <div className="table-responsive mt-4">
                      <table className="table table-bordered align-middle text-center">
                        <thead className="table-primary">
                          <tr>
                            <th>Academic Year</th>
                            <th>View</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              year: "2025-26",
                              link: "https://drive.google.com/file/d/1686v_e6wq4w1q5Sw1SS9Ch8qCSETq7Od/view?usp=sharing",
                            },
                            {
                              year: "2024-25",
                              link: "https://drive.google.com/file/d/1686v_e6wq4w1q5Sw1SS9Ch8qCSETq7Od/view?usp=sharing",
                            },
                            {
                              year: "2023-24",
                              link: "https://drive.google.com/file/d/18u_LLkiQ5iO-r3R-Bmr-gcngI7irE_8l/view?usp=sharing",
                            },
                            {
                              year: "2022-23",
                              link: "https://drive.google.com/file/d/1KK2oY300tU6U2vQrQhKHVzXx0dUXAnLH/view?usp=sharing",
                            },
                            {
                              year: "2021-22",
                              link: "https://drive.google.com/file/d/1KK2oY300tU6U2vQrQhKHVzXx0dUXAnLH/view?usp=sharing",
                            },
                            {
                              year: "2020-21",
                              link: "https://drive.google.com/file/d/1KK2oY300tU6U2vQrQhKHVzXx0dUXAnLH/view?usp=sharing",
                            },
                          ].map(({ year, link }) => (
                            <tr key={year}>
                              <td>{year}</td>
                              <td>
                                <Link
                                  href={link}
                                  target="_blank"
                                  className="btn btn-warning btn-sm"
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

            {/* NBA */}
            <div
              className="tab-pane fade bg-white p-4 rounded-4"
              id="tab-nba"
              role="tabpanel"
            >
              <h2
                className="section-title text-center mb-4"
                style={{ color: "#08317a" }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                NBA Accredited
              </h2>

              <ul
                className="nav nav-pills justify-content-center mb-4"
                id="offeringsTabs"
                role="tablist"
              >
                <li className="nav-item mx-1">
                  <button
                    className="nav-link rounded-pill active"
                    id="short-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#short"
                  >
                    PGDM-MARKETING PROGRAM
                  </button>
                </li>
                <li className="nav-item mx-1">
                  <button
                    className="nav-link rounded-pill"
                    id="long-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#long"
                  >
                    PGDM-AND-PGDM-FINANCE PROGRAM
                  </button>
                </li>
              </ul>
              <hr />

              <div className="tab-content card bg-light p-4">
                {/* Short Duration */}
                <div
                  className="tab-pane fade show active"
                  id="short"
                  role="tabpanel"
                >
                  <div className="table-responsive mt-4">
                    <table className="table table-bordered table-hover text-center align-middle">
                      <thead>
                        <tr>
                          <th>Academic Year</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            year: "2025-26",
                            link: "https://drive.google.com/file/d/1bHlGakZ1E9ajoxdpXHTu1LFy0GjwduO_/view?usp=sharing",
                          },
                          {
                            year: "2024-25",
                            link: "https://drive.google.com/file/d/1bHlGakZ1E9ajoxdpXHTu1LFy0GjwduO_/view?usp=sharing",
                          },
                          {
                            year: "2023-24",
                            link: "https://drive.google.com/file/d/1bHlGakZ1E9ajoxdpXHTu1LFy0GjwduO_/view?usp=sharing",
                          },
                          {
                            year: "2022-23",
                            link: "https://drive.google.com/file/d/1JP6ybvlqgAt_XwVfCzFIgqVAVCQlTPL_/view?usp=sharing",
                          },
                          {
                            year: "2021-22",
                            link: "https://drive.google.com/file/d/1JP6ybvlqgAt_XwVfCzFIgqVAVCQlTPL_/view?usp=sharing",
                          },
                          {
                            year: "2020-21",
                            link: "https://drive.google.com/file/d/1JP6ybvlqgAt_XwVfCzFIgqVAVCQlTPL_/view?usp=sharing",
                          },
                        ].map((item, i) => (
                          <tr key={i}>
                            <td>{item.year}</td>
                            <td>
                              <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-warning"
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

                {/* Long Duration */}
                <div className="tab-pane fade" id="long" role="tabpanel">
                  <div className="table-responsive mt-4">
                    <table className="table table-bordered table-hover text-center align-middle">
                      <thead>
                        <tr>
                          <th>Academic Year</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            year: "2024-25",
                            link: "https://drive.google.com/file/d/1jFwgcDjDtm1lEa7-Gw7x5LQyL7JedQ4M/view?usp=sharing",
                          },
                          {
                            year: "2023-24",
                            link: "https://drive.google.com/file/d/1jFwgcDjDtm1lEa7-Gw7x5LQyL7JedQ4M/view?usp=sharing",
                          },
                          {
                            year: "2022-23",
                            link: "https://drive.google.com/file/d/1jFwgcDjDtm1lEa7-Gw7x5LQyL7JedQ4M/view?usp=sharing",
                          },
                          {
                            year: "2021-22",
                            link: "https://drive.google.com/file/d/1K0v1AVmB_nkuKZfgxJBBAeTOmn2z0Ry_/view?usp=sharing",
                          },
                          {
                            year: "2020-21",
                            link: "https://drive.google.com/file/d/1uVxeVp-wPuMZc3WGLK-NHXYn_ilKgBJ1/view?usp=sharing",
                          },
                          {
                            year: "2019-20",
                            link: "https://drive.google.com/file/d/1lLsNyUXlGdAOtItgl3EHT7jFo9z5SGTK/view?usp=sharing",
                          },
                        ].map((item, i) => (
                          <tr key={i}>
                            <td>{item.year}</td>
                            <td>
                              <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-warning"
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

              {/* Accreditation Status */}
              {/* <div className="row mt-4">
                <div className="col-md-12 text-center">
                  <p>
                    <strong>NBA and NAAC Accreditation Status:</strong>{" "}
                    <Link
                      href="https://drive.google.com/file/d/1bLmlyUauLd17-XkCRiccEGuE6a6cCw4k/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-warning fw-semibold"
                    >
                      Click Here
                    </Link>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .nav-pills .nav-link.active {
        background-color: #ffc107 !important;
        color: #212529 !important;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 2;
      }
    `,
        }}
      />
    </>
  );
}
