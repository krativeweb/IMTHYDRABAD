"use client";
import Link from "next/link";
export default function AwardsRecognitions() {
  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('./media/banners/awardandrecognition.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Awards and Recognitions</h2>
          <p className="text-white">
            Excellence acknowledged, credibility earned. <br />
            Every award reflects our commitment to quality education, impactful
            research, and leadership that inspires trust.
          </p>
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22 57 119)" }}
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
                  Awards and Recognitions
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="offerings" className="py-5">
        <div className="container">
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Awards and Recognitions
          </h2>

          {/* Tabs Navigation */}
          <ul
            className="nav nav-pills justify-content-center mb-4"
            id="offeringsTabs"
            role="tablist"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link active"
                id="short-tab"
                data-bs-toggle="pill"
                data-bs-target="#short"
                type="button"
                role="tab"
                aria-controls="short"
                aria-selected="true"
              >
                Awards For Institute
              </button>
            </li>
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link"
                id="long-tab"
                data-bs-toggle="pill"
                data-bs-target="#long"
                type="button"
                role="tab"
                aria-controls="long"
                aria-selected="false"
              >
                Awards For Faculty
              </button>
            </li>
          </ul>
          <hr />

          {/* SINGLE TAB CONTENT */}
          <div
            className="tab-content card bg-light p-4 border-0"
            id="offeringsTabsContent"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* === Awards For Institute === */}
            <div
              className="tab-pane fade show active"
              id="short"
              role="tabpanel"
              aria-labelledby="short-tab"
            >
              <div className="row justify-content-center">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/1.jpg"
                      alt="Education Leadership Award"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <h5 className="program-title">
                        Education Leadership Award
                      </h5>
                      <p className="program-text">
                        IMT Hyderabad has received Dewang Mehta National
                        Education Awards (Regional Round) as “Education
                        Leadership Award’ during the 25th Business School
                        Affaire held on 29th January 2017 at Institute of Public
                        Enterprise, Hyderabad.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/2.jpg"
                      alt="Education Excellence Award"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <h5 className="program-title">
                        Education Excellence Award
                      </h5>
                      <p className="program-text">
                        Brands Academy conferred the Certificate of Excellence
                        in the education excellence awards category to Institute
                        of Management Technology, Hyderabad in recognition of
                        significant contribution made by the Institution.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/3.jpg"
                      alt="South India Award"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <h5 className="program-title">South India Award</h5>
                      <p className="program-text">
                        IMT Hyderabad receives ‘The Best Upcoming B-School in
                        South India’ award from ASSOCHAM.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/4.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <h5 className="program-title">
                        National Education Award 2015
                      </h5>
                      <p className="program-text">
                        IMT, Hyderabad has received National Education Award
                        2015 as a ‘B-school with an Excellent Industry
                        interface’ on 23rd July, 2015.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/5.jpg"
                      alt="Collegesearch"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <h5 className="program-title">Collegesearch</h5>
                      <p className="program-text">
                        IMT Hyderabad was awarded as the ‘College with the Most
                        Safety Measures’ by Collegesearch.in
                      </p>
                    </div>
                  </div>
                </div>

                <h2
                  style={{ textAlign: "center", color: "#08317a" }}
                  className="mt-4 mb-3 fw-bold"
                >
                  Awards For Director
                </h2>

                {/* Card 6 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/6.png"
                      alt="Matthai National Fellowship Award"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <h5 className="program-title">
                        Matthai National Fellowship Award
                      </h5>
                      <p className="program-text">
                        Dr. V. Panduranga Rao, Former Director, IMT-Hyderabad
                        was conferred the Ravi J. Matthai National Fellowship
                        Award for his contributions towards ‘Excellence in
                        Management Education.’ He received the award at the 26th
                        Annual Management Education Convention 2014 of the
                        Association of Indian Management Schools (AIMS) held in
                        Pune on 23 August 2014. Our Director has also been
                        selected for Eminent Educationist Award by The Indus
                        Foundation, a non-profit educational organization
                        dedicated to the promotion of Higher Education in India.
                        He will be presented the award during the Indo-Global
                        Education Expo & Summit in Hyderabad on 20 November
                        2014. From L-R: Dr W N Gade, Vice Chancellor, Pune
                        University, Dr V Panduranga Rao, Director IMT, Dr S S
                        Mantha, Chairman, AICTE, Padmashri Pratap Govind Pawar,
                        Chairman, Sakal Media Group, Mr Vinod Tawade, Opposition
                        Leader and Dr Apoorva Palkar, President, AIMS
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 7 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/7.jpg"
                      alt="Bharat Shiksha Ratan Award"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <h5 className="program-title">
                        Bharat Shiksha Ratan Award
                      </h5>
                      <p className="program-text">
                        Prof. (Dr.) Satish Ailawadi, Former Director,
                        IMT-Hyderabad received “Bharat Shiksha Ratan Award” from
                        Global Society for Health & Educational Growth, New
                        Delhi on 7th April 2018
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === Awards For Faculty === */}
            <div
              className="tab-pane fade"
              id="long"
              role="tabpanel"
              aria-labelledby="long-tab"
            >
              <div className="row justify-content-center">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a1.jpg"
                      alt="Award Image"
                      className="program-img w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        A case authored by Prof. (Dr.) Nitin Gupta titled “Kia
                        Motors: Positioning and Growth Strategies in India”,
                        Ivey Publishing, Product no. 9B21A009, is ranked 14
                        among top 25 best-selling cases of Ivey Publishing Best
                        Sellers 2022-2023. This information can be accessed at:
                        https://tinyurl.com/nktuf834
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a2.png"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Dr. Sourabh Bhattacharya, Professor (Operations
                        Management) , has been selected Best Professor in
                        Operations Management by B-School Affaire. He was
                        presented the award during the 22nd Dewang Mehta
                        Business School Award function in Mumbai on 15th
                        November, 2014.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a3.png"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Dr. Nikhil Rastogi, Professor (Finance & Accounting),
                        has been selected Best Professor in Financial Management
                        by B-School Affaire. He was presented the award during
                        the 22nd Dewang Mehta Business School Award function in
                        Mumbai on 15th November, 2014.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a4.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Dr. Surajit Ghosh Dastidar from IMT Hyderabad has been
                        awarded the ‘AIMS Best Case Award 2015’ at the 27th AIMS
                        Annual Management and Education Convention on Aug 25-27,
                        2015 at Indore. His case, “RelianceOne: The Loyalty
                        Program” was judged the ‘Best Case’. As the winner he
                        received a gold medal and a certificate.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a5.png"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Dr. Romina Mathew was awarded the “Best Professor in
                        Human Resources Management” at the 25th Silver Jubilee
                        Year of World HRD Congress. She was felicitated during
                        the Most Influential HR Leaders in India awards on 15th
                        February 2017 at Mumbai.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a6.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Dr. Preeti Sharma was awarded as “Women in Education
                        Award” from Dewang Mehta Foundation in a ceremony held
                        on April 15, 2017 at Institute of Public Enterprise,
                        SHAMIRPET CAMPUS, Hyderabad.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 7 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a7.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Dr. Nitin Gupta, Professor – Marketing, was awarded the
                        “Best Professor in Marketing” Award at the ‘25th
                        Business School Affaire and Dewang Mehta National
                        Education Awards’ ceremony held at Taj Land End, Mumbai
                        on 25 Nov. 2017.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 8 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a8.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Prof. (Dr.) Sridhar Vaithianathan, (Area Chairperson –
                        Analytics & IT Department) won “Highly commendable
                        paper” award in the 5th International conference on
                        Business Analytics & Intelligence (11-13 Dec 2017) held
                        at IIM, Bangalore for his paper titled “Recommender
                        System to increase engagement among Spenders and
                        Non-spenders for Freemium mobile games.”
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 9 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a9.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Prof. (Dr.) Sridhar Vaithianathan, Associate Professor
                        and Prof. Devi Prasad Ghosh, Assistant Professor are
                        been awarded “1st Runner up” for the case titled “Adpelz
                        Digital: Defining Digital Marketing” in ICBM’s 6th
                        International Case Conference (IIIC) – 2018 held at
                        Hyderabad on December 29, 2018.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 10 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a10.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Prof. (Dr.) Sridhar Vaithianathan, Associate Professor &
                        Area Chairperson (Analytics & IT) has been awarded the
                        ‘Best Professor in Business Analytics’ from ICBM-AMP
                        Academic Excellence Awards 2018 held at ICBM-SBE,
                        Hyderabad on 24th Nov2018.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 11 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a11.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        World Research Council in association with International
                        Journal for Research Under Literal Access (IJRULA) and
                        United Medical Council, has awarded “Best Researcher in
                        Business Analytics” to Prof. (Dr.) Sridhar
                        Vaithianathan, Associate Professor & Area Chairperson
                        (Analytics & IT) in an international innovation congress
                        held at Trichy, Tamilnadu on 26th February 2019.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 12 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a12.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Prof. (Dr.) Preeti Sharma, Assistant Professor
                        (Analytics & IT), Chairperson IT Infrastructure has been
                        awarded the “100 Most Dedicated Professors” at the World
                        Education Congress held at Taj Land End, Mumbai on 4 th
                        July 2019.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 13 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a13.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Prof. (Dr.) Preeti Sharma, Assistant Professor
                        (Analytics & IT), Chairperson IT Infrastructure has been
                        awarded the “Prof. Indira Parikh 50 Women in Education
                        Leaders” at the 8th edition of World Education Congress
                        2019 held at Taj Land End, Mumbai on 4 th July 2019.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 14 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a14.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Prof. (Dr.) Preeti Sharma, Assistant Professor
                        (Analytics & IT), has been awarded the “Best Paper in
                        the tract of Operations in Digital Era" in ICBIT 2020
                        organized by Mangement Development Institute
                        Murshidabad, West Bengal, India on 25 - 26 September
                        2020.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 15 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a15.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Dr. Surajit Ghosh Dastidar, Associate Professor
                        (Analytics & IT) has been honored to be awarded the Best
                        Professor in Data Science (2020) by Academy of
                        Management Professionals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 16 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a16.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Dr. Surajit Ghosh Dastidar, Associate Professor
                        (Analytics & IT) has been awarded the winner in the 3rd
                        Global Prestige Case Study Competition, organised by
                        PIMG, Gwalior. Around 30 cases were shortlisted for
                        final presentation from reputed university/institutes
                        like NMIMS, Symbiosis, University of Jammu, AMU, DAVV
                        Indore among others.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 17 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a17.jpg"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Dr. Surajit Ghosh Dastidar, Associate Professor
                        (Analytics & IT) has been Awarded the “Certificate of
                        Merit” for the case titled “Tazzo Bikes: Tackling
                        Competition” at the AIMS-ICRC Case Conference and
                        Competition organized on March 30-31st organized by All
                        India Management Association (AIMA) in association with
                        AICTE and EFMD Global Network. The competition witnessed
                        more than 100 case submission. Around 60 cases were
                        shortlisted for the conference presentation. Submissions
                        came from reputed institutes like NMIMS, IIM Kozikode,
                        IIM Calcutta, IIM Shillong, IIM Indore, IRMA, Ahmedabad
                        University, O.P. Jindal Global University, Rajgiri
                        Business School among others.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 18 */}
                <div className="col-md-4 mb-4">
                  <div className="program-card text-start">
                    <img
                      src="/media/awards/a18.png"
                      alt="National Education Award 2015"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="program-body">
                      <p className="program-text">
                        Dr. Preeti Sharma, Assistant Professor (Analytics & IT)
                        has been awarded the "Certificate of Recognition" for
                        "Excellence in Online Teaching" at the "India’s
                        Inspiring Teachers Summit & Awards 2021" held online on
                        30th June 2021 initiated & organized by InnoServ Group
                        of Companies and ASMA. The event witnessed the inspiring
                        presence of Prof. Anil Sahasrabudhe, Chairman of the All
                        India Council for Technical Education (AICTE), and Dr.
                        Ganesh Natarajan, Chairman of Honeywell Automation India
                        Ltd and founder of the 5F World Platform along with all
                        the awardees from various academic institutions across
                        India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === ALL ORIGINAL CSS === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .faculty-hero h2 {
        margin-top: 150px;
      }

      #offerings .nav-pills .nav-link {
        border-radius: 999px;
        padding: 0.6rem 1.2rem;
        font-weight: 600;
        color: #333;
        background: #eaeaea;
      }
      #offerings .nav-pills .nav-link.active {
        background: #314a7c;
        color: #fff;
      }

      #short {
        padding: 30px 0;
        border-radius: 12px;
      }

      .program-card {
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        height: 100%;
      }
      .program-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
      }

      .program-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .program-body {
        padding: 20px;
      }
      .program-title {
        font-weight: 600;
        font-size: 1.05rem;
        color: #000;
        margin-bottom: 15px;
        line-height: 1.4;
      }
      .program-body p {
        margin-bottom: 8px;
        font-size: 0.95rem;
        color: #1f2328;
      }
      .program-body strong {
        color: #000;
      }

      .read-more-btn {
        align-self: flex-start;
        background-color: #ffc107;
        color: #000;
        border: none;
        border-radius: 25px;
        padding: 8px 20px;
        font-size: 0.8rem;
        font-weight: 600;
        margin-top: 10px;
        transition: background-color 0.3s ease;
      }
      .read-more-btn:hover {
        background-color: #ffb400;
        cursor: pointer;
      }

      @media (max-width: 768px) {
        .program-card {
          margin-bottom: 20px;
        }
      }

      .program-card {
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .program-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
      }

      .program-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .program-body {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
      }

      .program-title {
        font-weight: 600;
        font-size: 1.05rem;
        color: #000;
        margin-bottom: 10px;
        line-height: 1.4;
      }

      .program-body p {
        font-size: 0.95rem;
        color: #1f2328;
        margin-bottom: 0;
      }

      @media (max-width: 768px) {
        .program-card img {
          height: 180px;
        }
      }

      .program-card {
        background: #fff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .program-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
      }

      .program-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .program-body {
        padding: 20px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .program-text {
        font-size: 0.95rem;
        color: #1f2328;
        line-height: 1.6;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        transition: all 0.3s ease;
      }
      .program-text.expanded {
        -webkit-line-clamp: unset;
        overflow: visible;
      }

      .read-more-btn {
        align-self: flex-start;
        background-color: #ffc107;
        color: #000;
        border: none;
        border-radius: 25px;
        padding: 6px 14px;
        font-weight: 600;
        margin-top: 10px;
        transition: background-color 0.3s ease;
      }
      .read-more-btn:hover {
        background-color: #ffb400;
        cursor: pointer;
      }

      .mx-1 {
        margin-top: 9px;
      }
    `,
        }}
      />
    </>
  );
}
