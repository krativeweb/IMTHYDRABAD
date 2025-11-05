// app/student-exchange/page.jsx
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function StudentExchangePage() {
  // Initialize AOS (safe, client-side only)
  useEffect(() => {
    const initAOS = async () => {
      if (typeof window !== 'undefined') {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 1200,
          once: true,
          offset: 100,
        });
      }
    };
    initAOS();
  }, []);

  // === OUTBOUND STUDENTS ===
  const outboundStudents = [
    {
      id: 'std1',
      name: 'Yasham Gupta',
      program: 'SEP 2024-25 Student at Neoma Business School, France',
      image: '/images/nitin.jpg',
      testimonial: `As a PGDM-IT student, I had the privilege of participating in the student exchange program at NEOMA Business School, France. This experience was truly transformative—both academically and personally. Immersing myself in a new education system broadened my outlook and introduced me to a learning environment that encouraged critical thinking, collaboration, and cultural exchange. During my time in Europe, I had the opportunity to travel across 17 countries. Each journey enriched my understanding of diverse cultures, traditions, and ways of life. From engaging with peers from across the globe to navigating new environments independently, every experience contributed to my personal growth and global awareness. This exchange program has been one of the most enriching chapters of my academic journey. It helped me build confidence, adaptability, and a deeper appreciation for diversity. I am sincerely grateful to my college for providing this platform and for supporting students in exploring the world beyond the classroom.`,
    },
    {
      id: 'std2',
      name: 'Shrishti Sah',
      program: 'SEP 2024-25 Student at Neoma Business School, France',
      image: '/images/nitin.jpg',
      testimonial: `I remember the day the student exchange form was released. Without much deliberation, I filled it out. Looking back, that decision turned out to be one of the most rewarding experiences of my academic journey. Studying at NEOMA Business School in Reims, France, was much more than an academic experience. It gave me the chance to live and learn in an environment I had always hoped to be part of. The faculty at NEOMA brought in real-world insights from across European markets. As a marketing student, I was introduced to brand storytelling in Europe, and I began to view marketing not just as a discipline but as something deeply rooted in culture and everyday life. I had the opportunity to travel across 17 countries, and it reminded me how fulfilling it can be to step out of one’s comfort zone and explore the world firsthand. Since returning, I find myself changed, not just as a student, but as a person. My worldview has expanded, my approach to problem-solving is more creative, and I am more confident in navigating unfamiliar situations. I am truly grateful to IMT Hyderabad, Professor Nitin Gupta, and our senior Keerthivasan V for their constant support. If there’s one lasting takeaway, it’s that living in a new culture doesn’t just teach you about the world; you become a new version of yourself.`,
    },
    {
      id: 'std23',
      name: 'Vertika Newalkar',
      program: 'Exchange student, ESG, UQAM, Canada. 2020',
      image: '/images/nitin.jpg',
      testimonial: `Travelling to a new place is always full of adventure and new experiences. When I got the opportunity to go to Canada and study, I knew a lot is coming my way, knowledge, experience, fear, courage, new people, new friends, different cultures and what not. I was thrilled, I was happy and I was living it. And if the climate is your personal favorite, it adds to your glee. Montreal was submerged in snow for two months and I loved it. Being in a country extremely different from your home calls for a greater involvement. From taking the public transport to coming back home was itself a unique experience in life. I explored the city, got overwhelmed by the scenic beauty, learned new cultures, observed people, their habits, and their lifestyles. I got a bit nostalgic because time stops for no one. One thing is there for sure and that is, Student Exchange Program is not a year in your life it is a life in a year. I am really thankful to IMT Hyderabad that I could take this endeavor and I can now cherish it for a lifetime.`,
    },
    // Add more students here if needed (std3 to std22)
  ];

  // === INBOUND STUDENTS ===
  const inboundStudents = [
    {
      id: 'std1',
      name: 'Julliettee Laffittee',
      program: 'SEP 2023-24 Student from Neoma Business School, France',
      image: '/images/jullie.png',
      testimonial: `Exploration is the essence of the human spirit,” a sentiment that encapsulates my transformative 4-month journey in India. Immersing myself in its vibrant culture, I experienced remarkable personal and professional growth. I explored destinations like Rajasthan, Agra, Chennai, Goa, and Kerala, each showcasing India’s rich heritage. From Rajasthan’s majestic palaces to Kerala’s serene backwaters and the iconic Taj Mahal, the beauty was awe-inspiring. Adapting to spicy cuisine and extreme heat was challenging but offered valuable insights into local life. At university, being one of three international students presented challenges and opportunities. Supportive professors and welcoming Indian students created an inclusive environment, enriching my understanding of cultural nuances and classroom dynamics. This journey profoundly shaped my adaptability and global awareness. The warmth of the people, diverse culture, and lessons learned left me with immense gratitude for an unforgettable experience that broadened my horizons and deepened my appreciation for diversity.`,
    },
    {
      id: 'std2',
      name: 'Tuharora Cabeal',
      program: 'SEP 2023-24 Student from Neoma Business School, France',
      image: '/images/jullie.png',
      testimonial: `This exchange program was a unique, immersive experience in the beautiful country that is India, thanks to the partnership between Neoma BS and IMT Hyderabad. It was more than just an academic exchange; it has been a true human and cultural adventure. I had the chance to travel around India during my stay and explore cities like Goa and Kochi. These trips allowed me to discover breathtaking landscapes, from the calm beaches of South Goa to the verdant tea plantations of Munnar, where each place had a unique and enriching story to tell. At IMT, I met incredible people with whom I hope to maintain lifelong friendships. I will cherish these friendships, which were built around shared moments, laughter, and discoveries. Living on campus gave me a deep immersion in the lives of local students and Indian culture. The academic environment at IMT helped me develop my skills while opening up new perspectives of opportunities. This experience in India has sparked a deep interest and curiosity in me, and I hope to return in the future to explore even more of this fascinating country.`,
    },
    {
      id: 'std3',
      name: 'Marine Karvadec',
      program: 'SEP 2023-24 Student from Neoma Business School, France',
      image: '/images/jullie.png',
      testimonial: `I'm very grateful for the chance to go to the country of a thousand colours: India. It was a journey rich in self-discovery and adventure. During my 4 months in India, I was able to discover different regions, all very different from each other, and met many people. I was particularly touched by their open-mindedness, their sense of welcome and their kindness towards us. In addition to my travels, my academic experience at IMT Hyderabad was also very enriching. The two other French students and I were really immersed in an Indian university, following the same courses as the students and taking part in the school's events. We really got out of our comfort zone, as we weren't used to knowing anyone around us. We were made very welcome by the students and we'll keep in touch with them! The courses were very similar to those we had at NEOMA and the teachers were very friendly and very attentive. However, the cultural difference is quite big compared to France, so we were really disorientated. What's more, there were only three of us, which complicated things. Nevertheless, it was an experience that will remain engraved in my memory!`,
    },
    {
      id: 'std4',
      name: 'Stephane Portal',
      program: 'Exchange student (2015), Neoma Business School, France',
      image: '/images/jullie.png',
      testimonial: `“It has been a lifetime experience, and I thank my Indian friends and the IMT Administration for their help to make me feel as comfortable as possible during my stay”.`,
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="faculty-section" >
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url('/media/banners/internationalrelations.webp') no-repeat center center`,
            backgroundSize: 'cover',
            height: '60vh',
            position: 'relative',
          }}
        >
          <div
            style={{
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.3)',
              zIndex: 1,
            }}
          />
          <div className="hero-content" style={{ position: 'relative', zIndex: 2, marginTop: '150px' }}>
            <h2 className="display-5 fw-bold mb-2">Student Exchange</h2>
            <p className="text-white">
              Learning without boundaries. <br />
Our student exchange programs connect classrooms across continents, fostering global exposure and multicultural competence.
            </p>
          </div>
        </div>

        {/* BREADCRUMB */}
        <div className="breadcrumb p-md-4" style={{ backgroundColor: 'rgb(22, 57, 119)' }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  Student Exchange
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* MAIN TABS */}
        <section className="py-5">
          <nav className="nav nav-pills justify-content-center flex-wrap gap-2 mt-5 mb-5" data-aos="fade-up">
            <Link
              className="nav-link rounded-pill active text-black"
              data-bs-toggle="tab"
              href="#tab-out"
              role="tab"
            >
              Outbound Exchange
            </Link>
            <Link
              className="nav-link rounded-pill bg-white text-black"
              data-bs-toggle="tab"
              href="#tab-ie"
              role="tab"
            >
              Inbound Exchange
            </Link>
          </nav>

          {/* TAB CONTENT */}
          <div className="tab-content container mt-4">
            {/* OUTBOUND EXCHANGE */}
            <div className="tab-pane fade show active bg-white p-4 rounded-4 text-black" id="tab-out" role="tabpanel">
              <div className="row">
                {/* Left: Scrollable Student Names */}
                <div className="col-12 col-md-3 mb-3">
                  <div
                    className="nav flex-md-row nav-pills scrollable-columns"
                    id="v-pills-tab"
                    role="tablist"
                    style={{ maxHeight: '400px', overflowY: 'auto', columnCount: 2, columnGap: '1rem', paddingRight: '10px' }}
                  >
                    {outboundStudents.map((student, index) => (
                      <Link
                        key={student.id}
                        className={`nav-link rounded-pill bg-light mt-3 text-black ${index === 0 ? 'active' : ''}`}
                        id={`v-pills-${student.id}-tab`}
                        data-bs-toggle="pill"
                        href={`#v-pills-${student.id}`}
                        role="tab"
                      >
                        {student.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right: Student Details */}
                <div className="col-12 col-md-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    {outboundStudents.map((student, index) => (
                      <div
                        key={student.id}
                        className={`tab-pane fade ${index === 0 ? 'show active' : ''} card p-md-4 mt-4 mx-md-5`}
                        id={`v-pills-${student.id}`}
                        role="tabpanel"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={student.image} className="img-fluid rounded-start" alt={student.name} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="fw-bold text-decoration-underline">{student.name}</h5>
                              <h6 className="fw-bold mt-4">{student.program}</h6>
                              <p>{student.testimonial}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* INBOUND EXCHANGE */}
            <div className="tab-pane fade bg-white p-md-4 rounded-4 text-black" id="tab-ie" role="tabpanel">
              <nav className="nav nav-pills gap-2 mb-4 justify-content-center mt-md-2 mt-5" data-aos="fade-up">
                <Link
                  className="nav-link bg-light text-dark rounded-pill tab active"
                  data-bs-toggle="pill"
                  href="#sub-res-inex"
                  role="tab"
                >
                  Exchange Students
                </Link>
                <Link
                  className="nav-link bg-light text-dark rounded-pill tab"
                  data-bs-toggle="pill"
                  href="#sub-res-inaf"
                  role="tab"
                >
                  Application Form
                </Link>
              </nav>

              <div className="tab-content container-sm text-black mb-5">
                {/* SUB: Exchange Students */}
                <div className="tab-pane fade show active" id="sub-res-inex" role="tabpanel">
                  <div className="row g-4">
                    <div className="col-12 col-md-4">
                      <div className="position-sticky top-0" style={{ maxHeight: '80vh', overflowY: 'auto', padding: '0.5rem' }}>
                        <nav className="nav nav-pills flex-column gap-2">
                          {inboundStudents.map((student, index) => (
                            <Link
                              key={student.id}
                              className={`nav-link bg-light text-dark rounded-pill tab ${index === 0 ? 'active' : ''}`}
                              data-bs-toggle="pill"
                              href={`#sub-res-${student.id}`}
                              role="tab"
                            >
                              {student.name}
                            </Link>
                          ))}
                        </nav>
                      </div>
                    </div>

                    <div className="col-12 col-md-8">
                      <div className="tab-content">
                        {inboundStudents.map((student, index) => (
                          <div
                            key={student.id}
                            className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                            id={`sub-res-${student.id}`}
                            role="tabpanel"
                            data-aos="fade-up"
                            data-aos-delay="100"
                          >
                            <div className="card mb-3">
                              <div className="row g-0">
                                <div className="col-md-4">
                                  <img src={student.image} className="img-fluid rounded-start" alt={student.name} />
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="fw-bold">{student.name}</h5>
                                    <h5 className="card-title">{student.program}</h5>
                                    <p className="card-text">{student.testimonial}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUB: Application Form */}
                <div className="tab-pane fade" id="sub-res-inaf" role="tabpanel" data-aos="fade-up" data-aos-delay="100">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered align-middle">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Download Application</th>
                          <th scope="col" className="text-center">2025-2026</th>
                          <th scope="col" className="text-center">
                            <Link
                              href="https://drive.google.com/file/d/1RqrKCH3dfFGyBW8qQlhsvAzB5pGwK3l2/view"
                              className="btn btn-sm rounded-pill"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Click Here
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>For more details on Inbound Exchange please</td>
                          <td className="text-center">2025-2026</td>
                          <td className="text-center">
                            <Link
                              href="https://drive.google.com/file/d/1klocE-x8eLnrJySMOn37n9IPztQgvD9P/view?usp=sharing"
                              className="btn btn-sm rounded-pill"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Click Here
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* SCOPED STYLES */}
      <style jsx>{`
        /* Gradient banner with subtle overlay */
                .faculty-hero {
                  background: url('./images/banner/international relations.jpg');
                  position: relative;
                  background-size:cover ;
                  height:50vh;
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
               .faculty-hero h2{
 margin-top:150px;
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
      `}</style>
    </>
  );
}