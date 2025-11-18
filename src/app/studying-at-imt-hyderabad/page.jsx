// app/studying/page.jsx
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";
export default function StudyingPage() {
  // -----------------------------------------------------------------
  // Initialise AOS (once, client-side only)
  // -----------------------------------------------------------------
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1200,
        once: true,
      });
    }
  }, []);

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/aboutus.webp')",
            position: 'relative',
            backgroundSize: 'cover',
            height: '60vh',
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Studying at IMT Hyderabad</h2>
          <p className="text-white">
            A community where students grow, collaborate, and lead. <br />
We cultivate thinkers and doers prepared for a future shaped by innovation and empathy.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ backgroundColor: 'rgb(22 57 119)' }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link style={{ textDecoration: 'none' }} href="/" className="text-white fw-bold">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  Studying at IMT Hyderabad
                </li>
              </ol>
            </nav>
          </div>
        </div>
    <InternationalAssociationStickyBtns/>
        {/* ===== MAIN CONTENT ===== */}
        <div className="container py-3">
          {/* Header */}
          <div className="section-header">
            <h2
              className="section-title text-center mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Studying at IMT Hyderabad
            </h2>
          </div>

          {/* ==== TABS ==== */}
          <div className="tabs-container">
            <ul className="nav nav-pills justify-content-center flex-wrap" id="pgdmTabs" role="tablist">
              {[
                { id: 'THE-PGDM-PROGRAMS', label: 'THE PGDM PROGRAMS' },
                { id: 'COURSE', label: 'COURSE LOAD' },
                { id: 'ASSESSMENT-AND-FEEDBACK', label: 'ASSESSMENT AND FEEDBACK' },
                { id: 'Term-Dates', label: 'Term Dates' },
                { id: 'Attendence', label: 'Attendence' },
                { id: 'MISSED-EVALUATIONS', label: 'MISSED EVALUATIONS' },
                { id: 'STUDENT', label: 'STUDENT ACTIVITIES' },
                { id: 'CAMPUS', label: 'CAMPUS ADDRESS' },
              ].map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`tab-button ${tab.id === 'THE-PGDM-PROGRAMS' ? 'active' : ''}`}
                    id={`${tab.id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${tab.id}`}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={tab.id === 'THE-PGDM-PROGRAMS'}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ==== TAB CONTENT ==== */}
          <div className="tab-content" id="pgdmTabContent">
            {/* ---- THE PGDM PROGRAMS ---- */}
            <div
              className="tab-pane fade show active"
              id="THE-PGDM-PROGRAMS"
              role="tabpanel"
              aria-labelledby="THE-PGDM-PROGRAMS-tab"
            >
              <div className="content-section">
                <h2
                  className="section-title text-center"
                  style={{ color: '#08317a' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  THE PGDM PROGRAMS
                </h2>
                <p>
                  IMT Hyderabad offers two-year full-time postgraduate programs called Post Graduate Diploma in
                  Management, Post Graduate Diploma in Management (Finance) and Post Graduate Diploma in Management
                  (Marketing), and a 15-month Post Graduate Diploma in Management (Executive) program. Students have the
                  option of specializing in any one or two of the following streams: Marketing, Finance &amp; Accounting,
                  Human Resource Management, Operations Management and Business Analytics &amp; Information Technology.
                  <br /><br />
                  The first year comprises of three terms (trimesters) and offers core courses compulsory for all
                  students. In the second year, also comprising of three terms, students can choose electives from
                  their preferred area of specialization(s). Exchange students usually prefer to enroll in the second
                  year of the PGDM programs.
                </p>
              </div>
            </div>

            {/* ---- COURSE LOAD ---- */}
            <div className="tab-pane fade" id="COURSE" role="tabpanel" aria-labelledby="COURSE-tab">
              <div className="content-section">
                <h2
                  className="section-title text-center"
                  style={{ color: '#08317a' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  COURSE LOAD
                </h2>
                <p>
                  The second year of the PGDM programs is the most suitable for exchange students. During the second
                  year, students are required to choose 12 elective courses amounting to 36 credits. Apart from these
                  12 courses, there is one compulsory course per term. The course in Term IV is a core course on
                  business ethics common to all students. The courses to be taken in Terms V and VI are called
                  Integrative Electives. These courses help students integrate different functional areas and view the
                  business as a holistic activity.<br /><br />
                  1 credit is equal to 10 hours of teaching. Thus, a 3-credit course comprises of 30 hours of teaching
                  (24 classroom sessions of 75 minutes’ duration).
                </p>
              </div>
            </div>

            {/* ---- ASSESSMENT AND FEEDBACK ---- */}
            <div
              className="tab-pane fade"
              id="ASSESSMENT-AND-FEEDBACK"
              role="tabpanel"
              aria-labelledby="ASSESSMENT-AND-FEEDBACK-tab"
            >
              <div className="content-section">
                <h2
                  className="section-title text-center"
                  style={{ color: '#08317a' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Program ASSESSMENT AND FEEDBACK
                </h2>
                <div className="container my-4">
                  <p>
                    IMT Hyderabad believes in the continuous assessment approach, where students are evaluated
                    through the duration of the term with feedback provided periodically. Hence a student will be in
                    a position to assess their relative performance and take measures for improvement at various
                    points in the duration of the course(s).<br />
                    The components of assessment and relative weightage for each component are decided by the
                    course instructor(s). The weights assigned to the different components for overall evaluation
                    are as follows:
                  </p>

                  <div className="table-responsive">
                    <table className="table table-bordered table-striped align-middle">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Component</th>
                          <th scope="col">Weightage range</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Class Participation<br /><small>(Case Discussions/ Presentations)</small></td>
                          <td>10 – 20 percent</td>
                        </tr>
                        <tr>
                          <td>Written Assignments</td>
                          <td>10 – 20 percent</td>
                        </tr>
                        <tr>
                          <td>Group Projects</td>
                          <td>Up to 30 percent</td>
                        </tr>
                        <tr>
                          <td>Mid-term Test</td>
                          <td>Up to 20 percent</td>
                        </tr>
                        <tr>
                          <td>Quizzes</td>
                          <td>Up to 20 percent</td>
                        </tr>
                        <tr>
                          <td>Comprehensive Examination</td>
                          <td>Up to 40 percent</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4">
                    <p>
                      <strong>Class participation:</strong> Classroom-based courses will be delivered through
                      discussion mode. Case discussions are an important pedagogic tool in almost all the
                      classroom based courses. To participate in the discussion in the class, students need to
                      prepare well. The ‘class participation’ assessment component will measure the ability of a
                      student to understand the subject and communicate it effectively by participating in
                      classroom discussions.
                    </p>
                    <p>
                      <strong>Written assignments:</strong> This includes a broad range of assessments such as
                      essays, set of open ended questions, situation analysis, and review of literature. Broadly,
                      the students’ work is assessed in terms of presentation, content, and critical judgment.
                      The precise criteria for assessment within each of the assignments will vary according to
                      the nature of the work being assessed.
                    </p>
                    <p>
                      <strong>Group project:</strong> Group projects are aimed at collaborative learning of the
                      subject while developing team work skills. A group typically comprises of 4-5 members.
                      Projects are designed in such a way that every member of the group has well defined
                      responsibilities and all group members collectively have the responsibility to compile,
                      consolidate and present their work as one single project.
                    </p>
                    <p>
                      <strong>Tests / Quizzes:</strong> One or two tests / quizzes will be conducted during the
                      course for assessing subject knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- TERM DATES ---- */}
            <div className="tab-pane fade" id="Term-Dates" role="tabpanel" aria-labelledby="Term-Dates-tab">
              <div className="content-section">
                <h2
                  className="section-title text-center"
                  style={{ color: '#08317a' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  SEMESTER DATES
                </h2>
                <p>
                  Students generally participate in the exchange program during the second year of the PGDM
                  programs. The term dates are as follows:
                </p>
                <div className="table-responsive">
                  <table className="table table-striped mb-0 d-flex justify-content-center align-items-center">
                    <tbody>
                      <tr><td>Term 1</td><td>July to September</td></tr>
                      <tr><td>Term 2</td><td>September to December</td></tr>
                      <tr><td>Term 3</td><td>December to March</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3">
                  The dates are subject to change, so please confirm the exact dates before arrival.
                </p>
              </div>
            </div>

            {/* ---- ATTENDANCE ---- */}
            <div className="tab-pane fade" id="Attendence" role="tabpanel" aria-labelledby="Attendence-tab">
              <div className="content-section">
                <h2
                  className="section-title text-center"
                  style={{ color: '#08317a' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  ATTENDANCE REQUIREMENTS
                </h2>
                <p>
                  The institute insists on regular and prompt attendance in classes. The minimum required
                  attendance for every course is 75% of the total scheduled sessions. Students who do not meet
                  this criterion will not be allowed to write the comprehensive examinations which means that
                  they will not be able to complete the course.
                </p>
              </div>
            </div>

            {/* ---- MISSED EVALUATIONS ---- */}
            <div
              className="tab-pane fade"
              id="MISSED-EVALUATIONS"
              role="tabpanel"
              aria-labelledby="MISSED-EVALUATIONS-tab"
            >
              <div className="content-section">
                <h2
                  className="section-title text-center"
                  style={{ color: '#08317a' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  MISSED EVALUATIONS
                </h2>
                <p>
                  Ideally, students should not miss any presentations, case discussions, quizzes, etc. However,
                  at the discretion of the course instructor in-charge, a student missing any of the
                  aforementioned evaluation components may be permitted to take make-up examinations, provided
                  the student had obtained prior permission for his / her absence.<br /><br />
                  Students who miss the comprehensive examinations held at the end of every semester on
                  medical grounds / exceptional situations may be permitted to take make-up examinations at
                  the discretion of the course instructor in-charge. The student should have submitted a
                  written request on or before the date of the comprehensive examination. The make-up
                  examination(s) will be conducted within a week of the completion of the last examination.
                </p>
              </div>
            </div>

            {/* ---- STUDENT ACTIVITIES ---- */}
            <div className="tab-pane fade" id="STUDENT" role="tabpanel" aria-labelledby="STUDENT">
              <div className="content-section">
                <h2
                  className="section-title text-center"
                  style={{ color: '#08317a' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  STUDENT ACTIVITIES
                </h2>
                <p>
                  IMT Hyderabad students organize various events through their clubs and committees.<br /><br />
                  Some of these events are:<br />
                  Impelz: The annual IMTH college festival<br />
                  Periodos: The annual inter-college sports competition<br />
                  Ace-connect: The annual corporate sports competition<br /><br />
                  All these events are conceptualized, designed and organized by the students. The management
                  gives them full autonomy to take decisions and showcase their creativity to the fullest.
                  This exposure provides our students with a platform to develop into all-round, socially
                  responsible and successful global managers.
                </p>
              </div>
            </div>

            {/* ---- CAMPUS ADDRESS ---- */}
            <div className="tab-pane fade" id="CAMPUS" role="tabpanel" aria-labelledby="CAMPUS">
              <div className="content-section">
                <h2
                  className="section-title text-center"
                  style={{ color: '#08317a' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  CAMPUS ADDRESS
                </h2>
                <div className="container mb-3">
                  <div className="location">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h4 className="fw-bold text-center mt-3">
                          How to reach at IMT Hyderabad Campus
                        </h4>
                        <div className="mt-3">
                          <div className="card">
                            <div className="cardbody p-3">
                              <iframe
                                className="embed-map-frame"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Institute%20of%20Management%20Technology%20Hyderabad%20Survey%20No.38%2C%20Cherlaguda%20Village%2C%20Shamshabad%20Mandal%2C%20Hyderabad%2C%20Telangana%20501218&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                style={{ height: '50vh', width: '100%' }}
                                title="IMT Hyderabad Campus Map"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==== ACCORDIONS – STUDENT ACTIVITIES & LOGISTICS ==== */}
        <div className="container py-5 px-4">
  <h2
    className="s-heading text-center mb-4"
    style={{ color: "#08317a", fontWeight: 700 }}
  >
    STUDENT ACTIVITIES &amp; LOGISTICS
  </h2>
  <div className="row g-4">
    {/* LEFT COLUMN: Visa, Weather, Vaccination, Reaching, Residence, Currency, Settling, Housing, Food */}
    <div className="col-12 col-md-6">
      <div className="accordion" id="accordionLeft">
        {/* VISA */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseVisa"
              aria-expanded="false"
              aria-controls="collapseVisa"
            >
              VISA
            </button>
          </h2>
          <div
            id="collapseVisa"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionLeft"
          >
            <div className="accordion-body">
              <p>
                It is mandatory for all exchange students to come to IMT
                Hyderabad on a student visa. IMT Hyderabad will send a letter of
                admission as soon as the nominations are received from the
                respective institute, and it will be the responsibility of the
                incoming exchange students to comply with any visa or other
                regulatory requirements.
              </p>
            </div>
          </div>
        </div>
        {/* WEATHER */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWeather"
              aria-expanded="false"
              aria-controls="collapseWeather"
            >
              WEATHER
            </button>
          </h2>
          <div
            id="collapseWeather"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionLeft"
          >
            <div className="accordion-body">
              <ul className="mb-2">
                <li>
                  <strong>June to October:</strong> It is the monsoon season.
                  Hyderabad receives 75% of its annual rainfall during this
                  period. Average temperature: ~81°F; maximum: ~88°F.
                </li>
                <li>
                  <strong>November to February:</strong> Winter season. Average
                  temperature: ~60°F; can reach up to 83°F.
                </li>
              </ul>
              <p>
                Ensure you have appropriate clothing. Light cotton clothes are
                ideal from June to October. Carry light woolens for November
                through February.
              </p>
            </div>
          </div>
        </div>
        {/* VACCINATION */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseVaccination"
              aria-expanded="false"
              aria-controls="collapseVaccination"
            >
              VACCINATION
            </button>
          </h2>
          <div
            id="collapseVaccination"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionLeft"
          >
            <div className="accordion-body">
              <p>
                Please consult with your local physician and ensure you are
                adequately vaccinated before arriving in India.
              </p>
            </div>
          </div>
        </div>
        {/* REACHING IMT HYDERABAD */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseReach"
              aria-expanded="false"
              aria-controls="collapseReach"
            >
              REACHING IMT HYDERABAD
            </button>
          </h2>
          <div
            id="collapseReach"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionLeft"
          >
            <div className="accordion-body">
              <p>
                Hyderabad has an international airport — Rajiv Gandhi
                International Airport — located near the IMT Hyderabad campus.
                Pre-paid and regular taxis are available. Alternatively, the
                International Relations Center offers a free, one-time pick-up
                service — just send your arrival details in advance to{" "}
                <code>iro@imthyderabad.edu.in</code>.<br />
                <br />
                The campus is outside the city. A taxi from the city center
                costs approximately ₹650–1000.
              </p>
            </div>
          </div>
        </div>
        {/* RESIDENCE PERMIT */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseResidence"
              aria-expanded="false"
              aria-controls="collapseResidence"
            >
              RESIDENCE PERMIT
            </button>
          </h2>
          <div
            id="collapseResidence"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionLeft"
          >
            <div className="accordion-body">
              <p>
                All foreign students staying in India for 180 days or more must
                register at the local Foreigners Regional Registration Office
                (FRRO) within 14 days of arrival. A penalty of USD 30 applies
                for late registration. Registration is not required for stays
                under 180 days.
              </p>
            </div>
          </div>
        </div>
        {/* CURRENCY EXCHANGE */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCurrency"
              aria-expanded="false"
              aria-controls="collapseCurrency"
            >
              CURRENCY EXCHANGE
            </button>
          </h2>
          <div
            id="collapseCurrency"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionLeft"
          >
            <div className="accordion-body">
              <p>
                You can exchange USD, Euro, and other major currencies at the
                airport (Weizmann Forex counter at arrivals/departures) or in
                Shamshabad (UAE Exchange). Most international ATMs have a weekly
                withdrawal limit of INR 10,000. It’s advisable to carry ₹500–600
                USD/Euro/GBP in cash upon arrival.
              </p>
            </div>
          </div>
        </div>
        {/* SETTLING DOWN */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSettling"
              aria-expanded="false"
              aria-controls="collapseSettling"
            >
              SETTLING DOWN AT IMT HYDERABAD
            </button>
          </h2>
          <div
            id="collapseSettling"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionLeft"
          >
            <div className="accordion-body">
              <p>
                Housing and food are provided on campus. A compulsory
                hospitality fee of INR 30,000 per term is payable via
                online/wire transfer. Bank details will be shared. Payment must
                be made within 15 days of arrival.
              </p>
            </div>
          </div>
        </div>
        {/* HOUSING */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHousing"
              aria-expanded="false"
              aria-controls="collapseHousing"
            >
              HOUSING
            </button>
          </h2>
          <div
            id="collapseHousing"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionLeft"
          >
            <div className="accordion-body">
              <p>
                All PGDM programs are fully residential. Separate hostels for
                men and women. Rooms include a cot, table, chair, cupboard, fan,
                and Wi-Fi. You must bring your own pillows, mattress, and linen.
                Bathrooms and toilets are shared by floor residents.
                <br />
                <br />
                Carry mosquito repellents (liquid, coils, creams) — easily
                available locally.
              </p>
            </div>
          </div>
        </div>
        {/* FOOD */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFood"
              aria-expanded="false"
              aria-controls="collapseFood"
            >
              FOOD
            </button>
          </h2>
          <div
            id="collapseFood"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionLeft"
          >
            <div className="accordion-body">
              <p>
                A common dining hall serves vegetarian and non-vegetarian meals
                (3x/week) four times daily. Food is a blend of North and South
                Indian cuisines — often spicy. A cafeteria is open 9am–11pm,
                serving tea, coffee, snacks, and beverages (payable). Meals in
                the dining hall are free. Several international restaurants are
                available in the city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* RIGHT COLUMN: Computer Labs, Water, Library, Other Facilities, Groceries, Textbooks, Banks, Insurance, Medical */}
    <div className="col-12 col-md-6">
      <div className="accordion" id="accordionRight">
        {/* COMPUTER LABS */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseComputerLabs"
              aria-expanded="false"
              aria-controls="collapseComputerLabs"
            >
              COMPUTER LABS
            </button>
          </h2>
          <div
            id="collapseComputerLabs"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionRight"
          >
            <div className="accordion-body">
              <p>
                The Computational Resource Centre (CRC) is equipped with
                state-of-the-art computers and software. The institute has a
                dedicated 50 MBPS internet connection. Access is available 24/7.
                CRC is open Monday–Saturday, 9:30 AM – 8:30 PM.
              </p>
            </div>
          </div>
        </div>
        {/* DRINKING WATER */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWater"
              aria-expanded="false"
              aria-controls="collapseWater"
            >
              DRINKING WATER
            </button>
          </h2>
          <div
            id="collapseWater"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionRight"
          >
            <div className="accordion-body">
              <p>
                Use bottled water during your first few days. Campus water
                dispensers provide filtered potable water, but it may take time
                to adjust. Reliable brands: Bisleri, Bailey, Aqua Fina, Kinley.
                <br />
                <br />
                <strong>Note:</strong> Tap water in bathrooms is NOT potable.
              </p>
            </div>
          </div>
        </div>
        {/* LIBRARY */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLibrary"
              aria-expanded="false"
              aria-controls="collapseLibrary"
            >
              LIBRARY
            </button>
          </h2>
          <div
            id="collapseLibrary"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionRight"
          >
            <div className="accordion-body">
              <p>
                The Learning Resource Centre (LRC) has 12,159+ books (7,310+
                titles), 47 national journals, 10 international journals, 21
                business magazines, and 8 newspapers. Subscriptions include
                EBSCO, ABI, Emerald, Capitaline, EMIS, and Harvard Business
                Cases. Open Monday–Friday, 9:30 AM – 8:30 PM.
              </p>
            </div>
          </div>
        </div>
        {/* OTHER FACILITIES */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFacilities"
              aria-expanded="false"
              aria-controls="collapseFacilities"
            >
              OTHER FACILITIES ON CAMPUS
            </button>
          </h2>
          <div
            id="collapseFacilities"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionRight"
          >
            <div className="accordion-body">
              <p>
                Photocopying and printing (nominal charge)
                <br />
                Courier and mail services
                <br />
                Gym (treadmills, cycling, weightlifting)
                <br />
                Sports: Basketball, Table Tennis, Cricket, Football, Tennis
              </p>
            </div>
          </div>
        </div>
        {/* FRUITS / VEGETABLES */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseGroceries"
              aria-expanded="false"
              aria-controls="collapseGroceries"
            >
              FRUITS / VEGETABLES AND GENERAL SUPPLIES
            </button>
          </h2>
          <div
            id="collapseGroceries"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionRight"
          >
            <div className="accordion-body">
              <p>
                Fresh fruits, vegetables, and groceries are available in
                Shamshabad — the nearest market. Students and the International
                Relations Office are happy to help you locate stores and
                specialty items.
              </p>
            </div>
          </div>
        </div>
        {/* TEXTBOOKS */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTextbooks"
              aria-expanded="false"
              aria-controls="collapseTextbooks"
            >
              TEXTBOOKS
            </button>
          </h2>
          <div
            id="collapseTextbooks"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionRight"
          >
            <div className="accordion-body">
              <p>
                All textbooks and course materials are provided by IMT Hyderabad
                at no extra cost.
              </p>
            </div>
          </div>
        </div>
        {/* BANKS & CURRENCY */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBanks"
              aria-expanded="false"
              aria-controls="collapseBanks"
            >
              BANKS AND CURRENCY EXCHANGE
            </button>
          </h2>
          <div
            id="collapseBanks"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionRight"
          >
            <div className="accordion-body">
              <p>
                An ATM is available on campus for emergencies. Several state and
                private banks have branches in Shamshabad. Most international
                ATMs cap withdrawals at INR 10,000 per transaction. Carry
                ₹200–300 USD/Euro/GBP in cash on arrival.
              </p>
            </div>
          </div>
        </div>
        {/* MEDICAL INSURANCE */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseInsurance"
              aria-expanded="false"
              aria-controls="collapseInsurance"
            >
              MEDICAL INSURANCE
            </button>
          </h2>
          <div
            id="collapseInsurance"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionRight"
          >
            <div className="accordion-body">
              <p>
                It is strongly recommended that all exchange students have
                health insurance. This ensures cashless treatment in case of
                illness or accident. While not mandatory, having coverage is
                essential for peace of mind.
              </p>
            </div>
          </div>
        </div>
        {/* MEDICAL FACILITIES */}
        <div className="accordion-item border-0 shadow-sm mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-warning text-dark fw-bold shadow-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseMedical"
              aria-expanded="false"
              aria-controls="collapseMedical"
            >
              MEDICAL FACILITIES ON CAMPUS
            </button>
          </h2>
          <div
            id="collapseMedical"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionRight"
          >
            <div className="accordion-body">
              <p>
                The campus has a medical center. A doctor is available
                Monday–Friday: 7:00–8:30 AM and 5:00–6:30 PM. On weekends:
                8:00–9:30 AM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* ===== ALL ORIGINAL STYLES (preserved 1:1) ===== */}
  <style
  dangerouslySetInnerHTML={{
    __html: `
      body {
        background-color: #f5f7fa;
        color: #333;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .container {
        max-width: 1200px;
      }

      .tabs-container {
        padding: 1.5rem;
        border-radius: 12px;
        margin-bottom: 2rem;
      }

      .tab-button {
        border: none;
        border-radius: 50px;
        padding: 12px 28px;
        margin: 0 8px 12px;
        background: #e0e0e0;
        color: #000;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      }

      .tab-button:hover {
        background: #d0d0d0;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }

      .tab-button.active {
        background: #FFC107;
        color: #000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      .tab-content {
        background: white;
        border-radius: 12px;
        padding: 2.5rem;
        box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        border: 1px solid #eee;
      }

      .faculty-hero {
        background: url('/media/hero.webp');
        position: relative;
        background-size: cover;
        height: 50vh;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.3);
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
        color: #fff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390D9;
        color: #fff;
        transform: translateY(-3px);
      }

      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000 !important;
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
        background: #e9ecef;
        border-radius: 30px;
        color: #333;
      }
    `,
  }}
/>

      </section>
    </>
  );
}
