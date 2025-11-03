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
            background: "url('./media/banners/carrier.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Careers</h2>
          <p className="text-white">
            A workplace that values intellect, innovation, and purpose. <br />
Join an institution that empowers talent to shape the future of management education.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ backgroundColor: "rgb(22 57 119)" }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link style={{ textDecoration: "none" }} href="/" className="text-white fw-bold">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  Careers
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ===== Main Content ===== */}
      <div className="container mt-4">
        <h2 className="section-title text-center mb-4" data-aos="fade-up" data-aos-delay="200">
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
                  <div className="tab-pane fade show active" id="guidelines" role="tabpanel" aria-labelledby="guidelines-tab">
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <p className="mb-4">
                          Self-motivated and suitably qualified persons are invited to join the vibrant team of faculty members in the following areas:
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
                          All of the above positions require proficiency in teaching, research and industry practice. Specific requirements are as follows:
                        </p>

                        <h5>Professor</h5>
                        <p className="mb-4">
                          Ph.D. or equivalent in Management or allied area, a record of excellence in academics for a minimum of 10 years of which at least 5 years should be at the level of Associate Professor; ability to interact with a diverse student body and executives; and a record of publications in standard refereed journals, and ability to undertake research independently and guide Ph.D. scholars. He should have high research, training and consulting credentials.
                        </p>

                        <h5>Associate Professor</h5>
                        <p className="mb-4">
                          Ph.D. or equivalent in Management or allied area, with a minimum of 5 years of experience of which at least 3 years should be at the level of Assistant Professor, and ability to interact with a diverse student body and executives, and ability to undertake research independently.
                        </p>

                        <h5>Assistant Professor</h5>
                        <p className="mb-4">
                          Ph.D. or equivalent in Management or allied area, with at least 3 years industrial/research/academic experience, and ability to interact with a diverse student body. However, in case of fellow from IIM or PhD from any reputed university/institute, his experience requirement of 3 years may be waived.
                        </p>

                        <h5>Lecturer / Academic Associate / Research Associate / Faculty Associate</h5>
                        <p className="mb-4">
                          The candidate will be a PG in Management or allied areas with 3 years of experience in industry/academics or a person who is doing Ph.D. in management or allied areas. The role would be to assist faculty members in research, academic, MDP and consulting activities. They will also assist in arranging conferences, research workshops, promotion of events and writing of books or papers. Appointment will be made on contractual basis usually for a term of 2 year, which may be extended subject to satisfactory performance for another term of 2 years.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* === TAB 2: Apply Faculty === */}
                  <div className="tab-pane fade" id="apply-faculty" role="tabpanel" aria-labelledby="apply-faculty-tab">
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <p className="mb-4">
                          Institute of Management Technology (IMT) Hyderabad stands as a beacon of excellence in management education, building upon the distinguished legacy of the IMT Group, which has spanned over forty years. Since its inception, the Hyderabad campus has consistently demonstrated its commitment to academic rigour, industry relevance, and leadership development. Our institution has rapidly emerged as a preferred destination for aspiring business leaders, distinguished by our innovative pedagogy, research excellence, and strong corporate partnerships.
                        </p>
                        <p className="mb-4">
                          At IMT Hyderabad, we recognize that our faculty members are the cornerstone of our academic ecosystem. We seek to attract and retain exceptional educators-researchers who share our vision of nurturing socially responsible business leaders capable of addressing complex organizational and societal challenges. Our educational philosophy integrates theoretical foundations with practical applications, ensuring students develop conceptual understanding and actionable skills.
                        </p>
                        <p className="mb-4">
                          We are particularly interested in strengthening our expertise in three strategic areas that reflect contemporary business priorities: Digital Transformation, Sustainability &amp; Corporate Social Responsibility, and Leadership Development. These focus areas align with global trends and industry demands, positioning our graduates to make meaningful contributions in an evolving business landscape.
                        </p>
                        <p className="mb-4">
                          The institution offers a stimulating intellectual environment that fosters professional growth through research support, interdisciplinary collaboration, and engagement with industry leaders. Faculty members enjoy access to modern facilities, curriculum innovation opportunities, and thought leadership platforms. Our compensation structure is designed to attract and reward academic excellence, while our collegial culture promotes meaningful intellectual exchange.
                        </p>
                        <p className="mb-4">
                          Candidates should possess a distinguished academic record, including a PhD in relevant disciplines from reputed institutions and demonstrated research capabilities and teaching effectiveness. Industry practitioners with significant managerial experience and teaching aptitude are also encouraged to apply for practice-oriented positions.
                        </p>
                        <p className="mb-4">
                          We invite you to become part of our academic community, where your expertise will contribute to shaping future business leaders while advancing knowledge in your field. This is an opportunity to join an institution that values scholarship, innovation, and societal impact, offering a platform for both professional fulfilment and institutional contribution.
                        </p>

                        <h5>Teaching Positions (Assistant Professor)</h5>
                        <p className="mb-4">
                          Candidates should have a demonstrated ability to make relevant intellectual contribution to potential managers through teaching, and research. Candidates should have a strong academic background and understanding of current developments in the related field. Faculty members are expected to carry out research, design and teach courses, engage in institution development and conduct training programs for corporates, and undertake consultancy. Positions are open in the following areas:
                        </p>

                        <div className="crs_list">
                          <ul>
                            <li>IT &amp; Analytics (2)</li>
                            <li>Marketing Management (2)</li>
                            <li>Finance &amp; Accounting (2)</li>
                            <li>Organizational Behaviour &amp; HR (2)</li>
                            <li>Operations Management (1)</li>
                            <li>Strategy (1)</li>
                            <li>Communications / Corporate Law / Economics (2)</li>
                          </ul>
                        </div>

                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
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
                                  <p>Strategic Management, International Business, Entrepreneurship Development, Managing Strategic Networks, Business Negotiation, Management Consulting, Design Thinking &amp; Innovation</p>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>IT &amp; Analytics</td>
                                <td>
                                  <p><b>Core Courses:</b> Business Statistics, Information Technology for Managers, Data Analysis and Decision Making</p>
                                  <p><b>Electives:</b> Machine Learning, Business Forecasting, Visual Analytics, Bigdata Analytics, Web and Text Analytics, Deep Learning, Blockchain for Managers, Decision Analytics.</p>
                                  <p><b>Technical Skills:</b> MS Excel, Power BI, Tableau, IBM SPSS, R Studio, Python.</p>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Marketing Management</td>
                                <td>
                                  <p><b>Core Courses:</b> Marketing Management</p>
                                  <p><b>Electives:</b> Services Marketing, Brand Management, Marketing Research, Marketing Analytics, Sales and Distribution Management, Marketing Metrics</p>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Organization Behavior &amp; HR</td>
                                <td>
                                  <p><b>Core courses:</b> Organizational Behaviour - I, Organizational Behaviour - II, Human Resources Management</p>
                                  <p><b>Electives:</b> Competency Mapping, Talent Planning &amp; Acquisition, Managing Work Place, Organization Change and Development, Performance Management, Industrial Relations &amp; Labor Laws, Learning and Development, Compensation and Benefits, Managing Across Cultures, Psychometrics and Behavioural Research, Strategic HRM.</p>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Finance &amp; Accounting</td>
                                <td>
                                  <p><b>Core courses:</b> Financial Accounting, Cost and Management Accounting, Corporate Finance.</p>
                                  <p><b>Electives:</b> Advanced Financial Statement Analysis, Financial Risk Management, Strategic Management Accounting, Corporate Valuation, Risk Analytics, Commercial Banking, Managing Financial Institutions, Financial Derivatives, Security Analysis, Portfolio Management.</p>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Operations Management</td>
                                <td>
                                  <p><b>Core courses:</b> Operations Management, Operations Research, Supply Chain Management.</p>
                                  <p><b>Electives:</b> Project Management, Logistics Management, Lean Six Sigma, Service Operations Management, Supply Chain Analytics, Retail Supply Chain Management, New Product Development.</p>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Communications</td>
                                <td>Strategic Corporate Communication, Digital &amp; Cross-Cultural Communication, Persuasive Communication (Speaking, Writing &amp; Reporting), Leadership Communication.</td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>Corporate Law</td>
                                <td>Contract laws, Corporate Governance, Company Law, Technology &amp; IP Law, International Business Law, Insolvency.</td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>Economics</td>
                                <td>Microeconomics, Macroeconomics, Business Research Methods</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <p className="mb-4">
                          <b>Eligibility &amp; Experience:</b> Outstanding academic record throughout. Should have a Post Graduate degree in Management/Allied areas and PhD/FPM from a reputed institution or university. Candidates should be familiar with industry practices and challenges and show evidence of quality research and publications. Minimum three years of teaching/research/industrial experience (excluding the experience gained while pursuing PhD). Candidates who have submitted their PhD Thesis may also apply. They will be offered a temporary position and will be placed as Assistant Professor after the award of doctoral degree.
                        </p>

                        <p className="mb-4">
                          <b>Compensation:</b> Compensation is equivalent to UGC norms and as per the rules of the Institute as revised from time to time depending upon their length of experience. The fringe benefits, such as HRA, medical insurance, contribution towards provident fund / New Pension Scheme (NPS), Faculty Development Allowance, financial support towards national and international conferences etc. shall be given as per the Institute norms. Monetary incentives are given for research paper and case publications in reputed journals. Faculty members are permitted to pursue industrial consultancy on income sharing basis as per Institute rules.
                        </p>

                        <p className="mb-4">
                          A faculty is expected to teach 140 hrs in a year. They are also required to publish in reputed journals (ABDC) to earn a minimum number of research points, conduct MDPs, and provide consultancy and institutional services.
                        </p>

                        <p className="mb-4">
                          <b>Indicative Guidelines for Shortlisted Candidates:</b>{" "}
                          <Link href="https://drive.google.com/file/d/103o59AmRCPlTjsayjYFgJwpZtdq-ItwQ/view?usp=sharing" target="_blank" rel="noreferrer">
                            Click Here
                          </Link>
                        </p>

                        <p className="mb-4">
                          <b>Interested candidates may submit their applications in the prescribed form</b>{" "}
                          <Link href="https://docs.google.com/document/d/1Iu3RvurN74TRqvdCaQ6mqJAJSeH8tptm/edit?usp=sharing&ouid=106736229483075051654&rtpof=true&sd=true" target="_blank" rel="noreferrer">
                            (Download the form here)
                          </Link>{" "}
                          and send the filled up application form along with a cover letter (if any) to <u>careers@imthyderabad.edu.in</u>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* === TAB 3: Non-Teaching === */}
                  <div className="tab-pane fade" id="apply-non-teaching" role="tabpanel" aria-labelledby="apply-non-teaching-tab">
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <p className="mb-4">Institute of Management Technology Hyderabad invites applications for the position of</p>

                        {/* Admissions Manager */}
                        <div className="mb-4">
                          <h5>Admissions Manager at IMT Hyderabad</h5>
                          <p className="mb-3"><b>Job Description</b></p>
                          <p className="mb-3">Institute of Management Technology (IMT) Hyderabad is a premier business school known for its academic excellence, industry-aligned curriculum, and strong corporate connections. As part of the prestigious IMT group, IMT Hyderabad offers cutting-edge management education and fosters leadership and innovation among its students.</p>

                          <p className="mb-3"><b>Position Overview</b></p>
                          <p className="mb-3">We are seeking an experienced and dynamic <b>Admissions Manager</b> to oversee the admissions process and drive student recruitment for IMT Hyderabad. The ideal candidate will have a strong network within schools and colleges, reputed coaching institutions along with in-depth knowledge of the management education sector (covering AICTE approved PG Diploma in Management programme). This role involves managing the entire admissions lifecycle—from student outreach and application evaluation to enrolment and stakeholder engagement—while ensuring alignment with the institute's vision and policies. The Admissions Manager will also lead outreach initiatives, ensure compliance with institutional policies, and work closely with various stakeholders to achieve enrolment targets.</p>

                          <p className="mb-3"><b>Key Responsibilities</b></p>
                          <p className="mb-3"><b>Admissions Process Management</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Oversee the end-to-end admissions process, ensuring a smooth and efficient experience for applicants.</li>
                              <li>Verify application documents for completeness and eligibility.</li>
                              <li>Evaluate applicants based on academic records, test scores, recommendations, and institutional criteria.</li>
                              <li>Collaborate with the admissions committee to make informed admission decisions.</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Student Recruitment &amp; Outreach</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Represent the institution at educational fairs, open houses, and recruitment events.</li>
                              <li>Develop and execute strategies to attract prospective students.</li>
                              <li>Organize and lead campus tours, information sessions, and other admission-related activities.</li>
                              <li>Build and maintain relationships with schools, colleges, and external agencies to enhance student pipelines.</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Communication &amp; Stakeholder Engagement</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Serve as the primary point of contact for prospective students and parents, addressing inquiries and providing guidance.</li>
                              <li>Maintain regular communication with academic departments, financial aid offices, and other stakeholders to facilitate seamless admissions.</li>
                              <li>Prepare and present applicant reports and enrolment trends to senior management.</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Performance &amp; Compliance</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Monitor and achieve key performance indicators (KPIs), including conversion rates and enrolment targets.</li>
                              <li>Ensure compliance with institutional policies, legal regulations, and industry best practices.</li>
                              <li>Analyse admissions data to identify trends and recommend process improvements.</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Team Leadership &amp; Collaboration</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Lead and mentor the admissions team to ensure high performance and productivity.</li>
                              <li>Foster a collaborative environment by working closely with marketing, academic, and administrative teams.</li>
                              <li>Resolve any admission-related issues or disputes efficiently.</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Requirements &amp; Qualifications</b></p>
                          <p className="mb-3"><b>Education &amp; Experience</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Bachelor's or master's degree in business administration (BBA/MBA), Education, or a related field.</li>
                              <li>Minimum of 5-10 years of experience in admissions, preferably in reputed management institute / b-school.</li>
                              <li>Proven track record in student recruitment and meeting enrolment targets.</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Skills &amp; Competencies</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Strong leadership and team management abilities.</li>
                              <li>Excellent communication (written and verbal) and interpersonal skills.</li>
                              <li>Analytical mindset with the ability to interpret admissions data and generate reports.</li>
                              <li>Proficiency in MS Office (Excel, PowerPoint, Word) and admissions software.</li>
                              <li>Ability to multitask, meet deadlines, and thrive in a fast-paced environment.</li>
                              <li>Customer-focused approach with strong problem-solving skills.</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Salary, allowances and benefits:</b></p>
                          <p className="mb-3">
                            As per IMT Norms corresponding with the qualifications, experience and performance in the interview. Salary will not be a constraint for the deserving candidate.
                          </p>
                        </div>

                        {/* Counsellor */}
                        <div className="mb-4">
                          <h5>Counsellor/ Clinical Psychologist at IMT Hyderabad</h5>
                          <p className="mb-3"><b>Function:</b></p>
                          <p className="mb-3">
                            IMT Hyderabad invites applications for the position of <b>Counsellor/Clinical Psychologist</b> to support the mental, emotional, and physical well-being of students in our residential academic community. The selected candidate will play a pivotal role in fostering a supportive environment, ensuring, ensuring students thrive academically and personally.
                          </p>

                          <p className="mb-3"><b>Job Description / Key Responsibilities:</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Provide confidential, high-quality counselling to students addressing academic stress, emotional challenges, and social adjustments.</li>
                              <li>Be available on campus and on-call for emergencies beyond duty hours.</li>
                              <li>Conduct group discussions, workshops, and awareness programs on mental health and well-being.</li>
                              <li>Offer walk-in consultations and respond promptly to crisis situations or referrals.</li>
                              <li>Collaborate with faculty and staff to monitor student welfare and academic progress.</li>
                              <li>Maintain detailed, confidential records of sessions and submit reports to the Student Affairs Office.</li>
                              <li>Uphold strict professional ethics and confidentiality in all interactions.</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Qualifications &amp; Skills:</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Master's degree in clinical / counselling psychology / MA/MSc degree in Psychology with specialization in clinical/Counselling Psychology with at least 55% marks from a reputed and recognized Institute/University.</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Desirable:</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Previous experience as counselling experience for group counselling as well as individual counselling in an Educational Institution or Mental Health Care Clinic.</li>
                              <li>Excellent oral and written communication skills in English.</li>
                              <li>Received training in counselling technique, and or any therapeutic module.</li>
                              <li>Experience in counselling students at residential institute of higher learning</li>
                              <li>Administrative experience in relevant counselling service set- ups </li>
                              <li>Proficiency in variety of computer applications, MS Excel, Power-Point or equivalent.</li>
                            </ul>
                          </div>

                          <p className="mb-3">This role is ideal for a proactive and highly organized professional who thrives in a dynamic academic environment.</p>

                          <p className="mb-3"><b>Salary, allowances and benefits:</b></p>
                          <p className="mb-3">
                            As per IMT Norms corresponding with the qualifications, experience and performance in the interview. Salary will not be a constraint for the deserving candidate.
                          </p>
                        </div>

                        {/* Data Analyst */}
                        <div className="mb-4">
                          <h5>Data Analyst (Accreditation and Rankings)</h5>
                          <p className="mb-3"><b>Function:</b></p>
                          <p className="mb-3">The role involves -</p>
                          <div className="crs_list">
                            <ul>
                              <li><b>Maintaining a comprehensive and secure database of institutional data and performance metrics and staying current with ranking methodologies and accreditation criteria to adapt strategies accordingly.</b></li>
                              <li>Working closely with various academic and administrative departments to ensure data accuracy, consistency, and timely reporting.</li>
                              <li>Coordinating with internal stakeholders for the validation of data required for ranking and reputation management purposes.</li>
                              <li>Collaborating with internal departments to ensure data accuracy and consistency and analysing the data to identify areas for improvement and strategic planning.</li>
                              <li>Preparing and submitting reports for various awards, ranking and rating agencies and accreditation bodies within prescribed deadlines (NBA, NIRF, SAQS, AACSB and various B-School Ranking Surveys)</li>
                              <li>Generating reports and presentations for internal stakeholders, including senior management and assisting in the development and implementation of strategies to improve institutional rankings and accreditation outcomes.</li>
                              <li>Any other responsibility assigned by the superiors from time-to-time.</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Qualification:</b></p>
                          <p className="mb-3">The incumbent should have relevant experience with bachelor's degree or higher in any discipline and expertise in advanced Microsoft Excel and database management.</p>

                          <p className="mb-3"><b>Desirable Skills and Abilities:</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Prior experience in Accreditation and Rankings processes (NIRF, AACSB, AMBA, AACSB, Equis etc.) processes.</li>
                              <li>Proficiency in understanding and working with Microsoft products.</li>
                              <li>Exceptional communication and interpersonal skills to engage with stakeholders at all levels.</li>
                              <li>Strong organizational skills and attention to detail. </li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Salary &amp; Allowances:</b></p>
                          <p className="mb-3">
                            The selected candidate will be offered initially on a fixed-term contract for a period of two years on a consolidated monthly pay package subject to satisfactory performance, which will be reviewed on an annual basis. <b>Salary will not be a constraint for the deserving candidate.</b> The selected candidate would be evaluated after three months of joining and would be able to complete first year in the Institute only if the performance is found satisfactory at the end of three months.
                          </p>
                        </div>

                        {/* Academic Associates */}
                        <div className="mb-4">
                          <h5>Academic Associates (2)</h5>
                          <p className="mb-3"><b>Function:</b></p>
                          <p className="mb-3">The role involves working closely with the Teaching Staff for various academic and administrative works. Academic Associates (AAs) shall perform any other related activities of the Institute and assist the faculty in their research work also.</p>

                          <p className="mb-3"><b>Qualification:</b></p>
                          <p className="mb-3">The incumbent should have a first-class postgraduate degree in Management or Social Science / Law and relevant research experience. Fresh PhD from reputed institutions are encouraged to apply.</p>

                          <p className="mb-3"><b>Key Skills:</b></p>
                          <div className="crs_list">
                            <ul>
                              <li>Ability to multi-task</li>
                              <li>Eye for detail</li>
                              <li>Excellent written and verbal communication skills</li>
                              <li>Proficiency in MS-Office and tools like Excel, Word and Power-Point</li>
                              <li>Very Good Organisation Skills</li>
                            </ul>
                          </div>

                          <p className="mb-3"><b>Age:</b> Below 32 years (Preferably be below 30 years of age). However, for PhD candidates/Candidates with relevant experience, the Age limit can be extended up to 35 Years.</p>

                          <p className="mb-3"><b>Stipend &amp; Benefits:</b> In the range of Rs 35,000 - Rs 50,000 per month depending on the qualifications, experience and performance in the interview.</p>
                        </div>

                        {/* General Terms */}
                        <div className="mb-4">
                          <h5>General Terms and Conditions</h5>
                          <div className="crs_list">
                            <ol>
                              <li>Interested and eligible candidates are requested to send their application latest by <b>31 October 2025</b> in the <b><a href="https://docs.google.com/document/d/1a9sXdJD3iyFbG4nU3u4NwuYSmQE5kZdd/edit?usp=sharing&ouid=106736229483075051654&rtpof=true&sd=true" target="_blank" rel="noreferrer">Prescribed Format</a></b> along with scanned copies of <b>Qualification Certificates</b> (One PDF file for all <b>qualifications certificates</b> starting from class 10th), <b>Experience Certificates</b> (One PDF file for all Experience certificates) via email at <b>careers@imthyderabad.edu.in</b> with <u>subject line</u> as "Application For The Post of ______________________"</li>
                              <li>Application without Prescribed Format and Annexures, as mentioned in point no.1 above, will not be considered. The application is only to be sent through email to <b>careers@imthyderabad.edu.in</b>. No other mode of application will be accepted.</li>
                              <li>Mere fulfilling the minimum qualification and experience requirements will not confer any right on the candidates for being called for an Interview or/and their selection.</li>
                              <li>Candidates who are not found suitable for the position may be considered for a lower position, on a lower pay scale, or an appropriate consolidated salary.</li>
                              <li>The Institute reserves the right not to select anyone without assigning any reason.</li>
                              <li>The Institute reserves the right to change/apply appropriate shortlisting criteria in case of many applications.</li>
                              <li>Only shortlisted candidates will be contacted.</li>
                              <li>An incomplete application without proper supporting documents will be summarily rejected.</li>
                              <li>The Institute requires the selected candidates to join immediately.</li>
                              <li>The decision of IMT Hyderabad would be final and binding to the candidates.</li>
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
      <style jsx>{`
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

        /* Gradient banner with subtle overlay */
        .faculty-hero {
          background: url('./media/hero.webp');
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
          color: #ffffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390D9;
          color: #ffffffff;
          transform: translateY(-3px);
        }

        /* Tabs */
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
          border-radius: var(--bs-nav-pills-border-radius);
          background-color: #e9ecef;
          border-radius: 30px;
          color: #333;
        }
      `}</style>
    </>
  );
}