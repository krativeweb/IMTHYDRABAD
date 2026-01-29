"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";
export default function GlobalImmersionProgram() {
  // Data for 2024-25 sessions

  // Initialize AOS
  useEffect(() => {
    import("aos").then((AOS) => {
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
        background: url("/media/banners/Group 5.jpg") !important;
        position: relative;
        background-size: cover !important;
        height: 60vh;
          background-position: center !important;
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

      /* Active tab styling */
      .nav-pills .nav-link.active {
        background-color: var(--bs-warning) !important;
        color: var(--bs-dark) !important;
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

      {/* Faculty Section */}
      <section className="faculty-section">
        {/* Hero Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/Group 5.jpg')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
              backgroundPosition: "center !important"
          }}
        >
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">
            Global Immersion Program
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            Preparing students for a world without borders. <br />
            Our global immersion programs blend international learning with
            cultural insight to create truly global leaders.
          </p>
        </div>

        {/* Breadcrumb */}
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
                  Global Immersion Program
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <InternationalAssociationStickyBtns />
        {/* Tab Navigation */}
        <section>
          <nav className="nav nav-pills justify-content-center flex-wrap gap-2">
            <a
              className="nav-link rounded-pill bg-white active text-black"
              data-bs-toggle="tab"
              href="#tab-menu1"
              role="tab"
            >
              2024-25
            </a>
            <a
              className="nav-link rounded-pill bg-white text-black"
              data-bs-toggle="tab"
              href="#tab-menu2"
              role="tab"
            >
              2023-24
            </a>
            <a
              className="nav-link rounded-pill bg-white text-black"
              data-bs-toggle="tab"
              href="#tab-menu3"
              role="tab"
            >
              2022-23
            </a>
            <a
              className="nav-link rounded-pill bg-white text-black"
              data-bs-toggle="tab"
              href="#tab-menu4"
              role="tab"
            >
              2021-22
            </a>
          </nav>
          <div className="tab-content container mt-4">
            <div
              className="tab-pane fade show active bg-white p-4 rounded-4 "
              id="tab-menu1"
              role="tabpanel"
            >
              <div className="table-responsive mt-4">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th width="10%">Date</th>
                      <th width="40%">Topic</th>
                      <th width="40%">Speaker</th>
                      <th width="10%">Timing (IST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>17-Feb-25</td>
                      <td>
                        AI and Gen AI Applied to Marketing: A BCG Perspective
                      </td>
                      <td>
                        Ms. Paola F. Scarpa, Managing Director &amp; Partner,
                        Boston Consulting Group (BCG), Italy
                      </td>
                      <td>6.30 pm</td>
                    </tr>
                    <tr>
                      <td>23-Feb-25</td>
                      <td>
                        Eco-Business Blueprint: Building a Sustainable Future in
                        Egypt by Indian Entrepreneurs
                      </td>
                      <td>
                        Dr. Ibrahim El-Ghanam, Entrepreneurship and Leadership
                        Consultant, Reyada Academy, Egypt
                      </td>
                      <td>6.30 pm</td>
                    </tr>
                    <tr>
                      <td>25-Feb-25</td>
                      <td>Ethics and Leadership in the era of AI</td>
                      <td>
                        Ms. Sandrine Richard, Senior Compliance Manager
                        (Europe), Alliance Automotive Group, France
                      </td>
                      <td>6.30 pm</td>
                    </tr>
                    <tr>
                      <td>26-Feb-25</td>
                      <td>
                        From Theory to Practice: Navigating Supply Chain
                        Resilience in a Complex Global Environment
                      </td>
                      <td>
                        Ms. Zera Zheng, Global Head of Business Resilience
                        Consulting, A.P. Moller – Maersk, Netherlands
                      </td>
                      <td>6.30 pm</td>
                    </tr>
                    <tr>
                      <td>27-Feb-25</td>
                      <td>AI Regulation in the Age of Fragmentation</td>
                      <td>
                        Mr. Tommaso Giardini, Associate Director, Digital Policy
                        Alert, Switzerland
                      </td>
                      <td>6.30 pm</td>
                    </tr>
                    <tr>
                      <td>05-Mar-25</td>
                      <td>Immersive Technologies and Jobs of the Future</td>
                      <td>
                        Dr. Thuong Hoang, Associate Head of School Research and
                        Associate Professor, Emerging Technologies, Deakin
                        University, Australia
                      </td>
                      <td>9:00 am</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <p>
                <img
                  src="/media/G-I/1.jpg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>IMT Hyderabad, 17th February 2025</b>: Institute of
                Management Technology (IMT), Hyderabad, organized its{" "}
                <b>Global Immersion Program</b>, featuring an insightful session
                led by <b>Ms. Paola F. Scarpa</b>, Managing Director &amp;
                Partner at Boston Consulting Group (BCG), Italy. The session,
                titled “
                <b>AI and Gen AI Applied to Marketing: A BCG Perspective</b>”,
                was expertly coordinated by <b>Prof. (Dr.) Nitin Gupta.</b>
              </p>
              <p>
                <b>Ms. Paola</b> delivered an engaging presentation,
                demonstrating how Predictive AI can be enhanced by Generative
                AI, significantly broadening its potential applications. She
                also explored the key areas where Generative AI is being
                utilized and addressed the challenges related to the reliability
                of sources used by Gen AI. Additionally, she shared valuable
                insights on how companies can begin their journey with
                Generative AI and how nations can leverage this technology to
                implement strategic initiatives.
              </p>
              <p>
                During the session, <b>Ms. Paola</b> further elaborated on how
                BCG tackles challenges related to traditional marketing tools.
                She introduced FABRIQ, BCG’s proprietary AI-based media
                solution, and illustrated how AI is revolutionizing the creation
                of video advertisements. Through her examples, it became clear
                that AI is not just a tool, but a transformative force for
                businesses.
              </p>
              <p>
                The session concluded with an interactive Q&amp;A session, where
                IMT Hyderabad students had the opportunity to engage with the
                speaker. <b>Prof. (Dr.) Nitin Gupta </b>wrapped up the event by
                expressing gratitude to <b>Ms. Paola</b> for her invaluable time
                and the wealth of knowledge she shared with the students.
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/2.jpg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 23rd February 2025</b>: The Institute of
                Management Technology (IMT), Hyderabad, hosted the second
                session of its <b>Global Immersion Program</b>, featuring an
                engaging session led by <b>Dr. Ibrahim El-Ghanam</b>, an
                Entrepreneurship and Leadership Consultant at Reyada Academy in
                Egypt. The session was titled{" "}
                <b>
                  "Eco-Business Blueprint: Building a Sustainable Future in
                  Egypt by Indian Entrepreneurs"
                </b>{" "}
                and was expertly coordinated by
                <b>Prof. (Dr.) Nitin Gupta</b>.
              </p>
              <p>
                Dr. Ibrahim delivered an insightful presentation on businesses
                in the{" "}
                <b>
                  Middle East and North Africa (MENA) region and Egypt’s
                  sustainability strategies
                </b>
                . He highlighted the diverse economic landscape of MENA, its key
                business hubs, and challenges such as high unemployment and
                economic disparities. He emphasized Egypt’s economic reforms and
                its burgeoning startup ecosystem and reported $500 million in
                venture capital funding in 2022. In discussing sustainability,
                he outlined Egypt’s initiatives in solar energy, carbon capture,
                water-efficient agriculture, electric vehicle (EV)
                infrastructure, and eco-friendly tourism. With rapid
                advancements in crucial sectors, Dr. Ibrahim underscored the
                vital role of innovation and private sector involvement in
                driving sustainable growth and economic resilience in the
                region.
              </p>
              <p>
                His presentation also highlighted the increasing participation
                of Indian eco-businesses in Egypt, showcasing significant
                investments in chemicals, renewable energy, waste management,
                and sustainable agriculture. He presented projects such as Renew
                Power's 500 MW solar farm and EcoCentric's waste-to-energy
                plant, emphasizing their sustainability and economic impact.
                Despite challenges like regulatory barriers and inflation,
                collaborations between India and Egypt continue to thrive due to
                government incentives and cultural adaptability. Dr. Ibrahim
                outlined key steps for planning international ecological
                businesses, stressing the importance of market research,
                sustainability strategies, and financial viability. He concluded
                by stating that strategic partnerships and corporate social
                responsibility (CSR) initiatives are essential for fostering
                long-term, sustainable economic growth.
              </p>
              <p>
                The session ended with an interactive Q&amp;A segment, allowing
                IMT Hyderabad students to engage directly with the speaker.
                Prof. (Dr.) Nitin Gupta concluded the event by expressing his
                gratitude to Dr. Ibrahim for his valuable insights and the
                wealth of knowledge he shared with the students.
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/3.jpg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 25th February 2025</b>: The Institute of
                Management Technology (IMT), Hyderabad, hosted the third session
                of its <b>Global Immersion Program</b>, featuring an engaging
                session led by <b>Ms. Sandrine Richard</b>, an expert in
                antibribery and board member, Ethik IA, France. The session was
                titled <b>"Ethics and Leadership in the Era of AI"</b> and was
                expertly coordinated by <b>Prof. (Dr.) Nitin Gupta</b>.
              </p>
              <p>
                Ms. Sandrine delivered a thought-provoking presentation on the
                rapid evolution of AI and its growing influence across
                industries such as finance, healthcare, marketing, and supply
                chain management. The discussion highlighted AI-driven
                innovations, ethical concerns surrounding AI adoption, and the
                role of technology in shaping the future of work.
              </p>
              <p>
                However, beyond technology, the session placed a strong emphasis
                on what makes a great leader. She also elaborated on how AI is
                not just transforming business operations but also redefining
                leadership in the digital age. A key takeaway was that a great
                leader is not just someone who embraces change and innovation
                but also someone who leads with integrity, takes accountability,
                and acknowledges mistakes as opportunities for growth. The
                discussion highlighted how humility, adaptability, and emotional
                intelligence are crucial traits of leaders navigating the
                AI-driven world.
              </p>
              <p>
                The session also explored how AI can enhance leadership by
                providing data-driven insights for better decision-making while
                emphasizing that human intuition, ethical judgment, and empathy
                remain irreplaceable in authentic leadership. A key focus was
                the role of AI in economic growth and digital transformation,
                with case studies on AI-driven startups, advancements in
                fintech, and the rise of AI-powered analytics in business
                decision-making. The session also touched on the emerging AI
                trends such as generative AI, deep learning, and autonomous
                systems.
              </p>
              <p>
                The session ended with an interactive Q&amp;A segment, allowing
                IMT Hyderabad students to engage directly with the speaker.
                Prof. (Dr.) Nitin Gupta concluded the event by expressing his
                gratitude to Ms. Sandrine Richard for her valuable insights and
                the wealth of knowledge she shared with the students.
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/4.jpg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 26th February 2025</b> – The Institute of
                Management Technology (IMT), Hyderabad, successfully hosted the
                fourth session of its <b>Global Immersion Program</b>, featuring{" "}
                <b>Ms. Zera Zheng</b>, Global Head of Business Resilience
                Consulting at A.P. Moller-Maersk, Netherlands. The session was
                titled{" "}
                <b>
                  "From Theory to Practice: Navigating Supply Chain Resilience
                  in a Complex Global Environment"
                </b>
                .
              </p>
              <p>
                Ms. Zheng opened the discussion by defining supply chain
                resilience through the lens of the Chartered Institute of
                Procurement &amp; Supply (CIPS) while also offering her own
                perspective on its significance. She then provided a structured
                overview detailing global standards and guidelines that shape
                resilience, including ISO, BCI, APICS, and CSCMP frameworks. She
                further introduced key theoretical foundations underpinning
                supply chain resilience, such as Complex Adaptive Systems, Risk
                Management, and Network Theory.
              </p>
              <p>
                Transitioning to practical applications, Ms. Zheng outlined the
                six core components of a resilient supply chain—Visibility, Risk
                Management, Solutions, Disruption Handling, Supplier
                Relationships, and Technology &amp; Innovation. Using the Panama
                Canal as a reference point, she contextualized these components
                before delving into each in depth.
              </p>
              <p>
                Additionally, she addressed key regulations and emerging global
                trends, including rising geopolitical risks and the concept of
                "Polycrisis," before discussing practical strategies to
                strengthen and future-proof supply networks. She encouraged
                participants to analyse other scenarios where these principles
                could be applied critically.
              </p>
              <p>
                The session concluded with a dynamic Q&amp;A segment, where IMT
                Hyderabad students engaged with Ms. Zheng in thought-provoking
                discussions. <b>Prof. (Dr.) Nitin Gupta </b>wrapped up the event
                by expressing gratitude for Ms. Zheng’s valuable insights and
                impactful contributions to the students’ learning experience.
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/5.jpg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 27th February 2025</b> – The Institute of
                Management Technology (IMT), Hyderabad, successfully hosted its
                fifth session of <b>Global Immersion Program 2025</b>, featuring{" "}
                <b>Mr. Tommaso Giardini</b>, Associate Director, Digital Policy
                Alert, Switzerland. The session was titled{" "}
                <b>"AI Regulation in the Age of Fragmentation"</b>.
              </p>
              <p>
                Mr. Giardini began the conversation by outlining how various
                regulations and digital policies are now conceived and executed,
                as well as the role of AI in this process. He talked about
                several problems, such as rule compliance with other countries
                and a lack of understanding of their position in terms of AI
                regulation.{" "}
              </p>
              <p>
                Mr. Giardini also highlighted the operation of the tracker of
                all international laws and regulations, which presently contains
                data from approximately 220 countries and has lately included
                numerous South Asian and African countries. The tracker is
                AI-enabled and assists in presenting appropriate information
                with a vast range of data regarding various legislation across
                the covered counties. Mr. Giardini thoroughly demonstrated
                several qualities, one of which was giving personalized
                information based on the criteria used so that users could
                receive clear and relevant results.
              </p>
              <p>
                Additionally, Mr. Giardini emphasized the importance of
                international cooperation to develop safer AI rules. He also
                discussed Organization for Economic Cooperation and
                Development(OECD) principles and the importance of bridging the
                gap between international standards and national legislation in
                order to maximize the impact of AI policies.
              </p>
              <p>
                The event finished with an interactive Q&amp;A section in which
                IMT Hyderabad students engaged in thought-provoking exchanges
                with Mr. Tommaso Giardini. <b>Prof. (Dr.) Nitin Gupta</b>{" "}
                concluded the session by thanking Mr. Giardini for the immersive
                experience and information he shared with the students.
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/6.jpg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 5th March, 2025</b> – The Institute of Management
                Technology (IMT), Hyderabad, successfully hosted its sixth
                session of <b>Global Immersion Program 2025</b>, featuring{" "}
                <b>Dr. Thuong Hoang</b>, Associate Head of School Research and
                Associate Professor, Emerging Technologies, Deakin University,
                Australia. The session, titled{" "}
                <b>“Immersive Technologies and Jobs of the Future,”</b> was
                skilfully coordinated by <b>Prof. (Dr.) Nitin Gupta</b>, and
                provided students with a deep understanding of emerging job
                roles in a technology-driven world.
              </p>
              <p>
                Dr. Hoang began the discussion by shedding light on the rapid
                advancements in immersive technologies and their impact on
                various industries. He spoke about Artificial Intelligence, 3D
                Printing, Blockchain, Robotics, Drones, Self-driving Cars,
                Virtual &amp; Augmented Reality, Wearables, Genomics, and the
                Internet of Things (IoT), emphasizing their role in shaping the
                future job market.
              </p>
              <p>
                Dr. Hoang also highlighted the increasing demand for specialized
                skills in domains such as Software Engineering, Networking &amp;
                Cloud Technologies, Data Analytics &amp; AI, Mobile App
                Development, UX/UI Design, and Enterprise Solutions. He stressed
                the importance of upskilling and adapting to technological
                shifts to remain competitive in the evolving job market.
              </p>
              <p>
                Additionally, he discussed the intersection of immersive
                technologies with business and management, demonstrating how
                industries are integrating these advancements to drive
                innovation and efficiency. His insights provided students with a
                comprehensive perspective on the future of work and the skills
                required to excel in this dynamic landscape.
              </p>
              <p>
                The session concluded with an interactive Q&amp;A, where IMT
                Hyderabad students actively engaged with Dr. Thuong Hoang. Prof.
                (Dr.) Nitin Gupta wrapped up the session by expressing gratitude
                to Dr. Hoang for providing the students with such an engaging
                and informative experience. With this session, the GIP 2025
                concluded on a successful note.
              </p>
              <br />
            </div>
          </div>
          {/* 2023-24 */}
          <div className="tab-content container-sm mb-4">
            <div
              className="tab-pane fade bg-white p-4 rounded-4 "
              id="tab-menu2"
              role="tabpanel"
            >
              <p>
                <img
                  src="/media/G-I/7.png"
                  alt=""
                  className="w-100 img-fluid"
                />
              </p>
              <p
                className="title_p p-3 rounded-3 text-white"
                style={{ backgroundColor: "#033593" }}
              >
                <b>
                  {" "}
                  Aspects of organizational psychology with developing nation
                  perspective
                </b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Prof. Karin Sanders, Senior Deputy Dean, Research &amp;
                Enterprise, UNSW Business School, Australia
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                28-Feb-24
              </p>
              <br />
              <br />
              <p>
                <img
                  src="/media/G-I/8.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>IMT Hyderabad, 28th Feb 2024:</b> Institute of Management
                Technology (IMT), Hyderabad hosted the first session of the
                Global Immersion Program 2024 (GIP-24) on 28th February 2024.
                The eminent orator for the session was{" "}
                <b>Prof. Karin Sanders,</b> Senior Deputy Dean of Research &amp;
                Enterprise, UNSW Business School, Australia, who discussed{" "}
                <b>
                  “Aspects of Organizational Psychology with Developing Nation
                  Perspective”
                </b>
                . Prof. (Dr.) Nitin Gupta, Professor – Marketing, Chairperson –
                International Relations, Co-Chair – Branding &amp; PR, IMT
                Hyderabad, welcomed the speaker, after which Raghav Agarwal, a
                first-year PGDM student, briefly introduced the guest speaker.
              </p>
              <p>
                The speaker began the session with a brief introduction and
                expressed enthusiasm about engaging with MBA students from
                India. She showcased the top companies that Indian students are
                currently aspiring to work for. Furthermore, she delved into
                Human Resource Management (HRM), elucidating it as an approach
                to managing people through integrated HR policies, strategies,
                and practices. The distinction between personnel management and
                HRM was clearly articulated. She emphasized the
                interconnectedness of HR departments, employees, and
                organizational performance, citing examples from various
                research papers to illustrate how to formulate efficient HRM
                strategies.
              </p>
              <p>
                The speaker underscored the primary strengths of HRM, such as
                distinctiveness, consistency, and consensus, substantiating her
                points with relevant examples that resonated with the students.
                She discussed the concept of power distance across different
                countries, particularly emphasizing India's high power distance.
                Regarding the COVID-19 crisis, she highlighted the pivotal role
                of HR in disseminating information.
              </p>
              <p>
                The interactive session also covered prominent theories in human
                resource management, notably the Attribution theory, which was
                thoroughly explored. Key concepts like affective commitment,
                uncertainty avoidance, collectivism, individualism, masculinity,
                and femininity across different countries were intricately
                explained, providing students with valuable insights.
              </p>
              <p>
                Following the session, a Q&amp;A segment ensued where students
                eagerly sought the speaker's insights on how India's
                multicultural dynamics contribute to formulating an effective
                HRM strategy. The conversation further delved into the
                challenges that policymakers face in disseminating uniform
                information to ensure all employees are aligned.
              </p>
              <p>
                Upon the successful conclusion, students expressed their
                heartfelt gratitude and thanked Prof. Karin Sanders for
                delivering such an enlightening discourse.
              </p>
              <br />
              <p className="title_p">
                <b>
                  {" "}
                  Major Disruptions Expected in the International Business &amp;
                  Economics Environment in 2024
                </b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Prof. Markus Leonhard Keiper, Marketing Professor, NUS Business
                School, Singapore and Serial-Entrepreneur &amp; Author
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                29-Feb-24
              </p>
              <br />
              <br />
              <p>
                <img
                  src="/media/G-I/9.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>IMT Hyderabad, 29th Feb 2024:</b> Institute of Management
                Technology (IMT), Hyderabad had the distinct privilege of
                hosting <b>Prof. Markus Leonhard Keiper,</b> Marketing
                Professor, Executive Education and Program Director - NUS
                Business School, Singapore, as the distinguished speaker for its
                Global Immersion Program (GIP) session held on 29th February
                2024. The session centered on the discussion of{" "}
                <b>
                  "Major Disruptions Expected in the International Business and
                  Economics Environment in 2024."
                </b>{" "}
                Prof. (Dr.) Nitin Gupta, Chairperson - International Relations,
                IMT Hyderabad, welcomed the speaker, after which Mahak
                Shyamsukha, a first-year PGDM student, briefly introduced the
                distinguished speaker to the audience.
              </p>
              <p>
                Prof. Keiper's address revolved around the profound
                transformations expected to shape the global business and
                economic landscape in 2024. With insightful deliberation, he
                highlighted several key disruptors across various domains and
                meticulously explained their potential impacts on businesses
                worldwide and the broader economic environment.
              </p>
              <p>
                Addressing the geopolitical landscape, the speaker underscored
                the ongoing Russia-Ukraine conflict and its implications
                alongside the evolving dynamics between major powers like the
                United States and China. He elucidated the far-reaching impacts
                of these geopolitical tensions on businesses.
              </p>
              <p>
                Delving into the realm of consumers, Prof. Keiper emphasized the
                era of hyper-personalization and its impact on marketing
                strategies. He discussed the role of generative AI in reshaping
                education and elaborated on the three main categories of
                personalization and their significance in contemporary markets.
              </p>
              <p>
                Transitioning to the context of social dynamics, Prof. Keiper
                shed light on the influence of social media on consumer purchase
                decisions, highlighting platforms such as TikTok, which are
                revolutionizing live shopping experiences and personalized
                advertisement. Furthermore, he focused on technological
                advancements and their rapid evolution, offering insights into
                market opportunities and the transformative potential of
                generative AI. Prof. Keiper also touched upon critical issues of
                environmental sustainability, underscoring the urgent need to
                address climate change in the face of global challenges.
              </p>
              <p>
                The session culminated with an engaging Q&amp;A round, where
                students posed thought-provoking questions, contributing to the
                depth of discussion. Prof. Nitin Gupta thanked Prof. Markus
                Keiper for his invaluable insights and profound contribution to
                the session.
              </p>
              <p>
                After the session came to a close, students expressed their deep
                gratitude and conveyed their appreciation to the speaker for
                delivering such an illuminating discourse.
              </p>
              <br />
              <p className="title_p">
                <b> The changing nature of healthcare markets</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Prof. Nicola Mountford, Associate Professor and PhD Director,
                Maynooth University, Ireland
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                05-Mar-24
              </p>
              <br />
              <br />
              <p>
                <img
                  src="/media/G-I/10.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>IMT Hyderabad, 05th March 2024:</b> Institute of Management
                Technology (IMT), Hyderabad, hosted its third session of the
                Global Immersion program with <b>Prof. Nicola Mountford,</b>{" "}
                Associate Professor and Ph.D. Director, Maynooth University,
                Ireland, as the keynote speaker who enthusiastically engaged the
                audience in a discussion on{" "}
                <b>"The changing nature of healthcare markets."</b> Prof. (Dr.)
                Nitin Gupta, Chairperson - International Relations of IMT
                Hyderabad, welcomed the speaker, after which Mohan Garje, a
                first-year PGDM student, briefly introduced the distinguished
                speaker to the audience.
              </p>
              <p>
                Prof. Mountford's address revolved around four topics:
                technology in healthcare, technology in markets, market
                networks, and how these three gel together in the changing
                nature of health markets.
              </p>
              <p>
                She started with how technology is used in healthcare and
                explained terms such as e-health, telemedicine, digital health,
                etc. She talked about the importance of e-health in the market,
                highlighting that the budget for the healthcare sector has seen
                a remarkable increase, particularly post-COVID-19. In 2020, it
                amounted to 69.5 billion USD, with expectations to reach 193.8
                billion USD by 2025. Then, she moved to troubles in the
                healthcare system and discussed the situations in Ireland and
                Europe. She underscored that there can be significant issues in
                India in the next 30 years, with birth rates dropping and other
                issues prevailing in the Indian market. Prof. Mountford
                emphasized the government’s role, pointing out that the
                government is taking initiatives to keep the situation in check.
              </p>
              <p>
                She discussed technology and markets, as well as how markets
                work differently everywhere by sharing practical examples.
                Additionally, she provided insights into emerging markets. She
                also spoke about how product-based transactions are moving to
                solution-based transactions. With this, the difference between
                traditional and complex emerging markets was explained. She then
                discussed a case about Haemophilia product selection, in which
                she talked about normative objectives and innovation in
                procurement processes.
              </p>
              <p>
                Explaining how healthcare, technology, and markets go together,
                Prof. Mountford talked about her research in this field. She
                enlightened students about the CH ecosystem, which has
                components like industry developers, end users, payers, and
                others. She wrapped the discussion with a question, "What is
                more important, to make money or to save lives?".
              </p>
              <p>
                Towards the end of the session, an exciting Q&amp;A round added
                depth to the subject. Prof. Nitin Gupta thanked Prof. Nicola
                Mountford for her crucial observations and significant
                contribution to the discussion.
              </p>
              <p>
                Following the conclusion of the session, the students expressed
                their sincere gratitude and thanked the speaker for such an
                insightful talk.
              </p>
              <br />
              <p className="title_p">
                <b>
                  {" "}
                  The Global Economic War of the 21st century and India's role
                  in it
                </b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Prof. Antonia Colibasanu, Senior Analyst, Geopolitical Futures,
                US and Lecturer, Scoala Nationala de Studii Politice si
                Administrative, Romania
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                06-Mar-24
              </p>
              <br />
              <br />
              <p>
                <img
                  src="/media/G-I/11.png"
                  alt="GIP24"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>IMT Hyderabad, 06th March 2024:</b> Institute of Management
                Technology (IMT), Hyderabad, on 06th March 2024, organized its
                fourth session of the Global Immersion Program (GIP). The guest
                speaker for the session was <b>Prof. Antonia Colibasanu,</b>{" "}
                Senior Geopolitical Analyst at Geopolitical Futures and a Senior
                Fellow for the Eurasia Program at the Foreign Policy Research
                Institute. She has authored numerous publications on the
                subjects of geopolitics and geoeconomics, including notable
                works such as “Geopolitics, Geoeconomics, and Borderlands: A
                Study of a Changing Eurasia and Its Implications for Europe” and
                “Contemporary Geopolitics and Geoeconomics.” The session aimed
                to enlighten students on the topic –
                <b>
                  {" "}
                  “The Global Economic War of the 21st Century and India’s Role
                  in it”
                </b>
                .Prof. (Dr.) Nitin Gupta, Chairperson – International Relations,
                IMT Hyderabad, welcomed the speaker, after which Mohan Garje, a
                first-year PGDM student, formally introduced the speaker to the
                students.
              </p>
              <p>
                The session commenced with Prof. Antonia providing an overview
                of geopolitics and its three major dimensions: economics,
                conflict, and politics. She illustrated how the Global Military
                War translates into the Global Economic War, using the
                Russia-Ukraine conflict as an example. She emphasized the
                significance of using maps to comprehend the interplay of
                geography, economics, and politics. Furthermore, she advocated
                using globe-based maps rather than flat representations,
                stating, “We do not live on a flat earth.”
              </p>
              <p>
                Prof. Antonia underscored that while understanding the role of
                geopolitics in trade, it is important to understand how a
                society develops within the geographical topographies,
                explaining how humans living in plains differ from those living
                in mountains. By quoting that we live in a non-static reality,
                she highlighted the importance of continuously analysing our
                nation’s state in terms of four key factors: our ability to
                control outbound investment, our influence over commodity and
                energy flows, the positive perception on market features and
                centrality of the global financial system. These factors
                collectively provide insights into the stability of a nation's
                position within the global economy.
              </p>
              <p>
                The speaker explicitly articulated that the core concept in both
                geopolitics and geoeconomics is centered around how a country
                holds power and expands its influence through strategic
                relationships with other nations. She elaborated on this matter
                by pointing out how resource management and infrastructure
                development contribute to this power consolidation. Prof.
                Antonia also discussed geopolitical problems such as income
                inequality which exists in both developed as well as developing
                countries, trade wars, and supply chain shocks, emphasizing the
                importance of managing stocks by citing the need for food and
                pharmaceutical stocks during the pandemic, COVID-19.
              </p>
              <p>
                The conversation then focused on India and its borderland
                challenges, particularly concerning China and the Middle-Eastern
                neighbours. The speaker mentioned that though India is playing
                smart in handling geopolitical situations, it still needs to
                focus on critical infrastructures like education and health.
              </p>
              <p>
                Prof. Antonia concluded her address with a thought-provoking
                quote, reminding us that geopolitical situa-tions give us a
                lesson to never be afraid of fears because they often catalyze
                change, and innovation flourish-es amidst crises. The session
                further proceeded to a Q&amp;A round where students actively
                posed their doubts. Upon the successful conclusion, Prof. (Dr.)
                Nitin Gupta and the students expressed their heartfelt gratitude
                and thanked Prof. Antonia Colibasanu for delivering such an
                enlightening discourse.
              </p>
              <br />
              <p className="title_p">
                <b>
                  {" "}
                  Quantum computing, facts, myths and expected impact on the
                  world
                </b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Mr. Georges Le Nigen, Business Developement Lead, Qperfect,
                France
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                07-Mar-24
              </p>
              <br />
              <br />
              <p>
                <img
                  src="/media/G-I/12.png"
                  alt="GIP24"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>IMT Hyderabad, 07th March 2024:</b> Institute of Management
                Technology (IMT), Hyderabad, on 07th March 2024, organized its
                fifth session of the Global Immersion Program (GIP). The session
                on{" "}
                <b>
                  “Quantum computing, facts, myths and expected impact on the
                  world”
                </b>{" "}
                was led by <b>Mr. Georges Le Nigen,</b> the Chief Business
                Development Officer at QPerfect. With over 3 continents under
                his belt (Europe, the US, and Asia Pacific), he holds 3 decades
                of experience in growing businesses. He has played a key role in
                several billion-dollar tech and SAAS companies, including
                TraceOne, Retail Solutions, SGS, and D-Wave. He currently
                focuses on building and deploying high-fidelity quantum
                computing simulation tools at QPerfect. Following Prof. (Dr.)
                Nitin Gupta’s, Chairperson – International Relations, IMT
                Hyderabad, welcoming remarks, Sayak Dutta, a first-year PGDM
                student, formally introduced the speaker to the students.
              </p>
              <p>
                The session commenced with Mr. Georges Le Nigen talking about
                what quantum computing is. He briefly touched upon the quantum
                revolutions: the first quantum revolution, which provided the
                ability to manipulate groups of quantum particles, and the
                second quantum revolution, which introduced the ability to
                manipulate groups of atoms very precisely. He also spoke about
                how the field of quantum computing, while not very impressive in
                its current state, is only just beginning to boom. Pointing to
                the surge in government funding, he emphasized the growing
                interest of government in this field.
              </p>
              <p>
                The speaker discussed the difference between classical computing
                and quantum computing, highlighting one of the main differences
                that classical computing consists of many transistors that are
                binary in nature whereas quantum computing consists of qubits
                that can represent multiple values simultaneously. While quantum
                computing is much more complex and gives us multiple possible
                outputs, Mr. Georges stressed upon the fact that there are no
                pure quantum computers and emphasized that quantum computers
                will always need a classical computer by their side, even in the
                future.
              </p>
              <p>
                Mr. Georges addressed some of the common misconceptions and
                dispelled the myths surrounding quantum computing. He reminded
                students that while quantum computing technology shows promise,
                it is still in its early stages and cannot currently be relied
                upon as a solution for all problems, as some may believe. He
                then shed light on the tremendous speed at which the market for
                quantum computing is growing and the various companies and
                governments who have started to invest in it and try to find
                solutions for quantum computing.
              </p>
              <p>
                Mr. Georges highlighted how quantum computing can offer
                significant value to society through simulation and
                optimization. He concluded the session by discussing the
                potential impact of quantum computing on job creation and future
                cryptographic risks. Mr. Georges emphasized his dedication,
                along with others, to making quantum computing accessible to the
                public. He believes that the widespread availability is
                essential for technology to move beyond research labs and have a
                real-world impact.
              </p>
              <p>
                The session culminated with a Q&amp;A session, during which the
                students actively posed their queries. Prof. (Dr.) Nitin Gupta
                thanked Mr. Georges Le Nigen for opening the audience’s eyes to
                the many new spheres that quantum computing will bring in the
                future.
              </p>
              <br />
              <p className="title_p">
                <b> Conflict Management Across Cultures</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Ms. Klarese Donnelly, UC Berkeley Executive Education, United
                States
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                14-Mar-24
              </p>
              <br />
              <br />
              <p>
                <img
                  src="/media/G-I/13.png"
                  alt="GIP24"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>IMT Hyderabad, 14th March 2024:</b> Institute of Management
                Technology (IMT), Hyderabad, on 14th March 2024, organized its
                sixth session of the Global Immersion Program (GIP). The session
                on <b>"Conflict Management Across Cultures"</b> was led by{" "}
                <b>Ms. Klarese Donnelly,</b> UC Berkeley Executive Education,
                United States. Ms. Klarese Donnelly excels in global program
                delivery and is skilled in project management, process
                improvement, stakeholder relations, and strategic implementation
                for impactful student outcomes. Following Prof. (Dr.) Nitin
                Gupta, Chairperson – International Relations, IMT Hyderabad,
                welcoming remarks, Mohan Garje, a first-year PGDM student,
                formally introduced the speaker to the students.
              </p>
              <p>
                Ms Donnelly shed light on the complex subtleties of cultural
                diversity and how it affects international busi-ness situations.
                She enthralled the audience by digging into the importance of
                cultural understanding, noting differences in cultural norms
                between areas such as India, the United States, and Europe. She
                broke down culture into six key components: presence,
                appearance, language, values, identity, and tone.
              </p>
              <p>
                The speaker stressed the relevance of cultural preferences in
                personal relationships, using examples such as personal space,
                touch, eye contact, gestures, and punctuality. She explained how
                these factors vary by cul-ture, such as the importance of eye
                contact in the United States. In addition, she explained the
                impact of looks and language in various corporate situations,
                distinguishing between direct and indirect communication methods
                and their consequences.
              </p>
              <p>
                Ms. Donnelly led students in an engaging conversation about
                values, using Hofstede's Cultural Dimensions to depict ideas
                such as power distance, individualism, and collectivism. She
                also discussed the intricacies of identification at the national
                and subcultural levels, warning against preconceptions and
                misconceptions.
              </p>
              <p>
                The session concluded with insights into the modern-day
                workforce and India's burgeoning economy. A lively Q&amp;A
                session allowed students to delve deeper into cultural nuances,
                further enriching their under-standing.
              </p>
              <p>
                Prof. Nitin Gupta expressed gratitude to Ms. Klarese Donnelly
                for her invaluable insights, underscoring the institute's
                commitment to foster global perspectives. The session ended with
                a vote of thanks, leaving partic-ipants inspired and
                enlightened.
              </p>
              <br />
            </div>
          </div>
          {/* 2022-23 */}
          <div className="tab-content container-sm mb-4">
            <div
              className="tab-pane fade bg-white p-4 rounded-4 "
              id="tab-menu3"
              role="tabpanel"
            >
              <p className="title_p">
                <b>Understanding the Global Consumer</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Mr. David Avrin, Customer Experience Keynote Speaker and
                Consultant
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                15-Feb-23
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/14.jpeg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 15th February 2023:</b> Institute of Management
                Technology (IMT), Hyderabad, hosted its 3rd edition of the
                Global Immersion Program (GIP) on 15th February 2023. Mr. David
                Avrin, Customer Experience Keynote Speaker, Consultant &amp;
                Author, served as the session's first eminent speaker. This
                session aimed to expose students to global issues affecting the
                business world and have an appreciation of the diversity of
                thought and perspectives while managing and leading
                organizations. Prof. (Dr.) Nitin Gupta, Professor, IMT
                Hyderabad, presented the inaugural address by welcoming the
                speaker &amp; the participants.
              </p>
              <p>
                The Speaker delivered a session on "Understanding the Global
                Consumer." The discussion is intended to be aligned with the
                understanding of the diverse cultures, values, and attitudes
                that exist across the world, and understanding the global
                consumer requires a commitment to ongoing research, cultural
                sensitivity, and a willingness to adapt to changing trends and
                consumer preferences.
              </p>
              <p>
                The speaker opened his address with an anecdote and discussed
                the widening variety of goods that consumers can purchase with
                their money. He opined that this is due to changes in the world
                and has transformed the behavior of consumers worldwide. Further
                supporting his point, he introduced Maslow's hierarchy of needs
                and wants and emphasized the business opportunities present at
                each level. He talked about a sizable shift from selling to
                buying, attributed to consumers having more options and power
                over their purchases. Overall, the speaker made the case that
                there are many options available to consumers worldwide, much
                like a grocery store.
              </p>
              <p>
                He covered changes in Dubai's business environment, pointing out
                a move away from conventional shopping to a focus on the whole
                customer experience. He emphasized the significance of excellent
                business practices for success and suggested that businesses
                must adapt to these changes or risk becoming obsolete. Speaking
                about virtual platforms as a potent and necessary tool for a
                touchless future, the speaker stressed their importance for
                business owners.
              </p>
              <p>
                Mr. Avrin used a passage from Roger Dooley's book "Friction" to
                highlight the fundamental marketing tenet that adding complexity
                reduces engagement while making something simple increases it.
                The speaker further mentioned rising customer expectations for
                how goods and services will be delivered, with convenience
                playing a crucial role. Highlighting the importance of
                convenience as a current deciding factor in purchases and spoke
                about the emergence of disruptors who are developing new goods
                and services that may not always be beneficial to society.
              </p>
              <p>
                After such an insightful session on understanding the global
                consumer, Mr. David concluded the event with a
                question-and-answer session to resolve the students' piqued
                curiosity.
              </p>
              <br />
              <p className="title_p">
                <b>
                  Living and Working Across Cultures: Challenges and
                  Opportunities- A cross-cultural and linguistic journey.
                </b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Prof. Elizabeth Ascherl, Head of Intercultural Communication,
                ICN Business School, France
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                21-Feb-23
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/15.jpeg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 21st February 2023:</b> Institute of Management
                Technology (IMT), Hyderabad, witnessed the second session of the
                Global Immersion Program (GIP) on 21st February 2023. Prof.
                Elizabeth Ascherl, Head of Intercultural Communication, ICN
                Business School, France, was the distinguished speaker for this
                session. She is a multifaceted expert in education and learning,
                with experience as a trainer, business developer, and team
                manager. This session focused on exposing students to the
                challenges and opportunities of living and working across
                various cultures. Prof. (Dr.) Nitin Gupta, Professor, IMT
                Hyderabad, enunciated the participants about global practices
                worldwide and warmly welcomed our guest speaker for the evening.
              </p>
              <p>
                The speaker delivered the session on “Living and Working Across
                Cultures: Challenges and Opportunities- A cross-cultural and
                linguistic journey.” The discussion was intended to make the
                participants aware about cross-cultural communication, the perks
                of learning a new language while moving to a different country,
                and how it would help them in their personal and corporate
                lives. She also intended to familiarize the students with all
                the opportunities they would grasp if they desired to move
                abroad shortly.
              </p>
              <p>
                She commenced her session by asking the participants about their
                plans to settle in another country. This was followed by asking
                the students about the countries they would like to move to. Our
                speaker shared a couple of country mapping tools wherein our
                participants got to analyze how our country differed from other
                countries based on eight different cultural variations. The
                countries were distinguished on various parameters like the
                essential communication, evaluation, leading, decision, trust
                factors, disagreeableness, scheduling, and persuasion.
              </p>
              <p>
                Going ahead, she spoke about how even though we might speak the
                same language, the inferred meaning would differ for different
                cultures. She guided the students through various ways to learn
                new languages and, thus, be more accepting of different cultures
                and societies. Finally, she articulated the opportunities and
                advantages of learning a new language and living in a foreign
                country.
              </p>
              <p>
                The session concluded with a very interactive
                question-and-answer session where Prof. Elizabeth Ascherl
                resolved students’ curiosity. It was followed by a vote of
                thanks for such an insightful session.
              </p>
              <br />
              <p className="title_p">
                <b>Cultural Norms and Social Practices in France.</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Prof. Catherine Le Floach, Lecturer, Audencia Business School,
                France
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                23-Feb-23
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/16.jpeg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 23rd February 2023:</b> Institute of Management
                Technology (IMT) Hyderabad, on February 23, 2023, organized the
                third session of the Global Immersion Program (GIP). The guest
                speaker for the session was Prof. Catherine Le Floach, Lecturer,
                Audencia Business School, France. The session centered on the
                cultural practices unique to France and how they distinguish the
                country from others. Prof. (Dr.) Nitin Gupta, Professor at IMT
                Hyderabad, delivered the opening remarks by warmly welcoming the
                speaker and attendees.
              </p>
              <p>
                The speaker’s session was focused on "Cultural Norms and Social
                Practices in France." The objective was to educate the attendees
                about the shared values, beliefs, and behaviors that
                characterize France's culture and identity. The speaker aimed to
                inform the participants about how French cultural norms and
                social practices reflect a multifaceted and varied heritage that
                significantly shapes the country's identity and global
                influence.
              </p>
              <p>
                At the start of her session, Prof. Catherine inquired who among
                the attendees had travelled to or planned to travel to France
                and asked students about their expectations from the session.
                She emphasized that the French people take pride in their
                language and culture. Furthermore, she stressed that Paris is
                the gateway to France and cautioned against assuming that
                everyone in France speaks English. She also explained how
                strikes operate in France and how the French people are vocal
                about their rights. Another important point she made was that
                restaurants in France have specific opening times and are not
                open 24/7. Lastly, she elaborated on French gestures and their
                significance.
              </p>
              <p>
                During her session, Prof. Catherine delved into managing a
                French team in an office setting. She first emphasized the
                importance of coffee breaks for socializing and connecting with
                colleagues rather than discussing work. The second key takeaway
                was that meetings in France primarily focused on discussing
                goals rather than making decisions. Another crucial aspect she
                highlighted was the mandatory lunch break, during which work is
                not conducted. In addition, she also mentioned that being a
                little late is considered reasonably acceptable in French
                culture and explained the difference in working hours between
                the administrative and private sectors in France. The following
                point she elaborated on was about salary, which is considered
                personal information and should not be discussed publicly or
                asked of others. Lastly, she explained that cheek kissing is a
                familiar greeting gesture in France.
              </p>
              <p>
                The session’s conclusion included an interactive
                question-and-answer segment where Prof. Catherine Le Floach
                addressed the students' queries about France and its culture.
                Subsequently, a gesture of appreciation was extended for the
                valuable and informative session.
              </p>
              <br />
              <p className="title_p">
                <b>Neuromarketing</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Prof. Swee Hoon Ang, Associate Professor – at NUS B-School in
                Singapore
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                01-Mar-23
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/17.jpeg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 01st March 2023:</b> Institute of Management
                Technology (IMT) Hyderabad, on March 01, 2023, organized its
                fourth session of the Global Immersion Program (GIP). The guest
                speaker for the session was Prof. Swee Hoon Ang, Associate
                Professor – at NUS B-School in Singapore. She has written
                several leading marketing textbooks with Philip Kotler for Asia,
                Australia, and New Zealand. The session centered around the
                different cognitive strategies used by marketers. The opening
                address was delivered by Prof. (Dr.) Nitin Gupta, Professor, IMT
                Hyderabad, who extended a warm welcome to the speaker and
                participants.
              </p>
              <p>
                The speaker's session on "Neuromarketing" was aimed at educating
                attendees on how neuroscience and cognitive science can be
                applied to marketing to influence people's preferences. The
                objective was to provide insights into the strategies used to
                draw customers' attention, such as measuring pupil movement,
                physiology, and other biological responses. Professor Ang
                discussed how these strategies could be used to understand the
                response of people's brains to various marketing stimuli and how
                this information can be used to design more effective marketing
                campaigns.
              </p>
              <p>
                The speaker began her session by asking the attendees why they
                drink Coke, a popular soft drink brand. She then introduced the
                Pepsi-Coke challenge example, where consumers were blindfolded
                and given both drinks to identify which one they preferred. The
                speaker used this example to explain how brand experience can
                influence consumer behaviour. She highlighted that the
                experience of drinking Coke, including its packaging,
                advertising, and overall brand image, affects consumer
                preferences more than the drink's taste.
              </p>
              <p>
                The speaker proceeded by comparing traditional marketing methods
                with neuroscience-based approaches, where traditional methods
                focus on understanding the "why" behind consumer behaviour,
                while neuroscience emphasizes on "what" aspect of behaviour. She
                also discussed the importance of emotional and metaphoric
                advertisements over purely functional ones, leading to higher
                brand recognition and recall. The speaker also talked about
                sensory neuromarketing and how it utilizes techniques such as
                eye gazing to understand consumer behaviour. She mentioned that
                scent could enhance attention and recall, even if it is
                different from the advertised product.
              </p>
              <p>
                The speaker delved into the influence of colors on consumer
                behaviour and emotions, citing the color emotion guide as a
                valuable tool for eliciting particular emotional responses with
                different hues. An example of the IMT logo was given, where the
                colors chosen symbolize specific values. Additionally, the
                speaker touched on the concept of decision paralysis, where an
                overwhelming number of choices can result in poor or no
                decisions. To address this issue, marketers can take advantage
                of consumers' decision paralysis by limiting choices and
                presenting options clearly and concisely to simplify
                decision-making.
              </p>
              <p>
                The end of the session featured a brief question-and-answer
                portion where Prof. Swee Hoon Ang responded to the students'
                inquiries regarding Neuromarketing strategies. Following that, a
                token of gratitude was expressed to acknowledge the session's
                significance and educational value.
              </p>
              <br />
              <p className="title_p">
                <b>Commercial Real Estate in Germany</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Dr. Daniel Hofmann, Financial Director, Krieger Gruppe, Germany
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                02-Mar-23
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/18.jpeg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 02nd March 2023:</b> The Institute of Management
                Technology (IMT) Hyderabad, on March 02, 2023, organized its
                fifth session of the Global Immersion Program (GIP). The guest
                speaker for the session was Dr. Daniel Hofmann, Financial
                Director, Krieger Gruppe, Germany. The speaker has experience
                handling over five shopping malls in Germany and many more
                multi-tenant projects. The session focussed on commercial real
                estate in Germany.
              </p>
              <p>
                Dr. Hofmann defined commercial real estate as a business unit
                that generates regular cashflows. He also mentioned some key
                players in the commercial real estate sector, such as investors,
                property managers, developers, brokers, and bankers. The impact
                of global events such as Covid – 19 and Russia Ukraine conflict
                was also discussed. The speaker shed light on how the
                Russia-Ukraine conflict has significantly impacted the German
                real estate industry since Germany primarily depended on Russia
                for its energy requirements. Since the start of the conflict, it
                has seen a considerable spike in energy prices.
              </p>
              <p>
                During the conversation on the business aspect of the real
                estate industry, Dr. Hofmann highlighted the essential factors
                for a booming shopping mall, including location, accessibility,
                and a steady flow of foot traffic. He emphasized the
                significance of having a diverse range of shops and vacancy rate
                in a mall. Additionally, he discussed the importance of customer
                satisfaction when visiting a mall and the strategic placement of
                stores. He also explained how malls could assist businesses in
                promoting their products through a range of marketing
                techniques.
              </p>
              <p>
                Speaking about the finances of running a mall, Dr. Hofmann gave
                insights on various cash inflows and outflows, with some of the
                significant cash inflows including cold rents, maintenance and
                utility instalments, management charges, and marketing
                contributions. Significant outflows included utilities,
                maintenance, marketing, and staff personnel. Various contract
                terms were also discussed, most of them with annual revenue
                calculations. Typical contract terms such as protection against
                competition, rent-free period, and indexation were also
                mentioned.
              </p>
              <p>
                While concluding the session, Dr. Hofmann shared some
                significant learnings. He suggested that the students understand
                and scrutinize the matter at every possible level, keeping
                options open and building opportunities on related topics.
                Subsequently, a gesture of appreciation was extended for the
                valuable and informative session.
              </p>
              <br />
              <p className="title_p">
                <b>The American Style of Business</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Mr. David Moyer, Public Affairs Officer at the U.S. Consulate in
                Hyderabad
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                09-Mar-23
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/19.jpeg"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                <b>Hyderabad, 09 March 2023:</b> The Institute of Management
                Technology (IMT) Hyderabad conducted its sixth session of the
                Global Immersion Program (GIP) on the campus. The session's
                distinguished speaker was Mr. David Moyer, Public Affairs
                Officer at the U.S. Consulate in Hyderabad. Mr. Moyer had joined
                the U.S. State Department in 2003 and brought a wealth of
                experience with him from his time-spent working abroad and as
                the deputy director of the U.N. Political Affairs office. Prof.
                (Dr.) Nitin Gupta, Professor at IMT Hyderabad, presented the
                inaugural address by welcoming the speaker &amp; the attendees.
              </p>
              <p>
                The speaker’s session on “The American Style of Business” was
                focused on elucidating the customary work culture and business
                norms prevalent in the United States and how they differ from
                those in India. He compared and contrasted the working cultures
                of both countries, underscoring the more informal nature of
                American business practices. Mr. Moyer discussed the variations
                in behaviour and customs among different regions of the United
                States. For instance, he pointed out the differences in the way
                people greet each other on the East and West coasts. He
                highlighted the importance of maintaining personal space and
                refraining from unnecessary physical contact, which are regarded
                as crucial etiquettes in the US.
              </p>
              <p>
                He underscored the importance of two key values in American work
                culture: punctuality and achieving a work-life balance. He
                emphasized the importance of punctuality, and arriving on time
                to meetings and appointments is regarded as a hallmark of
                professionalism and respect for others' time.
              </p>
              <p>
                Furthermore, he provided insights into the communication
                practices that are typically observed during meetings in the US.
                He noted that meetings in the US are characterized by direct and
                concise communication, with an emphasis on efficiency. However,
                criticism is often communicated indirectly to avoid causing
                offense or discomfort.
              </p>
              <p>
                Mr. Moyer pointed out the importance of upholding a respectful
                and professional environment in meetings by steering clear of
                sensitive subjects like politics, religion, and age. He also
                mentioned the importance of preparing an agenda in advance and
                taking notes during meetings to ensure productive and
                well-structured discussions that stay on course and serve as a
                record of what was discussed and decided.
              </p>
              <p>
                After such an insightful session on understanding the American
                work culture and business practices, Mr. Moyer concluded the
                event with a question-and-answer session to resolve the
                students' piqued curiosity.
              </p>
            </div>
          </div>
          {/* 2021-22 */}
          <div className="tab-content container-sm mb-4">
            <div
              className="tab-pane fade bg-white p-4 rounded-4 "
              id="tab-menu4"
              role="tabpanel"
            >
              <p>
                <img
                  src="/media/G-I/20.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <p>
                The 2nd edition of “Global Immersion Program” is planned between
                9th February- 16th March 2022. This program aims to expose our
                students, to global issues affecting the business world and
                appreciate diverse cultures, ideas, governance, values, and
                business practices. Such exposure leads to an appreciation of
                the diversity of thought and perspectives while managing and
                leading organizations.
              </p>
              <p>
                The broad objectives of this program is to make our students
                aware of:
              </p>
              <div className="crs_list">
                <ul>
                  <li>Emerging global issues impacting businesses</li>
                  <li>Understand global and local business practices</li>
                  <li>
                    Appreciate different cultures, social norms, ideas, arts,
                    and cuisine
                  </li>
                </ul>
              </div>
              <div class="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Topic</th>
                    <th>Speaker</th>
                    <th>Timing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>09.02.2022</td>
                    <td>Doing Business in a foreign country</td>
                    <td>
                      Professor Kongkiti Phusavat, Kasetsart University,
                      Bangkok, THAILAND
                    </td>
                    <td>12 pm- Thailand | 10.30 am – IST</td>
                  </tr>
                  <tr>
                    <td>09.02.2022</td>
                    <td>Cultural norms and social practices (France)</td>
                    <td>
                      Catherine Le Floach, Lecturer at Audencia Business School,
                      France
                    </td>
                    <td>(Tentative) 11 am- France | 3.30 pm – IST</td>
                  </tr>
                  <tr>
                    <td>16.02.2022</td>
                    <td>
                      Innovation in emerging economies, Are they innovative?
                    </td>
                    <td>Prof. Sudhanshu Rai, Copenhagen Business School</td>
                    <td>10 am -Denmark | 2.30 pm -IST</td>
                  </tr>
                  <tr>
                    <td>02.03.2022</td>
                    <td>Digital Transformation in a Post-Covid World</td>
                    <td>
                      Professor Renato Pereira , Iscte Business School. Portugal
                    </td>
                    <td>10:00 am -Portugal | 3:30 pm IST</td>
                  </tr>
                  <tr>
                    <td>09.03.2022</td>
                    <td>
                      Heartfulness and Personal Leadership lessons and
                      transformative journey
                    </td>
                    <td>Vandana Naran and Mayra Báez (Heartfulness)</td>
                    <td>04:00 pm -IST</td>
                  </tr>
                  <tr>
                    <td>16.03.2022</td>
                    <td>The American Style of Business</td>
                    <td>
                      Mr. David Moyer, Public Affairs Officer at the U.S.
                      Consulate in Hyderabad
                    </td>
                    <td>10:30 am -IST</td>
                  </tr>
                  <tr>
                    <td>16.03.2022</td>
                    <td>Cross-culture management</td>
                    <td>
                      Professor Mielly Michelle, Grenoble Ecole de Management
                      (France)
                    </td>
                    <td>10:00 am -France | 2:30 pm IST</td>
                  </tr>
                  <tr>
                    <td>16.03.2022</td>
                    <td>Global capital markets</td>
                    <td>Prof. Ata Assaf , University of Balamand</td>
                    <td>1:00 pm -Lebanon | 4.30 pm -IST</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <p className="title_p">
                <b>Doing Business in a foreign country</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Professor Kongkiti Phusavat, Kasetsart University, Bangkok,
                THAILAND
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                09-Feb-22
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/21.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                Institute of Management Technology (IMT), Hyderabad organized
                the second edition of 'Global Immersion Program' (GIP)
                commencing on the 9th of February 2022. The month-long program
                aims at the fundamental objective of exposing the B-school
                candidates to various societies, thoughts, and administrations
                across the globe.
              </p>
              <p>
                The event commenced with a welcome address by Prof. (Dr.) Manoj
                Das, Chairperson - International Relations Committee (IRC) of
                IMT Hyderabad. He introduced the audience to the speaker of the
                inaugural session of GIP 2021–23, Prof. Kongkiti Phusavat,
                Professor -Department of Industrial Engineering and Management,
                Oulu University, Finland. He also articulated the important
                worldwide issues influencing the business world and various
                values and strategic approaches that would bring about
                enthusiasm in the students towards differentiated thoughts and
                points of view in their process of driving associations.
              </p>
              <p>
                The event included an official address by Prof. (Dr.) Venkata
                Chakrapani C, Dean (Academics), wherein he introduced the first
                speaker for the day, Prof. Kongkiti Phusavat. This followed a
                comprehensive prologue of Prof. Phusavat narrated by Ms.
                Srividya Racharla, a PGDM first-year student.
              </p>
              <p>
                The speaker delivered a session on "Doing business in the
                foreign country." The discussion intended to be aligned with his
                associations with the World Bank Group on the "Ease of Doing
                Business." He iterated that such policy-making decisions endowed
                trust. He also exemplified that the research added to be a
                significant apparatus for the private area, common society, the
                scholarly world, columnists, and others, expanding comprehension
                of worldwide issues.
              </p>
              <p>
                He emphasized the significance of Ease of Doing Business, which
                included featuring the elements of governance for small and
                medium-sized firms in regular routines along with giving
                essential and adequate insights to the public authority for
                planning a sound business organizational strategy. He further
                pointed out the particular procedure of the Ease of Doing
                Business that encompasses a total of five significant stages,
                right from starting a business to arriving at the phase of
                working in a safe business climate.
              </p>
              <p>
                Prof. Phusavat examined the orders and authorizations during the
                pandemic that prompted a disintegrating decrease in the public
                trust towards the public authority in different nations
                everywhere. He additionally acknowledged India's rise in the
                'World Bank's Ease of Doing Business Ranking 2020' from 77th
                rank in 2019 to 63rd rank in 2020. The speaker shared his
                perspectives on the profoundly disruptive environment resulting
                from the pandemic and iterated on the disturbance caused in the
                entire supply chain. The conversation further consolidated the
                intricacies looked by nations towards the investment and
                relocation decisions and geopolitical risks coming sooner rather
                than later. The event came to a close with a back-and-forth
                discussion among the students, the Professors, and the Guest
                Speaker. It was trailed by a statement of gratitude to the
                speaker for an enriching session.
              </p>
              <br />
              <p className="title_p">
                <b>Cultural norms and social practices (France)</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Catherine Le Floach, Lecturer at Audencia Business School,
                France
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                09-Feb-22
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/22.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                Institute of Management Technology (IMT), Hyderabad organized
                the second session of the Global Immersion Program (GIP) on the
                9th of February 2022 on the topic “Cultural norms and Social
                Practices in France.” The session was addressed by Prof.
                Catherine Le Floach, Professor - Audencia Business School,
                France. She briefly covered the various cultural norms being
                followed in France and how they make France different from the
                world.
              </p>
              <p>
                The session commenced with Prof. (Dr.) Manoj Das, Assistant
                Professor &amp; Area Chairperson - Marketing, IMT Hyderabad,
                welcoming the speaker and students for the session. It was
                followed by a brief introduction of the speaker by Ananth
                Bharani, a PGDM first-year student. The speaker began by
                understanding the students’ expectations from the session and
                talked about how a tourist must be prepared before visiting
                France. She accentuated that people travelling to France must
                understand basic French for a quick and easy conversation with
                the local population. She elaborated that several local rules
                are also to be learned, such as that the tourists are expected
                to stand on the right side of the escalator in France.
              </p>
              <p>
                Additionally, she stated the presence and commonality of
                numerous protests and strikes in France since, as a part of the
                French culture, complaining about anything is relatively normal,
                and protests and strikes are an eminent part of it. She also
                emphasized the prevalence of nonverbal communication and cues in
                France. She followed it up with a light, fun activity wherein
                the students guessed the words using signs and symbols.
              </p>
              <p>
                Prof. Catherine Le Floach also elaborated on the social
                practices to be followed and kept in mind while joining any
                French team. She explained the significance of coffee breaks as
                a time wherein a person can acquire essential information as the
                whole team comes together for a short interaction. She explained
                that although meetings generally in many cultures are supposed
                to end in a result, in French culture, meetings are believed to
                be for quality discussions, and more often than not, teams do
                not come to conclusions. She also exemplified her experience of
                having cross-cultural teams from different countries across the
                world and explained their leading methods for meetings and
                discussions.
              </p>
              <p>
                Prof. Catherine also mentioned that being a little late is
                considered reasonably acceptable in the French culture and
                highlighted the reality of a 35-hour French workweek with
                several real-life examples. She explained how French culture
                forbids discussing corporate compensation and benefits in public
                and concluded her presentation by elaborating about the social
                securities in France.
              </p>
              <p>
                The session came to a close with a question-and-answer session
                where Prof. Catherine Le Floach resolved the curiosity of
                students through various questions regarding France and its
                culture. It was followed by a vote of thanks for such an
                insightful session.
              </p>
              <br />
              <p className="title_p">
                <b>Innovation in emerging economies, Are they innovative?</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Prof. Sudhanshu Rai, Copenhagen Business School
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                16-Feb-22
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/23.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                Hyderabad, 16th February 2022: Institute of Management
                Technology (IMT), Hyderabad, hosted the third session of the
                Global Immersion Program (GIP) on 16th February 2022. The
                eminent speaker and guest of honor for the session were Prof.
                Sudhanshu Rai, Professor - Copenhagen Business School, who
                discussed "Innovation in emerging economies, Are emerging
                economies innovative?". Prof. (Dr.) Manoj Das, Assistant
                Professor &amp; Area Chairperson - Marketing, IMT Hyderabad,
                presented the inaugural address by welcoming the speaker &amp;
                the participants, after which Sai Supraja Ramraj, a first-year
                PGDM student, briefly introduced the speaker.
              </p>
              <p>
                Elaborating on innovation, the speaker talked and explained
                different myths and facts about it. He briefly discussed how
                innovation is different from invention and how entrepreneurs
                drive innovation in the real world, as opposed to the common
                viewpoint that entrepreneurs are the creators of innovation.
                Additionally, he discussed India's innovation practices that had
                constantly happened for thousands of years even before
                entrepreneurs became a reality, as Indians used to live in a
                closed-knit society and frequently innovated several
                non-industrial products as a group.
              </p>
              <p>
                Further supporting his point, he highlighted the example of
                Elinor Ostrom's theory. He explained that cultures share the
                knowledge and that clusters of industrial activities have been
                in society for thousands of years, innovating for decades. Prof.
                Sudhanshu Rai discussed Schumpeter's theory and the theory of
                material culture along with its flaws. According to him,
                immaterial culture is the science present in us, and it enables
                the entrepreneurs to make material culture. He explained the two
                fundamental approaches to understanding innovation &amp; data,
                the first being the Evolutionary method, which is slow but
                powerful and lasts over time, and the second being the
                Scientific method, which is data-driven, analytically dominated,
                and short-lived. He exemplified that, generally, industries use
                scientific methods; however, Indians have been using
                evolutionary methods for many years. He mentioned that
                innovation is driven by the community in India and is based on
                empirical evidence rather than deductions.
              </p>
              <p>
                In addition, he spoke about India's shift from the traditional
                way of innovation to the industrial way. According to him,
                traditional industries of India are dying due to lack of
                innovation as young innovators prefer to go into new-age
                industries, but this causes problems as many new industries are
                not sustainable.
              </p>
              <p>
                Prof. Sudhanshu summarized the session by defining innovation as
                "a system of thought that has a potential to adapt and adopt
                existing knowledge in the pursuit of novel ideas." He concluded
                by explaining that innovation is not always positive; some
                innovations have a positive impact, while others have a negative
                effect. He reiterated that new innovators must strive to create
                a sustainable environment where traditional knowledge can be
                preserved and applied to modern problems.
              </p>
              <p>
                The session was followed by a brief interactive question and
                answer session between the students, the professors, and the
                guest speaker, after which the students expressed their sincere
                gratitude and thanked the speaker for such an insightful
                session.
              </p>
              <br />
              <p className="title_p">
                <b>Digital Transformation in a Post Covid World</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Prof. Renato Pereira, Professor - ISCTE Business School, Lisbon,
                Portugal
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                02-Mar-22
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/24.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                Hyderabad, 2nd March 2022: Institute of Management Technology
                (IMT), Hyderabad, hosted the fourth session of the Global
                Immersion Program on 2nd March 2022. The speaker for the session
                was Prof. Renato Pereira, Professor - ISCTE Business School,
                Lisbon, Portugal, who discussed the topic "Digital
                Transformation in a Post Covid World." Prof. (Dr.) Manoj Das,
                Assistant Professor &amp; Area Chairperson - Marketing, IMT
                Hyderabad, presented an official welcome address wherein he
                welcomed the speaker and the participants, which was followed by
                a brief introduction of the speaker by Sri Vaishnavi
                Atreyapurapu, a first-year PGDM student.
              </p>
              <p>
                The speaker talked about and explained five key trends. The
                first trend he spoke about included the rise of China and its
                influence on the whole world; since the country has no
                traditional salary increase mechanism; hence it can keep cheap
                labour for disposal. The second trend was the Easy (fake) money
                policy, where he elaborated the fall of currencies by their
                nominal value in terms of purchasing power; oil prices have been
                on the rise for a long time. He mentioned that Bitcoin and
                Crypto have remained in the news constantly; however, this
                technology has a long way to go because of the volatility
                involved in using Bitcoin. He highlighted the two types of
                blockchain and the users of those blockchains. Prof. Pereira
                informed about the formation of the first crypto bank in the US
                and how it facilitated efficient access to crypto trading,
                financing, and other governance services. He then explained the
                relationship between China and Crypto. He also narrated the
                impact of China's renewed crackdown on this currency that cost
                the total digital market around four hundred billion dollars in
                value.
              </p>
              <p>
                Prof. Pereira mentioned that China had released a digital
                version of its currency Yuan, although it is not an official
                cryptocurrency. He informed that El Salvador was the first
                country to accept Bitcoin as the official currency on 7th
                September 2021. The third trend that the speaker talked about
                was Climate Change which has been evolving for the past 50
                years. The speaker also explained Globalisation's reversion as
                the fifth trend and the different international conflicts like
                the US vs. China Trade War, China vs. Hong Kong, and Taiwan.
              </p>
              <p>
                Prof. Pereira explained how Covid-19 had been the most impactful
                global event ever. He talked about the various changes that took
                place after Covid came into existence. The speaker said this
                "new normal" is about increasing digital communication and
                'global' being replaced by 'regional.' He explained the
                importance of AI in developing vaccines. He took names of
                various Indian Fintechs to explain the role that they are
                playing in the GIG market. He then explained what Hype Cycles
                are and how they work in five stages.
              </p>
              <p>
                The session was followed by an interactive question and answer
                session between the students, the professors, and the guest
                speaker. Afterward, the students expressed their sincerest
                gratitude and thanked the speaker for an insightful session
              </p>
              <br />
              <p className="title_p">
                <b>
                  Heartfulness and Personal Leadership Lessons And
                  Transformative Journey
                </b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Ms.Vandana Naran from South Africa and Ms.Mayra Báez from
                Columbia
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                09-Mar-22
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/25.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                Hyderabad, 9th March 2022: Institute of Management Technology
                (IMT), Hyderabad conducted its fifth session of the 'Global
                Immersion Program' (GIP) on 9th March 2022. The session was
                delivered on 'Heartfulness and Personal Leadership lessons and
                transformative journey' by Ms.Vandana Naran and Ms.Mayra Báez.
                Ms. Vandana is a Heartfulness Practitioner and Trainer from
                South Africa who has practiced Heartfulness meditation for over
                ten years. Ms. Mayra Báez, an expert on digital communications
                from Columbia, has pursued a Bachelor's degree in Political
                Science from the National University of Colombia and training
                from Google, the University of Pennsylvania, and Stanford. The
                event included a comprehensive introduction of the speakers
                narrated by Ms. Supraja Ramraj, a PGDM first-year student.
              </p>
              <p>
                Ms. Vandana initiated with exchanging insights about the diverse
                culture of South Africa and the different languages spoken
                there. She emphasized the collaboration of art and creativity
                with cultural diversity and illustrated real-life examples
                describing her involvement and exploration around various facets
                of culture. Furthermore, she explained the importance of
                integration over the balance between personal, professional, and
                social life. Ms. Vandana mentioned that patience and discipline
                are the qualities that play an instrumental role in the
                transformational journey; being courageous to step out of the
                comfort zone and explore new things is of utmost importance as
                it helps individuals face challenges and adversities in life.
                She contemplated on the fact of being calm and compassionate
                while interacting with people over aggression. The speaker
                iterated about the fundamental principles of Heartfulness that
                help individuals transform into the best and most authentic
                version of themselves.
              </p>
              <p>
                The session was taken forward by the second speaker Ms. Mayra
                Baez who spoke eloquently on the topic of 'The real journey
                happens within you.' She commenced by highlighting her childhood
                years in Columbia through the movie Encanto and emphasized the
                importance of traveling to various places within Columbia that
                had played a part in her becoming the woman she is now. Further,
                she showcased the positive side of her country through the
                natural diversity and essential personalities of Columbia and
                the negatives of having the longest-running internal war and
                political strife.
              </p>
              <p>
                She then described the role of these factors in shaping up her
                growing year while also highlighting the importance of education
                in her life and her decision to pursue political science to help
                heal her country. The speaker took us through her life events,
                starting with the highs of traveling to Stanford, Rome, working
                for the refugees, meeting Vincent Cerf to the lows of
                experiencing anxiety, sleep disorder, and clinical depression.
                Finally, she affirmed that status, money, material experiences
                do not necessarily guarantee happiness, and life is an emotional
                roller coaster. Everyone needs stabilizing energy which she
                found in meditation. She enumerated the benefits of meditation
                in her life and how acceptance and self-awareness were the keys
                to happiness.
              </p>
              <p>
                The session ended with a discussion among the students, the
                Professors, and the Guest Speakers, followed by a statement of
                gratitude to the speakers for an enriching session.
              </p>
              <br />
              <p className="title_p">
                <b>The American Style Of Doing Business</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Mr. David Moyer, Public Affairs Officer at the U.S. Consulate in
                Hyderabad
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                16-Mar-22
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/26.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                Hyderabad, 16th March 2022: Institute of Management Technology
                (IMT), Hyderabad hosted the sixth session of the second edition
                of the Global Immersion Program (GIP) on 16th March 2022. The
                speaker for the session was Mr. David Moyer, Public Affairs
                Officer at the U.S. Consulate in Hyderabad. He talked about the
                ‘American style of doing Business.’ Prof. (Dr.) Manoj Das,
                Assistant Professor and Area Chairperson- Marketing, IMT
                Hyderabad, officially welcomed the speaker and the participants,
                followed by a brief introduction of the speaker by Soumya Dixit,
                a first-year PGDM student.
              </p>
              <p>
                The speaker started the presentation by highlighting the popular
                series, The Office, and its insight into doing business in the
                U.S. He spoke on the less formal workplace culture where
                everyone addresses each other on a first-name basis. He
                mentioned that the American work culture is focused on
                establishing equality among colleagues and bosses alike. Having
                worked with the U.S. Government for 19 years, he said different
                bosses have different expectations, and it is always better to
                be more formal until one gets familiar with the boss. Mr. Moyer
                elaborated that the hierarchical nature varies from state to
                state in the U.S. itself, and the financial capital, New York
                City, is much more formal than Silicon Valley, where the work
                culture is primarily casual.
              </p>
              <p>
                Mr. Moyer narrated his experience of working in Japan and
                Mexico, where handshakes were not the standard way of greeting.
                He informed that a slight bow at the waist is the norm of
                greeting in Japan, whereas a kiss on the cheek in Mexico is
                acceptable. He highlighted the cultural differences at the two
                places and compared it to the American style of greeting, where
                a firm handshake is considered a sign of confidence. He
                explained that the non-contact culture is quite prominent in the
                U.S., and physical contact has been minimalized greatly with the
                pandemic.
              </p>
              <p>
                The speaker explained the importance of work-life balance. He
                talked about the significance of proper separation between work
                time and personal time. He mentioned that a 40-hour week is a
                general norm in the U.S, and it is considered impolite to engage
                in work talks on holidays. However, he highlighted that working
                overtime is not that uncommon, and there are strict labor laws
                in the U.S. that ensure employees are compensated for their
                extra time. He mentioned that the concept of TGIF (Thank
                Goodness it’s Friday) had been made famous for taking a break
                and relaxing on the weekend.
              </p>
              <p>
                Mr. Moyer also talked about the value of time in the U.S. work
                culture. He informed that employees are expected to be direct
                and precise in their conversations. He also mentioned that the
                work culture in America does not encourage discussion on topics
                like politics, age, salary, religion as people are sensitive to
                such issues. He elaborated on the process of conducting meetings
                and dressing style in U.S. Corporates.
              </p>
              <p>
                The session was followed by an interactive question and answer
                session where students cleared their doubts and queries. The
                students expressed their sincerest gratitude and thanked the
                speaker for an insightful session.
              </p>
              <br />
              <p className="title_p">
                <b>Cross Culture Management</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Prof. Mielly Michelle from Grenoble Ecole de Management (France)
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                16-Mar-22
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/27.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                Hyderabad, 16th March 2022: Institute of Management Technology
                (IMT), Hyderabad, hosted the seventh session of its Global
                Immersion Program on 16th March 2022. The speaker for the
                session was Prof. Mielly Michelle from Grenoble Ecole de
                Management (France), who discussed the topic "Cross-culture
                management". An official welcome address was given by Prof.
                (Dr.) Manoj Das, Assistant Professor &amp; Area Chairperson -
                Marketing, IMT Hyderabad. After a warm welcome by Prof. (Dr.)
                Manoj Das, Sri Vaishnavi Atreyapurapu, a first-year PGDM
                student, briefly introduced the speaker.
              </p>
              <p>
                At the beginning of the session, Prof. Mielly Michelle talked
                about herself and used her experience as an example to stress
                the importance of cross-cultural management as a person born and
                raised in America and living in France for over 20 years. Then
                she discussed global rage and said there is a massive outpouring
                of paranoid hatred. In addition, she briefly addressed racism,
                intolerance, and misogyny on the internet. Prof. Mielly Michelle
                discussed the VUCA model, which refers to four characteristics
                of operational environments: volatility, uncertainty,
                complexity, and ambiguity. According to her, the acronym VUCA
                seems appropriate due to current uncertain and volatile
                conditions.
              </p>
              <p>
                She briefly touched upon the theory of time compression based on
                Dave Harvey's work, also known as space decay. She mentioned
                that the value of space is declining, and everything is now
                moving faster. Her discussion then turned to the current
                situation and the direction we are heading, Ethnocentrism, which
                means to judge from a single perspective, and Ethno-relativism,
                which means to evaluate from multiple perspectives. Then she
                explained to the students that othering is a psychological
                tactic that we use to survive and enables us to determine that
                an individual or group is not one of us based on their age,
                sexual orientation, religion, gender, skin color, or political
                affiliation. She said to combat this issue; managers should
                cultivate empathy, which is putting yourself in others' shoes,
                and tolerance of ambiguity.
              </p>
              <p>
                Further, she talked about the word foreigner, which originates
                from an old French word meaning stranger. Diversity management
                can help us better embrace our differences to understand others'
                differences in our daily lives.
              </p>
              <p>
                Later, she discussed Hofstede's culture dimension and Schein's
                reverse pyramid of culture. She elaborated a brief outline of
                the Hofstede model of national culture is presented, consisting
                of power distance, individualism versus collectivism, feminism
                versus masculinity, and uncertainty avoidance. In addition, she
                stated that individualists often have a lower power index than
                collectivists. Her final point was on the Pygmalion effect, how
                our actions impact others' beliefs, and how others' actions
                reinforce our beliefs.
              </p>
              <p>
                The session was followed by an interactive question and answer
                session between the students, the professors, and the guest
                speaker. Afterward, the students expressed their sincerest
                gratitude and thanked the speaker for an insightful session.
              </p>
              <br />
              <p className="title_p">
                <b>Global Capital Markets</b>
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Speaker:</b>
                </strong>{" "}
                Dr. Ata Assaf, Professor, University of Balamand, Lebanon
              </p>
              <p className="inv-txt">
                <strong>
                  <b>Date:</b>
                </strong>{" "}
                16-Mar-22
              </p>
              <br />
              <p>
                <img
                  src="/media/G-I/28.png"
                  alt="GIP"
                  className="img-responsive w-100"
                />
              </p>
              <br />
              <p>
                Hyderabad, 16th March 2022: Institute of Management Technology
                (IMT), Hyderabad hosted the eighth session of the second edition
                of the Global Immersion Program (GIP) on 16th March 2022. The
                speaker for this session was Dr. Ata Assaf, Professor,
                University of Balamand, Lebanon, who talked about Global Capital
                Markets. An official welcome address was given by Srividya
                Racharla, a first-year PGDM student.
              </p>
              <p>
                Dr. Assaf started his presentation by asking what is unique
                about international finance or the global market and then gave a
                brief explanation. The speaker used the example of fluctuating
                global oil prices to explain this. He also emphasized the
                emergence of global financial markets and people interested in
                the same. The first part of the session included introductory
                discussions about trade liberalization, privatization, and
                various financial innovations such as – Currency futures and
                options, multi-currency bonds, cross-border stock listings, and
                international mutual funds.
              </p>
              <p>
                The speaker concisely explained a Short Sale as a sale in which
                the seller does not actually own the security sold and further
                explained how the investor benefits from it. Dr. Ata Assaf
                explained the classification of the securities in basic types
                and major sub-types; he highlighted that there are three basic
                types of securities- interest-bearing, equities, and
                derivatives. The speaker further explained by giving an example
                on fixed-income securities price quotation.
              </p>
              <p>
                Dr. Ata Assaf gave an elaborate explanation on the world's bond
                market and threw some light on how the total market value of the
                world's bond market is 50% larger than the world's equity
                market. He further told about the difference between the Bearer
                Bonds and the Registered Bonds. He highlighted the colorful
                names of the foreign bonds by giving examples of Yankee Bonds,
                Samurai Bonds, and Bulldogs. The speaker further accentuated
                that a global bond is an extensive bond offered by a single
                borrower simultaneously sold in North America, Europe, and Asia.
              </p>
              <p>
                The speaker mentioned the different types of instruments used in
                global capital markets and explained the dual currency bonds in
                which principle is in one currency whereas interest paid is in
                some other currency. He further explained Straight Fixed Rate
                Debt and Floating Rate Notes. Dr. Assaf further threw some light
                on Equity Related Bonds and described convertibles and bonds
                with equity warrants. The speaker also shared websites of some
                reputed organizations that can determine the international bond
                market credit ratings.
              </p>
              <p>
                Dr. Assaf explained the difference between common and preferred
                stocks. He mentioned that in international Equity Markets, over
                90% of the total market capitalization of the world's equity
                market is accounted for by the market capitalization of the
                developed world.
              </p>
              <p>
                The speaker also talked about stock funds, long-term funds,
                investment companies, fund types, futures, and mutual funds. The
                session was followed by a brief question and answer session
                where the speaker answered some students' queries. The students
                expressed their sincerest gratitude and thanked the speaker for
                an insightful session.
              </p>
              <br />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
