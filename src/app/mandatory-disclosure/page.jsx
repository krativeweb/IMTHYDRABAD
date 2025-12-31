"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import PlacementAlliances from "@/sections/PlacementAlliances.jsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const MandatoryDisclosure = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Owl Carousel options

  return (
    <>
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url(./media/banners/mandatorydisclosure.webp)`,
            position: "relative",
            backgroundSize: "cover",
            height: "50vh",
              backgroundPosition: "center !important"
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Mandatory Disclosure</h2>
          <p className="text-white">
            Transparent, ethical, and accountable in every operation. <br />
            All statutory and regulatory information is shared openly to uphold
            institutional integrity and trust
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
                  {/* Assuming 'Link' is defined in the JSX context */}
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-white fw-bold"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Mandatory Disclosure
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>1</p>
                    </td>
                    <td>
                      <p>Name of the Institution</p>
                    </td>
                    <td>
                      <p>Institute of Management Technology, Hyderabad</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Address </p>
                    </td>
                    <td>
                      <p>38, Cherlaguda,</p>
                      <p>Shashabad</p>
                      <p>Hyderabad – 501218</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Telephone</p>
                    </td>
                    <td>
                      <p>08414671661</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Mobile</p>
                    </td>
                    <td>
                      <p>8392811111</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Email</p>
                    </td>
                    <td>
                      <p>
                        <Link href="mailto:director@imthyderabad.edu.in">
                          director@imthyderabad.edu.in
                        </Link>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      <p>Name of address of the Trust</p>
                    </td>
                    <td>
                      <p>Centre for Advanced Education</p>
                      <p>303, 3rd Floor, Salcon Rasvilas,</p>
                      <p>Plot No. D-1, District Centre Saket</p>
                      <p>New Delhi - 110017</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Telephone</p>
                    </td>
                    <td>
                      <p>011-46482000</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Mobile</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Email</p>
                    </td>
                    <td>
                      <p>info@imthyderabad.edu.in</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>3</p>
                    </td>
                    <td>
                      <p>Name of the Director</p>
                    </td>
                    <td>
                      <p>Prof (Dr) K M Baharul Islam</p>
                      <p>38, Cherlaguda,</p>
                      <p>Shashabad</p>
                      <p>Hyderabad – 501218</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Telephone</p>
                    </td>
                    <td>
                      <p>08414671661</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Mobile</p>
                    </td>
                    <td>
                      <p>8392811111</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Email</p>
                    </td>
                    <td>
                      <p>
                        <Link href="mailto:director@imthyderabad.edu.in">
                          director@imthyderabad.edu.in
                        </Link>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>4</p>
                    </td>
                    <td>
                      <p>Name of the affiliating University</p>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <p>NA -</p>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>5</p>
                    </td>
                    <td>
                      <p>Governance</p>
                    </td>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Members of the Board and their brief background</p>
                    </td>
                    <td>
                      <p>President – Shri. Bakul Nath</p>
                      <p>Vice President – Shri. Dipankar Chatterji</p>
                      <p>Vice President – Smt. Simran Nath</p>
                      <br />
                      <p>Members –</p>
                      <ul>
                        <li>
                          <p>
                            Prof. Mithileshwar Jha, Former Professor IIM,
                            Bangalore
                          </p>
                        </li>
                        <li>
                          <p>
                            Dr. Partha Ray, Director, National Institute of Bank
                            Management, Pune
                          </p>
                        </li>
                        <li>
                          <p>
                            Shri S.S. Mundra, Former Deputy Governor, Reserve
                            Bank of India
                          </p>
                        </li>
                        <li>
                          <p>Mr. Ishaat Hussain, Director, Tata Sons Limited</p>
                        </li>
                        <li>
                          <p>
                            Prof. Subhash Bhatnagar, Former Professor, IIM
                            Ahmedabad
                          </p>
                        </li>
                      </ul>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Member of Academic Advisory Body</p>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <p>
                            Dr. Partha Ray, Director, National Institute of Bank
                            Management, Pune
                          </p>
                        </li>
                        <li>
                          <p>
                            Prof. Mithileshwar Jha, Former Professor IIM,
                            Bangalore
                          </p>
                        </li>
                        <li>
                          <p>
                            Prof. Subhash Bhatnagar, Former Professor, IIM
                            Ahmedabad
                          </p>
                        </li>
                      </ul>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Frequency of the Board meeting and Academic Advisory
                        Body
                      </p>
                    </td>
                    <td>
                      <p>Once in 3 months</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Organizational chart and processes</p>
                    </td>
                    <td>
                      <p>Organizational Structure (Academics)</p>
                      <img
                        src="./images/t1.webp"
                        alt="Organisation Chart Academics"
                        width={369}
                        height={220}
                        className="img-responsive"
                      />
                      <br />
                      <br />
                      <p>Organizational Structure (Administration)</p>
                      <img
                        src="./images/t2.webp"
                        alt="Organisation Chart Administration"
                        width={369}
                        height={220}
                        className="img-responsive"
                      />
                      <br />
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Nature and Extent of involvement of Faculty and students
                        in academic affairs / improvements
                      </p>
                    </td>
                    <td>
                      <p>
                        Faculty members are involved in academic affairs as
                        Chairperson of various academic administrative
                        activities and students give feedback on course content
                        and delivery for any improvements twice in a term
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Mechanism / Norms and procedure for democratic / good
                        governance
                      </p>
                    </td>
                    <td>
                      <p>
                        Academic decisions are taken after few deliberations at
                        area level, PGP committee level and faculty council
                        level in a consultative and democratic manner
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Student Feedback on Institutional Governance / Faculty
                        Performance
                      </p>
                    </td>
                    <td>
                      <p>
                        Yes, Student feedback is collected twice in every
                        trimester to assess the faculty performance.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Grievance Redressal mechanism for Faculty, staff and
                        students
                      </p>
                    </td>
                    <td>
                      <p>
                        Yes, Grievance and Redressal mechanism is established
                        and taken care by the Grievance &amp; Welfare Committee
                        for both faculty/staff and students.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Establishment of Anti Ragging Committee</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>Sno</p>
                    </td>
                    <td>
                      <p>Name of the Committee Member</p>
                    </td>
                    <td>
                      <p>Designation</p>
                    </td>
                    <td>
                      <p>Phone</p>
                    </td>
                    <td>
                      <p>Landline No.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>1.</p>
                    </td>
                    <td>
                      <p>Prof (Dr) K M Baharul Islam</p>
                    </td>
                    <td>
                      <p>Director</p>
                    </td>
                    <td>
                      <p>8392811111</p>
                    </td>
                    <td>
                      <p>08414671661</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2.</p>
                    </td>
                    <td>
                      <p>Prof. Romina Mathew</p>
                    </td>
                    <td>
                      <p>Chairperson- Disciplinary</p>
                    </td>
                    <td>
                      <p>9246295292</p>
                    </td>
                    <td>
                      <p>08414671689</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>3.</p>
                    </td>
                    <td>
                      <p>Prof. Vinay Kumar K</p>
                    </td>
                    <td>
                      <p>Associate Dean (Accreditation & Rankings)</p>
                    </td>
                    <td>
                      <p>8639342389</p>
                    </td>
                    <td>
                      <p>08414671688</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>4.</p>
                    </td>
                    <td>
                      <p>Prof. Pushpesh Pant</p>
                    </td>
                    <td>
                      <p>Warden- Boys Hostel</p>
                    </td>
                    <td>
                      <p>8827218443</p>
                    </td>
                    <td>
                      <p>08414671602</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>5.</p>
                    </td>
                    <td>
                      <p>Prof. Irfan Ahmad Shah</p>
                    </td>
                    <td>
                      <p>Warden- Boys Hostel</p>
                    </td>
                    <td>
                      <p>9567452826</p>
                    </td>
                    <td>
                      <p>08414671601</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>6.</p>
                    </td>
                    <td>
                      <p>Prof. Sanchari Guha Niyogi</p>
                    </td>
                    <td>
                      <p>Warden- Girls Hostel</p>
                    </td>
                    <td>
                      <p>8584968955</p>
                    </td>
                    <td>
                      <p>08414671625</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>7.</p>
                    </td>
                    <td>
                      <p>Mr. Raj Kumar Meena</p>
                    </td>
                    <td>
                      <p>Chief Admin. Officer</p>
                    </td>
                    <td>
                      <p>9582805564</p>
                    </td>
                    <td>
                      <p>08414671683</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>8.</p>
                    </td>
                    <td>
                      <p>Ms. Jaya Vamshi</p>
                    </td>
                    <td>
                      <p>Asst. Manager-HR</p>
                    </td>
                    <td>
                      <p>9885770267</p>
                    </td>
                    <td>
                      <p>08414671656</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>9.</p>
                    </td>
                    <td>
                      <p>
                        Dr. Mamatha Rahuveer Achanta <br />
                        (NGO representative)
                      </p>
                    </td>
                    <td>
                      <p>Social Worker</p>
                    </td>
                    <td>
                      <p>9849418592</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>Mr. K. Srinivasa Rao</p>
                    </td>
                    <td>
                      <p>ACP - Shamshabad Police Station</p>
                    </td>
                    <td>
                      <p>9490617481</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>11.</p>
                    </td>
                    <td>
                      <p>
                        Mr. A. Ravindra Seshu <br />
                        (Media Representative)
                      </p>
                    </td>
                    <td>
                      <p>Senior Reporter, Khammam Dist.</p>
                    </td>
                    <td>
                      <p>9063718675</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>12.</p>
                    </td>
                    <td>
                      <p>Parent Representative</p>
                    </td>
                    <td>
                      <p>Hyderabad</p>
                    </td>
                    <td>
                      <p>9391424271</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>13.</p>
                    </td>
                    <td>
                      <p>
                        Mr. Ekansh Uniyal <br />
                        (Sr. Student Representative)
                      </p>
                    </td>
                    <td>
                      <p>IMT Hyderabad</p>
                    </td>
                    <td>
                      <p>7020132115</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>14.</p>
                    </td>
                    <td>
                      <p>
                        Ms. Priya Arya <br />
                        (Sr. Student Representative)
                      </p>
                    </td>
                    <td>
                      <p>IMT Hyderabad</p>
                    </td>
                    <td>
                      <p>9810302199</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>15.</p>
                    </td>
                    <td>
                      <p>
                        Mr. Shailendra Gautam <br />
                        (Jr. Student Representative)
                      </p>
                    </td>
                    <td>
                      <p>IMT Hyderabad</p>
                    </td>
                    <td>
                      <p>7078587873</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>
                        Establishment of Online Grievance Redressal Mechanism
                      </p>
                    </td>
                    <td>
                      <p>
                        Students can communicate their grievances to the
                        leadership at IMT through the intranet (mails and ERP)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>
                        Establishment of Grievance Redressal Committee in the
                        Institution and Appointment of OMBUDSMAN by the
                        University
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>Sno</p>
                    </td>
                    <td>
                      <p>Name of the Committee Member</p>
                    </td>
                    <td>
                      <p>Profession</p>
                    </td>
                    <td>
                      <p>Phone</p>
                    </td>
                    <td>
                      <p>Address</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>1</p>
                    </td>
                    <td>
                      <p>
                        Prof. Nikhil Rastogi, (Professor-Finance) – Chairperson
                      </p>
                    </td>
                    <td>
                      <p>Teaching</p>
                    </td>
                    <td>
                      <p>7306874901</p>
                    </td>
                    <td>
                      <p>IMT, Hyderabad</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      <p>
                        Prof. Akhila V , (Asst. Professor-HRM),Co-Chairperson
                      </p>
                    </td>
                    <td>
                      <p>Teaching</p>
                    </td>
                    <td>
                      <p>7842701485</p>
                    </td>
                    <td>
                      <p>IMT, Hyderabad</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>3</p>
                    </td>
                    <td>
                      <p>Prof. Musarrat Shaheen, (Asst. Professor-HRM)</p>
                    </td>
                    <td>
                      <p>Teaching</p>
                    </td>
                    <td>
                      <p>8978219231</p>
                    </td>
                    <td>
                      <p>IMT, Hyderabad</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>4</p>
                    </td>
                    <td>
                      <p>Ms. Jaya Vamshi</p>
                    </td>
                    <td>
                      <p>Non-Teaching</p>
                    </td>
                    <td>
                      <p>9885770267</p>
                    </td>
                    <td>
                      <p>IMT, Hyderabad</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>5</p>
                    </td>
                    <td>
                      <p>Dr. Mamatha Raghuveer Achanta (NGO Representative)</p>
                    </td>
                    <td>
                      <p>Social Worker</p>
                    </td>
                    <td>
                      <p>9849418591</p>
                    </td>
                    <td>
                      <p>Begumpet, Hyderabad</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Establishment of Internal Complaint Committee (ICC)</p>
                    </td>
                    <td>
                      <p>Prof. Aindrilla Chatterjee-Chairperson</p>
                      <p>Prof. Akhila V, Co-Chairperson</p>
                      <p>Prof. Pushpesh Pant</p>
                      <p>Dr. Mamatha Raghuveer Achanta</p>
                      <p>Mrs. K. Sita Mahalakshmi</p>
                      <p>Mr. Akash -(Sr. Student Representative)</p>
                      <p>Ms. Ashmita Banda - (Sr. Student Representative)</p>
                      <p>Ms. Jaysree SS - (Jr. Student Representative)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Establishment of Committee for SC / ST</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Internal Quality Assurance Cell</p>
                    </td>
                    <td>
                      <p>
                        To continuously improve the quality of all our core and
                        support activities through self- evaluation and total
                        employee involvement.
                      </p>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>6</p>
                    </td>
                    <td>
                      <p>Programmes</p>
                    </td>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Name of Programmes approved by AICTE</p>
                    </td>
                    <td>
                      <ol>
                        <li>
                          <p>PGDM</p>
                        </li>
                        <li>
                          <p>PGDM (Finance)</p>
                        </li>
                        <li>
                          <p>PGDM (Marketing)</p>
                        </li>
                        <li>
                          <p>PGDM (IT)</p>
                        </li>
                        <li>
                          <p>PGDM (LSCM)</p>
                        </li>
                        <li>
                          <p>Fellowship Program in Management</p>
                        </li>
                      </ol>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Status of Accreditation of the Courses</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Total number of Courses</p>
                    </td>
                    <td>
                      <p>6</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>No. of Courses for which applied for Accreditation</p>
                    </td>
                    <td>
                      <p>3</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Status of Accreditation – Preliminary / Applied for SAR
                        and results awaited / Applied for SAR and visits
                        completed / Results of the visits awaited / Rejected /
                        Approved
                      </p>
                    </td>
                    <td>
                      <p>
                        Approved for PGDM, PGDM (Finance) and PGDM (Marketing)
                      </p>
                      <br />
                      <p> </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <p>
                        For each programme the following details are to be given
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Name</p>
                    </td>
                    <td>
                      <p>PGDM</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Number of Seats</p>
                    </td>
                    <td>
                      <p>180</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Duration</p>
                    </td>
                    <td>
                      <p>2 Years</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Fee</p>
                    </td>
                    <td>
                      <p>15,00,000/-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Placement Facilities</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td colSpan={5}>
                      <p>
                        Campus placement in last three years with minimum
                        salary, maximum salary and average salary
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Batch</p>
                    </td>
                    <td>
                      <p>Program</p>
                    </td>
                    <td>
                      <p>Max. Salary in Rs.</p>
                    </td>
                    <td>
                      <p>Min. Salary in Rs.</p>
                    </td>
                    <td>
                      <p>Avg. Salary in Rs.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2020-22</p>
                    </td>
                    <td>
                      <p>PGDM</p>
                    </td>
                    <td>
                      <p>2350000</p>
                    </td>
                    <td>
                      <p>750000</p>
                    </td>
                    <td>
                      <p>958597</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2021-23</p>
                    </td>
                    <td>
                      <p>PGDM</p>
                    </td>
                    <td>
                      <p>2500000</p>
                    </td>
                    <td>
                      <p>850000</p>
                    </td>
                    <td>
                      <p>1181754</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2022-24</p>
                    </td>
                    <td>
                      <p>PGDM</p>
                    </td>
                    <td>
                      <p>2555000</p>
                    </td>
                    <td>
                      <p>855000</p>
                    </td>
                    <td>
                      <p>1194222</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2023-25</p>
                    </td>
                    <td>
                      <p>PGDM</p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>Name</p>
                    </td>
                    <td>
                      <p>PGDM (Finance)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Number of Seats</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Duration</p>
                    </td>
                    <td>
                      <p>2 Years</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Fee</p>
                    </td>
                    <td>
                      <p>15,00,000/-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Placement Facilities</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td colSpan={5}>
                      <p>
                        Campus placement in last three years with minimum
                        salary, maximum salary and average salary
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Batch</p>
                    </td>
                    <td>
                      <p>Program</p>
                    </td>
                    <td>
                      <p>Max. Salary in Rs.</p>
                    </td>
                    <td>
                      <p>Min. Salary in Rs.</p>
                    </td>
                    <td>
                      <p>Avg. Salary in Rs.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2020-22</p>
                    </td>
                    <td>
                      <p>PGDM (Financial Management)</p>
                    </td>
                    <td>
                      <p>2350000</p>
                    </td>
                    <td>
                      <p>700000</p>
                    </td>
                    <td>
                      <p>946128</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2021-23</p>
                    </td>
                    <td>
                      <p>PGDM (Financial Management)</p>
                    </td>
                    <td>
                      <p>2500000</p>
                    </td>
                    <td>
                      <p>850000</p>
                    </td>
                    <td>
                      <p>1261685</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2022-24</p>
                    </td>
                    <td>
                      <p>PGDM (Finance)</p>
                    </td>
                    <td>
                      <p>2555000</p>
                    </td>
                    <td>
                      <p>855000</p>
                    </td>
                    <td>
                      <p>1139186</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2023-25</p>
                    </td>
                    <td>
                      <p>PGDM (Finance)</p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>Name</p>
                    </td>
                    <td>
                      <p>PGDM (Marketing)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Number of Seats</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Duration</p>
                    </td>
                    <td>
                      <p>2 Years</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Fee</p>
                    </td>
                    <td>
                      <p>15,00,000/-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Placement Facilities</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td colSpan={5}>
                      <p>
                        Campus placement in last three years with minimum
                        salary, maximum salary and average salary
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Batch</p>
                    </td>
                    <td>
                      <p>Program</p>
                    </td>
                    <td>
                      <p>Max. Salary in Rs.</p>
                    </td>
                    <td>
                      <p>Min. Salary in Rs.</p>
                    </td>
                    <td>
                      <p>Avg. Salary in Rs.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2020-22</p>
                    </td>
                    <td>
                      <p>PGDM (Marketing)</p>
                    </td>
                    <td>
                      <p>1600000</p>
                    </td>
                    <td>
                      <p>750000</p>
                    </td>
                    <td>
                      <p>998170</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2021-23</p>
                    </td>
                    <td>
                      <p>PGDM (Marketing)</p>
                    </td>
                    <td>
                      <p>1555000</p>
                    </td>
                    <td>
                      <p>884053</p>
                    </td>
                    <td>
                      <p>1097261</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2022-24</p>
                    </td>
                    <td>
                      <p>PGDM (Marketing)</p>
                    </td>
                    <td>
                      <p>2105000</p>
                    </td>
                    <td>
                      <p>805000</p>
                    </td>
                    <td>
                      <p>1241132</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2023-25</p>
                    </td>
                    <td>
                      <p>PGDM (Marketing)</p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <p>7</p>
                    </td>
                    <td colSpan={2}>
                      <p>Faculty - Program wise list of Faculty Members</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Sno</p>
                    </td>
                    <td colSpan={2}>
                      <p>Name</p>
                    </td>
                    <td>
                      <p>Program</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>1</p>
                    </td>
                    <td colSpan={2}>
                      <p>Prof. (Dr.) ROMINA MATHEW</p>
                    </td>
                    <td>
                      <p>PGDM</p>
                    </td>
                  </tr>
                  {/* Note: The original source list under item 7 continues for many entries. I'll include the full list from item 26 of your input below this placeholder section. */}
                  <tr>
                    <td>
                      <p>37</p>
                    </td>
                    <td colSpan={2}>
                      <p>Prof ROHIT G</p>
                    </td>
                    <td>
                      <p>OPM</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Full Faculty List from Item 7 (based on Item 26 in source) */}
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  {/* Headers repeated for clarity, referencing original source data point 26 */}
                  <tr>
                    <td>
                      <p>Sno</p>
                    </td>
                    <td>
                      <p>Area</p>
                    </td>
                    <td>
                      <p>Faculty Name</p>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>ANALYTICS &amp; INFORMATION TECHNOLOGY</td>
                    <td>Prof (Dr) SURAJIT GHOSH DASTIDAR</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>ANALYTICS &amp; INFORMATION TECHNOLOGY</td>
                    <td>Prof (Dr) INDRANIL GHOSH</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>ANALYTICS &amp; INFORMATION TECHNOLOGY</td>
                    <td>Prof SACHIN CHOUBEY</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>FINANCE &amp; ACCOUNTING</td>
                    <td>Prof (Dr) K SRI HARSHA REDDY</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>FINANCE &amp; ACCOUNTING</td>
                    <td>Prof (Dr) C VENKATA CHAKRAPANI</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>FINANCE &amp; ACCOUNTING</td>
                    <td>Prof (Dr) NIKHIL RASTOGI</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>FINANCE &amp; ACCOUNTING</td>
                    <td>Prof (Dr) SARATH BABU A</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>FINANCE &amp; ACCOUNTING</td>
                    <td>Prof (Dr) PURNIMA KHEMANI</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>FINANCE &amp; ACCOUNTING</td>
                    <td>Prof ROHAN KUMAR MISHRA</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>STRATEGY &amp; GENERAL MANAGEMENT</td>
                    <td>Prof (Dr) K M BAHARUL ISLAM</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>STRATEGY &amp; GENERAL MANAGEMENT</td>
                    <td>Prof (Dr) AINDRILA CHATTERJEE</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>STRATEGY &amp; GENERAL MANAGEMENT</td>
                    <td>Prof (Dr) AHMAD FARAZ KHAN</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>STRATEGY &amp; GENERAL MANAGEMENT</td>
                    <td>Prof (Dr) DEBARATI DHAR</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>ECONOMICS &amp; PUBLIC POLICY</td>
                    <td>Prof (Dr) IRFAN AHMAD SHAH</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>ECONOMICS &amp; PUBLIC POLICY</td>
                    <td>Prof (Dr) STEVEN RAJ PADAKANDLA</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>ECONOMICS &amp; PUBLIC POLICY</td>
                    <td>Prof (Dr) SIVADASAN T.M</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>ECONOMICS &amp; PUBLIC POLICY</td>
                    <td>Prof BASIT ABDULLAH</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>HUMAN RESOURCE MANAGEMENT</td>
                    <td>Prof (Dr) ROMINA MATHEW</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>HUMAN RESOURCE MANAGEMENT</td>
                    <td>Prof (Dr) AKHILA VELDANDI</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>HUMAN RESOURCE MANAGEMENT</td>
                    <td>Prof (Dr) RONA ELIZABETH KURIAN</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>HUMAN RESOURCE MANAGEMENT</td>
                    <td>Prof (Dr) KIRANMAI PENDYALA DUTT</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>HUMAN RESOURCE MANAGEMENT</td>
                    <td>Prof (Dr) MUSARRAT SHAHEEN</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>HUMAN RESOURCE MANAGEMENT</td>
                    <td>Prof (Dr) MAMATA VEGUNTA</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>MARKETING</td>
                    <td>Prof (Dr) NITIN GUPTA</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>MARKETING</td>
                    <td>Prof (Dr) R MAHESH</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>MARKETING</td>
                    <td>Prof (Dr) SHAON SEN</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>MARKETING</td>
                    <td>Prof (Dr) PRANAY SINDHU</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>MARKETING</td>
                    <td>Prof (Dr) NISHTHA RAI</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>MARKETING</td>
                    <td>Prof DHANANJAY SINGH</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>MARKETING</td>
                    <td>Prof VINOD KUMAR</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>MARKETING</td>
                    <td>Mr SATHISH KUMAR KANNAN</td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>OPERATIONS MANAGEMENT</td>
                    <td>Prof (Dr) SOURABH BHATTACHARYA</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>OPERATIONS MANAGEMENT</td>
                    <td>Prof (Dr) KALYANA C CHEJARLA</td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>OPERATIONS MANAGEMENT</td>
                    <td>Prof (Dr) VINAY KUMAR K</td>
                  </tr>
                  <tr>
                    <td>35</td>
                    <td>OPERATIONS MANAGEMENT</td>
                    <td>Prof (Dr) SANCHARI GUHA NIYOGI</td>
                  </tr>
                  <tr>
                    <td>36</td>
                    <td>OPERATIONS MANAGEMENT</td>
                    <td>Prof (Dr) PUSHPESH PANT</td>
                  </tr>
                  <tr>
                    <td>37</td>
                    <td>OPERATIONS MANAGEMENT</td>
                    <td>Prof ROHIT G</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Permanent Faculty</p>
                    </td>
                    <td>
                      <p>37</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Adjunct Faculty</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Permanent Faculty: Student Ratio</p>
                    </td>
                    <td>
                      <p>1:19</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>8</td>
                    <td>Profile of Director</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol>
                        <li>Name</li>
                      </ol>
                    </td>
                    <td>Prof (Dr) K M Baharul Islam</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={2}>
                        <li>Date of Birth</li>
                      </ol>
                    </td>
                    <td>17/10/1969</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={3}>
                        <li>Unique ID</li>
                      </ol>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={4}>
                        <li>Education Qualifications</li>
                      </ol>
                    </td>
                    <td>
                      D.Litt., PhD (Double), MBA, LLM (UK), MA, B.Ed. Post-Doc
                      (AIT Bangkok)
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={5}>
                        <li>Work Experience</li>
                      </ol>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ul>
                        <li>Teaching</li>
                      </ul>
                    </td>
                    <td>31 Years</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ul>
                        <li>Research</li>
                      </ul>
                    </td>
                    <td>31 Years</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ul>
                        <li>Industry</li>
                      </ul>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ul>
                        <li>Others</li>
                      </ul>
                    </td>
                    <td>UN Assignment - 10 years</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={6}>
                        <li>Area of Specialization</li>
                      </ol>
                    </td>
                    <td>Corporate Law</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={7}>
                        <li>
                          Courses taught at Diploma / UG / PG / PG Diploma
                        </li>
                      </ol>
                    </td>
                    <td>
                      Corporate Law
                      <br />
                      Negotiation, Arbitration and Conciliation
                      <br />
                      Legal Aspects of Business
                      <br />
                      Media & Entertainment Business
                      <br />
                      Public Policy & Governance
                      <br />
                      Gender Issues
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={8}>
                        <li>Research guidance</li>
                      </ol>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ul>
                        <li>
                          No. of papers published in National/International
                        </li>
                      </ul>
                    </td>
                    <td>
                      Books: 15 • Chapters: 16
                      <br />
                      Journal Papers: 20 • Conf Papers: 126
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ul>
                        <li>Master</li>
                      </ul>
                    </td>
                    <td>10</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ul>
                        <li>Ph.D.</li>
                      </ul>
                    </td>
                    <td>05</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={9}>
                        <li>Projects Carried Out</li>
                      </ol>
                    </td>
                    <td>15</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={10}>
                        <li>Patents</li>
                      </ol>
                    </td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={11}>
                        <li>Technology Transfer</li>
                      </ol>
                    </td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={12}>
                        <li>Research Publications</li>
                      </ol>
                    </td>
                    <td>36</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <ol start={13}>
                        <li>No. of Books published with details</li>
                      </ol>
                    </td>
                    <td>15</td>
                  </tr>

                  {/* Section Title */}
                  <tr>
                    <td colSpan={3}>
                      <strong>Details of the Books:</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* SEPARATE BOOKS TABLE */}
            <div className="table-responsive mt-3">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sl.</th>
                    <th>Title</th>
                    <th>Name of Co-author(s)</th>
                    <th>Publisher and ISBN</th>
                    <th>Year</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      Sustainable Development Goals and Interreligious Dialogue
                    </td>
                    <td>Dr Swati Chakrabarty</td>
                    <td>Knowledge Press, ISBN: 978-81-960068-1-5</td>
                    <td>2023</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      Migrant Muse: The Third Space in Assamese Literature
                    </td>
                    <td>Nil</td>
                    <td>IIAS, Shimla, ISBN: 978-93-82396-85-7</td>
                    <td>2023</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      Literature from North-East India: Beyond the
                      Centre-Periphery Debate
                    </td>
                    <td>Nil</td>
                    <td>Routledge (UK), ISBN: 9781032425689</td>
                    <td>2022</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Business Communication, New Edition</td>
                    <td>Arthur H. Bell, Dayle M. Smith</td>
                    <td>Wiley, ISBN: 9789354642388</td>
                    <td>2022</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      Environmental Impact Assessment: Precept and Practice
                    </td>
                    <td>MZM Nomani</td>
                    <td>Routledge (CRC Press), ISBN: 9781032055824</td>
                    <td>2022</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      Public Policy Agenda: Decrypting Sustainability for India
                    </td>
                    <td>Raushan A</td>
                    <td>Bloomsbury, ISBN: 978-93-85936-16-6</td>
                    <td>2016</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      International Perspectives on Comparative Education Policy
                    </td>
                    <td>N Iftekhar</td>
                    <td>Bloomsbury, ISBN: 978-9384898823</td>
                    <td>2015</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>New Directions in Media</td>
                    <td>N Roy</td>
                    <td>Bloomsbury, ISBN: 978-9384898816</td>
                    <td>2015</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Resource Book on Women’s Rights (Ed)</td>
                    <td>Nil</td>
                    <td>Allied Publishers, India, ISBN: 978-81-8424-910-1</td>
                    <td>2014</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Defending Traditional Knowledge Rights</td>
                    <td>Nil</td>
                    <td>VDM Pub, Germany, ISBN: 978-3-639-37724-8</td>
                    <td>2011</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>
                      Community-Based Water Resources Management in Northeast
                      India
                    </td>
                    <td>CK Jain, SK Sarma</td>
                    <td>Allied Publishers, India, ISBN: 978-81-8424-696-4</td>
                    <td>2011</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>National ICT Policy & Plans for the Gambia</td>
                    <td>Nil</td>
                    <td>UN-ECA, Addis Ababa</td>
                    <td>2004</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>e-Government Strategy for The Gambia</td>
                    <td>Nil</td>
                    <td>UN-ECA, Addis Ababa</td>
                    <td>2004</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Social Justice & Other Issues</td>
                    <td>B Acharjee</td>
                    <td>REC Silchar India Publication</td>
                    <td>1998</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>English for Science & Technology</td>
                    <td>Nil</td>
                    <td>Shaddhanjali Publications</td>
                    <td>1998</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>9</p>
                    </td>
                    <td>
                      <p>Fee</p>
                    </td>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Details of fee, as approved by State fee committee, for
                        the Institution
                      </p>
                    </td>
                    <td>
                      <p>15.00 Lakhs for two years</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Time schedule for payment of fee for the entire
                        programme
                      </p>
                    </td>
                    <td>
                      <p>1st Installment –</p>
                      <p>2nd Installment – 01-Oct-25</p>
                      <p>3rd Installment – 02-Feb-26</p>
                      <p>4th Installment – 19-Jun-26</p>
                      <p>5th Installment – 23-Oct-26</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        No. of Fee waivers granted with amount and name of
                        students
                      </p>
                    </td>
                    <td>
                      <br />
                      <div className="table-responsive align-center">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td>
                                <p>Scholarship</p>
                              </td>
                              <td>
                                <p>Student Name</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>20% Female Scholarship</p>
                              </td>
                              <td>
                                <p>Aanchal Dugar</p>
                                <p>Aishwarya Keshavrao Ponugoti</p>
                                <p>Akanksha Jain</p>
                                <p>Amalarose Saju</p>
                                <p>Ambika Sharma</p>
                                <p>Anamika Shukla</p>
                                <p>Anchal Gupta</p>
                                <p>Angela Maria Vinod</p>
                                <p>Anjali Bhadra</p>
                                <p>Ankita Jain</p>
                                <p>Ankita Singh</p>
                                <p>Anubha Smriti</p>
                                <p>Anushi Kaushik</p>
                                <p>Anushka Singh</p>
                                <p>Ashmita Banda</p>
                                <p>Avantika Singh</p>
                                <p>Avleen Kaur Kohli</p>
                                <p>Bhavika Rawat</p>
                                <p>Bipasha Guha</p>
                                <p>Blessy Milind Patti</p>
                                <p>C Phalguni</p>
                                <p>Chanchal Kamal Khatri</p>
                                <p>Deepthi Devan Pisharady</p>
                                <p>Deepthi P</p>
                                <p>Deepti Tiwari</p>
                                <p>Dimple Hazarika</p>
                                <p>Dudekula Ayesha Bee</p>
                                <p>Falak</p>
                                <p>Gauri Jagota</p>
                                <p>Gauri Maheshwari</p>
                                <p>Gauri Singh</p>
                                <p>Gurupriya Kummetha</p>
                                <p>Hansi Rathi</p>
                                <p>Harsh Sharma</p>
                                <p>Henna Bhat</p>
                                <p>Ishika Sinha</p>
                                <p>Jyotika Suman</p>
                                <p>Kajal</p>
                                <p>Kanak Sharma</p>
                                <p>Kanchan Dewangan</p>
                                <p>Kashish</p>
                                <p>Kashish Pravin Umredkar</p>
                                <p>Kasturi Ghosh</p>
                                <p>Ketaki Sanjay Bedekar</p>
                                <p>Khushi Thakkar</p>
                                <p>Khusi Jain</p>
                                <p>Madhura Suhas Kulkarni</p>
                                <p>Mahima Arora</p>
                                <p>Maitreyee Mandloi</p>
                                <p>Malavika Satheesan</p>
                                <p>Maneesha Chaturvedi</p>
                                <p>Mansi Arora</p>
                                <p>Megha Bararia</p>
                                <p>Megha Sharma</p>
                                <p>Megha Shee</p>
                                <p>Naga Sai Srimedha Suraparaju</p>
                                <p>Nandini Rathi</p>
                                <p>Navami Krishna</p>
                                <p>Navya Sree Macha Venkata</p>
                                <p>Nayana Choudhury</p>
                                <p>Neha Kadian</p>
                                <p>Palak Sharma</p>
                                <p>Parnika Agrawal</p>
                                <p>Payal Shivkumar Saini</p>
                                <p>Pooja Purohit</p>
                                <p>Prachi Bhalla</p>
                                <p>Prachi Shukla</p>
                                <p>Pragya Sharma</p>
                                <p>Pritikana Banerjee</p>
                                <p>Priya Arya</p>
                                <p>Priyanshi Singhal</p>
                                <p>Rashi Sharma</p>
                                <p>Razia Khatun</p>
                                <p>Rimsha Hasan</p>
                                <p>Rithika Rathi</p>
                                <p>Ritu Pritam Hemnani</p>
                                <p>Ruchika Dalmia</p>
                                <p>Rupal Agrawal</p>
                                <p>Rupal Parakh</p>
                                <p>Saakshi Thakur</p>
                                <p>Saei Kiran Kandre</p>
                                <p>Sakshi Shrivastava</p>
                                <p>Sakshi Shukla</p>
                                <p>Samipta Jaiswal</p>
                                <p>Samriddhi Mohta</p>
                                <p>Samyukta Raghunathan</p>
                                <p>Sanika Manish Lole</p>
                                <p>Sanskriti Mishra</p>
                                <p>Sanskriti Pandey</p>
                                <p>Sanskruti Sarang Dabde</p>
                                <p>Sanya Jain</p>
                                <p>Sejal Agarwal</p>
                                <p>Shania Crasto</p>
                                <p>Sheersaa Bhaduri</p>
                                <p>Shipra Jain</p>
                                <p>Shivangi Semwal</p>
                                <p>Shivani Mohanty</p>
                                <p>Shivani Sathaye</p>
                                <p>Shraddha Chaudhary</p>
                                <p>Shreeparna Kar</p>
                                <p>Shrijal Sharma</p>
                                <p>Shrishti Sah</p>
                                <p>Shruti Mishra</p>
                                <p>Shuchi Bhatnagar</p>
                                <p>Shweta Kumari</p>
                                <p>Siddamreddy Jyothika</p>
                                <p>Silky Sah</p>
                                <p>Sirisha Peddemul</p>
                                <p>Sneha Sultania</p>
                                <p>Sneha Thakur</p>
                                <p>Snigdha Sarkar</p>
                                <p>Sonali Jena</p>
                                <p>Sonalika Mujawadia</p>
                                <p>Sreelekha Sengupta</p>
                                <p>Srinidhi Chakilam</p>
                                <p>Srishti Ghosh</p>
                                <p>Sruti Soumya Nanda</p>
                                <p>Suhani Sanjay Dumre</p>
                                <p>Sujana Kolepalli</p>
                                <p>Sujata Singh Chauhan</p>
                                <p>Swarnagiri Chethana</p>
                                <p>Swati Bisht</p>
                                <p>Swati Choudhary</p>
                                <p>Tanisha Chaudhary</p>
                                <p>Uma Thakur</p>
                                <p>Vaishnavi Tewatia</p>
                                <p>Varsha Ramwani</p>
                                <p>Varsha S</p>
                                <p>Varsha Sarikonda</p>
                                <p>Varsha Venugopalan</p>
                                <p>Vrinda Dwivedi</p>
                                <p>Vrunda Rajeshbhai Vadalia</p>
                                <p>Yamini Shekhawat</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>40% Merit Scholarship</p>
                              </td>
                              <td>
                                <p>Anantha Himasree</p>
                                <p>Arisha Ali Rahi</p>
                                <p>Bhulakshmi Karri</p>
                                <p>Ganji Bhuvana Chandra</p>
                                <p>Garima Sharma</p>
                                <p>Ishpreet Kaur Harbeer Bhatia</p>
                                <p>Mohammad Asim</p>
                                <p>Shivam Yadav</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Number of scholarship offered by the Institution,
                        duration and amount
                      </p>
                    </td>
                    <td>
                      <p>The institute offers four Scholarships</p>
                      <ul>
                        <li>
                          <p>
                            IMT Hyderabad Merit Scholarship – 40% Fee Waiver
                          </p>
                        </li>
                        <li>
                          <p>
                            IMT Hyderabad Female Scholarship – 20% Fee Waiver
                          </p>
                        </li>
                        <li>
                          <p>
                            IMT TFW* Scholarship – 100% Fee Waiver for 5
                            candidates
                          </p>
                        </li>
                        <li>
                          <p>
                            Shri Mahendra Nath Memorial Scholarship – INR 1.00
                            lac merit cum means scholarships in their 2nd year
                            based on their performance in 1st year.
                          </p>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Criteria for fee waivers / scholarship</p>
                    </td>
                    <td>
                      <p>
                        90+ percentile and above in CAT/XAT or 650 and above
                        absolute score in GMAT
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Estimated cost of Boarding and Lodging in Hostels</p>
                    </td>
                    <td>
                      <p>INR 1, 68, 000/-</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>Admission</p>
                    </td>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>No. of seats sanctioned with the year of approval</p>
                    </td>
                    <td>
                      <p>360 seats</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Number of students admitted under various categories
                        each year in the last three years
                      </p>
                    </td>
                    <td>
                      <p>Batch 2025 – 27</p>
                      <p>PGDM – 159</p>
                      <p>PGDM (Finance) - 67</p>
                      <p>PGDM (Marketing) – 50</p>
                      <p>PGDM (IT) – 17</p>
                      <p>PGDM (LSCM) - 8</p>
                      <br />
                      <p>Batch 2024 – 26</p>
                      <p>PGDM – 194</p>
                      <p>PGDM (Finance) - 76</p>
                      <p>PGDM (Marketing) – 67</p>
                      <p>PGDM (IT) – 28</p>
                      <p>PGDM (LSCM) - 34</p>
                      <br />
                      <p>Batch 2023 – 25</p>
                      <p>PGDM – 185</p>
                      <p>PGDM (Finance) - 61</p>
                      <p>PGDM (Marketing) – 59</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Number of applications received during last two years
                        for admission under Management quota and number admitted
                      </p>
                    </td>
                    <td>
                      <br />
                      <p>NA</p>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>11</p>
                    </td>
                    <td>
                      <p>Admission Procedure</p>
                    </td>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Mention the admission test being follower, name and
                        address of the Test Agency and its URL (website)
                      </p>
                    </td>
                    <td>
                      <p>CAT</p>
                      <br />
                      <p>INDIAN INSTITUTE OF MANAGEMENT –Calcutta,</p>
                      <p>Calcutta, Diamond Harbour Road, Joka</p>
                      <p>Kolkata-700104.</p>
                      <p>
                        URL:
                        <Link href="https://www.iimcal.ac.in/">
                          https://www.iimcal.ac.in/
                        </Link>
                      </p>
                      <br />
                      <p>XAT</p>
                      <br />
                      <p>
                        XLRI Xavier School of Management <br />
                        C. H. Area (East) <br />
                        Jamshedpur - 831001 <br />
                        Jharkhand, India
                      </p>
                      <p>
                        URL:
                        <Link href="http://www.xatonline.in">
                          http://www.xatonline.in
                        </Link>
                      </p>
                      <br />
                      <br />
                      <p>GMAT</p>
                      <br />
                      <p>
                        GMAC/GMGC India Office* <br />
                        Gurugram, India <br />
                        Phone: +91 124 4945270
                      </p>
                      <p>
                        URL:
                        <Link href="https://www.gmac.com/">
                          https://www.gmac.com/
                        </Link>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Number of seats allotted to different Test qualified
                        candidate separately (AIEEE / CET (State conducted test
                        / University tests / CMAT / GPAT / Association conducted
                        test)
                      </p>
                    </td>
                    <td>
                      <br />
                      <p>NA</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Calendar for admission against Management / Vacant Seats
                      </p>
                    </td>
                    <td>
                      <br />
                      <p>NA</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Last date of request for applications</p>
                    </td>
                    <td>
                      <br />
                      <p>March 05, 2025</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Last date of submission of applications</p>
                    </td>
                    <td>
                      <p>March 05, 2025</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Dates for announcing final results</p>
                    </td>
                    <td>
                      <p>June 19, 2025</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Release of admission list (main list and waiting list
                        shall be announced on the same day)
                      </p>
                    </td>
                    <td>
                      <p>March 22, 2025</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Date for acceptance by the candidate (time given shall
                        in no case be less than 15 days)
                      </p>
                    </td>
                    <td>
                      <p>April 10, 2025</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Last date for closing of admission</p>
                    </td>
                    <td>
                      <p>June 30, 2025</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Starting of the Academic session</p>
                    </td>
                    <td>
                      <p>July 01, 2025</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        The waiting list shall be activated only on the expiry
                        of date of main list
                      </p>
                    </td>
                    <td>
                      <p>NA</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        The policy of refund of the fee, in case of withdrawal,
                        shall be clearly notified
                      </p>
                    </td>
                    <td>
                      <p>
                        In the event of a student withdrawing before the start
                        of the Course, the entire fee collected from the
                        student, after a deduction of the processing fee of not
                        more than ₹1000/- (Rupees One Thousand only) shall be
                        refunded.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>12</p>
                    </td>
                    <td>
                      <p>Criteria and weightages for Admission</p>
                    </td>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Describe each criterion with its respective weightages
                        i.e. Admission Test, marks in qualifying examination
                        etc.
                      </p>
                    </td>
                    <td>
                      <p>
                        Test score Percentile (best score in CAT/XAT/GMAT) – 35%
                      </p>
                      <p>
                        Academic score &amp; Quality of graduating
                        institute/university/college – 25%
                      </p>
                      <p>Work experience (duration &amp; quality) – 10%</p>
                      <p>Critical Thinking test--5%</p>
                      <p>Personal Interview – 25%</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>13</p>
                    </td>
                    <td>
                      <p>Mention the minimum level of acceptance, if any</p>
                    </td>
                    <td>
                      <p>Same as above</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Mention the cut-off levels of percentage and percentile
                        score of the candidates in the admission test for the
                        last three years
                      </p>
                    </td>
                    <td>
                      <p>2025-27</p>
                      <p>CAT - &gt;= 80 Percentile</p>
                      <p>XAT - &gt;= 80 Percentile</p>
                      <p>GMAT - &gt;= 615 Score</p>
                      <br />
                      <p>2024-26</p>
                      <p>CAT - &gt;= 75 Percentile</p>
                      <p>XAT - &gt;= 75 Percentile</p>
                      <p>CMAT - &gt;= 90 Percentile</p>
                      <p>GMAT - &gt;= 550 Score</p>
                      <br />
                      <p>2023 – 25</p>
                      <p>CAT - &gt;= 75 Percentile</p>
                      <p>XAT - &gt;= 75 Percentile</p>
                      <p>CMAT - &gt;= 90 Percentile</p>
                      <p>GMAT - &gt;= 550 Score</p>
                      <br />
                      <p>2022 – 24</p>
                      <p>CAT - &gt;= 70 Percentile</p>
                      <p>XAT - &gt;= 70 Percentile</p>
                      <p>CMAT - &gt;= Rank 1-5100</p>
                      <p>GMAT - &gt;= 550 Score</p>
                      <br />
                      <p>2021 – 23</p>
                      <p>CAT - &gt;= 70 Percentile</p>
                      <p>XAT - &gt;= 70 Percentile</p>
                      <p>CMAT - &gt;= 90 Percentile</p>
                      <p>GMAT - &gt;= 550 Score</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>14</p>
                    </td>
                    <td>
                      <p>
                        Results of Admission Under Management seats / Vacant
                        seats
                      </p>
                    </td>
                    <td>
                      <p>NA</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Composition of selection team for admission under
                        Management Quota with the brief profile of members (This
                        information be made available in the public domain after
                        the admission process is over)
                      </p>
                    </td>
                    <td>
                      <p>NA</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Score of the individual candidate admitted arranged in
                        order or merit
                      </p>
                    </td>
                    <td>
                      <p>NA</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>List of candidate who have been offered admission</p>
                    </td>
                    <td>
                      <p>NA</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Waiting list of the candidate in order of merit to be
                        operative from the last date of joining of the first
                        list candidate
                      </p>
                    </td>
                    <td>
                      <p>NA</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        List of the candidate who joined within the date,
                        vacancy position in each category before operation of
                        waiting list
                      </p>
                    </td>
                    <td>
                      <p>NA</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>15</p>
                    </td>
                    <td>
                      <p>
                        Information of Infrastructure and Other Resources
                        Available
                      </p>
                    </td>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Number of Class Rooms and size of each</p>
                    </td>
                    <td>
                      <p>8 rooms (124 Sqm)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Number of Tutorial rooms and Size of each</p>
                    </td>
                    <td>
                      <p>5 rooms (75 sqm)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Number of Laboratories and size of each</p>
                    </td>
                    <td>
                      <p>-NA-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Number of Drawing Halls with capacity of each</p>
                    </td>
                    <td>
                      <p>-NA-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Number of computer centers with capacity of each</p>
                    </td>
                    <td>
                      <p>4 (Lab-1 60 Capacity,</p>
                      <p>Lab-2 40, Capacity</p>
                      <p>Lab-3 100 Capacity and</p>
                      <p>Lab-4 30 Capacity)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Central Examination facility, Number of rooms and
                        capacity of each
                      </p>
                    </td>
                    <td>
                      <p>Exam Control Office (46 Sqm)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Barrier Free built environment for disabled and elderly
                        persons
                      </p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Occupancy Certificate</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Fire and Safety Certificate</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Hostel Facilities</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Library</p>
                    </td>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Number of Library books / Titles / Journals available
                      </p>
                    </td>
                    <td>
                      <p>Books: 15829.</p>
                      <p>Titles: 10123.</p>
                      <p>National Journals – 62</p>
                      <p>International Journals – 14</p>
                      <p>Business Magazines (Print) : 25</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        List of online National / International Journals
                        subscribed
                      </p>
                    </td>
                    <td>
                      <p>
                        Having access of 12500+ journals through subscribed
                        databases like EBSCO- Business Source ultimate; Emerald,
                        Science Direct , DelNet etc.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>E-Library facilities</p>
                    </td>
                    <td>
                      <p>
                        Having access of e-books of 20,000+ titles in Business
                        and Management Area; Having access of 12500+ e-journals
                        /e-magazines in the area of Marketing, Finance, Human
                        Resources, Operations, General Management etc. All these
                        can be accessible through our IP based as well as remote
                        access ie anywhere, anytime.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Research Tools &amp; e -learning, databases</p>
                    </td>
                    <td>
                      <p>
                        Having access to Grammarly, Scopus, Turnitin. Also
                        having Coursera subscription - e- learning platform
                        covering 10000+ courses. Besides we have access to rich
                        collection of databases like EMIS, CMIE- Prowess,
                        Capitaline etc.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Case studies</p>
                    </td>
                    <td>
                      <p>
                        Harvard case studies with access to Third partner
                        schools like Darden, ISB, IIM etc.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Terminals</p>
                    </td>
                    <td>
                      <p>1) Bloomberg 2)LSEG</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Computing Facilities</p>
                    </td>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Internet Bandwidth</p>
                    </td>
                    <td>
                      <p>
                        1000nMbps, 1:1 Dedicated, ISP: JIO and Backup Connection
                        50 Mbps (RF), ISP (TATA)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Number and configuration of System</p>
                    </td>
                    <td>
                      <p>
                        The configuration details for 384 desktops and laptops
                        are as follows.
                      </p>
                      <ol>
                        <li>
                          <p>
                            Dell OptiPlex3050 MT /i3 / 8GB RAM/1TB HDD/19” TFT
                            Monitor/KB/Mouse- Desktops 221 Numbers
                          </p>
                        </li>
                        <li>
                          <p>
                            Dell OptiPlex 3040 MT /i3 / 8GB RAM/500GB HDD/19”
                            TFT Monitor/KB/Mouse Desktops=30 Numbers
                          </p>
                        </li>
                        <li>
                          <p>
                            HP 280 G2 / i3 / 8GB RAM/ 500GB HDD/18.5” TFT
                            Monitor/ KB/ Mouse Desktops=35 Numbers
                          </p>
                        </li>
                        <li>
                          <p>
                            HP 430 G8,i5/8GB RAM/512 GB SSD HDD/13.3” Screen- 25
                            Numbers
                          </p>
                        </li>
                        <li>
                          <p>
                            HP 340 G7, i5/8GB RAM/1 TB SATA HDD /14” Screen- 3
                            Numbers
                          </p>
                        </li>
                        <li>
                          <p>
                            HP 440 G9,i5/8GB RAM/512 GB SSD HDD/13.3” Screen- 10
                            Numbers
                          </p>
                        </li>
                        <li>
                          <p>
                            HP 440 G10, i5/8GB RAM/512 GB NVME HDD/14” Screen-16
                            Numbers.
                          </p>
                        </li>
                      </ol>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Total number of Systems connected by LAN</p>
                    </td>
                    <td>
                      <p>340 Numbers with an Internet connection.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Total number of systems connected by WAN</p>
                    </td>
                    <td>
                      <p>1 (Firewall)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Major software packages available</p>
                    </td>
                    <td>
                      <p>
                        SPSS Statistics, SPSS AMOS, Microsoft Project
                        Professional, Microsoft SQL Server Standard Edition,
                        Microsoft Visual Studio Enterprise Edition, etc.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Special purpose facilities available</p>
                    </td>
                    <td>
                      <p>Security purpose: CCTV Cameras Installed</p>
                      <p>
                        Laptops &amp;Mobile internet access purpose: Wi-Fi
                        devices installed.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Innovation Cell</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Social Media Cell</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Compliance of the National Academic Depository (NAD),
                        applicable to PGDM / PGDM Institutions and University
                        Departments
                      </p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>List of facilities available</p>
                    </td>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Games and Sports Facilities</p>
                    </td>
                    <td>
                      <p>Cricket Ground</p>
                      <p>Football Ground</p>
                      <p>Basketball Court</p>
                      <p>Tennis Court</p>
                      <p>Table Tennis</p>
                      <p>Caroms</p>
                      <p>Chess and Gymnasium</p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Extra-Curricular Activities</p>
                    </td>
                    <td>
                      <p>Seminar Hall</p>
                      <p>Auditorium</p>
                      <p>Amphi Theater</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Soft Skill Development Facilities</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Teaching Learning Process</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Academic Calendar for the Academic Year 2025-26</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td colSpan={4}>
                      <p>
                        <b>Academic Calendar for the Academic Year 2025-26</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <b>Term - I &amp; Term - IV</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Batch</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Date</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Day</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Student Reporting and Registration</p>
                    </td>
                    <td>
                      <p>2025-27</p>
                    </td>
                    <td>
                      <p>16, 17 Jun 2025</p>
                    </td>
                    <td>
                      <p>Monday, Tuesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Abhyuday - Orientation Program</p>
                    </td>
                    <td>
                      <p>2025-27</p>
                    </td>
                    <td>
                      <p>18 Jun 2025 to 27 Jun 2025</p>
                    </td>
                    <td>
                      <p>Wednesday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Student Registration</p>
                    </td>
                    <td>
                      <p>2024-26</p>
                    </td>
                    <td>
                      <p>01-Jul-2025</p>
                    </td>
                    <td>
                      <p>Tuesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Commencement of classes</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>02-Jul-2025</p>
                    </td>
                    <td>
                      <p>Wednesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Last day for substitution of courses</p>
                    </td>
                    <td>
                      <p>2024-26</p>
                    </td>
                    <td>
                      <p>09-Jul-2025</p>
                    </td>
                    <td>
                      <p>Wednesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Reexamination Week</p>
                    </td>
                    <td>
                      <p>2024-26</p>
                    </td>
                    <td>
                      <p>08 Jul 2025 to 11-Jul-2025</p>
                    </td>
                    <td>
                      <p>Tuesday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Mid Term Feedback</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>05-Aug-2025</p>
                    </td>
                    <td>
                      <p>Tuesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Mid Term Examinations Week</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>11 Aug 2025 to 13 Aug 2025</p>
                    </td>
                    <td>
                      <p>Monday to Wednesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Independence Day</p>
                    </td>
                    <td>
                      <p>Holiday</p>
                    </td>
                    <td>
                      <p>15-Aug-2025</p>
                    </td>
                    <td>
                      <p>Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Work Shop -1</p>
                    </td>
                    <td>
                      <p>2025-27</p>
                    </td>
                    <td>
                      <p>16 Aug 2025 to 17 Aug 2025</p>
                    </td>
                    <td>
                      <p>Saturday to Sunday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Batch Address by Director</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>18 Aug 2025 to 22 Aug 2025</p>
                    </td>
                    <td>
                      <p>Monday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Ganesh Chaturdhi</p>
                    </td>
                    <td>
                      <p>Holiday</p>
                    </td>
                    <td>
                      <p>27-Aug-2025</p>
                    </td>
                    <td>
                      <p>Wednesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>End Term Feedback</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>09-Sep-2025</p>
                    </td>
                    <td>
                      <p>Tuesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Last day for class work</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>18-Sep-2025</p>
                    </td>
                    <td>
                      <p>Thursday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Comprehensive Exams Week</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>22 Sep 2025 to 27 Sep 2025</p>
                    </td>
                    <td>
                      <p>Monday to Saturday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Term Break</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>29 Sep 2025 to 03 Oct 2025</p>
                    </td>
                    <td>
                      <p>Monday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Faculty Strategic Retreat</p>
                    </td>
                    <td>
                      <p>Strategic Retreat</p>
                    </td>
                    <td>
                      <p>29 Sep 2025 to 01 Oct 2025</p>
                    </td>
                    <td>
                      <p>Monday to Wednesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Gandhi Jayanti</p>
                    </td>
                    <td>
                      <p>Holiday</p>
                    </td>
                    <td>
                      <p>02-Oct-2025</p>
                    </td>
                    <td>
                      <p>Thursday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Vijayadasami</p>
                    </td>
                    <td>
                      <p>Holiday</p>
                    </td>
                    <td>
                      <p>03-Oct-2025</p>
                    </td>
                    <td>
                      <p>Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <b>Term - II &amp; Term - V</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Batch</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Date</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Day</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Students' Registration &amp; Commencement of classes
                      </p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>06-Oct-2025</p>
                    </td>
                    <td>
                      <p>Monday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Last day for substitution of Courses</p>
                    </td>
                    <td>
                      <p>2024-26</p>
                    </td>
                    <td>
                      <p>13-Oct-2025</p>
                    </td>
                    <td>
                      <p>Monday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Reexamination Week</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>14 Oct 2025 to 17 Oct 2025</p>
                    </td>
                    <td>
                      <p>Tuesday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Deepavali</p>
                    </td>
                    <td>
                      <p>Holiday</p>
                    </td>
                    <td>
                      <p>20-Oct-2025</p>
                    </td>
                    <td>
                      <p>Monday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Result Declaration (Term-I &amp; IV)</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>24-Oct-2025</p>
                    </td>
                    <td>
                      <p>Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Periodos</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>25 Oct 2025 to 26 Oct 2025</p>
                    </td>
                    <td>
                      <p>Saturday to Sunday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Mid Term Feedback</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>04-Nov-2025</p>
                    </td>
                    <td>
                      <p>Tuesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Guru Nanak Jayanti</p>
                    </td>
                    <td>
                      <p>Holiday</p>
                    </td>
                    <td>
                      <p>05-Nov-2025</p>
                    </td>
                    <td>
                      <p>Wednesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Mid Term Examinations Week</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>10 Nov 2025 to 12 Nov 2025</p>
                    </td>
                    <td>
                      <p>Monday to Wednesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Work Shop -2</p>
                    </td>
                    <td>
                      <p>2025-27</p>
                    </td>
                    <td>
                      <p>15 Nov 2025 to 16 Nov 2025</p>
                    </td>
                    <td>
                      <p>Saturday to Sunday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Batch Address by Director</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>17 Nov 2025 to 21 Nov 2025</p>
                    </td>
                    <td>
                      <p>Monday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Impelz</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>22 Nov 2025 to 23 Nov 2025</p>
                    </td>
                    <td>
                      <p>Saturday to Sunday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>End Term Feedback</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>09-Dec-2025</p>
                    </td>
                    <td>
                      <p>Tuesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Last day for class work</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>19-Dec-2025</p>
                    </td>
                    <td>
                      <p>Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Comprehensive Exams Week</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>22 Dec 2025 to 27 Dec 2025</p>
                    </td>
                    <td>
                      <p>Monday to Saturday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Christmas</p>
                    </td>
                    <td>
                      <p>Holiday</p>
                    </td>
                    <td>
                      <p>25-Dec-2025</p>
                    </td>
                    <td>
                      <p>Thursday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Term Break</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>29 Dec 2025 to 02 Jan 2026</p>
                    </td>
                    <td>
                      <p>Monday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <b>Term - III &amp; Term - VI</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Batch</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Date</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Day</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Students' Registration &amp; Commencement of classes
                      </p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>05-Jan-2026</p>
                    </td>
                    <td>
                      <p>Monday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Last day for substitution of Courses</p>
                    </td>
                    <td>
                      <p>2024-26</p>
                    </td>
                    <td>
                      <p>12-Jan-2026</p>
                    </td>
                    <td>
                      <p>Monday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Sankranti</p>
                    </td>
                    <td>
                      <p>Holiday</p>
                    </td>
                    <td>
                      <p>14-Jan-2026</p>
                    </td>
                    <td>
                      <p>Wednesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Reexamination Week</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>15 Jan 2026 to 17 Jan 2026</p>
                    </td>
                    <td>
                      <p>Thursday to Saturday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Result Declaration (Term-II &amp; V)</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>22-Jan-2026</p>
                    </td>
                    <td>
                      <p>Thursday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>TED'x</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>24-Jan-2026</p>
                    </td>
                    <td>
                      <p>Saturday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Republic Day</p>
                    </td>
                    <td>
                      <p>Holiday</p>
                    </td>
                    <td>
                      <p>26-Jan-2026</p>
                    </td>
                    <td>
                      <p>Monday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>ACE Connect</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>31 Jan 2026 to 1 Feb 2026</p>
                    </td>
                    <td>
                      <p>Saturday to Sunday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Mid Term Feedback</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>03-Feb-2026</p>
                    </td>
                    <td>
                      <p>Tuesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Mid Term Examinations Week</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>4 Feb 2026 to 6 Feb 2026</p>
                    </td>
                    <td>
                      <p>Wednesday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Batch Address by Director</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>09 Feb 2026 to 13 Feb 2026</p>
                    </td>
                    <td>
                      <p>Monday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Work Shop -3</p>
                    </td>
                    <td>
                      <p>2025-27</p>
                    </td>
                    <td>
                      <p>14 Feb 2026 to 15 Feb 2026</p>
                    </td>
                    <td>
                      <p>Saturday to Sunday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Elective Brieffing</p>
                    </td>
                    <td>
                      <p>2025-27</p>
                    </td>
                    <td>
                      <p>04 Mar 2026 to 06 Mar 2026</p>
                    </td>
                    <td>
                      <p>Wednesday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>End Term Feedback</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>10-Mar-2026</p>
                    </td>
                    <td>
                      <p>Tuesday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Last day for class work</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>13-Mar-2026</p>
                    </td>
                    <td>
                      <p>Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Comprehensive Exams Week</p>
                    </td>
                    <td>
                      <p>2025-27 &amp; 2024-26</p>
                    </td>
                    <td>
                      <p>16 Mar 2026 to 21 Mar 2026</p>
                    </td>
                    <td>
                      <p>Monday to Saturday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Term Break</p>
                    </td>
                    <td>
                      <p>2025-27</p>
                    </td>
                    <td>
                      <p>23-Mar-2026 to 27-Mar-2026</p>
                    </td>
                    <td>
                      <p>Monday to Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <b>Summer Term</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Batch</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Date</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Day</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Internship Program/ MTS/Student Exchange Program Begins
                      </p>
                    </td>
                    <td>
                      <p>2025-27</p>
                    </td>
                    <td>
                      <p>30-Mar-2026</p>
                    </td>
                    <td>
                      <p>Monday</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Internship Program / MTS/Student Exchange Program Ends
                      </p>
                    </td>
                    <td>
                      <p>2025-27</p>
                    </td>
                    <td>
                      <p>19-Jun-2026</p>
                    </td>
                    <td>
                      <p>Friday</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} rowSpan={2}>
                      <p>
                        <b>
                          Note : * As per the prevailing rules of MHRD and
                          AICTE, Academic Calendar timelines may change .
                        </b>
                      </p>
                    </td>
                  </tr>
                  <tr />
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Teaching Load of each Faculty</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td colSpan={4}>
                      <p>Faculty Work Load : AY 2023-24</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Sno</p>
                    </td>
                    <td>
                      <p>Area</p>
                    </td>
                    <td>
                      <p>Faculty Name</p>
                    </td>
                    <td>
                      <p>Work Load in Hours</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>1</p>
                    </td>
                    <td>
                      <p>ANALYTICS &amp; INFORMATION TECHNOLOGY</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) SURAJIT GHOSH DASTIDAR</p>
                    </td>
                    <td>
                      <p>140</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      <p>ANALYTICS &amp; INFORMATION TECHNOLOGY</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) INDRANIL GHOSH</p>
                    </td>
                    <td>
                      <p>135</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>3</p>
                    </td>
                    <td>
                      <p>ANALYTICS &amp; INFORMATION TECHNOLOGY</p>
                    </td>
                    <td>
                      <p>Prof. AARIZ FAIZAN JAVED</p>
                    </td>
                    <td>
                      <p>150</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>4</p>
                    </td>
                    <td>
                      <p>ANALYTICS &amp; INFORMATION TECHNOLOGY</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) R MAHESH RAMALINGAM</p>
                    </td>
                    <td>
                      <p>140</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>5</p>
                    </td>
                    <td>
                      <p>FINANCE &amp; ACCOUNTING</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) VENKATA CHAKRAPANI C</p>
                    </td>
                    <td>
                      <p>165</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>6</p>
                    </td>
                    <td>
                      <p>FINANCE &amp; ACCOUNTING</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) NIKHIL RASTOGI</p>
                    </td>
                    <td>
                      <p>170</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>7</p>
                    </td>
                    <td>
                      <p>FINANCE &amp; ACCOUNTING</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) SARATH BABU A</p>
                    </td>
                    <td>
                      <p>165</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>8</p>
                    </td>
                    <td>
                      <p>FINANCE &amp; ACCOUNTING</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.)K. SRIHARSHA REDDY</p>
                    </td>
                    <td>
                      <p>30</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>9</p>
                    </td>
                    <td>
                      <p>FINANCE &amp; ACCOUNTING</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) SOMYA ARORA</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>FINANCE &amp; ACCOUNTING</p>
                    </td>
                    <td>
                      <p>Prof. PURNIMA KHEMANI</p>
                    </td>
                    <td>
                      <p>155</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>11</p>
                    </td>
                    <td>
                      <p>GENERAL MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) STEVEN RAJ PADAKANDLA</p>
                    </td>
                    <td>
                      <p>145</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>12</p>
                    </td>
                    <td>
                      <p>GENERAL MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) TULIKA SHARMA</p>
                    </td>
                    <td>
                      <p>155</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>13</p>
                    </td>
                    <td>
                      <p>GENERAL MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) SAIKAT BANERJEE</p>
                    </td>
                    <td>
                      <p>55</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>14</p>
                    </td>
                    <td>
                      <p>GENERAL MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) AINDRILA CHATTERJEE</p>
                    </td>
                    <td>
                      <p>140</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>15</p>
                    </td>
                    <td>
                      <p>GENERAL MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) ANANDA RAO S</p>
                    </td>
                    <td>
                      <p>75</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>16</p>
                    </td>
                    <td>
                      <p>HUMAN RESOURCE MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) ROMINA MATHEW</p>
                    </td>
                    <td>
                      <p>165</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>17</p>
                    </td>
                    <td>
                      <p>HUMAN RESOURCE MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) TUMPA DEY</p>
                    </td>
                    <td>
                      <p>210</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>18</p>
                    </td>
                    <td>
                      <p>HUMAN RESOURCE MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) NEETU MOHAMMED</p>
                    </td>
                    <td>
                      <p>85</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>19</p>
                    </td>
                    <td>
                      <p>HUMAN RESOURCE MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) B. PAVAN KUMAR</p>
                    </td>
                    <td>
                      <p>165</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>20</p>
                    </td>
                    <td>
                      <p>MARKETING</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) NITIN GUPTA</p>
                    </td>
                    <td>
                      <p>170</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>21</p>
                    </td>
                    <td>
                      <p>MARKETING</p>
                    </td>
                    <td>
                      <p>Prof. DEVI PRASAD GHOSH</p>
                    </td>
                    <td>
                      <p>150</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>22</p>
                    </td>
                    <td>
                      <p>MARKETING</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) MANOJ DAS</p>
                    </td>
                    <td>
                      <p>80</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>23</p>
                    </td>
                    <td>
                      <p>MARKETING</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) SHAON SEN</p>
                    </td>
                    <td>
                      <p>140</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>24</p>
                    </td>
                    <td>
                      <p>MARKETING</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) PRANAY SINDHU</p>
                    </td>
                    <td>
                      <p>150</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>25</p>
                    </td>
                    <td>
                      <p>OPERATIONS MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) PUSHPESH PANT</p>
                    </td>
                    <td>
                      <p>135</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>26</p>
                    </td>
                    <td>
                      <p>OPERATIONS MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) SOURABH BHATTACHARYA</p>
                    </td>
                    <td>
                      <p>145</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>27</p>
                    </td>
                    <td>
                      <p>OPERATIONS MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.)KALYANA C CHEJARLA</p>
                    </td>
                    <td>
                      <p>140</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>28</p>
                    </td>
                    <td>
                      <p>OPERATIONS MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) K VINAY KUMAR</p>
                    </td>
                    <td>
                      <p>140</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>29</p>
                    </td>
                    <td>
                      <p>OPERATIONS MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) ARUN KUMAR BISWAL</p>
                    </td>
                    <td>
                      <p>150</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>30</p>
                    </td>
                    <td>
                      <p>OPERATIONS MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. (Dr.) SRICHARAN</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>31</p>
                    </td>
                    <td>
                      <p>OPERATIONS MANAGEMENT</p>
                    </td>
                    <td>
                      <p>Prof. PRAVEEN PURAM</p>
                    </td>
                    <td>
                      <p>75</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Internal Continuous Evaluation System and Place</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Student’s assessment of Faculty, System in Place</p>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>16</p>
                    </td>
                    <td>
                      <p>Enrollment of students in the last 3 years</p>
                    </td>
                    <td>
                      <br />
                      <div className="table-responsive align-center">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td>
                                <p>Batch</p>
                              </td>
                              <td>
                                <p>No. of Students</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>2025-27</p>
                              </td>
                              <td>
                                <p>301</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>2024-26</p>
                              </td>
                              <td>
                                <p>399</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>2023-25</p>
                              </td>
                              <td>
                                <p>305</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>17</p>
                    </td>
                    <td>
                      <p>List of Research Projects Consultancy Works</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>
                        Number of Projects carried out, funding agency, Grant
                        received
                      </p>
                    </td>
                    <td>
                      <p>
                        1 Sponsored Project by Center for General Education
                        Society
                      </p>
                      <p>
                        3 Consulting Projects namely NPCI, NABARD and ACG
                        Capsules
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>S. No</p>
                    </td>
                    <td>
                      <p>Faculty</p>
                    </td>
                    <td>
                      <p>Tittle</p>
                    </td>
                    <td>
                      <p>Research Grant/ Project Funded by</p>
                    </td>
                    <td>
                      <p>Starting Date</p>
                    </td>
                    <td>
                      <p>End Date</p>
                    </td>
                    <td>
                      <p>Amount in (Rs)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>1</p>
                    </td>
                    <td>
                      <p>
                        Dr Sriharsha Reddy, Dr Debadutta Kumar Panda &amp; Dr
                        Tulika Sharma
                      </p>
                    </td>
                    <td>
                      <p>Covid 19 Impact on SMEs</p>
                    </td>
                    <td>
                      <p>Center for General Education Society</p>
                    </td>
                    <td>
                      <p>Dec 20</p>
                    </td>
                    <td>
                      <p>Oct 21</p>
                    </td>
                    <td>
                      <p>21,20,000</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      <p>
                        Dr Sriharsha Reddy, Kalyana Chejarla &amp; Debadutta
                        Kumar Panda
                      </p>
                    </td>
                    <td>
                      <p>
                        Design and Implementation of Activity Based Costing at
                        ACG Capsules Pvt Ltd
                      </p>
                    </td>
                    <td>
                      <p>ACG Capsules</p>
                    </td>
                    <td>
                      <p>August 1st 2019</p>
                    </td>
                    <td>
                      <p>December 2019</p>
                    </td>
                    <td>
                      <p>14,00,000</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>3</p>
                    </td>
                    <td>
                      <p>
                        Dr Sriharsha Reddy, Dr Debadutta Kumar &amp; Sridhar
                        Vaithinanathan
                      </p>
                    </td>
                    <td>
                      <p>
                        “Study on the Adoption of Cash less Transactions at
                        small merchants in Tier 2 and 3 cities of Telangana”
                      </p>
                    </td>
                    <td>
                      <p>NPCI</p>
                    </td>
                    <td>
                      <p>May 2017</p>
                    </td>
                    <td>
                      <p>Completed on June 2018</p>
                    </td>
                    <td>
                      <p>5,17500</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>4</p>
                    </td>
                    <td>
                      <p>
                        Dr. Debadutta Kumar Panda, Dr. Sriharsha Reddy &amp; Dr
                        Shabnam Priyadarshini
                      </p>
                    </td>
                    <td>
                      <p>
                        “A Study on Defaults in SHG-Bank Linkage Program in
                        Andhra Pradesh”
                      </p>
                    </td>
                    <td>
                      <p>NABARD</p>
                    </td>
                    <td>
                      <p>July 2015</p>
                    </td>
                    <td>
                      <p>Completed on May 2017</p>
                    </td>
                    <td>
                      <p>4,99,100</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className="container text-overflow"
              style={{ backgroundColor: "#ffff" }}
            >
              <p>
                <strong>
                  IMT Hyderabad -Research Publications for the last three years
                </strong>
              </p>

              <h5>2024-2025</h5>
              <ol>
                <li>
                  <p>
                    Deepak Srivastav, Praveen Puram, Rudra Sensarma, Anand
                    Gurumurthy, Does salary disparity affect team performance in
                    cricket? Evidence from the Indian Premier League, IIMB
                    Management Review, Volume 37, Issue 2, 2025, 100568, ISSN
                    0970-3896,{" "}
                    <a href="https://doi.org/10.1016/j.iimb.2025.100568">
                      https://doi.org/10.1016/j.iimb.2025.100568
                    </a>
                    .
                  </p>
                </li>
              </ol>
              <ol start="2">
                <li>
                  <p>
                    Pant, P., Yadav, R., Niyas KP, M., Dadsena, K. K., Pratap,
                    S., &amp; Sachan, A. (2025). Fake news detection for
                    sustainable supply chain management using deceptive tones:
                    an application of ML, NLP and Explainable AI. Enterprise
                    Information Systems, 19(9).{" "}
                    <a href="https://doi.org/10.1080/17517575.2025.2510350">
                      https://doi.org/10.1080/17517575.2025.2510350
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="3">
                <li>
                  <p>
                    Pant, P., &amp; Sharma, T. (2025). CSR–Performance
                    Relationship Paradox: The Moderating Effect of Organization
                    Structure. Global Business Review, 0(0).{" "}
                    <a href="https://doi.org/10.1177/09721509251345582">
                      https://doi.org/10.1177/09721509251345582
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="4">
                <li>
                  <p>
                    “Impact of Knowledge Transfer and Sharing on Sustainable
                    Family Business Performance: The Moderating Role of Digital
                    Transformation”, Volume 91Issue 5The Electronic Journal of
                    Information Systems in Developing Countries, September 11,
                    2025,{" "}
                    <a href="https://doi.org/10.1002/isd2.70016">
                      https://doi.org/10.1002/isd2.70016
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="5">
                <li>
                  <p>
                    Dixit, K.; Kumar, P.; Aashish, K.; Zohair, M. Leveraging
                    Social and Intellectual Capital for Social Entrepreneurship:
                    A Model for Sustainable Business Practices in an Uncertain
                    Environment. J. Risk Financial Manag. 2025, 18, 46.{" "}
                    <a href="https://doi.org/10.3390/jrfm18020046">
                      https://doi.org/10.3390/jrfm18020046
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="6">
                <li>
                  <p>
                    Basu, M., &amp; Kurian, R. E. (2025). Board composition and
                    firm internationalization: Are emerging market multinational
                    enterprises unique? Corporate Ownership &amp; Control,
                    22(2), 84–93.{" "}
                    <a href="https://doi.org/10.22495/cocv22i2art8">
                      https://doi.org/10.22495/cocv22i2art8
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="7">
                <li>
                  <p>
                    Ben Krishna, Praveen Puram, “ The impact of trust-based
                    challenges on user satisfaction in food sharing platforms: A
                    text mining approach”, Technological Forecasting and Social
                    Change, Volume 216, 2025, 124159, ISSN 0040-1625,{" "}
                    <a href="https://doi.org/10.1016/j.techfore.2025.124159">
                      https://doi.org/10.1016/j.techfore.2025.124159
                    </a>
                    .
                  </p>
                </li>
              </ol>
              <ol start="8">
                <li>
                  <p>
                    Sindhu P, Bharti K (2025;), "What motivates customers to
                    purchase from social commerce pages? A means-end chain
                    approach". Information Technology &amp; People, Vol.
                    ahead-of-print No. ahead-of-print.{" "}
                    <a href="https://doi.org/10.1108/ITP-10-2022-0735">
                      https://doi.org/10.1108/ITP-10-2022-0735
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="9">
                <li>
                  <p>
                    Pant, P., Yadav, R. and Vats, A. (2025), "Interplay between
                    CSR, female director, promoter ownership and firm
                    performance: a resource orchestration theory perspective",
                    Managerial Finance, Published: 27 Feb 2025{" "}
                    <a href="https://doi.org/10.1108/MF-11-2024-0846">
                      https://doi.org/10.1108/MF-11-2024-0846
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="10">
                <li>
                  <p>
                    Malhotra, Gunjan &amp; Ramalingam, Mahesh. (2025). Unlocking
                    omnichannel capabilities to understand consumer retention:
                    unravelling cross-channel integration and consumer
                    empowerment. Benchmarking: An International Journal,
                    Published: 28 Feb 2025{" "}
                    <a href="https://www.emerald.com/insight/content/doi/10.1108/bij-04-2024-0264/full/html">
                      https://www.emerald.com/insight/content/doi/10.1108/bij-04-2024-0264/full/html
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="11">
                <li>
                  <p>
                    Mandal, S., Babu, S., &amp; Raman, R. (2025). Gen Zs and
                    millennials’ orientation towards AI tools: an index
                    approach. Technology Analysis &amp; Strategic Management,
                    1–21, Published: 7 Feb 2025.{" "}
                    <a href="https://doi.org/10.1080/09537325.2025.2459189">
                      https://doi.org/10.1080/09537325.2025.2459189
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="12">
                <li>
                  <p>
                    Ghosh, I., Megaravalli, A.V., Abedin, M.Z. et al. Prediction
                    and decoding of metaverse coin dynamics: a granular quest
                    using MODWT-Facebook’s prophet-TBATS and XAI methodology.
                    Ann Oper Res (2025), Published: 28 Jan 2025{" "}
                    <a href="https://doi.org/10.1007/s10479-025-06491-1">
                      https://doi.org/10.1007/s10479-025-06491-1
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="13">
                <li>
                  <p>
                    Tarei, Pradeep &amp; Kumar, Rajan &amp; Gumte, Kapil.
                    (2024). Is driving an electric two-wheeler (E2W) safe?
                    Analysing safety risk factors of E2W considering the quality
                    and reliability criteria. International Journal of Quality
                    &amp; Reliability Management, Published: 13 Nov 2024{" "}
                    <a href="https://www.emerald.com/insight/content/doi/10.1108/ijqrm-06-2024-0197/full/html">
                      https://www.emerald.com/insight/content/doi/10.1108/ijqrm-06-2024-0197/full/html
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="14">
                <li>
                  <p>
                    Das, M., Ramalingam, M., &amp; Goyal, K. (2024). Fear-Driven
                    Surge: Food Delivery Apps in a Changing World. Journal of
                    Global Marketing, 37(5), 417–439, Published: 29 Oct 2024.{" "}
                    <a href="https://doi.org/10.1080/08911762.2024.2417658">
                      https://doi.org/10.1080/08911762.2024.2417658
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="15">
                <li>
                  <p>
                    Das, P., Chintaluri, M.G., Mandal, S., Babu, S., Kotni,
                    V.V.P. and Raman, R. (2024), "Exploring the enablers of
                    virtual tourism experiences for Gen Z", Journal of Advances
                    in Management Research, Published: 25 Oct 2024{" "}
                    <a href="https://doi.org/10.1108/JAMR-07-2023-0192">
                      https://doi.org/10.1108/JAMR-07-2023-0192
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="16">
                <li>
                  <p>
                    Bhattacharya, S., Pant, P., &amp; Areti, S. H. (2024).
                    Blockchain in Closed-Loop Supply Chain: A Systematic Review
                    and Future Research Agenda. Vision, Published: 19 Oct 2024.{" "}
                    <a href="https://doi.org/10.1177/09722629241281866">
                      https://doi.org/10.1177/09722629241281866
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="17">
                <li>
                  <p>
                    Chatterjee, A., Chauradia, A.J. &amp; Pedada, K. Rural women
                    microentrepreneurs, consumer acquisition, and value
                    delivery: Evidence from a quasi-experiment in rural India.
                    J. of the Acad. Mark. Sci. 53, 213–231 (2025), Published: 23
                    Sep 2024.{" "}
                    <a href="https://doi.org/10.1007/s11747-024-01053-6">
                      https://doi.org/10.1007/s11747-024-01053-6
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="18">
                <li>
                  <p>
                    Pramanik, P., Jana, R.K. and Ghosh, I. (2024), "Enablers of
                    new business density: a comparison between developed and
                    developing countries using deep learning and explainable
                    AI", Benchmarking: An International Journal, Published: 27
                    Aug 2024.{" "}
                    <a href="https://doi.org/10.1108/BIJ-11-2023-0830">
                      https://doi.org/10.1108/BIJ-11-2023-0830
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="19">
                <li>
                  <p>
                    Mitrajit Biswas, Tumpa Dey, Bhupendra Kumar Gautam, George
                    Abraham, Varun Goel(2024). Leveraging AI In Marketing, HR
                    And Finance: Interdisciplinary Approaches to Optimizing
                    Organizational Performance, 44(3), 1342-1349, Published: 31
                    Jul 2024{" "}
                    <a href="https://bpasjournals.com/library-science/index.php/journal/article/view/551">
                      https://bpasjournals.com/library-science/index.php/journal/article/view/551
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="20">
                <li>
                  <p>
                    Indranil Ghosh, Arijit De, Maritime Fuel Price Prediction of
                    European Ports using Least Square Boosting and Facebook
                    Prophet: Additional Insights from Explainable Artificial
                    Intelligence, Transportation Research Part E: Logistics and
                    Transportation Review, Volume 189, 2024, 103686, Published:
                    23 Jul 2024.{" "}
                    <a href="https://www.sciencedirect.com/science/article/pii/S1366554524002771">
                      https://www.sciencedirect.com/science/article/pii/S1366554524002771
                    </a>
                  </p>
                </li>
              </ol>
              <h5>Case Studies: 2024-2025</h5>
              <ol>
                <li>
                  <p>
                    Nitin Gupta, EKA Mobility's Dilemma: Generating Favourable
                    Attitudes Towards Its e-CVs, Case Centre, Published: 9 May
                    2025,{" "}
                    <a href="https://www.thecasecentre.org/products/view?id=206155">
                      https://www.thecasecentre.org/products/view?id=206155
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="2">
                <li>
                  <p>
                    Vinay Kumar Kalakbandi, Supr Daily’s last mile nightmare and
                    the Insanely Good aftermath, Sage Business Cases, Published:
                    14 Jan 2025.{" "}
                    <a href="https://sk.sagepub.com/cases/supr-dailys-last-mile-nightmare-and-the-insanelygood-aftermath">
                      https://sk.sagepub.com/cases/supr-dailys-last-mile-nightmare-and-the-insanelygood-aftermath
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="3">
                <li>
                  <p>
                    Surajit Ghosh Dastidar, Mayora: launching Coffee Joy,
                    Emerald Emerging Case, Published: 15 Nov 2024.{" "}
                    <a href="https://www.emerald.com/insight/content/doi/10.1108/eemcs-10-2023-0412/full/html#case-tab">
                      https://www.emerald.com/insight/content/doi/10.1108/eemcs-10-2023-0412/full/html#case-tab
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="4">
                <li>
                  <p>
                    Kalyana Chejarla, Value Chain Analysis: Evolving Dynamics of
                    the Telecommunications Industry, Sage Business Cases,
                    Published: 15 Oct 2024.{" "}
                    <a href="https://sk.sagepub.com/data-decisions/value-analysis-evolving-dynamics-telecommunications-industry">
                      https://sk.sagepub.com/data-decisions/value-analysis-evolving-dynamics-telecommunications-industry
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="5">
                <li>
                  <p>
                    Surajit Ghosh Dastidar, NextSkill 360: Teaching Coding
                    Without Computers, Ivey Publishing, Published: 15 Oct 2024.{" "}
                    <a href="https://www.iveypublishing.ca/s/product/nextskill-360-teaching-coding-without-computers/01tOF000005r2ATYAY">
                      https://www.iveypublishing.ca/s/product/nextskill-360-teaching-coding-without-computers/01tOF000005r2ATYAY
                    </a>
                  </p>
                </li>
              </ol>

              <h5>2023-2024</h5>
              <ol>
                <li>
                  <p>
                    Puram, P., Roy, S. &amp; Gurumurthy, A. Understanding the
                    challenges affecting food-sharing apps’ usage: insights
                    using a text-mining and interpretable machine learning
                    approach. Ann Oper Res (2024).{" "}
                    <a href="https://doi.org/10.1007/s10479-024-06130-1">
                      https://doi.org/10.1007/s10479-024-06130-1
                    </a>
                    , Published: 27 Jun 2024
                  </p>
                </li>
              </ol>
              <ol start="2">
                <li>
                  <p>
                    Tumpa Dey, WHAT IS WORKPLACE INCIVILITY AND WHY DOES IT
                    HAPPEN?, Asian And Pacific Economic Review, Published: 27
                    Jun 2024{" "}
                    <a href="https://asparev.net/index.php/APE/article/view/75">
                      https://asparev.net/index.php/APE/article/view/75
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="3">
                <li>
                  <p>
                    Paritosh Pramanik, Rabin K. Jana, Indranil Ghosh, AI
                    readiness enablers in developed and developing economies:
                    Findings from the XGBoost regression and explainable AI
                    framework, Technological Forecasting and Social Change,
                    Volume 205, 2024, 123482, Published 14 Jun 2024{" "}
                    <a href="https://www.sciencedirect.com/science/article/pii/S0040162524002786">
                      https://www.sciencedirect.com/science/article/pii/S0040162524002786
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="4">
                <li>
                  <p>
                    Monisha Meher, Tumpa Dey, Tulika Sharma and Pavan Kr.
                    Balivada, Perception of Organizational Justice: The role of
                    dehumanization, abusive supervision and Incivility, Academy
                    of Marketing Studies Journal, Published : 20 Aug 2024.{" "}
                    <a href="https://www.abacademies.org/articles/perception-of-organizational-justice-the-role-of-dehumanization-abusive-supervision-and-incivility.pdf">
                      https://www.abacademies.org/articles/perception-of-organizational-justice-the-role-of-dehumanization-abusive-supervision-and-incivility.pdf
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="5">
                <li>
                  <p>
                    Dixit, K., Manna, R., &amp; Singh, A. (2024). The effects of
                    CEO duality, board size, and informal social networks on
                    sustainable innovation and firm performance. Corporate
                    Ownership &amp; Control, 21(2), 165–177. Published: 4 June
                    2024{" "}
                    <a href="https://doi.org/10.22495/cocv21i2art13">
                      https://doi.org/10.22495/cocv21i2art13
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="6">
                <li>
                  <p>
                    Ghosh, I., Chaudhuri, T.D., Sarkar, S., Mukhopadhyay, S. and
                    Roy, A. (2025), "Macroeconomic shocks, market uncertainty
                    and speculative bubbles: a decomposition-based predictive
                    model of Indian stock markets", China Finance Review
                    International, Vol. 15 No. 1, pp. 166-201, Published: 31 May
                    2024{" "}
                    <a href="https://doi.org/10.1108/CFRI-09-2023-0237">
                      https://doi.org/10.1108/CFRI-09-2023-0237
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="7">
                <li>
                  <p>
                    Shaon Sen, Influence of External and Situational Stimulus
                    Factors on Impulse Buying : A Stimulus-Organism- Response
                    Framework, Indian Journal of Marketing, Published: 15 May
                    2024.{" "}
                    <a href="https://indianjournalofmarketing.com/index.php/ijom/article/view/173830">
                      https://indianjournalofmarketing.com/index.php/ijom/article/view/173830
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="8">
                <li>
                  <p>
                    Deshmukh, S., Kumar Balivada, P., Tyagi, V., Singh, I.,
                    Kumar Garg, K., &amp; Gupta, S. (2024). Customer journey and
                    experience in the banking sector: a comprehensive analysis
                    and future scope. Academy of Marketing Studies Journal,
                    28(S4), 1-9, Published: 4 Apr 2024{" "}
                    <a href="https://www.abacademies.org/articles/influence-of-human-resource-management-practices-on-employee-job-satisfaction-with-special-reference-to-small-scale-manufacturing-16569.html">
                      https://www.abacademies.org/articles/influence-of-human-resource-management-practices-on-employee-job-satisfaction-with-special-reference-to-small-scale-manufacturing-16569.html
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="9">
                <li>
                  <p>
                    Nayak, N., Pant, P., Sarmah, S.P. and Tulshan, R. (2024),
                    "Development of in-country logistics performance index for
                    emerging economies: a case of Indian states", International
                    Journal of Productivity and Performance Management, Vol. 73
                    No. 9, pp. 2926-2950, Published: 28 Mar 2024{" "}
                    <a href="https://doi.org/10.1108/IJPPM-03-2023-0122">
                      https://doi.org/10.1108/IJPPM-03-2023-0122
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="10">
                <li>
                  <p>
                    Indranil Ghosh, Esteban Alfaro-Cortés, Matías Gámez, Noelia
                    García-Rubio, Reflections of public perception of
                    Russia-Ukraine conflict and Metaverse on the financial
                    outlook of Metaverse coins: Fresh evidence from Reddit
                    sentiment analysis, International Review of Financial
                    Analysis, Volume 93, 2024, 103215, Published 15 Mar 2024{" "}
                    <a href="https://www.sciencedirect.com/science/article/pii/S1057521924001479">
                      https://www.sciencedirect.com/science/article/pii/S1057521924001479
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="11">
                <li>
                  <p>
                    Rastogi, Nikhil and Satish Kumar. “Does bankruptcy law
                    affect the relation between leverage and firm performance?”
                    Indian Growth and Development Review (2024), Published: 14
                    Mar 2024{" "}
                    <a href="https://www.emerald.com/insight/content/doi/10.1108/IGDR-10-2022-0122/full/html">
                      https://www.emerald.com/insight/content/doi/10.1108/IGDR-10-2022-0122/full/html
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="12">
                <li>
                  <p>
                    Sourabh Bhattacharya, Kannan Govindan, Surajit Ghosh
                    Dastidar, Preeti Sharma, Applications of artificial
                    intelligence in closed-loop supply chains: Systematic
                    literature review and future research agenda, Transportation
                    Research Part E: Logistics and Transportation Review, Volume
                    184, 2024, 103455, Published: 27 Feb 2024{" "}
                    <a href="https://www.sciencedirect.com/science/article/pii/S1366554524000450?via%3Dihub">
                      https://www.sciencedirect.com/science/article/pii/S1366554524000450?via%3Dihub
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="13">
                <li>
                  <p>
                    Chejarla, K.C., Vaidya, O.S, A hybrid multi-criteria
                    decision-making approach for longitudinal data. OPSEARCH 61,
                    1013–1060 (2024), Published: 4 Feb 2024{" "}
                    <a href="https://doi.org/10.1007/s12597-023-00736-y">
                      https://doi.org/10.1007/s12597-023-00736-y
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="14">
                <li>
                  <p>
                    Krishna Kumar Dadsena, Pushpesh Pant, Sanjoy Kumar Paul,
                    Saurabh Pratap, Overcoming strategies for supply chain
                    digitization barriers: Implications for sustainable
                    development goals, Business Strategy and the Environment,
                    Volume 33, Issue 5 July 2024 Pages 3887-391,{" "}
                    <a href="https://onlinelibrary.wiley.com/doi/10.1002/bse.3681">
                      https://onlinelibrary.wiley.com/doi/10.1002/bse.3681
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="15">
                <li>
                  <p>
                    Indranil Ghosh, Rabin K. Jana, Roubaud David, Oksana
                    Grebinevych, Peter Wanke, Yong Tan, Modelling financial
                    stress during the COVID-19 pandemic: Prediction and deeper
                    insights, International Review of Economics &amp; Finance,
                    Volume 91, 2024, Pages 680-698, Published: 18 Jan 2024{" "}
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S1059056024000376">
                      https://www.sciencedirect.com/science/article/abs/pii/S1059056024000376
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="16">
                <li>
                  <p>
                    Ghosh, I., Jana, R.K. and Sharma, D.K. (2024), "A novel
                    granular decomposition based predictive modeling framework
                    for cryptocurrencies' prices forecasting", China Finance
                    Review International, Vol. 14 No. 4, pp. 759-790. Published:
                    8 Jan 2024{" "}
                    <a href="https://doi.org/10.1108/CFRI-03-2023-0072">
                      https://doi.org/10.1108/CFRI-03-2023-0072
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="17">
                <li>
                  <p>
                    Pant, Pushpesh and Krantiraditya Dhalmahapatra. “Blockchain
                    Based Supply Chain Financing: Research Trends and Future
                    Research Directions.” International Journal of Business
                    Information Systems (2024):{" "}
                    <a href="DOI:10.1504/ijbis.2024.10065273">
                      DOI:10.1504/ijbis.2024.10065273
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="18">
                <li>
                  <p>
                    Dr. Aniruddha DAS &amp; Dr. Amith Vikram MEGARAVALLI &amp;
                    Dr. A. Sarath BABU, 2023. "What drives the oversubscription
                    of IPO’s: evidence from Indian Stock Market," Theoretical
                    and Applied Economics, vol. 0(4(637), W), pages 47-62,
                    Published: Jan 2024{" "}
                    <a href="https://www.ectap.ro/what-drives-the-oversubscription-of-iposevidence-from-indian-stock-market-dr-aniruddha-das_dr-amith-vikram-megaravalli_dr-a-sarath-babu/a1699/">
                      https://www.ectap.ro/what-drives-the-oversubscription-of-iposevidence-from-indian-stock-market-dr-aniruddha-das_dr-amith-vikram-megaravalli_dr-a-sarath-babu/a1699/
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="19">
                <li>
                  <p>
                    Indranil Ghosh, Rabin K. Jana, Clean energy stock price
                    forecasting and response to macroeconomic variables: A novel
                    framework using Facebook's Prophet, NeuralProphet and
                    explainable AI, Technological Forecasting and Social Change,
                    Volume 200, 2024, 123148, Published: 28 Dec 2023{" "}
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0040162523008338">
                      https://www.sciencedirect.com/science/article/abs/pii/S0040162523008338
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="20">
                <li>
                  <p>
                    Indranil Ghosh, Esteban Alfaro-Cortés, Matías Gámez, Noelia
                    García-Rubio, Modeling hydro, nuclear, and renewable
                    electricity generation in India: An atom search
                    optimization-based EEMD-DBSCAN framework and explainable AI,
                    Heliyon, Volume 10, Issue 1, 2024, e23434, Published: 10 Dec
                    2023.{" "}
                    <a href="https://www.sciencedirect.com/science/article/pii/S2405844023106426?via%3Dihub">
                      https://www.sciencedirect.com/science/article/pii/S2405844023106426?via%3Dihub
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="21">
                <li>
                  <p>
                    Ramalingam, Mahesh, and Manoj Das. 2023. “From Clicks to
                    Cuisine: Unveiling the Impact of Attitude and Positive Word
                    of Mouth in Food Delivery App Usage.” Journal of
                    International Food &amp; Agribusiness Marketing 37 (1):
                    116–46, Published: 23 Nov 2023{" "}
                    <a href="doi:10.1080/08974438.2023.2284922">
                      doi:10.1080/08974438.2023.2284922
                    </a>
                    .
                  </p>
                </li>
              </ol>
              <ol start="22">
                <li>
                  <p>
                    Mohammed, Neethu and Issac, Abraham Cyril (2023) "Are You So
                    Good That They Cannot Ignore You? Effect of Coworker Support
                    on Knowledge Sharing Through an Affective Events Theory
                    Perspective," American Business Review: Vol. 26: No. 2,
                    Article 1, Published: 14 Nov 2023{" "}
                    <a href="DOI: 10.37625/abr.26.2.269-287">
                      DOI: 10.37625/abr.26.2.269-287
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="23">
                <li>
                  <p>
                    Pant, P., Dutta, S. and Sarmah, S.P. (2023), "Structural
                    supply chain complexity index and construct validity: a
                    data-driven empirical approach", International Journal of
                    Emerging Markets, Published: 6 Nov 2023.{" "}
                    <a href="https://doi.org/10.1108/IJOEM-01-2023-0086">
                      https://doi.org/10.1108/IJOEM-01-2023-0086
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="24">
                <li>
                  <p>
                    Panda, D.K., Ramalingam, M. Managerial networking behavior
                    for grant acquisition in nonprofits: an application of the
                    behavioral reasoning theory (BRT). Int Rev Public Nonprofit
                    Mark 21, 371–393 (2024), Published: 20 Oct 2023,{" "}
                    <a href="https://doi.org/10.1007/s12208-023-00387-1">
                      https://doi.org/10.1007/s12208-023-00387-1
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="25">
                <li>
                  <p>
                    Panda, D., Bhardwaj, R., Sharma, T. et al. Small and Medium
                    Enterprises (SMEs) Navigating Through the Covid Pandemic in
                    India: an Examination Through the Systems Approach. Syst
                    Pract Action Res 37, 483–498 (2024), Published: 9 Oct 2023,{" "}
                    <a href="https://doi.org/10.1007/s11213-023-09664-w">
                      https://doi.org/10.1007/s11213-023-09664-w
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="26">
                <li>
                  <p>
                    K. Jana, Rabin, Indranil Ghosh, and P. N. Ram Kumar. 2023.
                    “An Explainable AI-Enabled Granular Ensemble Machine
                    Learning Framework to Demystify Fertilizer Price Movements.”
                    Journal of the Operational Research Society 75 (8): 1569–86,
                    Published: 27 Sep 2023
                  </p>
                </li>
              </ol>
              <ol start="27">
                <li>
                  <p>
                    Riya Sugla and Shaon Sen, Influence of Social and Economic
                    Factors on Impulse Buying: A Research Framework, BIMTECH
                    Business Perspectives, 4(1) 43–56, 2023.{" "}
                    <a href="https://bsp.bimtech.ac.in/pages/table-of-contents/fulltext/?id=5&amp;title=Influence+of+Social+and+Economic+Factors+on+Impulse+Buying:+A+Research+Framework">
                      https://bsp.bimtech.ac.in/pages/table-of-contents/fulltext/?id=5&amp;title=Influence+of+Social+and+Economic+Factors+on+Impulse+Buying:+A+Research+Framework
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="28">
                <li>
                  <p>
                    Pant, P., Sarmah, S. P., &amp; Ramesh, K. T. (2023). Supply
                    Base Risk and Buying Firm Performance: An Empirical Evidence
                    from Emerging Economy. Global Business Review, Published: 24
                    Jul 2023.{" "}
                    <a href="https://doi.org/10.1177/09721509231181190">
                      https://doi.org/10.1177/09721509231181190
                    </a>
                  </p>
                </li>
              </ol>
              <h5>Case Studies: 2023-2024</h5>
              <ol>
                <li>
                  <p>
                    Surajit Ghosh Dastidar, Mayora: Positioning Kopiko, Case
                    Centre, Published; 24 Jun 2024.{" "}
                    <a href="https://www.thecasecentre.org/products/view?id=199215">
                      https://www.thecasecentre.org/products/view?id=199215
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="2">
                <li>
                  <p>
                    Romina Mathew, Layoffs at Better.com: For Better or for
                    Worse, Case Centre, Published: 11 Apr 2024.{" "}
                    <a href="https://www.thecasecentre.org/products/view?id=197489">
                      https://www.thecasecentre.org/products/view?id=197489
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="3">
                <li>
                  <p>
                    Kalyana C Chejarla, CenturyPly Laminates: Redesigning the
                    Supply Chain, Ivey Publishing, Published: 11 Apr 2024.{" "}
                    <a href="https://www.iveypublishing.ca/s/product/centuryply-laminates-redesigning-the-supply-chain/01tOF000003OjqHYAS">
                      https://www.iveypublishing.ca/s/product/centuryply-laminates-redesigning-the-supply-chain/01tOF000003OjqHYAS
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="4">
                <li>
                  <p>
                    Sourabh Bhattacharya, Royal Home-Food: Handling a Delivery
                    Challenge (A), Case Centre, Published: 27 Mar 2024.{" "}
                    <a href="https://www.thecasecentre.org/products/view?id=197238">
                      https://www.thecasecentre.org/products/view?id=197238
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="5">
                <li>
                  <p>
                    Sourabh Bhattacharya, Royal Home-Food: Handling a Delivery
                    Challenge (B), Case Centre, Published: 27 Mar 2024.{" "}
                    <a href="https://www.thecasecentre.org/products/view?id=197240">
                      https://www.thecasecentre.org/products/view?id=197240
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="6">
                <li>
                  <p>
                    Nitin Gupta, Tata Motors: Challenges for the Electric
                    Vehicle Market Leader, Ivey Publishing, Published: 12 Jan
                    2024.{" "}
                    <a href="https://www.iveypublishing.ca/s/product/tata-motors-challenges-for-the-electric-vehicle-market-leader/01tOF000002MnwzYAC">
                      https://www.iveypublishing.ca/s/product/tata-motors-challenges-for-the-electric-vehicle-market-leader/01tOF000002MnwzYAC
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="7">
                <li>
                  <p>
                    Nitin Gupta, Tata’s Air India: Brand Repositioning and
                    Revitalization Challenges, Ivey Publishing, Published: 8 Jan
                    2024.{" "}
                    <a href="https://www.iveypublishing.ca/s/product/tatas-air-india-brand-repositioning-and-revitalization-challenges/01tOF000002Gya9YAC">
                      https://www.iveypublishing.ca/s/product/tatas-air-india-brand-repositioning-and-revitalization-challenges/01tOF000002Gya9YAC
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="8">
                <li>
                  <p>
                    Surajit Ghosh Dastidar, Shearling: tackling competition,
                    Emerald Emerging Case, Published: 8 Jan 2024.{" "}
                    <a href="https://www.emerald.com/insight/content/doi/10.1108/EEMCS-11-2022-0408/full/html">
                      https://www.emerald.com/insight/content/doi/10.1108/EEMCS-11-2022-0408/full/html
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="9">
                <li>
                  <p>
                    Surajit Ghosh Dastidar, Bounce: Competing in Bike Rental
                    Market, Emerald Emerging Case, Published: 1 Nov 2023.{" "}
                    <a href="https://doi.org/10.1108/EEMCS-11-2022-0407">
                      https://doi.org/10.1108/EEMCS-11-2022-0407
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="10">
                <li>
                  <p>
                    Nikhil Rastogi, Piramal Enterprises Ltd: Unlocking Value
                    through Demerger, Case Centre, Published: 4 Sep 2023.{" "}
                    <a href="https://www.thecasecentre.org/products/view?id=193012">
                      https://www.thecasecentre.org/products/view?id=193012
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="11">
                <li>
                  <p>
                    Kalyana C Chejarla, ElasticRun: Pathways to Growth, Ivey
                    Publishing, Published 2 August-2023.{" "}
                    <a href="https://www.iveypublishing.ca/s/product/elasticrun-pathways-to-growth/01t5c00000CBPwNAAX">
                      https://www.iveypublishing.ca/s/product/elasticrun-pat-hways-to-growth/01t5c00000CBPwNAAX
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="12">
                <li>
                  <p>
                    Pavan Kumar Balivada, Tulika Sharma, KMR Laxmi Foundation:
                    Strategic CSR Wing of KMR Group, Case Centre, Published: 7
                    July 2023.{" "}
                    <a href="https://www.thecasecentre.org/products/view?id=191366">
                      https://www.thecasecentre.org/products/view?id=191366
                    </a>
                  </p>
                </li>
              </ol>

              <h5>2022-2023</h5>
              <ol>
                <li>
                  <p>
                    Tamal Dutta Chaudhari &amp; Indranil Ghosh, “Financial
                    Sector Development and Retail Sector Growth- Association,
                    Spillover and Causality during Pre Covid and Coved Regmies”
                    FACTA UNIVERSITATIS Series: Economics and Organization, Vol.
                    19, No 4, 2022, pp. 229 - 251{" "}
                    <a href="https://doi.org/10.22190/FUEO220110017C">
                      https://doi.org/10.22190/FUEO220110017C
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="2">
                <li>
                  <p>
                    Rabin K Jana &amp; Indranil Ghosh, (2022), “Time-varying
                    relationship between geopolitical uncertainty and
                    agricultural investment” Finance Research Letters, available
                    online 20 Nov 2021{" "}
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S1544612322006973">
                      https://www.sciencedirect.com/science/article/abs/pii/S1544612322006973
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="3">
                <li>
                  <p>
                    Indranil Ghosh, Esteban Alfaro-Cortes, Matiz Gamez &amp;
                    Noelia Garfa (2022), “Do travel uncertainty and invasion
                    rhetoric spur Metaverse financial asset? Gauging the role of
                    media influence” Finance Research Letters, version of
                    record, 26 Oct 2022, Vol 51 January 2023{" "}
                    <a href="https://doi.org/10.1016/j.frl.2022.103434">
                      https://doi.org/10.1016/j.frl.2022.103434
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="4">
                <li>
                  <p>
                    Parvesh Kumar Padamwar, Vinay Kumar Kalakbandi &amp; Jagrook
                    Dawra (2022), Deliberation does not make attraction effect
                    disappear: The role of induced cognitive reflection. Journal
                    of Business Research Version of Record 12 October 2022{" "}
                    <a href="https://doi.org/10.1016/j.jbusres.2022.113335">
                      https://doi.org/10.1016/j.jbusres.2022.113335
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="5">
                <li>
                  <p>
                    Sourabh Bhattacharya &amp; Vinay Kumar Kalakbandi (2022),
                    Barriers to Circular Supply Chain: the case of unorganized
                    tire retreading in India. International Journal of Logistic
                    Management{" "}
                    <a href="https://doi.org/10.1108/IJLM-04-2022-0162">
                      https://doi.org/10.1108/IJLM-04-2022-0162
                    </a>{" "}
                    Nov 3 2022
                  </p>
                </li>
              </ol>
              <ol start="6">
                <li>
                  <p>
                    Kalyana C Chejarla, &amp; Omkarprasad S Vaidya (2022), “Ease
                    of Doing Business: Performance comparison of G20 countries
                    using Grey MCDM” International Journal of Information
                    Technology &amp; Decision Making{" "}
                    <a href="https://doi.org/10.1142/S021962202250078X">
                      https://doi.org/10.1142/S021962202250078X
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="7">
                <li>
                  <p>
                    Indranil Ghosh, Manas K Sanyal &amp; Dragon Pamucar (2022),
                    “Modelling Predictability of Airbnb Rental Prices in Post
                    Covid-19 Regime: An Integrated Framework of Transfer
                    Learning, PSO based Ensemble Machine Learning and
                    Explainable AI” International Journal of Information
                    Technology and Decision Making Online Published 24 September
                    2022{" "}
                    <a href="https://doi.org/10.1142/S0219622022500602">
                      https://doi.org/10.1142/S0219622022500602
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="8">
                <li>
                  <p>
                    Manoj Das, &amp; Mahesh Ramalingam, (2022), Why do you look
                    familiar? Exploring the role of Employee-Customer
                    identification in adopting the service offering,
                    International Journal of Bank Marketing, article published
                    date 8 Sept 2022{" "}
                    <a href="https://doi.org/10.1108/IJBM-01-2022-0049">
                      https://doi.org/10.1108/IJBM-01-2022-0049
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="9">
                <li>
                  <p>
                    Pradeep Rathore, Esha Saha, Sayan Chakraborty, Aviral Kumar
                    Tiwari, (2022), Assessing the impact of consumer perceived
                    CSR on consumer attitude and purchase behaviour in retail
                    segment: a stakeholder theory perspective Society and
                    Business Review{" "}
                    <a href="https://www.emerald.com/insight/content/doi/10.1108/SBR-10-2021-0207/full/html">
                      https://www.emerald.com/insight/content/doi/10.1108/SBR-10-2021-0207/full/html
                    </a>{" "}
                    18 August 2022
                  </p>
                </li>
              </ol>
              <ol start="10">
                <li>
                  <p>
                    Esha Saha &amp; Pradeep Rathore (2022), Discovering hidden
                    patterns among medicines prescribed to patients using
                    Association Rule Mining Technique. International Journal of
                    Healthcare Management.{" "}
                    <a href="https://www.tandfonline.com/eprint/YHJ9WWVD4NWTYMSCEKEY/full?target=10.1080/20479700.2022.2099335">
                      https://www.tandfonline.com/eprint/YHJ9WWVD4NWTYMSCEKEY/full?target=10.1080/20479700.2022.2099335
                    </a>{" "}
                    Publication on 14 July 2022
                  </p>
                </li>
              </ol>
              <ol start="11">
                <li>
                  <p>
                    Indranil Ghosh, &amp; Tamal Dutta Chaudhuri (2022),
                    “Integrating Navier-Stokes Equation and Neoteric
                    iForest-BorutaStap- Facebook's prophet Framework for Stock
                    Market Prediction: An Application in Indian Context Expert
                    Systems with Applications{" "}
                    <a href="https://doi.org/10.1016/j.eswa.2022.118391">
                      https://doi.org/10.1016/j.eswa.2022.118391
                    </a>{" "}
                    Version of Record 12 August 2022
                  </p>
                </li>
              </ol>
              <h5>Cases: 2022-2023</h5>
              <ol>
                <li>
                  <p>
                    Surajit Ghosh Dastidar, “Tazzo Bikes: Tackling Competition”
                    Emerald Emerging Market Case Studies Vol 12 No 4{" "}
                    <a href="https://doi.org/10.1108/EEMCS-06-2021-0208">
                      https://doi.org/10.1108/EEMCS-06-2021-0208
                    </a>
                  </p>
                </li>
              </ol>
              <ol start="2">
                <li>
                  <p>
                    Sourabh Bhattacharya &amp; Kalyana Chejarla (2022), “The
                    School of Management: Handling Admission Leakage.” “IVEY
                  </p>
                </li>
              </ol>
              <ol start="3">
                <li>
                  <p>
                    Vinay Kumar Kalakbandi, &amp; Sarath Babu, “Pikku Kidswear:
                    Developing an ABC Model” The Case Centre. Ref No 122-0115-1
                    &amp; 122-0115-8
                  </p>
                </li>
              </ol>
              <ol start="4">
                <li>
                  <p>
                    Chakrapani Chaturvedula (2022), Titan Company Limited:
                    Hedging Loss The Case Centre Reference No 122- 0110-1 &amp;
                    122-0110-8
                  </p>
                </li>
              </ol>
              <ol start="5">
                <li>
                  <p>
                    Nikhil Rastogi (2022), Lackey Capital: Evaluation of Term
                    Sheet The Case Centre Reference No 122-0108-1 &amp;
                    122-0108-8
                  </p>
                </li>
              </ol>
              <ol start="6">
                <li>
                  <p>
                    Nitin Gupta (2022), ZIPAIR’s Peculiar Brand Elements Issue.
                    The Case Centre Reference No 522-0080-1 &amp; 522-0080-8
                  </p>
                </li>
              </ol>
              <ol start="7">
                <li>
                  <p>
                    Vinay Kumar Kalakbandi, Sneha Kadam, Mohit Jetti,
                    “Nukkad-the teaf’e” The Case Centre. Ref No 622-003-1 &amp;
                    622-003-7 26
                  </p>
                </li>
              </ol>
              <ol start="8">
                <li>
                  <p>
                    Surajit Ghosh Dastidar, Forecasting Railways Passenger
                    Volume” The Case Centre Reference no: 622-0074-1 and
                    622-0027-8
                  </p>
                </li>
              </ol>
              <ol start="9">
                <li>
                  <p>
                    Surajit Ghosh Dastidar &amp; Rajiv Kumra, Vaccine on Wheel
                    Service Excellence for Covid 19 Vaccinations” IVEY
                    Publishing. W27265 &amp;W27266
                  </p>
                </li>
              </ol>

              {/* <h5>2021-2022</h5>
              <ol>
                <li>
                  <p>
                    Debojyoti Das, Anupam Dutta, Rabin K Jana (2022) &amp;
                    Indranil Ghosh, The asymmetric impact of oil price
                    uncertainty on emerging market financial stress: An quantile
                    regression approach. International Journal of Finance &amp;
                    Economics. Publication on line available 6 June 2022 DOI:
                    10.1002/ijfe.2651
                  </p>
                </li>
                <li>
                  <p>
                    Chakrapani Chaturvedula, and Soumya Malhotra lingam (2022),
                    Delisting and its impact on Shareholders wealth: Evidence
                    from India. International Journal of Management. Publication
                    Vol 204 April 2022 DOI 10.17605/OSF.IO/S8Y4K
                  </p>
                </li>
                <li>
                  <p>
                    Manoj Das and Mahesh Ramalingam (2022), What drives product
                    involvement and satisfaction with OFDs amid COVID 19.
                    Journal of Retailing and Consumer Services. Publication on
                    line avail able 20 June 2022
                    https://doi.org/10.1016/j.jretconser.2022.103063
                  </p>
                </li>
                <li>
                  <p>
                    Rabin K Jana, Indranil Ghosh, Fredj Jawadi, Gazi Salah
                    Uddin,&amp; Ricardo M. Sousa (2022), Covid-19 news and the
                    US equity market interactions: An inspection through
                    econometric and machine learning lens. Annals of Operations
                    Research Published online June 8 2022
                    https://doi.org/10.1007/s10479-022-04744-x
                  </p>
                </li>
                <li>
                  <p>
                    Indranil Ghosh, Rabin K Jana,Paritosh Pramanik (2022), New
                    Business capacity of developed, developing and least
                    developing economies: inspection through state-of-the
                    art-fuzzy clustering and PSO-GBR frameworks. Benchmarking:
                    An International Journal Publication date June 7 2022
                    https://doi.org/10.1108/BIJ-09-2021-0528
                  </p>
                </li>
                <li>
                  <p>
                    Esha Saha, Pradeep Rathore, Ratri Parida, &amp; Nripendra P
                    Rana (2022), The interplay of emerging technologies in
                    pharmaceutical supply chain performance: An empirical
                    investigation for the rise of Pharma4.0. Technological
                    Forecasting&amp; Social Change 181 Available online 3 June
                    2022 https://doi.org/10.1016/j.techfore.2022.121768
                  </p>
                </li>
                <li>
                  <p>
                    Indranil Ghosh,Tamal Datta Chaudhuri, Esteban Affaro-Cortes,
                    Matias Gamez &amp; Noelia Garcia (2022), A hybrid approach
                    to forecasting future prices with simultaneous consideration
                    of optimality in ensemble feature selection and advanced
                    artificial intelligence. Technological Forecasting and
                    Social Change 181 Available online 3 June 2022
                    https://doi.org/10.1016/j.techfore.2022.121757
                  </p>
                </li>
                <li>
                  <p>
                    Saikat Banerjee, Amith Karna &amp; Sunil Sharma (2022),
                    “Imprinting effects of exposure to the Indian independence
                    movement on export intensity of firms Journal of Business
                    Research. Volume 149 October 2022
                    https://doi.org/10.1016/j.jbusres.2022.05.033
                  </p>
                </li>
                <li>
                  <p>
                    Manoj Das (2022), “It’s too Much to handle : Effect of
                    Advertisement Overload and its Impact on Satisfaction”
                    Empirical Economic Letters, Vol 20 Issue 4 April
                    2022http://www.eel.my100megs.com/volume-21-number-4.htm
                  </p>
                </li>
                <li>
                  <p>
                    Rabin k Jana., Indranil Ghosh., &amp; Vijay Goyal (2022),
                    Spillover Nexus of Financial Stress during Black Swan
                    Events. Finance Research Letters Journal Available online 19
                    April 2022,
                    https://www.sciencedirect.com/science/article/abs/pii/S154461232200174X
                  </p>
                </li>
                <li>
                  <p>
                    Preeti Sharma, Block Chain Adoption: Global and Indian
                    Scenario Journal of Emerging Technologies and Innovative
                    Research, Volume 9 Issue 4 April 2022
                  </p>
                </li>
                <li>
                  <p>
                    Shaon Sen., A Short Communication : Monograph on Impulse
                    Buying During the COVID-19 Pandemic. Indian Journal Of
                    Marketing (Volume 52 No 4 April 2022) DOI:
                    10.17010/ijom/2022/v52/i4/169110
                  </p>
                </li>
                <li>
                  <p>
                    Shabnam Priyadarshini., It’s nice to be nice at work: role
                    of interpersonal skills for career success. Strategic HR
                    Review Publication date 7 April 2022
                    https://doi.org/10.1108/SHR-03-2022-0013
                  </p>
                </li>
                <li>
                  <p>
                    Ata Assaf., Avishek Bhandari., Husin Charif., &amp; Ender
                    Demir., Multivariate Long memory structure in the
                    cryptocurrency markets: The impact of Covid 19.
                    International Review of Financial Analysis. Available online
                    2 April 2022 https://doi.org/10.1016/j.irfa.2022.102132
                  </p>
                </li>
                <li>
                  <p>
                    Shabnam Priyadarshini., People Analytics: Data-Driven
                    Approach to Manage People at Work. International Journal of
                    Novel Research and Development’ Vol 7 issue 3 pp 603-606
                    March 2022
                  </p>
                </li>
                <li>
                  <p>
                    Debadutta K Panda., Sriharsha Reddy., &amp; Sridhar
                    Vaithianathan., Does the cashless transaction work? An
                    analysis of policy challenges in an emerging economy.
                    Digital Policy, Regulation and Governance ’Publication date
                    14 March 2022 https://doi.org/10.1108/DPRG-01-2021-0007
                  </p>
                </li>
                <li>
                  <p>
                    Manoj Das., Look at me: Exploring Phubbing in Organizational
                    Contexts-Implications for Practise. International Journal of
                    Research and Analytical Review, Volume.9, Issue 1, Page No
                    pp.22-25, March 2022
                    https://www.ijrar.org/papers/IJRAR22A2301.pdf
                  </p>
                </li>
                <li>
                  <p>
                    Rabin k Jana, Indranil Ghosh, &amp; Martin W Wallin (2022),
                    “Taming energy and electronic waste generation in bitcoin
                    mining: Insights from Facebook prophet and deep neural
                    network ” Technological forecasting and social Change.
                    Volume 178, May 2022
                    https://doi.org/10.1016/j.techfore.2022.121584
                  </p>
                </li>
                <li>
                  <p>
                    Devi Prasad Ghosh, “E-Service Experience as the Antecedent
                    of E-Trust &amp; E-Loyalty: An integration of Behavioral and
                    Technology Perspective” International Journal of Mechanical
                    Engineering Vol 7 No 2 February 2022{" "}
                    <Link href="https://kalaharijournals.com/ijme-vol7-issue-feb2022.php">
                      https://kalaharijournals.com/ijme-vol7-issue-feb2022.php
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    Tumpa Dey “Does Organizational Citizenship differ with
                    differences in Gender: A Study of Government Sector
                    Employees” Global Journal of Business Management Vol 15 No 2
                    December 2021
                  </p>
                </li>
                <li>
                  <p>
                    Anoop S Kumar &amp; Steven Raj Padakandla,(2021), “Testing
                    the safe-haven properties of Gold and Bitcoin in the
                    backdrop of Covid-19: A wavelet quantile correlation
                    approach” Finance Research Letters Available from Jan 22{" "}
                    <Link href="https://doi.org/10.1016/j.frl.2022.102707">
                      https://doi.org/10.1016/j.frl.2022.102707
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    Devi Prasad Ghosh, “Barriers and Facilitators of B2B Degree
                    of Digital Use in Travel Services Supply-Chain: An
                    integration of Operational and Behavioral perspective”
                    International Journal of Operations and Quantitative
                    Management Vol 27 No 4 December 2021
                    Doi.org.10.46970/2021.27.4.5pp383-398
                  </p>
                </li>
                <li>
                  <p>
                    Amit Shankar, Rambalak Yadav, Abhishek Behl, &amp; Manish
                    Gupta (2021), “How does dataveillance drive consumer online
                    payment resistance” Journal of Consumer marketing
                    Publication date28 December 2021
                    https://doi.org/10.1108/JCM-03-2021-4555
                  </p>
                </li>
                <li>
                  <p>
                    Ritesh Kumar Dubey, Sarath Babu, Rajneesh Ranjan Jha &amp;
                    Urvashi Varma “Algorithmic Trading Efficiency and its Impact
                    on Market-Quality” Asia-Pac Financ Markets” Publication date
                    21 October 2021 https://doi.org/10.1007/s10690-021-09353-5
                  </p>
                </li>
                <li>
                  <p>
                    Debadutta Kumar Panda (2021), “The green identity and green
                    strategy: an interplay” Technology Analysis and Strategic
                    Management. Published online 3 Dec 2021{" "}
                    <Link href="https://doi.org/10.1080/09537325.2021.2009796">
                      https://doi.org/10.1080/09537325.2021.2009796.{" "}
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    Deepak Sangroya, Rambalak Yadav, &amp; Yatish Joshi (2021),
                    “Does gamified interaction strong consumer-brand connection?
                    A study of mobile applications” Australasian Journal of
                    Information Systems Vol 25 November 2021 doi:
                    https://doi.org/10.3127/ajis.v25i0.3105
                  </p>
                </li>
                <li>
                  <p>
                    Anees Ahmad, Swapnarag Swain, Pankaj Kuamr Singh, Rambalak
                    Yadav &amp; Gyan Prakash (2021), “Linking brand personality
                    to brand equity: measuring the role of consumer-brand
                    relationship” Journal of Indian Business research
                    Publication date16 Nov 2021 doi/10.1108/JIBR-01-2021-0017
                  </p>
                </li>
                <li>
                  <p>
                    Banerjee S,” The dark shadow of corruption on new product
                    development", Benchmarking: An International Journal{" "}
                    <Link href="https://doi.org/10.1108/BIJ-04-2021-0234">
                      doi.org/10.1108/BIJ-04-2021-0234
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    Gunjan Malhotra &amp; Mahesh Ramalingam“Does Impact of
                    Campaign and Consumer Guilt help in exploring the role of
                    National Identity and Purchase Decisions of Consumers”
                    Journal of Retailing and Consumer Services Available online
                    30 November 2021
                    https://doi.org/10.1016/j.jretconser.2021.102839
                  </p>
                </li>
                <li>
                  <p>
                    Kalyana Chejarla, Omkarprasad S. Vaidya &amp; Sushil Kumar “
                    MCDM application in logistics performance evaluation: A
                    literature review” Journal of Multi-Criteria Decision
                    Analysis pp 1-24 https://doi.org/10.1002/mcda.1774
                  </p>
                </li>
                <li>
                  <p>
                    Pradeep kumar Mohanty, Archana Patro, R.M. Harindranatha, N.
                    Senthil Kumar, Debadutta Kumar Panda &amp; Ritesh Dubey,
                    “Perceived government initiatives: Scale development,
                    validation and impact on consumers' pro-environmental
                    behaviour{" "}
                    <Link href="https://www.sciencedirect.com/science/journal/03014215">
                      Energy Policy
                    </Link>{" "}
                    Volume 158, November 2021, 112534
                    doi.org/10.1016/j.enpol.2021.112534
                  </p>
                </li>
                <li>
                  <p>
                    Neetu Mohammed &amp; TJ Kamalanabhan,“Tacit knowledge
                    sharing and creative performance: A transformative learning
                    perspective”, Development and Learning Organization,
                    Publication date 24 October 2021
                    doi/10.1108/DLO-09-2021-0161
                  </p>
                </li>
                <li>
                  <p>
                    Avishek Bhandari, Rajendra Paramanik,&amp; Bandi Kamaiah,
                    “Financial Cycle, Business Cycle and Policy Uncertainty in
                    India: An Empirical Investigation, Bulletin of Economic
                    Research https://doi.org/10.1111/boer.12320
                  </p>
                </li>
                <li>
                  <p>
                    Steven Raj Pedakandla &amp; Avishek Bhandari (2021), “Does
                    climate impact vary across time horizons? A time–frequency
                    analysis of climate-crop yields in India “Stochastic
                    Environmental Research and Risk Assessment Published 12 Sept
                    2021 doi.org/10.1007/s00477-021-02088-9
                  </p>
                </li>
                <li>
                  <p>
                    Yatish Joshi, Rambalak Yadav, &amp; Amith Shankar (2021),
                    “The interplay of emotional value, trend affinity and past
                    practices in sustainable consumption: an application of
                    theory of reciprocal determinism “Journal of Strategic
                    Marketing. Published online 18 August 2021{" "}
                    <Link href="https://doi.org/10.1080/0965254X.2021.1914133">
                      https://doi.org/10.1080/0965254X.2021.1914133
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    Rabin k Jana, Indranil Ghosh, Debajyoti Das,&amp; Anupam
                    Dutta (2021), “Determinants of electronic waste generation
                    in BitcoinS network: Evidence from the machine learning
                    approach” Technology forecasting and social Change.{" "}
                    <Link href="about:blank">Volume 173</Link>, December 2021,
                    121101{" "}
                    <Link href="https://doi.org/10.1016/j.techfore.2021.121101s">
                      https://doi.org/10.1016/j.techfore.2021.121101s
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    Shalini Talwar, Puneet Kaur. Rambalak Yadav, Rajat Sharma
                    &amp; Amandeep Dhir (2021), “Food waste and
                    out-of-home-dining: antecedents and consequents of the
                    decision to take away leftovers after dining at restaurants”
                    Journal of Sustainable Tourism DOI.10.1080/09669582.1953512
                    July 2021
                  </p>
                </li>
                <li>
                  <p>
                    Shalini Talwar, Puneet Kaur. Rambalak Yadav, Anil Bilgihan
                    &amp; Amandeep Dhir (2021), “What drives diners'
                    eco-friendly behaviour? The moderating role of planning
                    routine” Journal of Retailing and Consumer Services
                    DOI.10.1016/j.jretconser.2021.102678
                  </p>
                </li>
                <li>
                  <p>
                    Ankur Srivastava, Nitin Gupta, &amp; Nripendra P Rana, “
                    Influence of consumer cosmopolitanism on purchase intention
                    of foreign vs local brands: a developing country
                    perspective, International Journal of Emerging Markets DOI
                    10.1108/IJOEM-01-2021-0057
                  </p>
                </li>
                <li>
                  <p>
                    Debadutta Kuamr Panda, “Impact of organizational culture on
                    strategic planning Management Decision, DOI
                    10.1108/MD-10-2020-1375
                  </p>
                </li>
                <li>
                  Deepak Jaiswal, Rishi kant ,Pankaj Kumar Singh &amp; Rambalak
                  Yadav (2021), “Investigating the role of electric vehicle
                  knowledge in consumer adoption: evidence from an emerging
                  market “Benchmarking: An International Journal DOI:
                  10.1108/BIJ-11-2020-0579
                </li>
                <li>
                  <p>
                    Panda, D.K. (2021). Strategic positioning of nonprofit
                    organizations for grant acquisition. Public Administration
                    Quarterly DOI:10.37808/paq.45.4.l{" "}
                  </p>
                </li>
                <li>
                  <p>
                    Indranil Ghosh, Tamal Datta Chaudhari Esteban Alfaro-Cortes
                    and Matias Gamez Martinez (2021), “Estimating the relative
                    effects of raw material prices, sectoral outlook and market
                    sentiment on stock prices” Resources Policy
                    doi.org/10.1016/j.resoupol.2021.102158 17 May 2021
                  </p>
                </li>
                <li>
                  <p>
                    Roma Kumari, Tamal Datta Chaudhari and Indranil Ghosh
                    (2021), “Tobin’s q and firm performance: MCDM and
                    clustering-based approach for Indian companies “Int J.
                    Business Information Systems doi:
                    10.1504/IJBIS.2021.10039238
                  </p>
                </li>
                <li>
                  <p>
                    Arun Kumar Biswal, A., Jenamani M., &amp; Krishna Kumar S
                    “Product subsidy and expected consumption with inventory
                    inaccuracy: Implications of RFID adoption in Indian Public
                    Distribution System” Computers &amp; Industrial Engineering
                    doi.10.1016/j.cie.2021.107527
                  </p>
                </li>
                <li>
                  <p>
                    Shankar A. Rambalak Yadav, Manish Gupta, &amp; Charles
                    Jebarajakirthy (2021), “How Does Online Engagement Drive
                    Consumers’ Webrooming Intention?:A Moderated-Mediation
                    Approach “Journal of Global Information Management Vol. 29
                    (6), November- December 2021 DOI: 10.4018/JGIM.20211101.oa19
                  </p>
                </li>
                <li>
                  <p>
                    Vaibhav Shekhar, Ramendra Pratap Singh and Tulika Sharma
                    ”Staying Ahead of Competition: Zoomcar” Case Folio The IUP
                    Journal of Management Case Studies, Vol 21 No 4 The IUP
                    Journal of Management Case Studies, Vol 21 No 4 December
                    2021
                  </p>
                </li>
              </ol>
              <h5>
                <strong>Cases</strong>
              </h5>
              <ol>
                <li>
                  <p>
                    Sourabh Bhattacharya and Vinay Kumar Kalakbandi, Manangatha
                    Tyre Retreading: Process Analysis, The Case Centre ,
                    Reference no: 622-0024-1 and 622-0024-8
                  </p>
                </li>
                <li>
                  <p>
                    Sourabh Bhattacharya, Hi-End Fashions; Managing the Supply
                    Contract (A) The Case Centre Ref No 622-0018-1 &amp;
                    622-0018-8
                  </p>
                </li>
                <li>
                  <p>
                    Sourabh Bhattacharya, Hi-End Fashions; Managing the Supply
                    Contract (B) The Case Centre Ref No 622-0018-1B &amp;
                    622-0018-8B
                  </p>
                </li>
                <li>
                  <p>
                    Romina Mathew, Bigbastet: Hypericol or Inventory Led
                    E-commerce model, The Case Centre Ref No 622-0016-1
                  </p>
                </li>
                <li>
                  <p>
                    Sourabh Bhattacharya, Kalyana Chejarla, Romina Mathew, Ayush
                    Gupta &amp; Vishrut Ananda” Serum Institute of India:
                    Delivering Coid 19 Vaccines” IVEY Publishing Ref No
                    W2713&amp;W27137
                  </p>
                </li>
                <li>
                  <p>
                    Romina Mathew, Meeta Dutta: Leading the Transition to a
                    Trans-Inclusive workplace at Vitesse Infotech, The Case
                    Centre Ref No 422-0014-1
                  </p>
                </li>
                <li>
                  <p>
                    Nikhil Rastogi (2022) Impact of Leasing Standard IND AS116”
                    The case Centre, 122-0030 Publication date 15 March Ref
                    2022122-0030
                  </p>
                </li>
                <li>
                  <p>
                    Nitin Gupta, (2022)“ Bajaj Auto(A) Catering to the African
                    market” Emerald Emerging Market Case Studies,
                    doi/10.1108/EEMCS-11-2021-0377/full/html Vol 12 No 1
                  </p>
                </li>
                <li>
                  <p>
                    Nitin Gupta, (2022)“ Bajaj Auto (B) Challenges in LATAM and
                    Southeast Asian Markets” Emerald Emerging Market Case
                    Studies, doi/10.1108/EEMCS-11-2021-0378/full/html
                    Publication date: 10 March 2022
                  </p>
                </li>
                <li>
                  <p>
                    Kalyana Chejarla, Sourabh Bhattacharya, Vinay Kumar
                    Kalakbandi &amp; Shantanu Shankar Bagchi “Rain Industries
                    limited Responding to globally supply chain Shifts” IVEY
                    Publishing 10 January 2022 W25341
                  </p>
                </li>
              </ol>
              <h5>2020-2021</h5>
              <ol>
                <li>
                  Preeti Sharma &amp; Sarthak Goyal, Inequalities faced by
                  Employees in the Workplace: review Through Text and Visual
                  Analytics”, MDIM Business Review, Vol II Issue 1 June 2021 pp
                  1-35
                </li>
              </ol>
              <ol start={2}>
                <li>
                  K Sriharsha Reddy &amp; Sarath Babu, “Asset Quality of
                  Commercial Banks in India: An Empirical Analysis”, The IUP
                  Journal of Applied Economics, Vol XX No 2 2021
                </li>
              </ol>
              <ol start={3}>
                <li>
                  Tumpa Dey, “Mentoring: A Literature Review” Global Journal of
                  Business Management, Vol 14 No 2 December 2020, pp 77- 8
                </li>
              </ol>
              <ol start={4}>
                <li>
                  Vikas Chauhan, Rambalak Yadav &amp; Vipin Choudhary (2021),
                  “Adoption of Electronic Banking services in India: an
                  Extension of UTAUT2 Model“Journal of Financial Services
                  Marketing Published 30 April{" "}
                  <Link href="https://ma.x-mol.com/paperRedirect/1388222540858548224">
                    DOI: 10.1057/s41264-021-00095-z
                  </Link>
                </li>
              </ol>
              <ol start={5}>
                <li>
                  Preeti Sharma, Kartikey Nigam Gargi Sharma, (2020), “Use of
                  Big sData Analytics in Operations Management: A Review Using
                  Text Analytics” MDIM Business Review Volume: I, Issue II, Dec.
                  2020 Page No-01-15
                </li>
              </ol>
              <ol start={6}>
                <li>
                  Chakrapani Chaturvedula, “Under-Pricing of Initial Public
                  Offerings in Indian Capital Markets” International Journal of
                  Management” Vol 12 Iss no 5 May 2021 DOI
                  10.34218/ijm.12.5.2021.010
                </li>
              </ol>
              <ol start={7}>
                <li>
                  Saikat Banerjee (2021), “Open Innovation for Better
                  Governance: A Case Study of MyGov Platform of Government of
                  India” Academy of Marketing Studies Journal Volume 25, Issue 2
                  March 2021
                </li>
              </ol>
              <ol start={8}>
                <li>
                  Saikat Banerjee &amp; S Ghosh, “Financial Inclusion in India:
                  A Giant Structure on Weak Foundation” Academy of Accounting
                  and Financial Studies Journal Volume 25, Issue 2 March 2021
                </li>
              </ol>
              <ol start={9}>
                <li>
                  Saikat Banerjee (2021), Entrepreneurial Orientation, External
                  Ties of Top Management Team, And Firm Performance: A
                  Theoretical Model” International Journal of Entrepreneurship
                  Volume 25, Issue 2 , February 2021
                </li>
              </ol>
              <ol start={10}>
                <li>
                  Saikat Banerjee (2021), “Self-Leadership, Entrepreneurial
                  Orientation, and Innovation Performance of Firms”
                  International Journal of Entrepreneurship Volume 25, Issue 2 ,
                  February 2021
                </li>
              </ol>
              <ol start={11}>
                <li>
                  Mahesh.M, and Tulika Sharma (2021), “Self Image, Attitude
                  Formation and Mall Revisit Intentions: A Propositional Model
                  and Research Agenda” Journal of Emerging Technologies and
                  Innovative Research. Volume XIII, Issue No 3, March 2021
                </li>
              </ol>
              <ol start={12}>
                <li>
                  Manoj Das,” Impact of Covid on Tourism and Hospitality Sector”
                  International Journal of Research and Analytical Reviews”, Vol
                  8 Issue no 1 March 2021
                </li>
              </ol>
              <ol start={13}>
                <li>
                  Pravesh Kumar Padamwar, Jagrook Dawra and Vinay Kumar
                  Kalakbandi (2021), “The impact of range extension on the
                  attraction effect” Journal of Business Research Volume 126,
                  Issue pp565-577{" "}
                  <Link href="https://drive.google.com/file/d/1gUNWKK_wTHX1889VHCt_PvmziwEpDuUg/view?usp=sharing">
                    doi.org/10.1016/j.jbusres.2019.12.017{" "}
                  </Link>
                </li>
              </ol>
              <ol start={14}>
                <li>
                  Sushant Kumar &amp; Rambalak Yadav (2021), “The impact of
                  shopping motivation on sustainable consumption: A study in the
                  context of green apparel” Journal of Cleaner Production
                  Available online 10 Feb 2021
                  <Link href="https://doi.org/10.1016/j.jclepro.2021.126239">
                    https://doi.org/10.1016/j.jclepro.2021.126239
                  </Link>
                  Earley cite
                </li>
              </ol>
              <ol start={15}>
                <li>
                  Mahesh.M, and Tulika Sharma (2021), “Towards A Conceptual
                  Linkage between Transvections and Mall Patronage Behaviour:
                  Exploring New Research Directions” Journal of
                  Interdisciplinary Cycle Research. Volume XIII, Issue No 1,
                  January 2021
                </li>
              </ol>
              <ol start={16}>
                <li>
                  Amit Shankar &amp; Rambalak Yadav (2020), “Understanding the
                  impact of CSR domain on brand relationship quality” Marketing
                  Intelligence and planning doi:.org/10.1108/MIP-10-2020-0442
                  Early cites
                </li>
              </ol>
              <ol start={17}>
                <li>
                  Naman Sreen, Rambalak Yadav, Sushant Kumar, &amp; Mark Gliem
                  (2020), “The impact of the institutional environment on green
                  consumption in India” Journal of Consumer Marketing s
                  doi:.org/10.1108/JCM-12-2019-3536 Online Published date: 1
                  December 2020
                </li>
              </ol>
              <ol start={18}>
                <li>
                  Avishek Bhandari &amp; Bandi Kamaiahs (2020), “Long Memory and
                  Fractality Among Global Equity Markets: a Multivariate Wavelet
                  Approach Journal of Quantitative Economics,
                  doi:.org/10.1007/s10953-020-00220-0 Online Published date 16
                  October 2020
                </li>
              </ol>
              <ol start={19}>
                <li>
                  Tumpa Dey &amp; Manish Khayani (2020), “A Study on The
                  Relation between Music and Academic performance “International
                  Journal of Research and Analytical Reviews, Vol 7 No 2 July
                  2020
                </li>
              </ol>
              <ol start={20}>
                <li>
                  Steven Raj Padakandla (2020), “Climate sensitivity of rice
                  yields: An agro climatic zone analysis in the undivided state
                  of Andhra Pradesh, India “Journal of Public Affairs, 16th Sep
                  2020.{" "}
                  <Link href="https://doi.org/10.1002/pa.2261">
                    https://doi.org/10.1002/pa.2261
                  </Link>
                </li>
              </ol>
              <ol start={21}>
                <li>
                  Tavleen Kaur &amp; Ritesh Kumar Dubey (2020), “Employee Review
                  Websites as Source of Recruitment Communication: The Role of
                  Source Credibility, Realistic Information, and Specific
                  Information” Journal of Electronic Commerce in Organization,
                  Vol 18 No 3 July-Sept 2020 pp 74-94
                </li>
              </ol>
              <h5>Cases</h5>
              <ol>
                <li>
                  Kalyana Chejarla &amp; Mr Sandeep Chatterjee (2021),
                  “GoUNESCO: achieving strategic growth” Emerging Markets Case
                  Studies10.1108/EEMCS-06-2018-0146
                </li>
                <li>
                  Kalyana Chejarla &amp; Mr Sandeep Chatterjee (2021), “Managing
                  inventory at GoUNESCO” Emerging Markets Case Studies
                  10.1108/EEMCS-03-2021-0059
                </li>
                <li>
                  Surajit Ghosh, Nitin Gupta,&amp; Damini Raichandani, 2021
                  “Zolostyas: competing in Indian co-living space” Emerald
                  Emerging Market case Studies, Vol 11 No 2
                  DOI:10.1108/EEMCS-06-2020-0231
                </li>
                <li>
                  Sourabh Bhattacharya, Kalyana Chejarla (2021), “Aggregate
                  Planning at Hercules Values Limited” The Case Center, April
                  2021, 621-0013-1
                </li>
                <li>
                  Nitin Gupta,2021 “KIA Motors: Positioning and growth
                  Strategies in India, IVEY Publishing Ref no 9B21A009 April 9
                  2021
                </li>
                <li>
                  Nitin Gupta,2021 “Postioning Challenges for Covaxin”, The Case
                  centre Reference no 521-0015-1
                </li>
                <li>
                  Nikhil Rastogi “Ashiana Housing Ltd: The Right Time to Invest”
                  IVEY Publishing Publication date 28/10/2020 Ref: 9B2N040
                </li>
                <li>
                  Romina Mathew, Rajitha Singh, Anjali Bhole Desai and Sudhanshu
                  Bhatt,“Juhi Warrier: Driving the Diversity Agenda at Reital
                  Pharma Inc” IVEY Publishing Publication date 28/10/2020 Ref:
                  9B20C047
                </li>
                <li>
                  Surajit Ghosh Dastidar (2020), “Barometer: The funding
                  conundrum” Emerald Emerging Markets case studies, Vol10 No 2
                  2020 pp 1-19 ISSN 2045-0621
                </li>
                <li>
                  Sourabh Bhattacharya, Kalyana Chejarla &amp; N Ravichandran
                  (2020), “Butterfly Edufields: Value Chain Reconfiguration”
                  IVEY Publishing, Sept 2020, 9B20D021
                </li>
              </ol>
              <h5>2019-2020</h5>
              <ol>
                <li>
                  <p>
                    Dinehs Jaisinghani, Mahesh Ramalingam, &amp; Muskan
                    Kaur,“Seasonal anomalies in emerging markets: an empirical
                    analysis for Indonesia, Journal of Marketing Vistas,
                    International Journal of Business and Management.
                  </p>
                </li>
              </ol>
              <ol start={2}>
                <li>
                  <p>
                    Dhananjay Singh, “Branding during Recession: The Brand
                    Managers Perspectives, Journal of Marketing Vistas, Jan-June
                    2020
                  </p>
                </li>
              </ol>
              <ol start={3}>
                <li>
                  <p>
                    Tavleen Kaur &amp; Ritesh Kumar Dubey (2020), “Employee
                    Review Websites as Source of Recruitment Communication: The
                    Role of Source Credibility, Realistic Information, and
                    Specific Information” Journal of Electronic Commerce in
                    Organization, Vol 18 No 3 July-Sept 2020 pp 74-94
                  </p>
                </li>
              </ol>
              <ol start={4}>
                <li>
                  <p>
                    Santanu Mandal &amp; Ritesh Kumar Dubey (2020), “Role of
                    tourism IT adoption and risk management orientation on
                    tourism agility and resilience: Impact on sustainable
                    tourism supply chain performance:” International Journal of
                    Tourism Research, Vol 22 No 3 16 June 2020
                  </p>
                </li>
              </ol>
              <ol start={5}>
                <li>
                  <p>
                    Shabnam Priyadarshini (2020), “HR Professionals: Key drivers
                    for implementing sustainable business practices” Strategic
                    HR Review, DOI 10.1108/SHR-03-2020-0025 March 2020
                  </p>
                </li>
              </ol>
              <ol start={6}>
                <li>
                  <p>
                    Surajit Ghosh Dastidar (2020), “A Spreadsheet Template for
                    Forced Grading System” International Journal of Recent
                    Technology and Engineering Vol 8 No 6 March 2020
                  </p>
                </li>
              </ol>
              <ol start={7}>
                <li>
                  <p>
                    Avishek Bhandari &amp; Kamaiah Bandi, “Contagion Among
                    Select Global Equity Markets: A Time-Frequency Analysis”
                    Global Economy Journal, Vol 19, No 4 December 2019
                  </p>
                </li>
              </ol>
              <ol start={8}>
                <li>
                  <p>
                    Debadutta Panda, “The Dynamics of business ecosystem
                    identity An ethnographic study on an Indian microenterprise
                    clusters” Qualitative Research in Organizations and
                    Management, Early cite Publication Date October 24 2019
                  </p>
                </li>
              </ol>
              <ol start={9}>
                <li>
                  <p>
                    Pallavi Pandey, Rambalak Yadav, “Danone India: The
                    Challenges of Expanding into an Emerging Markets” South
                    Asian Journal of Business and Management Cases, March 27
                    2020{" "}
                    <Link href="https://doi.org/10.1177/2277977920911904">
                      https://doi.org/10.1177/2277977920911904
                    </Link>
                    0493 (Published March 2020)
                  </p>
                </li>
              </ol>
              <ol start={10}>
                <li>
                  <p>
                    Shantanu Shankar Bagchi and AK Rao (2020), “Optimal sourcing
                    for Single and multiple period scenarios” Int J Operational
                    Research, Vol 38 No 2 March 2020
                  </p>
                </li>
              </ol>
              <ol start={11}>
                <li>
                  <p>
                    Avishek Bhandari &amp; Kamaiah Bandi (2020), “Time-varying
                    Nature of Stock Market Interdependence: A Global
                    Perspective” Economic and Political Weekly, Vol IV, No 13
                    March 28 2020
                  </p>
                </li>
              </ol>
              <ol start={12}>
                <li>
                  <p>
                    Rik Paul, Shantanu Bagchi &amp;Jighyasu Gaur “Demonstrating
                    Push and Pull Manufacturing Strategies: An Experiential
                    Classroom Activity Using Original Origami Art NjPOperations
                    Management Education Review Volume 13: 2019, pp. 173-190;{" "}
                  </p>
                </li>
              </ol>
              <ol start={13}>
                <li>
                  <p>
                    Charles Jebarajakirthy, Rambalak Yadav, &amp; Amith Shankar
                    “Insights for luxury retailers to reach customers globally”
                    Marketing Intelligence &amp; Planning Early Cite
                    DOI10.1.1108/MIP-10-2019-0493 (Accepted 1 Feb 2020)
                  </p>
                </li>
              </ol>
              <ol start={14}>
                <li>
                  <p>
                    Neejar Kumar Dubey,Preeti Sharma, and Purima Sangle
                    “Implementation and adoption of CRM and co-creation
                    leveraging collaborative technologies: An Indian banking
                    Context” Journal of Indian Business Research EarlyCite,
                    publication date 20 Feb 2020
                  </p>
                </li>
              </ol>
              <ol start={15}>
                <li>
                  <p>
                    Saikat Banerjee (2019), “Foreign Direct Investments:
                    Examining the Roles of Democracy, Corruption and Judicial
                    Systems Across Countries” Journal of Applied Business and
                    Economics, Vol 21 (6) December 2019 pp 32 -46
                  </p>
                </li>
              </ol>
              <ol start={16}>
                <li>
                  <p>
                    Arun Kumar Biswal, Mamata Jenamani &amp; Sri Krishna Kumar
                    (2020), “The Impact of RFID adoption on donor subsidy
                    through for-profit and not-for-profit newsvendor:
                    Implications for Indian Public Distribution system”
                    Socio-Economic Planning Sciences, Vol 69Article 100687 March
                    2020S
                  </p>
                </li>
              </ol>
              <ol start={17}>
                <li>
                  <p>
                    Mahesh Ramalingam, Muskan Kaur &amp; Dinesh Jaisinghani
                    2019, “Do Seasonal anomalies still persists? Empirical
                    evidence post-global financial crisis Vol 25 NO 1 pp 44-65
                  </p>
                </li>
              </ol>
              <ol start={18}>
                <li>
                  <p>
                    Ritesh Kumar Dubey, Chetna Priyadarshini, YLN Kumar and
                    Rajneesh Ranjan Jha (2020), “Impact of a Social Media
                    Addiction on Employees’ Wellbeing and Work Productivity’ The
                    Qualitative Report, Vol 25 No1 12 January 2020 pp 181-196
                  </p>
                </li>
              </ol>
              <ol start={19}>
                <li>
                  <p>
                    Sarath babu (2019), “Investors’ attention and American
                    depository receipts pricing: evidence from India” S, Vol 9
                    No 12 December 2019, pp 381-386
                  </p>
                </li>
              </ol>
              <ol start={20}>
                <li>
                  <p>
                    Debadutta Panda &amp; Sriharsha Reddy (2019), “Predictors of
                    Microcredit Default in Indian Self-Help Groups” Annals of
                    Public and Cooperative Economics,{" "}
                    <Link href="https://onlinelibrary.wiley.com/toc/14678292/0/0">
                      Early View
                    </Link>{" "}
                    November 2019 pp 1-18
                  </p>
                </li>
              </ol>
              DDD
              <ol start={21}>
                <li>
                  <p>
                    Rambalak Yadav, Pankaj Kumar Singh, Ankur Srivastava &amp;
                    Anees Ahmad “Motivators and barriers to sustainable food
                    consumption: Qualitative inquiry about organic food
                    consumers in a developing nation” Int Journal of Nonprofit
                    and voluntary sector marketing, Vol 24, Issue4 Nov 2019
                  </p>
                </li>
              </ol>
              <ol start={22}>
                <li>
                  <p>
                    Juhi Gahlot Sarkar, Abhigyan Sarkar, &amp; Rambalak Yadav
                    (2019), “Brand it Green: Young consumers’ brand attitudes
                    and purchase intensions toward green brand advertising
                    appeals” Young Consumers, Vol 20 No 3 2019 pp 190-227
                  </p>
                </li>
              </ol>
              <ol start={23}>
                <li>
                  <p>
                    Preshita Neha Tudu &amp; Rambalak Yadav (2019), “EnviGreen
                    Biotech: An Eco-friendly Alternative to Plastic Bags” South
                    Asian Journal of Business and Management Cases, Vol 8 No 7
                    2019 pp 207-214
                  </p>
                </li>
              </ol>
              <h5>Cases </h5>
              <ol>
                <li>
                  <p>
                    {" "}
                    Nitin Gupta (2020), “ATHER ENERGY: MOTIVATING INDIA FOR
                    AMART ELKECTRIC SCCOTERS IVEY Publishing, 9B20A013, February
                    2020
                  </p>
                </li>
              </ol>
              <h5>2018-2019</h5>
              <ol>
                <li>
                  <p>
                    Tumpa Dey (2019), “Challenges of Social Entrepreneurship in
                    India” Global Journal of Business Management, Vol 13 No 1
                    June 2019, pp 65-77
                  </p>
                </li>
              </ol>
              <ol start={2}>
                <li>
                  <p>
                    Avishek Bhandari “Contagion among Indian and Some Developed
                    Equity Markets: A Continuous Wavelet Investigation” The
                    Empirical Economic Letters Vol 18, No 6, June 2019
                  </p>
                </li>
              </ol>
              <ol start={3}>
                <li>
                  <p>
                    Sivagnanasundaram (2019), “Effect of product retail strategy
                    on Frim Value : A Study on Indian Automobile” Asia Pacific
                    Journal of Research in Business Management, Vol 10, No 6,
                    June 2019 pp 7-12
                  </p>
                </li>
              </ol>
              <ol start={4}>
                <li>
                  <p>
                    Sarath Babu “Risk and Return Analysis of Indian Banking
                    Sector Stocks” Asia Pacific Journal of Research in Business
                    Management Vol 10, No 6, June 2019
                  </p>
                </li>
              </ol>
              <ol start={5}>
                <li>
                  <p>
                    Manoj Das and Mahesh Ramallingam “How Effective are your
                    Actions? Impact of perceived consumer effectiveness on green
                    purchasing behavior” Academy of Marketing Studies Journal
                    Vol 23, No 2, June 2019
                  </p>
                </li>
              </ol>
              <ol start={6}>
                <li>
                  <p>
                    Debadutta Kumar Panda (2019), “ Competitive dynamics in
                    not-for-profit organizations: evidence from India” Asia
                    Pacific Journal of Management
                    doi.org/10.1007/s10490-019-09666-0 June 2019
                  </p>
                </li>
              </ol>
              <ol start={7}>
                <li>
                  <p>
                    Pavan kumar Balivada (2019), “Engaging Diverse Religions at
                    Work” Asia Pacific Journal of Research in Business
                    Management, Vol 10, No 5, May 2019 pp 7-15
                  </p>
                </li>
              </ol>
              <ol start={8}>
                <li>
                  <p>
                    Devi Prasad Ghosh (2019), “B2B Social Media Marketing Mix
                    Optimization Model: A Case Study of a SME in Corporate
                    Training Services” Journal of Advance in Business Management
                    and Accounting Vol 5, Issue 5, May 19 pp 20-33
                  </p>
                </li>
              </ol>
              <ol start={9}>
                <li>
                  <p>
                    Pavan kumar Balivada &amp; Tulika Sharma (2019),
                    “Recruitment Process Made Easy” Journal of Human Resource
                    and Customer Relationship Management, Vol 3, No 1, 2019 pp
                    11-15
                  </p>
                </li>
              </ol>
              <ol start={10}>
                <li>
                  <p>
                    M Kannadhasan, Pankaj Singh, Parikshit Charan &amp; Pavan
                    Kumar Balivada (2018), “Personality characteristics and the
                    process of start-up: the moderating role of institutional
                    environment” Decision Official Journal of Indian Institute
                    of Management Calcutta, Vol 45, No 4, December 2018 pp
                    287-300
                  </p>
                </li>
              </ol>
              <ol start={11}>
                <li>
                  <p>
                    Tulika Sharma (2019), Evolution of New Communication
                    Patterns: A Case of Social Media” Journal of Management
                    Research and Analysis, Vol 6, No 1, March 2019 pp 50-58
                  </p>
                </li>
              </ol>
              <ol start={12}>
                <li>
                  <p>
                    Devi Prasad Ghosh (2019), “Commercial &amp; Industrial
                    Sector for Energy Storage Solutions in India: A Case Study
                    of Exicom Power Solutions” International Research Journal od
                    Engineering and Technology, Vol 6, Issue 5, May 19 pp
                    6696-6705
                  </p>
                </li>
              </ol>
              <ol start={13}>
                <li>
                  <p>
                    Sivagnanasundaram (2019), “Effect of packaging on Perfume
                    purchase decision of consumers” Journal of Management
                    Research and Analysis, Vol 6, No 1, March 2019 pp 6-20
                  </p>
                </li>
              </ol>
              <ol start={14}>
                <li>
                  <p>
                    Tumpa Dey (2019), “Sexual harassment in organizations: An
                    investigation of the #Me Too movement in India”
                    International Journal of Advance Research and Development,
                    Vol 4 No 5, May 2019 pp 61-73
                  </p>
                </li>
              </ol>
              <ol start={15}>
                <li>
                  <p>
                    Manoj Das “Digitally extended self: Are we happy or sad? ”
                    International Journal of Research in Economics and Social
                    Sciences Vol 8, No 4, April 2019 pp 36-46
                  </p>
                </li>
              </ol>
              <ol start={16}>
                <li>
                  <p>
                    Sourabh Bhattacharya &amp; Shantanu Shankar Bagchi
                    “Evaluating Manufacturer's Wholesale Price Policy Under
                    Order Postponement With Buyback Option” International
                    Journal of Strategic Decision Sciences Vol 10, No 2, pp
                    49-69 April-June 2019
                  </p>
                </li>
              </ol>
              <ol start={17}>
                <li>
                  <p>
                    Debadutta Kumar Panda (2019), “ Role of Identity in the
                    business ecosystem: an inquiry in Indian stone carving
                    clusters” International Journal of Organizational Analysis
                    doi.org/10.1108/IJOA-06-2018-1454 March 2019
                  </p>
                </li>
              </ol>
              <ol start={18}>
                <li>
                  <p>
                    Debadutta Kumar Panda (2019), “ Misaligned Expectations and
                    Non-Cooperative Behavior in Indian Microfinance: Evidences
                    from a Survey” Journal of Economic Issues Vol 53, No 1, pp
                    211-233 March 2019
                  </p>
                </li>
              </ol>
              <ol start={19}>
                <li>
                  <p>
                    Vikas Chauhan, Rambalak Yadav,Vipin Choudhary"Analyzing the
                    impact of consumer innovativeness and perceived risk in
                    internet banking adoption: A Study of Indian consumers"
                    International Journal of Bank Marketing, Vol 37 Issue 1, pp
                    323-339
                  </p>
                </li>
              </ol>
              <ol start={20}>
                <li>
                  <p>
                    Rambalak Yadav, MS Balaji, CharlesJebarajakirthy,(2019), How
                    psychological and contextual factors contribute to
                    travelers’ propensity to choose green hotels” Int Journal of
                    Hospitality Management, Vol 77, January 2019 pp 385-395
                  </p>
                </li>
              </ol>
              <ol start={21}>
                <li>
                  <p>
                    Shantanu Shankar Bagchi (2018), “Simultaneous Optimization
                    of Capacity Decision and Pricing Policy of a Hotel in
                    Stochastic Demand Environment” International Journal of
                    Strategic Decision Sciences, Vol 10, Issue 1, Jan-Mar 19 pp
                    10-22
                  </p>
                </li>
              </ol>
              <ol start={22}>
                <li>
                  <p>
                    Vinay Kumar Kalakbandi (2018), “Managing the misbehaving
                    retailer under demand and uncertainty and imperfect
                    information” European Journal of Operational Research, Vol
                    269, Issue 3, Sept 2018 pp 939-954
                  </p>
                </li>
              </ol>
              <ol start={23}>
                <li>
                  <p>
                    Steven Raj Padakandla &amp; Sudarshan Bhattacharjee (2018),
                    “A Post Crisis Analysis of Market Interdependence and
                    Integration among India and Select Asian Markets” The
                    Empirical Economic Letters”, Vol 17, No 12, December 2018 pp
                    1421-1431
                  </p>
                </li>
              </ol>
              <ol start={24}>
                <li>
                  <p>
                    Pravesh Kumar Padamwar Jaagrook Dawra &amp; Vinay Kumar
                    Kalakbandi (2018), “Range effect on extremeness aversion
                    Decision Official. Journal of Indian Institute of Management
                    Calcutta, Vol 45, Issue 4, Dec 2018 pp 345-355
                  </p>
                </li>
              </ol>
              <ol start={25}>
                <li>
                  <p>
                    Nikhil Rastogi &amp; Chakrapani Chaturvedula (2018), “
                    Qualified Institutional Placement Vs Preferential Allotment:
                    Choice of Seasoned Offering for Private Equity Placement in
                    India” International Research Journal of Finance and
                    Economics Vol 170, No 1, Nov 2018
                  </p>
                </li>
              </ol>
              <ol start={26}>
                <li>
                  <p>
                    Chakrapani Chaturvedula &amp; Nikhil Rastogi (2018), “ The
                    Effectiveness of Price Bands on Emerging Markets: Evidence
                    from India” Accounting and Finance Research Vol 7, No 4, pp
                    195-199 Nov 2018
                  </p>
                </li>
              </ol>
              <ol start={27}>
                <li>
                  <p>
                    Pooja Kumari &amp; Chandrashekar Mishra (2018), Value
                    relevance of earnings and book value in India: significance
                    of accounting reforms and intangible-intensity in an
                    emerging market, Int J Accounting Auditing and Performance
                    Evaluation, Vol 14, No 4, 2018 pp 364-387 Dec 2018
                  </p>
                </li>
              </ol>
              <ol start={28}>
                <li>
                  <p>
                    Tumpa Dey (2018), “Union and Organizational Commitment: Are
                    The Two Linked” Global Journal of Business Management, Vol
                    12 No 1, 2018 pp 13-20
                  </p>
                </li>
              </ol>
              <ol start={29}>
                <li>
                  <p>
                    Rambalak Yadav, Vikas Chauhan, Ankur Srivastava (2018),
                    “Energy saving behaviour among individuals in two different
                    contexts: analyzing the individuals’ energy saving behaviour
                    at home and workplace” Int J Environment, Workplace and
                    Employment, Vol 4, No 4, 2018 pp 247-363
                  </p>
                </li>
              </ol>
              <ol start={30}>
                <li>
                  <p>
                    Gyan Prakash, Pankaj Kumar Singh, Rambalak Yadav (2018),
                    “Application of consumer style inventory (CSI) to predict
                    young Indian consumer’s intention to purchase organic food
                    products” Food Quality and Preferences, Vol 68, September
                    2018 pp 90-97
                  </p>
                </li>
              </ol>
              <ol start={31}>
                <li>
                  <p>
                    Suman Gupta, Vinay Goyal, Vinay Kumar Kalakbandi and
                    Sankarshan Basu (2018), “Overconfidence. trading volume and
                    liquidity effect in Asia’s Giants: evidence from pre-,
                    during –and post-global recession” Decision Official.
                    Journal of Indian Institute of Management Calcutta, Vol 45,
                    Issue 3, Sept 2018 pp 235-257
                  </p>
                </li>
              </ol>
              <ol start={32}>
                <li>
                  <p>
                    Tulika Sharma (2018), “Capturing the Policies of the Place:
                    Nadine Gordimer’s A World of Strangers” Glimpses (A
                    Peer-Reviwed BI-Annual Refreed International Journal of
                    Multi-Disciplinary Research, Vol 7, No 2, June 2018 pp 12-25
                  </p>
                </li>
              </ol>
              <h5>2017-2018</h5>
              <ol>
                <li>
                  <p>
                    Mahesh Ramalingam (2018)“Evaluation of Service Quality
                    Attributes in Public Bus Transport Corporation Using
                    Importance-Performance Map Analysis”, “International Journal
                    of Advanced in Management, Technology and Engineering
                    Sciences, Vol 8, No 5, May 2018
                  </p>
                </li>
              </ol>
              <ol start={2}>
                <li>
                  <p>
                    Debendra P Kar (2018) "Linking HR Analytics to
                    Organizational Process", An International Multidisciplinary
                    Research Journal. Vol 8 Iss 6, June 2018 pp 5-12
                  </p>
                </li>
              </ol>
              <ol start={3}>
                <li>
                  <p>
                    Tumpa Dey, “Public Private partnerships in urban solid waste
                    management: A Review” International Journal of Advance
                    Research and Management,Vol3 Issue 6 June 2018
                  </p>
                </li>
              </ol>
              <ol start={4}>
                <li>
                  <p>
                    Pavan Kumar Balivada “Shareholder Activism &amp; Whistle
                    Blower Protection: Governance Issues in Public Companies in
                    India”, Asia Pacific Journal of Research in Business
                    Management, 2018 Vol 9 Iss 5 pp 1-16
                  </p>
                </li>
              </ol>
              <ol start={5}>
                <li>
                  <p>
                    Pavan Kumar Balivada “Sustainable Competitive Advantage
                    through Employee Empowerment”, Journal of Advance Management
                    Research, 2018 Vol 6 Iss 4 pp 360-363
                  </p>
                </li>
              </ol>
              <ol start={6}>
                <li>
                  <p>
                    M Sivagnanasundaram, “Sustainability Practices in Indian
                    Retail Industry: A Comparison with Top Global Retailers”,
                    Emerging Economy Studies, 2018 Vol 4 Iss 1 pp 102-111
                  </p>
                </li>
              </ol>
              <ol start={7}>
                <li>
                  <p>
                    Dhananjay Singh, “Haats and Meals-Facilitating Rural Reach
                    and Acceesibility”, Int Jounal of Marketing and Management
                    Research, 2018 Vol 9 Iss 4 May 2018{" "}
                  </p>
                </li>
              </ol>
              <ol start={8}>
                <li>
                  <p>
                    Shabnam Priyadasrhini, “Technology and the Moden Workforece
                    Management”, International Ressearch Jounal of Human
                    Resource and Scocial Sciences , Volume 5 Issue 5 May 2018.
                    pp 47-55
                  </p>
                </li>
              </ol>
              <ol start={9}>
                <li>
                  <p>
                    Kahn Md. Raziuddin Taufique &amp; Sridhar Vaithianathan, “A
                    Fresh look at understanding Green consumer behavior among
                    young urban Indian consumers through the lens of Theory of
                    Planned Behavior”, Journal of Cleaner Production, Volume 183
                    May 2018. pp 46-55
                  </p>
                </li>
              </ol>
              <ol start={10}>
                <li>
                  <p>
                    Sriharsha Reddy K &amp; Sarath Babu A, “Announcement of
                    Payment Banks and Stock Performance of Commercial Banks in
                    India”, Journal of Internet Banking and Commerce, April
                    2018, Vol23. No 1
                  </p>
                </li>
              </ol>
              <ol start={11}>
                <li>
                  <p>
                    Debendra P Kar (2018) "Organizational Citizenship Behavior
                    and Job Satisfaction ", Journal of Advance Management
                    Research, Vol 6 Iss 4, April 2018 pp 264-275{" "}
                  </p>
                </li>
              </ol>
              <ol start={12}>
                <li>
                  <p>
                    Dinesh Jaisinghani, “Empirical Analysis of Cointegration of
                    Indian Financial Markets with Other Markets, Zenith
                    International Journal of Multidisciplinary Research Vol. 8.
                    No.5, May 2018 pp109-115
                  </p>
                </li>
              </ol>
              <ol start={13}>
                <li>
                  <p>
                    Devi Prasad Ghosh, Application of linear Programming for
                    Direct Marketing Media Mix Optimization Model: A Case Study
                    of a Company promoting its IT Training Services”,
                    International Research Journal o Engineering and Technology
                    (IRJET) Vol 05,Iss No 4 April 2018
                  </p>
                </li>
              </ol>
              <ol start={14}>
                <li>
                  <p>
                    Devi Prasad Ghosh, “Application of Linear Programming for
                    Developing Distribution Optimization model for Services: A
                    Case Study of Hospital Speciality Services Distribution”,
                    Journal of Advance Research in Business Management and
                    Accounting, Vol 4 Iss 4 April 2018
                  </p>
                </li>
              </ol>
              <ol start={15}>
                <li>
                  <p>
                    Avishek Bhandari “Long Memory in Stock Returns; A Analysis
                    using a Wavelet Based Semi-Parametric Estimator” The
                    Empirical Economic Letters, (February 2018) ISSN 1681-8997
                  </p>
                </li>
              </ol>
              <ol start={16}>
                <li>
                  <p>
                    Manish Gupta, Musarrat Shaheen &amp; Manoj Das “Engaging
                    Employees for Quality of Life: Mediation by Psychlogical
                    capital” The Service Industries Journal, April
                    2018,doi.org/10.1080/02642069.2018.1461799
                  </p>
                </li>
              </ol>
              <ol start={17}>
                <li>
                  <p>
                    Chakrapani Chaturvedula “The Effect of ADR &amp; GDR Listing
                    on Shareholder’s Wealth: Evidences from India”, Accounting
                    and Finance Research, Vol. 7 No. 2, 2018{" "}
                    <Link href="http://doi.org/10.5430/afr.v7n2p174">
                      http://doi.org/10.5430/afr.v7n2p174
                    </Link>
                  </p>
                </li>
              </ol>
              <ol start={18}>
                <li>
                  <p>
                    Mukesh Kumar, Vinay Kalakbandi, Sanjeev Prashar, Neelu &amp;
                    Archana Parashar “Overcoming the effect of low self-esteem
                    on public speaking anxiety with mindfulness-based
                    interventions” Decision December 2017, Volume 44,{" "}
                    <Link href="https://link.springer.com/journal/40622/44/4/page/1">
                      Issue 4
                    </Link>
                    , pp 287–296 DOI: 10.4018/IJBIR.2017070104
                  </p>
                </li>
              </ol>
              <ol start={19}>
                <li>
                  <p>
                    Vinay Kumar Kalakbandi, Sankara Prasad Kondareddy
                    “Predictive Skill Based Call Routing Using Multi-Label
                    Classification Techniques” International Journal of Business
                    Intelligence Research, Volume 8, Issue 2,pp 49-61 DOI:
                    10.1007/s40622-017-0166-4
                  </p>
                </li>
              </ol>
              <ol start={20}>
                <li>
                  <p>
                    Shantanu Shankar Bagchi &amp; Rik Paul, “Aligning Aggregate
                    Planning with (s,S) Inventory Model in a Stochastic Demand
                    Environment” International Journal of Strategic Decision
                    Sciences Volume 9 • Issue 1 • January-March 2018
                  </p>
                </li>
              </ol>
              <ol start={21}>
                <li>
                  <p>
                    Avishek Bhandari “Wavelets based multiscale analysis of
                    select global equity returns” Theoretical and Applied
                    Economics Volume XXIV (2017),4 (613),Winter, p 75-88
                  </p>
                </li>
              </ol>
              <ol start={22}>
                <li>
                  <p>
                    Supratim Kundu &amp; Nitin Gupta, “Consumer behavior towards
                    Purchase of Green Products vis-à-vis Ayurvedic Products”
                    Imperial Journal of Interdisciplinary Research Vol -3 Issue
                    7, 2017
                  </p>
                </li>
              </ol>
              <ol start={23}>
                <li>
                  <p>
                    Debautta Kumar Panda,“ Entrepreneurial Orientation,
                    Intermediation Services, Microfinance, and Microenterprises.
                    Managerial and Decision Economics, 38(7)
                  </p>
                </li>
              </ol>
              <ol start={24}>
                <li>
                  <p>
                    Surajit Ghosh Dastidar, “Restaurant Recommendation System”,
                    International Journal of Business Abalytics and Intelligence
                    , Vol. 5 Issue: 2, October 2017 pp.22-29
                  </p>
                </li>
              </ol>
              <ol start={25}>
                <li>
                  <p>
                    Dinesh Jaisinghani, Barnali Chaklader, “Testing dynamic
                    trade-off theory of capital Structure :an empirical study
                    for the textiles industry in India”Afro-Asian J. Finance and
                    Accounting Vol. 7. No.4 2017
                  </p>
                </li>
              </ol>
              <ol start={26}>
                <li>
                  <p>
                    Shashi Kartikeyan, Shabnam Priyadarshini, (2017)Missing
                    women in the boardrooms: across the board Human Resource
                    Management International Digest, Vol. 25 Issue: 5, pp.4-6
                  </p>
                </li>
              </ol>
              <ol start={27}>
                <li>
                  <p>
                    Manoj Das “Destination Marketing-A Conceptual model for
                    decision making” Journal of Advance Management Research Vol
                    5 Iss5 (December 2017),
                  </p>
                </li>
              </ol>
              <ol start={28}>
                <li>
                  <p>
                    Manoj Das “Behavioral Outcomes of Patient experience”
                    International Journal of Research in Economics &amp; Social
                    Sciences Vol 7 Iss 12 (December 2017),
                  </p>
                </li>
              </ol>
              <ol start={29}>
                <li>
                  <p>
                    Dhananjay Singh,,“Reaching out to Rural Consumer: A Study of
                    FMCG Sector ” Journal of Marketing Strategy” Vol 5 Issue 3
                    December 2017
                  </p>
                </li>
              </ol>
              <h5>2016-2017</h5>
              <ol>
                <li>
                  <p>
                    Santanu Mandal, Rathin Sarathy Venkateshwar Rao Korasiga,
                    Sourabh Bhattacharya“The dominant influence of logistics
                    capabilities on integration; Empirical evidences from supply
                    chain resilience”, International Journal of Disaster
                    Resilience in the Built Environment, Vol. 8 No. 4, 2017 pp.
                    357-374{" "}
                    <Link href="http://doi.org/10.1108/IJDRBE-05-2016-0019">
                      http://doi.org/10.1108/IJDRBE-05-2016-0019
                    </Link>
                  </p>
                </li>
              </ol>
              <ol start={2}>
                <li>
                  <p>
                    Prof. Tumpa Dey, “A Cultural Perspective on Wisdom and
                    Leadership – A Literature Review”, Global Journal of
                    Business Management, Vol 11, No 7, June 2017, pp 17-27.{" "}
                  </p>
                </li>
              </ol>
              <ol start={3}>
                <li>
                  <p>
                    Dinesh Jaisinghani,“ An empirical analysis of consumers’
                    perception about smartphones in India”, Journal of
                    Management Research and Analysis, April-June 2017, 4
                    (2):63-68
                  </p>
                </li>
              </ol>
              <ol start={4}>
                <li>
                  <p>
                    Devi Prasad Ghosh, ”Digital Media a Mix Optimization Model:
                    A Case Study of Digital Agency promoting its E-Training
                    Services” international Journal of Research in IT and
                    Management, Vol7, Issue 3, March 2017, pp 127-137
                  </p>
                </li>
              </ol>
              <ol start={5}>
                <li>
                  <p>
                    Devi Prasad Ghosh, “Distribution Optimization Model: A Case
                    Study of Mobile Handset Distribution System” Journal of
                    Advances in Business Management and Accounting Vol 3,Issue
                    4, April 2017,pp 23-36
                  </p>
                </li>
              </ol>
              <ol start={6}>
                <li>
                  <p>
                    Debadutta Kumar Panda “Impact assessment of group-based
                    credit-lending projects with controlled project placement
                    bias and self-selection bias”, Decision Official Journal of
                    Indian Institute of Management Calcultta DOI:
                    10.1007/s40622-017-0148-6
                  </p>
                </li>
              </ol>
              <ol start={7}>
                <li>
                  <p>
                    Kanaiyalal Santilal Parmar, &amp; Chakrapani Chaturvedula,
                    “The Effctiveness of Trade Segment as Surveillance Effort to
                    Prevent Price Manipulation:Evidence from India”, Accouting
                    and Finance Research, Vol. 6, No. 1;2017
                    doi:10.5430/afr.v6n1p9
                  </p>
                </li>
              </ol>
              <ol start={8}>
                <li>
                  <p>
                    Gupta, Nitin (2016), “Measuring Consumer Acculturation –
                    Discussion on a Prospective Approach”, Marketing Sciences
                    and Inspirations, Vol. XI, No. 2, pp. 33-41.
                  </p>
                </li>
                <li>
                  <p>
                    Santanu Mandal, Rathin Sarathy Venkateshwar Rao Korasiga,
                    Sourabh Bhattacharya and Surajit Ghosh Dastidar,“Achieving
                    supply chain resilience The contribution of logistics and
                    supply chain capabilities”, International Journal of
                    Disaster Resilience in the Built Environment, Vol. 7 No. 5,
                    2016 pp. 544-562
                  </p>
                </li>
                <li>
                  <p>
                    Debadutta Kumar Panda , (2017)," Coevolution and coexistence
                    of cooperation and competition in interorganizational
                    collaboration: evidences from Indian management consulting
                    industry ", Journal of Global Operations and Strategic
                    Sourcing, Vol. 10 Iss 1
                  </p>
                </li>
              </ol>
              <ol start={11}>
                <li>
                  <p>
                    Debadutta Kumar Panda “Microfinance Spurs Microenterprise
                    Development: An Exploration of the Latent Processes”, Strat.
                    Change 25: 613–623
                  </p>
                </li>
              </ol>
              <ol start={12}>
                <li>
                  <p>
                    Sriharsha Reddy and Krishna Gopalaraman, (2016), “Peer to
                    Peer Lending, Default Prediction-Evidence from Lending
                    Club”, Journal of Internet Banking and Commerce, Vol. 21,
                    No.3
                  </p>
                </li>
              </ol>
              <ol start={13}>
                <li>
                  <p>
                    Sarath Babu A, “Testing for Random Walk Behaviour in Indian
                    Bond Market”, “Theoretical Economic Letters,2017, 7,728-736\
                  </p>
                </li>
              </ol>
              <ol start={14}>
                <li>
                  <p>
                    Priyadarshini, S. (2017). Attribution of Success and Failure
                    by Sales Force. International Research Journal of Human
                    Resources and Social Sciences. 4(2), 52-70
                  </p>
                </li>
              </ol>
              <ol start={15}>
                <li>
                  <p>
                    Priyadarshini, S. (2017). Effect of Personality on Conflict
                    Resolution Styles. IRA-International Journal of Management
                    &amp; Social Sciences (ISSN 2455-2267), 7(2), 196-207.
                  </p>
                </li>
              </ol>
              <ol start={16}>
                <li>
                  <p>
                    Shabnam Priyadarshini, Missing Women in the Boardrooms:
                    Across the Board Human Resource Management International
                    Digest, Munuscript No :HRMID-04-2017-0062
                  </p>
                </li>
              </ol>
              <ol start={17}>
                <li>
                  <p>
                    Dhananjay Singh &amp; Pavan Kumar Balivada and , (2017),
                    “Indian Retailing Perspective: Challenges and
                    Opportunities”, South Asian Journal of Marketing and
                    International Journal of Marketing and Management, Vol. 7,
                    Issue No.4, pp 66-82
                  </p>
                </li>
              </ol>
              <ol start={18}>
                <li>
                  <p>
                    Dhananjay Singh &amp;Pavan Kumar Balivada, (2017), “Luxury
                    Redefined-The Exclusivity Clause”, International Journal of
                    Finance and Marketing Research in IT and Management, Vol. 7,
                    Issue No.4, pp 30-35
                  </p>
                </li>
              </ol>
              <ol start={19}>
                <li>
                  <p>
                    Dhananjay Singh, (2017), “Marketing Innovations for
                    Inclusive Growth-A Study of LIC OF India”, International
                    Journal of Marketing and Management Research, Vol. 8, Issue
                    No.6,June 2017
                  </p>
                </li>
              </ol>
              <ol start={20}>
                <li>
                  <p>
                    Pavan Kumar Balivada, (2017), “Development of leadership
                    Competencies through training activities”, An international
                    Multidisciplinary Research Journal, Vol. 7, Issue No.4,
                    April 2017
                  </p>
                </li>
              </ol>
              <ol start={21}>
                <li>
                  <p>
                    Manoj Das, (2017), “Private Label Brands: Conceptual
                    Framework”, International Journal of Research in IT and
                    Management, Vol. 7, Issue No.4, pp 17-23
                  </p>
                </li>
              </ol>
              <ol start={22}>
                <li>
                  <p>
                    Manoj Das, “Health Care: An Emerging Area of Research
                    (2017), International Journal of Research in Finance and
                    Marketing, Vol.7, Issue 4, pp 13-29
                  </p>
                </li>
              </ol>
              <ol start={23}>
                <li>
                  <p>
                    Sriharsha Reddy &amp;Mousumi Singha Mahapatra (2017), “Risk
                    Tolerance, Personal Financial Knowledge and Demographic
                    Characteristics-Evidence From India”, The Journal of
                    Developing Areas, Vol. 51, No.3
                  </p>
                </li>
              </ol>
              <ol start={24}>
                <li>
                  <p>
                    Dr Debendra P Kar, “Development and Implementation of an
                    Employee Empowerment Plan for Sustainable Competitive
                    Advantage”, “An International Multidisciplinary Research,
                    Vol 7 Issue 5 May 2017pp:15-22
                  </p>
                </li>
              </ol>
              <ol start={25}>
                <li>
                  <p>
                    Prof . (Dr) Tumpa Dey, “Employee Creativity: The Role of
                    Harmonious Passion in a Supportive Context (Supervisory and
                    Co-Workers Support”, “Global Journal of Business Management,
                    Volume 10, No 2, December 2016)
                  </p>
                </li>
              </ol>
              <ol start={26}>
                <li>
                  <p>
                    Mahesh Ramalingam , “A Hierarchical Model of Service Quality
                    of Indian Railways website: Mediating Role of Customer
                    Satisfaction”, “International Journal of Research in Finance
                    and Marketing, Volume 7, No 5, May 2017
                  </p>
                </li>
              </ol>
              <ol start={27}>
                <li>
                  <p>
                    Shawnell Godinho &amp; Preeti Sharma,“Helical Insight: A
                    Self Service Business Intelligence Tool”, “International
                    Journal of Science, Engineering and Management, Volume 1, No
                    4, August 2016
                  </p>
                </li>
              </ol>
              <ol start={28}>
                <li>
                  <p>
                    Shawnell Godinho &amp; Preeti Sharma,“Helical Insight:
                    Changing The Business Intelligence Landscape”,
                    “International Journal of Management Research and Business
                    Strategy, Volume 6, No 1, January 2017
                  </p>
                </li>
              </ol> */}
            </div>
            <div className="table-responsive align-center">
    <table className="table table-striped">
        <tbody>
            <tr>
                <td>
                    <br />
                </td>
                <td>
                    <p>Industry Linkage</p>
                </td>
            </tr>
        </tbody>
    </table>
      </div>
      <div className="table-responsive" align="center">
          <table className="table table-striped">
              <tbody>
                  <tr>
                      <td colSpan={10}>
                          <p>
                              Panel Discussions at IMT Hyderabad from June 2013 to
                              25-06-2024
                          </p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>S.No</p>
                      </td>
                      <td>
                          <p>Theme</p>
                      </td>
                      <td>
                          <p>Date</p>
                      </td>
                      <td>
                          <p>Name</p>
                      </td>
                      <td>
                          <p>Company</p>
                      </td>
                      <td>
                          <p>Designation</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>1</p>
                      </td>
                      <td rowSpan={5}>
                          <p>Industry expectations from Management students</p>
                      </td>
                      <td rowSpan={5}>
                          <p>25-06-2024</p>
                      </td>
                      <td>
                          <p>Ms.Sharbari</p>
                      </td>
                      <td>
                          <p>Micron Technology</p>
                      </td>
                      <td>
                          <p>University Relations Recruiter</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Kshitij</p>
                      </td>
                      <td>
                          <p>Grant Thornton Bharat LLP</p>
                      </td>
                      <td>
                          <p>People &amp; Culture</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Kunal Choudhury</p>
                      </td>
                      <td>
                          <p>Alvarez &amp; Marsal</p>
                      </td>
                      <td>
                          <p>Associate Director HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms.Harshitha Sriramaneni</p>
                      </td>
                      <td>
                          <p>Mass Mutual</p>
                      </td>
                      <td>
                          <p>Head of partner Oparations &amp;Shared services</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Krishna Chaitanya</p>
                      </td>
                      <td>
                          <p>Tech Mahindra</p>
                      </td>
                      <td>
                          <p>Management Trainee</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={4}>
                          <p>2</p>
                      </td>
                      <td rowSpan={4}>
                          <p>Making the best out of your B-school journey(Valedictory Panel Discussion)</p>
                      </td>
                      <td rowSpan={4}>
                          <p>30-Jun-23</p>
                      </td>
                      <td>
                          <p>Mr. Tarun Kumar</p>
                      </td>
                      <td>
                          <p>Tech Mahindra</p>
                      </td>
                      <td>
                          <p>Head, Associate Services (HR shared services)</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Dr. Arnab Banerjee</p>
                      </td>
                      <td>
                          <p>Micron Technology</p>
                      </td>
                      <td>
                          <p>Director, Supply Chain, Smart Manufacturing &amp; AI</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Emmanuel Gosula</p>
                      </td>
                      <td>
                          <p>EPAM Systems</p>
                      </td>
                      <td>
                          <p>Head of APAC RD</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Siddharth Shukla</p>
                      </td>
                      <td>
                          <p>PepsiCo GBS Hyderabad</p>
                      </td>
                      <td>
                          <p>India Lead Campus Recruiting &amp; Employer Branding at PepsiCo GBS Hyderabad, (EX-Morgan Stanley &amp; PwC, India)</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={7}>
                          <p>3</p>
                      </td>
                      <td rowSpan={7}>
                          <p>Net-Zero 2023: Indian Industry Initiatives and Implications (4I)</p>
                      </td>
                      <td rowSpan={7}>
                          <p>19-Aug-23</p>
                      </td>
                      <td>
                          <p>Aravind Appi Raj</p>
                      </td>
                      <td>
                          <p>Exide Energy Solutions Limited</p>
                      </td>
                      <td>
                          <p>Head–Environment Health and Safety</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Ekta Kumar</p>
                      </td>
                      <td>
                          <p>SustainablEdge (An Independent ESG &amp; CSR Advisory Firm)</p>
                      </td>
                      <td>
                          <p>Founder</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Rajeev Chourey</p>
                      </td>
                      <td>
                          <p>CARE group of hospital</p>
                      </td>
                      <td>
                          <p>VP (Operations &amp; Quality, ESG officer) CARE group of hospitals</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Makarand Barhanpurkar</p>
                      </td>
                      <td>
                          <p>ITC Limited</p>
                      </td>
                      <td>
                          <p>Head Manufacturing and Projects</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Swapnil Joshi</p>
                      </td>
                      <td>
                          <p>Infosys Sustainability and Design Group</p>
                      </td>
                      <td>
                          <p>Director and Industry Principal</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Viveck Verma</p>
                      </td>
                      <td>
                          <p>Upsurge</p>
                      </td>
                      <td>
                          <p>Founder</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Prathyusha Parakala</p>
                      </td>
                      <td>
                          <p>Dr Reddys</p>
                      </td>
                      <td>
                          <p>Program Manager - Sustainability</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>4</p>
                      </td>
                      <td rowSpan={5}>
                          <p>Making the best out of your B-School Journey”</p>
                      </td>
                      <td rowSpan={5}>
                          <p>01-Jul-22</p>
                      </td>
                      <td>
                          <p>Mr. Ashish Bhalla</p>
                      </td>
                      <td>
                          <p>HCL Technologies Ltd</p>
                      </td>
                      <td>
                          <p>Head – Campus Relations</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Vinay Agrawal</p>
                      </td>
                      <td>
                          <p>Tech Mahindra</p>
                      </td>
                      <td>
                          <p>Head – Business HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Sahil Nayar</p>
                      </td>
                      <td>
                          <p>KPMG</p>
                      </td>
                      <td>
                          <p>Human Resources</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Mohammaed Hasan</p>
                      </td>
                      <td>
                          <p>Genpact</p>
                      </td>
                      <td>
                          <p>Assistant Vice President –Talent Acquisition Leader</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Venkatesh Palabatla</p>
                      </td>
                      <td>
                          <p>Nava Bharat Ventures Limited - India</p>
                      </td>
                      <td>
                          <p>Group Chief Human Resource Officer</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={3}>
                          <p>5</p>
                      </td>
                      <td rowSpan={3}>
                          <p>Corporate Expectations from Management Graduates</p>
                      </td>
                      <td rowSpan={3}>
                          <p>13-May-2022</p>
                      </td>
                      <td>
                          <p>Mr. Kunal Choudhury</p>
                      </td>
                      <td>
                          <p>Bain &amp; Company</p>
                      </td>
                      <td>
                          <p>Early Careers Hiring</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Jayshankar D</p>
                      </td>
                      <td>
                          <p>Britannia</p>
                      </td>
                      <td>
                          <p>Regional Sales Manager - Breads division</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Ankoor Banerjee</p>
                      </td>
                      <td>
                          <p>Cognizant</p>
                      </td>
                      <td>
                          <p>GenC hiring</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>6</p>
                      </td>
                      <td rowSpan={5}>
                          <p>The Making of a Post Pandemic Professional</p>
                      </td>
                      <td rowSpan={5}>
                          <p>28-May-21</p>
                      </td>
                      <td>
                          <p>Soham Wagh</p>
                      </td>
                      <td>
                          <p>GlaxoSmithKline</p>
                      </td>
                      <td>
                          <p>Pharmaceutical Sales and Marketing Professional</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Priya Rajani</p>
                      </td>
                      <td>
                          <p>Citi</p>
                      </td>
                      <td>
                          <p>Director, North America Corporate Client Strategy Head</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mandar Borkar</p>
                      </td>
                      <td>
                          <p>INDOCO REMEDIES LTD</p>
                      </td>
                      <td>
                          <p>CFO &amp; Senior Vice President (Finance, IT &amp; Distribution)</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Vibhuti Lall</p>
                      </td>
                      <td>
                          <p>Advance Auto Parts</p>
                      </td>
                      <td>
                          <p>India Site HR Leader</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Vinay Trivedi</p>
                      </td>
                      <td>
                          <p>Tone Tag</p>
                      </td>
                      <td>
                          <p>Head Human Resources</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>7</p>
                      </td>
                      <td rowSpan={5}>
                          <p>Employment challenges post covid19</p>
                      </td>
                      <td rowSpan={5}>
                          <p>18-Jul-20</p>
                      </td>
                      <td>
                          <p>Jaspreet Singh</p>
                      </td>
                      <td>
                          <p>Randstad Hyderabad</p>
                      </td>
                      <td>
                          <p>Vice President - Professionals Search &amp; Selection and Perm+</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Kundan Kumar</p>
                      </td>
                      <td>
                          <p>GlaxoSmithKline Pharmaceutical(Malaysia)</p>
                      </td>
                      <td>
                          <p>HR Lead</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Debashish Gosh</p>
                      </td>
                      <td>
                          <p>Berkadia (A Berkshire Hathaway and Jefferies Financial Services Co)</p>
                      </td>
                      <td>
                          <p>Vice President and India HR Head</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Dinesh Menon</p>
                      </td>
                      <td>
                          <p>Signode India Limited</p>
                      </td>
                      <td>
                          <p>Head - HR, Metals Business</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ramesh G</p>
                      </td>
                      <td>
                          <p>Olam India</p>
                      </td>
                      <td>
                          <p>General Manager - HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={4}>
                          <p>8</p>
                      </td>
                      <td rowSpan={4}>
                          <p>Developing Entrepreneurial Orientation in the Uncertain World – Strategies for Survival</p>
                      </td>
                      <td rowSpan={4}>
                          <p>04-Jul-20</p>
                      </td>
                      <td>
                          <p>Mr. Vinay Kumar</p>
                      </td>
                      <td>
                          <p>Datawise</p>
                      </td>
                      <td>
                          <p>CEO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Rajesh Padinjaremadam</p>
                      </td>
                      <td>
                          <p>Rapid Value</p>
                      </td>
                      <td>
                          <p>CEO &amp; Co-Founder</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Prasan Shah</p>
                      </td>
                      <td>
                          <p>Stone Plus Enterprises Pvt Ltd</p>
                      </td>
                      <td>
                          <p>CEO and Founder</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Anurag Palla</p>
                      </td>
                      <td>
                          <p>Stuzee</p>
                      </td>
                      <td>
                          <p>Entreprenuer</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={4}>
                          <p>9</p>
                      </td>
                      <td rowSpan={4}>
                          <p>Navigating through Covid 19 situation - Perspective from business leaders</p>
                      </td>
                      <td rowSpan={4}>
                          <p>20-Jun-20</p>
                      </td>
                      <td>
                          <p>Dr. JC Wandemberg</p>
                      </td>
                      <td>
                          <p>Sustainable Systems International</p>
                      </td>
                      <td>
                          <p>President &amp; Founder</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Hari Thalapalli</p>
                      </td>
                      <td>
                          <p>Call Health</p>
                      </td>
                      <td>
                          <p>CEO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Vijay Sivaram</p>
                      </td>
                      <td>
                          <p>QuessCorp</p>
                      </td>
                      <td>
                          <p>CEO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Hitesh Kakkar</p>
                      </td>
                      <td>
                          <p>CPM India</p>
                      </td>
                      <td>
                          <p>COO</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={4}>
                          <p>10</p>
                      </td>
                      <td rowSpan={4}>
                          <p>Digital Imperatives for Businesses</p>
                      </td>
                      <td rowSpan={4}>
                          <p>06-Jun-20</p>
                      </td>
                      <td>
                          <p>Mr.Sairam Vedam</p>
                      </td>
                      <td>
                          <p>Innominds</p>
                      </td>
                      <td>
                          <p>Global CMO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Anand Srivastava</p>
                      </td>
                      <td>
                          <p>Landis+Gyr</p>
                      </td>
                      <td>
                          <p>General Manager-Marketing</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms.Jyothsna Kuchimanchi</p>
                      </td>
                      <td>
                          <p>Cognizant</p>
                      </td>
                      <td>
                          <p>Sr.Director, Strategy and Consulting</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Viren Mehta</p>
                      </td>
                      <td>
                          <p>JLL</p>
                      </td>
                      <td>
                          <p>Sr,Director and Head Transactions</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={4}>
                          <p>11</p>
                      </td>
                      <td rowSpan={4}>
                          <p>Challenges in Developing Leadership</p>
                      </td>
                      <td rowSpan={4}>
                          <p>24-Jan-20</p>
                      </td>
                      <td>
                          <p>Mr.Arnab Banerjee</p>
                      </td>
                      <td>
                          <p>Infosys Limited</p>
                      </td>
                      <td>
                          <p>Principal Consultant, Enterprise Application Services</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Deepak Gupta</p>
                      </td>
                      <td>
                          <p>KARVY Group</p>
                      </td>
                      <td>
                          <p>CHRO &amp; Vice President Human Resources</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Narayan Rao</p>
                      </td>
                      <td>
                          <p>NCC Ltd</p>
                      </td>
                      <td>
                          <p>Vice President (HR)</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Richie J Joseph</p>
                      </td>
                      <td>
                          <p></p>
                      </td>
                      <td>
                          <p>Leadership Development Consultant</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>12</p>
                      </td>
                      <td rowSpan={5}>
                          <p>Corporate expectation from management graduates</p>
                      </td>
                      <td rowSpan={5}>
                          <p>28-Jun-19</p>
                      </td>
                      <td>
                          <p>Mr. Arka C</p>
                      </td>
                      <td>
                          <p>Open Text</p>
                      </td>
                      <td>
                          <p>Sr. Director-HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Pradeep Kumar K,</p>
                      </td>
                      <td>
                          <p>Coromandel International</p>
                      </td>
                      <td>
                          <p>VP-HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Ayn Wesely, State Street Corporate Services (Mumbai) Pvt. Ltd,</p>
                      </td>
                      <td>
                          <p>India Transition &amp; Project Management</p>
                      </td>
                      <td>
                          <p>AVP</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Prashant Girey,</p>
                      </td>
                      <td>
                          <p>Airtel</p>
                      </td>
                      <td>
                          <p>Head – Sales &amp; Marketing</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Vivek Gautam, Business</p>
                      </td>
                      <td>
                          <p>UHG</p>
                      </td>
                      <td>
                          <p>Analyst</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={8}>
                          <p>13</p>
                      </td>
                      <td rowSpan={8}>
                          <p>Contemporary Challenges in Pharma and Healthcare Sector Panel 1: Leading Diversity Panel 2: New Paradigm in Digital Marketing &amp; Analytics</p>
                      </td>
                      <td rowSpan={8}>
                          <p>11-Jan-19</p>
                      </td>
                      <td>
                          <p>Mr. Ram</p>
                      </td>
                      <td>
                          <p>L&amp;D Hetero Drugs</p>
                      </td>
                      <td>
                          <p>Sr. GM,</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Parasuraman</p>
                      </td>
                      <td>
                          <p>Dr. Reddys Lab</p>
                      </td>
                      <td>
                          <p>Global Head, R&amp;D,</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Mahendra Pratap Singh</p>
                      </td>
                      <td>
                          <p>Napier</p>
                      </td>
                      <td>
                          <p>Global Head(HR)</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Dr. B. Aparna Reddy</p>
                      </td>
                      <td>
                          <p>Therapiva &amp; Laxai Life Sciences</p>
                      </td>
                      <td>
                          <p>Chief People Officer,</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Phani Mitra</p>
                      </td>
                      <td>
                          <p>Dr. Reddys Lab</p>
                      </td>
                      <td>
                          <p>VP, Analytics &amp; Strategy</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Rajesh Kr. Singh</p>
                      </td>
                      <td>
                          <p>Hinduja Tech</p>
                      </td>
                      <td>
                          <p>GM</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Sankara V. Krishna Prasad</p>
                      </td>
                      <td>
                          <p>Cito Healthcare</p>
                      </td>
                      <td>
                          <p>Founder &amp; CEO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Soham Wagh</p>
                      </td>
                      <td>
                          <p>GlaxoSmithKline</p>
                      </td>
                      <td>
                          <p>Global Marketing Lead</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>14</p>
                      </td>
                      <td rowSpan={5}>
                          <p>Managing Disruptive Technologies</p>
                      </td>
                      <td rowSpan={5}>
                          <p>21-Dec-18</p>
                      </td>
                      <td>
                          <p>Jayesh Ranjan</p>
                      </td>
                      <td>
                          <p>Government</p>
                      </td>
                      <td>
                          <p>IT Secretary</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Kurt Stockli</p>
                      </td>
                      <td>
                          <p>President</p>
                      </td>
                      <td>
                          <p>Glenmark</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Vijay Chandru</p>
                      </td>
                      <td>
                          <p>Director</p>
                      </td>
                      <td>
                          <p>Strand Life Sciences</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ashok Das</p>
                      </td>
                      <td>
                          <p>CEO</p>
                      </td>
                      <td>
                          <p>SunMoksha</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Nixon Patel</p>
                      </td>
                      <td>
                          <p>CEO</p>
                      </td>
                      <td>
                          <p>Quantum Labs</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>15</p>
                      </td>
                      <td>
                          <p>Making difficult conversations easy with EI</p>
                      </td>
                      <td>
                          <p>30-Nov-18</p>
                      </td>
                      <td>
                          <p>Ms. Urvashi Baid</p>
                      </td>
                      <td>
                          <p>CCI- Indian Women Networ</p>
                      </td>
                      <td>
                          <p></p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>16</p>
                      </td>
                      <td>
                          <p>Fundamentals of HR being applied in the industry setup</p>
                      </td>
                      <td>
                          <p>19-Nov-18</p>
                      </td>
                      <td>
                          <p>Mr. Mahendra Pratap Singh</p>
                      </td>
                      <td>
                          <p>Global Head – HR,</p>
                      </td>
                      <td>
                          <p>Napier Healthcare</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>17</p>
                      </td>
                      <td>
                          <p>Successful Career: Investment Bankers’ Perspectives</p>
                      </td>
                      <td>
                          <p>06-Oct-18</p>
                      </td>
                      <td>
                          <p>Mr. Hemant Sethia</p>
                      </td>
                      <td>
                          <p>Vice President</p>
                      </td>
                      <td>
                          <p>Credit Suisse Services (India) Private Limited</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>18</p>
                      </td>
                      <td>
                          <p>Overview of Indian Pharmaceutical Industry</p>
                      </td>
                      <td>
                          <p>01-Aug-18</p>
                      </td>
                      <td>
                          <p>Mr. Naveen Kumar</p>
                      </td>
                      <td>
                          <p>Group Head,</p>
                      </td>
                      <td>
                          <p>CARE Ratings Ltd</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>19</p>
                      </td>
                      <td rowSpan={5}>
                          <p>Trends in Business Analytics</p>
                      </td>
                      <td rowSpan={5}>
                          <p>27-Jul-18</p>
                      </td>
                      <td>
                          <p>Mr Ramesh Kumar Koona</p>
                      </td>
                      <td>
                          <p>Cygnesia Animations Pvt. Ltd.</p>
                      </td>
                      <td>
                          <p>Founder and Director</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Sharat Konatham</p>
                      </td>
                      <td>
                          <p>HEDNext</p>
                      </td>
                      <td>
                          <p>Co founder</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Sridhar Sheshadri</p>
                      </td>
                      <td>
                          <p>Spotflock</p>
                      </td>
                      <td>
                          <p>Founder &amp; CEO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. N M Sharma</p>
                      </td>
                      <td>
                          <p>Phygital Insights Pvt. Ltd</p>
                      </td>
                      <td>
                          <p>Founder &amp; CEO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Ravi Munukutla</p>
                      </td>
                      <td>
                          <p></p>
                      </td>
                      <td>
                          <p>Independent Consultant (Data Analytics)</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={4}>
                          <p>20</p>
                      </td>
                      <td rowSpan={4}>
                          <p>Corporate expectations from Management Graduates</p>
                      </td>
                      <td rowSpan={4}>
                          <p>29-Jun-18</p>
                      </td>
                      <td>
                          <p>Mr. Pragathi Kumar</p>
                      </td>
                      <td>
                          <p>AT&amp;T</p>
                      </td>
                      <td>
                          <p>Director HR - International HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Dinesh Kumar Murugesan</p>
                      </td>
                      <td>
                          <p>DSM Chemicals</p>
                      </td>
                      <td>
                          <p>Country Head - HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms.Vani Manukonda</p>
                      </td>
                      <td>
                          <p>HARSCO</p>
                      </td>
                      <td>
                          <p>Director - Human Resources</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Venkatesh Palabatla</p>
                      </td>
                      <td>
                          <p>GMR Group</p>
                      </td>
                      <td>
                          <p>Head - HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={6}>
                          <p>21</p>
                      </td>
                      <td rowSpan={6}>
                          <p>TrailBlazers</p>
                      </td>
                      <td rowSpan={6}>
                          <p>25-Nov-17</p>
                      </td>
                      <td>
                          <p>Dr. Anil K Khandelwal</p>
                      </td>
                      <td>
                          <p>Bank of Baroda</p>
                      </td>
                      <td>
                          <p>Thought Leader, Author, Member- Banks Board Bureau and Former CMD</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Jayanthi Sampathkumar</p>
                      </td>
                      <td>
                          <p>Microsoft</p>
                      </td>
                      <td>
                          <p>Guinness World Record Holder and Principal Engineering Manager</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Murali Subramanian</p>
                      </td>
                      <td>
                          <p>Innovacx</p>
                      </td>
                      <td>
                          <p>Former Group VP at Oracle Corporation; CEO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Aruna Preetam</p>
                      </td>
                      <td>
                          <p>TechMahindra</p>
                      </td>
                      <td>
                          <p>Global Compensation &amp; Benefits Leader</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Rekha Narendra</p>
                      </td>
                      <td>
                          <p>Kantar</p>
                      </td>
                      <td>
                          <p>HR Director ,Global Delivery Centres &amp; OT</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. L Prabhakar</p>
                      </td>
                      <td>
                          <p>ITC Ltd.</p>
                      </td>
                      <td>
                          <p>VP-HR Agribusiness Division</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>22</p>
                      </td>
                      <td rowSpan={5}>
                          <p>Women in Supply Chain</p>
                      </td>
                      <td rowSpan={5}>
                          <p>15-Dec-17</p>
                      </td>
                      <td>
                          <p>Ms. Divya Medar</p>
                      </td>
                      <td>
                          <p>Snackerstreet Pvt. Ltd</p>
                      </td>
                      <td>
                          <p>Chef Director</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Malathi Sridhar</p>
                      </td>
                      <td>
                          <p>Dr.Reddy’s laboratories, Generics division</p>
                      </td>
                      <td>
                          <p>Heading External Manufacturing Operations</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Lathaa Subramanian</p>
                      </td>
                      <td>
                          <p>Inogent Laboratories Ltd (A GVK-BIO Company)</p>
                      </td>
                      <td>
                          <p>Associate Director- SCM</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms.Shobha Dixit</p>
                      </td>
                      <td>
                          <p>ALPLA India Pvt. Ltd</p>
                      </td>
                      <td>
                          <p>Director</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Tanuja Abburi</p>
                      </td>
                      <td>
                          <p>NTT Data</p>
                      </td>
                      <td>
                          <p>Senior Director, HR,</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>23</p>
                      </td>
                      <td rowSpan={5}>
                          <p>Dilemma of a Management Graduate</p>
                      </td>
                      <td rowSpan={5}>
                          <p>23-Jun-17</p>
                      </td>
                      <td>
                          <p>Dr. Murali Padmanabhan</p>
                      </td>
                      <td>
                          <p>Virtusa Polaris</p>
                      </td>
                      <td>
                          <p>Sr Vice President - Global Head of Talent Development and India Head- Human Resources</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Sriram S.R.</p>
                      </td>
                      <td>
                          <p>Director-HR</p>
                      </td>
                      <td>
                          <p>Arcesium (D.E.Shaw)</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Shameel Sharma</p>
                      </td>
                      <td>
                          <p>Managing Director</p>
                      </td>
                      <td>
                          <p>Kantar Group</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms.Neha Richharia</p>
                      </td>
                      <td>
                          <p>Associate Director-HR</p>
                      </td>
                      <td>
                          <p>Cognizant Technology Solutions</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Nihit Kumar Sharma</p>
                      </td>
                      <td>
                          <p>Associate VP</p>
                      </td>
                      <td>
                          <p>UBS AG</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>24</p>
                      </td>
                      <td rowSpan={5}>
                          <p>Industry expectations from management graduates</p>
                      </td>
                      <td rowSpan={5}>
                          <p>24-Jun-16</p>
                      </td>
                      <td>
                          <p>Mr.Debashis Das</p>
                      </td>
                      <td>
                          <p>Milagrow Human Tech &amp; President IMT Alumni Association</p>
                      </td>
                      <td>
                          <p>CEO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Shuddhasattwa Das</p>
                      </td>
                      <td>
                          <p>Gandour India</p>
                      </td>
                      <td>
                          <p>National HR Head</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Krishna Prasad Omkar</p>
                      </td>
                      <td>
                          <p>SumTotal Systems (Global Leader in HCM Application Development)</p>
                      </td>
                      <td>
                          <p>Director HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Kiran Prasad Ivaturi</p>
                      </td>
                      <td>
                          <p>ACT( Atria Convergence Technologies)</p>
                      </td>
                      <td>
                          <p>GM &amp; Head HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Rajitha Singh</p>
                      </td>
                      <td>
                          <p>Broadridge Financial Services</p>
                      </td>
                      <td>
                          <p>Head HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={5}>
                          <p>25</p>
                      </td>
                      <td rowSpan={5}>
                          <p>TrailBlazers:Learning from the Best</p>
                      </td>
                      <td rowSpan={5}>
                          <p>18-Dec-16</p>
                      </td>
                      <td>
                          <p>Ms.Meera Shenoy</p>
                      </td>
                      <td>
                          <p>Youth4Jobs</p>
                      </td>
                      <td>
                          <p>Social change maker, Founder</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.S P Reddy</p>
                      </td>
                      <td>
                          <p>EnGenius</p>
                      </td>
                      <td>
                          <p>Invester &amp; Philanthropist, Founder</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Karunakara M Reddy</p>
                      </td>
                      <td>
                          <p>Smaat India &amp; WalkForWater</p>
                      </td>
                      <td>
                          <p>Founder</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Srikanth Bolla</p>
                      </td>
                      <td>
                          <p>Bollant Industries</p>
                      </td>
                      <td>
                          <p>CEO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.P.Madhava Reddy</p>
                      </td>
                      <td>
                          <p></p>
                      </td>
                      <td>
                          <p>Social Media Awareness crusader</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={8}>
                          <p>26</p>
                      </td>
                      <td rowSpan={8}>
                          <p>Covering Public Policy and Business Management Imperatives and Challenges</p>
                      </td>
                      <td rowSpan={8}>
                          <p>16-Dec-15</p>
                      </td>
                      <td>
                          <p>Dr.P.K.Mohanty</p>
                      </td>
                      <td>
                          <p>Former Chief Secretary, Government of A.P</p>
                      </td>
                      <td>
                          <p>I.A.S (retired)</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Dr.K.Lakshminarayana</p>
                      </td>
                      <td>
                          <p>Director, Andhra Pradesh Skill Development Corporation</p>
                      </td>
                      <td>
                          <p>I.A.S (retired)</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Shri.Mohammed Abid</p>
                      </td>
                      <td>
                          <p>Tata Institute of Social Sciences, Hyderabad</p>
                      </td>
                      <td>
                          <p>I.A.S</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Dr.M.Gopinath Reddy</p>
                      </td>
                      <td>
                          <p>CESS Hyderabad</p>
                      </td>
                      <td>
                          <p>Head, Division for Sustainable Development Studies</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Tanmay Das</p>
                      </td>
                      <td>
                          <p>KSK Energy Ventrues, Hyderabad</p>
                      </td>
                      <td>
                          <p>Director</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Chirantan Chatteree</p>
                      </td>
                      <td>
                          <p>Virtusa, Hyderabad</p>
                      </td>
                      <td>
                          <p>Director</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Dr.Alok Mishra</p>
                      </td>
                      <td>
                          <p>University of Hyderabad</p>
                      </td>
                      <td>
                          <p></p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Dr.Harish Srivastsava</p>
                      </td>
                      <td>
                          <p>Ramky Foundation</p>
                      </td>
                      <td>
                          <p>Head, Planning &amp; Communication</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={4}>
                          <p>27</p>
                      </td>
                      <td rowSpan={4}>
                          <p>Women in Manufacturing</p>
                      </td>
                      <td rowSpan={4}>
                          <p>16-Sep-15</p>
                      </td>
                      <td>
                          <p>Ms. Alpa Gupta Mishra</p>
                      </td>
                      <td>
                          <p>Tata Projects</p>
                      </td>
                      <td>
                          <p>General Manager of Future Ready Team</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms. Geeta Jyothi</p>
                      </td>
                      <td>
                          <p>ITW Chemin a US MNC into manufacturing of Specialty Chemicals</p>
                      </td>
                      <td>
                          <p>Senior Manager</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Krishna Sai</p>
                      </td>
                      <td>
                          <p>Dr. Reddy’s Lab</p>
                      </td>
                      <td>
                          <p>Director, HR-FTO</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Dr. Sourabh Bhattacharya</p>
                      </td>
                      <td>
                          <p>IMT Hyderabad</p>
                      </td>
                      <td>
                          <p>Professor of Operations Management</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={4}>
                          <p>28</p>
                      </td>
                      <td rowSpan={4}>
                          <p>Industry expectations from management graduates.</p>
                      </td>
                      <td rowSpan={4}>
                          <p>26-Jun-15</p>
                      </td>
                      <td>
                          <p>Mr. Padmanabhan S</p>
                      </td>
                      <td>
                          <p>Dr Reddy Laboratories</p>
                      </td>
                      <td>
                          <p>Director, HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Vipul Singh</p>
                      </td>
                      <td>
                          <p>ADP</p>
                      </td>
                      <td>
                          <p>Head, HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Swaraj Mishra</p>
                      </td>
                      <td>
                          <p>FactSet Research Systems India (Pvt) Limited</p>
                      </td>
                      <td>
                          <p>Associate Director, HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr. Rajiv Oza</p>
                      </td>
                      <td>
                          <p>Biological E Ltd</p>
                      </td>
                      <td>
                          <p>VP &amp; Global Head, HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={3}>
                          <p>29</p>
                      </td>
                      <td rowSpan={3}>
                          <p>Industry Expectations from B-School Graduates</p>
                      </td>
                      <td rowSpan={3}>
                          <p>15-Mar-14</p>
                      </td>
                      <td>
                          <p>Dr.Kiranmayi Pendyala</p>
                      </td>
                      <td>
                          <p>Advanced Micro Devices (AMD)</p>
                      </td>
                      <td>
                          <p>Head HR-India</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Venkat Tulasi</p>
                      </td>
                      <td>
                          <p>CSC India</p>
                      </td>
                      <td>
                          <p>Vendor Manager</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Dr.Srinagesh Chatarajupalli</p>
                      </td>
                      <td>
                          <p>Infosys</p>
                      </td>
                      <td>
                          <p>Principal and Hyderabad STP, ETA Manager</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={4}>
                          <p>30</p>
                      </td>
                      <td rowSpan={4}>
                          <p>Grooming Next-Gen Leaders-Challengers &amp; Imperatives</p>
                      </td>
                      <td rowSpan={4}>
                          <p>30-Aug-13</p>
                      </td>
                      <td>
                          <p>Ms.Uma Rao</p>
                      </td>
                      <td>
                          <p>Mars India</p>
                      </td>
                      <td>
                          <p>Director-HR (people &amp; Organization)</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms.Preeti S Bhargava</p>
                      </td>
                      <td>
                          <p>India Bulls</p>
                      </td>
                      <td>
                          <p>AVP Learning and Development</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Krishna Kishore</p>
                      </td>
                      <td>
                          <p>GreenKO</p>
                      </td>
                      <td>
                          <p>VP-HR &amp; IR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.K V Pratap</p>
                      </td>
                      <td>
                          <p>Mahindra satyam, Hyderabad</p>
                      </td>
                      <td>
                          <p>Sr.Consultant</p>
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan={4}>
                          <p>31</p>
                      </td>
                      <td rowSpan={4}>
                          <p>What students should focus on in the two years at B-School</p>
                      </td>
                      <td rowSpan={4}>
                          <p>28-Jun-13</p>
                      </td>
                      <td>
                          <p>Mr.Chirantan Chatteree</p>
                      </td>
                      <td>
                          <p>Virtusa</p>
                      </td>
                      <td>
                          <p>Director &amp; Client Partner</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms.Geeta Rao Goti</p>
                      </td>
                      <td>
                          <p>Husys Consulting Pvt Ltd</p>
                      </td>
                      <td>
                          <p>Director</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Ms.Nirmala Garg</p>
                      </td>
                      <td>
                          <p>Sutherland Global Services</p>
                      </td>
                      <td>
                          <p>VP- HR</p>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <p>Mr.Vijaya Pasupulati</p>
                      </td>
                      <td>
                          <p>Winzest Eductech Private Limited (Moderator)</p>
                      </td>
                      <td>
                          <p>CEO</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div className="table-responsive" align="center">
          <table className="table table-striped">
              <tbody>
                  <tr>
                      <td>
                          <br />
                      </td>
                      <td>
                          <ul>
                              <li>
                                  <p>MoUs with Industries (Minimum 3)</p>
                              </li>
                          </ul>
                      </td>
                      <td>
                          <p>Yes</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

            {/* <div className="table-responsive align-center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <p>Industry Linkage</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td colSpan={10}>
                      <p>
                        Panel Discussions at IMT Hyderabad from June 2013 to
                        till date
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={8}>
                      <p>S.No</p>
                    </td>
                    <td rowSpan={8}>
                      <p>Theme</p>
                    </td>
                    <td colSpan={3} rowSpan={8}>
                      <p>Date</p>
                    </td>
                    <td colSpan={2}>
                      <p>Name</p>
                    </td>
                    <td colSpan={2}>
                      <p>Company</p>
                    </td>
                    <td colSpan={2}>
                      <p>Designation</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td rowSpan={5}>
                      <p>1</p>
                    </td>
                    <td rowSpan={5}>
                      <p>Making the best out of your B-School Journey</p>
                    </td>
                    <td colSpan={3} rowSpan={5}>
                      <p>01-Jul-22</p>
                      <br />
                    </td>
                    <td colSpan={2}>
                      <p>Mr. Ashish Bhalla</p>
                    </td>
                    <td colSpan={2}>
                      <p>HCL Technologies Ltd</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head – Campus Relations</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Vinay Agrawal</p>
                    </td>
                    <td colSpan={2}>
                      <p>Tech Mahindra</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head – Business HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Sahil Nayar</p>
                    </td>
                    <td colSpan={2}>
                      <p>KPMG</p>
                    </td>
                    <td colSpan={2}>
                      <p>Human Resources</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Mohammaed Hasan</p>
                    </td>
                    <td colSpan={2}>
                      <p>Genpact</p>
                    </td>
                    <td colSpan={2}>
                      <p>Assistant Vice President –Talent Acquisition Leader</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Venkatesh Palabatla</p>
                    </td>
                    <td colSpan={2}>
                      <p>Nava Bharat Ventures Limited - India</p>
                    </td>
                    <td colSpan={2}>
                      <p>Group Chief Human Resource Officer</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td rowSpan={3}>
                      <p>2</p>
                    </td>
                    <td rowSpan={3}>
                      <p>
                        Corporate Expectations from <br /> Management Graduates
                      </p>
                    </td>
                    <td colSpan={3} rowSpan={3}>
                      <p>13-May-2022</p>
                      <br />
                    </td>
                    <td colSpan={2}>
                      <p>Mr. Kunal Choudhury</p>
                    </td>
                    <td colSpan={2}>
                      <p>Bain &amp; Company</p>
                    </td>
                    <td colSpan={2}>
                      <p>Early Careers Hiring</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Jayshankar D</p>
                    </td>
                    <td colSpan={2}>
                      <p>Britannia</p>
                    </td>
                    <td colSpan={2}>
                      <p>Regional Sales Manager - Breads division</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Ankoor Banerjee</p>
                    </td>
                    <td colSpan={2}>
                      <p>Cognizant</p>
                    </td>
                    <td colSpan={2}>
                      <p>GenC hiring</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td rowSpan={5}>
                      <p>3</p>
                    </td>
                    <td rowSpan={5}>
                      <p>The Making of a Post Pandemic Professional</p>
                    </td>
                    <td colSpan={3} rowSpan={5}>
                      <p>28-May-21</p>
                      <br />
                    </td>
                    <td colSpan={2}>
                      <p>Soham Wagh</p>
                    </td>
                    <td colSpan={2}>
                      <p>GlaxoSmithKline</p>
                    </td>
                    <td colSpan={2}>
                      <p>Pharmaceutical Sales and Marketing Professional</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Priya Rajani</p>
                    </td>
                    <td colSpan={2}>
                      <p>Citi</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        Director, North America Corporate Client Strategy Head
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mandar Borkar</p>
                    </td>
                    <td colSpan={2}>
                      <p>INDOCO REMEDIES LTD</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        CFO &amp; Senior Vice President (Finance, IT &amp;
                        Distribution)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Vibhuti Lall</p>
                    </td>
                    <td colSpan={2}>
                      <p>Advance Auto Parts</p>
                    </td>
                    <td colSpan={2}>
                      <p>India Site HR Leader</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Vinay Trivedi</p>
                    </td>
                    <td colSpan={2}>
                      <p>Tone Tag</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head Human Resources</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td rowSpan={5}>
                      <p>4</p>
                    </td>
                    <td rowSpan={5}>
                      <p>Employment challenges post covid19 </p>
                    </td>
                    <td colSpan={3} rowSpan={5}>
                      <p>18-Jul-20</p>
                    </td>
                    <td colSpan={2}>
                      <p>Jaspreet Singh</p>
                    </td>
                    <td colSpan={2}>
                      <p>Randstad Hyderabad</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        Vice President - Professionals Search &amp; Selection
                        and Perm+
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Kundan Kumar</p>
                    </td>
                    <td colSpan={2}>
                      <p>GlaxoSmithKline Pharmaceutical(Malaysia)</p>
                    </td>
                    <td colSpan={2}>
                      <p>HR Lead</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Debashish Gosh</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        Berkadia (A Berkshire Hathaway and Jefferies Financial
                        Services Co)
                      </p>
                    </td>
                    <td colSpan={2}>
                      <p>Vice President and India HR Head</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Dinesh Menon</p>
                    </td>
                    <td colSpan={2}>
                      <p>Signode India Limited</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head - HR, Metals Business</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ramesh G</p>
                    </td>
                    <td colSpan={2}>
                      <p>Olam India</p>
                    </td>
                    <td colSpan={2}>
                      <p>General Manager - HR</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td rowSpan={4}>
                      <p>5</p>
                    </td>
                    <td rowSpan={4}>
                      <p>
                        Developing Entrepreneurial Orientation in the Uncertain
                        World – Strategies for Survival
                      </p>
                    </td>
                    <td colSpan={3} rowSpan={4}>
                      <p>04-Jul-20</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr. Vinay Kumar</p>
                    </td>
                    <td colSpan={2}>
                      <p>Datawise</p>
                    </td>
                    <td colSpan={2}>
                      <p>CEO</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Rajesh Padinjaremadam</p>
                    </td>
                    <td colSpan={2}>
                      <p>Rapid Value</p>
                    </td>
                    <td colSpan={2}>
                      <p>CEO &amp; Co-Founder</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Prasan Shah</p>
                    </td>
                    <td colSpan={2}>
                      <p>Stone Plus Enterprises Pvt Ltd</p>
                    </td>
                    <td colSpan={2}>
                      <p>CEO and Founder</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Anurag Palla</p>
                    </td>
                    <td colSpan={2}>
                      <p>Stuzee</p>
                    </td>
                    <td colSpan={2}>
                      <p>Entreprenuer</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td rowSpan={4}>
                      <p>6</p>
                    </td>
                    <td rowSpan={4}>
                      <p>
                        Navigating through Covid 19 situation - Perspective from
                        business leaders
                      </p>
                    </td>
                    <td colSpan={3} rowSpan={4}>
                      <p>20-Jun-20</p>
                    </td>
                    <td colSpan={2}>
                      <p>Dr. JC Wandemberg</p>
                    </td>
                    <td colSpan={2}>
                      <p>Sustainable Systems International</p>
                    </td>
                    <td colSpan={2}>
                      <p>President &amp; Founder</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Hari Thalapalli</p>
                    </td>
                    <td colSpan={2}>
                      <p>Call Health</p>
                    </td>
                    <td colSpan={2}>
                      <p>CEO</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Vijay Sivaram</p>
                    </td>
                    <td colSpan={2}>
                      <p>QuessCorp</p>
                    </td>
                    <td colSpan={2}>
                      <p>CEO</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Hitesh Kakkar</p>
                    </td>
                    <td colSpan={2}>
                      <p>CPM India</p>
                    </td>
                    <td colSpan={2}>
                      <p>COO</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td rowSpan={4}>
                      <p>7</p>
                    </td>
                    <td rowSpan={4}>
                      <p>Digital Imperatives for Businesses</p>
                    </td>
                    <td colSpan={3} rowSpan={4}>
                      <p>06-Jun-20</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr.Sairam Vedam</p>
                    </td>
                    <td colSpan={2}>
                      <p>Innominds</p>
                    </td>
                    <td colSpan={2}>
                      <p>Global CMO</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Anand Srivastava</p>
                    </td>
                    <td colSpan={2}>
                      <p>Landis+Gyr</p>
                    </td>
                    <td colSpan={2}>
                      <p>General Manager-Marketing </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms.Jyothsna Kuchimanchi</p>
                    </td>
                    <td colSpan={2}>
                      <p>Cognizant</p>
                    </td>
                    <td colSpan={2}>
                      <p>Sr.Director, Strategy and Consulting</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Viren Mehta</p>
                    </td>
                    <td colSpan={2}>
                      <p>JLL</p>
                    </td>
                    <td colSpan={2}>
                      <p>Sr,Director and Head Transactions</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td rowSpan={4}>
                      <p>8</p>
                    </td>
                    <td rowSpan={4}>
                      <p>Challenges in Developing Leadership </p>
                    </td>
                    <td colSpan={3} rowSpan={4}>
                      <p>24-Jan-20</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr.Arnab Banerjee</p>
                    </td>
                    <td colSpan={2}>
                      <p>Infosys Limited</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        Principal Consultant, Enterprise Application Services
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Deepak Gupta </p>
                    </td>
                    <td colSpan={2}>
                      <p>KARVY Group</p>
                    </td>
                    <td colSpan={2}>
                      <p>CHRO &amp; Vice President Human Resources </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Narayan Rao</p>
                    </td>
                    <td colSpan={2}>
                      <p>NCC Ltd</p>
                    </td>
                    <td colSpan={2}>
                      <p>Vice President (HR) </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Richie J Joseph</p>
                    </td>
                    <td colSpan={2}>
                      <p> </p>
                    </td>
                    <td colSpan={2}>
                      <p>Leadership Development Consultant</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td rowSpan={5}>
                      <p>9</p>
                    </td>
                    <td rowSpan={5}>
                      <p>Corporate expectation from management graduates</p>
                    </td>
                    <td colSpan={3} rowSpan={5}>
                      <p>28-Jun-19</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr. Arka C</p>
                    </td>
                    <td colSpan={2}>
                      <p>Open Text</p>
                    </td>
                    <td colSpan={2}>
                      <p>Sr. Director-HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Pradeep Kumar K, </p>
                    </td>
                    <td colSpan={2}>
                      <p>Coromandel International</p>
                    </td>
                    <td colSpan={2}>
                      <p>VP-HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>
                        Ms. Ayn Wesely, State Street Corporate Services (Mumbai)
                        Pvt. Ltd,{" "}
                      </p>
                    </td>
                    <td colSpan={2}>
                      <p>India Transition &amp; Project Management</p>
                    </td>
                    <td colSpan={2}>
                      <p>AVP</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Prashant Girey, </p>
                    </td>
                    <td colSpan={2}>
                      <p>Airtel</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head – Sales &amp; Marketing</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Vivek Gautam, Business </p>
                    </td>
                    <td colSpan={2}>
                      <p>UHG</p>
                    </td>
                    <td colSpan={2}>
                      <p>Analyst</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td rowSpan={8}>
                      <p>10</p>
                    </td>
                    <td rowSpan={8}>
                      <p>
                        Contemporary Challenges in Pharma and Healthcare Sector
                        Panel 1: Leading Diversity Panel 2: New Paradigm in
                        Digital Marketing &amp; Analytics
                      </p>
                    </td>
                    <td colSpan={3} rowSpan={8}>
                      <p>11-Jan-19</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr. Ram</p>
                    </td>
                    <td colSpan={2}>
                      <p>L&amp;D Hetero Drugs</p>
                    </td>
                    <td colSpan={2}>
                      <p>Sr. GM, </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Parasuraman</p>
                    </td>
                    <td colSpan={2}>
                      <p>Dr. Reddys Lab</p>
                    </td>
                    <td colSpan={2}>
                      <p>Global Head, R&amp;D, </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Mahendra Pratap Singh</p>
                    </td>
                    <td colSpan={2}>
                      <p>Napier</p>
                    </td>
                    <td colSpan={2}>
                      <p>Global Head(HR)</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Dr. B. Aparna Reddy </p>
                    </td>
                    <td colSpan={2}>
                      <p>Therapiva &amp; Laxai Life Sciences</p>
                    </td>
                    <td colSpan={2}>
                      <p>Chief People Officer,</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Phani Mitra</p>
                    </td>
                    <td colSpan={2}>
                      <p>Dr. Reddys Lab</p>
                    </td>
                    <td colSpan={2}>
                      <p>VP, Analytics &amp; Strategy</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Rajesh Kr. Singh</p>
                    </td>
                    <td colSpan={2}>
                      <p>Hinduja Tech</p>
                    </td>
                    <td colSpan={2}>
                      <p>GM</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Sankara V. Krishna Prasad</p>
                    </td>
                    <td colSpan={2}>
                      <p>Cito Healthcare</p>
                    </td>
                    <td colSpan={2}>
                      <p>Founder &amp; CEO</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Soham Wagh</p>
                    </td>
                    <td colSpan={2}>
                      <p>GlaxoSmithKline</p>
                    </td>
                    <td colSpan={2}>
                      <p>Global Marketing Lead</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={5}>
                      <p>11</p>
                    </td>
                    <td rowSpan={5}>
                      <p>Managing Disruptive Technologies</p>
                    </td>
                    <td colSpan={3} rowSpan={5}>
                      <p>21-Dec-18</p>
                    </td>
                    <td colSpan={2}>
                      <p>Jayesh Ranjan</p>
                    </td>
                    <td colSpan={2}>
                      <p>Government</p>
                    </td>
                    <td colSpan={2}>
                      <p>IT Secretary</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Kurt Stockli</p>
                    </td>
                    <td colSpan={2}>
                      <p>President</p>
                    </td>
                    <td colSpan={2}>
                      <p>Glenmark</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Vijay Chandru</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director</p>
                    </td>
                    <td colSpan={2}>
                      <p>Strand Life Sciences</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ashok Das</p>
                    </td>
                    <td colSpan={2}>
                      <p>CEO</p>
                    </td>
                    <td colSpan={2}>
                      <p>SunMoksha</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Nixon Patel</p>
                    </td>
                    <td colSpan={2}>
                      <p>CEO</p>
                    </td>
                    <td colSpan={2}>
                      <p>Quantum Labs</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>12</p>
                    </td>
                    <td>
                      <p>Making difficult conversations easy with EI</p>
                    </td>
                    <td colSpan={3}>
                      <p>30-Nov-18</p>
                    </td>
                    <td colSpan={2}>
                      <p>Ms. Urvashi Baid </p>
                    </td>
                    <td colSpan={2}>
                      <p>CCI- Indian Women Networ</p>
                    </td>
                    <td colSpan={2}>
                      <p> </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>13</p>
                    </td>
                    <td>
                      <p>
                        Fundamentals of HR being applied in the industry setup
                      </p>
                    </td>
                    <td colSpan={3}>
                      <p>19-Nov-18</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr. Mahendra Pratap Singh</p>
                    </td>
                    <td colSpan={2}>
                      <p>Global Head – HR, </p>
                    </td>
                    <td colSpan={2}>
                      <p>Napier Healthcare</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>14</p>
                    </td>
                    <td>
                      <p>Successful Career: Investment Bankers’ Perspectives</p>
                    </td>
                    <td colSpan={3}>
                      <p>06-Oct-18 </p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr. Hemant Sethia</p>
                    </td>
                    <td colSpan={2}>
                      <p>Vice President </p>
                    </td>
                    <td colSpan={2}>
                      <p>Credit Suisse Services (India) Private Limited</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>15</p>
                    </td>
                    <td>
                      <p>Overview of Indian Pharmaceutical Industry</p>
                    </td>
                    <td colSpan={3}>
                      <p>01-Aug-18</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr. Naveen Kumar </p>
                    </td>
                    <td colSpan={2}>
                      <p>Group Head, </p>
                    </td>
                    <td colSpan={2}>
                      <p>CARE Ratings Ltd</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={5}>
                      <p>16</p>
                    </td>
                    <td rowSpan={5}>
                      <p>Trends in Business Analytics</p>
                    </td>
                    <td colSpan={3} rowSpan={5}>
                      <p>27-Jul-18</p>
                    </td>
                    <td colSpan={2}>
                      <p> Mr Ramesh Kumar Koona</p>
                    </td>
                    <td colSpan={2}>
                      <p>Cygnesia Animations Pvt. Ltd.</p>
                    </td>
                    <td colSpan={2}>
                      <p>Founder and Director</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p> Mr. Sharat Konatham</p>
                    </td>
                    <td colSpan={2}>
                      <p>HEDNext</p>
                    </td>
                    <td colSpan={2}>
                      <p>Co founder</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p> Mr. Sridhar Sheshadri</p>
                    </td>
                    <td colSpan={2}>
                      <p>Spotflock</p>
                    </td>
                    <td colSpan={2}>
                      <p>Founder &amp; CEO </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p> Mr. N M Sharma</p>
                    </td>
                    <td colSpan={2}>
                      <p>Phygital Insights Pvt. Ltd</p>
                    </td>
                    <td colSpan={2}>
                      <p> Founder &amp; CEO</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Ravi Munukutla</p>
                    </td>
                    <td colSpan={2}>
                      <p> </p>
                    </td>
                    <td colSpan={2}>
                      <p>Independent Consultant (Data Analytics)</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={4}>
                      <p>17</p>
                    </td>
                    <td rowSpan={4}>
                      <p>Corporate expectations from Management Graduates</p>
                    </td>
                    <td colSpan={3} rowSpan={4}>
                      <p>29-Jun-18</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr. Pragathi Kumar</p>
                    </td>
                    <td colSpan={2}>
                      <p>AT&amp;T</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director HR - International HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Dinesh Kumar Murugesan</p>
                    </td>
                    <td colSpan={2}>
                      <p>DSM Chemicals </p>
                    </td>
                    <td colSpan={2}>
                      <p>Country Head - HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms.Vani Manukonda</p>
                    </td>
                    <td colSpan={2}>
                      <p>HARSCO</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director - Human Resources</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Venkatesh Palabatla </p>
                    </td>
                    <td colSpan={2}>
                      <p>GMR Group</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head - HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6}>
                      <p>18</p>
                    </td>
                    <td rowSpan={6}>
                      <p>TrailBlazers</p>
                    </td>
                    <td colSpan={3} rowSpan={6}>
                      <p>25-Nov-17</p>
                    </td>
                    <td colSpan={2}>
                      <p>Dr. Anil K Khandelwal</p>
                    </td>
                    <td colSpan={2}>
                      <p>Bank of Baroda</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        Thought Leader, Author, Member- Banks Board Bureau and
                        Former CMD
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms. Jayanthi Sampathkumar </p>
                    </td>
                    <td colSpan={2}>
                      <p>Microsoft</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        Guinness World Record Holder and Principal Engineering
                        Manager{" "}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Murali Subramanian</p>
                    </td>
                    <td colSpan={2}>
                      <p>Innovacx </p>
                    </td>
                    <td colSpan={2}>
                      <p>Former Group VP at Oracle Corporation; CEO </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms. Aruna Preetam </p>
                    </td>
                    <td colSpan={2}>
                      <p>TechMahindra</p>
                    </td>
                    <td colSpan={2}>
                      <p>Global Compensation &amp; Benefits Leader </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms. Rekha Narendra </p>
                    </td>
                    <td colSpan={2}>
                      <p>Kantar</p>
                    </td>
                    <td colSpan={2}>
                      <p>HR Director ,Global Delivery Centres &amp; OT </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. L Prabhakar </p>
                    </td>
                    <td colSpan={2}>
                      <p>ITC Ltd.</p>
                    </td>
                    <td colSpan={2}>
                      <p>VP-HR Agribusiness Division </p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={5}>
                      <p>19</p>
                    </td>
                    <td rowSpan={5}>
                      <p>Women in Supply Chain</p>
                    </td>
                    <td colSpan={3} rowSpan={5}>
                      <p>15-Dec-17</p>
                    </td>
                    <td colSpan={2}>
                      <p>Ms. Divya Medar</p>
                    </td>
                    <td colSpan={2}>
                      <p>Snackerstreet Pvt. Ltd</p>
                    </td>
                    <td colSpan={2}>
                      <p>Chef Director</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms. Malathi Sridhar</p>
                    </td>
                    <td colSpan={2}>
                      <p>Dr.Reddy’s laboratories, Generics division</p>
                    </td>
                    <td colSpan={2}>
                      <p>Heading External Manufacturing Operations</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms. Lathaa Subramanian</p>
                    </td>
                    <td colSpan={2}>
                      <p>Inogent Laboratories Ltd (A GVK-BIO Company)</p>
                    </td>
                    <td colSpan={2}>
                      <p>Associate Director- SCM </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms.Shobha Dixit</p>
                    </td>
                    <td colSpan={2}>
                      <p>ALPLA India Pvt. Ltd</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms. Tanuja Abburi </p>
                    </td>
                    <td colSpan={2}>
                      <p>NTT Data</p>
                    </td>
                    <td colSpan={2}>
                      <p>Senior Director, HR,</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={5}>
                      <p>20</p>
                    </td>
                    <td rowSpan={5}>
                      <p>Dilemma of a Management Graduate</p>
                    </td>
                    <td colSpan={3} rowSpan={5}>
                      <p>23-Jun-17</p>
                    </td>
                    <td colSpan={2}>
                      <p>Dr. Murali Padmanabhan</p>
                    </td>
                    <td colSpan={2}>
                      <p>Virtusa Polaris</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        Sr Vice President - Global Head of Talent Development
                        and India Head- Human Resources
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Sriram S.R.</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director-HR</p>
                    </td>
                    <td colSpan={2}>
                      <p>Arcesium (D.E.Shaw)</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Shameel Sharma</p>
                    </td>
                    <td colSpan={2}>
                      <p>Managing Director </p>
                    </td>
                    <td colSpan={2}>
                      <p>Kantar Group </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms.Neha Richharia</p>
                    </td>
                    <td colSpan={2}>
                      <p>Associate Director-HR </p>
                    </td>
                    <td colSpan={2}>
                      <p>Cognizant Technology Solutions </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Nihit Kumar Sharma</p>
                    </td>
                    <td colSpan={2}>
                      <p>Associate VP</p>
                    </td>
                    <td colSpan={2}>
                      <p>UBS AG </p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={5}>
                      <p>21</p>
                    </td>
                    <td rowSpan={5}>
                      <p>Industry expectations from management graduates</p>
                    </td>
                    <td colSpan={3} rowSpan={5}>
                      <p>24-Jun-16</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr.Debashis Das</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        Milagrow Human Tech &amp; President IMT Alumni
                        Association
                      </p>
                    </td>
                    <td colSpan={2}>
                      <p>CEO</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Shuddhasattwa Das</p>
                    </td>
                    <td colSpan={2}>
                      <p>Gandour India</p>
                    </td>
                    <td colSpan={2}>
                      <p>National HR Head</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Krishna Prasad Omkar</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        SumTotal Systems (Global Leader in HCM Application
                        Development)
                      </p>
                    </td>
                    <td colSpan={2}>
                      <p>Director HR </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Kiran Prasad Ivaturi</p>
                    </td>
                    <td colSpan={2}>
                      <p>ACT( Atria Convergence Technologies) </p>
                    </td>
                    <td colSpan={2}>
                      <p>GM &amp; Head HR </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms. Rajitha Singh</p>
                    </td>
                    <td colSpan={2}>
                      <p>Broadridge Financial Services</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head HR </p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={5}>
                      <p>22</p>
                    </td>
                    <td rowSpan={5}>
                      <p>TrailBlazers:Learning from the Best</p>
                    </td>
                    <td colSpan={3} rowSpan={5}>
                      <p>18-Dec-16</p>
                    </td>
                    <td colSpan={2}>
                      <p>Ms.Meera Shenoy</p>
                    </td>
                    <td colSpan={2}>
                      <p>Youth4Jobs</p>
                    </td>
                    <td colSpan={2}>
                      <p>Social change maker, Founder</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.S P Reddy</p>
                    </td>
                    <td colSpan={2}>
                      <p>EnGenius</p>
                    </td>
                    <td colSpan={2}>
                      <p>Invester &amp; Philanthropist, Founder</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Karunakara M Reddy</p>
                    </td>
                    <td colSpan={2}>
                      <p>Smaat India &amp; WalkForWater</p>
                    </td>
                    <td colSpan={2}>
                      <p>Founder</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Srikanth Bolla</p>
                    </td>
                    <td colSpan={2}>
                      <p>Bollant Industries</p>
                    </td>
                    <td colSpan={2}>
                      <p>CEO</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.P.Madhava Reddy</p>
                    </td>
                    <td colSpan={2}>
                      <p> </p>
                    </td>
                    <td colSpan={2}>
                      <p>Social Media Awareness crusader</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={8}>
                      <p>23</p>
                    </td>
                    <td rowSpan={8}>
                      <p>
                        Covering Public Policy and Business Management
                        Imperatives and Challenges
                      </p>
                    </td>
                    <td colSpan={3} rowSpan={8}>
                      <p>16-Dec-15</p>
                    </td>
                    <td colSpan={2}>
                      <p>Dr.P.K.Mohanty</p>
                    </td>
                    <td colSpan={2}>
                      <p>Former Chief Secretary, Government of A.P</p>
                    </td>
                    <td colSpan={2}>
                      <p>I.A.S (retired)</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Dr.K.Lakshminarayana</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        Director, Andhra Pradesh Skill Development Corporation
                      </p>
                    </td>
                    <td colSpan={2}>
                      <p>I.A.S (retired)</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Shri.Mohammed Abid</p>
                    </td>
                    <td colSpan={2}>
                      <p>Tata Institute of Social Sciences, Hyderabad</p>
                    </td>
                    <td colSpan={2}>
                      <p>I.A.S </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Dr.M.Gopinath Reddy</p>
                    </td>
                    <td colSpan={2}>
                      <p>CESS Hyderabad</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head, Division for Sustainable Development Studies</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Tanmay Das</p>
                    </td>
                    <td colSpan={2}>
                      <p>KSK Energy Ventrues, Hyderabad</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Chirantan Chatteree</p>
                    </td>
                    <td colSpan={2}>
                      <p>Virtusa, Hyderabad</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Dr.Alok Mishra</p>
                    </td>
                    <td colSpan={2}>
                      <p>University of Hyderabad</p>
                    </td>
                    <td colSpan={2}>
                      <p> </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Dr.Harish Srivastsava</p>
                    </td>
                    <td colSpan={2}>
                      <p>Ramky Foundation</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head, Planning &amp; Communication</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={4}>
                      <p>24</p>
                    </td>
                    <td rowSpan={4}>
                      <p>Women in Manufacturing</p>
                    </td>
                    <td colSpan={3} rowSpan={4}>
                      <p>16-Sep-15</p>
                    </td>
                    <td colSpan={2}>
                      <p>Ms. Alpa Gupta Mishra</p>
                    </td>
                    <td colSpan={2}>
                      <p>Tata Projects</p>
                    </td>
                    <td colSpan={2}>
                      <p>General Manager of Future Ready Team </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms. Geeta Jyothi</p>
                    </td>
                    <td colSpan={2}>
                      <p>
                        ITW Chemin a US MNC into manufacturing of Specialty
                        Chemicals
                      </p>
                    </td>
                    <td colSpan={2}>
                      <p>Senior Manager </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Krishna Sai</p>
                    </td>
                    <td colSpan={2}>
                      <p>Dr. Reddy’s Lab</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director, HR-FTO </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Dr. Sourabh Bhattacharya</p>
                    </td>
                    <td colSpan={2}>
                      <p>IMT Hyderabad</p>
                    </td>
                    <td colSpan={2}>
                      <p>Professor of Operations Management</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={4}>
                      <p>25</p>
                    </td>
                    <td rowSpan={4}>
                      <p>Industry expectations from management graduates.</p>
                    </td>
                    <td colSpan={3} rowSpan={4}>
                      <p>26-Jun-15</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr. Padmanabhan S</p>
                    </td>
                    <td colSpan={2}>
                      <p>Dr Reddy Laboratories</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director, HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Vipul Singh</p>
                    </td>
                    <td colSpan={2}>
                      <p>ADP</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head, HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Swaraj Mishra</p>
                    </td>
                    <td colSpan={2}>
                      <p>FactSet Research Systems India (Pvt) Limited</p>
                    </td>
                    <td colSpan={2}>
                      <p>Associate Director, HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr. Rajiv Oza</p>
                    </td>
                    <td colSpan={2}>
                      <p>Biological E Ltd</p>
                    </td>
                    <td colSpan={2}>
                      <p>VP &amp; Global Head, HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={3}>
                      <p>26</p>
                    </td>
                    <td rowSpan={3}>
                      <p>Industry Expectations from B-School Graduates</p>
                    </td>
                    <td colSpan={3} rowSpan={3}>
                      <p>15-Mar-14</p>
                    </td>
                    <td colSpan={2}>
                      <p>Dr.Kiranmayi Pendyala</p>
                    </td>
                    <td colSpan={2}>
                      <p>Advanced Micro Devices (AMD)</p>
                    </td>
                    <td colSpan={2}>
                      <p>Head HR-India</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Venkat Tulasi</p>
                    </td>
                    <td colSpan={2}>
                      <p>CSC India</p>
                    </td>
                    <td colSpan={2}>
                      <p>Vendor Manager</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Dr.Srinagesh Chatarajupalli</p>
                    </td>
                    <td colSpan={2}>
                      <p>Infosys</p>
                    </td>
                    <td colSpan={2}>
                      <p>Principal and Hyderabad STP, ETA Manager</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={4}>
                      <p>27</p>
                    </td>
                    <td rowSpan={4}>
                      <p>
                        Grooming Next-Gen Leaders-Challengers &amp; Imperatives
                      </p>
                    </td>
                    <td colSpan={3} rowSpan={4}>
                      <p>30-Aug-13</p>
                    </td>
                    <td colSpan={2}>
                      <p>Ms.Uma Rao</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mars India</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director-HR (people &amp; Organization)</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms.Preeti S Bhargava</p>
                    </td>
                    <td colSpan={2}>
                      <p>India Bulls</p>
                    </td>
                    <td colSpan={2}>
                      <p>AVP Learning and Development</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Krishna Kishore</p>
                    </td>
                    <td colSpan={2}>
                      <p>GreenKO</p>
                    </td>
                    <td colSpan={2}>
                      <p>VP-HR &amp; IR</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.K V Pratap</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mahindra satyam, Hyderabad</p>
                    </td>
                    <td colSpan={2}>
                      <p>Sr.Consultant</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={4}>
                      <p>28</p>
                    </td>
                    <td rowSpan={4}>
                      <p>
                        What students should focus on in the two years at
                        B-School
                      </p>
                    </td>
                    <td colSpan={3} rowSpan={4}>
                      <p>28-Jun-13</p>
                    </td>
                    <td colSpan={2}>
                      <p>Mr.Chirantan Chatteree</p>
                    </td>
                    <td colSpan={2}>
                      <p>Virtusa</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director &amp; Client Partner</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms.Geeta Rao Goti</p>
                    </td>
                    <td colSpan={2}>
                      <p>Husys Consulting Pvt Ltd</p>
                    </td>
                    <td colSpan={2}>
                      <p>Director</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Ms.Nirmala Garg</p>
                    </td>
                    <td colSpan={2}>
                      <p>Sutherland Global Services</p>
                    </td>
                    <td colSpan={2}>
                      <p>VP- HR</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Mr.Vijaya Pasupulati</p>
                    </td>
                    <td colSpan={2}>
                      <p>Winzest Eductech Private Limited (Moderator)</p>
                    </td>
                    <td colSpan={2}>
                      <p>CEO</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ul>
                        <li>
                          <p>MoUs with Industries (Minimum 3)</p>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <p>Yes</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive" align="center">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <p>20</p>
                    </td>
                    <td colSpan={2}>
                      <p>Best practices adopted, if any</p>
                      <p> </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol>
                        <li>
                          <p>One to One Mentoring by Industry Leaders</p>
                        </li>
                      </ol>
                      <br />
                      <p>
                        Industry Mentor Mentee Program (IM2P) is initiated by
                        IMTH to enhance industry readiness and nurture business
                        leadership among students. Industry mentors will help
                        students to hone their interpersonal skills, critical
                        thinking and problem-solving skills in real situations.
                        Through this program, final year students will be able
                        to appreciate roles, responsibilities, and challenges of
                        a particular career path in specific industry.
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol start={2}>
                        <li>
                          <p>Global Immersion</p>
                        </li>
                      </ol>
                      <br />
                      <p>
                        Students will be given opportunity to pursue global
                        immersion programs with IMT Dubai and 44+ partner
                        institutes across continents for a duration of one week
                        to a trimester.
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol start={3}>
                        <li>
                          <p>Hands on Workshops in Emerging Areas</p>
                        </li>
                      </ol>
                      <p>
                        IMTH offers hands on workshops during first year of the
                        program in the emerging areas such as programming using
                        python, blockchain technologies, advanced spreadsheet
                        modelling, personal branding, leadership lab, creativity
                        innovation workshop and design thinking.
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol start={4}>
                        <li>
                          <p>Distinguished Speaker Series</p>
                        </li>
                      </ol>
                      <br />
                      <br />
                      <p>
                        CXOs from leading corporates are invited to share their
                        business building experience with students and update
                        them about the happenings in the corporate world.
                        Students learn about the challenges that these leaders
                        had to face while achieving their goal, which gives them
                        the motivation to think out-of the box solutions.
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol start={5}>
                        <li>
                          <p>Industry Immersion</p>
                        </li>
                      </ol>
                      <br />
                      <p>
                        During the intervening summer term between the first and
                        second years, students undergo a 12 week
                        faculty-supervised internship in an organization to
                        apply the knowledge they have acquired during the first
                        year of their program and bridge the perceived gap
                        between theory and practice. The IP enables students to
                        experience the rigors of the professional environment,
                        both in terms of form and substance. It provides them
                        with opportunities to learn and practice business
                        knowledge and professional behavior.
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol start={6}>
                        <li>
                          <p>Social Immersion</p>
                        </li>
                      </ol>
                      <br />
                      <p>
                        The community outreach initiatives at IMT Hyderabad
                        started off in 2011 by PAHEL a volunteer student cell.
                        The Community Connect Cell was established in 2018, with
                        the objective of sensitizing the students towards the
                        society so as to bring about positive change in the
                        communities and address real life societal challenges.
                        The Cell has envisaged its activities under the
                        following four headings of Abhiyaan, Nirmaan, Sahayam
                        and Sambbad towards fulfilment of its Daaitva
                        (Responsibility).
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol start={7}>
                        <li>
                          <p>Industry Guided Courses</p>
                        </li>
                      </ol>
                      <br />
                      <p>
                        At IMT Hyderabad, at least 20% of every course is
                        delivered by senior executives from corporate world and
                        the rest is delivered by the faculty member in-charge.
                        This is to ensure that the courses being offered are
                        relevant and updated to meet the current as well as
                        future needs of the business world and also sensitize
                        students to the real world challenges and the best
                        practices within that function.
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol start={8}>
                        <li>
                          <p>Contemporary Domain Inputs</p>
                        </li>
                      </ol>
                      <br />
                      <p>
                        Students will pursue contemporary courses such as
                        Digital Marketing, Block Chain for Managers, Artificial
                        Intelligence &amp; Machine Learning, Forecasting
                        Analytics, FinTech, Risk Analytics, HR Analytics, Sports
                        Analytics, International Logistics &amp; Supply Chain
                        Management.
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol start={9}>
                        <li>
                          <p>Professional Certifications in Select Fields</p>
                        </li>
                      </ol>
                      <p>
                        Students are encouraged to pursue industry endorsed
                        certification programs such as KPMG Six Sigma
                        Certification, NCFM, Google Analytics.
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol start={10}>
                        <li>
                          <p>ABHYUDAY Management Orientation Program</p>
                        </li>
                      </ol>
                      <p>
                        {" "}
                        (MOP) The first term of the first year starts with the
                        Management Orientation Program (MOP). This two week
                        program’s objective is to prepare the students coming
                        from varied backgrounds, for a common experience. The
                        program also initiates classes and workshops that set
                        the tone for learning for the students
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                    <td>
                      <br />
                    </td>
                    <td>
                      <ol start={11}>
                        <li>
                          <p>Management Project</p>
                        </li>
                      </ol>
                      <p>
                        {" "}
                        The Management Project (MP) is another unique feature in
                        IMT Hyderabad curriculum which has been included to
                        ensure practice oriented learning. It spreads over two
                        terms of the second year and carries a total of six
                        credits. The objective of MP is to facilitate the
                        process of attaining a higher level of knowledge and
                        expertise in the field of study chosen by the students.
                        It will help the students to integrate the learning in
                        multiple areas and address a comprehensive question of
                        relevance to the management discipline. This also
                        inculcates the art of conducting independent inquiry and
                        evaluation which is useful both in industry and for
                        later academic pursuits. The project would be based on a
                        real-time business issue, preferably as a continuation
                        of the Internship Program work.
                      </p>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </section>

        <section
          className="placement-alliances-section py-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Swiper Carousel */}
          <PlacementAlliances />
        </section>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-slide .item {
          background: #ffffff;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s;
        }
        .swiper-slide .item:hover {
          transform: translateY(-5px);
        }
        .swiper-slide .item img {
          max-height: 80px;
          object-fit: contain;
        }

        .custom-card {
          transition: background-color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .custom-card:hover {
          background-color: #ffc107;
          border: 1px solid #03255f;
          transform: translateY(-5px);
        }

        .faculty-hero {
          background: url("./media/hero.webp");
          position: relative;
          background-size: cover;
          height: 60vh !important;
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
          margin-top: 130px;
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
          border-radius: 30px;
          background-color: #e9ecef;
          color: #333;
        }

        h3,
        h4,
        h5,
        h6 {
          font-weight: bold !important;
        }

        .table-responsive.align-center {
          display: block;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          border-spacing: 0;
          border: 1px solid #e2e2e2;
          background-color: #fff;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        .table td,
        .table th {
          border: 1px solid #e6e6e6;
          padding: 10px 12px;
          vertical-align: top;
          line-height: 1.4;
        }

        .table td p,
        .table th p {
          margin: 0;
          padding: 0;
        }

        .table.table-striped tbody tr:nth-child(odd) {
          background-color: #fafafa;
        }

        .table tbody tr:hover {
          background-color: #f5f7fa;
        }

        @media (max-width: 576px) {
          .table td,
          .table th {
            padding: 8px 10px;
            font-size: 13px;
          }
        }

        .table-bordered {
          border: 1px solid #cfcfcf;
        }

        .table-bordered td,
        .table-bordered th {
          border: 1px solid #dcdcdc;
        }

        /* Placement Alliances */
        .placement-alliances-section .subtitle {
          color: #ffc107;
        }

        .swiper-item {
          background: #ffffff;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s;
        }
        .swiper-item:hover {
          transform: translateY(-5px);
        }
        .swiper-item img {
          max-height: 80px;
          object-fit: contain;
        }

        /* Swiper Navigation */
        .placement-swiper .swiper-button-next,
        .placement-swiper .swiper-button-prev {
          color: #08317a;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placement-swiper .swiper-button-next:after,
        .placement-swiper .swiper-button-prev:after {
          font-size: 20px;
        }

        .text-overflow p {
          word-wrap: break-word;
          word-break: break-all;
          white-space: normal;
        }
    `,
        }}
      />
    </>
  );
};

export default MandatoryDisclosure;
