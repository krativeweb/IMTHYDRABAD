"use client";

import { useEffect } from "react";
import Link from "next/link";
export default function Careers() {
  useEffect(() => {
    // Initialize AOS only if available globally
    if (typeof AOS !== "undefined") {
      AOS.init({ duration: 1200, once: true });
    }
  }, []);

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('./media/banners/Group 13.jpg')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
            backgroundPosition: "center !important",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Careers</h2>
          <p className="text-white">
            A workplace that values intellect, innovation, and purpose. <br />
            Join an institution that empowers talent to shape the future of
            management education.
          </p>
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22 57 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
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
                  Careers
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ===== Main Content ===== */}
      <div className="container mt-4">
        <h2
          className="section-title text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Careers
        </h2>

        <div className="row justify-content-center">
          <div className="col-12">
            {/* Tabs */}
            <ul className="nav nav-pills" id="careersTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="guidelines-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#guidelines"
                  type="button"
                  role="tab"
                  aria-controls="guidelines"
                  aria-selected="true"
                >
                  Faculty Positions - Guidelines
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="apply-faculty-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#apply-faculty"
                  type="button"
                  role="tab"
                  aria-controls="apply-faculty"
                  aria-selected="false"
                >
                  Faculty Positions - Apply Now
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="apply-non-teaching-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#apply-non-teaching"
                  type="button"
                  role="tab"
                  aria-controls="apply-non-teaching"
                  aria-selected="false"
                >
                  Non-Teaching Positions
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="card mt-4">
              <div className="card-body">
                <div className="tab-content" id="careersTabContent">
                  {/* === TAB 1: Faculty Guidelines === */}
                  <div
                    className="tab-pane fade show active"
                    id="guidelines"
                    role="tabpanel"
                    aria-labelledby="guidelines-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <p className="mb-4">
                          Self-motivated and suitably qualified persons are
                          invited to join the vibrant team of faculty members in
                          the following areas:
                        </p>

                        <ul className="mb-4">
                          <li>Analytics &amp; IT</li>
                          <li>Decision Science</li>
                          <li>Finance &amp; Accounting</li>
                          <li>General Management</li>
                          <li>Human Resources Management</li>
                          <li>Marketing Management</li>
                          <li>Operations Management</li>
                        </ul>

                        <p className="mb-4">
                          All of the above positions require proficiency in
                          teaching, research, and industry practice. Specific
                          requirements are as follows:
                        </p>

                        <h5>Professor</h5>
                        <p className="mb-4">
                          Ph.D. or equivalent in Management or allied area, a
                          record of excellence in academics for a minimum of 10
                          years of which at least 5 years should be at the level
                          of Associate Professor; ability to interact with a
                          diverse student body and executives; and a record of
                          publications in standard refereed journals, and
                          ability to undertake research independently and guide
                          Ph.D. scholars. The candidate should have high
                          research, training, and consulting credentials.
                        </p>

                        <h5>Associate Professor</h5>
                        <p className="mb-4">
                          Ph.D. or equivalent in Management or allied area, with
                          a minimum of 5 years of experience of which at least 3
                          years should be at the level of Assistant Professor,
                          and ability to interact with a diverse student body
                          and executives, and ability to undertake research
                          independently.
                        </p>

                        <h5>Assistant Professor</h5>
                        <p className="mb-4">
                          Ph.D. or equivalent in Management or allied area, with
                          at least 3 years of industrial, research, or academic
                          experience, and ability to interact with a diverse
                          student body. However, in case of a fellow from IIM or
                          a Ph.D. from any reputed university/institute, the
                          experience requirement of 3 years may be waived.
                        </p>

                        <h5>
                          Lecturer / Academic Associate / Research Associate /
                          Faculty Associate
                        </h5>
                        <p className="mb-4">
                          The candidate should be a PG in Management or allied
                          areas with 3 years of experience in industry/academics
                          or a person who is pursuing a Ph.D. in Management or
                          allied areas. The role would be to assist faculty
                          members in research, academic, MDP, and consulting
                          activities. They will also assist in arranging
                          conferences, research workshops, promotion of events,
                          and writing of books or papers. Appointment will be
                          made on a contractual basis usually for a term of 2
                          years, which may be extended subject to satisfactory
                          performance for another term of 2 years.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* === TAB 2: Apply Faculty === */}
                  <div
                    className="tab-pane fade"
                    id="apply-faculty"
                    role="tabpanel"
                    aria-labelledby="apply-faculty-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <p className="mb-4">
                          Institute of Management Technology (IMT) Hyderabad
                          stands as a beacon of excellence in management
                          education, building upon the distinguished legacy of
                          the IMT Group, which has spanned over forty years.
                          Since its inception, the Hyderabad campus has
                          consistently demonstrated its commitment to academic
                          rigour, industry relevance, and leadership
                          development. Our institution has rapidly emerged as a
                          preferred destination for aspiring business leaders,
                          distinguished by our innovative pedagogy, research
                          excellence, and strong corporate partnerships.
                        </p>

                        <p className="mb-4">
                          At IMT Hyderabad, we recognize that our faculty
                          members are the cornerstone of our academic ecosystem.
                          We seek to attract and retain exceptional
                          educator–researchers who share our vision of nurturing
                          socially responsible business leaders capable of
                          addressing complex organizational and societal
                          challenges. Our educational philosophy integrates
                          theoretical foundations with practical applications,
                          ensuring students develop conceptual understanding and
                          actionable skills.
                        </p>

                        <p className="mb-4">
                          We are particularly interested in strengthening our
                          expertise in three strategic areas that reflect
                          contemporary business priorities:{" "}
                          <b>Digital Transformation</b>,{" "}
                          <b>
                            Sustainability &amp; Corporate Social Responsibility
                          </b>
                          , and <b>Leadership Development</b>. These focus areas
                          align with global trends and industry demands,
                          positioning our graduates to make meaningful
                          contributions in an evolving business landscape.
                        </p>

                        <p className="mb-4">
                          The institution offers a stimulating intellectual
                          environment that fosters professional growth through
                          research support, interdisciplinary collaboration, and
                          engagement with industry leaders. Faculty members
                          enjoy access to modern facilities, curriculum
                          innovation opportunities, and thought leadership
                          platforms. Our compensation structure is designed to
                          attract and reward academic excellence, while our
                          collegial culture promotes meaningful intellectual
                          exchange.
                        </p>

                        <p className="mb-4">
                          Candidates should possess a distinguished academic
                          record, including a Ph.D. in relevant disciplines from
                          reputed institutions and demonstrated research
                          capabilities and teaching effectiveness. Industry
                          practitioners with significant managerial experience
                          and teaching aptitude are also encouraged to apply for
                          practice-oriented positions.
                        </p>

                        <p className="mb-4">
                          We invite you to become part of our academic
                          community, where your expertise will contribute to
                          shaping future business leaders while advancing
                          knowledge in your field. This is an opportunity to
                          join an institution that values scholarship,
                          innovation, and societal impact, offering a platform
                          for both professional fulfilment and institutional
                          contribution.
                        </p>

                        <h5>Teaching Positions (Assistant Professor)</h5>
                        <p className="mb-4">
                          Candidates should have a demonstrated ability to make
                          relevant intellectual contributions to potential
                          managers through teaching and research. Candidates
                          should have a strong academic background and
                          understanding of current developments in the related
                          field. Faculty members are expected to carry out
                          research, design and teach courses, engage in
                          institution development, conduct training programs for
                          corporates, and undertake consultancy. Positions are
                          open in the following areas:
                        </p>

                        <ul className="mb-4">
                          <li>IT &amp; Analytics (2)</li>
                          <li>Marketing Management (2)</li>
                          <li>Finance &amp; Accounting (2)</li>
                          <li>Organizational Behaviour &amp; HR (2)</li>
                          <li>Operations Management (1)</li>
                          <li>Strategy (1)</li>
                          <li>
                            Communications / Corporate Law / Economics (2)
                          </li>
                        </ul>

                        {/* === Responsive Table === */}
                        <div className="table-responsive">
                          <table className="table table-bordered align-middle">
                            <thead className="table-light">
                              <tr>
                                <th>SL No</th>
                                <th>Area</th>
                                <th>Courses Offered</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Strategy</td>
                                <td>
                                  Strategic Management, International Business,
                                  Entrepreneurship Development, Managing
                                  Strategic Networks, Business Negotiation,
                                  Management Consulting, Design Thinking &amp;
                                  Innovation
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>IT &amp; Analytics</td>
                                <td>
                                  <p>
                                    <b>Core Courses:</b> Business Statistics,
                                    Information Technology for Managers, Data
                                    Analysis and Decision Making
                                  </p>
                                  <p>
                                    <b>Electives:</b> Machine Learning, Business
                                    Forecasting, Visual Analytics, Big Data
                                    Analytics, Web and Text Analytics, Deep
                                    Learning, Blockchain for Managers, Decision
                                    Analytics.
                                  </p>
                                  <p>
                                    <b>Technical Skills:</b> MS Excel, Power BI,
                                    Tableau, IBM SPSS, R Studio, Python.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Marketing Management</td>
                                <td>
                                  <p>
                                    <b>Core Courses:</b> Marketing Management
                                  </p>
                                  <p>
                                    <b>Electives:</b> Services Marketing, Brand
                                    Management, Marketing Research, Marketing
                                    Analytics, Sales and Distribution
                                    Management, Marketing Metrics.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Organizational Behaviour &amp; HR</td>
                                <td>
                                  <p>
                                    <b>Core Courses:</b> Organizational
                                    Behaviour – I, Organizational Behaviour –
                                    II, Human Resources Management
                                  </p>
                                  <p>
                                    <b>Electives:</b> Competency Mapping, Talent
                                    Planning &amp; Acquisition, Managing
                                    Workplace, Organization Change and
                                    Development, Performance Management,
                                    Industrial Relations &amp; Labour Laws,
                                    Learning and Development, Compensation and
                                    Benefits, Managing Across Cultures,
                                    Psychometrics and Behavioural Research,
                                    Strategic HRM.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Finance &amp; Accounting</td>
                                <td>
                                  <p>
                                    <b>Core Courses:</b> Financial Accounting,
                                    Cost and Management Accounting, Corporate
                                    Finance.
                                  </p>
                                  <p>
                                    <b>Electives:</b> Advanced Financial
                                    Statement Analysis, Financial Risk
                                    Management, Strategic Management Accounting,
                                    Corporate Valuation, Risk Analytics,
                                    Commercial Banking, Managing Financial
                                    Institutions, Financial Derivatives,
                                    Security Analysis, Portfolio Management.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Operations Management</td>
                                <td>
                                  <p>
                                    <b>Core Courses:</b> Operations Management,
                                    Operations Research, Supply Chain
                                    Management.
                                  </p>
                                  <p>
                                    <b>Electives:</b> Project Management,
                                    Logistics Management, Lean Six Sigma,
                                    Service Operations Management, Supply Chain
                                    Analytics, Retail Supply Chain Management,
                                    New Product Development.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Communications</td>
                                <td>
                                  Strategic Corporate Communication, Digital
                                  &amp; Cross-Cultural Communication, Persuasive
                                  Communication (Speaking, Writing &amp;
                                  Reporting), Leadership Communication.
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>Corporate Law</td>
                                <td>
                                  Contract Laws, Corporate Governance, Company
                                  Law, Technology &amp; IP Law, International
                                  Business Law, Insolvency.
                                </td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>Economics</td>
                                <td>
                                  Microeconomics, Macroeconomics, Business
                                  Research Methods.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <p className="mb-4">
                          <b>Eligibility &amp; Experience:</b> Outstanding
                          academic record throughout. Should have a Post
                          Graduate degree in Management/Allied areas and
                          Ph.D./FPM from a reputed institution or university.
                          Candidates should be familiar with industry practices
                          and challenges and show evidence of quality research
                          and publications. Minimum three years of
                          teaching/research/industrial experience (excluding
                          experience gained while pursuing Ph.D.). Candidates
                          who have submitted their Ph.D. thesis may also apply.
                          They will be offered a temporary position and placed
                          as Assistant Professor after the award of the doctoral
                          degree.
                        </p>

                        <p className="mb-4">
                          <b>Compensation:</b> Compensation is equivalent to UGC
                          norms and as per Institute rules, depending on
                          experience. Fringe benefits such as HRA, medical
                          insurance, contribution towards provident fund/New
                          Pension Scheme (NPS), Faculty Development Allowance,
                          and financial support for national and international
                          conferences are provided as per norms. Monetary
                          incentives are offered for research paper and case
                          publications in reputed journals. Faculty may pursue
                          industrial consultancy on income-sharing basis as per
                          Institute policy.
                        </p>

                        <p className="mb-4">
                          A faculty is expected to teach 140 hours per year.
                          They are also required to publish in reputed journals
                          (ABDC) to earn a minimum number of research points,
                          conduct MDPs, and provide consultancy and
                          institutional services.
                        </p>

                        <p className="mb-4">
                          <b>
                            Indicative Guidelines for Shortlisted
                            Candidates:{" "}
                          </b>
                          <a
                            href="https://drive.google.com/file/d/103o59AmRCPlTjsayjYFgJwpZtdq-ItwQ/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Click Here
                          </a>
                        </p>

                        <p className="mb-4">
                          <b>
                            Interested candidates may submit their applications
                            in the prescribed form
                          </b>{" "}
                          <a
                            href="https://docs.google.com/document/d/1Iu3RvurN74TRqvdCaQ6mqJAJSeH8tptm/edit?usp=sharing&ouid=106736229483075051654&rtpof=true&sd=true"
                            target="_blank"
                            rel="noreferrer"
                          >
                            (Download the form here)
                          </a>{" "}
                          and send the filled-up application along with a cover
                          letter (if any) to <u>careers@imthyderabad.edu.in</u>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* === TAB 3: Non-Teaching === */}
                  <div
                    className="tab-pane fade"
                    id="apply-non-teaching"
                    role="tabpanel"
                    aria-labelledby="apply-non-teaching-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <p className="mb-4">
                          Institute of Management Technology Hyderabad invites
                          applications for the following non-teaching positions:
                        </p>
                        {/* <div className="mb-5">
                          <h5>Consultant Engineering Firm Required</h5>
                          <p className="mb-3">
                            <small>(Contract Based – Yearly Basis)</small>
                          </p>

                          <p className="mb-3">
                            We are seeking an experienced Consultant Engineer to
                            provide comprehensive support for upcoming &amp;
                            existing construction projects. The scope includes
                            planning, design, execution oversight, and quality
                            control.
                          </p>

                          <p className="mb-3">
                            <b>Scope of Services</b>
                          </p>

                          <p className="mb-3">
                            <b>1. Site Assessment &amp; Feasibility</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Site surveys, inspections, and feasibility
                                evaluation
                              </li>
                              <li>
                                Reports on soil, drainage, and site
                                accessibility
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>2. Planning &amp; Design</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>Architectural and structural drawings</li>
                              <li>Layouts, elevations, sections</li>
                              <li>Compliance with codes and guidelines</li>
                              <li>
                                Design revisions based on stakeholder input
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>3. BOQ &amp; Cost Estimation</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>Detailed BOQ and cost estimates</li>
                              <li>
                                Support in budgeting and tender finalization
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>4. Project Oversight</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>Site visits to monitor progress</li>
                              <li>Ensure quality and design adherence</li>
                              <li>On-site technical support</li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>5. Quality &amp; Compliance</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>Material/workmanship verification</li>
                              <li>Support third-party quality checks</li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>6. Final Inspection &amp; Handover</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Post-completion inspection and compliance
                                reporting
                              </li>
                              <li>Assist in handover documentation</li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>7. Advisory Support</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Structural safety, repair, and retrofitting
                                guidance
                              </li>
                              <li>
                                On-call technical consultation during project
                              </li>
                              <li>
                                Strong knowledge of codes, safety, and project
                                execution
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">Regards</p>
                          <p className="mb-3">
                            <b>Rajkumar</b>
                          </p>
                        </div> */}

                        <div className="mb-5">
                          <h5>
                            Social Media &amp; PR Executive <br />
                            <small>
                              (Anchoring | Guest Engagement | Digital Content
                              Shoot)
                            </small>
                          </h5>

                          <p className="mb-3">
                            <b>Role</b>
                          </p>
                          <p className="mb-3">
                            Are you confident in front of the camera, great with
                            people, and love creating buzz on social media? We
                            are looking for a dynamic, well-presented, and
                            energetic professional who can anchor guest
                            interviews, visitors’ podcasts, events, engage
                            students, manage Institute’s social media
                            visibility, and represent our brand with
                            confidence—both online and offline.
                          </p>
                          <p className="mb-3">
                            If you have a jolly personality, strong English
                            communication skills, basic knowledge of videography
                            (shooting video on mobile / camera) and natural
                            stage presence, this role is made for you!
                          </p>

                          <p className="mb-3">
                            <b>Key Responsibilities</b>
                          </p>

                          <p className="mb-3">
                            <b>Anchoring &amp; Content Hosting</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Host and anchor interviews with guests, events,
                                live sessions, podcasts, and campus activities.
                              </li>
                              <li>
                                Present scripted and unscripted content with
                                confidence, clarity, and voice modulation.
                              </li>
                              <li>
                                Engage live and digital audiences effectively.
                              </li>
                              <li>
                                Handle on-camera appearances, retakes, and
                                spontaneous interactions smoothly.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Social Media &amp; Digital Engagement</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Support creation and promotion of social media
                                content (reels, videos, stories, live sessions).
                              </li>
                              <li>
                                Act as the on-screen face for digital campaigns
                                and institutional content.
                              </li>
                              <li>
                                Engage with guests, students and audiences
                                through interactive content and live platforms.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Student Engagement &amp; PR</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Interact with students during events,
                                orientations, workshops, and campus activities.
                              </li>
                              <li>
                                Build positive public relations and represent
                                the brand professionally.
                              </li>
                              <li>
                                Coordinate with media houses, journalists,
                                marketing, content, and production teams for
                                campaigns and events.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Content Preparation &amp; Coordination</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Research topics and script preparation
                                identifying suitable questions and discussion
                                topics.
                              </li>
                              <li>
                                Participate in rehearsals, content planning, and
                                promotional shoots.
                              </li>
                              <li>
                                Ensure brand tone, accuracy, and professionalism
                                in all communications.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Required Skills &amp; Qualifications</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Excellent verbal communication and presentation
                                skills in English.
                              </li>
                              <li>
                                Confidence in front of the camera and live
                                audiences.
                              </li>
                              <li>
                                Strong command of English (Hindi is a plus).
                              </li>
                              <li>
                                Ability to improvise and think on the spot.
                              </li>
                              <li>
                                Presentable personality with positive energy.
                              </li>
                              <li>
                                Bachelor’s degree in Mass Communication /
                                Journalism / Media / Related fields (preferred).
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Preferred Skills</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Experience in anchoring, event hosting,
                                podcasts, or live streaming.
                              </li>
                              <li>
                                Familiarity with teleprompters and basic studio
                                setups.
                              </li>
                              <li>
                                Social media savviness and audience engagement
                                skills.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Why Join IMT Hyderabad?</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Be the face and voice of our institute – a
                                reputed brand in B-schools in India.
                              </li>
                              <li>
                                High-visibility role with creative freedom.
                              </li>
                              <li>
                                Dynamic campus and media-driven environment.
                              </li>
                              <li>
                                Strong growth opportunities in media, PR, and
                                digital communication.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Salary &amp; Allowances:</b>
                          </p>
                          <p className="mb-3">
                            As per IMT norms corresponding with qualifications,
                            experience, and performance in the interview. Salary
                            will not be a constraint for the deserving
                            candidate.
                          </p>

                          <p className="mb-3">
                            <b>Freshers / Experienced Welcome!</b>
                          </p>
                          <p className="mb-3">
                            If you love being on stage, on screen, and in the
                            spotlight—we want to meet you!
                          </p>

                          <p className="mb-3">
                            Apply now via email at{" "}
                            <a href="mailto:careers@imthyderabad.edu.in">
                              careers@imthyderabad.edu.in
                            </a>
                          </p>
                        </div>

                        <div className="mb-5">
                          <h5>In charge, ERP &amp; Web</h5>

                          <p className="mb-3">
                            <b>Position Level:</b> Mid-Level Leadership
                          </p>
                          <p className="mb-3">
                            <b>Reporting To:</b> Director / CAO
                          </p>
                          <p className="mb-3">
                            <b>Location:</b> IMT Hyderabad
                          </p>
                          <p className="mb-3">
                            Office of the Director, 38, Cherlaguda, Shamshabad,
                            Hyderabad 501218 India
                          </p>

                          <p className="mb-3">
                            <b>Role Objective</b>
                          </p>
                          <p className="mb-3">
                            In charge, ERP &amp; Web will provide strategic and
                            operational leadership for the Institute’s
                            technology ecosystem, ensuring robustness,
                            scalability, security, and alignment with academic
                            and admissions objectives. The role demands strong
                            expertise in cloud infrastructure (AWS), ERP
                            customization, admissions technology platforms,
                            institutional websites, and end-to-end vendor
                            governance, while leading and mentoring a high-
                            performance IT team.
                          </p>

                          <p className="mb-3">
                            <b>Key Responsibilities</b>
                          </p>

                          <p className="mb-3">
                            <b>1. IT Strategy &amp; Governance</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Help execute the Institute’s IT roadmap in
                                alignment with academic, administrative, and
                                admissions goals.
                              </li>
                              <li>
                                Set IT governance frameworks, SOPs, security
                                protocols, and compliance standards.
                              </li>
                              <li>
                                Act as the primary technology advisor to senior
                                management and academic leadership.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>
                              2. Cloud &amp; Infrastructure Management (AWS)
                            </b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Oversee end-to-end AWS server architecture,
                                including deployment, monitoring, scaling,
                                backup, and disaster recovery.
                              </li>
                              <li>
                                Ensure high availability, performance
                                optimization, cost efficiency, and data security
                                across cloud infrastructure.
                              </li>
                              <li>
                                Implement best practices for access control,
                                audits, and compliance.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>3. ERP &amp; Enterprise Systems</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Lead ERP customization, enhancement, and
                                integration across academic, finance, HR, and
                                student lifecycle modules.
                              </li>
                              <li>
                                Coordinate with internal stakeholders to
                                translate business requirements into technical
                                solutions.
                              </li>
                              <li>
                                Ensure system stability, data integrity, and
                                continuous improvement of ERP platforms.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>
                              4. Admissions Technology &amp; Digital Platforms
                            </b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Own and manage admissions tools, CRM platforms,
                                and application workflows.
                              </li>
                              <li>
                                Ensure seamless integration between admissions
                                systems, ERP, website, and marketing platforms.
                              </li>
                              <li>
                                Support admissions cycles with system readiness,
                                scalability, analytics, and reporting.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>5. Website &amp; Digital Customization</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Oversee institutional website architecture,
                                performance, security, and custom feature
                                implementations.
                              </li>
                              <li>
                                Manage CMS, backend integrations, forms,
                                tracking tools, and third-party APIs.
                              </li>
                              <li>
                                Ensure optimal performance, uptime, and
                                compliance with data privacy standards.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>6. Vendor &amp; Partner Management</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Lead selection, onboarding, evaluation, and
                                governance of IT vendors and technology
                                partners.
                              </li>
                              <li>
                                Manage SLAs, contracts, budgets, timelines, and
                                deliverables.
                              </li>
                              <li>
                                Ensure accountability, quality control, and cost
                                optimization across vendors.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>7. Team Leadership &amp; Capability Building</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Lead, mentor, and scale the internal IT team
                                across infrastructure, applications, and support
                                functions.
                              </li>
                              <li>
                                Drive performance management, skill development,
                                and succession planning.
                              </li>
                              <li>
                                Foster a culture of accountability, innovation,
                                and service excellence.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>8. Cybersecurity &amp; Risk Management</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Implement robust cybersecurity frameworks, data
                                protection measures, and risk mitigation
                                strategies.
                              </li>
                              <li>
                                Conduct regular audits, vulnerability
                                assessments, and incident response planning.
                              </li>
                              <li>
                                Ensure compliance with institutional,
                                regulatory, and data privacy requirements.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Key Skills &amp; Competencies</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Strong expertise in AWS server management and
                                cloud architecture
                              </li>
                              <li>
                                Proven experience in ERP customization and
                                enterprise system integration
                              </li>
                              <li>
                                Hands-on knowledge of admissions tools, CRMs,
                                and application management systems
                              </li>
                              <li>
                                Advanced understanding of website development,
                                customization, and integrations
                              </li>
                              <li>
                                Excellent vendor management, negotiation, and
                                SLA governance capabilities
                              </li>
                              <li>
                                Strategic thinking with strong execution and
                                stakeholder management skills
                              </li>
                              <li>
                                High level of leadership maturity and team
                                management experience
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Qualifications &amp; Experience</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Bachelor’s / Master’s degree in Computer
                                Science, Information Technology, or related
                                field
                              </li>
                              <li>
                                10–15+ years of progressive IT experience, with
                                at least 5 years in a senior leadership role
                              </li>
                              <li>
                                Prior experience in higher education / academic
                                institutions will be a strong advantage
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Key Performance Indicators (KPIs)</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Infrastructure uptime and system reliability
                              </li>
                              <li>ERP and admissions system effectiveness</li>
                              <li>Website performance and security metrics</li>
                              <li>
                                Vendor delivery adherence and cost efficiency
                              </li>
                              <li>
                                Team productivity and stakeholder satisfaction
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Salary &amp; Allowances:</b>
                          </p>
                          <p className="mb-3">
                            As per IMT norms corresponding with qualifications,
                            experience, and performance in the interview. Salary
                            will not be a constraint for the deserving
                            candidate.
                          </p>
                        </div>

                        <div className="mb-5">
                          <h5>Chief Programs Officer</h5>

                          <p className="mb-3">
                            <b>Role Purpose</b>
                          </p>
                          <p className="mb-3">
                            To lead and manage end-to-end academic
                            administration and program operations for all
                            degree-granting programs of the Institute, ensuring
                            academic excellence, regulatory compliance,
                            efficient systems, and seamless student lifecycle
                            management in alignment with institutional
                            framework.
                          </p>

                          <p className="mb-3">
                            <b>Key Responsibilities</b>
                          </p>

                          <p className="mb-3">
                            <b>
                              1. Academic Administration & Program Governance
                            </b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Oversee academic administration of all
                                degree-granting programs of the Institute.
                              </li>
                              <li>
                                Ensure compliance with institutional
                                regulations, academic frameworks, and statutory
                                requirements.
                              </li>
                              <li>
                                Coordinate with Program Chairpersons and faculty
                                for effective implementation and monitoring of
                                academic activities.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>2. Program Operations & Delivery Excellence</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Lead end-to-end program operations including
                                academic calendars, class schedules, budgeting,
                                onboarding, program commencement, procurement of
                                course materials, elective bidding, feedback,
                                Convocation arrangement etc.
                              </li>
                              <li>
                                Support Program Committees time to time
                                fostering the enhancement of academic
                                activities.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>
                              3. Institutional Development & Program Expansion
                            </b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Contribute to institutional building through
                                process streamlining, system strengthening, and
                                continuous improvement initiatives.
                              </li>
                              <li>
                                Contribute to planning and execution of new
                                academic program launches, ensuring operational
                                readiness across all functional areas.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>4. Examinations, Assessment & Results</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Ensuring smooth conduct of examinations, timely
                                grade submission, result processing,
                                finalization, and announcements.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>5. Student Records, Data, & Compliance</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Maintain accurate and secure academic databases
                                for students and faculty.
                              </li>
                              <li>
                                Facilitate timely and accurate data sharing for
                                accreditation, rankings, annual reports, and
                                statutory submissions.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>6. Student Support, Discipline & Advisory</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Ensure fair and timely handling of student
                                grievances, appeals, disciplinary matters, and
                                mitigating circumstances.
                              </li>
                              <li>
                                Implement academic advisory and intervention
                                mechanisms to enhance student performance.
                              </li>
                              <li>
                                Engage with the Student Council and ensure
                                alignment with institutional policies.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>
                              7. Academic Governance Documentation & Compliance
                            </b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Prepare, review, update, and implement Student
                                Handbooks, Faculty Handbooks, Program Manuals,
                                Ordinances, and Academic Regulations in
                                consultation with academic committees and
                                statutory bodies. Review, draft, and update
                                academic guidelines, process documents,
                                modalities, SOPs, and standardized forms/formats
                                to ensure consistency and efficiency across
                                programs.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>8. Digital Systems and Automation</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Administer LMS, ERP implementation, handling
                                DigiLocker, Academic Bank of Credits, and APAAR
                                IDs.
                              </li>
                              <li>
                                Drive automation of academic and administrative
                                processes to enhance efficiency and data
                                accuracy.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>9. Team Leadership & Institutional Growth</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Guide and mentor officers and staff engaged in
                                academic administration functions.
                              </li>
                              <li>
                                Promote a culture of continuous learning and
                                operational excellence within the academic
                                administration team.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>
                              10. Accreditation, Ranking, Assurance of Learning
                              & Quality Assurance
                            </b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Support and coordinate activities related to
                                Accreditation, NIRF Ranking etc including
                                documentation, data management, and compliance
                                with accreditation standards.
                              </li>
                              <li>
                                Implement and monitor Assurance of Learning
                                processes across programs, including learning
                                goal mapping, assessment cycles, data
                                collection, analysis, and continuous improvement
                                actions.
                              </li>
                              <li>
                                Establish and strengthen academic quality
                                assurance frameworks, ensuring consistency,
                                outcome measurement, and continuous enhancement
                                of program delivery.
                              </li>
                              <li>
                                Coordinate with faculty, program teams, and
                                accreditation committees to ensure timely
                                reporting and evidence-based decision-making.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Qualifications & Experience:</b>
                          </p>
                          <p className="mb-3">
                            Master's degree or equivalent preferred. Prior
                            experience in relevant area and in reputed B-school
                            is an advantage.
                          </p>

                          <p className="mb-3">
                            <b>Salary, Allowances & Benefits:</b>
                          </p>
                          <p className="mb-3">
                            As per IMT norms correspond with qualifications,
                            experience, and performance in the interview. Salary
                            will not be a constraint for deserving candidates.
                          </p>

                          {/* <p className="mb-3">
                            <b> Terms and Conditions</b>
                          </p> */}

                          {/* <div className="crs_list">
                            <ul>
                              <li>
                                Interested and eligible candidates are requested
                                to send their applications latest by 31 Jan 2026
                                in the Prescribed Format via email at
                                careers@imthyderabad.edu.in with the subject
                                line: "Application For the Post of
                                ______________________"
                              </li>
                              <li>
                                Applications without the prescribed format
                                mentioned above will not be considered.
                                Applications are accepted only via email to
                                careers@imthyderabad.edu.in; no other mode is
                                allowed.
                              </li>
                              <li>
                                Fulfilling minimum qualifications does not
                                guarantee an interview or selection.
                              </li>
                              <li>
                                Candidates not found suitable for a position may
                                be considered for a lower position or on a
                                consolidated salary.
                              </li>
                              <li>
                                The Institute reserves the right not to select
                                anyone without assigning a reason.
                              </li>
                              <li>
                                The Institute reserves the right to apply
                                additional shortlisting criteria in case of many
                                applications.
                              </li>
                              <li>
                                Only shortlisted candidates will be contacted.
                              </li>
                              <li>Incomplete applications will be rejected.</li>
                              <li>
                                The selected candidates are required to join
                                immediately.
                              </li>
                              <li>
                                The decision of IMT Hyderabad will be final and
                                binding.
                              </li>
                            </ul>
                          </div> */}
                        </div>

                        {/* <div className="mb-5">
                          <h5>Executive – Travel Desk</h5>

                        
                          <p className="mb-3">
                            <b>Job Summary:</b>
                          </p>
                          <p className="mb-3">
                            IMT Hyderabad is seeking a proactive and service-oriented Travel Desk
                            Executive to manage campus travel and transportation operations. The role
                            involves coordinating travel arrangements, ensuring excellent guest
                            hospitality, overseeing in-house vehicle maintenance, and liaising with
                            external transport vendors. The ideal candidate will ensure seamless travel
                            experiences while maintaining compliance with institutional standards.
                          </p>

                        
                          <p className="mb-3">
                            <b>Key Responsibilities:</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Manage the campus travel desk and coordinate travel arrangements for
                                guests and staff.
                              </li>
                              <li>
                                Handle bookings and confirmations for flights, trains, taxis, and
                                accommodation.
                              </li>
                              <li>
                                Ensure high standards of guest hospitality and comfort during visits.
                              </li>
                              <li>
                                Coordinate with guest house and administrative teams for smooth transport
                                and stay.
                              </li>
                              <li>
                                Oversee maintenance, servicing, cleanliness, and documentation of
                                campus-owned vehicles.
                              </li>
                              <li>
                                Monitor insurance, fitness certificates, pollution checks, and service
                                schedules.
                              </li>
                              <li>
                                Liaise with external cab and transport vendors to ensure service quality
                                and reliability.
                              </li>
                              <li>
                                Maintain accurate records related to travel, vehicle usage, servicing,
                                and compliance.
                              </li>
                              <li>
                                Be available on-call for urgent or after-hours travel requirements when
                                needed.
                              </li>
                              <li>
                                Perform additional duties related to travel and transport services as
                                assigned.
                              </li>
                            </ul>
                          </div>

                        
                          <p className="mb-3">
                            <b>Desired Skills &amp; Competencies:</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>Strong coordination and organizational skills</li>
                              <li>Customer-focused approach with attention to detail</li>
                              <li>Ability to manage multiple tasks and vendors effectively</li>
                              <li>Good communication and interpersonal skills</li>
                              <li>Problem-solving ability and flexibility for on-call support</li>
                            </ul>
                          </div>

                       
                          <p className="mb-3">
                            <b>Qualifications &amp; Experience:</b>
                          </p>
                          <p className="mb-3">
                            Bachelor’s degree or equivalent preferred. Prior experience in travel desk
                            operations, hospitality, or transport management is an advantage.
                          </p>

                        
                          <p className="mb-3">
                            <b>Salary, Allowances &amp; Benefits:</b>
                          </p>
                          <p>
                            As per IMT norms corresponding with qualifications, experience, and
                            performance in the interview. Salary will not be a constraint for deserving
                            candidates.
                          </p>
                        </div> */}

                        <div className="mb-5">
                          <h5>
                            Assistant Manager / Manager – Corporate Relations
                            &amp; Placements
                          </h5>

                          <p className="mb-3">
                            <b>Function:</b>
                          </p>
                          <p className="mb-3">
                            The Manager – Corporate Relations plays a key role
                            in building and maintaining relationships between
                            IMT Hyderabad and the corporate sector, ensuring
                            strong placement relationships and industry
                            engagement.
                          </p>

                          <p className="mb-3">
                            <b>Job Description:</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Explore opportunities for student placements by
                                monitoring summer &amp; final recruitments by
                                corporates and convincing them to visit the
                                campus.
                              </li>
                              <li>
                                Continuously improve placement record in terms
                                of recruiters, job profiles, compensation, and
                                corporate brand.
                              </li>
                              <li>
                                Provide timely inputs such as corporate
                                contacts, process dates, communication, job
                                descriptions, and offer documents.
                              </li>
                              <li>
                                Keep Head – Corporate Relations and management
                                updated on placement status.
                              </li>
                              <li>
                                Collect feedback from corporates and proactively
                                implement improvements.
                              </li>
                              <li>
                                Support events involving corporate presence such
                                as panel discussions, conferences, practitioner
                                sessions, and convocation.
                              </li>
                              <li>
                                Onboard new recruiters offering competitive CTC
                                packages aligned with IMT standards.
                              </li>
                              <li>
                                Maintain strong alumni relationships to support
                                placement initiatives.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Key Skills:</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>Corporate relationship building</li>
                              <li>
                                Strong communication and presentation skills
                              </li>
                              <li>
                                Understanding and empathy towards student needs
                              </li>
                              <li>
                                Inter-departmental coordination and teamwork
                              </li>
                              <li>Timely and effective reporting</li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Qualification:</b>
                          </p>
                          <p className="mb-3">
                            Graduation in any discipline. Post-Graduation in
                            Management will be given preference.
                          </p>

                          {/* Salary */}
                          <p className="mb-3">
                            <b>Salary, Allowances &amp; Benefits:</b>
                          </p>
                          <p>
                            As per IMT norms corresponding with qualifications,
                            experience, and interview performance. Salary will
                            not be a constraint for deserving candidates.
                          </p>
                        </div>

                        {/* Executive – Inventory & Administration */}
                        {/* <div className="mb-5">
                          <h5>Executive – Inventory &amp; Administration</h5>

                          <p className="mb-3">
                            <b>Job Description</b>
                          </p>
                          <p className="mb-3">
                            You will be responsible for all administrative
                            functions of IMT Hyderabad including:
                          </p>

                          <p className="mb-3">
                            <b>Key Responsibilities:</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Responsible for inventory management, store
                                indents &amp; issuance.
                              </li>
                              <li>Asset book-keeping &amp; ERP update.</li>
                              <li>Material inward and ERP update.</li>
                              <li>
                                Any other task assigned by the Reporting
                                Authority of the Institute from time to time.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Qualification:</b>
                          </p>
                          <p className="mb-3">
                            The incumbent should have relevant experience with a
                            bachelor’s degree or higher in any discipline and
                            expertise in advanced Microsoft Excel and database
                            management.
                          </p>

                          <p className="mb-3">
                            <b>Key Skills:</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>Ability to multi-task.</li>
                              <li>
                                Proficiency in MS-Office (Excel, Word,
                                PowerPoint).
                              </li>
                              <li>
                                Strong organizational skills and attention to
                                detail.
                              </li>
                              <li>
                                Exceptional communication and interpersonal
                                skills to engage with stakeholders at all
                                levels.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Salary &amp; Allowances:</b>
                          </p>
                          <p>
                            As per IMT norms corresponding with qualifications,
                            experience, and performance in the interview. Salary
                            will not be a constraint for the deserving
                            candidate.
                          </p>
                        </div> */}

                        {/* Data Analyst */}
                        {/* <div className="mb-5">
                          <h5>Data Analyst (Accreditation and Rankings)</h5>

                          <p className="mb-3">
                            <b>Function:</b>
                          </p>
                          <p className="mb-3">The role involves:</p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Maintaining a comprehensive and secure database
                                of institutional data and performance metrics,
                                staying current with ranking methodologies and
                                accreditation criteria to adapt strategies
                                accordingly.
                              </li>
                              <li>
                                Working closely with academic and administrative
                                departments to ensure data accuracy,
                                consistency, and timely reporting.
                              </li>
                              <li>
                                Coordinating with internal stakeholders for
                                validation of data required for ranking and
                                reputation management purposes.
                              </li>
                              <li>
                                Collaborating with internal departments to
                                analyse data and identify areas for improvement
                                and strategic planning.
                              </li>
                              <li>
                                Preparing and submitting reports for various
                                awards, ranking, and accreditation agencies
                                (NBA, NIRF, SAQS, AACSB, and B-School Ranking
                                Surveys).
                              </li>
                              <li>
                                Generating reports and presentations for
                                internal stakeholders, including senior
                                management, and assisting in developing
                                strategies to improve rankings and accreditation
                                outcomes.
                              </li>
                              <li>
                                Any other responsibility assigned by superiors
                                from time to time.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Qualification:</b>
                          </p>
                          <p className="mb-3">
                            The incumbent should have relevant experience with a
                            bachelor’s degree or higher in any discipline and
                            expertise in advanced Microsoft Excel and database
                            management.
                          </p>

                          <p className="mb-3">
                            <b>Desirable Skills and Abilities:</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>
                                Prior experience in Accreditation and Rankings
                                processes (NIRF, AACSB, AMBA, EQUIS, etc.).
                              </li>
                              <li>Proficiency in Microsoft Office tools.</li>
                              <li>
                                Exceptional communication and interpersonal
                                skills to engage with stakeholders at all
                                levels.
                              </li>
                              <li>
                                Strong organizational skills and attention to
                                detail.
                              </li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Salary &amp; Allowances:</b>
                          </p>
                          <p>
                            The selected candidate will be offered initially on
                            a fixed-term contract for two years on a
                            consolidated monthly pay package, subject to
                            satisfactory performance reviewed annually. Salary
                            will not be a constraint for the deserving
                            candidate. The selected candidate will be evaluated
                            after three months of joining and may continue for
                            the first year only upon satisfactory performance.
                          </p>
                        </div> */}

                        {/* Academic Associates */}
                        <div className="mb-5">
                          <h5>Academic Associates (2)</h5>

                          <p className="mb-3">
                            <b>Function:</b>
                          </p>
                          <p className="mb-3">
                            The role involves working closely with teaching
                            staff for academic and administrative work. Academic
                            Associates (AAs) shall assist faculty in research
                            and perform other related activities of the
                            Institute as required.
                          </p>

                          <p className="mb-3">
                            <b>Qualification:</b>
                          </p>
                          <p className="mb-3">
                            The incumbent should have a first-class postgraduate
                            degree in Management or Social Sciences / Law and
                            relevant research experience. Fresh PhD holders from
                            reputed institutions are encouraged to apply.
                          </p>

                          <p className="mb-3">
                            <b>Key Skills:</b>
                          </p>
                          <div className="crs_list">
                            <ul>
                              <li>Ability to multi-task.</li>
                              <li>Eye for detail.</li>
                              <li>
                                Excellent written and verbal communication
                                skills.
                              </li>
                              <li>
                                Proficiency in MS-Office (Excel, Word,
                                PowerPoint).
                              </li>
                              <li>Strong organizational skills.</li>
                            </ul>
                          </div>

                          <p className="mb-3">
                            <b>Age:</b> Below 32 years (preferably below 30).
                            For PhD holders or candidates with relevant
                            experience, the age limit may extend up to 35 years.
                          </p>

                          <p className="mb-3">
                            <b>Stipend &amp; Benefits:</b> ₹35,000 – ₹50,000 per
                            month depending on qualifications, experience, and
                            interview performance.
                          </p>
                        </div>

                        {/* General Terms */}
                  <div className="mb-4">
                          <h5> Terms and Conditions</h5>
                          <div className="crs_list">
                            <ol>
                              <li>
                                Interested and eligible candidates are requested
                                to send their applications latest by{" "}
                                <b>31 January 2026</b> in the <a href="https://docs.google.com/document/d/1a9sXdJD3iyFbG4nU3u4NwuYSmQE5kZdd/edit" target="_blank" rel="noopener noreferrer">Prescribed Format </a>
                                via email at{" "}
                                <b>
                                  <a href="mailto:careers@imthyderabad.edu.in">
                                    careers@imthyderabad.edu.in
                                  </a>
                                </b>{" "}
                                with the subject line:
                                <br />
                                <u>
                                  “Application For the Post of
                                  ________”
                                </u>
                              </li>
 
                              <li>
                                Applications without the prescribed format
                                mentioned above will not be considered.
                                Applications are accepted only via email to{" "}
                                <b>
                                  <a href="mailto:careers@imthyderabad.edu.in">
                                    careers@imthyderabad.edu.in
                                  </a>
                                </b>
                                ; no other mode is allowed.
                              </li>
 
                              <li>
                                Fulfilling minimum qualifications does not
                                guarantee an interview or selection.
                              </li>
 
                              <li>
                                Candidates not found suitable for a position may
                                be considered for a lower position or on a
                                consolidated salary.
                              </li>
 
                              <li>
                                The Institute reserves the right not to select
                                anyone without assigning a reason.
                              </li>
 
                              <li>
                                The Institute reserves the right to apply
                                additional shortlisting criteria in case of many
                                applications.
                              </li>
 
                              <li>
                                Only shortlisted candidates will be contacted.
                              </li>
 
                              <li>Incomplete applications will be rejected.</li>
 
                              <li>
                                The selected candidates are required to join
                                immediately.
                              </li>
 
                              <li>
                                The decision of IMT Hyderabad will be final and
                                binding.
                              </li>
                            </ol>
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
      </div>

      {/* ===== ALL ORIGINAL CSS (inside <style jsx>) ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      :root {
        --primary-color: #ffc108;
        --secondary-color: #f8f9fa;
        --text-color: #333;
      }

      .card {
        border: none;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 30px;
      }

      .card-header {
        padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
        margin-bottom: 0;
        color: var(--bs-card-cap-color);
        background-color: rgb(220 220 220) !important;
        border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
      }

      .nav-pills {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
      }

      .nav-pills .nav-link {
        border-radius: 50px;
        padding: 10px 25px;
        font-weight: 500;
        color: #333;
        background-color: #d3d3d3;
        transition: all 0.3s ease;
        margin: 0 5px;
      }

      .nav-pills .nav-link:hover {
        background-color: #e9ecef;
      }

      .nav-pills .nav-link.active {
        background-color: var(--primary-color);
        color: #000;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .tab-content {
        padding: 25px;
        background-color: white;
      }

      .tab-pane {
        animation: fadeIn 0.3s ease;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      h5 {
        color: #09327a;
        margin-top: 20px;
        margin-bottom: 15px;
        padding-bottom: 5px;
        border-bottom: 2px solid #eee;
      }

      ul {
        padding-left: 20px;
      }

      .crs_list {
        margin: 15px 0;
        padding-left: 20px;
      }

      .crs_list ul {
        list-style-type: disc;
      }

      table {
        width: 100%;
        margin: 20px 0;
        border-collapse: collapse;
      }

      th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }

      th {
        background-color: #f8f9fa;
        font-weight: 600;
      }

      .mb-4 {
        margin-bottom: 1.5rem;
      }

      @media (max-width: 768px) {
        .nav-pills {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav-pills .nav-link {
          padding: 8px 15px;
          font-size: 14px;
          margin: 5px;
        }
      }

      .faculty-hero {
        background: url('./media/hero.webp');
        position: relative;
        background-size: cover;
        height: 50vh;
          background-position: center !important;
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
        color: #ffffffff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390D9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #333;
        transition: all 0.3s;
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107;
        color: #000000ff;
      }
      .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
        border-radius: 50rem !important;
        background: #ffc107 !important;
        color: #333 !important;
        transition: all 0.3s !important;
      }
      .nav-pills .nav-link {
        background-color: #e9ecef;
        border-radius: 30px;
        color: #333;  
      }
    `,
        }}
      />
    </>
  );
}
