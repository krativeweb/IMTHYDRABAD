'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function CorporateConnect() {
  // Embedded data for corporate connect
  const data = {
    panelDiscussions: {
      '2025-26': [
        {
          title: 'From Classroom to Boardrooms: Thriving in a Technology-Driven Global Economy',
          date: '30-Jun-2025',
          speakers: [
            'Mr.Saravana Kumar, Vice President&India HR Business Partner, Salesforce',
            'Ms.Asma Joshi, Pepsico GCC Hyderabad , HR Campus Head.',
            'Mr.Sudhendra S.Kulkarni, Cloud4C Services,Vice President Head of L&D & Campus Requirment',
            'Mr.Hemant Kumar Ravi, EY,Bangalore, Program Lead',
          ],
        },
      ],
      '2024-25': [
        {
          title: 'Industry expectations from Management students',
          date: '25-Jun-2024',
          speakers: [
            'Ms. Sharbari, University Relations Recruiter, Micron Technology',
            'Mr. Kshitij, People & Culture, Grant Thornton Bharat LLP',
            'Mr. Kunal Choudhury, Associate Director HR, Alvarez & Marsal',
            'Ms. Harshitha Sriramaneni, Head of partner Operations & Shared services, Mass Mutual',
            'Mr. Krishna Chaitanya, Management Trainee, Tech Mahindra',
          ],
        },
      ],
      '2023-24': [
        {
          title: 'Making the best out of your B-school journey (Valedictory Panel Discussion)',
          date: '30-Jun-2023',
          speakers: [
            'Mr. Tarun Kumar, Associate Services (HR shared services), Tech Mahindra, Head',
            'Dr. Arnab Banerjee, Director, Supply Chain, Smart Manufacturing & AI, Micron Technology',
            'Mr. Emmanuel Gosula, Head of APAC RD, EPAM Systems',
            'Mr. Siddharth Shukla, India Lead Campus Recruiting & Employer Branding at PepsiCo GBS Hyderabad, (EX-Morgan Stanley & PwC, India)',
          ],
        },
        {
          title: 'Net-Zero 2023: Indian Industry Initiatives and Implications (4I)',
          date: '19-Aug-2023',
          speakers: [
            'Aravind Appi Raj, Head–Environment Health and Safety, Exide Energy Solutions Limited',
            'Ms. Ekta Kumar, Founder, Sustainable (An Independent ESG & CSR Advisory Firm)',
            'Mr. Rajeev Chourey, VP (Operations & Quality, ESG officer, CARE group of hospitals)',
            'Mr. Makarand Barhanpurkar, Head Manufacturing and Projects, ITC Limited',
            'Mr. Swapnil Joshi, Director and Industry Principal, Infosys Sustainability and Design Group',
            'Ms. Prathyusha Parakala, Program Manager - Sustainability, Dr Reddy’s',
          ],
        },
      ],
      '2022-23': [
        {
          title: 'Making the best out of your B-school journey',
          date: '01-Jul-2022',
          speakers: [
            'Mr. Ashish Bhalla, HCL Technologies Ltd, Head – Campus Relations',
            'Mr. Vinay Agrawal, Tech Mahindra, Head – Business HR',
            'Mr. Sahil Nayar, KPMG, Human Resources',
            'Mr. Mohammad Hasan, Genpact, Assistant Vice President – Talent Acquisition Leader',
            'Mr. Venkatesh Palabatla, Nava Bharat Ventures Limited - India, Group Chief Human Resource Officer',
          ],
        },
      ],
      '2021-22': [
        {
          title: 'Corporate Expectations from Management Graduates',
          date: '13-May-2022',
          speakers: [
            'Mr. Kunal Choudhury, Early Careers Hiring, Bain & Company',
            'Mr. Jayshankar D, Regional Sales Manager - Breads division, Britannia',
            'Mr. Ankoor Banerjee, GenC hiring, Cognizant',
          ],
        },
      ],
      '2020-21': [
        {
          title: 'The Making of a Post Pandemic Professional',
          date: '21-May-2021',
          speakers: [
            'Mr. Soham Wagh, Pharmaceutical Sales and Marketing Professional, GlaxoSmithKline',
            'Ms. Priya Rajani, Director, North America Corporate Client Strategy Head, Citi',
            'Mr. Mandar Borkar, CFO & Senior Vice President (Finance, IT & Distribution), Indoco Remedies Ltd',
            'Ms. Vibhuti Lall, India Site HR Leader, Advance Auto Parts',
            'Mr. Vinay Trivedi, Head Human Resources, Tone Tag',
          ],
        },
        {
          title: 'Employment challenges post covid19',
          date: '18-Jul-2020',
          speakers: [
            'Kundan Kumar, GlaxoSmithKline Pharmaceutical (Malaysia), HR Lead',
            'Debashish Gosh, Berkadia (A Berkshire Hathaway and Jefferies Financial Services Co), Vice President and India HR Head',
            'Dinesh Menon, Signode India Limited, Head - HR, Metals Business',
            'Jaspreet Singh, Randstad Hyderabad, Vice President - Professionals Search & Selection and Perm+',
            'Ramesh G, Olam India, General Manager – HR',
          ],
        },
        {
          title: 'Developing Entrepreneurial Orientation in the Uncertain World – Strategies for Survival',
          date: '04-Jul-2020',
          speakers: [
            'Mr. Vinay Kumar, Datawise, CEO',
            'Mr. Rajesh Padinjaremadam, Rapid Value, CEO & Co-Founder',
            'Mr. Prasan Shah, Stone Plus Enterprises Pvt Ltd, CEO and Founder',
            'Mr. Anurag Palla, Stuzee, Entrepreneur',
          ],
        },
        {
          title: 'Navigating through Covid 19 situation - Perspective from business leaders',
          date: '20-Jun-2020',
          speakers: [
            'Dr. JC Wandemberg, Sustainable Systems International, President & Founder',
            'Mr. Hari Thalapalli, Call Health, CEO',
            'Mr. Vijay Sivaram, QuessCorp, CEO',
            'Mr. Hitesh Kakkar, CPM India, COO',
          ],
        },
        {
          title: 'Digital Imperatives for Businesses',
          date: '06-Jun-2020',
          speakers: [
            'Mr. Sairam Vedam, Innominds, Global CMO',
            'Mr. Anand Srivastava, Landis+Gyr, General Manager-Marketing',
            'Mr. Viren Mehta, JLL, Sr. Director and Head Transactions',
          ],
        },
      ],
      '2019-20': [
        {
          title: 'Challenges in Developing Leadership',
          date: '24-Jan-2020',
          speakers: [
            'Mr. Arnab Banerjee, Infosys Limited, Principal Consultant, Enterprise Application Service',
            'Mr. Deepak Gupta, KARVY Group, CHRO & Vice President Human Resource',
            'Mr. Narayan Rao, NCC Ltd, Vice President (HR)',
            'Richie J Joseph, Leadership Development Consultant',
          ],
        },
        {
          title: 'Corporate expectation from management graduates',
          date: '28-Jun-2019',
          speakers: [
            'Mr. Arka C, Open Text, Sr. Director-HR',
            'Mr. Pradeep Kumar K, Coromandel International, VP-HR',
            'Ms. Ayn Wesely, State Street Corporate Services (Mumbai) Pvt. Ltd, AVP - India Transition & Project Management',
            'Mr. Prashant Girey, Airtel, Head – Sales & Marketing',
            'Mr. Vivek Gautam, UHG, Business Analyst',
          ],
        },
      ],
      '2018-19': [
        {
          title: 'Contemporary Challenges in Pharma and Healthcare Sector',
          date: '11-Jan-2021',
          speakers: [
            'Mr. Ram, L&D Hetero Drugs, Sr. GM',
            'Mr. Parasuraman, Dr. Reddys Lab, Global Head, R&D',
            'Mr. Mahendra Pratap Singh, Napier, Global Head(HR)',
            'Dr. B. Aparna Reddy, Therapiva & Laxai Life Sciences, Chief People Officer',
          ],
        },
        {
          title: 'New Paradigm in Digital Marketing & Analytics',
          date: '11-Jan-2019',
          speakers: [
            'Mr. Phani Mitra, Dr. Reddys Lab, VP, Analytics & Strategy',
            'Mr. Rajesh Kr. Singh, Hinduja Tech, GM',
            'Mr. Sankara V. Krishna Prasad, Cito Healthcare, Founder & CEO',
            'Mr. Soham Wagh, GlaxoSmithKline, Global Marketing Lead',
          ],
        },
        {
          title: 'Trends in Business Analytics',
          date: '27-Jul-2018',
          speakers: [
            'Mr Ramesh Kumar Koona, Founder and Director, Cygnesia Animations Pvt. Ltd.',
            'Mr. Sharat Konatham, Co Founder, HEDNext',
            'Mr. Sridhar Sheshadri, Founder & CEO, Spotflock',
            'Mr. N M Sharma, Founder & CEO, Phygital Insights Pvt. Ltd',
            'Mr. Ravi Munukutla, Independent Consultant (Data Analytics)',
          ],
        },
        {
          title: 'Corporate expectations from Management Graduates',
          date: '29-Jun-2018',
          speakers: [
            'Mr. Pragathi Kumar, Director HR-International HR, A & T',
            'Mr. Dinesh Kumar Murugesan, Country Head-HR, DSM Chemicals',
            'Mr. Narsimha Rao, Head HR, MSN Laboratories',
            'Mr. Venkatesh Palabatla, Head HR, GMR Group',
          ],
        },
      ],
    },
    leadershipSeries: {
      '2025-26': [
        {
          title: 'Leadership Series Talk',
          date: '8-Oct-2025',
          speakers: ['Mr.Rupessh Goel, Managing Director, First Citizens Bank'],
        },
        {
          title: 'The Real Expectations from a Management Graduate While Hiring for the First Job',
          date: '27-Jun-2025',
          speakers: ['Mr.Rajesh Menon, Board of Director, CrowdStrike'],
        },
      ],
      '2024-25': [
        {
          title: 'Business insights from medical institution and the importance of socially responsible leaders in healthcare',
          date: '22-Jan-2025',
          speakers: ['Mr. Ramesh Kekunaya, Director, L V Prasad Eye Institute'],
        },
        {
          title: 'Distinguished speaker series',
          date: '31-Jul-2024',
          speakers: ['Mr. Alok, MS in Computer Science, University of Calgary'],
        },
      ],
      '2023-24': [
        {
          title: 'Overview of the health care scenario in India',
          date: '27-Jan-2024',
          speakers: ['Mr. Saurabh Gupta, RCOO, KIMS Sunshine Hospitals'],
        },
        {
          title: 'Leadership Talk by Sudipto Mukherjee',
          date: '17-Jan-2024',
          speakers: ['Mr. Sudipto Mukherjee, Site Director & Country Head, Berkadia'],
        },
        {
          title: 'Leadership Talk by Rajesh Dhuddu',
          date: '03-Jan-2024',
          speakers: ['Mr. Rajesh Dhuddu, SVP & Global Business Head - Emerging Technology, Tech Mahindra'],
        },
        {
          title: 'Global Talent Attraction',
          date: '28-Jul-2023',
          speakers: ['Ms. Julia Shub, CHRO, Transporeon'],
        },
        {
          title: 'Revolutionizing Logistics: The Platform Approach for Better, Safer, Faster, and Greener Operations',
          date: '23-Aug-2023',
          speakers: ['Mr. Bernhard Schmaldienst, Director Visibility Tribe, Transporeon Germany'],
        },
        {
          title: 'Exclusive Leadership Series Talk',
          date: '07-Jul-2023',
          speakers: ['Dr. Sanjay Chaturvedi, CEO, Aurobindo Pharmaceuticals'],
        },
      ],
      '2022-23': [
        {
          title: 'Leadership Talk by Wipro Leaders',
          date: '18-Jan-2023',
          speakers: ['Mr. Sudip Guha, Oracle Practice Head, Wipro Limited'],
        },
        {
          title: 'Inaugural Address for the Batch 2022-24',
          date: '20-Jul-2022',
          speakers: [
            'Shri P.R. Ramesh, Former Chairman & Independent Director, Deloitte, India; Nestle India, HDFC and Cipla',
          ],
        },
        {
          title: 'Deliver an experience sharing session by Mr. Shivan Bhargava',
          date: '16-Nov-2022',
          speakers: ['Shivan Bhargava, CEO-AP & Telangana Circle, Bharti Airtel Ltd'],
        },
      ],
      '2021-22': [
        {
          title: 'Leadership talk on Digital Startups in FMCG',
          date: '11-Sep-2021',
          speakers: ['Mr. Sanjay Mishra, COO-India Sales & CEO-New Business, Marico Ltd'],
        },
        {
          title: 'Business Strategy',
          date: '12-Dec-2021',
          speakers: ['Mr. Mahender Dubba, Managing Director, Advance Auto Parts India'],
        },
      ],
      '2019-20': [
        {
          title: 'Challenges and Potential Opportunities in Health Care Industry',
          date: '02-Aug-2019',
          speakers: ['Shri. Kamal D Shah, Co-Founder & Director, NephroPlus'],
        },
        {
          title: 'Innovate to stay ahead',
          date: '29-Apr-2020',
          speakers: ['Sharad Malhotra, President, NIPSEA GROUP (Nippon Paints India)'],
        },
      ],
      '2018-19': [
        {
          title: 'Issues and Challenges in Biologics Market in India',
          date: '24-Aug-2018',
          speakers: ['Dr. Satakarni Makkapati, President, Biologics, Aurobindo Pharma Ltd'],
        },
      ],
    },
    guestLectures: {
      '2021-22': [
        {
          title: 'Management lessons from Entrepreneurship Journey',
          date: '06-Feb-2022',
          speakers: ['Mr. Rajesh Padinjaremadam, CEO and co-founder, Rapid Value Solutions'],
        },
        {
          title: 'Measure what Matters – Marketing and beyond',
          date: '12-Sep-2021',
          speakers: ['Mr. Sayantan Dasgupta, Director of Demand Generation - North America, Gramener'],
        },
        {
          title: 'Challenges in Enterprise Risk Management Practices',
          date: '28-Aug-2021',
          speakers: ['Mr. Ramkumar Narayanan, Global Practice Head-Data Privacy-Cybersecurity & Risk Services, Wipro Limited'],
        },
        {
          title: 'Credit Rating Methodology',
          date: '27-Aug-2021',
          speakers: ['Mr. D Naveen Kumar, Associate Director, CARE Ratings Ltd'],
        },
        {
          title: 'Improving Operational efficiency in a service based industry',
          date: '31-Jul-2021',
          speakers: ['Mr. Alok Bose, Delivery Director for Enterprise Application Services, Infosys'],
        },
        {
          title: 'The making of an MBA professional: A leader’s View on how students can carve successful careers',
          date: '24-Jul-2021',
          speakers: ['Mr Anadi N Sinha, President-HRM, Corporate Affairs, S&V, UNO MINDA Group'],
        },
        {
          title: 'Distinguished Speaker session',
          date: '14-Jul-2021',
          speakers: ['Dr. Tessy Thomas, Distinguished Scientist & Director General - Aeronautical Systems (AS) -, DRDO'],
        },
        {
          title: 'Digital Marketing & Personalized Marketing',
          date: '10-Jul-2021',
          speakers: ['Ms. Sharanbir Kaur, AVP-Marketing, Financial Services Division, Bharati Airtel Group'],
        },
        {
          title: 'Sharing his Marketing experiences',
          date: '26-Jun-2021',
          speakers: ['Mr. N K Rajavelu, Executive Vice President & Business Head – Crop Protection, Coromandel International'],
        },
        {
          title: 'Art of staying relevant, skills in demand and how to prepare for that today, key leadership lessons etc',
          date: '26-Jun-2021',
          speakers: ['Dr Anil Kumar Mishra, CHRO, Magic Bricks.com'],
        },
        {
          title: 'Leadership, Technology Innovation and Digital Transformation',
          date: '25-Jun-2021',
          speakers: ['Mr. Shalabh Mittal, Executive Director, JP Morgan'],
        },
        {
          title: 'Emerging Technologies in Business',
          date: '25-Jun-2021',
          speakers: ['Prof. Renato Pereira, Department of Marketing, Operation and Management, ISCTE Business School, Portugal'],
        },
        {
          title: 'The importance of communication in Management',
          date: '13-Jun-2021',
          speakers: ['Mohit Saxena, Head Human Resources, Bajaj Energy'],
        },
        {
          title: 'How to prepare for disruption',
          date: '12-Feb-2021',
          speakers: ['Mr. Sharat Chandra K, Co-Founder, Director, Butterfly Edufields Pvt Ltd.'],
        },
      ],
      '2020-21': [
        {
          title: 'Leading through the Crisis – Reflections of a leader',
          date: '14-May-2021',
          speakers: ['Hemant Sethia, Head of Campus Recruitment, Legato Health Technologies LLP'],
        },
        {
          title: 'International Women’s Day',
          date: '08-Mar-2021',
          speakers: ['Nidhi Salgame, Founder & Director, Wander Beyond Boundaries'],
        },
        {
          title: 'A session on- how to get promoted in your job',
          date: '26-Feb-2021',
          speakers: ['Mahantesh CN, Head-Global Recruitment, Tech Mahindra'],
        },
        {
          title: 'Social Immersion Program-First Aid Training',
          date: '29-Dec-2020',
          speakers: ['Dr. Surya Teja Rudraraju, Incharge Emergency Medicine, Aster Prime Hospital'],
        },
        {
          title: 'Session on FINTECH',
          date: '28-Dec-2020',
          speakers: ['Mr. Daniel Hofmann, Chief Operating Officer, Eichencredit, Berlin, Germany'],
        },
        {
          title: 'Sambaddh: Partnering in Community Development',
          date: '26-Dec-2020',
          speakers: ['Sambaddh: Partnering in Community Development'],
        },
        {
          title: 'webinar (Fresher’s tool kit)',
          date: '30-Oct-2020',
          speakers: ['Mr. Vishwanadh Raju, Global Head of Talent Acquisition, AXISCADES Engineering Technologies Limited'],
        },
        {
          title:
            'Practitioner Session-Recruitment –Sources and methods of recruitment, Recruitment Yield Pyramid and effectiveness of recruitment',
          date: '26-Sep-2020',
          speakers: ['Sanjay Kumar, Head - Human Resource, L&T Metro Rail Hyderabad'],
        },
        {
          title: 'Leadership challenges in the new normal',
          date: '04-Sep-2020',
          speakers: ['Mr. Daniel Henry, Commercial Director for Asia Pacific Region, GSK'],
        },
        {
          title: 'Campus to Corporate',
          date: '28-Aug-2020',
          speakers: ['Mr. Venkata Sudhakar Nagandla, Sr. Director, Global infrastructure, CDK Global (India) Private Limited'],
        },
        {
          title: 'Credit Rating Methodology',
          date: '24-Aug-2020',
          speakers: ['Mr. Naveen Kumar, Group Head, CARE Ratings Ltd'],
        },
        {
          title: 'Interactive Session',
          date: '22-Aug-2020',
          speakers: ['Ms. Garima Srivastava, HR Director -Talent & competency management, Volvo Group, Japan'],
        },
        {
          title: 'Rising to the leadership challenge: Lessons learned in the financial software industry',
          date: '14-Aug-2020',
          speakers: ['Mr. Aseem Purohit, VP of sales and marketing, Odessa'],
        },
        {
          title: 'An interactive session on Changing expectation from MBA graduates in an uncertain world - Industry Perspectives',
          date: '08-Aug-2020',
          speakers: ['Mr. Sundaram R M, Head-University and Schools Relationship Management & Employer Branding and Senior Vice President, YES BANK'],
        },
        {
          title: 'Chief Guest for PGDM (EXE) program II Batch Inauguration session',
          date: '06-Aug-2020',
          speakers: ['Mr. Sridhar Venkatesh, MD, GSK'],
        },
        {
          title: 'Chief Guest for PGDM (Batch of 2020-2022) Inauguration session',
          date: '30-Aug-2020',
          speakers: ['Mr. Prakash Malia, MD, Intel India'],
        },
      ],
      '2019-20': [
        {
          title: 'An overview of what Fintech is, what are the constituents and how can they think about careers in these businesses?',
          date: '30-Nov-2019',
          speakers: ['Mr. Saurabh Shankar, Founder, Refreshmint'],
        },
        {
          title: 'Conclave on "Challenges in Developing Leadership"',
          date: '24-Jan-2020',
          speakers: [
            'Mr. Yogi Sriram, Senior Vice President – Corporate Human Resources & Member of the Executive Committee, Larsen & Toubro Limited',
            'Prof. E S Srinivas, Professor, Indian Institute of Management Bangalore (IIMB)',
          ],
        },
      ],
      '2018-19': [
        {
          title: 'Overview of Indian Pharmaceutical Industry',
          date: '01-Aug-2018',
          speakers: ['Mr. Naveen Kumar, Group Head, CARE Ratings Ltd'],
        },
        {
          title: 'Successful Career: Investment Bankers’ Perspectives',
          date: '06-Oct-2018',
          speakers: ['Mr. Hemant Sethia, Vice President, Credit Suisse Services (India) Private Limited'],
        },
        {
          title: 'Fundamentals of HR Being Applied in The Industry Setup',
          date: '19-Nov-2018',
          speakers: ['Mr. Mahendra Pratap Singh, Global Head – HR, Napier Healthcare'],
        },
      ],
    },
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
          background: url('/media/banners/programs.webp');
          position: relative;
          background-size: cover;
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
          color: #ffffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
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
        .nav-pills .nav-link.active,
        .nav-pills .show > .nav-link {
          border-radius: 50rem !important;
          background: #ffc107 !important;
          color: #333 !important;
        }
        .nav-pills .nav-link {
          border-radius: 30px;
          background: #e9ecef;
          color: #333;
        }

        /* List Group */
        .list-group-item {
          background-color: transparent;
          border: none;
        }

        /* Container adjustments */
        @media (min-width: 1200px) {
          .container-fluid {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .container-fluid {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
        }

        .mx-1 {
          margin-top: 10px;
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
            background: "url('/media/banners/programs.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
              backgroundPosition: "center !important"
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Corporate Connect</h2>
          <p className="text-white">
            Building bridges between academia and industry. <br />
            Our corporate connect programs foster collaboration, mentorship, and
            practical exposure for future-ready management professionals.
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
                  Corporate Connect
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Corporate Connect Section */}
      <section id="Corporate-Connect" className="py-5 faculty-tabs">
        <div className="container">
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Corporate Connect
          </h2>

          {/* Tabs Navigation */}
          <ul
            className="nav nav-pills justify-content-center mb-4"
            id="Corporate-ConnectTabs"
            role="tablist"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link active"
                id="Panel-tab"
                data-bs-toggle="pill"
                data-bs-target="#Panel"
                type="button"
                role="tab"
                aria-controls="Panel"
                aria-selected="true"
              >
                Panel Discussion
              </button>
            </li>
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link"
                id="firsttime-tab"
                data-bs-toggle="pill"
                data-bs-target="#firsttime"
                type="button"
                role="tab"
                aria-controls="firsttime"
                aria-selected="false"
              >
                Leadership Series
              </button>
            </li>
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link"
                id="certificate-tab"
                data-bs-toggle="pill"
                data-bs-target="#certificate"
                type="button"
                role="tab"
                aria-controls="certificate"
                aria-selected="false"
              >
                Guest Lectures
              </button>
            </li>
          </ul>
          <hr />

          {/* Tabs Content */}
          <div
            className="tab-content card bg-light p-4"
            id="Corporate-ConnectTabsContent"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Panel Discussion Tab */}
            <div
              className="tab-pane fade show active"
              id="Panel"
              role="tabpanel"
              aria-labelledby="Panel-tab"
            >
              <h4
                className="fw-semibold mb-4 text-center"
                style={{ color: "#08317a" }}
              >
                Panel Discussion
              </h4>

              {/* Inner Tabs Navigation */}
              <ul
                className="nav nav-pills justify-content-center mb-4"
                id="flpInnerTabs"
                role="tablist"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                {Object.keys(data.panelDiscussions).map((year, index) => (
                  <li className="nav-item mx-1" role="presentation" key={year}>
                    <button
                      className={`nav-link ${index === 0 ? "active" : ""}`}
                      id={`flp-${year}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#flp-${year}`}
                      type="button"
                      role="tab"
                      aria-controls={`flp-${year}`}
                      aria-selected={index === 0}
                    >
                      {year}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Inner Tabs Content */}
              <div className="tab-content" id="flpInnerTabsContent">
                {Object.entries(data.panelDiscussions).map(
                  ([year, discussions], index) => (
                    <div
                      className={`tab-pane fade ${
                        index === 0 ? "show active" : ""
                      }`}
                      id={`flp-${year}`}
                      role="tabpanel"
                      aria-labelledby={`flp-${year}-tab`}
                      key={year}
                    >
                      {discussions.map((discussion, idx) => (
                        <div key={idx}>
                          <h4 className="fw-semibold mb-4 text-center text-warning">
                            {discussion.title}
                          </h4>
                          <div className="text-muted fw-semibold mb-2">
                            Speakers
                          </div>
                          <ul className="list-group list-group-flush">
                            {discussion.speakers.map((speaker, sIdx) => (
                              <li className="list-group-item" key={sIdx}>
                                {speaker}
                              </li>
                            ))}
                          </ul>
                          <div className="text-muted fw-semibold">
                            <p>Date: {discussion.date}</p>
                          </div>
                          {idx < discussions.length - 1 && <br />}
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Leadership Series Tab */}
            <div
              className="tab-pane fade"
              id="firsttime"
              role="tabpanel"
              aria-labelledby="firsttime-tab"
            >
              <h4
                className="fw-semibold mb-4 text-center"
                style={{ color: "#08317a" }}
              >
                Leadership Series
              </h4>

              {/* Inner Tabs Navigation */}
              <ul
                className="nav nav-pills justify-content-center mb-4"
                id="leadershipTabs"
                role="tablist"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                {Object.keys(data.leadershipSeries).map((year, index) => (
                  <li className="nav-item mx-1" role="presentation" key={year}>
                    <button
                      className={`nav-link ${index === 0 ? "active" : ""}`}
                      id={`menu-${year}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#menu-${year}`}
                      type="button"
                      role="tab"
                      aria-controls={`menu-${year}`}
                      aria-selected={index === 0}
                    >
                      {year}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Inner Tabs Content */}
              <div className="tab-content" id="leadershipTabsContent">
                {Object.entries(data.leadershipSeries).map(
                  ([year, series], index) => (
                    <div
                      className={`tab-pane fade ${
                        index === 0 ? "show active" : ""
                      }`}
                      id={`menu-${year}`}
                      role="tabpanel"
                      aria-labelledby={`menu-${year}-tab`}
                      key={year}
                    >
                      {series.map((item, idx) => (
                        <div key={idx}>
                          <h4 className="fw-semibold mb-4 text-center text-warning">
                            {item.title}
                          </h4>
                          <div className="text-muted fw-semibold mb-2">
                            Speakers
                          </div>
                          <ul className="list-group list-group-flush">
                            {item.speakers.map((speaker, sIdx) => (
                              <li className="list-group-item" key={sIdx}>
                                {speaker}
                              </li>
                            ))}
                          </ul>
                          <div className="text-muted fw-semibold">
                            <p>Date: {item.date}</p>
                          </div>
                          {idx < series.length - 1 && <br />}
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Guest Lectures Tab */}
            <div
              className="tab-pane fade"
              id="certificate"
              role="tabpanel"
              aria-labelledby="certificate-tab"
            >
              <h4
                className="fw-semibold mb-4 text-center"
                style={{ color: "#08317a" }}
              >
                Guest Lectures
              </h4>

              {/* Inner Tabs Navigation */}
              <ul
                className="nav nav-pills justify-content-center mb-4"
                id="Guest-Tabs"
                role="tablist"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                {Object.keys(data.guestLectures).map((year, index) => (
                  <li className="nav-item mx-1" role="presentation" key={year}>
                    <button
                      className={`nav-link ${index === 0 ? "show active" : ""}`}
                      id={`date-${year}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#date-${year}`}
                      type="button"
                      role="tab"
                      aria-controls={`date-${year}`}
                      aria-selected={index === 0}
                    >
                      {year}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Inner Tabs Content */}
              <div className="tab-content" id="GuestTabsContent">
                {Object.entries(data.guestLectures).map(
                  ([year, lectures], index) => (
                    <div
                      className={`tab-pane fade ${
                        index === 0 ? "show active" : ""
                      }`}
                      id={`date-${year}`}
                      role="tabpanel"
                      aria-labelledby={`date-${year}-tab`}
                      key={year}
                    >
                      {lectures.map((lecture, idx) => (
                        <div key={idx}>
                          <h4 className="fw-semibold mb-4 text-center text-warning">
                            {lecture.title}
                          </h4>
                          <div className="text-muted fw-semibold mb-2">
                            Speakers
                          </div>
                          <ul className="list-group list-group-flush">
                            {lecture.speakers.map((speaker, sIdx) => (
                              <li className="list-group-item" key={sIdx}>
                                {speaker}
                              </li>
                            ))}
                          </ul>
                          <div className="text-muted fw-semibold">
                            <p>Date: {lecture.date}</p>
                          </div>
                          {idx < lectures.length - 1 && <br />}
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
