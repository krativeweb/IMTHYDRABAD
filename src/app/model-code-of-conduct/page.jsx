"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ModelCodeSection() {
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
      .faculty-hero {
        background: url("/media/banners/pgdmfinance.webp") center/cover no-repeat!important;
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
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 1;
      }
      .faculty-hero h2 {
        margin-top: 150px;
      }
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

      <section className="faculty-section">
        {/* Top Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
        >
          <h2 className="display-5 fw-bold mb-2">Model Code of Conduct</h2>
          <p className="text-white">
            Rooted in values that define our community. <br />
            Our code of conduct promotes respect, discipline, and
            professionalism in every interaction and endeavor.
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
                    className="text-white fw-bold text-decoration-none"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Model Code of Conduct
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Model Code of Conduct Section */}
        <section className="model py-5">
          <div className="container">
            <div className="card p-4 shadow-lg border-0">
              <h2
                className="text-center mb-4 fw-bold"
                style={{ color: "#08317a" }}
              >
                Model Code of Conduct
              </h2>
              <p>
                IMT upholds a set of standards that govern its global activities
                and stakeholder relationships. The standards explained in this
                “Code of Conduct Commandments” are the ethical foundation of the
                institute and apply to all transactions/dealings undertaken by
                the institute. IMT believes that all employees must be aware of
                and abide with its values and policies.
              </p>
              <p>
                <strong>To be read and signed by all IMT employees</strong>{" "}
                (full time regular, contractual, temporary ad-hoc & consultants
                / advisors)
              </p>

              <ul className="list-unstyled">
                {[
                  "All employees are expected to maintain a high standard of discipline, good conduct and behavior.",
                  "Being in a high-end service industry of providing Education and Executive Learning and Development, it is of utmost importance for all IMT employees to present themselves in an acceptable manner.",
                  "All employees are expected to be enthusiastic, honest, professional, and interested in all dealings with the various stakeholders of IMT.",
                  "Employees shall be regular in attendance and punctual in maintaining the office timings.",
                  "Employees shall devote their whole time to the service of the Institute and shall not engage directly or indirectly in any trade, business, or occupation, or any other educational institute on part-time whether honorary or otherwise. However, on a limited basis, the Director may approve short-term visiting teaching assignments, only in Institutions of repute.",
                  "Employees shall not enter into any monetary dealings with Institute’s suppliers or contractors or students, nor accept any present or gratification in any form from them.",
                  "Employees going out during office hours should always take permission from their respective superiors. If immediate superior is not available, they must obtain permission of next higher authority.",
                  "Employees shall endeavor to continuously promote the interest of the Institute and serve the Institute, its associates/branch anywhere in India/abroad whether existing or to be established in future in such capacity as the Institute may decide.",
                  "Staff members shall intimate to the Institute in writing about any change in their residential address.",
                  "Employees shall not leak out any information or divulge any secret of the institute pertaining to the affairs of the Institute.",
                  "Employees shall not remove books, articles, pictures, documents or any other assets under their control or from any other place of the Institute without prior permission from the Director/HOD.",
                  "Whenever any money or property of the institute is placed in the possession of an employee, it becomes his absolute responsibility to take care of it and to render a proper account for the same.",
                  "Misleading/misinforming any employee within or outside the boundaries of the IMT premises for the purposes of spreading negative sentiments which is detrimental to the functioning of the institute will face disciplinary action.",
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h5 className="mt-4 fw-bold" style={{ color: "#08317a" }}>
                The following acts will constitute misconduct on the part of an
                employee:
              </h5>
              <ul className="list-unstyled">
                {[
                  "Willful insubordination or disobedience.",
                  "Obstructing work in contravention of any statutes, law or enactment from time to time and for the time being in force either singly or with others or inciting any employee while within the premises of the IMT to go on strike.",
                  "Theft, fraud or dishonesty in connection with the Institute’s business or property.",
                  "Taking or giving bribes or any illegal gratification whatsoever.",
                  "Habitual late attendance and habitual absence without leave or without sufficient cause.",
                  "Habitual negligence of work.",
                  "Habitual Indiscipline.",
                  "Causing damage to work in process or to any property of the IMT by negligence or with intention.",
                  "Threatening or intimidating any employee within the boundaries of the IMT premises.",
                  "Giving false information of any kind at the time of seeking employment or for securing any facility given by the IMT.",
                  "Giving false information or producing false certificates for securing any privilege granted by the IMT.",
                  "Use of the system for personal benefit and in breach of the institute’s standard employment policies.",
                  "With respect to the use of IT in the campus, dissemination of sensitive information as well as sharing of user IDs, passwords, IP addresses, etc. is not permissible.",
                  "Accessing, downloading or distribution of any form of confidential information about other employees of IMT, or its stakeholders, or any obscene or other offensive material.",
                  "Accessing, downloading or distribution of any message, graphics or picture that might result in bullying or harassment, on account of age, color, gender, race.",
                  "Sending unofficial mass e-mails through the Intranet/Extranet, seeking to malign colleagues / co-workers or seniors.",
                  "Offensive or inappropriate usage of words, phrases, sentences while communicating through Intranet/Extranet.",
                  "Accessing unauthorized activities like online gambling, unauthorized software.",
                  "Taking private grudges & grievances to a public forum through Intranet/Extranet and social networking sites like Twitter, Facebook, LinkedIn, etc. will be deemed inappropriate and unprofessional behavior.",
                  "Plagiarism in any form (presenting other’s ideas as one’s own or taking credit for other people’s work or effort) will also be viewed as a serious misconduct and lapse on the part of any employee.",
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p className="mt-4 fw-bold">
                I will abide by the rules and regulations of the Institute.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
