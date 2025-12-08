'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FPMProgram() {
  // FPM Students data
  const students = [
    {
      name: 'Vishnu Parsad T',
      joiningYear: '2023',
      specialization: 'HRM',
      qualification: 'Finance & Accounting',
      researchInterests: 'Capital structuring decisions, CSR, ESG',
      email: 'tvishnuprasad@imthyderabad.edu.in',
      image: '/images/fpm1.webp',
      description:
        'I hold an M. Com in Finance from Calicut University and an MBA in International Business from Pondicherry University. I also qualified for UGC NET in Commerce and Management, securing JRF in Commerce. I have three years of teaching experience, teaching courses in finance, management, and related disciplines. My research focuses on Environmental, Social, and Governance (ESG) practices and their impact on financial performance, Capital structuring decisions, and CSR.',
    },
    {
      name: 'Amit Mishra',
      joiningYear: '2023',
      specialization: 'HRM',
      qualification: 'B.Sc (Physics), MA (TISS), PGDM (IMT G)',
      researchInterests: 'Motivation, Leadership, Well-Being, Teams, Deviance',
      email: 'amitmishra@imthyderabad.edu.in',
      image: '/images/fpm2.webp',
      description:
        'I am a research scholar based out at IMT Hyderabad in the area of Organizational Behaviour and my focal area of interest is well-being, motivation, and leadership. I have worked for ISB and Tata Group before joining IMT as a researcher.',
    },
    {
      name: 'Mannem Raghu Babu',
      joiningYear: '2023',
      specialization: 'Accounting & Finance',
      qualification: 'M.Com, UGC-NET/JRF',
      researchInterests: 'Asset Pricing, Corporate Finance, Corporate Governance and Financial Management',
      email: 'raghumannem@imthyderabad.edu.in',
      image: '/images/fpm3.webp',
      description:
        'I am a research scholar pursuing a PhD in Management (Finance) at IMT Hyderabad. I hold a Master of Commerce (M. Com) degree and have qualified for the UGC-NET with a Junior Research Fellowship (JRF). Prior to joining FPM at IMT, Hyderabad, I was working as Assistant Professor at St. Marys college, Hyderabad. I also have around 5 years of corporate experience as Financial Analyst. My research interests include Asset Pricing, Corporate Finance, and Financial Management. I explore how firm-level financial decisions and macroeconomic factors affect asset values and investor behaviour. I employ empirical methods and data-driven approaches in my research, aiming to generate academically rigorous and practically relevant insights.',
    },
    {
      name: 'Vullinthala Jeevan',
      joiningYear: '2025',
      specialization: 'Strategy and General Management',
      qualification: 'M.A (Social Entrepreneurship-TISS Mumbai), B.Tech (Metallurgical and Materials Engineering-RGUKT IIIT Basar)',
      researchInterests: 'Social entrepreneurship, Social innovation, Rural livelihoods',
      email: 'vullinthalajeevan@imthyderabad.edu.in',
      image: '/images/fpm4.webp',
      description:
        'I am a research scholar- FPM at IMT Hyderabad. I have UGC NET in Management. As a scholar, I seek to explore the various dimensions of social enterprises and contribute to the growing academic literature. With a strong aspiration to connect industry and academia through my research work, I aim to translate real-world challenges faced by social entrepreneurs into scholarly inquiry and ensure that my findings contribute to the field with practical solutions.',
    },
    {
      name: 'Reshma Sultana',
      joiningYear: '2025',
      specialization: 'Marketing',
      qualification: 'MBA, B.Ed., Dip. in HR, UGC-NET and TG SET',
      researchInterests: 'Consumer Behavior, Branding & Brand Management, Market Strategy and Innovation, Sustainability and Ethical Marketing, Experiential & Sensory Marketing',
      email: 'reshmasultana@imthyderabad.edu.in',
      image: '/images/fpm5.webp',
      description:
        'I hold an M.B.A in Marketing and B.Ed. in Social and English methodology from Osmania University. I have also qualified for UGC-NET in Management. I have four years of teaching experience, teaching courses in marketing, management and related disciplines and three years of corporate experience in marketing and HR. I am a researcher with a keen interest in exploring contemporary issues in management and marketing. My research interests include Consumer Behavior, Branding & Brand Management, Market Strategy and Innovation and Sustainability and Ethical Marketing. My goal is to generate insights that bridge theory and practice, contributing to both academic scholarship and industry applications.',
    },
  ];

  // FPM Course Structure data
  const courseStructure = {
    preparatory: [
      [
        { name: 'Spreadsheet Modeling', credits: 'NC' },
        { name: 'Microeconomics', credits: 'NC' },
        { name: 'Personality Growth Lab', credits: 'NC' },
      ],
      [
        { name: 'Case Learning Pedagogy', credits: 'NC' },
        { name: 'Financial Accounting (Self Study Material)', credits: 'NC' },
        { name: 'Personal & Professional Etiquette', credits: 'NC' },
      ],
      [
        { name: 'Business Statistics / Quantitative Methods', credits: 'NC' },
        { name: 'Communications & Group Discussion Lab', credits: 'NC' },
        { name: 'Experiential Learning Lab', credits: 'NC' },
      ],
    ],
    preparatoryNote:
      'The FPM scholars are required to attend the following compulsory courses from Preparatory work (Foundation courses): Spreadsheet modelling, Case Learning Pedagogy, Business Statistics/Quantitative Methods, and Personal & Professional Growth Lab. Remaining courses are optional. The first year course work will begin soon after the foundation course work.',
    year1: [
      {
        term: 'TERM I (Jul-Sep)',
        subjects: [
          { name: 'Quantitative Methods', credits: 3 },
          { name: 'Marketing Management', credits: 3 },
          { name: 'Organizational Behaviour', credits: 3 },
          { name: 'Macroeconomics Principles and Policies', credits: 3 },
          { name: 'Operations Management', credits: 3 },
        ],
        totalCredits: 15,
      },
      {
        term: 'TERM II (Oct-Dec)',
        subjects: [
          { name: 'Advanced Research Methods - Quantitative', credits: 3 },
          { name: 'Business and Corporate Finance', credits: 3 },
          { name: 'Human Resource Management', credits: 3 },
          { name: 'Introduction to Management Thought', credits: 3 },
          {
            name: 'Core Elective - (Marketing theories/ Finance theories/ Organizational Development and Structure / Operation Theories- to be offered as per the specialisation of the scholar)',
            credits: 3,
          },
        ],
        totalCredits: 15,
      },
      {
        term: 'TERM III (Jan-Mar)',
        subjects: [
          { name: 'Strategic Management', credits: 3 },
          { name: 'Design Thinking', credits: 3 },
          { name: 'Critical Thinking and Technical Writing', credits: 3 },
          { name: 'Advanced Research Methods - Qualitative', credits: 3 },
          { name: 'Data Science (Artificial Intelligence/Machine Learning)', credits: 3 },
        ],
        totalCredits: 15,
      },
    ],
    year2: [
      {
        term: 'TERM IV (3 Months)',
        subjects: [
          { name: 'Case Writing', credits: 3 },
          { name: 'Area Core Course # 1', credits: 3 },
          { name: 'Area Core Course # 2', credits: 3 },
          { name: 'Area Core Course # 3', credits: 3 },
        ],
        totalCredits: 12,
      },
      {
        term: 'TERM V (3 Months)',
        subjects: [
          { name: 'Review of Literature (ROL): [Writing a review paper]', credits: 3 },
          { name: 'Pedagogies in Management', credits: 3 },
          { name: 'Area Core Course # 4', credits: 3 },
          { name: 'Area Elective Course # 1', credits: 3 },
          { name: 'Area Elective Course # 2', credits: 3 },
        ],
        totalCredits: 12,
      },
      {
        term: 'TERM VI (3 Months)',
        subjects: [
          { name: 'Area Elective Course # 3', credits: 3 },
          { name: 'Area Elective Course # 4', credits: 3 },
          { name: 'Short Research Project', credits: 3 },
        ],
        totalCredits: 9, // Corrected to reflect total credits for TERM VI
        ce: '*CE',
        pif: 'PIF',
      },
    ],
    year2Note:
      '*The Scholars will appear for Comprehensive Examination (CE) within 3 months from the date of completing term III. All courses of FPM 2nd year carry 3 credits each',
  };

  // Initialize AOS
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <>
      {/* Embedded CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Faculty Hero */
        .faculty-hero {
          background: url('/media/banners/Group 12.jpg') !important;
          position: relative;
          background-size: cover !important;
          height: 60vh;
            background-position: center !important;
        }
        .faculty-hero::before {
          content: '';
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
          color: #ffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* Table styling */
        .table thead th {
          background-color: #08317a !important;
          color: #fff;
          font-weight: 600;
        }
        .table td, .table th {
          vertical-align: middle;
        }
    `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Faculty Section - Hero and Breadcrumb */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/Group 4.jpg')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
              backgroundPosition: "center !important"
          }}
        >
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">
            FPM-Program
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            Nurturing scholars who question, explore, and redefine management
            thinking.
            <br />
            Our FPM program builds research excellence rooted in rigor,
            relevance, and innovation.
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
                  FPM-Program
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Program Overview Section */}
        <section className="py-5">
          <div className="container">
            <div className="bg-white p-4 rounded-4 mb-3" data-aos="fade-up">
              <h2
                className="fw-bold border-bottom pb-2 text-center"
                style={{ color: "#08317a" }}
              >
                PROGRAM OVERVIEW
              </h2>
              <p className="mt-3">
                The Fellow Programme in Management at IMT Hyderabad is a
                full-time doctoral program designed for students, working
                executives and academicians with strong academic orientation, to
                undertake rigorous and original research. The program aims to
                develop outstanding scholars for careers in academia, research,
                and consulting for the industry, government and social sector.
                The FPM is a four-year program during which scholars will
                undergo rigorous coursework comprising general management
                subjects, core courses, and advanced courses. After completing
                the Comprehensive Examination, scholars will be engaged in their
                doctoral dissertations in the third and fourth year. The time
                duration may be extended up to seven years, depending upon the
                progress report of the scholar. All full time scholars will
                receive a monthly stipend that covers all costs in addition to
                being provided with a modest accommodation. IMT-H provides an
                excellent ecosystem & facilities for pursuing research
              </p>
              <div
                className="text-white p-3 fw-bold"
                style={{ backgroundColor: "#163977" }}
              >
                FPM COURSE STRUCTURE
              </div>
              <div className="table-responsive mt-2">
                <table className="table table-bordered align-middle">
                  <tbody>
                    {/* Preparatory Section */}
                    <tr>
                      <th rowSpan="4" scope="row" className="align-middle">
                        Preparatory (Jun-Jul 4 weeks)
                      </th>
                      <th scope="col">SUBJECT</th>
                      <th scope="col" className="text-center">
                        CREDITS
                      </th>
                      <th scope="col">SUBJECT</th>
                      <th scope="col" className="text-center">
                        CREDITS
                      </th>
                      <th scope="col">SUBJECT</th>
                      <th scope="col" className="text-center">
                        CREDITS
                      </th>
                    </tr>
                    {courseStructure.preparatory.map((row, index) => (
                      <tr key={index}>
                        {row.map((subject, subIndex) => (
                          <React.Fragment key={subIndex}>
                            <td>{subject.name}</td>
                            <td className="text-center">{subject.credits}</td>
                          </React.Fragment>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="7" className="p-2 small">
                        {courseStructure.preparatoryNote}
                      </td>
                    </tr>
                    {/* Year 1 Section */}
                    <tr>
                      <th rowSpan="7" scope="row" className="align-middle">
                        YEAR 1 Coursework (Total Credits for Year 1 =45)
                      </th>
                      <th scope="col">TERM I (Jul-Sep)</th>
                      <th scope="col" className="text-center">
                        CREDITS
                      </th>
                      <th scope="col">TERM II (Oct-Dec)</th>
                      <th scope="col" className="text-center">
                        CREDITS
                      </th>
                      <th scope="col">TERM III (Jan-Mar)</th>
                      <th scope="col" className="text-center">
                        CREDITS
                      </th>
                    </tr>
                    {courseStructure.year1[0].subjects.map((_, index) => (
                      <tr key={index} className="table-warning">
                        <td>
                          {courseStructure.year1[0].subjects[index]?.name || ""}
                        </td>
                        <td className="text-center">
                          {courseStructure.year1[0].subjects[index]?.credits ||
                            ""}
                        </td>
                        <td>
                          {courseStructure.year1[1].subjects[index]?.name || ""}
                        </td>
                        <td className="text-center">
                          {courseStructure.year1[1].subjects[index]?.credits ||
                            ""}
                        </td>
                        <td>
                          {courseStructure.year1[2].subjects[index]?.name || ""}
                        </td>
                        <td className="text-center">
                          {courseStructure.year1[2].subjects[index]?.credits ||
                            ""}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>Total Credits for TERM I</td>
                      <td className="text-center">
                        {courseStructure.year1[0].totalCredits}
                      </td>
                      <td>Total Credits for TERM II</td>
                      <td className="text-center">
                        {courseStructure.year1[1].totalCredits}
                      </td>
                      <td>Total Credits for TERM III</td>
                      <td className="text-center">
                        {courseStructure.year1[2].totalCredits}
                      </td>
                    </tr>
                    {/* Year 2 Section */}
                    <tr>
                      <th rowSpan="7" scope="row" className="align-middle">
                        YEAR 2 Coursework (Total Credits for Year 2 =36)
                      </th>
                      <th scope="col">TERM IV (3 Months)</th>
                      <th scope="col" className="text-center">
                        CREDITS
                      </th>
                      <th scope="col">TERM V (3 Months)</th>
                      <th scope="col" className="text-center">
                        CREDITS
                      </th>
                      <th scope="col">TERM VI (3 Months)</th>
                      <th scope="col" className="text-center">
                        CREDITS
                      </th>
                    </tr>
                    {courseStructure.year2[0].subjects.map((_, index) => (
                      <tr key={index} className="table-warning">
                        <td>
                          {courseStructure.year2[0].subjects[index]?.name || ""}
                        </td>
                        <td className="text-center">
                          {courseStructure.year2[0].subjects[index]?.credits ||
                            ""}
                        </td>
                        <td>
                          {courseStructure.year2[1].subjects[index]?.name || ""}
                        </td>
                        <td className="text-center">
                          {courseStructure.year2[1].subjects[index]?.credits ||
                            ""}
                        </td>
                        <td>
                          {courseStructure.year2[2].subjects[index]?.name || ""}
                        </td>
                        <td className="text-center">
                          {courseStructure.year2[2].subjects[index]?.credits ||
                            ""}
                        </td>
                      </tr>
                    ))}
                    <tr className="table-warning">
                      <td></td>
                      <td></td>
                      <td>
                        {courseStructure.year2[1].subjects[4]?.name || ""}
                      </td>
                      <td className="text-center">
                        {courseStructure.year2[1].subjects[4]?.credits || ""}
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Total Credits for TERM IV</td>
                      <td className="text-center">
                        {courseStructure.year2[0].totalCredits}
                      </td>
                      <td>Total Credits for TERM V</td>
                      <td className="text-center">
                        {courseStructure.year2[1].totalCredits}
                      </td>
                      <td>{courseStructure.year2[2].ce}</td>
                      <td className="text-center">
                        {courseStructure.year2[2].pif}
                      </td>
                    </tr>
                    <tr className="table-light">
                      <td colSpan="7" className="p-2 small">
                        {courseStructure.year2Note}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Students on Roll Section */}
        <section className="mt-4 mb-5">
          <div className="container bg-white p-4 rounded-4">
            <h2
              className="text-center text-uppercase fw-bold mb-5"
              data-aos="fade-up"
            >
              Students on Roll
            </h2>
            {/* Row 1: Two students */}
            <div className="row mb-4">
              {students.slice(0, 2).map((student, index) => (
                <div
                  className="col-12 col-md-6 mb-3 mb-md-0"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="card h-100 p-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <Image
                          src={student.image}
                          alt={`${student.name} Photo`}
                          className="img-fluid rounded-start faculty-img"
                          width={224}
                          height={224}
                          style={{ height: "14rem", objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-title">
                            <strong>Name:</strong> {student.name}
                          </p>
                          <p className="card-text">
                            <strong>Joining Year:</strong> {student.joiningYear}
                          </p>
                          <p className="card-text">
                            <strong>Specialization:</strong>{" "}
                            {student.specialization}
                          </p>
                          <p className="card-text">
                            <strong>Qualification:</strong>{" "}
                            {student.qualification}
                          </p>
                          <p className="card-text">
                            <strong>Research Interests:</strong>{" "}
                            {student.researchInterests}
                          </p>
                          <p className="card-text">
                            <strong>Email:</strong>{" "}
                            <Link
                              href={`mailto:${student.email}`}
                              className="link-primary"
                            >
                              {student.email}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <span>{student.description}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Row 2: Two students */}
            <div className="row mb-4">
              {students.slice(2, 4).map((student, index) => (
                <div
                  className="col-12 col-md-6 mb-3 mb-md-0"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="card h-100 p-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <Image
                          src={student.image}
                          alt={`${student.name} Photo`}
                          className="img-fluid rounded-start faculty-img"
                          width={224}
                          height={224}
                          style={{ height: "14rem", objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-title">
                            <strong>Name:</strong> {student.name}
                          </p>
                          <p className="card-text">
                            <strong>Joining Year:</strong> {student.joiningYear}
                          </p>
                          <p className="card-text">
                            <strong>Specialization:</strong>{" "}
                            {student.specialization}
                          </p>
                          <p className="card-text">
                            <strong>Qualification:</strong>{" "}
                            {student.qualification}
                          </p>
                          <p className="card-text">
                            <strong>Research Interests:</strong>{" "}
                            {student.researchInterests}
                          </p>
                          <p className="card-text">
                            <strong>Email:</strong>{" "}
                            <Link
                              href={`mailto:${student.email}`}
                              className="link-primary"
                            >
                              {student.email}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <span>{student.description}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Row 3: One student */}
            <div className="row">
              {students.slice(4).map((student, index) => (
                <div
                  className="col-12 mb-3 mb-md-0"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="card h-100 p-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <Image
                          src={student.image}
                          alt={`${student.name} Photo`}
                          className="img-fluid rounded-start faculty-img"
                          width={256}
                          height={256}
                          style={{ height: "16rem", objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-title">
                            <strong>Name:</strong> {student.name}
                          </p>
                          <p className="card-text">
                            <strong>Joining Year:</strong> {student.joiningYear}
                          </p>
                          <p className="card-text">
                            <strong>Specialization:</strong>{" "}
                            {student.specialization}
                          </p>
                          <p className="card-text">
                            <strong>Qualification:</strong>{" "}
                            {student.qualification}
                          </p>
                          <p className="card-text">
                            <strong>Research Interests:</strong>{" "}
                            {student.researchInterests}
                          </p>
                          <p className="card-text">
                            <strong>Email:</strong>{" "}
                            <Link
                              href={`mailto:${student.email}`}
                              className="link-primary"
                            >
                              {student.email}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <span>{student.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
