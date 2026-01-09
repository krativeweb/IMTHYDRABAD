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
              <div className="table-responsive mt-4">
                <table className="table table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: "8%" }}>Sr. No</th>
                      <th>Model Code of Conduct</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td>
                        All employees are expected to maintain a high standard
                        of discipline, good conduct and behavior.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">2</td>
                      <td>
                        Being in a high-end service industry of providing
                        Education and Executive Learning and Development, it is
                        of utmost importance for all IMT employees to present
                        themselves in an acceptable manner.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">3</td>
                      <td>
                        The institute respects cultural and religious attire,
                        provided it maintains a professional standard. Employees
                        are required to dress in a manner that upholds both
                        personal pride and the institute’s professional image.
                        All employees are required to maintain a professional
                        and well-groomed presentation of self that reflects the
                        organization’s values and creates a positive impression.
                        Formal attire such as collared shirts, trousers, sarees,
                        business suits, salwar suits or other professional
                        ethnic wear is expected while on campus.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">4</td>
                      <td>
                        All employees are expected to be enthusiastic, honest,
                        professional, and interested in all dealings with the
                        various stakeholders of IMT.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">5</td>
                      <td>
                        Every employee shall endeavor to attain and maintain a
                        collegial atmosphere.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">6</td>
                      <td>
                        Employees shall be regular in attendance and punctual in
                        maintaining the office timings.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">7</td>
                      <td>
                        Employees shall devote their whole time to the service
                        of the Institute and shall not engage directly or
                        indirectly in any trade or business including family
                        business or any other educational institute on part time
                        whether honorary or otherwise. However, on a limited
                        basis, the Director may approve short-term visiting
                        teaching assignments only in institutions of repute
                        (AACSB/EQUIS accredited and ranked top 75 by Financial
                        Times).
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">8</td>
                      <td>
                        Employees shall not enter into any monetary dealings
                        with the Institute’s employees, suppliers, contractors
                        or students, nor accept any present or gratification in
                        any form from them.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">9</td>
                      <td>
                        Children of employees up to the age of five years may
                        avail the campus crèche facility with prior written
                        permission from the Manager–HR. In case of visits by
                        spouse, friends, relatives or children above five years,
                        prior written permission from Manager–HR is required,
                        except when such family members or guests visit
                        occasionally to Campus or are specifically invited to
                        attend an occasion or event organized on campus.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">10</td>
                      <td>
                        Employees going out during office hours should always
                        take permission from their respective superiors. If
                        immediate superior is not available, permission must be
                        obtained from the next higher authority.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">11</td>
                      <td>
                        Every employee shall serve the campus honestly and
                        faithfully and shall promote the interest of the
                        Institute with courtesy and attention in all
                        transactions.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">12</td>
                      <td>
                        Employees shall intimate the Institute in writing about
                        any change in their residential address.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">13</td>
                      <td>
                        Employees shall not leak out any information or divulge
                        any secrets of the Institute pertaining to its affairs
                        of the Institute.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">14</td>
                      <td>
                        Divulging or sharing of any confidential information
                        with any other employee is prohibited unless required
                        for execution of work.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">15</td>
                      <td>
                        Employees shall not remove books, articles, pictures,
                        documents or any other assets from the Institute without
                        prior permission from Director/HOD.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">16</td>
                      <td>
                        Whenever any money or property of the Institute is
                        placed in the possession of an employee, it becomes his
                        absolute responsibility to take care of it and render
                        proper account for the same.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center"></td>
                      <td>
                        <strong>
                          Following actions will attract disciplinary actions
                          including termination based on severity of the offense
                        </strong>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">17</td>
                      <td>
                        Spreading misleading messages or misinformation within
                        or outside the IMT premises for the purposes of
                        spreading negative sentiments or rumors of any kind
                        whether related to affairs of the Campus or external
                        world, which may have adverse impact on the reputation
                        of the institute.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">18</td>
                      <td>
                        Employee found negligent in duties, insubordination or
                        disobedience.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">19</td>
                      <td>
                        Use of inappropriate language and/or riotous behavior.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">20</td>
                      <td>
                        Bringing disrepute to the Institute by using
                        unparliamentary language in public forums.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">21</td>
                      <td>
                        Employee found under influence of alcohol or
                        illegal/prohibited drugs, riotous or indecent behavior,
                        or gambling within IMT premises.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">22</td>
                      <td>Employee found insolvent.</td>
                    </tr>

                    <tr>
                      <td className="text-center">23</td>
                      <td>
                        Carrying arms, ammunition or similar weapons at any time
                        within the campus.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">24</td>
                      <td>
                        Commission of any act which amounts to a criminal
                        offence or involves moral turpitude.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">25</td>
                      <td>
                        Theft, fraud or dishonesty, taking or giving bribe.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">26</td>
                      <td>
                        Lending or borrowing money or taking illegal
                        gratification from any person or firm having official
                        dealings with IMT.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">27</td>
                      <td>Habitual negligence of work.</td>
                    </tr>

                    <tr>
                      <td className="text-center">28</td>
                      <td>
                        Use of abusive language and rash behavior/ misbehavior
                        or physical assault, with any employee or any staff of
                        third-party agency deployed in campus
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">29</td>
                      <td>
                        Acting in a manner prejudicial to the interest of IMT.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">30</td>
                      <td>
                        Commission of any criminal offence involving moral
                        turpitude.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">31</td>
                      <td>
                        Employee convicted in any criminal proceedings under the
                        Indian Penal Code or any other law.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">32</td>
                      <td>
                        Any false and frivolous allegations by an employee
                        against other employee(s) or the institute or its
                        authorities without supporting evidence
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">33</td>
                      <td>
                        Sharing pornographic or anti-national or obscene
                        pictures or videos with any employee or group of
                        employees.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">34</td>
                      <td>
                        Making any form of official communication including
                        electronic mail which vitiates the collegial atmosphere
                        of the Institute.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">35</td>
                      <td>
                        Taking private grudges &amp; grievances to a public
                        forum through Intranet/Extranet and social networking
                        sites like WhatsApp, Twitter (X), Facebook, LinkedIn,
                        Instagram etc. will be deemed inappropriate and
                        unprofessional behavior.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">36</td>
                      <td>
                        Plagiarism in any form (presenting other’s ideas as
                        one’s own or taking credit for other people’s work or
                        effort) will also be viewed as a serious misconduct and
                        lapse on the part of any employee.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center">37</td>
                      <td>
                        Tampering or fabricating official records and documents.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-4 fw-bold">
                  I will abide by the rules and regulations of the Institute.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
