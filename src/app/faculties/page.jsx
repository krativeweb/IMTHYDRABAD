'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Faculty() {
  // Faculty data
  const facultyData = [
  {
    name: 'Prof (Dr) Ahmad Faraz Khan',
    designation: 'Associate Professor',
    department: 'general-management',
    image: '/media/faculties/1.webp',
  },
  {
    name: 'Prof (Dr) Aindrila Chatterjee',
    designation: 'Assistant Professor',
    department: 'general-management',
    image: '/media/faculties/2.webp',
  },
  {
    name: 'Prof (Dr) Akhila Veldandi',
    designation: 'Assistant Professor',
    department: 'human-resource',
    image: '/media/faculties/3.webp',
  },
  {
    name: 'Prof Basit Abdullah',
    designation: 'Faculty Associate',
    department: 'general-management',
    image: '/media/faculties/4.webp',
  },
  {
    name: 'Prof Dhananjay Singh',
    designation: 'Adjunct Faculty',
    department: 'marketing',
    image: '/media/faculties/5.webp',
  },
  {
    name: 'Prof (Dr) Indranil Ghosh',
    designation: 'Assistant Professor & Area Chairperson',
    department: 'it-analytics',
    image: '/media/faculties/6.webp',
  },
  {
    name: 'Prof (Dr) Irfan Ahmad Shah',
    designation: 'Assistant Professor',
    department: 'general-management',
    image: '/media/faculties/7.webp',
  },
  {
    name: 'Prof (Dr) K M Baharul Islam',
    designation: 'Director & Professor',
    department: 'general-management',
    image: '/media/faculties/8.webp',
  },
  {
    name: 'Prof (Dr) Kalyana C Chejarla',
    designation: 'Associate Professor',
    department: 'operations-management',
    image: '/media/faculties/9.webp',
  },
  {
    name: 'Prof (Dr) Kiranmai Dutt Pendyala',
    designation: 'Adjunct Faculty',
    department: 'human-resource',
    image: '/media/faculties/10.webp',
  },
  {
    name: 'Prof (Dr) Mahesh Ramalingam',
    designation: 'Associate Professor & Area Chairperson',
    department: 'marketing',
    image: '/media/faculties/11.webp',
  },
  {
    name: 'Prof (Dr) Mamata Vegunta',
    designation: 'Adjunct Faculty',
    department: 'human-resource',
    image: '/media/faculties/12.webp',
  },
  {
    name: 'Prof (Dr) Musarrat Shaheen',
    designation: 'Assistant Professor',
    department: 'human-resource',
    image: '/media/faculties/13.webp',
  },
  {
    name: 'Prof (Dr) Nikhil Rastogi',
    designation: 'Professor',
    department: 'finance-accounting',
    image: '/media/faculties/14.webp',
  },
  {
    name: 'Prof (Dr) Nitin Gupta',
    designation: 'Professor',
    department: 'marketing',
    image: '/media/faculties/15.webp',
  },
  {
    name: 'Prof (Dr) Pranay Sindhu',
    designation: 'Assistant Professor',
    department: 'marketing',
    image: '/media/faculties/16.webp',
  },
  {
    name: 'Prof (Dr) Purnima Khemani',
    designation: 'Assistant Professor',
    department: 'finance-accounting',
    image: '/media/faculties/17.webp',
  },
  {
    name: 'Prof (Dr) Pushpesh Pant',
    designation: 'Assistant Professor',
    department: 'operations-management',
    image: '/media/faculties/18.webp',
  },
  {
    name: 'Prof Rohan Kumar Mishra',
    designation: 'Faculty Associate',
    department: 'finance-accounting',
    image: '/media/faculties/19.webp',
  },
  {
    name: 'Prof (Dr) Romina Mathew',
    designation: 'Professor & Area Chairperson',
    department: 'human-resource',
    image: '/media/faculties/20.webp',
  },
  {
    name: 'Prof (Dr) Rona Elizabeth Kurian',
    designation: 'Assistant Professor',
    department: 'human-resource',
    image: '/media/faculties/21.webp',
  },
  {
    name: 'Prof Sachin Choubey',
    designation: 'Faculty Associate',
    department: 'it-analytics',
    image: '/media/faculties/22.webp',
  },
  {
    name: 'Prof (Dr) Sanchari Guha Niyogi',
    designation: 'Assistant Professor',
    department: 'operations-management',
    image: '/media/faculties/23.webp',
  },
  {
    name: 'Prof (Dr) Sarath Babu',
    designation: 'Associate Professor & Area Chairperson',
    department: 'finance-accounting',
    image: '/media/faculties/24.webp',
  },
  {
    name: 'Mr Sathish Kumar Kannan',
    designation: 'Adjunct Faculty',
    department: 'marketing',
    image: '/media/faculties/25.webp',
  },
  {
    name: 'Prof (Dr) Shaon Sen',
    designation: 'Assistant Professor',
    department: 'marketing',
    image: '/media/faculties/26.webp',
  },
  {
    name: 'Prof (Dr) Sivadasan T. M',
    designation: 'Assistant Professor',
    department: 'general-management',
    image: '/media/faculties/27.webp',
  },
  {
    name: 'Prof (Dr) Sourabh Bhattacharya',
    designation: 'Professor & Area Chairperson',
    department: 'operations-management',
    image: '/media/faculties/28.webp',
  },
  {
    name: 'Prof (Dr) Sriharsha Reddy K',
    designation: 'Dean & Professor',
    department: 'finance-accounting',
    image: '/media/faculties/29.webp',
  },
  {
    name: 'Prof (Dr) Steven Raj Padakandla',
    designation: 'Associate Professor, Area Chairperson & Chairperson PGP',
    department: 'general-management',
    image: '/media/faculties/30.webp',
  },
  {
    name: 'Prof (Dr) Surajit Ghosh Dastidar',
    designation: 'Associate Professor',
    department: 'it-analytics',
    image: '/media/faculties/31.webp',
  },
  {
    name: 'Prof (Dr) Vinay Kumar Kalakbandi',
    designation: 'Associate Professor & Associate Dean (Accreditation & Ranking)',
    department: 'operations-management',
    image: '/media/faculties/33.webp',
  },
   {
    name: 'Prof (Dr) Venkata Chaturvedula C',
    designation: 'Professor',
    department: 'finance-accounting',
    image: '/media/faculties/32.webp',
  },
  {
    name: 'Prof Vinod Kumar A',
    designation: 'Adjunct Faculty',
    department: 'marketing',
    image: '/media/faculties/34.webp',
  }
];


  // State for search and department filter
  const [searchQuery, setSearchQuery] = useState('');
  const [currentDept, setCurrentDept] = useState('all');

  // Initialize AOS
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  // Filter faculty based on search query and department
  const filteredFaculty = facultyData.filter((faculty) => {
    const matchDept = currentDept === 'all' || faculty.department === currentDept;
    const matchName = faculty.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchDept && matchName;
  });

  // Department options
  const departments = [
    { id: 'all', label: 'All' },
    { id: 'it-analytics', label: 'IT & Analytics' },
    { id: 'finance-accounting', label: 'Finance and Accounting' },
    { id: 'general-management', label: 'Strategy & General Management' },
    { id: 'general-management-2', label: 'Economics & Public Policy' }, // Same department ID as Strategy
    { id: 'human-resource', label: 'Human Resource' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'operations-management', label: 'Operations Management' },
  ];

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
          width: 100%;
          height: 370px;
          object-fit: cover;
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

        /* Search Input */
        .small-placeholder::placeholder {
          font-size: 0.85rem;
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

      {/* Faculty Section - Hero and Breadcrumb */}
      <section className="faculty-section">
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
            Faculties of IMT HYDERABAD
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
           A collective of experts shaping tomorrow’s management thinkers. <br />
Diverse, dynamic, and deeply committed to quality learning outcomes.
          </p>
        </div>
        <div className="breadcrumb p-4" style={{ backgroundColor: 'rgb(22, 57, 119)' }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  IMT HYDERABAD FACULTIES
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Faculty Directory Section */}
      <section className="container my-5 faculty-tabs">
        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <div className="input-group input-group-lg">
              <input
                id="facultySearch"
                type="text"
                className="form-control rounded-start-pill small-placeholder"
                placeholder="Search faculty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="input-group-text bg-warning text-dark border-0 rounded-end-pill">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>

        {/* Department Tabs */}
        <ul className="nav nav-pills justify-content-center mb-4" id="deptTabs">
          {departments.map((dept) => (
            <li className="nav-item mx-1 py-2" key={dept.id}>
              <button
                className={`nav-link ${currentDept === dept.id ? 'active' : ''}`}
                data-bs-toggle="pill"
                onClick={() => setCurrentDept(dept.id)}
              >
                {dept.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Faculty Cards Grid */}
        <div className="row g-4" id="facultyGrid">
          {filteredFaculty.map((faculty, index) => (
            <div
              className="col-sm-6 col-lg-4 faculty-card-wrap"
              key={index}
              data-dept={faculty.department}
              data-name={faculty.name}
              data-aos="fade-up"
              data-aos-delay={100 + (index % 12) * 100}
            >
              <div className="card faculty-card shadow h-100 p-3 text-center">
                <Link href="/faculty">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    className="faculty-img img-fluid mb-3"
                    width={370}
                    height={370}
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
                <h5 className="fw-bold">{faculty.name}</h5>
                <p className="text-muted">{faculty.designation}</p>
                <div>
                  <Link href="#" className="social-icon me-2">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                  <Link href="mailto:ananya@imt.edu" className="social-icon">
                    <i className="bi bi-envelope"></i>
                  </Link>
                  <Link href="/faculty" className="social-icon mx-2">
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="card mt-3">
          <p
            id="noResultsMsg"
            className="text-center fw-bold text-danger mt-4"
            style={{ display: filteredFaculty.length === 0 ? 'block' : 'none' }}
          >
            Sorry, No Such Record Found.
          </p>
        </div>
      </section>
    </>
  );
}
