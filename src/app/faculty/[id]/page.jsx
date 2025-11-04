'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FacultyProfile() {
  // Faculty data for Prof. (Dr.) Ahmad Faraz Khan
  const faculty = {
    name: 'Prof (Dr) AHMAD FARAZ KHAN',
    designation: 'Associate Professor',
    qualification: 'PhD, MBA, B.Sc. (IT)',
    functionalArea: 'General Management',
    dateOfJoining: '01 July 2025',
    email: 'afaraz@imthyderabad.edu.in',
    phone: '+91 87550 69065',
    image: 'https://www.imthyderabad.edu.in/assets/admin/images/faculty-directory/1753782194_afaraz.jpeg',
    qrCode: 'https://www.imthyderabad.edu.in/assets/admin/images/faculty-directory/QRCode/1753782194_afaraz.png',
    brief:
      'Dr Ahmad Faraz Khan is a scholar and educator whose work lies at the intersection of organizational theory, entrepreneurship, and social change. He has worked as a Visiting Researcher at the Telfer School of Management, University of Ottawa, Canada. He received his PhD in General Management from Aligarh Muslim University. His research has earned recognition at premier international conferences such as the Academy of Management (AOM), European Group for Organizational Studies (EGOS) and Academy of International Business. His work has been published in international journals such as Business & Society, Benchmarking, SAGE Open, and AOM Best Paper Proceedings and supported by competitive grants, including the prestigious Scheme for Promotion of Academic and Research Collaboration (SPARC) of the Ministry of Human Resource Development (MHRD), India.<br><br>Dr Khan has designed and delivered innovative courses in entrepreneurship, strategy, and design thinking. He has delivered Bootcamps on entrepreneurship, trained executives, and contributed to policy work with organizations such as UNICEF. Committed to social impact, he integrates research, teaching, and practice to drive inclusive development and supports community organizations.',
    education: [
      { degree: 'Ph.D.', institution: 'Aligarh Muslim University, Aligarh, India', years: '2012 – 2014' },
      { degree: 'Master of Business Administration', institution: 'Aligarh Muslim University, Aligarh, India', years: '2008 – 2010' },
      { degree: 'Bachelor of Science (Information Technology)', institution: 'Aligarh Muslim University, Aligarh, India', years: '2005 – 2008' },
    ],
    teachingInterests: ['Strategic Management', 'Entrepreneurship', 'Strategic Change', 'Qualitative Research', 'Design Thinking'],
    researchInterests: ['Societal Grand Challenges', 'Prosocial Organizing', 'Entrepreneurship', 'Social Entrepreneurship', 'Qualitative Research'],
    journalPapers: [
      {
        citation: 'Khan, A. F., & Ishrat, I. (2025, Accepted), <em>Revisiting Home in Home-Based Work: A Call for Epistemic Compassion.</em> Business & Society, 0 (0), 1–6. [ABDC A and ABS 3*]',
      },
      {
        citation: 'Khan, A. F., Nasim, S. & Yadav, N. (2024), <em>Engineering and Environmental Solutions: the growth conundrum.</em> Emerald Emerging Markets Case Studies, 14(4), 1–35.',
      },
      {
        citation: 'Khan, A. F., Riaz, S. & Bhardwaj, A. (2023), <em>Elite Discourse and Preserving Social Hierarchies...</em> Proceedings of the Academy of Management.',
      },
      {
        citation: 'Akbar, H., Khan, A. F. & Talib, P. (2022), <em>Ambidexterity and Human Resource Management...</em> Int. J. Business and Data Analytics, 2(1), 52–71.',
      },
      {
        citation: 'Jayaraman, S., Talib, P., & Khan, A. F. (2018), <em>Integrated Talent Management Scale...</em> Sage Open, 8(3), 1–12.',
      },
      {
        citation: 'Kumar, V., Verma, P., Sharma, R.R.K. & Khan, A. F. (2017), <em>Conquering in Emerging Markets...</em> Benchmarking: An International Journal, 24 (3).',
      },
      {
        citation: 'Khan, A. F. & Talib, P. (2016), <em>Midlife Career Stress (MLCS)...</em> Indian Journal of Industrial Relations, 52(2), 307–320.',
      },
    ],
    conferencePapers: [
      {
        citation: 'Khan, A. F., Riaz, S. & Bhardwaj, A. (2025). <em>Organizing Multi-stakeholder Partnerships...</em> 51st AIB UK & Ireland Chapter Conference, University of Surrey, UK.',
      },
      {
        citation: 'Ishrat, I., Khan, A. F. & Farooq, A. (2024). <em>In Search of ‘Spaces of Agency’...</em> 1st Organization Virtual Conference.',
      },
      {
        citation: 'Ishrat, I., Khan, A. F. & Farooq, A. (2024). <em>Illusio and Home-Based Work...</em> 40th EGOS Colloquium, Milan, Italy.',
      },
      {
        citation: 'Saeed, A. M. & Khan, A. F. (2024). <em>Examining the Influence of Decision-making Logics...</em> 40th EGOS Colloquium, Milan, Italy.',
      },
      {
        citation: 'Khan, A. F., Riaz, S. & Bhardwaj, A. (2024). <em>Organizing Multi-stakeholder Partnerships...</em> 2024 ASAC Conference, Montreal, Canada.',
      },
      {
        citation: 'Khan, A. F., Riaz, S. & Bhardwaj, A. (2023). <em>Elite Discourse and Preserving Social Hierarchies...</em> 83rd Annual Meeting of the Academy of Management, Boston, USA.',
      },
      {
        citation: 'Ishrat, I., Hasan, M. & Khan, A. F. (2023). <em>Exploring the Dynamics of Collaboration...</em> British Academy of Management 2023, UK.',
      },
      {
        citation: 'Khan, A. F. & Ishrat, I. (2022). <em>A Socially Embedded view of Necessity Entrepreneurship...</em> IIM Kashipur, India.',
      },
      {
        citation: 'Nasim, S. & Khan, A. F. (2019). <em>Drivers of Blockchain Adoption in Pharmaceutical Sector.</em> GLOGIFT 19, IIT Roorkee, India.',
      },
      {
        citation: 'Akbar, H., Khan, A. F. & Talib, P. (2018). <em>Ambidexterity and Human Resource Management...</em> FOBE 2018, IMT Ghaziabad, India.',
      },
      {
        citation: 'Akbar, H., Khan, A. F. & Talib, P. (2018). <em>Talent management: A strategy towards sustainable advantage.</em> GLOGIFT 18, IIM Lucknow, India.',
      },
    ],
    awards: [
      {
        year: '2023',
        description: 'Best Paper Proceedings (top 10% of accepted papers), <em>Academy of Management</em>. Paper: <em>Elite Discourse and Preserving Social Hierarchies: The Case of School Education in India</em>',
      },
      {
        year: '2021',
        description: 'Gold Level Jury Contribution – Awarded for being part of the global jury and evaluating student startup proposals from across the world by <em>Wadhwani Foundation</em>.',
      },
      {
        year: '2010',
        description: 'Syed Hasan Qasim Memorial Gold Medal in MBA.',
      },
    ],
    service: [
      {
        role: 'Assistant Professor, Department of Business Administration',
        institution: 'Aligarh Muslim University, Aligarh, India',
        years: 'Aug 2016 – June 2025',
      },
    ],
    otherActivities: [
      'Visiting Researcher at the Telfer School of Management, University of Ottawa, Canada',
      'Master Trainer for Innovation, Design, and Entrepreneurship (IDE) Bootcamps, organized by Ministry of Education, AICTE, and the Wadhwani Foundation',
      'Empaneled Trainer at All India Management Association (AIMA), New Delhi',
    ],
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
      <style jsx global>{`
        /* Faculty Hero */
        .faculty-hero {
          background: url('/media/banners/faculty.webp') !important;
          position: relative;
          background-size: cover !important;
          height: 60vh;
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
        .social-icon.rounded-0 {
          border-radius: 0;
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
          color: #000000;
        }
      `}</style>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Faculty Section */}
      <section className="faculty-section">
        {/* Hero Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/faculty.webp')",
            position: 'relative',
            backgroundSize: 'cover',
            height: '60vh',
          }}
        >
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">
            Our Inspiring Faculties
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            Meet the mentors shaping the future
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ backgroundColor: 'rgb(22, 57, 119)' }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/faculty" className="text-white fw-bold" style={{ textDecoration: 'none' }}>
                    Faculty
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  {faculty.name}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Faculty Profile Card */}
        <div className="container mt-5">
          <div className="row faculty-card shadow-lg p-4 rounded-4 align-items-center g-4" data-aos="fade-up">
            {/* Left: Photo */}
            <div className="col-lg-3 col-md-4 text-center">
              <Image
                src={faculty.image}
                alt={faculty.name}
                className="img-fluid rounded-4 faculty-img shadow-sm"
                width={310}
                height={310}
                style={{ maxHeight: '310px', objectFit: 'cover' }}
              />
            </div>

            {/* Center: Details */}
            <div className="col-lg-6 col-md-8">
              <h3 className="fw-bold mb-3" style={{ color: 'rgb(22, 57, 119)' }}>
                <i>{faculty.name}</i>
              </h3>
              <ul className="list-unstyled mb-4">
                <li>
                  <strong>Designation:</strong> {faculty.designation}
                </li>
                <li>
                  <strong>Qualification:</strong> {faculty.qualification}
                </li>
                <li>
                  <strong>Functional Area:</strong> {faculty.functionalArea}
                </li>
                <li>
                  <strong>Date of Joining:</strong> {faculty.dateOfJoining}
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <Link href={`mailto:${faculty.email}`} className="link-primary">
                    {faculty.email}
                  </Link>
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <Link href={`tel:${faculty.phone.replace(/\s/g, '')}`} className="link-primary">
                    {faculty.phone}
                  </Link>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="d-flex gap-3">
                <Link href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fas fa-globe"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="bi bi-google"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="bi bi-search"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="bi bi-anthropic"></i>
                </Link>
              </div>
            </div>

            {/* Right: QR Code */}
            <div className="col-lg-3 text-center">
              <Image
                src={faculty.qrCode}
                alt="QR code"
                className="img-fluid"
                width={240}
                height={240}
                style={{ maxWidth: '240px' }}
              />
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="container my-5">
          <div className="faculty-tabs mt-4">
            {/* Nav Pills */}
            <ul className="nav nav-pills justify-content-center flex-wrap gap-2 mb-4" id="facultyTab" role="tablist">
              {['Brief', 'Education', 'Teaching & Research Interests', 'Publications', 'Awards & Honors', 'Service', 'Other Professional Activities'].map((tab, index) => (
                <li className="nav-item" role="presentation" key={index}>
                  <button
                    className={`nav-link ${index === 0 ? 'active' : ''}`}
                    id={`${tab.toLowerCase().replace(/ & /g, '-').replace(/\s/g, '-')}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${tab.toLowerCase().replace(/ & /g, '-').replace(/\s/g, '-')}`}
                    type="button"
                    role="tab"
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>

            {/* Tab Panes */}
            <div className="tab-content p-4 rounded-4 shadow-sm bg-light">
              {/* Brief */}
              <div className="tab-pane fade show active" id="brief" role="tabpanel" aria-labelledby="brief-tab">
                <div dangerouslySetInnerHTML={{ __html: faculty.brief }} />
                <div className="d-flex gap-3 mt-3">
                  {[
                    { icon: 'bi bi-instagram', href: '#' },
                    { icon: 'bi bi-twitter-x', href: '#' },
                    { icon: 'fas fa-globe', href: '#' },
                    { icon: 'bi bi-stripe', href: '#' },
                    { icon: 'fa-regular fa-lightbulb', href: '#' },
                    { icon: 'fa-regular fa-square-minus', href: '#' },
                    { icon: 'fa-solid fa-a mx-1', secondIcon: 'fa-solid fa-x me-1', href: '#' },
                    { icon: 'fa-solid fa-b mx-1', secondIcon: 'fa-solid fa-r me-1', href: '#' },
                  ].map((social, index) => (
                    <Link key={index} href={social.href} className="social-icon rounded-0">
                      <i className={social.icon}></i>
                      {social.secondIcon && <i className={social.secondIcon}></i>}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
                <div className="row">
                  <div className="col-md-12 mb-4 mb-md-0">
                    <h5>
                      <span className="badge bg-warning text-dark rounded-pill px-3 py-2">Education</span>
                    </h5>
                    <ul className="list-group list-group-flush mt-3">
                      {faculty.education.map((edu, index) => (
                        <li className="list-group-item" key={index}>
                          <strong>{edu.degree}</strong> – {edu.institution} ({edu.years})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Teaching & Research Interests */}
              <div className="tab-pane fade" id="teaching-research-interests" role="tabpanel" aria-labelledby="teaching-research-interests-tab">
                <div className="row">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <h5>
                      <span className="badge bg-warning text-dark rounded-pill px-3 py-2">Teaching Interests</span>
                    </h5>
                    <ul className="mt-3 mb-0">
                      {faculty.teachingInterests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      <span className="badge bg-warning text-dark rounded-pill px-3 py-2">Research Interests</span>
                    </h5>
                    <ul className="mt-3 mb-0">
                      {faculty.researchInterests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Publications */}
              <div className="tab-pane fade" id="publications" role="tabpanel" aria-labelledby="publications-tab">
                <ul className="nav nav-pills justify-content-start mb-4" id="pubInnerTab" role="tablist">
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      id="journals-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#journals"
                      type="button"
                      role="tab"
                      aria-controls="journals"
                      aria-selected="true"
                    >
                      Journal Papers
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="conferences-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#conferences"
                      type="button"
                      role="tab"
                      aria-controls="conferences"
                      aria-selected="false"
                    >
                      Conference Presentations
                    </button>
                  </li>
                </ul>
                <div className="tab-content p-3 rounded-4 bg-white shadow-sm">
                  <div className="tab-pane fade show active" id="journals" role="tabpanel" aria-labelledby="journals-tab">
                    <ul className="list-group list-group-flush">
                      {faculty.journalPapers.map((paper, index) => (
                        <li className="list-group-item" key={index} dangerouslySetInnerHTML={{ __html: paper.citation }} />
                      ))}
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="conferences" role="tabpanel" aria-labelledby="conferences-tab">
                    <ul className="list-group list-group-flush">
                      {faculty.conferencePapers.map((paper, index) => (
                        <li className="list-group-item" key={index} dangerouslySetInnerHTML={{ __html: paper.citation }} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Awards & Honors */}
              <div className="tab-pane fade" id="awards-honors" role="tabpanel" aria-labelledby="awards-honors-tab">
                <ul className="list-group list-group-flush">
                  {faculty.awards.map((award, index) => (
                    <li className="list-group-item" key={index}>
                      <strong>{award.year} –</strong> {award.description}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service */}
              <div className="tab-pane fade" id="service" role="tabpanel" aria-labelledby="service-tab">
                <div className="col-md-12">
                  <h5>
                    <span className="badge bg-warning text-dark rounded-pill px-3 py-2">Service</span>
                  </h5>
                  <ul className="list-group list-group-flush mt-3">
                    {faculty.service.map((service, index) => (
                      <li className="list-group-item" key={index}>
                        {service.years}: {service.role}, {service.institution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Other Professional Activities */}
              <div className="tab-pane fade" id="other-professional-activities" role="tabpanel" aria-labelledby="other-professional-activities-tab">
                <h5>
                  <span className="badge bg-warning text-dark rounded-pill px-3 py-2">Other Professional Activities</span>
                </h5>
                <ul className="list-group list-group-flush mt-3">
                  {faculty.otherActivities.map((activity, index) => (
                    <li className="list-group-item" key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>x
      </section>
    </>
  );
}