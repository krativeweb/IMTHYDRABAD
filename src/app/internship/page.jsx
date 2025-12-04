"use client";

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const SummerInternships = () => {
  useEffect(() => {
    // Initialize AOS after mount
    const initAOS = async () => {
      if (typeof window !== 'undefined') {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 1200,
          once: true,
        });
      }
    };
    initAOS();

    // Ensure Bootstrap is loaded

  }, []);

  return (
    <div className="summer-internships-page">
      {/* Note: Replace with <Navbar /> component */}
      {/* <Navbar /> */}

      {/* Faculty Section */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h2 className="display-5 fw-bold mb-2">Summer Internships</h2>
            <p className="text-white">
             Learning through experience, leading through insight.
            <br/>
Our summer internships integrate classroom knowledge with real-world practice, building confidence and competence in every student.

            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  Summer Internships
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Summer Internship Tabs Section */}
      <section id="Campus-Placements" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <h2 className="section-title text-center mb-4">Campus Placements (Summer Internship)</h2>

          {/* Tabs Navigation */}
          <ul className="nav nav-pills justify-content-center mb-4" id="Campus-PlacementsTabs" role="tablist">
            <li className="nav-item mx-1 mb-2" role="presentation">
              <button
                className="nav-link active"
                id="head-tab"
                data-bs-toggle="pill"
                data-bs-target="#head"
                type="button"
                role="tab"
                aria-controls="head"
                aria-selected="false"
              >
                Head CRO Message
              </button>
            </li>
            <li className="nav-item mx-1 mb-2" role="presentation">
              <button
                className="nav-link "
                id="Internship-tab"
                data-bs-toggle="pill"
                data-bs-target="#Internship"
                type="button"
                role="tab"
                aria-controls="Internship"
                aria-selected="true"
              >
                Internship Program
              </button>
            </li>
            
            <li className="nav-item mx-1 mb-2" role="presentation">
              <button
                className="nav-link"
                id="Procedure-tab"
                data-bs-toggle="pill"
                data-bs-target="#Procedure"
                type="button"
                role="tab"
                aria-controls="Procedure"
                aria-selected="false"
              >
                Internship Procedure
              </button>
            </li>
            <li className="nav-item mx-1 mb-2" role="presentation">
              <button
                className="nav-link"
                id="student-tab"
                data-bs-toggle="pill"
                data-bs-target="#student"
                type="button"
                role="tab"
                aria-controls="student"
                aria-selected="false"
              >
                Students Committees for Placements
              </button>
            </li>
            <li className="nav-item mx-1 mb-2" role="presentation">
              <button
                className="nav-link"
                id="Recruiters-tab"
                data-bs-toggle="pill"
                data-bs-target="#Recruiters"
                type="button"
                role="tab"
                aria-controls="Recruiters"
                aria-selected="false"
              >
                Recruiters Guide
              </button>
            </li>
            <li className="nav-item mx-1 mb-2" role="presentation">
              <button
                className="nav-link"
                id="report-tab"
                data-bs-toggle="pill"
                data-bs-target="#report"
                type="button"
                role="tab"
                aria-controls="report"
                aria-selected="false"
              >
                Internship Reports
              </button>
            </li>
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link"
                id="Contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#Contact"
                type="button"
                role="tab"
                aria-controls="Contact"
                aria-selected="false"
              >
                Contact Us
              </button>
            </li>
          </ul>

          <hr className="my-4" />

          {/* Tab Content */}
          <div className="tab-content card bg-light p-4">
            {/* Internship Program Tab */}
            <div className="tab-pane fade" id="Internship" role="tabpanel" aria-labelledby="Internship-tab">
              <h4 className="fw-semibold mb-3 text-center section-subtitle">Internship Program (IP)</h4>
              <p className="fs-6 lh-lg mb-3">
                Internship program (IP) is an integral part of IMT's Post Graduate Program in Management. This educational innovation seeks to link industry experience with collegiate instruction. The objectives of IP are to
              </p>
              <div className="crs_list mb-3">
                <ul className="mb-0">
                  <li>Enable students acquire learning by applying the knowledge and skills they possess in unfamiliar, open-ended real life situations</li>
                  <li>Facilitate students to create value for themselves, internship organizations and the institute.</li>
                </ul>
              </div>
              <p className="fs-6 lh-lg mb-4">
                These objectives are achieved by bringing the workplace reality into the process of education. IP creates the required setting for experiential and cooperative learning and education, by providing students with an opportunity to work on relevant internships, under the guidance of professional experts and under the supervision of faculty. Consequently, IP serves as a platform that facilitates and promotes partnership and intellectual exchange between academia and industry.
              </p>

              <h4 className="fw-semibold mb-3 text-center section-subtitle">Key dimensions of the Internship Program</h4>
              <div className="crs_list mb-4">
                <ul className="mb-0">
                  <li>Systematic linkage between the institute and industry</li>
                  <li>Integral part of the curriculum</li>
                  <li>Student involvement in real-life projects</li>
                  <li>Continuous Internal Evaluation system</li>
                  <li>Monitoring and evaluation by faculty member and the company guide</li>
                </ul>
              </div>

              <h4 className="fw-semibold mb-3 text-center section-subtitle">Benefits of IP</h4>
              <p className="fs-6 lh-lg mb-4">
                The strength of the IP lies in the fact that an incremental value is achieved due to the cooperation from industry, the contribution of the students, and the commitment of the institute and its faculty. Each of these stakeholders also derives enormous benefits, in addition to the shared expertise, and the participation of industry in the process of collegiate education.
              </p>

              <h4 className="fw-semibold mb-3 text-center section-subtitle">Concept of IP</h4>
              <p className="fs-6 lh-lg mb-4">
                Internship Program is of 12 weeks duration. It is offered during the summer after the students have completed three terms of course work. IP is primarily an exposure-oriented program which is graded for 6 credits.
              </p>
              <p className="fs-6 lh-lg mb-4">
                It is also to be understood that this is an Internship Program and NOT a project. While in a project, the emphasis is on the process leading to evaluation of alternatives and recommendation, in an IP the emphasis is on the appreciation of the organizational dimensions, ability to combine classroom learning to practice, work culture appreciation etc. During internship, students need to follow the policy and rules of the internship company. In other words, the intern needs to ensure employee-like behavior during the period of IP. Such behaviors shall vary across organizations and the evaluation and the consequent grades will depend on the performance of the intern in a stated or given context. Completion of IP is one of the academic pre-requisites to move into the fourth term. As it is time bound, no make-up shall be offered.
              </p>

              <h4 className="fw-semibold mb-3 text-center section-subtitle">Internship Project Identification Process</h4>
              <p className="fs-6 lh-lg mb-3">
                The first step in the planning process for IP is to prepare the list of students who are eligible to register for IP. This shall be done within a week of the announcement of the results of the first term.
              </p>
              <p className="fs-6 lh-lg mb-3">
                The next step is to ensure that an adequate number of suitable internships are available from various organizations (existing and new) to comfortably accommodate all the students. The Corporate Relations Office (CRO) shall work to ensure successful identification of internships.
              </p>
              <p className="fs-6 lh-lg mb-3">
                Students may also suggest companies and generate internships for themselves. These Internships are termed as "self-generated internships." Self-generated internships must meet the following conditions:
              </p>
              <div className="crs_list mb-3">
                <ul className="mb-0">
                  <li>The company must offer a minimum stipend of Rs. 10,000/-</li>
                  <li>The location of the project needs to be approved by the Head-Corporate Relations keeping in view the logistic feasibility and availability of faculty guides during the Internship Program</li>
                  <li>Feasibility of internship projects needs to be approved by Head-Corporate Relations and Dean (Academics)</li>
                  <li>The offer letter or acceptance form (Annexure A3) filled by the company where the project has been identified is to be submitted to the Head-Corporate Relations on or before a threshold date that shall be announced by the CRO. Internship Projects identified by students beyond this date will not be accepted.</li>
                </ul>
              </div>

              <h4 className="fw-semibold mb-3 text-center section-subtitle">Internship Project Profiles</h4>
              <p className="fs-6 lh-lg mb-3">
                As the objectives of IP are manifold, the internships that are generated should reflect such a purpose. A set of guidelines are indicated below which should be borne in mind by students / Corporate Relations Office while interacting with organizations for IPs.
              </p>
              <div className="crs_list mb-4">
                <ul className="mb-0">
                  <li>Will the assignment give the intern an opportunity to experience work life?</li>
                  <li>Is the assignment designed in such a way that it benefits the company, the intern and the institute?</li>
                  <li>Does the assignment lend itself to a multi-discipline platform?</li>
                  <li>Does the assignment give scope for application learning?</li>
                  <li>Does the internship provide for long-term relationship between the company and the institute?</li>
                </ul>
              </div>

              <h4 className="fw-semibold mb-3 text-center section-subtitle">Academic Prerequisites for Internships</h4>
              <p className="fs-6 lh-lg mb-4">
                Students with academic afflictions will not be allowed to pursue internships without the recommendations of the Academic Counseling Committee.
              </p>

              <h4 className="fw-semibold mb-3 text-center section-subtitle">Internship Projects Selection / Allotment and Communication Process</h4>
              <p className="fs-6 lh-lg mb-3">
                Companies will be invited to the campus to conduct a selection process for prospective students. Alternatively, companies may select from the shortlisted CVs based on criteria stipulated by them. Final selections will be communicated by the CRO by formally assigning the internships.
              </p>
              <p className="fs-6 lh-lg mb-3">
                Assigning IPs will be done through a dynamic database. This database will be periodically updated with the profile of the assignment, company and other details of the offer from the company and the available students from the institute. As and when allocation of students is finalized, the student will not be allowed to appear for further processes with reference to other IP assignments. A final IP allotment list shall be released by the CRO by first week of February.
              </p>

              <h4 className="fw-semibold mb-3 text-center section-subtitle">Progress & Evaluation</h4>
              <p className="fs-6 lh-lg mb-3">
                The Internship Program starts with the registration of students through the Initial Information Report (IIR) in consultation with faculty guide(s). The IIR is designed to gather basic information about the organization, company guide and the project.
              </p>
              <p className="fs-6 lh-lg mb-3">
                Students' progress is evaluated in three stages. Evaluations shall be done by both the company guide and the faculty guide. The components of IP assessment are Seminars, Project Reports and Project Diary.
              </p>
              <p className="fs-6 lh-lg mb-3">
                In Stage 1, a student should submit a proposed action plan of the study undertaken. The student is evaluated on Project Proposal and Project Diary by the faculty guide (by week 4). In Stage 2, the student is evaluated on Project Diary, Seminar and Interim Project Report. The student sends / updates / submits the Project Diary to the faculty guide (continuous evaluation), and he / she gives a seminar to the faculty guide. He / she submits a Project Report both to the faculty guide and the company guide (by week 8). In Stage 3, the final report should be submitted in the last week of the Internship Program. The summary of the assessment pattern is given in Table 5 below.
              </p>
              <p className="fs-6 lh-lg mb-3">
                An average of scores is arrived at and an award sheet is prepared by the Faculty guide. A letter grade 'A+' or 'A' or 'B+' or 'B' or 'C+' or 'C' or 'D' or 'E' is awarded by the faculty guide by following the absolute grading system as per the cutoffs suggested by the examination committee.
              </p>

              {/* Table Image */}
              <div className="row justify-content-center my-4">
                <div className="col-12 col-md-8">
                  <div className="mb-3 text-center">
                    <h4 className="mb-2 section-subtitle">Table 5: Summary of Assessment in Internship Program 2025</h4>
                    <img src="/images/t3.jpg" className="img-fluid" alt="Table 5: Summary of Assessment in Internship Program 2025" />
                  </div>
                </div>
              </div>

              <p className="fs-6 lh-lg mb-3"><strong>Important Note:</strong></p>
              <p className="fs-6 lh-lg mb-4">
                In cases where the intern may have to withdraw from the IP, the following procedure will be followed:
              </p>
              <div className="crs_list mb-4">
                <ul className="mb-0">
                  <li>If the IP has to be dropped before the Stage '1', then the student will have to do MTS in the campus.</li>
                  <li>If the problem occurs between Stage 1 and Stage 3, then an MTS overload has to be taken during terms IV and V.</li>
                  <li>In case of students' unprofessional behavior / indiscipline during the internship, the faculty guide has the discretion to terminate the IP in consultation with the Director. The student will have to complete the MTS (see next section) in the subsequent summer term.</li>
                </ul>
              </div>
            </div>

            {/* Head CRO Message Tab */}
            <div className="tab-pane fade show active" id="head" role="tabpanel" aria-labelledby="head-tab">
              <img src="/media/imt-prasanth.webp" className="profile-img img-fluid" alt="Prakash Pathak" />
              <h4 className="fw-semibold mb-3 text-center section-subtitle">Head CRO Message</h4>
              <p className="inv-txt">
                Our students would spend 12 weeks in corporates as an intern through the Summer Internship Program (SIP). We have a well laid policy for our Summer Internship Program. Before placing our students for the summer internship, we screen the profiles offered to them. This ensures that all the stakeholders, such as students, corporate, and the institute, benefit from the SIP. Since we offer internships for a span of 12 weeks, our students are able to internalize the roles offered to them and create value for the internship organizations.
              </p>
              <p className="inv-txt">
                Our batch of 2024-26 consists of students from diversified backgrounds, from engineering, commerce, management, science, literature, and others. Most of the students have work experience as well. These students are exposed to different functional areas of management during their first year of the program, which would enable the students to apply the knowledge and skills they possess in corporate world.
              </p>
              <p className="inv-txt">
                I invite corporates to recruit our students for summer internship placement. We begin our SIP process during November of every year. We expect a mutually beneficial value creation through the summer internship program.
              </p>
              <p className="inv-txt">
                Warm Regards <br /> Prakash Pathak <br /> Head - Corporate Relations
              </p>
            </div>

            {/* Internship Procedure Tab */}
            <div className="tab-pane fade" id="Procedure" role="tabpanel" aria-labelledby="Procedure-tab">
              <div className="stage_sec">
                <div className="table_sec fee_s text-center">
                  <img src="/media/internship-pocedure25.png" className="img-fluid" alt="Internship Procedure 2025" />
                </div>
              </div>
            </div>

            {/* Students Committees Tab */}
            <div className="tab-pane fade" id="student" role="tabpanel" aria-labelledby="student-tab">
              <h4 className="fw-semibold mb-4 text-center section-subtitle">Students Committees For Placements</h4>
              <p>
                SCOP at IMT Hyderabad abbreviates as "Student Committee of Placements" and is an integral part of the Placements Team. The committee acts as a bridge between the students and the Corporate Relations Group and also between the Institute and corporates via campus engagement activities like leadership series, practitioner sessions and preplacement talks. The committee is responsible for smooth conduction of summer and final placement process across the two batches. In addition, the committee is also looked upon for framing the Placements guidelines and providing the best student and job opportunity fit. The Student Committee of Placements works under the motto "One for all and All for one"
              </p>
              <table className="table table-bordered text-center mb-0">
                <thead>
                  <tr>
                    <th>S. No</th>
                    <th>SCOP Committee Members</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { no: 1, name: 'Aditya Shankar' },
                    { no: 2, name: 'Aishwarya Ponugoti' },
                    { no: 3, name: 'Akhil Thulasi Das' },
                    { no: 4, name: 'Akshay Pathania' },
                    { no: 5, name: 'Ankur Srivastava' },
                    { no: 6, name: 'Bhulakshmi Karri' },
                    { no: 7, name: 'Bipasha Guha' },
                    { no: 8, name: 'Dharmesh Babu' },
                    { no: 9, name: 'Garima Sharma' },
                    { no: 10, name: 'Gauri Maheshwari' },
                    { no: 11, name: 'Harsh Sharma' },
                    { no: 12, name: 'Henna Bhat' },
                    { no: 13, name: 'Kanak Sharma' },
                    { no: 14, name: 'Ketaki Bedekar' },
                    { no: 15, name: 'Madhura Kulkarni' },
                    { no: 16, name: 'Pratham Parnami' },
                    { no: 17, name: 'R Vignesh' },
                    { no: 18, name: 'Rithika Rathi' },
                    { no: 19, name: 'Rohit Gupta' },
                    { no: 20, name: 'Shashank Jha' },
                    { no: 21, name: 'Shivani Sathaye' },
                    { no: 22, name: 'Sirisha Peddemul' },
                    { no: 23, name: 'Snigdha Sarkar' },
                    { no: 24, name: 'Tanmay Dey' },
                    { no: 25, name: 'Vaibhav Sharma' },
                  ].map((member) => (
                    <tr key={member.no}>
                      <td>{member.no}</td>
                      <td>{member.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center mt-2">
                <h4 className="text-dark">Email id: scop2025@imthyderabad.edu.in</h4>
              </div>
            </div>

            {/* Recruiters Guide Tab */}
            <div className="tab-pane fade" id="Recruiters" role="tabpanel" aria-labelledby="Recruiters-tab">
              <h4 className="fw-semibold mb-4 text-center section-subtitle">Student Committee of Placements (SCOP)</h4>
              <p className="inv-txt">
                <Link href="https://drive.google.com/file/d/19gMWjbmz6xe69NqulcQVu0trDjssKJw5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Summer Internship brochure - Institute of Management Technology, Hyderabad
                </Link>
              </p>
            </div>

            {/* Internship Reports Tab */}
            <div className="tab-pane fade" id="report" role="tabpanel" aria-labelledby="report-tab">
              <h4 className="fw-semibold mb-4 text-center section-subtitle">Internship Reports</h4>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Internship Report 2022 (Batch of 2021-23)</td>
                    <td>
                      <Link href="https://drive.google.com/file/d/1euASKNQ2_DkGCagw8pKb3Wovj-AHS4uh/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                        Click Here
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Internship Report 2021 (Batch of 2020-22)</td>
                    <td>
                      <Link href="https://drive.google.com/file/d/1F31o-FSnuAYzXHtvJ1YOm7Srs33WpXF6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Click Here
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Internship Report 2020 (Batch of 2019-21)</td>
                    <td>
                      <Link href="/assets/images/recruiters/pdf/Intenship-2019-21.pdf" target="_blank" rel="noopener noreferrer">
                        Click Here
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Internship Report 2019 (Batch of 2018-20)</td>
                    <td>
                      <Link href="/assets/images/recruiters/pdf/intenship-2018-20.pdf" target="_blank" rel="noopener noreferrer">
                        Click Here
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Internship Report 2018 (Batch of 2017-19)</td>
                    <td>
                      <Link href="/assets/images/recruiters/pdf/intenship-2016-18.pdf" target="_blank" rel="noopener noreferrer">
                        Click Here
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Internship Report 2017 (Batch of 2016-18)</td>
                    <td>
                      <Link href="/assets/images/recruiters/pdf/intenship-2016-18.pdf" target="_blank" rel="noopener noreferrer">
                        Click Here
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Contact Us Tab */}
            <div className="tab-pane fade" id="Contact" role="tabpanel" aria-labelledby="Contact-tab">
              <h4 className="fw-semibold mb-4 text-center section-subtitle">Contact Details</h4>
              <div className="table-responsive rounded-4 shadow-sm overflow-hidden mb-4">
                <table className="table table-bordered text-center mb-0">
                  <thead className="bg-warning">
                    <tr>
                      <th className="fw-bold text-dark border-0">Name</th>
                      <th className="fw-bold text-dark border-0">Designation</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="fw-medium text-dark">Mr. Prakash Pathak</td>
                      <td className="text-dark">Head - Corporate Relations</td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-dark">Mr. Murali Prasad T</td>
                      <td className="text-dark">Manager - Corporate Relations & Placements</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-center fs-6 text-dark mb-4">
                <p className="mb-2">
                  <strong>Email ID:</strong>{' '}
                  <Link href="mailto:cro@imthyderabad.edu.in" className="text-decoration-none text-dark">
                    cro@imthyderabad.edu.in
                  </Link>
                </p>
                <p className="mb-0">
                  <strong>Mobile No:</strong>{' '}
                  <Link href="tel:+919391424224" className="text-decoration-none text-dark">
                    +91 93914 24224
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <Link href="mailto:cro@imthyderabad.edu.in" className="btn btn-warning btn-lg rounded-pill fw-semibold">
                  Send Email to Corporate Relations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note: Replace with <Footer /> component */}
      {/* <Footer /> */}
<style
  dangerouslySetInnerHTML={{
    __html: `
      .summer-internships-page {
        width: 100%;
      }

      .faculty-section {
        width: 100%;
      }

      /* Hero Banner */
      .faculty-hero {
        background: url('/media/banners/pgdmmarketing.webp') no-repeat center center;
        background-size: cover;
        height: 60vh;
        position: relative;
          background-position: center !important;
      }

      .hero-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        padding-top: 150px;
      }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      /* Section Styles */
      .section-title {
        font-size: 2rem;
        font-weight: 700;
        color: #08317a;
        margin-bottom: 1.5rem;
        position: relative;
        padding-bottom: 0.5rem;
      }

      .section-title::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: #ffc107;
      }

      .section-subtitle {
        color: #08317a;
      }

      /* Tab Navigation */
      .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #333;
        transition: all 0.3s;
      }

      .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000 !important;
      }

      /* Table Styles */
      .table-responsive {
        border-radius: 1rem;
        overflow: hidden;
      }

      .table {
        margin-bottom: 0;
      }

      .table thead.bg-warning th {
        color: #000;
      }

      .crs_list ul {
        list-style-type: disc;
        padding-left: 20px;
      }

      .crs_list ol {
        padding-left: 20px;
      }

      .inv-txt {
        line-height: 1.7;
        color: #333;
      }

      .profile-img {
        float: left;
        margin: 0 1.5rem 0.5rem 0;
        width: 150px;
        height: 200px;
        object-fit: cover;
        border-radius: 0.75rem;
        border: 2px solid #000;
        box-shadow: 0 5px 15px rgba(56, 54, 51, 0.3);
      }

      .inv-txt:first-of-type {
        margin-top: 0;
      }

      /* Responsive Adjustments */
      @media (max-width: 768px) {
        .profile-img {
          float: none;
          margin: 0 auto 1rem;
          display: block;
        }

        .section-title {
          font-size: 1.7rem;
        }
      }

      @media (max-width: 576px) {
        .section-title {
          font-size: 1.5rem;
        }
      }

      /* Social Icons */
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
    `,
  }}
/>

    </div>
  );
};

export default SummerInternships;
