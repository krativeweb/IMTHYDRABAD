"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
const HappeningsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  // Handle external scripts in useEffect
  useEffect(() => {
    let isMounted = true; // Prevent state update after unmount

    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/events`
        );

        if (isMounted && Array.isArray(data)) {
          // Filter out deleted or invalid events
          const filtered = data.filter((e) => e.is_del === 0);

          // Sort by latest date first
          const sorted = filtered.sort(
            (a, b) => new Date(b.event_date) - new Date(a.event_date)
          );

          setEvents(sorted);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    const fetchAnnouncements = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/announcements`
        );

        if (isMounted && Array.isArray(data)) {
          // Filter valid announcements
          const valid = data.filter((item) => item.is_del === 0);

          // Sort by latest event_date first
          const sorted = valid.sort(
            (a, b) => new Date(b.event_date) - new Date(a.event_date)
          );

          setAnnouncements(sorted);
        }
      } catch (err) {
        console.error("Error fetching announcements:", err);
        setError("Failed to load announcements. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
    fetchAnnouncements();
    return () => {
      isMounted = false;
    };


  }, []);
  function decodeHTMLEntities(str) {
    if (!str) return "";
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  return (
    <>
      {/* Inline Styles */}
      <style jsx>{`
        /* Makes ANY active tab (main or sub) turn yellow (bg-warning) */
        .nav-pills .nav-link.active {
          background-color: var(
            --bs-warning
          ) !important; /* Bootstrap's built-in yellow */
          color: var(--bs-dark) !important; /* Dark text for contrast */
        }

        .scrollable-columns {
          max-height: 400px; /* fixed visible height */
          overflow-y: auto; /* enable vertical scroll */
          column-count: 2; /* number of columns */
          column-gap: 1rem; /* space between columns */
          padding-right: 10px;
        }

        .scrollable-columns .nav-link {
          display: inline-block; /* ensures proper column layout */
          width: 100%;
          margin-bottom: 0.5rem;
        }

        .date-box {
          width: 80px;
          height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        /* Gradient banner with subtle overlay */
        .faculty-hero {
          background: url("/media/banners/aboutus.webp");
          position: relative;
          background-size: cover;
          height: 60vh;
        }
        .faculty-hero::before {
          content: "";
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
        .faculty-tabs .nav-pills .nav-link.active {
          background: #ffc107;
          color: #000000ff;
        }
      `}</style>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Faculty Section */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url(/media/banners/aboutus.webp)",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">
            Happenings Events & Announcements
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            animi illum
            <br /> facere fuga eaque ducimus, praesentium in distinctio
          </p>
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-md-4"
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
                  Happenings Events & Announcements
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Tab Content */}
        <section>
          <div className="container mb-4 mt-4">
            <div
              className="tab-pane fade show active bg-white p-4 rounded-4 text-black"
              id="tab-out"
              role="tabpanel"
            >
              <div className="row">
                {/* Vertical Main Tabs */}
                <div className="col-12 col-md-3 mb-3">
                  <div
                    className="nav flex-md-row nav-pills scrollable-columns"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    <Link
                      className="nav-link rounded active bg-light mt-2 text-black"
                      id="v-pills-std1-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std1"
                      role="tab"
                    >
                      Academic publishing from proposal development to future
                      trends
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std2-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std2"
                      role="tab"
                    >
                      Academic publishing from proposal development to future
                      trends
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std3-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std3"
                      role="tab"
                    >
                      79th Independence Day Celebrations
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std4-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std4"
                      role="tab"
                    >
                      IMT Hyderabad as a member of the Shastri Indo-Canadian
                      Institute (SICI)
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std5-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std5"
                      role="tab"
                    >
                      Alumni Connect Session by Mr Amit Gunjan
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std6-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std6"
                      role="tab"
                    >
                      Expert Talk Session by Mr Sridhar Aranala
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std7-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std7"
                      role="tab"
                    >
                      The Role of a Management Graduate in a Technology
                      Organization
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std8-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std8"
                      role="tab"
                    >
                      IMTH as a member of the ITU - UN agency
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std9-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std9"
                      role="tab"
                    >
                      Inside the Engine Driving Operational Excellence
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std10-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std10"
                      role="tab"
                    >
                      Abhyuday 2025 Valedictory Panel Discussion
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std11-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std11"
                      role="tab"
                    >
                      Distinguished Speaker Series by Prof. Stephane Mechoulan
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std12-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std12"
                      role="tab"
                    >
                      Distinguished Speaker Series by Ms Saketha P
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std13-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std13"
                      role="tab"
                    >
                      IMT Hyderabad Commences Academic Year with Inauguration of
                      MOP for the Class of 2025–2027
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std14-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std14"
                      role="tab"
                    >
                      Immersive Technologies and Jobs of the Future
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std15-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std15"
                      role="tab"
                    >
                      AI Regulation in the Age of Fragmentation
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std16-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std16"
                      role="tab"
                    >
                      From Theory to Practice: Navigating Supply Chain
                      Resilience in a Complex Global Environment
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std17-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std17"
                      role="tab"
                    >
                      Ethics and Leadership in the Era of AI
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std18-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std18"
                      role="tab"
                    >
                      Eco-Business Blueprint: Building a Sustainable Future in
                      Egypt by Indian Entrepreneurs
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std19-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std19"
                      role="tab"
                    >
                      TEDx - Sashvatam Navachetanam
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std20-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std20"
                      role="tab"
                    >
                      AI and Gen AI Applied to Marketing: A BCG Perspective
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std21-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std21"
                      role="tab"
                    >
                      76th Republic Day Celebrations
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std22-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std22"
                      role="tab"
                    >
                      Innovation in Eyecare and the Importance of Socially
                      Responsible Business Leaders in Healthcare led by Dr.
                      Ramesh Kekunnaya
                    </Link>
                    <Link
                      className="nav-link rounded bg-light mt-3 text-black"
                      id="v-pills-std23-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std23"
                      role="tab"
                    >
                      IMT Hyderabad Hosts Grand Convocation Ceremony to
                      Celebrate Graduating batch of 2022-2024s
                    </Link>
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="col-12 col-md-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    {/* student1 */}
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-std1"
                    >
                      <div className="row align-items-start mb-4">
                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                          <img
                            src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1757999713_academicpublication-1.jpg"
                            alt="Nitin"
                            className="img-fluid rounded shadow-sm w-150"
                          />
                        </div>
                        <div className="col-12 col-md-8">
                          <h4
                            className="fw-bold mt-2 mb-2"
                            style={{ color: "#08317a" }}
                          >
                            Academic publishing from proposal development to
                            future trends
                          </h4>
                          <p className="mb-0">
                            Hyderabad, 10th September 2025: Institute of
                            Management Technology (IMT), Hyderabad, had the
                            privilege of hosting Mr Rajesh Dey, Senior
                            Commissioning Editor at Taylor & Francis Group,
                            India, for an engaging session on "Academic
                            publishing from proposal development to future
                            trends."
                          </p>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-12">
                          <p className="bg-white">
                            Mr Dey began with a thought-provoking question, "Why
                            do academic publishers still exist if AI tools can
                            write and publish a research paper?" The audience
                            responded by underscoring the publisher's important
                            role in providing validation, global distribution,
                            and research integrity. He answered the need for
                            publishers by stating that there have been
                            considerable changes in policies and regulations in
                            the last 15-20 years, and the process has become
                            very complex. He then traced the journey of
                            publishing, mentioning that Taylor & Francis,
                            founded in 1836, is now a publicly listed company,
                            and it has become an umbrella company with 80-plus
                            companies under it. He then explained the role of
                            imprints, outlining them as distinct branding
                            identities within publishing houses.
                          </p>
                          <p>
                            The discussion then transitioned into the trends in
                            academic publishing, including open access, data
                            transparency, open science, and the impact of
                            generative AI. He pointed out the evolving nature of
                            copyright; authorship rights remain inalienable
                            while commercial rights may be transferred to
                            publishers. He also touched upon shifting policies
                            regarding publishing in the USA, Europe, and India.
                          </p>
                          <p>
                            Among the many challenges the publishing industry is
                            facing, he highlighted the reproducibility crisis,
                            rising retraction rates, and ethical misconduct like
                            paper mills as the most prevalent. He noted that
                            organizations like NASA and the World Bank advocate
                            transparency through open science. He also mentioned
                            that the retraction rate may decrease significantly
                            because of open science's openness and access.
                          </p>
                          <p>
                            Talking about artificial intelligence, he stressed
                            the need for responsible use of AI and advised
                            leveraging it as a supportive tool rather than a
                            substitute for authorship.
                          </p>
                          <p>
                            The session concluded with practical guidance for
                            researchers on choosing suitable publishers through
                            platforms like Think, Check, Submit, and Journal
                            Finder. A heartfelt vote of thanks was delivered by
                            Prof (Dr) Mahesh Ramalingam and Prof (Dr) Musarrat
                            Shaheen, expressing gratitude for the informative
                            session.
                          </p>
                          <div className="row g-3">
                            <div className="col-12 col-sm-4">
                              <img
                                src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1757999713_academicpublication-2.jpg"
                                alt="Travel 1"
                                className="img-fluid rounded shadow-sm w-100"
                              />
                            </div>
                            <div className="col-12 col-sm-4">
                              <img
                                src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1757999713_academicpublication-3.jpg"
                                alt="Travel 2"
                                className="img-fluid rounded shadow-sm w-100"
                              />
                            </div>
                            <div className="col-12 col-sm-4">
                              <img
                                src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1757999713_academicpublication-4.jpg"
                                alt="Travel 3"
                                className="img-fluid rounded shadow-sm w-100"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* student2 */}
                    <div className="tab-pane fade" id="v-pills-std2">
                      <div className="row align-items-start mb-4">
                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                          <img
                            src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1756707167_zimmbabwe-meet_-2.jpg"
                            alt="Nitin"
                            className="img-fluid rounded shadow-sm w-150"
                          />
                        </div>
                        <div className="col-12 col-md-8">
                          <h4
                            className="fw-bold mt-2 mb-2"
                            style={{ color: "#08317a" }}
                          >
                            IMT Hyderabad Explores Academic Partnerships with
                            Zimbabwean Universities Following High-Level Meeting
                            at CII Africa Summit
                          </h4>
                          <p className="mb-0">
                            New Delhi, 1st September 2025: The Institute of
                            Management Technology (IMT), Hyderabad, expressed a
                            strong intent to collaborate with Zimbabwean
                            universities following productive discussions at the
                            CII Africa Summit (August 27–29, New Delhi).
                          </p>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-12">
                          <p className="bg-white">
                            The delegation was led by Hon’ble Simelisizwe
                            Sibanda, Deputy Minister of Higher Education for
                            Zimbabwe, and included Vice-Chancellors from several
                            Zimbabwean universities.
                          </p>
                          <p>
                            Prof (Dr) K M Baharul Islam, Director of IMT
                            Hyderabad, accompanied by CRO Advisor Prof Partha
                            Dasgupta, described the interaction as a
                            "privilege." The discussions focused on the future
                            of higher education and the potential for academic
                            partnerships between India and Zimbabwe.
                          </p>
                          <p>
                            Key areas of collaboration included student and
                            faculty exchange programs, joint capacity-building
                            initiatives, and knowledge sharing with emphasis on
                            the "Design Thinking" approach to education. A
                            member of the Zimbabwean delegation noted that the
                            dialogue was inspiring, with both sides recognizing
                            a shared vision for innovative, industry-relevant
                            education.
                          </p>
                          <p>
                            As a premier business school in India, IMT Hyderabad
                            is known for its industry-aligned curriculum and
                            focus on leadership development. The institute
                            shared its detailed information brochure with the
                            Zimbabwean delegation and is keen to explore their
                            priority areas. Looking ahead, IMT Hyderabad has
                            formally communicated its interest in building a
                            comprehensive action plan and now awaits feedback
                            from Zimbabwean counterparts to shape a mutually
                            beneficial partnership.
                          </p>
                          <div className="row g-3">
                            <div className="col-12 col-sm-4">
                              <img
                                src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1757999713_academicpublication-2.jpg"
                                alt="Travel 1"
                                className="img-fluid rounded shadow-sm w-100"
                              />
                            </div>
                            <div className="col-12 col-sm-4">
                              <img
                                src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1756707167_zimmbabwe-meet_-1.jpg"
                                alt="Travel 2"
                                className="img-fluid rounded shadow-sm w-100"
                              />
                            </div>
                            <div className="col-12 col-sm-4">
                              <img
                                src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1757999713_academicpublication-4.jpg"
                                alt="Travel 3"
                                className="img-fluid rounded shadow-sm w-100"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* student3 */}
                    <div className="tab-pane fade" id="v-pills-std3">
                      <div className="row align-items-start mb-4">
                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                          <img
                            src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1755666021_independenceday25-3.jpg"
                            alt="Nitin"
                            className="img-fluid rounded shadow-sm w-150"
                          />
                        </div>
                        <div className="col-12 col-md-8">
                          <h4
                            className="fw-bold mt-2 mb-2"
                            style={{ color: "#08317a" }}
                          >
                            79th Independence Day Celebrations
                          </h4>
                          <p className="mb-0">
                            IMT Hyderabad, 15th August 2025: The air was filled
                            with a profound sense of patriotism and unity as IMT
                            Hyderabad celebrated the 79th Independence Day with
                            unwavering spirit. The day’s festivities commenced
                            with a vibrant and well-coordinated parade,
                            thoughtfully organized by our dedicated security
                            team, setting the tone for a day of reverence and
                            celebration.
                          </p>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-12">
                          <p className="bg-white">
                            Prof (Dr) K M Baharul Islam, Director of IMT
                            Hyderabad, graced the occasion with his esteemed
                            presence. The ceremonial hoisting of the national
                            flag by Prof Islam, accompanied by the soulful
                            rendition of the National Anthem, served as a
                            heartfelt tribute to the timeless ideals and
                            principles that define our great nation.
                          </p>
                          <p>
                            Addressing the audience, Prof Islam honoured India’s
                            freedom fighters, recalling that the ground we stand
                            on is built upon their sweat and blood. He expressed
                            profound gratitude to the revered Shri Mahendra Nath
                            and family, whose vision and commitment laid the
                            foundation for the institution, as well as to the
                            teachers and parents who continued to shape its
                            growth. He urged students to uphold unity in
                            diversity, embrace critical thinking, and commit to
                            continuous learning.
                          </p>
                          <p>
                            Addressing the audience, Prof Islam honoured India’s
                            freedom fighters, recalling that the ground we stand
                            on is built upon their sweat and blood. He expressed
                            profound gratitude to the revered Shri Mahendra Nath
                            and family, whose vision and commitment laid the
                            foundation for the institution, as well as to the
                            teachers and parents who continued to shape its
                            growth. He urged students to uphold unity in
                            diversity, embrace critical thinking, and commit to
                            continuous learning.
                          </p>
                          <p>
                            The theme for this year’s celebration is “Naya
                            Bharat ,” and the government’s vision calls for
                            strengthening unity, empowering youth, and making a
                            positive impact to national progress. This 79th
                            Independence Day, Prof Islam urged students to take
                            pride in our unity in diversity and to take the
                            initiative to learn a value every day that could
                            contribute to their lives.
                          </p>
                          <p>
                            The celebration reached its zenith with a
                            spectacular showcase featuring mesmerizing
                            performances by IMT Hyderabad’s cultural club -
                            Antragna and Daaitva an initiative by Pahel-The CSR
                            Club focused on community services, inspiring all to
                            embrace the spirit of unity, creativity, and social
                            responsibility.
                          </p>
                          <div className="row g-3">
                            <div className="col-12 col-sm-4">
                              <img
                                src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1755666021_independenceday25-4.jpg"
                                alt="Travel 1"
                                className="img-fluid rounded shadow-sm w-100"
                              />
                            </div>
                            <div className="col-12 col-sm-4">
                              <img
                                src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1755666021_independenceday25-1.jpg"
                                alt="Travel 2"
                                className="img-fluid rounded shadow-sm w-100"
                              />
                            </div>
                            <div className="col-12 col-sm-4">
                              <img
                                src="https://www.imthyderabad.edu.in/assets/admin/images/happenings/1755666021_independenceday25-2.jpg"
                                alt="Travel 3"
                                className="img-fluid rounded shadow-sm w-100"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end student3 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-4">
          <div className="container">
            <h2
              className="section-title text-start"
              style={{ color: "#08317a" }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Events
            </h2>
            <hr />
            <div
              className="px-4"
              style={{
                maxHeight: "300px",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <div className="row g-4 mt-4">
                {events.map((event, index) => {
                  const dateObj = new Date(event.event_date);
                  const day = dateObj.getDate().toString().padStart(2, "0");
                  const month = dateObj.toLocaleString("en-US", {
                    month: "short",
                  });
                  const year = dateObj.getFullYear();

                  return (
                    <div className="col-12 col-md-6" key={event.id || index}>
                      <div className="card shadow-sm border-0 h-100">
                        <div className="card-body d-flex">
                          <div
                            className="date-box bg-warning text-white text-center rounded me-3 px-3 py-2"
                            style={{ minWidth: "80px" }}
                          >
                            <div className="fw-bold fs-4">{day}</div>
                            <div className="text-uppercase small">{month}</div>
                            <div className="small">{year}</div>
                          </div>
                          <div>
                            <Link
                              href={`/events/${event.id}`}
                              className="text-dark fw-semibold text-decoration-none"
                            >
                              {event.title || "Untitled Event"}
                            </Link>
                            <br />
                            <small className="text-muted">
                              {event.time ? `${event.time} · ` : ""}
                              {event.location || "IMT Hyderabad"}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="announcements-section py-4 mt-4">
          <div className="container">
            <div className="section-header text-start">
              <h2
                className="section-title mb-4 text-start"
                style={{ color: "#08317a" }}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Announcements
              </h2>
              <p>Stay updated with the latest news and important updates</p>
            </div>

            <hr className="mb-5" />

            <div className="row g-4">
              {/* --- First Row: Two Horizontal Cards --- */}
              {announcements.slice(0, 2).map((item) => (
                <div key={item.id} className="col-md-6">
                  <div className="card border-warning border shadow-sm announcement-featured d-flex flex-md-row align-items-center h-100">
                    <div className="card-body">
                      <h5 className="card-title text-dark fw-bold">
                        {decodeHTMLEntities(item.title)}
                      </h5>
                      <p className="card-text text-muted">
                        {decodeHTMLEntities(item.description)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* --- Second Row Onward: Vertical Cards --- */}
              {announcements.slice(2).map((item) => (
                <div key={item.id} className="col-md-4">
                  <div className="card h-100 border border-warning shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title text-dark fw-bold">
                        {decodeHTMLEntities(item.title)}
                      </h6>
                      <p className="card-text small text-muted">
                        {decodeHTMLEntities(item.description)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HappeningsPage;
