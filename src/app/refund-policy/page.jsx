"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function RefundPolicySection() {
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
        background: url("/media/banners/aboutus.webp") center/cover no-repeat, #f0f0f0;
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

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      /* Refund Policy Section */
      .model .card {
        background-color: #f9f9f9;
        border-radius: 15px;
      }
      .model ul {
        list-style-type: disc;
        margin-left: 20px;
        padding-left: 20px;
      }
      .model ul li {
        margin-bottom: 8px;
        line-height: 1.6;
      }

      /* Nav Pills */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #08317a;
        margin: 5px;
        transition: all 0.3s;
        padding: 10px 20px;
        font-size: 1rem;
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107;
        color: #000;
      }
    `,
  }}
/>


      {/* Top Banner */}
      <div className="faculty-hero text-center text-white py-5" data-aos="fade-up">
        <h2 className="display-5 fw-bold mb-2">Refund Policy</h2>
        <p className="text-white">
          Committed to fairness and transparency in every process. <br />
Our refund policy ensures clarity, accountability, and compliance with all regulatory standards.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb p-4">
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent p-0 m-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white fw-bold" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                Refund Policy
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Refund Policy Section */}
      <section className="refund-policy py-5 model">
        <div className="container">
          <div className="card shadow p-4">
            <h3 className="fw-bold mb-4 text-center text-warning">Refund Policy</h3>
            <p>
              IMT Hyderabad follows the <strong> AICTE guidelines</strong> for refund policy.
            </p>
            <p>
              The candidates who have been provisionally admitted into
              <strong> PGDM, PGDM (Logistics & Supply Chain Management), PGDM (Information Technology), PGDM
              (Marketing), and PGDM (Finance)</strong> may request for refund of fee by filling the refund form in their
              ERP portal till the last date of refund issued by AICTE. Post the last date of refund issued by AICTE,
              students can submit the refund request via email as well.
            </p>
            <p>
              The cut-off date for all the two-year programs of IMT Hyderabad i.e. <strong>PGDM, PGDM (Logistics &
              Supply Chain Management), PGDM (Information Technology), PGDM (Marketing), and PGDM (Finance)</strong> is
              <strong> September 11th, 2024</strong>. The academic session for all the above-stated programs starts from
              <strong> June 19th, 2024</strong>. The refund shall be made after deduction of the cancellation charges as
              shown below:
            </p>
            <div className="table-responsive mt-4">
              <table className="table table-bordered table-striped align-middle">
                <thead className="table-primary text-center">
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Situation</th>
                    <th scope="col">Refund</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td>On request received before the start of the session (June 19th, 2024)</td>
                    <td>Entire fee deposited by the student minus ₹1,000/-</td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td>
                      On request received after commencement of the program (June 19th, 2024) and the vacated seat is
                      filled by another student by the last date of admission (Sep 15th, 2024)
                    </td>
                    <td>
                      Entire fee deposited minus ₹1,000/- processing fee and proportionate deductions (₹600/day) for
                      administration & facilities from June 19th, 2024
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">3</td>
                    <td>
                      On request received after the last date of withdrawal (Sep 11th, 2024) and the vacated seat is not
                      filled by another candidate
                    </td>
                    <td>Security deposit of ₹23,000/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold text-warning mb-3">Note:</h5>
              <ul>
                <li>
                  The foundation module is part of the academic curriculum of IMT Hyderabad for all the two-year PGDM
                  programs and hence compulsory for all students.
                </li>
                <li>
                  Last date for cancellation of admission in PGDM programs as per AICTE is{" "}
                  <strong>September 11th, 2024</strong>.
                </li>
                <li>
                  Last date for admissions in PGDM programs as per AICTE is <strong>September 15th, 2024</strong>.
                </li>
                <li>
                  Security deposit includes <strong>₹15,000</strong> caution money and <strong>₹8,000</strong> lifetime
                  alumni fee.
                </li>
                <li>
                  For refund requests received post the cut-off date (<strong>Sep 11th, 2024</strong>), cancellation
                  charges will be calculated on a <strong>pro-rata basis</strong>. For instance, if a student applies for
                  a refund on the 4th day after the cut-off date, the cancellation charges will be calculated as{" "}
                  <em>entire Academic fee ÷ 24 × 4</em>.
                </li>
                <li>Fraction of any month will be treated as one unit.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}