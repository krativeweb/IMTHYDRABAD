"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import JournalComponents from "@/components/JournalComponets";
import CasesArchive from "@/components/CasesArchive";
export default function ResearchArchive() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const journalYears = [
    "2025-26",
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
    "2017-18",
    "2016-17",
    "2015-16",
    "2014-15",
    "2013-14",
    "2012-13",
    "2011-12",
    "2010-11",
  ];

  const sortedYears = [...journalYears].sort((a, b) => {
    const aNum = parseInt(a.split("-")[0]);
    const bNum = parseInt(b.split("-")[0]);
    return bNum - aNum;
  });

  // Fetch data
  useEffect(() => {
    axios
      .get(
        "https://thekreativeweb.com/codes/imt_hydrabad/api/journal_publication"
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  // Group by year
  const grouped = data.reduce((acc, item) => {
    const year = item.res_year || "Unknown";
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

  // Auto-active newest year with data
  const activeYear =
    sortedYears.find((year) => grouped[year]) || sortedYears[0];
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .table-responsive {
        border-radius: 0.5rem;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
      }

      /* Faculty Hero */
      .faculty-hero {
        background: url("/media/banners/researcharchive.webp") center/cover no-repeat, #f0f0f0;
        position: relative;
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

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }
      .breadcrumb-item a {
        text-decoration: none;
      }

      /* Card Styling */
      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }

      /* Image Glow & Hover Effect */
      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }

      /* Social Icons */
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
    `,
        }}
      />

      {/* Faculty Hero Section */}
      <div
        className="faculty-hero text-center text-white py-5"
        data-aos="fade-up"
      >
        <h2 className="display-5 fw-bold mb-2">Research Archive</h2>
        <p className="text-white">
          A repository of thought, inquiry, and innovation. <br />
          Our research archive preserves impactful academic work that advances
          management knowledge and societal progress.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb p-4">
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent p-0 m-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white fw-bold">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item active text-warning fw-bold"
                aria-current="page"
              >
                Research Archive
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section>
        <nav className="nav nav-pills justify-content-center flex-wrap gap-2 mt-5 mb-5">
          <Link
            className="nav-link rounded-pill bg-white active"
            data-bs-toggle="tab"
            href="#tab-journal"
            role="tab"
          >
            Journal Publication
          </Link>
          <Link
            className="nav-link rounded-pill bg-white"
            data-bs-toggle="tab"
            href="#tab-cases"
            role="tab"
          >
            Cases
          </Link>
          <Link
            className="nav-link rounded-pill bg-white"
            data-bs-toggle="tab"
            href="#tab-conference"
            role="tab"
          >
            Conference Proceeding
          </Link>
          <Link
            className="nav-link rounded-pill bg-white"
            data-bs-toggle="tab"
            href="#tab-article"
            role="tab"
          >
            News Article
          </Link>
          <Link
            className="nav-link rounded-pill bg-white"
            data-bs-toggle="tab"
            href="#tab-books"
            role="tab"
          >
            Books
          </Link>
          <Link
            className="nav-link rounded-pill bg-white"
            data-bs-toggle="tab"
            href="#tab-magazines"
            role="tab"
          >
            Magazines
          </Link>
        </nav>
        <JournalComponents />
        {/* Cases */}
        <CasesArchive />
        {/* News Article */}
        <div className="tab-content container mt-4">
          <div
            className="tab-pane fade bg-white p-4 rounded-4 "
            id="tab-article"
            role="tabpanel"
          >
            <nav className="nav nav-pills flex-wrap gap-2 mb-4 justify-content-center mt-4">
              <Link
                className="nav-link bg-light text-dark rounded-pill tab active"
                data-bs-toggle="pill"
                href="#sub-res-5"
                role="tab"
              >
                2024-25
              </Link>
              <Link
                className="nav-link bg-light text-dark rounded-pill tab"
                data-bs-toggle="pill"
                href="#sub-res-4"
                role="tab"
              >
                2023-24
              </Link>
              <Link
                className="nav-link bg-light text-dark rounded-pill tab"
                data-bs-toggle="pill"
                href="#sub-res-3"
                role="tab"
              >
                2022-23
              </Link>
              <Link
                className="nav-link bg-light text-dark rounded-pill tab"
                data-bs-toggle="pill"
                href="#sub-res-1"
                role="tab"
              >
                2020-21
              </Link>
              <Link
                className="nav-link bg-light text-dark rounded-pill tab"
                data-bs-toggle="pill"
                href="#sub-res-0"
                role="tab"
              >
                2019-20
              </Link>
              <Link
                className="nav-link bg-light text-dark rounded-pill tab"
                data-bs-toggle="pill"
                href="#sub-res-8"
                role="tab"
              >
                2017-18
              </Link>
            </nav>
            {/* SUB-TAB CONTENT */}
            <div className="tab-content container-sm ">
              <div
                className="tab-pane fade show active p-2 text-center"
                id="sub-res-5"
                role="tabpanel"
              >
                <p className="">
                  Basit Abdullah, "Labour codes must look at the invisible workers", The Statesman, 26 December 2025
                  <br/>
                  <br/>
                   Kashif Mansoor  &amp; Basit Abdullah, "Minimum Wages Under the New Labour Codes: What the Law Promises and What It Misses", The Wire, Foundation for Independent Journalism 30 November 2025
                  <br/>
                  <br/>
                  Basit Abdullah   &amp; Satyaki Dasgupta , "Numbers may not tell whole story",The Statesman, The Statesman Ltd 19 November 2025
                  <br />
                  <br />
                  Ritesh Kumar Singh &amp; Steven Raj Padakandla, "India
                  redefines global green finance amid US withdrawal", Money
                  Control 29 October 2025
                  <br />
                  <br />
                  Ritesh Kumar Singh &amp; Steven Raj Padakandla, "Government
                  purchases don’t need atmanirbharta; foreign firms are
                  required", Money Control 22 May 2025 <br />
                  <br />
                  Ritesh Kumar Singh &amp; Steven Raj Padakandla “Services
                  exports are booming, and this is just the beginning”, Money
                  Control 27 March 2025 <br />
                  <br />
                  M.Muneer, Tumpa Dey, "View: Firms that fail to address ageism
                  risk losing talent, and a dip in productivity and innovation",
                  Economic Times 30 September 2024 <br />
                  <br />
                  M.Muneer, Tumpa Dey, "Companies worldwide are benefiting from
                  embracing neurodiversity. Indian offices must follow",
                  Economic Times 2 August 2024
                </p>
              </div>
              <div
                className="tab-pane fade p-2 text-center"
                id="sub-res-4"
                role="tabpanel"
              >
                <p className="">
                  Ritesh Kumar Singh &amp; Steven Raj Padakandla, "What drives
                  the Indian stock market – fundamentals or policy?", Money
                  Control 15 Nov 2023 <br />
                  <br />
                  M.Muneer, Tumpa Dey, "Does board diversity impact enterprise
                  performance?", Mint 15 May 2024 <br />
                  <br />
                  Ritesh Kumar Singh &amp; Steven Padakandla, "How to give a
                  demand boost to the Indian economy that it so badly needs",
                  Money Control 7-March, 2024 <br />
                  <br />
                  Sourabh Bhattacharya, Vinay K. Kalakabandi, "Tire Retreading -
                  A True Case to Promote Circularity", Supply Chain Tribe By
                  Celerity August, 2023 <br />
                  <br />
                  Sourabh Bhattacharya &amp; Steven Raj Padakandla, "Indian
                  Exports at Crossroads: Analysing the Impact of CBAM on Supply
                  Chains", Celerity Supply Chain Tribe February, 2024 <br />
                  <br />
                  Tumpa Dey &amp; M. Muneer, "Get proactive on taking the third
                  gender mainstream", Livemint 18 June, <br />
                  <br />M Chandra Shekar &amp; Chakrapani
                  Chaturvedula,"Disclaimers matter in a world of social media
                  influencers", Business Line 6 Sep 2023
                </p>
              </div>
              <div
                className="tab-pane fade p-2 text-center"
                id="sub-res-3"
                role="tabpanel"
              >
                <p className="">
                  Steven Raj Padakandla &amp; Ritesh Singh, India’s GDP has
                  turned around but structural problems remain” The Print 9 Sept
                  2022 <br />
                  <br />
                  Steven Raj Padakandla &amp; Dr BM Rao, Implications of the
                  rupee going international” The Daily Guardian Aug 12 2022{" "}
                  <br />
                  <br />
                  Ritesh Kumar Singh &amp; Steven Padakandla, "Geopolitics,
                  trade protectionism complicate India’s inflation war", Money
                  Control 14 March, 2023 <br />
                  <br />
                  Ritesh Kumar Singh &amp; Steven Padakandla, "India’s FTAs have
                  flaws. But they can be tapped smartly", Money Control 7 April,
                  2023
                </p>
              </div>
              <div
                className="tab-pane fade p-2 text-center"
                id="sub-res-1"
                role="tabpanel"
              >
                <p className="">
                  Ritesh Kumar Singh &amp; Steven Raj Padakandla (2021), “India’
                  economic recovery is lopsided. It’s firing one and half
                  cylinders “The Print published on 26 Aug 2021 <br />
                  <br />
                  K.Sriharsha Reddy, “Re-Up- &amp; New skilling will help face
                  challenges of next normal” The Hindu Business Line Published
                  on 16 June 2021 <br />
                  <br />
                  Dhananjay Singh, “Village Folk taught me a lesson in
                  Self-restraint, discipline” Time of India” published on 7
                  April 2021 <br />
                  <br />
                  K Sriharsha Reddy, “How agile B-Schools are responding to
                  industry demands now” Hindu Business Line, Published on 4
                  March 2021 <br />
                  <br />
                  Steven Raj Padakandla &amp; Ritesh Kumar Singh, “Blaming Covid
                  for all economic mess is telling half-truth” The Print”
                  Published date: December 10, 2020
                </p>
              </div>
              <div
                className="tab-pane fade p-2 text-center"
                id="sub-res-0"
                role="tabpanel"
              >
                <p className="">
                  Steven Raj &amp; Ritesh Kumar Singh, What lessons can be drawn
                  from Kerala’s Covid-19 approach published in Unravel” an
                  international portal on 6h June 2020 <br />
                  <br />
                  Dhananjay Singh, Decoding Rs 20 L cr push: Mammoth package,
                  miniscule stimulus” published in The Poineer (Daily News
                  Paper) on 4th June 2020 <br />
                  <br />
                  Steven Raj &amp; Ritesh Kumar Singh, “Tackling India's
                  Economic Slowdown” published in Financial Express on Dec 24
                  2019
                </p>
              </div>
              <div
                className="tab-pane fade p-2 text-center"
                id="sub-res-8"
                role="tabpanel"
              >
                <p className="">
                  Dhananjay Singh, Indian Premier League’s Ripple Effect –
                  Sports League in India, Collegedunia
                  https://collegedunia.com/news/c-55930-ipls-ripple-effect–sports-league-in-india
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Conference */}
        <div className="tab-content container mt-4">
          <div
            className="tab-pane fade bg-white p-4 rounded-4 "
            id="tab-conference"
            role="tabpanel"
          >
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Author Name</th>
                    <th>Title of the article</th>
                    <th>Published / Presented</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                 
    <tr>
      <td>Prof. Surajit Ghosh Dastidar</td>
      <td>Country Delight: Positioning Natural Coconut Water in India</td>
      <td>International Case Conference 2026</td>
      <td>29–31 Jan 2026</td>
    </tr>

    <tr>
      <td>Prof. Sourabh Bhattacharya</td>
      <td>
        Short Term vs Longer Term Sustainability Education: Impact on Students'
        Pro-Environmental Dispositions
      </td>
      <td>ISDSI-Global Conference 2025</td>
      <td>25–29 Dec 2025</td>
    </tr>

    <tr>
      <td>Prof. Sivadasan TM</td>
      <td>
        Knowledge and Usage Gaps: The Role of Caste Networks in Financial
        Inclusion among Indian Households
      </td>
      <td>
        Indian Finance Conference 2025, Indian Finance Association, IIM
        Vishakhapatnam
      </td>
      <td>18–20 Dec 2025</td>
    </tr>

    <tr>
      <td>Prof. Nikhil Rastogi</td>
      <td>When Taxes Shape Dividends: Evidence from India's DDT Abolition</td>
      <td>
        Indian Finance Conference 2025, Indian Finance Association, IIM
        Vishakhapatnam
      </td>
      <td>18–20 Dec 2025</td>
    </tr>

    <tr>
      <td>Prof. Vinay Kumar Kalakbandi</td>
      <td>
        Pooling the Fragments: Contract Design &amp; Governance for Aggregated
        Waste Collection in Unorganized Remanufacturing Markets
      </td>
      <td>
       Society of operations management conference (XXVIII Annual International Conference of the Society of Operations Management (SOM 2025)
      </td>
      <td>19–21 Dec 2025</td>
    </tr>

    <tr>
      <td>Prof. Sanchari Guha Niyogi</td>
      <td>
        1 Digital Fashion: A Game-Theoretic Exploration of Competitive Strategy.
        <br />
        2 Freeride or Build? The Strategic Dilemma of EV Charging
      </td>
      <td>POMS India International Conference 2025, IIM Sambalpur</td>
      <td>13–16 Dec 2025</td>
    </tr>

    <tr>
      <td>Prof. Basit Abdullah</td>
      <td>
        Structural Transformation and Unequal Returns to Self-Employment in India
      </td>
      <td>University of Hyderabad</td>
      <td>8–9 Dec 2025</td>
    </tr>

    <tr>
      <td>Prof. Musarrat Shaheen</td>
      <td>
        Can Positive and Engaged Healthcare Service Providers Drive Medical
        Tourists' Trust?
      </td>
      <td>IMRC 2025, IIM Ahmedabad</td>
      <td>5–7 Dec 2025</td>
    </tr>

    <tr>
      <td>Prof. Pushpesh Pant</td>
      <td>
        Inefficient Yet Enduring: Revisiting Business Group Performance in India
      </td>
      <td>10th PAN IIM World Management Conference</td>
      <td>27–29 Nov 2025</td>
    </tr>

    <tr>
      <td>Prof. Surajit Ghosh Dastidar</td>
      <td>GRTM Industries: Tackling Competition</td>
      <td>14th International Conference on Management Cases</td>
      <td>26–28 Nov 2025</td>
    </tr>

    <tr>
      <td>Prof. Aindrila Chatterjee</td>
      <td>
        Reducing Resistance to Change: The Role of Balanced Culture in Learning
        Transfer
      </td>
      <td>ESETBiz 3.0, International School of Business &amp; Media</td>
      <td>29–30 Aug 2025</td>
    </tr>

    <tr>
      <td>Prof. Aindrila Chatterjee</td>
      <td>
        Extension of Lessons from Business Ethics Education to Business
        Situations: Role of Authority
      </td>
      <td>
        85th Annual Meeting of the Academy of Management (AOM 2025), Copenhagen,
        Denmark
      </td>
      <td>25–29 Jul 2025</td>
    </tr>
             
                  <tr>
                    <td>Prof. Krishna Dixit</td>
                    <td>
                      Entrepreneurial Intention to action among students: Impact
                      of success vs Failure Lens of Analysis.
                    </td>
                    <td>
                      16th Biennial Conference on Entrepreneurship. EDII Gujarat
                    </td>
                    <td>26-28 Feb 2025</td>
                  </tr>
                  <tr>
                    <td>Prof. Swetarupa Chatterjee</td>
                    <td>
                      Understanding the determinants of Halal Cosmetics Purchase
                      amongMuslim Consumers In India.
                    </td>
                    <td>ICMM Conference 2025. IIM Amritsar</td>
                    <td>17-19 Jan 2025</td>
                  </tr>
                  <tr>
                    <td>Prof. Surajit Ghosh Dastidar</td>
                    <td>
                      Digital Transformation in Indian Central Public Sector
                      Enterprises – A Thematic Study
                    </td>
                    <td>ISDSI - G PIBM International Conference 2024.</td>
                    <td>26-29 Dec 2024</td>
                  </tr>
                  <tr>
                    <td>Prof. Akhila Veldandi</td>
                    <td>
                      Data analytics powered framework for sentiment analysis:
                      The real-time data analysis of recent tragedy highlighting
                      the role of work-life balance in current working
                      environments.
                    </td>
                    <td>BAMS-ORSI 2024 Conference at IIT Bombay</td>
                    <td>12-14 Dec 2024</td>
                  </tr>
                  <tr>
                    <td>Prof. Sourabh Bhattacharya</td>
                    <td>
                      Does Social Similarity matter? Buyer-Supplier social
                      alignment, relational capital and operational performance.
                    </td>
                    <td>
                      POMS India International Conference 2024. IIM Ranchi
                    </td>
                    <td>04-06 Dec 2024</td>
                  </tr>
                  <tr>
                    <td>Prof. Akhila Veldandi</td>
                    <td>
                      Beyond Broad Policies: Analyzing Health &amp; safety
                      measures for Blue-Collar Workers in Nifty 500 companies.
                    </td>
                    <td>
                      POMS India International Conference 2024. IIM Ranchi
                    </td>
                    <td>04-06 Dec 2024</td>
                  </tr>
                  <tr>
                    <td>Prof. Tulika Sharma &amp; Prof. Aindrila Chatterjee</td>
                    <td>
                      Extension of lessons from business ethics education to
                      business situations: Evidence of role of authority from an
                      experimental study.
                    </td>
                    <td>
                      IMC International Research Conference 2024. XLRI,
                      Jamshedpur
                    </td>
                    <td>20-21 Sep 2024</td>
                  </tr>
                  <tr>
                    <td>Prof. Aindrila Chatterjee</td>
                    <td>
                      Gender Premium in Social Ventures for Women Founders:
                      Philanthropic Grants
                    </td>
                    <td>
                      84th Annual Meeting of the Academy of Management, Chicago
                    </td>
                    <td>09-13 Aug 2024</td>
                  </tr>
                  <tr>
                    <td>Sourabh Bhattacharya</td>
                    <td>Exploring the social Dimensions of Circular Economy</td>
                    <td>
                      International Conference of the Society of Operations
                      Management (SOM ) 2023 at IIM Shillong.
                    </td>
                    <td>14-16 Dec 2023</td>
                  </tr>
                  <tr>
                    <td>Kalyana C Chejarala</td>
                    <td>
                      Supply Chain Disruption Management: A Maturity Model
                      Framework
                    </td>
                    <td>
                      International Conference of the Society of Operations
                      Management (SOM) 2023 at IIM Shillong.
                    </td>
                    <td>14-16 Dec 2023</td>
                  </tr>
                  <tr>
                    <td>Surajit Ghosh Dastidar</td>
                    <td>Mayora : Positioning Coffee Joy Biscuit</td>
                    <td>International Conference on Management Cases (ICMC)</td>
                    <td>30-02 Dec 2023</td>
                  </tr>
                  <tr>
                    <td>Surajit Ghosh Dastidar</td>
                    <td>Mayora : Positioning Kopiko</td>
                    <td>Management Case Conference </td>
                    <td>03-04 Nov 2023</td>
                  </tr>
                  <tr>
                    <td>Surajit Ghosh Dastidar</td>
                    <td>Mayora : The Positioning Dilemma</td>
                    <td>Colloquium on case studies</td>
                    <td>11-13 Oct 2023</td>
                  </tr>
                  <tr>
                    <td>Esha Saha</td>
                    <td>
                      E-procurement: An emerging tool for the Pharmaceutical
                      Supply Chain Management
                    </td>
                    <td>
                      International Conference on Data Analytics in Public
                      procurement and Supply chain ICDAPS-2022
                    </td>
                    <td>10-11 Jun 2022</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      Changed Perceptions for New-Age banking Amdist Covid 19
                    </td>
                    <td>ISDI-Global Conference 2021 IIM Nagpur</td>
                    <td>27-30 Dec 2021</td>
                  </tr>
                  <tr>
                    <td>Devi Prasad Ghosh</td>
                    <td>Barriers and Facilitators of B2B</td>
                    <td>Fore International Marketing Conference</td>
                    <td>26-27 Nov 2021</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      Factors Impacting Usage of OTT Services Amidst Covid 19
                      Lockdown
                    </td>
                    <td>
                      16th SIMR Global Marketing Conference organized by KJ
                      Somaiya Institute of Management
                    </td>
                    <td>05-06 May 2021</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      Examining the adoption of Over the Top Platforms: From the
                      lense of UTAUT2
                    </td>
                    <td>
                      International Management Conference on Post Covid
                      Management Strategies: Recovery, Resilence &amp; Adoption
                    </td>
                    <td>23-24 Apr 2021</td>
                  </tr>
                  <tr>
                    <td>Avishek Bhandari</td>
                    <td>
                      Fractal connectivity networks of select stock returns
                      exhibiting long range dependence
                    </td>
                    <td>
                      Virtual Conference on International Macroeconomics and
                      Finance Jointly Organized by Dept. of HSS, IIT Patna and
                      Gulati Institute of Finance and Taxation(GIFT), Kerala
                    </td>
                    <td>21 Mar 2021</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      Comparative Study of Sentiment Analysis and Techniques
                    </td>
                    <td>
                      International Conference on Interdisciplinary Research in
                      Technology and Management (IRTM 2021) Co-organized by
                      SMART Society USA
                    </td>
                    <td>26-28 Feb 2021</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      Why Citizen’s Resist Contact Tracing Apps: Factors
                      affecting Adoption of Aarogya Setu
                    </td>
                    <td>
                      Conference on Interdisciplinary Research in Technology and
                      Management (IRTM 2021) Co-organized by SMART Society, USA
                    </td>
                    <td>26-28 Feb 2021</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      Covid-19, Aarogya Setu, and Well-being: The Changing
                      Conundrum of Electronic Word Of Mouth
                    </td>
                    <td>
                      International Conference on Business IT,and Enterprise
                      Architecture Organized by Management Development
                      Institute, West Bengal
                    </td>
                    <td>25-26 Sep 2020</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      Use of Big Data Analytics in Operations Management: A
                      Review Using Text Analytics
                    </td>
                    <td>
                      International Conference on Business IT, and Enterprise
                      Architecture Organized by Management Development
                      Institute, West Bengal
                    </td>
                    <td>25-26 Sep 2020</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      Research Gap Analysis on Inequalities faced by Employees
                      in the Workplace using Text and Visual Analytics
                    </td>
                    <td>
                      International Conference on Business IT, and Enterprise
                      Architecture Organized by Management Development
                      Institute, West Bengal
                    </td>
                    <td>25-26 Sep 2020</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      Privacy Preserving Data Mining Techniques: A Way to create
                      Customer Value
                    </td>
                    <td>NASEMI Summer Markeing -Is Conference</td>
                    <td>26-28 Jul 2019</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      Co-creation with Collaboratio- A New paradigm of Customer
                      Relationship Management-CRM 3.0
                    </td>
                    <td>NASEMI Summer Markeing -Is Conference</td>
                    <td>26-28 Jul 2019</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>Deriving value for &amp; from adaption of Cloud CRM</td>
                    <td>28th International Conf of IAMOT</td>
                    <td>07-11 Apr 2019</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>New Paradigm of CRM in Digital ERA </td>
                    <td>MECM 2019</td>
                    <td>18-19 Jan 2019</td>
                  </tr>
                  <tr>
                    <td>Surajit Ghosh</td>
                    <td>Barometer</td>
                    <td>2nd Prestige Institue of Global Case Competition</td>
                    <td>04 Jan 2019</td>
                  </tr>
                  <tr>
                    <td>Sridhar Vaithianathan</td>
                    <td>Adpelz digital: Defining digital advertising</td>
                    <td>ICBM's 6TH International Case Conference</td>
                    <td>29 Dec 2018</td>
                  </tr>
                  <tr>
                    <td>Sridhar Vaithianathan</td>
                    <td>
                      Text Analytics Approach to streamline Hospital Operations
                    </td>
                    <td>
                      6th Int Conference on Business Analytics and Intelligence
                    </td>
                    <td>20-22 Dec 2018</td>
                  </tr>
                  <tr>
                    <td>Sridhar Vaithianathan</td>
                    <td>
                      What you see is untrue! What you hear is a Lie! AI is the
                      only Truth!!!
                    </td>
                    <td>
                      6th International Conference on Business Analytics and
                      Intelligence 2018
                    </td>
                    <td>20-22 Dec 2018</td>
                  </tr>
                  <tr>
                    <td>Sourabh Bhattachraya</td>
                    <td>
                      Analysis of single-server-two-phase queue with customer
                      looping
                    </td>
                    <td>
                      XII Annual International Conference pf the Scoiety of
                      Operations Management
                    </td>
                    <td>20-22 Dec 2018</td>
                  </tr>
                  <tr>
                    <td>Kalyana C.Chejarla</td>
                    <td>
                      Theme on Digitalization and Flexibility for Organizational
                      Management and Transformation
                    </td>
                    <td>GLOGIFT 18</td>
                    <td>18-20 Dec 2018</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Books */}
        <div className="tab-content container mt-4">
          <div
            className="tab-pane fade bg-white p-4 rounded-4 "
            id="tab-books"
            role="tabpanel"
          >
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Author Name</th>
                    <th>Name of the Book</th>
                    <th>Chapter Edited in the Book</th>
                    <th> published</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Khalilullah Mohammed Baharul Islam, Asif Khan, Archan
                      Mitra
                    </td>
                    <td>
                      Handbook of Human Factors and Ergonomics in Contemporary
                      Business
                    </td>
                    <td>
                      {" "}
                      Human Factors and Ergonomics in Contemporary Business
                    </td>
                    <td>CRC Press</td>
                    <td>2025-26</td>
                  </tr>
                  <tr>
                    <td>K M Baharul Islam</td>
                    <td>Popular Culture in South Asian Context</td>
                    <td>Tales of Love, Passion, Murder, and History</td>
                    <td>Routledge India</td>
                    <td>2025-26</td>
                  </tr>
                  <tr>
                    <td>
                      K. M. Baharul Islam, Archan Mitra, Asif Khan & Rajesh
                      Sisodia{" "}
                    </td>
                    <td>
                      Making Democratic Decentralization Work in South Asia.
                      South Asian Public Administration
                    </td>
                    <td>
                      Decentralization Dialogues: A Bibliometric Exploration of
                      Governance and Civic Dynamics in South Asia
                    </td>
                    <td>Springer</td>
                    <td>2025-26</td>
                  </tr>
                  <tr>
                    <td>Krishna Dixit</td>
                    <td>Knowledge Management in International Business</td>
                    <td>Reference Module in Social Sciences</td>
                    <td>Elsevier</td>
                    <td>2024-25</td>
                  </tr>
                  <tr>
                    <td>Krishna Dixit, Nandini Varshney, Reshmi Manna </td>
                    <td>
                      Start-Up Ecosystem Through the Lens of Action Research
                    </td>
                    <td>
                      Industry 4.0 and Advanced Manufacturing, Volume 2. I-4AM
                      2024. Lecture Notes in Mechanical Engineering
                    </td>
                    <td>Springer</td>
                    <td>2024-25</td>
                  </tr>
                  <tr>
                    <td>
                      Anoop S. Kumar, S. Anandarao, Steven Raj Padakandla{" "}
                    </td>
                    <td>Financial Markets, Climate Risk and Renewables.</td>
                    <td>
                      Exploring the Volatility Spillover Dynamics Among
                      Non-fungible Token Coins and Bitcoin
                    </td>
                    <td>Springer</td>
                    <td>2024-25</td>
                  </tr>
                  <tr>
                    <td>Nandini Varshney, Krishna Dixit</td>
                    <td>Reference Module in Social Sciences</td>
                    <td>Combining KM and Technological Innovation</td>
                    <td>Elsevier</td>
                    <td>2024-25</td>
                  </tr>
                  <tr>
                    <td>Krishna Dixit, Nandini Varshney</td>
                    <td>Reference Module in Social Sciences</td>
                    <td>
                      The Role of Knowledge Management in SMEs׳ Performance: A
                      Viewpoint
                    </td>
                    <td>Elsevier</td>
                    <td>2024-25</td>
                  </tr>
                  <tr>
                    <td>Sai Shyam Dusetti &amp; Indranil Ghosh</td>
                    <td>Communications in Computer and Information Science</td>
                    <td>
                      Prediction and Deeper Analysis of Market Fear in
                      Pre-COVID-19, COVID- 19 and Russia-Ukraine Conflict: A
                      Comparative Study of Facebook Prophet, Uber Orbit and
                      Explainable AI
                    </td>
                    <td>
                      Computational Intelligence in Communications and Business
                      Analytics Book Series of Springer - 30 Nov 2023
                    </td>
                    <td>2023-24</td>
                  </tr>
                  <tr>
                    <td>Ganesh Mahadevan &amp; Kalyana Chejarla</td>
                    <td>
                      Lean Management for Small and Medium Sized Enterprises:
                      Adopting Operations to Changing Business Environment
                    </td>
                    <td>-</td>
                    <td>Springer</td>
                    <td>2022-23</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      International conference on Interdisciplinary Research in
                      Technology and Management (IRTM)
                    </td>
                    <td>Comparative Study of Sentiment Analysis Techniques</td>
                    <td>Conference Proceedings ebook by Taylor and Francis</td>
                    <td>2020-21</td>
                  </tr>
                  <tr>
                    <td>Esha Saha</td>
                    <td>
                      The Big Data-Driven Digital Economy: Artificial and
                      Computational Intelligence by Abdalmuttaleb M. A. Musleh
                      Al-Sartawi
                    </td>
                    <td>
                      Utilizing Blockchain Technology to Manage Functional Areas
                      in Healthcare Systems
                    </td>
                    <td>Springer</td>
                    <td>2020-21</td>
                  </tr>
                  <tr>
                    <td>Preeti Sharma</td>
                    <td>
                      International conference on Interdisciplinary Research in
                      Technology and Management (IRTM)
                    </td>
                    <td>
                      Why Citizen’s Resist Contact Tracing Apps: Factors
                      affecting Adoption of Aarogya Setu
                    </td>
                    <td>Conference Proceedings ebook by Taylor and Francis</td>
                    <td>2020-21</td>
                  </tr>
                  <tr>
                    <td>
                      Dr Oum Kumari, Dr Mahesh Ramalingam &amp; Dr Gargi Sharma
                    </td>
                    <td>
                      Entrepreneurship Innovations and Role in Digital Era by Ms
                      Mukta Goyal and Dr Shipra Jain
                    </td>
                    <td>Entrepreneurship and Solar Energy Technologies</td>
                    <td>ABS Books published in March 2021</td>
                    <td>2020-21</td>
                  </tr>
                  <tr>
                    <td>Pavan Kumar Balivada</td>
                    <td>
                      Recent Advances in Science &amp; Technology Research by M.
                      Rafatullah (Ed.)
                    </td>
                    <td>
                      Studies on Development of Leadership Competencies through
                      training activities
                    </td>
                    <td>Book Publisher International</td>
                    <td>2020-21</td>
                  </tr>
                  <tr>
                    <td>Farrah Zeba, Musarrat Shaheen, &amp; Rambalak Yadav</td>
                    <td>
                      M-Commerce Experiencing the Phygital Retail Edited by
                      Punitha Duhan &amp; Anurag Singh
                    </td>
                    <td>
                      M–Commerce at the Bottom of the Pyramid: Insights from
                      Asia
                    </td>
                    <td>
                      Apple Academic Press, CRC Press Taylor 7 Francis Group
                    </td>
                    <td>2019-20</td>
                  </tr>
                  <tr>
                    <td>Manoj Das</td>
                    <td>New Age Aadmissions Strategies in Buisness Schools</td>
                    <td>
                      Future of Business Education and Admission Challenges
                    </td>
                    <td>IGI Global Publishing</td>
                    <td>2018-19</td>
                  </tr>
                  <tr>
                    <td>Nikhil Rastogi</td>
                    <td>An Investment Starter</td>
                    <td />
                    <td>BS Publication</td>
                    <td>2018-19</td>
                  </tr>
                  <tr>
                    <td>Dr Preeti Sharma and Promita Shakya</td>
                    <td>
                      Digital Innovation Meeting the Business Challenges by Dr
                      Satya Prasad VK, Dr Tanmoy De, and Mr Rahul Jain
                    </td>
                    <td>
                      Application of Sentiment Analysis and Text Visulaization
                    </td>
                    <td>Excel India Publisher</td>
                    <td>2018-19</td>
                  </tr>
                  <tr>
                    <td>
                      Gupta, Nitin, Balaji, M.S. and Roy, Sanjit Kumar (2016)
                    </td>
                    <td>
                      Asia Branding - Connecting Brands, Consumers and Companies
                      by Bang Nguyen, TC. Melewar, Don E Schultz Macmillan
                      Education UK
                    </td>
                    <td>
                      Impact of Cultural Factors on Indian Consumers’ Brand
                      Preference
                    </td>
                    <td>Palgrave Macmillan</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>M Gopinath Reddy, B Suresh Reddy and P Steven Raj</td>
                    <td>
                      Climate Change and Sustainable Development by RK Mishra,
                      P.S Janaki Krishna and Ch Lakshmi Kumari
                    </td>
                    <td>
                      Reduction in GHG Emission through Sustainable Production
                      of Biofuels: Is it a Viable Opion?
                    </td>
                    <td>Academic Foundation</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>Sourabh Bhattacharya &amp; Surajit Ghosh</td>
                    <td>Supply Chain Management Case Book by Chuck Munson</td>
                    <td>Global Pharma: Managing Uncertainity</td>
                    <td>FT Press</td>
                    <td>2015-16</td>
                  </tr>
                  <tr>
                    <td>Surajit Ghosh Dastidar &amp; Anish Purkaystha</td>
                    <td>
                      Optimizing Business Growth – Strategies for Scaling Up by
                      GD Sardana and Tojo Thatchenkery
                    </td>
                    <td>Bank Value</td>
                    <td>Bloomsbury Publication</td>
                    <td>2015-16</td>
                  </tr>
                  <tr>
                    <td>Dr. Surajit Ghosh Dastidar</td>
                    <td>
                      Indian Management Cases by Vinodh Sahay and PRS Sarma
                    </td>
                    <td>
                      Youth for Action (YFA) Recognising 'Women' Formers for
                      Poverty Allevuiation
                    </td>
                    <td>ET Cases</td>
                    <td>2015-16</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Magazine */}
        <div className="tab-content container mt-4">
          <div
            className="tab-pane fade bg-white p-4 rounded-4 "
            id="tab-magazines"
            role="tabpanel"
          >
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>SNo</th>
                    <th>Author Name</th>
                    <th>Title of the article</th>
                    <th>Publisher</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sourabh Bhattacharya</td>
                    <td>
                      GenAI and the Future of Logistics Predictive, Adaptive,
                      Intelligent
                    </td>
                    <td>Supply Chain Tribe by Celerity</td>
                    <td>2025-26</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Sai Teja V.V(IMT student), Dr. Kalyana C. Chejarla</td>
                    <td>
                      Pure vs. hybrid EV makers: What does it take to win the
                      race?
                    </td>
                    <td>Supply Chain Management Review</td>
                    <td>2024-25</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Tumpa Dey</td>
                    <td>
                      Leadership Lessons from Life the Life of Bruce Springsteen
                    </td>
                    <td>The SBIL Edge</td>
                    <td>2020-21</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Steven Raj Padakandla &amp; Niranjan Sahoo</td>
                    <td>
                      India’s China FDA Gamble Protectionism will not make India
                      a global power
                    </td>
                    <td>The Diplomat Magazine</td>
                    <td>2019-20</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Steven Raj &amp; Ritesh Kumar Singh</td>
                    <td>
                      The Biggest Obstacle to India's Government Growth is the
                      Governments' Fraught Relationshp with the Private Sector
                    </td>
                    <td>Atlantic Magazine</td>
                    <td>2019-20</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Ritesh Kumar Dubey &amp; Anubhav Tiwari</td>
                    <td>
                      Producing Research Creating an Academic Industry
                      Collaborative Platform
                    </td>
                    <td>
                      Indian Chamber of Commerce Quarterly newsletter on the
                      Start-up-Ecosystem in India
                    </td>
                    <td>2019-20</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Kalyana C.Chejarla</td>
                    <td>
                      Pharmaceutical Supply Chain Vulnerabilities: Role of
                      Inofmration Technology
                    </td>
                    <td>
                      Materials Management Review A Montly Magazine by Indian
                      Institute of Material Management
                    </td>
                    <td>2019-20</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Steven Raj Padakandla &amp; Ritesh Kumar Singh</td>
                    <td>
                      As Tensions Rise Between India and the US, Are We Reaching
                      a Point of No Return
                    </td>
                    <td>Brink News</td>
                    <td>2019-20</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Steven Raj</td>
                    <td>
                      What Problems Will Modi Government Tackle in Its First 100
                      Days
                    </td>
                    <td>Brink News</td>
                    <td>2018-19</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Surajit Ghosh Dastidar</td>
                    <td>
                      An Academician’s Dilemma: the Jump Into Data Science
                    </td>
                    <td>Analytics India Magazine</td>
                    <td>2018-19</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Surajit Ghosh Dastidar</td>
                    <td>
                      Pharma and Healthcare Analytics is going to be the next
                      big thing in India
                    </td>
                    <td>Analytics India Magazine</td>
                    <td>2018-19</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Steven Raj</td>
                    <td>
                      What Foreign investors need to know about India's General
                      Elections
                    </td>
                    <td>Brink News</td>
                    <td>2018-19</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Shabnam Priyadasrshini</td>
                    <td>Postive Side of Organization Politics</td>
                    <td>Business Manager, HR Magazine</td>
                    <td>2018-19</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Dhananjay Singh</td>
                    <td>Selecting the right MBA specialization</td>
                    <td>Careers360</td>
                    <td>2018-19</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>
                      Nikhil Rastogi &amp; Chakarapani Chaturvedula and Nupur
                      Pavan Bang
                    </td>
                    <td>Is India ‘s QIP Destroying Investor Wealth ?”</td>
                    <td>GARP</td>
                    <td>2017-18</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Dhananjay Singh</td>
                    <td>The Power of MBA is Still Intact</td>
                    <td>Careers360</td>
                    <td>2017-18</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Debendra P Kar</td>
                    <td>
                      HR Analytics: the next frontier for Workplace
                      Transformation
                    </td>
                    <td>Business Manager, HR Magazine</td>
                    <td>2017-18</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Debendra P Kar</td>
                    <td>Factors of Workplace Empowerment</td>
                    <td>Business Manager, HR Magazine</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Nikhil Rastogi</td>
                    <td>Why do we need Life Insirance</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Nikhil Rastogi</td>
                    <td>Achieving Financial Goals</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>Nikhil Rastogi</td>
                    <td>Income life-cycle and Risk Appetite</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>Nikhil Rastogi</td>
                    <td>Emergency Fund: Goal No.1</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>Nikhil Rastogi</td>
                    <td>Retirement Goal Planning</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>Nikhil Rastogi</td>
                    <td>Portfolio Rebalancing 101</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>Nikhil Rastogi</td>
                    <td>Investing Biases: Mental Accounting and Sunk Costs</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>Nikhil Rastogi</td>
                    <td>Anchoring Bias</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>Nikhil Rastogi</td>
                    <td>The “Dopamine” Factor</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>Nikhil Rastogi</td>
                    <td>Effect of Demonetization on Stock Prices</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>Nikhil Rastogi</td>
                    <td>
                      Asset Allocation of Indian households before and after
                      demonetization
                    </td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>Nikhil Rastogi</td>
                    <td>
                      How much are you worth: Preparing your own Balance Sheet
                    </td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>Nikhil Rastogi</td>
                    <td>Bank Fixed Deposits: The Illusion of Safety</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>Nikhil Rastogi</td>
                    <td>Preventing the Herd Behaviour0 in Investment</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>Nikhil Rastogi</td>
                    <td>Finding great investment opportunity</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>Nikhil Rastogi</td>
                    <td>Meeting Financial Goals</td>
                    <td>Fundzpark</td>
                    <td>2016-17</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
