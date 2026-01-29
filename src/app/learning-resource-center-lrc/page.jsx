"use client";

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const LearningResourceCenter = () => {
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
    <div className="lrc-page">
      {/* Note: Replace with <Navbar /> component */}
      {/* <Navbar /> */}

      {/* Faculty Section */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h2 className="display-5 fw-bold mb-2">Learning Resource Center (LRC)</h2>
            <p className="text-white">
             A knowledge hub that fuels curiosity and scholarship. <br />
Our Learning Resource Centre integrates digital depth with academic richness for global research access.
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
                  LRC
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* LRC Tabs Section */}
      <section className="py-3">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          {/* Main Tabs Navigation */}
          <nav className="nav nav-pills justify-content-center flex-wrap gap-2" role="tablist">
            <Link
              className="nav-link rounded-pill bg-white active"
              data-bs-toggle="tab"
              href="#tab-about"
              role="tab"
              aria-controls="tab-about"
              aria-selected="true"
            >
              About LRC
            </Link>
            <Link
              className="nav-link rounded-pill bg-white"
              data-bs-toggle="tab"
              href="#tab-resources"
              role="tab"
              aria-controls="tab-resources"
              aria-selected="false"
            >
              Resources
            </Link>
            <Link
              className="nav-link rounded-pill bg-white"
              data-bs-toggle="tab"
              href="#tab-faqs"
              role="tab"
              aria-controls="tab-faqs"
              aria-selected="false"
            >
              FAQ's
            </Link>
          </nav>

          {/* Main Tab Content */}
          <div className="tab-content container mt-4">
            {/* About LRC Tab */}
            <div className="tab-pane fade show active bg-white p-4 rounded-4" id="tab-about" role="tabpanel">
              <h5 className="mb-3 section-subtitle">About LRC</h5>
              <p>
                As any other academic library, Learning Resource Centre at IMT Hyderabad is the heart of the Institution. It is more deeply engaged with the fundamental mission of the institution i.e., Harnessing Knowledge for the Business.
              </p>
              <p>
                A knowledge hub plays a vital role in the academic as well as research support. LRC collaborates with other departments, staff, students and faculty for their individual research, course curriculum as well as for the self-development.
              </p>
              <p>
                It imparts the knowledge among its user groups by creation and dissemination of the knowledge through offering a wide range of services such as reference services, research support, user guidance, database training sessions, online catalogue services, selective dissemination services, TOC Services to its user groups. LRC has well-trained staff to support all the services and activities extended by LRC.
              </p>

              {/* About LRC Sub-Tabs */}
              <nav className="nav nav-pills flex-wrap gap-2 mb-4 justify-content-center mt-4" role="tablist">
                <Link
                  className="nav-link bg-light text-dark rounded-pill active"
                  data-bs-toggle="pill"
                  href="#sub-res-opening"
                  role="tab"
                  aria-controls="sub-res-opening"
                  aria-selected="true"
                >
                  Opening Hours
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-membership"
                  role="tab"
                  aria-controls="sub-res-membership"
                  aria-selected="false"
                >
                  Membership
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-rules"
                  role="tab"
                  aria-controls="sub-res-rules"
                  aria-selected="false"
                >
                  Guidelines & Rules
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-policies"
                  role="tab"
                  aria-controls="sub-res-policies"
                  aria-selected="false"
                >
                  Circulation Policies
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-lrc"
                  role="tab"
                  aria-controls="sub-res-lrc"
                  aria-selected="false"
                >
                  LRC Team
                </Link>
              </nav>

              {/* About LRC Sub-Tab Content */}
              <div className="tab-content container-sm">
                <div className="tab-pane fade show active" id="sub-res-opening" role="tabpanel">
                  <ul className="d-flex flex-column gap-2">
                    <li>Mon-Fri – 9:30 AM to 11:30 PM</li>
                    <li>Sat – 9:30 AM to 8:30 PM</li>
                    <li>Sun – 9:30 AM to 6:00 PM</li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="sub-res-membership" role="tabpanel">
                  <p>The following are entitled to enroll themselves as LRC members:</p>
                  <ul className="d-flex flex-column gap-2">
                    <li>Enrolled Students of IMT, Hyderabad</li>
                    <li>Faculty Members</li>
                    <li>Faculty Associates</li>
                    <li>Officers & Staff Members</li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="sub-res-rules" role="tabpanel">
                  <p>General Rules for students</p>
                  <ul className="d-flex flex-column gap-2">
                    <li>Students should leave their personal belongings, such as bags, brief-cases, personal books and parcels at the property counter of LRC at their own risk.</li>
                    <li>The LRC follows an open access system. Books or other materials taken from the stacks should not be re-shelved, but should be left on the tables reserved for this purpose.</li>
                    <li>The student is responsible for the loss and / or misuse of LRC cards. The loss of a card should be immediately reported to the LRC. Duplicate card(s) will be issued at the cost of 100/- per card</li>
                    <li>The member would satisfy himself/herself before leaving the issue counter as to whether the book is in sound condition or not. Otherwise he/her may be responsible.</li>
                    <li>The student is responsible for any book issued against the LRC membership card. A student can borrow a maximum of two books (one book per membership card) for a period of two weeks.</li>
                    <li>Books can be reissued, if there are no requests by other users</li>
                    <li>Student who lose books issued on their membership cards shall either replace them with the latest edition or pay the current price of the lost book(s)</li>
                    <li>Student are required to enter their name, time in and out and sign the register kept for the purpose at the entrance</li>
                    <li>A person leaving the LRC must if required to do so by a member of the Library staff, present Library items and folders, bags and similar objects in their possession for inspection by a member of the Library staff.</li>
                    <li>No compensation can be claimed from the LRC in case of any damages to students’ personal belongings inside the LRC.</li>
                    <li>Mobile phones must be set to silent mode or switched off while in the LRC.</li>
                    <li>Food and beverages strictly prohibited inside the LRC.</li>
                    <li>Users are requested to follow a decent dress code inside the LRC.</li>
                    <li>Readers should maintain peace in the library and should not disturb other users in any way.</li>
                    <li>Using computers of library for Facebook, emails, chatting, and watching video is prohibited.</li>
                    <li>Students should surrender the LRC membership cards during the no dues process, failing which, a fine of Rs.100/- per card will be charged.</li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="sub-res-policies" role="tabpanel">
                  <p>Eligibility to borrow books</p>
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">User Category</th>
                        <th scope="col">Entitlement</th>
                        <th scope="col">Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Faculty</td>
                        <td>30</td>
                        <td>90 Days</td>
                      </tr>
                      <tr>
                        <td>Faculty Associate</td>
                        <td>10</td>
                        <td>30 Days</td>
                      </tr>
                      <tr>
                        <td>Student</td>
                        <td>2</td>
                        <td>14 Days</td>
                      </tr>
                      <tr>
                        <td>Staff</td>
                        <td>4</td>
                        <td>30 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade" id="sub-res-lrc" role="tabpanel">
                  <p>
                    P. Srinivasulu - Deputy Librarian <br /><br />
                    C. Narasimha - Sr. Library Assistant <br /><br />
                    Kalyan J. Sandilya - Executive. <br /><br />
                    Ravi Varma - Library Intern
                  </p>
                </div>
              </div>
            </div>

            {/* Resources Tab */}
            <div className="tab-pane fade bg-white p-4 rounded-4" id="tab-resources" role="tabpanel">
              <h5 className="mb-3 text-center section-subtitle">Resources</h5>
              <nav className="nav nav-pills flex-wrap gap-2 mb-4 justify-content-center" role="tablist">
                <Link
                  className="nav-link bg-light text-dark rounded-pill active"
                  data-bs-toggle="pill"
                  href="#sub-res-resources"
                  role="tab"
                  aria-controls="sub-res-resources"
                  aria-selected="true"
                >
                  Resources
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-eresources"
                  role="tab"
                  aria-controls="sub-res-eresources"
                  aria-selected="false"
                >
                  E-Resources
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-remote"
                  role="tab"
                  aria-controls="sub-res-remote"
                  aria-selected="false"
                >
                  Remote Access
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-info"
                  role="tab"
                  aria-controls="sub-res-info"
                  aria-selected="false"
                >
                  Information Products & Services
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-opac"
                  role="tab"
                  aria-controls="sub-res-opac"
                  aria-selected="false"
                >
                  OPAC
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-ndl"
                  role="tab"
                  aria-controls="sub-res-ndl"
                  aria-selected="false"
                >
                  National Digital Library
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-swayam"
                  role="tab"
                  aria-controls="sub-res-swayam"
                  aria-selected="false"
                >
                  SWAYAM
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill"
                  data-bs-toggle="pill"
                  href="#sub-res-open"
                  role="tab"
                  aria-controls="sub-res-open"
                  aria-selected="false"
                >
                  Open Sources
                </Link>
              </nav>

              <div className="tab-content container-sm">
                <div className="tab-pane fade show active" id="sub-res-resources" role="tabpanel">
                  <p>
                    The collection of the library is ranging from the latest business management books, textbooks and audio-visual materials, e-books, e-journals and databases and also provide access to the various other resources as and when required. <br /><br />
                    How are the books arranged in the library? <br /><br />
                    Books in the library are arranged in classified order System. After locating an item in the OPAC, the screen will provide the call number for the item. The call number is the “address” of the item on the shelf. It will look something like the following: <br /><br />
                    658.3 (assigned to the book “HRM”) <br /><br />
                    658.5 (assigned to the book for “Operation Management”) <br /><br />
                    658.827 (assigned to the book “Brand Management”)
                  </p>
                </div>
                <div className="tab-pane fade" id="sub-res-eresources" role="tabpanel">
                  <strong>CMIE Database (Company Financial Data)</strong>
                  <ul>
                    <li><Link href="https://prowess.cmie.com/" className="text-primary">Prowess Web (One time registration required for accessing the database)</Link></li>
                    <li><Link href="https://economicoutlook.cmie.com/" className="text-primary">Economic Outlook</Link></li>
                  </ul>
                  <strong>Company and Industry Information</strong>
                  <ul>
                    <li><Link href="https://awsone.capitaline.com/login.html?flag=T" className="text-primary">Capitaline AWS (One time registration required for accessing the database)</Link></li>
                    <li><Link href="https://cas.emis.com/login" className="text-primary">EMIS / ISI Emerging Markets</Link></li>
                  </ul>
                  <strong>Socio - Economic Indicators</strong>
                  <ul>
                    <li><Link href="https://insights.ceicdata.com/login" className="text-primary">CEIC <span>(One time registration required for accessing the database)</span></Link></li>
                  </ul>
                  <strong>E-Journals & Management Literature Databases</strong>
                  <ul>
                    <li><Link href="https://www.emerald.com/" className="text-primary">Emerald (Marketing, HR, Operations)</Link></li>
                    <li><Link href="https://search.ebscohost.com" className="text-primary">Business Source Ultimate (EBSCO)</Link></li>
                    <li><Link href="https://www.sciencedirect.com/" className="text-primary">Science Direct (Business Management & Accounting)</Link></li>
                  </ul>
                  <strong>Online Legal Research Database</strong>
                  <ul>
                    <li><Link href="https://www.manupatrafast.com/" className="text-primary">Manupatra</Link></li>
                  </ul>
                  <strong>Case-Study Collection</strong>
                  <ul>
                    <li><Link href="https://hbsp.harvard.edu/home/" className="text-primary">Harvard Business Publishing</Link></li>
                  </ul>
                  <strong>E-Books</strong>
                  <ul>
                    <li><Link href="https://www.proquest.com/fromDatabasesLayer" className="text-primary">ProQuest E-Book Central</Link></li>
                  </ul>
                  <strong>Plagiarism Checker</strong>
                  <ul>
                    <li><Link href="https://www.turnitin.com/" className="text-primary">Turnitin</Link></li>
                  </ul>
                  <strong>Terminal for Company Data and Financial Information</strong>
                  <ul>
                    <li>Bloomberg Terminal (Access at LRC only)</li>
                  </ul>
                  <strong>Research Tools</strong>
                  <ul>
                    <li><Link href="https://www.grammarly.com/enterprise/signin" className="text-primary">Grammarly</Link></li>
                    <li><Link href="https://www.scopus.com/pages/preview#basic" className="text-primary">Scopus (Scopus is Elsevier's abstract and citation database)</Link></li>
                  </ul>
                  <strong>Global Learning Online Platform</strong>
                  <ul>
                    <li>
                      <Link href="https://www.coursera.org/" className="text-primary">Coursera</Link>{' '}
                      <span>(It is an online learning platform that offers courses, and other learning experiences from universities and companies. Institute subscribed to Coursera Plus subscription, which provides unlimited access to over 7,000 courses, guided projects, specializations, and professional certificates.)</span>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="sub-res-remote" role="tabpanel">
                  <p>
                    It is a one-stop solution for the library to provide users single window access to their digital resources on the cloud. It has an ability to provide access to scattered e-resources of the institution, bringing them under one umbrella, along with subscribed e-Journals, databases that too anytime from anywhere.
                  </p>
                  <Link href="https://imthyd.mapmyaccess.com/" className="text-decoration-none text-primary">Click Here to Remote Access</Link>
                </div>
                <div className="tab-pane fade" id="sub-res-info" role="tabpanel">
                  <p>
                    As per the current activities and needs, the LRC provides context-based services in the form of customized newsletters, Article Alert, Industry Updates, etc., to its user group from time to time.
                  </p>
                  <ul>
                    <li>Circulation</li>
                    <li>Online Public Access Catalogue</li>
                    <li>Current Awareness</li>
                    <li>New Arrivals</li>
                    <li>Orientation Program & User Education</li>
                    <li>Reference Query</li>
                    <li>Book Exhibition</li>
                    <li>Ask a Librarian</li>
                  </ul>
                  <p className="fw-bold">Information Products</p>
                  <ul>
                    <li>Article Alert</li>
                    <li>Industry Outlook</li>
                    <li>LRC Newsletter</li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="sub-res-opac" role="tabpanel">
                  <p>
                    Online Public Access Catalogue (OPAC) is the library’s catalogue of books, and other reading material can be searched through the library portal. The library catalogue can be searched by author, title, publisher and keyword.
                  </p>
                  <Link href="http://10.1.1.8:8280/liberty/libraryHome.do" className="text-decoration-none text-primary">Online Public Access Catalog</Link>
                </div>
                <div className="tab-pane fade" id="sub-res-ndl" role="tabpanel">
                  <p>
                    The National Digital library objective is to collect and collate metadata and provide a full-text index from several national and international digital libraries, as well as other relevant sources.
                  </p>
                  <Link href="https://ndl.iitkgp.ac.in/" className="text-decoration-none text-primary">Click Here to National Digital Library</Link>
                </div>
                <div className="tab-pane fade" id="sub-res-swayam" role="tabpanel">
                  <p>
                    SWAYAM is India's national MOOC platform designed to achieve the three cardinal principles of India's education policy: access, equity and quality.
                  </p>
                  <Link href="https://swayam.gov.in/" className="text-decoration-none text-primary">Click Here to Swayam</Link>
                </div>
                <div className="tab-pane fade" id="sub-res-open" role="tabpanel">
                  <p>
                    LRC provides some of the important open access sources from open access resources that are freely available, including books, journals and databases.
                  </p>
                  <Link href="https://doaj.org/" className="text-decoration-none text-primary">Directory of Open Access Journals (DOAJ)</Link> <br /><br />
                  <Link href="https://www.doabooks.org/doab" className="text-decoration-none text-primary">Directory of Open Access Books</Link> <br /><br />
                  <Link href="https://shodhganga.inflibnet.ac.in/" className="text-decoration-none text-primary">Shodhganga: A reservoir of Indian Theses</Link> <br /><br />
                  <Link href="https://ibef.org/" className="text-decoration-none text-primary">IBEF</Link>
                </div>
              </div>
            </div>

            {/* FAQs Tab */}
            <div className="tab-pane fade bg-white p-4 rounded-4" id="tab-faqs" role="tabpanel">
              <h5 className="mb-3 text-center section-subtitle">FAQ's</h5>
              <div className="accordion" id="lrcFaqs">
                {[
                  {
                    id: 'faq1',
                    question: 'Who Can Avail The Library Services?',
                    answer: 'Student, Faculty, Faculty Associates, and Staff.',
                  },
                  {
                    id: 'faq2',
                    question: 'How Can I become A Member Of The Library?',
                    answer: 'For enrollment as a member of the library, you need to fill up the membership form which is available at Membership & Circulation Desk. For Faculty, Faculty Associates, and Staff, the membership form duly filled-in with appropriate identification and further recommended by HOD should be submitted to Membership & Circulation Desk',
                  },
                  {
                    id: 'faq3',
                    question: "What are the LRC's operating hours?",
                    answer: 'Mon-Fri – 9:30 AM to 11:30 PM <br />Sat – 9:30 AM to 8:30 PM <br />Sun – 9:30 AM to 6:00 PM',
                  },
                  {
                    id: 'faq4',
                    question: 'How Do I Access The Library Resources?',
                    answer: 'You may access the library resources by clicking on intranet portal: <Link href="http://10.1.1.12:8380" className="text-primary">http://10.1.1.12:8380</Link>',
                  },
                  {
                    id: 'faq5',
                    question: 'How Are The Books arranged In The Library?',
                    answer: 'Books in the library are arranged in classified order System. After locating an item in the OPAC, the screen will provide the call number for the item. The call number is the “address” of the item on the shelf. It will look something like the following: <br /><br />658.3 (assigned to the book “HRM”) <br /><br />658.5 (assigned to the book for “Operation Management”) <br /><br />658.827 (assigned to the book “Brand Management”)',
                  },
                  {
                    id: 'faq6',
                    question: 'How Can I Recommend A Book Purchase?',
                    answer: 'User can recommend a book for purchase by filling-in a ‘BOOK RECOMMENDATION FORM’ that can be obtained & submitted to the Circulation Desk or can be downloaded from library link.',
                  },
                  {
                    id: 'faq7',
                    question: 'How Can I Search A Book From OPAC?',
                    answer: 'Online Public Access Catalogue (OPAC) enables you to search documents in the possession of the library. OPAC also allows library users to know their checkout status, issue history and so on. The systems also available for accessing OPAC inside the library.',
                  },
                  {
                    id: 'faq8',
                    question: 'Do I Need To Come To LRC To Access The Database?',
                    answer: 'Most of the databases subscribed by the LRC are IP enabled so you can access the same from anywhere within the campus. The mode of access is clearly mentioned under the name of the databases.',
                  },
                  {
                    id: 'faq9',
                    question: 'Where Should I Mail My Reference Query',
                    answer: 'You can send any of your queries to reference & information to <a href="mailto:lrc@imthyderabad.edu.in" className="text-primary">lrc@imthyderabad.edu.in</a>',
                  },
                ].map((faq, index) => (
                  <div className="accordion-item mt-3" key={faq.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq.id}`}
                        aria-expanded={index === 0 ? 'true' : 'false'}
                        aria-controls={faq.id}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={faq.id}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#lrcFaqs"
                    >
                      <div className="accordion-body" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Swiper Carousel (if needed, can be removed) */}
 

      {/* Note: Replace with <Footer /> component */}
      {/* <Footer /> */}

<style
  dangerouslySetInnerHTML={{
    __html: `
      .lrc-page {
        width: 100%;
      }

      .faculty-section {
        width: 100%;
      }

      /* Hero Banner */
      .faculty-hero {
        background: url('/media/banners/Group 16.jpg') no-repeat center center;
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

      /* Accordion */
      .accordion-button {
        background-color: #ffc107;
        color: #000;
      }

      .accordion-button:not(.collapsed) {
        background-color: #ffc107;
        color: #000;
      }

      .accordion-body {
        background-color: #fff;
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

      .crs_list ul, .d-flex.flex-column.gap-2 {
        list-style-type: disc;
        padding-left: 20px;
      }

      /* Swiper Styles */
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

      /* Social Icons (unused but included) */
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

      /* Responsive Adjustments */
      @media (max-width: 768px) {
        .section-title {
          font-size: 1.7rem;
        }
      }

      @media (max-width: 576px) {
        .section-title {
          font-size: 1.5rem;
        }
      }
    `,
  }}
/>

    </div>
  );
};

export default LearningResourceCenter;