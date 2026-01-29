// app/student-exchange/page.jsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";
export default function StudentExchangePage() {
  // Initialize AOS (safe, client-side only)

  // === OUTBOUND STUDENTS ===

  return (
    <>
      {/* HERO SECTION */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url('/media/banners/Group 4.jpg') no-repeat center center`,
            backgroundSize: "cover",
            height: "60vh",
            position: "relative",
          }}
        >
          <div
            style={{
              content: '""',
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 1,
            }}
          />
          <div
            className="hero-content"
            style={{ position: "relative", zIndex: 2, marginTop: "150px" }}
          >
            <h2 className="display-5 fw-bold mb-2">Student Exchange</h2>
            <p className="text-white">
              Learning without boundaries. <br />
              Our student exchange programs connect classrooms across
              continents, fostering global exposure and multicultural
              competence.
            </p>
          </div>
        </div>
        <InternationalAssociationStickyBtns />
        {/* BREADCRUMB */}
        <div
          className="breadcrumb p-md-4"
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
                  Student Exchange
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <section>
          {/* 1. MAIN TABS */}
          <nav className="nav nav-pills justify-content-center flex-wrap gap-2 mt-5 mb-5">
            <a
              className="nav-link rounded-pill bg-white active text-black"
              data-bs-toggle="tab"
              href="#tab-out"
              role="tab"
            >
              Outbond Exchange
            </a>
            <a
              className="nav-link rounded-pill bg-white text-black"
              data-bs-toggle="tab"
              href="#tab-ie"
              role="tab"
            >
              Inbound Exchange
            </a>
          </nav>
          {/* 2. MAIN TAB CONTENT */}
          <div className="tab-content container mt-4">
            {/* Out */}
            <div
              className="tab-pane fade show active bg-white p-4 rounded-4 text-black"
              id="tab-out"
              role="tabpanel"
            >
              <div className="row">
                {/* Vertical Main Tabs (Student Names) */}
                <div className="col-12 col-md-3 mb-3">
                  <div
                    className="nav flex-md-row nav-pills scrollable-columns"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                    .scrollable-columns {\n                                        max-height: 400px;\n                                        /* fixed visible height */\n                                        overflow-y: auto;\n                                        /* enable vertical scroll */\n                                        column-count: 2;\n                                        /* number of columns */\n                                        column-gap: 1rem;\n                                        /* space between columns */\n                                        padding-right: 10px;\n                                    }\n\n                                    .scrollable-columns .nav-link {\n                                        display: inline-block;\n                                        /* ensures proper column layout */\n                                        width: 100%;\n                                        margin-bottom: 0.5rem;\n                                    }\n                                ",
                      }}
                    />
                    <a
                      className=" nav-link rounded-pill active bg-light mt-2 text-black"
                      id="v-pills-std1-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std1"
                      role="tab"
                    >
                      Yasham Gupta
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std2-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std2"
                      role="tab"
                    >
                      Shrishti Sah
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std3-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std3"
                      role="tab"
                    >
                      Sushant Bhawar
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std4-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std4"
                      role="tab"
                    >
                      Sirisha Peddemul
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std5-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std5"
                      role="tab"
                    >
                      Varsha
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std6-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std6"
                      role="tab"
                    >
                      Keerthivasan V
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std7-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std7"
                      role="tab"
                    >
                      Gayathri V
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std8-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std8"
                      role="tab"
                    >
                      Somya Jain
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std9-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std9"
                      role="tab"
                    >
                      V Bharat Chandra
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std10-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std10"
                      role="tab"
                    >
                      Aman Bhura
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std11-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std11"
                      role="tab"
                    >
                      Leeladitya
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std12-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std12"
                      role="tab"
                    >
                      Sarthak Gupta
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std13-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std13"
                      role="tab"
                    >
                      Soumya Ranjan
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std14-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std14"
                      role="tab"
                    >
                      Ishita Chowdhury
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std15-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std15"
                      role="tab"
                    >
                      Sreekumar TM
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std16-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std16"
                      role="tab"
                    >
                      Souptik Nag
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std17-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std17"
                      role="tab"
                    >
                      Riya Awasthi
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std18-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std18"
                      role="tab"
                    >
                      Anukriti Shrivastav
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std19-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std19"
                      role="tab"
                    >
                      Jeevan Saiteja Silla Reddy
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std20-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std20"
                      role="tab"
                    >
                      Avantika Singh Deo
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std21-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std21"
                      role="tab"
                    >
                      Aayush Sinha
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std22-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std22"
                      role="tab"
                    >
                      Aniket Parkash Singh
                    </a>
                    <a
                      className=" nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std23-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std23"
                      role="tab"
                    >
                      Vertika Newalkar
                    </a>
                    {/* ===== Existing students 1–23 yahan unchanged rahenge ===== */}

                    <a
                      className="nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std24-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std24"
                      role="tab"
                    >
                      Shivam Rai
                    </a>

                    <a
                      className="nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std25-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std25"
                      role="tab"
                    >
                      Mukhesh V Sudarshan
                    </a>

                    <a
                      className="nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std26-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std26"
                      role="tab"
                    >
                      Avani Lohiya
                    </a>

                    <a
                      className="nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std27-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std27"
                      role="tab"
                    >
                      Anupam Beohar
                    </a>

                    <a
                      className="nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std28-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std28"
                      role="tab"
                    >
                      Siddharth Sharma
                    </a>

                    <a
                      className="nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std29-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std29"
                      role="tab"
                    >
                      Akshita Jiaswal
                    </a>

                    <a
                      className="nav-link rounded-pill bg-light mt-3 text-black"
                      id="v-pills-std30-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-std30"
                      role="tab"
                    >
                      Sumeet Gupte
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    {/* Student 1 */}
                    <div
                      className="tab-pane fade show active card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std1"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/1.jpg"
                            alt="Yasham Gupta"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Yasham Gupta
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2024-25 Student at Neoma Business School, France
                          </h6>
                          <p>
                            As a PGDM-IT student, I had the privilege of
                            participating in the student exchange program at
                            NEOMA Business School, France. This experience was
                            truly transformative—both academically and
                            personally. Immersing myself in a new education
                            system broadened my outlook and introduced me to a
                            learning environment that encouraged critical
                            thinking, collaboration, and cultural exchange.
                            During my time in Europe, I had the opportunity to
                            travel across 17 countries. Each journey enriched my
                            understanding of diverse cultures, traditions, and
                            ways of life. From engaging with peers from across
                            the globe to navigating new environments
                            independently, every experience contributed to my
                            personal growth and global awareness. This exchange
                            program has been one of the most enriching chapters
                            of my academic journey. It helped me build
                            confidence, adaptability, and a deeper appreciation
                            for diversity. I am sincerely grateful to my college
                            for providing this platform and for supporting
                            students in exploring the world beyond the
                            classroom.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 2 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std2"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/2.jpg"
                            alt="Shrishti Sah"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Shrishti Sah
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2024-25 Student at Neoma Business School, France
                          </h6>
                          <p>
                            I remember the day the student exchange form was
                            released. Without much deliberation, I filled it
                            out. Looking back, that decision turned out to be
                            one of the most rewarding experiences of my academic
                            journey. Studying at{" "}
                            <b>NEOMA Business School in Reims, France,</b> was
                            much more than an academic experience. It gave me
                            the chance to live and learn in an environment I had
                            always hoped to be part of. The faculty at NEOMA
                            brought in real-world insights from across European
                            markets. As a marketing student, I was introduced to
                            brand storytelling in Europe, and I began to view
                            marketing not just as a discipline but as something
                            deeply rooted in culture and everyday life. I had
                            the opportunity to travel across 17 countries, and
                            it reminded me how fulfilling it can be to step out
                            of one's comfort zone and explore the world
                            firsthand. Since returning, I find myself changed,
                            not just as a student, but as a person. My worldview
                            has expanded, my approach to problem-solving is more
                            creative, and I am more confident in navigating
                            unfamiliar situations. I am truly grateful to IMT
                            Hyderabad, Professor Nitin Gupta, and our senior
                            Keerthivasan V for their constant support. If
                            there's one lasting takeaway, it's that living in a
                            new culture doesn't just teach you about the world;
                            you become a new version of yourself.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 3 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std3"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/3.jpg"
                            alt="Shushant Bhawar"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Shushant Bhawar
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2024-25 Student at Neoma Business School, France
                          </h6>
                          <p>
                            <b>
                              Unveiling Horizons: My Journey Through NEOMA and
                              Beyond
                            </b>{" "}
                            The student exchange program at{" "}
                            <b>NEOMA Business School, France,</b> was a truly
                            transformative chapter in my academic journey — one
                            made possible by <b>IMT Hyderabad</b> This
                            experience offered far more than just academic
                            enrichment. Over the course of the trimester, I
                            explored 16 countries, each offering a unique
                            cultural experience. From the Northern Lights in
                            Finland to the historical charm of Rome, every
                            destination became a classroom of its own, teaching
                            me resilience, adaptability, and the value of
                            cross-cultural connections. Academically, NEOMA's
                            globally focused curriculum helped me deepen my
                            understanding of finance, sharpen my analytical
                            thinking, and collaborate with a diverse peer group.
                            The blend of rigorous coursework and multicultural
                            exposure has broadened my worldview in ways I
                            couldn't have imagined. This exchange program didn't
                            just shape me as a student — it shaped me as a
                            global citizen. I return with not only academic
                            insights but also lifelong memories and lessons that
                            will guide me in both my personal and professional
                            pursuits. I'm incredibly grateful to IMT Hyderabad
                            for this opportunity, for opening the door to a
                            world beyond borders and helping me become a more
                            well-rounded, future-ready individual.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 4 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std4"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/4.jpg"
                            alt="Sirisha Peddemul"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Sirisha Peddemul
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2024-25 Student at Neoma Business School, France
                          </h6>
                          <p>
                            Participating in the student exchange program at
                            NEOMA Business School, France, has been one of the
                            most transformative experiences of my life. Beyond
                            the academic curriculum, it was a profound journey
                            across cultures, geographies, and perspectives that
                            shaped me in ways I could never have imagined. The
                            learning approach at NEOMA was highly interactive.
                            Collaborating with classmates from diverse countries
                            taught me to appreciate multiple viewpoints,
                            improved my cross-cultural communication skills, and
                            helped me adapt quickly to new environments. These
                            are qualities that are indispensable in any modern
                            organisation that operates on a global scale. As
                            quoted by Saint Augustine, "Life is a book, and
                            exploring new places allows you to read beyond the
                            first page." This program allowed me to turn some
                            pages, broadening my understanding not only of
                            international business but also of the world and my
                            place in it. During my time abroad, I had the unique
                            privilege of travelling to 20 countries across
                            Europe, witnessing firsthand the richness of varied
                            landscapes and cultures and experiencing subtleties
                            between bustling cities and remote natural areas.
                            From standing under the shimmering Northern Lights
                            to feeling fresh snowfall, enjoying sunny beaches,
                            and experiencing the contrasts of summer and winter
                            in different parts of the continent, every place
                            left a lasting impression on me.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 5 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std5"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/5.png"
                            alt="Varsha"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Varsha
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2024-25 Student at Neoma Business School, France
                          </h6>
                          <p>
                            To Travel is to Live" - Hans Christian Andersen The
                            cobblestone streets of Paris had always whispered a
                            promise of adventure in my ear. Thanks to the
                            Institute of Management Technology, Hyderabad that
                            enchanting dream became a reality. It unlocked the
                            door to a life-changing experience: an exchange
                            program at NEOMA Business School in France. This
                            wasn't just about textbooks and lectures; it was a
                            passport to a world brimming with diverse cultures.
                            Stepping onto the grounds of NEOMA was a dream come
                            true. But the most profound lessons weren't confined
                            to just classrooms. Living in France and venturing
                            across 10 other countries exposed me to a
                            kaleidoscope of customs, traditions, and
                            perspectives. From bustling pizzas in Rome to serene
                            alpine villages in Interlaken, the transition offers
                            a diverse range of experience. Navigating new
                            landscapes, both physical and cultural, pushed me
                            beyond my comfort zone.
                            <br /> Returning, I'm no longer the same wide-eyed
                            student who first embarked on this journey. IMT's
                            unwavering support has equipped me with more than
                            just academic knowledge. I've gained invaluable
                            skills in cultural sensitivity and adaptability.
                            This newfound strength and global perspective will
                            undoubtedly be the driving force in my personal and
                            professional pursuits. It's not just about the
                            destinations I visited, but the incredible people I
                            met, and the lessons learned along the way that will
                            forever be etched in my memory. This is a journey
                            that has truly shaped who I am today.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 6 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std6"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/6.png"
                            alt="Keerthivasan V"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Keerthivasan V
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2024-25 Student at Neoma Business School, France
                          </h6>
                          <p>
                            Never hesitate to venture far beyond seas,
                            frontiers, countries, and beliefs", as Amin Maalouf
                            wisely expressed, perfectly captures the
                            transformative essence of my student exchange
                            experience. I am deeply grateful to IMT Hyderabad
                            for granting me this incredible opportunity to
                            embark on an unforgettable journey of self-discovery
                            and adventure. This exchange program has
                            significantly broadened my worldview, leaving me
                            with invaluable life lessons that will stay with me
                            forever. During my time in the SEP program, I had
                            the privilege of exploring seven countries, each
                            offering unique experiences. From standing in awe
                            beneath the Eiffel Tower in Paris to chasing the
                            ethereal northern lights in Finland, and basking in
                            the beauty of the Swiss Alps, each destination has
                            left an indelible mark on me. These extraordinary
                            adventures, filled with wonder and joy, have become
                            treasured memories that I will hold close for a
                            lifetime. In addition to my travels, my academic
                            experience at Neoma Business School was equally
                            enriching. My passion for finance guided me in
                            selecting courses that aligned with my professional
                            aspirations. The curriculum at Neoma not only
                            deepened my knowledge in finance but also equipped
                            me with the analytical skills essential for my
                            career. This academic journey, coupled with the
                            cultural experiences, has truly shaped me into a
                            more well-rounded individual, ready to tackle the
                            complexities of a globalized world with confidence
                            and determination. The combination of personal
                            growth, academic enrichment, and cross-cultural
                            exposure during my exchange program has profoundly
                            impacted me, molding me into a more globally
                            conscious and capable individual.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 7 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std7"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/7.png"
                            alt="Gayathri V"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Gayathri V
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2024-25 Student at Neoma Business School, France
                          </h6>
                          <p>
                            Unveiling Horizons: A Journey of Self- Discovery
                            I've always dreamt of expanding my horizons, delving
                            into cultures, traditions, and the essence of
                            different ethnicities and, most importantly,
                            connecting with diverse people and places. IMT paved
                            the path to turn these dreams into reality, and I
                            truly lived every moment of it I journeyed through
                            10 countries, explored over 100 places, absorbed
                            1000 lessons, and cherished countless memories
                            during this transformative student exchange at Neoma
                            Business School, one of Europe's finest. These four
                            months have become a cherished chapter in my life,
                            and I'm profoundly grateful to everyone who
                            contributed to this extraordinary experience. This
                            journey wasn't just about academics; it reshaped me,
                            teaching me independence, courage, kindness, and,
                            above all, the confidence to be authentically
                            myself. This experience isn't merely a chapter in my
                            academic journey; it's an epic tale of
                            self-discovery and personal growth, expanding my
                            horizons and enriching my perspective inways I could
                            never have imagined.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 8 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std8"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/8.png"
                            alt="Somya Jain"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Somya Jain
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2024-25 Student at Neoma Business School, France
                          </h6>
                          <p>
                            Embarking on an exchange program is akin to opening
                            a door to a world of endless possibilities and
                            personal growth. It all started with a dream of mine
                            to immerse myself and gain exposure to international
                            education in my life. Somehow, IMT Hyderabad's SEP
                            became a catalyst in making it come true. There were
                            many preparations before packing and landing into
                            such a new phase of life. However, thankfully, with
                            the constant support of Prof. Nitin Gupta and the
                            guidance of our seniors, especially Souptik, for
                            always solving our queries, it became a lot simpler
                            for us. My openness and eagerness to learn allowed
                            me to forge meaningful connections with peers and
                            professors from different countries, enriching my
                            academic experience at NEOMA Business School. I
                            learned about different cultures and was happy to
                            make some great friends. What truly sets me apart is
                            my willingness to step out of my comfort zone and
                            travel beyond the borders of France. I seized every
                            opportunity to explore other European destinations.
                            Experiencing the culture of Scandinavian countries
                            made me truly realize their high ranking on the
                            happiness index. Disneyland showcased effective
                            branding, customer experience, and sales strategies,
                            offering valuable insights for business and
                            marketing. After traveling to 7 European countries,
                            I realized that it doesn't matter where you're
                            going; it's who you go with that makes the
                            experience fun. During this journey, I became more
                            confident and self-reliant in making decisions and
                            traveling alone.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 9 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std9"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/9.png"
                            alt="V Bharat Chandra"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            V Bharat Chandra
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2023-24 Student at Excelia, France
                          </h6>
                          <p>
                            Crossing Borders, Broadening Minds, and Creating
                            Global Leaders! IMT Hyderabad's student exchange
                            programme has been a game-changer for me. My
                            trimester in France at Excelia School of Business
                            has been nothing short of transformative. I owe it
                            all to the excellent opportunity provided by IMT
                            Hyderabad. During this exchange program, I had the
                            chance to visit 12 countries, each offering unique
                            experiences and insights. From exploring mountains
                            to indulging in gastronomy, every moment was an
                            adventure that broadened my horizons and deepened my
                            understanding of different cultures. Academically,
                            my time at Excelia School of Business was
                            exceptional. The academic rigour and a global
                            perspective challenged me to think critically and
                            creatively. The professors, their expertise and the
                            diverse student body made every class an enriching
                            experience. This exchange programme enhanced my
                            academic and cultural understanding and allowed me
                            to grow personally. I learned to adapt to new
                            environments, communicate effectively across
                            cultures, and embrace diversity with an open mind.
                            These skills will undoubtedly benefit me in my
                            further studies and future career. I am immensely
                            grateful to IMT Hyderabad for this incredible
                            opportunity. The experiences I gained during my
                            exchange program has been invaluable. I am eager to
                            apply what I have learned to my PGDM journey at IMT.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 10 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std10"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/10.png"
                            alt="Aman Bhura"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Aman Bhura
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2023-24 Student at Excelia, France
                          </h6>
                          <p>
                            Stepping Out, Stepping Up, My Unforgettable Exchange
                            Adventure. Participating in the student exchange
                            program was an enriching and transformative
                            experience that exceeded all my expectations. Not
                            only did I have the opportunity to immerse myself in
                            a new culture and educational system, but I also
                            forged lifelong friendships with peers from around
                            the globe. From the moment I arrived in [La
                            Rochelle], my host family and fellow students
                            greeted me with warmth and hospitality. The cultural
                            exchange went beyond the classroom, as I had the
                            chance to explore new traditions, cuisines, and ways
                            of life. It was incredible to witness firsthand how
                            diverse perspectives and backgrounds can enrich our
                            understanding of the world. One of the highlights of
                            my exchange experience was the opportunity to travel
                            to neighbouring countries during breaks and
                            weekends. Whether it was exploring historic
                            landmarks, indulging in local delicacies, or simply
                            soaking in the beauty of new landscapes, each
                            excursion was filled with unforgettable moments. But
                            perhaps the most rewarding aspect of my exchange
                            journey was the friendships I cultivated along the
                            way. Despite coming from different corners of the
                            world, we bonded over shared interests, laughed
                            together. Overall, my student exchange experience
                            was a perfect blend of academic growth, cultural
                            immersion, and personal enrichment. It not only
                            broadened my horizons but also instilled in me a
                            deeper appreciation for diversity and the
                            interconnectedness of our global community. I am
                            immensely grateful for the opportunity to have been
                            part of such an extraordinary journey and will
                            cherish the memories and friendships I made for a
                            lifetime.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 11 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std11"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/11.png"
                            alt="Leeladitya"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Leeladitya
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2023-24 Student at Excelia, France
                          </h6>
                          <p>
                            I applied for the student exchange program because I
                            believe it presents a unique opportunity to enhance
                            educational and personal growth. This exchange
                            program offers the chance to broaden horizons by
                            immersing oneself in a different academic and
                            cultural environment. My learning in SEP is all
                            about planning prior and keeping all the necessary
                            things ready before starting any process. We got our
                            visa at the end of the day, which created a lot of
                            tension and an uncertainty. We had to cancel our
                            flight tickets and rebook later. After all the
                            struggles, we celebrated our new year in Paris near
                            Eiffel tower which is one of the best experiences I
                            had. Sticking together saved us lot of work and
                            money during our SEP. We got a wonderful opportunity
                            to visit other nearby countries, that is once in a
                            lifetime opportunity for anyone. I experienced the
                            green and snowy areas of Swiss, Rome colosseum,
                            Venice gondola ride, missing of train in Italy,
                            northern lights and crossing of Arctic Circle in
                            Finland.<br/> <br/> When it comes to academics, I learnt
                            international negotiations. I learnt data mining
                            using rapid miner. I, even pitched for two new
                            business ideas during our entrepreneurship class, my
                            business ideas and ideology has grown up from
                            national level to international level, Now I am able
                            to understand the markets. I lost the fear of
                            speaking and giving presentations. Overall, my SEP
                            is blend of all academics, travelling, cultural
                            diversity and the most important thing: 'coming out
                            of the comfort zone'. And finally, during my SEP I
                            did two masters, one is International Business
                            management and the second is Masters in Cooking. I
                            really learnt how to cook many dishes during my SEP.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 12 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std12"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/12.png"
                            alt="Sarthak Gupta"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Sarthak Gupta
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2023-24 Student at NOVA, Portugal
                          </h6>
                          <p>
                            The purpose of life is to live it, to taste
                            experience to the utmost, to reach out eagerly and
                            without fear for newer and richer experiences. The
                            beautiful thing about learning is that no one can
                            take it away from you. My time at Nova SBE was
                            filled with numerous opportunities for learning and
                            growth. This experience enriches my academic and
                            professional development, giving me a broader
                            perspective on global business practices. Beyond the
                            academic enrichment, it allowed me to immerse myself
                            in a new culture, meet diverse people, and gain
                            invaluable exposure. Traveling to eight countries
                            and more than twenty cities in Portugal expanded my
                            understanding of different cultures, education
                            systems, languages, and lifestyles. l want to extend
                            my heartfelt gratitude to Nova School of Business
                            and Economics. My sincere thanks also go to my home
                            institution, the Institute of Management Technology,
                            Hyderabad, and especially to Nitin Gupta for
                            offering me this incredible opportunity to study in
                            Europe. Lastly, l am deeply grateful to my parents
                            and friends for their constant support and
                            encouragement.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 13 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std13"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/13.png"
                            alt="Soumya Ranjan"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Soumya Ranjan
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2023-24 Student at NOVA, Portugal
                          </h6>
                          <p>
                            During my third term, my semester exchange program
                            at NOVA School of Business and Economics was nothing
                            short of an exhilarating adventure. Studying at such
                            a prestigious international business school opened
                            my eyes to a world of possibilities. I interacted
                            with professors and students from every corner of
                            the globe, soaking up diverse perspectives and fresh
                            approaches to education like a sponge. The hands-on
                            projects we tackled were like treasure hunts, each
                            one a quest for knowledge that led to new
                            discoveries and deeper understanding. Living in a
                            different culture was like stepping into a whole new
                            universe. I embraced every moment, every challenge,
                            and every opportunity to grow.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 14 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std14"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/14.jpeg"
                            alt="Ishita Chowdhury"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Ishita Chowdhury
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2022-23 Student at Neoma Business School (Reims
                            Campus), France
                          </h6>
                          <p>
                            IMT, Hyderabad, has given me the incredible
                            opportunity to participate in a student exchange
                            program to Neoma Business School, Reims, France. My
                            stay was for 4 months (January, 2023 to April,
                            2023). The moment I stepped off the plane in Paris,
                            I was greeted by a sense of excitement and
                            anticipation. Over the next few months, I embarked
                            on a journey that would forever shape my perspective
                            on culture, language, and the world. Attending
                            classes at a French university was both challenging
                            and rewarding. The different approach to education
                            and the diverse international student body exposed
                            me to fresh ideas and unique perspectives. The
                            discussions in class, often spanning cultural
                            differences and global issues, broadened my horizons
                            and encouraged me to think critically. Exploring the
                            different countries, cities and countryside was also
                            an adventure in itself. My time in France was more
                            than just an exchange program; it was a
                            transformative journey that enriched my academic,
                            personal, and cultural perspectives in ways I could
                            never have imagined.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 15 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std15"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/15.jpeg"
                            alt="Sreekumar TM"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Sreekumar TM
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2022-23 Student at Neoma Business School (Reims
                            Campus), France
                          </h6>
                          <p>
                            I am very much thankful for the student exchange
                            program provided by IMT Hyderabad at Neoma Business
                            School, Reims, France. I had the fortune to interact
                            with many people from all over the world like from
                            Italy, Switzerland, Japan, Norway, USA, China,
                            Colombia and many more. It was realy helpful to
                            understand about the global perspectives of
                            Management and Business approches. Travelling to
                            many part of Europe was also an additional thing to
                            Cherish.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 16 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std16"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/16.jpeg"
                            alt="Souptik Nag"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Souptik Nag
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2022-23 Student at Neoma Business School (Reims
                            Campus), France
                          </h6>
                          <p>
                            Studying at Neoma Business School in Reims, France
                            provided me with a remarkable opportunity to
                            seamlessly blend international travel, immersive
                            cultural experiences, and language acquisition for
                            personal skill enhancement. Now, talking about the
                            academic activities, I learned new concepts from new
                            professors with different perspective and
                            methodology. Additionally, I engaged with foreign
                            educational systems through visits to various
                            universities and schools, fostering a comprehensive
                            understanding. Along with that, I made many
                            international contacts. After that I was surprised
                            with effortless elegance and timeless charm of
                            French natural beauty ranging from the picturesque
                            landscapes of Provence to the classic beauty of
                            Parisian architecture. Ultimately, I learned to
                            balance work-life and I grew to be less afraid of
                            uncertainty and be braver in taking on new
                            challenges. In summary, from the moment my flight
                            took off untill I landed back home, an international
                            exposure brought me amazing discoveries at every
                            turn.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 17 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std17"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/17.jpeg"
                            alt="Riya Awasthi"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Riya Awasthi
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2022-23 Student at Neoma Business School (Reims
                            Campus), France
                          </h6>
                          <p>
                            This exchange program has been everything I expected
                            it to be. Sitting in a class with people from
                            different parts of the world has changed me and my
                            perspective in many ways. I got a chance to travel
                            and check some iconic sites off my bucket list.
                            Studying abroad helped me become more independent,
                            adaptable and culturally aware. It was an experience
                            that I will never forget and one that I believe has
                            enriched my life in countless ways.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 18 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std18"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/18.jpeg"
                            alt="Anukriti Shrivastav"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Anukriti Shrivastav
                          </h5>
                          <h6 className="fw-bold mt-4">
                            SEP 2022-23 Student at Neoma Business School (Reims
                            Campus), France
                          </h6>
                          <p>
                            I went on a summer exchange program to Neoma
                            Business School, Reims in the beautiful country of
                            France. The experience is no less than a dream come
                            true. Packing up and leaving for a duration of four
                            months, feelings of nervousness and anxiety clouding
                            my mind, but in the end it was all worth it. It was
                            something completely out of my comfort zone but as
                            the famous saying goes – "Life begins at the end of
                            your comfort zone", I took the risk and ventured
                            towards something that I will remember for life.
                            Neoma offered me a chance to develop, learn, and
                            grow in a multicultural environment. Learning from
                            the excellent faculties who all come from different
                            parts of the world has helped me a lot in
                            understanding things from different perspectives. It
                            has also helped me boost my confidence and enhance
                            my personality because standing in a room full of
                            foreigners and giving presentations and proving your
                            worth is no easy task. I also got a chance to travel
                            to neighbouring countries and I got to learn that
                            travelling and business have one thing in common,
                            that is sometimes things may not go as per your plan
                            and you need to think on your feet and take quick
                            decisions to move forward, and it aided to help
                            improve my decision making skills.. All the
                            knowledge and experiences have helped me grow and
                            develop traits that will definitely prove beneficial
                            to me in both my personal and professional life.
                            Lastly, this dream would not have come true without
                            all the support from my parents and my institute IMT
                            Hyderabad. I will be always grateful to IMT for
                            providing me with this golden opportunity.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 19 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std19"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/19.jpeg"
                            alt="Jeevan Saiteja Sill"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Jeevan Saiteja Sill
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange student, EM Normandie Business School,
                            France.2020
                          </h6>
                          <p>
                            "When you live in a place away from your parents you
                            learn how to live, but when you live in a place away
                            from your culture you rediscover life and yourself.
                            You not only learn how to survive but also see the
                            beauty in it. This is what I went through, my zeal
                            for learning to survive in a new place increased. I
                            finally understood that after all life is about new
                            experiences and discovering a newer version of
                            yourself during all the new experiences."
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 20 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std20"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/20.jpeg"
                            alt="Avantika Singh Deo"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Avantika Singh Deo
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange student, EM Normandie Business School,
                            France, 2020
                          </h6>
                          <p>
                            "This unique opportunity to travel and see foreign
                            shores has humbled me. This experience has given me
                            new perspectives on my own thoughts and life, made
                            me feel blessed to have the opportunity to witness
                            new cultures, people and visit places. Through this
                            experience I have not only been able to make
                            lifelong friendships, but have also experienced
                            discussions on world politics, religion and cultures
                            which has created a deep impact. From broadening my
                            horizons on world views to renewed appreciation for
                            the lucky sheltered life we've been blessed with
                            back home, its all a whirlwind of emotions one goes
                            through. Exploring the hidden gems of foreign cities
                            to being lost on stony beaches, watching the sunset.
                            This experience has been like no other. I'm thankful
                            to IMT Hyderabad for providing me with such a once
                            in a lifetime opportunity."
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 21 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std21"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/21.jpeg"
                            alt="Aayush Sinha"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Aayush Sinha
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange student, EM Normandie Business School,
                            France, 2020
                          </h6>
                          <p>
                            "When you get to study along with travel, that's one
                            of the best combination you can ever get. IMT
                            Hyderabad provided me with this opportunity to study
                            in EM Normandie Business School and travel across
                            Europe. From spending weekends alongside cliffs of
                            Etretat to working on projects and case studies at
                            Normandie, it gives you a fresh perspective towards
                            life and triggers the hidden talent in oneself. It's
                            an experience which cannot be expressed in words but
                            can only be felt and as Mary Ritter says 'travel is
                            more than just sight seeing, it is a change that
                            goes on, deep and permanent, in the ideas of
                            living'. "
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 22 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std22"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/22.jpeg"
                            alt="Aniket Parkash Singh"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Aniket Parkash Singh
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange student,SGH Warsaw School of Economics,
                            Poland. 2020
                          </h6>
                          <p>
                            "Coming to Warsaw, Poland and venturing into a world
                            completely unknown to me seemed challenging. New
                            culture, ethos, and language of Central Europe were
                            some of the many challenges I faced here. Studying
                            abroad was primary, but it's the nitty-gritties of
                            daily life here that honed and nurtured my skills.
                            During my stay, I understood there are endless
                            opportunities out here. The scope for business is
                            huge. The people are really open and intrigued about
                            India. I was no longer a student, but also an
                            ambassador for my country. I felt privileged to be
                            able to shoulder this great responsibility.
                            Travelling and exploring new countries and places
                            was another added bonus! At the end of the exchange
                            program, my luggage at the airport will not only
                            have my material belongings but also timeless
                            memories, new friends, lessons learned that will be
                            way heavier than the 25kgs in my baggage. Last but
                            not the least, I would like to thank IMT for giving
                            me this excellent opportunity.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 23 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std23"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/23.jpeg"
                            alt="Vertika Newalkar"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Vertika Newalkar
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange student,ESG, UQAM, Canada. 2020
                          </h6>
                          <p>
                            "Travelling to a new place is always full of
                            adventure and new experiences. When I got the
                            opportunity to go to Canada and study, I knew a lot
                            is coming my way, knowledge, experience, fear,
                            courage, new people, new friends, different cultures
                            and what not. I was thrilled, I was happy and I was
                            living it. And if the climate is your personal
                            favorite, it adds to your glee. Montreal was
                            submerged in snow for two months and I loved it.
                            Being in a country extremely different from your
                            home calls for a greater involvement. From taking
                            the public transport to coming back home was itself
                            a unique experience in life. I explored the city,
                            got overwhelmed by the scenic beauty, learned new
                            cultures, observed people, their habits, and their
                            lifestyles. I got a bit nostalgic because time stops
                            for no one. One thing is there for sure and that is,
                            Student Exchange Program is not a year in your life
                            it is a life in a year. I am really thankful to IMT
                            Hyderabad that I could take this endeavor and I can
                            now cherish it for a lifetime."
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 24 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std24"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/24.jpeg"
                            alt="Shivam Rai"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Shivam Rai
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange student,ESG UQAM, Montreal, Quebec, Canada.
                            2020
                          </h6>
                          <p>
                            "I never thought that I would be able to cope with a
                            different culture on foreign land but as the famous
                            saying goes, "Great things never came from comfort
                            zones." Taking up this opportunity was one of the
                            toughest yet a rewarding decision of my life. Canada
                            having the largest number of immigrants in the world
                            allowed me to interact with countless diverse
                            personalities which in turn amplified my
                            understanding of this rich civilization. From
                            studying various global issues to understanding
                            people belonging to different ethnicities, culture
                            and time zones. From learning different aspects of
                            education system to have an opportunity for personal
                            development through self-realization and
                            self-evaluation. I travelled, observed, interpreted
                            and learned a lot. I would like to express my
                            sincere appreciation to IMT- Hyderabad for bestowing
                            me with this golden opportunity which helped me to
                            broaden my perspectives and gave me an experience to
                            cherish for a lifetime."
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 25 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std25"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/25.webp"
                            alt="Mukhesh V Sudarshan"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Mukhesh V Sudarshan
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange Student, Audencia Business School (2016)
                          </h6>
                          <p>
                            Joie de vivre – Cheerful enjoyment of life. This was or is the word that rings in my mind when I think of the exchange program that I underwent. I got a wonderful opportunity to learn new subjects and understand a whole new culture in a very beautiful city. Adjusting and adapting my mind and body to all the changes and shocks that I received will remain with me forever. I urge all our colleagues to make use of this chance and get the best out of it. As Jimmy Walker rightly says “It was a good experience”.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 26 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std26"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/26.webp"
                            alt="Avani Lohiya"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Avani Lohiya
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange Student, University of California – San
                            Diego, USA (2016)
                          </h6>
                          <p>
                           I got to spend my semester abroad at University of San Diego, California. Student exchange introduced me to a country no holiday or gap year could. I didn’t visit San Diego, I lived San Diego. An exchange not only gives you four months of a new culture, language, and country it gives you a lifetime of opportunity. I’ve gained information, experience, knowledge, confidence and self-dependence. It was a semester where I learned to put myself into unknown environments and challenged myself to learn and adapt. I completed my semester learning new marketing techniques, from doing a live project with Leo Schachter, to making infomercials and infographics. I also got a chance to get involved in new student clubs and make connections.I learnt that while the familiar is comfortable, there is magic in the unknown and the opportunities it throws at us.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 27 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std27"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/27.webp"
                            alt="Anupam Beohar"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Anupam Beohar
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange Student, Korea University Business School,
                            Seoul (2016)
                          </h6>
                          <p>
                           This was the best experience of my life. The people I met as well as the concepts I learned in class were amazing. I did not think it possible, but the knowledge acquired there is useful back in India as well. The college stays up to date with the latest international trends.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 28 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std28"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/28.webp"
                            alt="Siddharth Sharma"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Siddharth Sharma
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange Student, ICHEC Brussels Management School,
                            Belgium (2016)
                          </h6>
                          <p>
                           The student exchange program provided me with a platform to explore 20 countries which made me adapt to disparate cultures and learn new things which I would never have thought of doing. The courses offered, such as Intercultural Marketing Communication and Negotiation, Strategy for Digital Business and Nonprofit Economics provided insights about some world business practices. I would highly recommend every student to enroll in an exchange program if given a chance, since it can be a life changing, enriching experience.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 29 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std29"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img-fluid student-img w-100"
                            src="/media/std-ex/29.webp"
                            alt="Akshita Jiaswal"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Akshita Jiaswal
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange Student, Normandie Business School (2015)
                          </h6>
                          <p>
                           This Exchange gave us a chance to experience a different method of education, which to be honest is fun. I recommend everyone to get on this if given a chance. It will enrich you.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Student 30 */}
                    <div
                      className="tab-pane fade card p-md-4 mt-4 mx-md-5"
                      id="v-pills-std30"
                      role="tabpanel"
                    >
                      <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                        <div className="student-img-box">
                          <img
                            className="img student-img "
                            src="/media/std-ex/30.webp"
                            alt="Sumeet Gupte"
                          />
                        </div>
                        <div className="student-content" style={{ flex: "1" }}>
                          <h5 className="fw-bold text-decoration-underline">
                            Sumeet Gupte
                          </h5>
                          <h6 className="fw-bold mt-4">
                            Exchange Student, Normandie Business School (2015)
                          </h6>
                          <p>
                            This student exchange not only taught us the
                            subjects we wanted to learn, it taught us to value
                            things, like a simple ready hot meal, we take for
                            granted. It taught us the importance of
                            adaptability, how important it is to adjust to new
                            and unknown surroundings, to make the best of every
                            situation which is thrown at you and in face of all
                            the problems you might or might not face to just
                            enjoy!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2. MAIN TAB CONTENT */}
          <div className="tab-content container mt-4 mb-4">
            {/* In */}
            <div
              className="tab-pane fade show bg-white p-md-4 rounded-4 text-black"
              id="tab-ie"
              role="tabpanel"
            >
              <nav className="nav nav-pills gap-2 mb-3 justify-content-center p-3 mt-md-2 mt-3">
                <a
                  className="nav-link bg-light text-dark rounded-pill tab active"
                  data-bs-toggle="pill"
                  href="#sub-res-inex"
                  role="tab"
                >
                  {" "}
                  Exchange students
                </a>
                <a
                  className="nav-link bg-light text-dark rounded-pill tab"
                  data-bs-toggle="pill"
                  href="#sub-res-inaf"
                  role="tab"
                >
                  {" "}
                  Application Form
                </a>
              </nav>
              <div className="tab-content container-sm text-black mb-5">
                <div
                  className="tab-pane fade show active"
                  id="sub-res-inex"
                  role="tabpanel"
                >
                  {/* Main layout: row with left nav and right content */}
                  <div className="row g-4 ">
                    {/* Left Side: Vertical Scrollable Nav (Tabs) */}
                    <div className="col-12 col-md-4">
                      <div
                        className="position-sticky top-0"
                        style={{
                          maxHeight: "80vh",
                          overflowY: "auto",
                          padding: "0.5rem",
                        }}
                      >
                        <nav className="nav nav-pills flex-column gap-2">
                          <a
                            className="nav-link bg-light text-dark rounded-pill tab active"
                            data-bs-toggle="pill"
                            href="#sub-res-std1"
                            role="tab"
                          >
                            Julliettee Laffittee
                          </a>
                          <a
                            className="nav-link bg-light text-dark rounded-pill tab"
                            data-bs-toggle="pill"
                            href="#sub-res-std2"
                            role="tab"
                          >
                            Tuharora Cabeal
                          </a>
                          <a
                            className="nav-link bg-light text-dark rounded-pill tab"
                            data-bs-toggle="pill"
                            href="#sub-res-std3"
                            role="tab"
                          >
                            Marine Karvadec
                          </a>
                          <a
                            className="nav-link bg-light text-dark rounded-pill tab"
                            data-bs-toggle="pill"
                            href="#sub-res-std4"
                            role="tab"
                          >
                            Stephane Portal
                          </a>
                        </nav>
                      </div>
                    </div>
                    {/* Right Side: Tab Content */}
                    <div className="col-12 col-md-8">
                      <div className="tab-content">
                        {/* std1 */}
                        <div
                          className="tab-pane fade show active"
                          id="sub-res-std1"
                          role="tabpanel"
                        >
                          <div className="card mb-3">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img
                                  src="/media/std-ex/in1.png"
                                  className="img-fluid rounded-start"
                                  alt="Julliettee Laffittee"
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="fw-bold">
                                    Julliettee Laffittee
                                  </h5>
                                  <h5 className="card-title">
                                    SEP 2023-24 Student from Neoma Business
                                    School, France
                                  </h5>
                                  <p className="card-text">
                                    Exploration is the essence of the human
                                    spirit,” a sentiment that encapsulates my
                                    transformative 4-month journey in India.
                                    Immersing myself in its vibrant culture, I
                                    experienced remarkable personal and
                                    professional growth.
                                    <br />
                                    <br /> I explored destinations like
                                    Rajasthan, Agra, Chennai, Goa, and Kerala,
                                    each showcasing India’s rich heritage. From
                                    Rajasthan’s majestic palaces to Kerala’s
                                    serene backwaters and the iconic Taj Mahal,
                                    the beauty was awe-inspiring. Adapting to
                                    spicy cuisine and extreme heat was
                                    challenging but offered valuable insights
                                    into local life.
                                    <br />
                                    <br /> At university, being one of three
                                    international students presented challenges
                                    and opportunities. Supportive professors and
                                    welcoming Indian students created an
                                    inclusive environment, enriching my
                                    understanding of cultural nuances and
                                    classroom dynamics.
                                    <br />
                                    <br /> This journey profoundly shaped my
                                    adaptability and global awareness. The
                                    warmth of the people, diverse culture, and
                                    lessons learned left me with immense
                                    gratitude for an unforgettable experience
                                    that broadened my horizons and deepened my
                                    appreciation for diversity.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* std2 */}
                        <div
                          className="tab-pane fade"
                          id="sub-res-std2"
                          role="tabpanel"
                        >
                          <div className="card mb-3">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img
                                  src="/media/std-ex/in2.png"
                                  className="img-fluid rounded-start"
                                  alt="Tuharora Cabeal"
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="fw-bold">Tuharora Cabeal</h5>
                                  <h5 className="card-title">
                                    SEP 2023-24 Student from Neoma Business
                                    School, France
                                  </h5>
                                  <p className="card-text">
                                    This exchange program was a unique,
                                    immersive experience in the beautiful
                                    country that is India, thanks to the
                                    partnership between Neoma BS and IMT
                                    Hyderabad. It was more than just an academic
                                    exchange; it has been a true human and
                                    cultural adventure.
                                    <br />
                                    <br /> I had the chance to travel around
                                    India during my stay and explore cities like
                                    Goa and Kochi. These trips allowed me to
                                    discover breathtaking landscapes, from the
                                    calm beaches of South Goa to the verdant tea
                                    plantations of Munnar, where each place had
                                    a unique and enriching story to tell.
                                    <br />
                                    <br /> At IMT, I met incredible people with
                                    whom I hope to maintain lifelong
                                    friendships. I will cherish these
                                    friendships, which were built around shared
                                    moments, laughter, and discoveries. Living
                                    on campus gave me a deep immersion in the
                                    lives of local students and Indian culture.
                                    The academic environment at IMT helped me
                                    develop my skills while opening up new
                                    perspectives of opportunities.
                                    <br />
                                    <br /> This experience in India has sparked
                                    a deep interest and curiosity in me, and I
                                    hope to return in the future to explore even
                                    more of this fascinating country.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* std3 */}
                        <div
                          className="tab-pane fade"
                          id="sub-res-std3"
                          role="tabpanel"
                        >
                          <div className="card mb-3">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img
                                  src="/media/std-ex/in3.png"
                                  className="img-fluid rounded-start"
                                  alt="Marine Karvadec"
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="fw-bold">Marine Karvadec</h5>
                                  <h5 className="card-title">
                                    SEP 2023-24 Student from Neoma Business
                                    School, France
                                  </h5>
                                  <p className="card-text">
                                    I'm very grateful for the chance to go to
                                    the country of a thousand colours: India. It
                                    was a journey rich in self-discovery and
                                    adventure.
                                    <br />
                                    <br /> During my 4 months in India, I was
                                    able to discover different regions, all very
                                    different from each other, and met many
                                    people. I was particularly touched by their
                                    open-mindedness, their sense of welcome and
                                    their kindness towards us. In addition to my
                                    travels, my academic experience at IMT
                                    Hyderabad was also very enriching. The two
                                    other French students and I were really
                                    immersed in an Indian university, following
                                    the same courses as the students and taking
                                    part in the school's events. We really got
                                    out of our comfort zone, as we weren't used
                                    to knowing anyone around us. We were made
                                    very welcome by the students and we'll keep
                                    in touch with them!
                                    <br />
                                    <br /> The courses were very similar to
                                    those we had at NEOMA and the teachers were
                                    very friendly and very attentive. However,
                                    the cultural difference is quite big
                                    compared to France, so we were really
                                    disorientated. What's more, there were only
                                    three of us, which complicated things.
                                    Nevertheless, it was an experience that will
                                    remain engraved in my memory!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* std4 */}
                        <div
                          className="tab-pane fade"
                          id="sub-res-std4"
                          role="tabpanel"
                        >
                          <div className="card mb-3">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img
                                  src="/media/std-ex/in4.png"
                                  className="img-fluid rounded-start"
                                  alt="Stephane Portal"
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="fw-bold">Stephane Portal</h5>
                                  <h5 className="card-title">
                                    Exchange student (2015), Neoma Business
                                    School, France
                                  </h5>
                                  <p className="card-text">
                                    “It has been a lifetime experience, and I
                                    thank my Indian friends and the IMT
                                    Administration for their help to make me
                                    feel as comfortable as possible during my
                                    stay”.
                                  </p>
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
              <div className="tab-content container-sm text-black mb-5">
                <div
                  className="tab-pane fade"
                  id="sub-res-inaf"
                  role="tabpanel"
                >
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered align-middle">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Download Application</th>
                          <th scope="col" className="text-center">
                            2025-2026
                          </th>
                          <th scope="col" className="text-center">
                            <a
                              href="https://drive.google.com/file/d/1RqrKCH3dfFGyBW8qQlhsvAzB5pGwK3l2/view"
                              className="btn btn-sm rounded-pill"
                            >
                              Click Here
                            </a>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>For more details on Inbound Exchange please</td>
                          <td className="text-center">2025-2026</td>
                          <td className="text-center">
                            <a
                              href="https://drive.google.com/file/d/1klocE-x8eLnrJySMOn37n9IPztQgvD9P/view?usp=sharing"
                              className="btn btn-sm rounded-pill"
                            >
                              Click Here
                            </a>
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Gradient banner with subtle overlay */
      .faculty-hero {
        background: url("/media/std-ex/banner/international relations.jpg");
        position: relative;
        background-size: cover;
        height: 50vh;
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

      .nav-pills .nav-link.active {
        background-color: var(--bs-warning) !important;
        color: var(--bs-dark) !important;
      }

      .scrollable-columns {
        max-height: 400px;
        overflow-y: auto;
        column-count: 2;
        column-gap: 1rem;
        padding-right: 10px;
      }

      .scrollable-columns .nav-link {
        display: inline-block;
        width: 100%;
        margin-bottom: 0.5rem;
      }
        .student-img {
        height: 290px;
  max-width: 245px;        /* image size control */
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}
  

/* ===== Medium screens (Tablet) ===== */
@media (max-width: 991px) and (min-width: 768px) {
  .student-img {
    max-width: 220px;
    margin-bottom: 10px;
  }
}

/* ===== Small screens (Mobile) ===== */
@media (max-width: 767px) {
  .student-img {
    max-width: 100%;
    display: block;
    margin: 0 auto 15px auto; /* center image */
  }

  .student-content {
    text-align: center;
  }
}
/* ===== Wrapper ===== */
.student-flex-wrap {
  width: 100%;
}

/* ===== Image Container ===== */
.student-img-box {
  flex: 0 0 35%;
  min-width: 250px;
  max-height: 260px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f8f9fa;
  border-radius: 6px;
}

/* ===== Image ===== */
.student-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* desktop */
}

/* ===== Content ===== */
.student-content {
  flex: 1;
  padding-left: 16px !important;
  padding-right: 8px !important;

  text-align: left;         
}

/* ===== Force text start (Bootstrap override safe) ===== */
.student-content *,
.student-content h5,
.student-content h6,
.student-content p {
  text-align: left !important;
}

/* ===== Mobile View ===== */
@media (max-width: 767px) {
  .student-img-box {
    width: 100%;
    min-width: unset;
    max-height: 220px;
  }

  .student-img {
    object-fit: contain; /* mobile me full image */
  }

  .student-content {
    padding: 12px 8px 0;
    text-align: left;
    
  }
}

    `,
        }}
      />
    </>
  );
}
