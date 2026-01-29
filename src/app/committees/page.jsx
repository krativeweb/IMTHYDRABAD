"use client";

import PlacementAlliances from "@/sections/PlacementAlliances.jsx";
import Link from "next/link";
import { useEffect } from "react";

export default function Committees() {
  // Embedded committee data
  const committeeData = {
    antiRagging: {
      policy: {
        title: "Anti-Ragging",
        content: `
          <p><strong>Prevention and Prohibition of Ragging</strong></p>
          <p>It has been Institute’s endeavor to keep it free from any act of ragging among students on its premises or outside. All students are hereby advised not to indulge in any act of ragging including any conduct by any student, which has the effect of teasing, treating or handling with rudeness a fresher or any other student or an act of indiscipline causing annoyance, hardship or psychological harm, etc. to any fresher or any other student.</p>
          <p><strong>I. Ragging constitutes one or more of any of the following acts </strong></p>
          <ul class="cir">
            <li>Any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student.</li>
            <li>Indulging in rowdy or undisciplined activities by any student or students, which causes or is likely to cause annoyance, hardship, physical or psychological harm or to raise fear or apprehension thereof in any fresher or any other student.</li>
            <li>Asking any student to do any act which such student will not in the ordinary course do and which has the effect of causing or generating a sense of shame, or torment or embarrassment so as to adversely affect the physique or psyche of such fresher or any other student.</li>
            <li>Any act by a senior student that prevents, disrupts or disturbs the regular academic activity of any other student or a fresher.</li>
            <li>Exploiting the services of a fresher or any other student for completing the academic tasks assigned to an individual or a group of students.</li>
            <li>Any act of financial extortion or forceful expenditure burden put on a fresher or any other student by students.</li>
            <li>Any act of physical abuse including all variants of it: sexual abuse, homosexual assaults, and stripping, forcing obscene and lewd acts, gestures, causing bodily harm or any other danger to health or person.</li>
            <li>Any act or abuse by spoken words, emails, posts, public insults which would also include deriving perverted pleasure, vicarious or sadistic thrill from actively or passively participating in the discomfiture to fresher or any other student;</li>
            <li>Any act that affects the mental health and self-confidence of a fresher or any other student with or without an intent to derive a sadistic pleasure or showing off power, authority or superiority by a student over any fresher or any other student.</li>
          </ul>
          <p><strong>II. Administrative action in the event of ragging </strong></p>
          <p>1. The Anti-Ragging Committee of the institution shall take an appropriate decision, in regard to punishment or otherwise, depending on the facts of each incident of ragging and nature and gravity of the incident of ragging.</p>
          <p>2. The Anti-Ragging Committee (which is being constituted through a separate order) may depending on the nature and gravity of the guild established by the Anti-Ragging Squad, award, to those found guilty, one or more of the following punishments, namely:</p>
          <ul class="cir">
            <li>Cancellation of admission</li>
            <li>Suspension from attending classes</li>
            <li>Withholding/withdrawing scholarship/fellowship and other benefits</li>
            <li>Debarring from appearing in any test/examination or other evaluation process</li>
            <li>Withholding results</li>
            <li>Debarring from representing the institution in any regional, national or international meet, tournament, youth festival, etc.</li>
            <li>Suspension/expulsion from the hostel</li>
            <li>Rustication from the institution for period ranging from 1 to 3 trimesters</li>
            <li>Expulsion from the institution and consequent debarring from admission to any other institution.</li>
            <li>Collective punishment: when the persons committing or abetting the crime of ragging are not identified, the institution shall resort to collective punishment as a deterrent to ensure community pressure on the potential raggers.</li>
          </ul>
        `,
      },
      committee: {
        title: "Anti-Ragging Committee",
        members: [
          {
            sno: 1,
            name: "Prof (Dr) K M Baharul Islam",
            designation: "Director",
            phone: "8392811111",
            landline: "08414671661",
          },
          {
            sno: 2,
            name: "Prof. Romina Mathew",
            designation: "Chairperson- Disciplinary",
            phone: "9246295292",
            landline: "08414671689",
          },
          {
            sno: 3,
            name: "Prof. Vinay Kumar K",
            designation: "Associate Dean (Accreditation & Rankings)",
            phone: "8639342389",
            landline: "08414671688",
          },
          {
            sno: 4,
            name: "Prof. Pushpesh Pant",
            designation: "Warden- Boys Hostel",
            phone: "8827218443",
            landline: "08414671602",
          },
          {
            sno: 5,
            name: "Prof. Irfan Ahmad Shah",
            designation: "Warden- Boys Hostel",
            phone: "9567452826",
            landline: "08414671601",
          },
          {
            sno: 6,
            name: "Prof. Sanchari Guha Niyogi",
            designation: "Warden- Girls Hostel",
            phone: "8584968955",
            landline: "08414671625",
          },
          {
            sno: 7,
            name: "Mr. Raj Kumar Meena",
            designation: "Chief Admin. Officer",
            phone: "9582805564",
            landline: "08414671683",
          },
          {
            sno: 8,
            name: "Ms. Jaya Vamshi",
            designation: "Asst. Manager-HR",
            phone: "9885770267",
            landline: "08414671656",
          },
          {
            sno: 9,
            name: "Dr. Mamatha Rahuveer Achanta (NGO representative)",
            designation: "Social Worker",
            phone: "9849418592",
            landline: "",
          },
          {
            sno: 10,
            name: "Mr. K. Srinivasa Rao",
            designation: "ACP - Shamshabad Police Station",
            phone: "9490617481",
            landline: "",
          },
          {
            sno: 11,
            name: "Mr. A. Ravindra Seshu (Media Representative)",
            designation: "Senior Reporter, Khammam Dist.",
            phone: "9063718675",
            landline: "",
          },
          {
            sno: 12,
            name: "Parent Representative",
            designation: "Hyderabad",
            phone: "9391424271",
            landline: "",
          },
          {
            sno: 13,
            name: "Mr. Ekansh Uniyal (Sr. Student Representative)",
            designation: "IMT Hyderabad",
            phone: "7020132115",
            landline: "",
          },
          {
            sno: 14,
            name: "Ms. Priya Arya (Sr. Student Representative)",
            designation: "IMT Hyderabad",
            phone: "9810302199",
            landline: "",
          },
          {
            sno: 15,
            name: "Mr. Shailendra Gautam (Jr. Student Representative)",
            designation: "IMT Hyderabad",
            phone: "7078587873",
            landline: "",
          },
        ],

        responsibilities: `
          <p>The Anti-Ragging squad shall be responsible for maintaining vigil, oversight and patrolling functions and shall remain mobile, alert and active at all times.</p>
          <p>It shall be the duty of the Anti-Ragging Squad to make surprise raids on hostels and other places vulnerable to incidents of and having the potential of, ragging and shall be empowered to inspect such places.</p>
          <p>It shall be the duty of the Anti-Ragging Squad to conduct an on-the-spot enquiry into any incident of ragging referred to it by any student and the enquiry report along with the recommendations shall be submitted to the Anti-Ragging Committee of the Institute for action as specified in the Policy.</p>
          <p>In case of an appeal against the order of punishment by the Anti-Ragging Committee, the discretionary power shall lie with the Director.</p>
          <p>This policy comes in force from the date of issue of this Circular as an immediate measure to prohibit ragging in the Institute.</p>
        `,
      },
    },
    internalComplaints: {
      title: "Internal Complaints Committee",
      content: `
        <p class="lead">The institute has constituted an "Internal Complaints Committee" (Prevention of Sexual Harassment) to investigate and to redress grievances relating to sexual harassment at workplace at IMT, Hyderabad campus or at any official off campus activity is constituted as follows:</p>
      `,
     members: [
  {
    sno: 1,
    name: "Prof. Aindrilla Chatterjee - <strong>Chairperson</strong>",
    profession: "Teaching",
    phone: "9849692730",
    address: "IMT, Hyderabad",
  },
  {
    sno: 2,
    name: "Prof. Akhila V - <strong>Co-Chairperson</strong>",
    profession: "Teaching",
    phone: "7842701485",
    address: "IMT, Hyderabad",
  },
  {
    sno: 3,
    name: "Prof. Pushpesh Pant",
    profession: "Teaching",
    phone: "8827218443",
    address: "IMT, Hyderabad",
  },
  {
    sno: 4,
    name: "Dr. Mamatha Raghuveer Achanta (NGO Representative)",
    profession: "Social Worker",
    phone: "9849418592",
    address: "Begumpet, Hyderabad",
  },
  {
    sno: 5,
    name: "Mrs. K. Sita Mahalakshmi",
    profession: "Advocate",
    phone: "8008239807",
    address: "Hyderabad",
  },
  {
    sno: 6,
    name: "Mr. Akash - (Sr. Student Representative)",
    profession: "Sr. Student Representative",
    phone: "-",
    address: "IMT, Hyderabad",
  },
  {
    sno: 7,
    name: "Ms. Ashmita Banda - (Sr. Student Representative)",
    profession: "Sr. Student Representative",
    phone: "-",
    address: "IMT, Hyderabad",
  },
  {
    sno: 8,
    name: "Ms. Jaysree SS - (Jr. Student Representative)",
    profession: "Jr. Student Representative",
    phone: "-",
    address: "IMT, Hyderabad",
  },
],

    },
    grievanceRedressal: {
      title: "Grievance Redressal Committee",
      content: `
        <p class="lead">The institute has constituted an "Internal Complaints Committee" (Prevention of Sexual Harassment) to investigate and to redress grievances relating to sexual harassment at workplace at IMT, Hyderabad campus or at any official off campus activity is constituted as follows:</p>
      `,
  members: [
  {
    sno: 1,
    name: "Prof. Nikhil Rastogi, <br/>(Professor-Finance) – <strong>Chairperson</strong>",
    profession: "Teaching",
    phone: "7306874901",
    address: "IMT, Hyderabad",
  },
  {
    sno: 2,
    name: "Prof. Akhila V, <br/>(Asst. Professor-HRM), <strong>Co-Chairperson</strong>",
    profession: "Teaching",
    phone: "7842701485",
    address: "IMT, Hyderabad",
  },
  {
    sno: 3,
    name: "Prof. Musarrat Shaheen, <br/>(Asst. Professor-HRM)",
    profession: "Teaching",
    phone: "8978219231",
    address: "IMT, Hyderabad",
  },
  {
    sno: 4,
    name: "Ms. Jaya Vamshi",
    profession: "Non-Teaching",
    phone: "9885770267",
    address: "IMT, Hyderabad",
  },
  {
    sno: 5,
    name: "Dr. Mamatha Raghuveer Achanta (NGO Representative)",
    profession: "Social Worker",
    phone: "9849418591",
    address: "Begumpet, Hyderabad",
  },
]

    },
    antiDrug: {
      title: "Anti Drug Committee",
      content: `
        <p>Anti-Drug Committee is constituted with the following members.</p>
        <p><b>Functions and Responsibilities:</b></p>
        <p>To spearhead the Anti-Drug campaign and be the tool to realize a drug-free campus</p>
        <p>To be guided in its functioning by the overall objective of the Anti-Drug Policy of the Institute</p>
      `,
      members: [
        {
          sno: 1,
          category: "Two faculty members (Appointed by Academic Senate)",
          names: [
            {
              name: "Prof. (Dr.) C. Chakrapani, Dean-Academics",
              phone: "08414671669",
            },
            {
              name: "Prof. (Dr.) Vinay Kumar, Associate Dean (Accreditation & Rankings)",
              phone: "08414671688",
            },
          ],
        },
        {
          sno: 2,
          category: "Two Non-Teaching members",
          names: [
            {
              name: "Mr. Kavi Bhushan Pandey, Manager-Administration & Maintenance",
              phone: "08414671654",
            },
            {
              name: "Mr. Sarat Kumar, Manager, Academic Programs Office",
              phone: "08414671662",
            },
          ],
        },
        {
          sno: 3,
          category: "Representative from Institute’s Security",
          names: [
            {
              name: "Mr. Binod Bihari Raul, Supervisor - Campus Maintenance",
              phone: "08414671654",
            },
          ],
        },
        {
          sno: 4,
          category: "Representative from local police station",
          names: [
            {
              name: "Mr. K. Narender Reddy, Inspector of Police, Shamshabad Police Station",
              phone: "9490617213",
            },
          ],
        },
        {
          sno: 5,
          category: "Hostel warden if hostel facility available",
          names: [
            {
              name: "Prof. (Dr.) P. Tumpa Dey, Assistant Professor, (Girls Hostel Warden)",
              phone: "08414671695",
            },
            {
              name: "Prof. (Dr.) Pushpesh Pant, Assistant Professor, (Boys Hostel Warden)",
              phone: "08414671602",
            },
          ],
        },
        {
          sno: 6,
          category:
            "One representative from students from each stream available in the Institute or as suits the Institute",
          names: [
            { name: "Mr. Hritik Yadav, Senior Student", phone: "8830050891" },
          ],
        },
        {
          sno: 7,
          category:
            "Representative from university medical unit/local hospital",
          names: [{ name: "Dr. Sreenath Reddy, MBBS", phone: "9133152377" }],
        },
        {
          sno: 8,
          category:
            "One representative from Counseling and Psychological Services of the Institute/Health Department/NGO",
          names: [
            { name: "Ms. Priya, Student Counsellor", phone: "08414671650" },
          ],
        },
      ],
    },
  };

  // Initialize dependencies
  useEffect(() => {
    // Import jQuery and Owl Carousel
    import("jquery").then(($) => {
      window.$ = window.jQuery = $.default;
      import("owl.carousel").then(() => {
        // Initialize Owl Carousel for Placement Alliances
        window.$("#placement-carousel").owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 4 },
          },
        });
      });
    });

    // Initialize AOS
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
        background: url('/media/banners/faculty.webp');
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

      /* Nav Pills */
      .nav-pills .nav-link.active,
      .nav-pills .show > .nav-link {
        border-radius: 50rem !important;
        background: #ffc107 !important;
        color: #333 !important;
        transition: all 0.3s !important;
      }
      .nav-pills .nav-link {
        border-radius: 30px;
        background-color: #e9ecef;
        color: #333;
      }

      /* Owl Carousel */
      .owl-carousel .item {
        background: #ffffff;
        padding: 30px;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.3s;
      }
      .owl-carousel .item:hover {
        transform: translateY(-5px);
      }
      .owl-carousel .item img {
        max-height: 80px;
        object-fit: contain;
      }

      /* Custom Card */
      .custom-card {
        transition: background-color 0.3s ease, transform 0.3s ease;
        cursor: pointer;
      }
      .custom-card:hover {
        background-color: #ffc107;
        border: 1px solid #03255f;
        transform: translateY(-5px);
      }

      /* Table Styling */
      .table-responsive {
        margin-top: 1rem;
      }
      .table th,
      .table td {
        vertical-align: middle;
      }
      .thead-dark {
        background-color: #08317a;
        color: white;
      }
      .table-striped tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
      }
      .table-hover tbody tr:hover {
        background-color: rgba(0, 0, 0, 0.075);
      }
      .table-bordered {
        border: 1px solid #dee2e6;
      }
      .table-bordered th,
      .table-bordered td {
        border: 1px solid #dee2e6;
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
            background: "url('/media/banners/faculty.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
            backgroundPosition: "center !important",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Committees</h2>
          <p className="text-white">
            Governed by transparency, guided by integrity. <br />
            Our committees ensure academic quality, accountability, and ethical
            decision-making across every function.
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
                  Committees
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section id="committees" className="py-5">
        <div className="container">
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Committees
          </h2>

          {/* Tabs Navigation */}
          <ul
            className="nav nav-pills justify-content-center mb-4"
            id="CommitteesTabs"
            role="tablist"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link active"
                id="long-tab"
                data-bs-toggle="pill"
                data-bs-target="#long"
                type="button"
                role="tab"
                aria-controls="long"
                aria-selected="true"
              >
                Anti-Ragging
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
                Internal Complaints Committee
              </button>
            </li>
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link"
                id="Grievance-tab"
                data-bs-toggle="pill"
                data-bs-target="#Grievance"
                type="button"
                role="tab"
                aria-controls="Grievance"
                aria-selected="false"
              >
                Grievance Redressal Committee
              </button>
            </li>
            <li className="nav-item mx-1" role="presentation">
              <button
                className="nav-link"
                id="Anti-tab"
                data-bs-toggle="pill"
                data-bs-target="#Anti"
                type="button"
                role="tab"
                aria-controls="Anti"
                aria-selected="false"
              >
                Anti Drug Committee
              </button>
            </li>
          </ul>
          <hr />

          {/* Tabs Content */}
          <div
            className="tab-content card bg-light p-4"
            id="CommitteesTabsContent"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Anti-Ragging */}
            <div
              className="tab-pane fade show active"
              id="long"
              role="tabpanel"
              aria-labelledby="long-tab"
            >
              <h4
                className="fw-semibold mb-4 text-center"
                style={{ color: "#08317a" }}
              >
                Anti-Ragging
              </h4>

              {/* Inner Tabs Navigation */}
              <ul
                className="nav nav-pills justify-content-center mb-4"
                id="flpInnerTabs"
                role="tablist"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link active"
                    id="flp-overview-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#flp-overview"
                    type="button"
                    role="tab"
                    aria-controls="flp-overview"
                    aria-selected="true"
                  >
                    Policy
                  </button>
                </li>
                <li className="nav-item mx-1" role="presentation">
                  <button
                    className="nav-link"
                    id="flp-objectives-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#flp-objectives"
                    type="button"
                    role="tab"
                    aria-controls="flp-objectives"
                    aria-selected="false"
                  >
                    Committee
                  </button>
                </li>
              </ul>

              {/* Inner Tabs Content */}
              <div className="tab-content" id="flpInnerTabsContent">
                {/* Policy */}
                <div
                  className="tab-pane fade show active"
                  id="flp-overview"
                  role="tabpanel"
                  aria-labelledby="flp-overview-tab"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: committeeData.antiRagging.policy.content,
                    }}
                  />
                </div>

                {/* Committee */}
                <div
                  className="tab-pane fade"
                  id="flp-objectives"
                  role="tabpanel"
                  aria-labelledby="flp-objectives-tab"
                >
                  <div className="container">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col" style={{ width: "10%" }}>
                              Sno.
                            </th>
                            <th scope="col">Name of the Committee Member</th>
                            <th scope="col">Designation</th>
                            <th scope="col" style={{ width: "15%" }}>
                              Phone No.
                            </th>
                            <th scope="col" style={{ width: "15%" }}>
                              Landline No.
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {committeeData.antiRagging.committee.members.map(
                            (member) => (
                              <tr key={member.sno}>
                                <td>{member.sno}</td>
                                <td>{member.name}</td>
                                <td>{member.designation}</td>
                                <td>{member.phone}</td>
                                <td>{member.landline}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="mt-4"
                      dangerouslySetInnerHTML={{
                        __html:
                          committeeData.antiRagging.committee.responsibilities,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Internal Complaints Committee */}
            <div
              className="tab-pane fade"
              id="firsttime"
              role="tabpanel"
              aria-labelledby="firsttime-tab"
            >
              <div className="container mt-4">
                <h4
                  className="fw-semibold mt-4 mb-3 text-center"
                  style={{ color: "#08317a" }}
                >
                  Internal Complaints Committee
                </h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: committeeData.internalComplaints.content,
                  }}
                />
                <div className="table-responsive mt-4">
                  <table className="table table-striped table-bordered">
                    <thead className="table">
                      <tr>
                        <th scope="col" style={{ width: "5%" }}>
                          Sno.
                        </th>
                        <th scope="col" style={{ width: "30%" }}>
                          Name of the Committee Member
                        </th>
                        <th scope="col" style={{ width: "20%" }}>
                          Profession
                        </th>
                        <th scope="col" style={{ width: "15%" }}>
                          Phone
                        </th>
                        <th scope="col" style={{ width: "30%" }}>
                          Address
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {committeeData.internalComplaints.members.map(
                        (member) => (
                          <tr key={member.sno}>
                            <td>{member.sno}</td>
                            <td
                              dangerouslySetInnerHTML={{ __html: member.name }}
                            />
                            <td>{member.profession}</td>
                            <td>{member.phone}</td>
                            <td>{member.address}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Grievance Redressal Committee */}
            <div
              className="tab-pane fade"
              id="Grievance"
              role="tabpanel"
              aria-labelledby="Grievance-tab"
            >
              <div className="container mt-4">
                <h4
                  className="fw-semibold mt-4 mb-3 text-center"
                  style={{ color: "#08317a" }}
                >
                  Grievance Redressal Committee
                </h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: committeeData.grievanceRedressal.content,
                  }}
                />
                <div className="table-responsive mt-4">
                  <table className="table table-hover table-bordered">
                    <thead className="table">
                      <tr>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ width: "5%" }}
                        >
                          Sno.
                        </th>
                        <th scope="col" style={{ width: "35%" }}>
                          Name of the Committee Member
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ width: "15%" }}
                        >
                          Profession
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ width: "15%" }}
                        >
                          Phone No.
                        </th>
                        <th scope="col" style={{ width: "30%" }}>
                          Address
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {committeeData.grievanceRedressal.members.map(
                        (member) => (
                          <tr key={member.sno}>
                            <td className="text-center">{member.sno}</td>
                            <td
                              dangerouslySetInnerHTML={{ __html: member.name }}
                            />
                            <td className="text-center">{member.profession}</td>
                            <td className="text-center">{member.phone}</td>
                            <td>{member.address}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Anti Drug Committee */}
            <div
              className="tab-pane fade"
              id="Anti"
              role="tabpanel"
              aria-labelledby="Anti-tab"
            >
              <div className="container mt-4">
                <h4
                  className="fw-semibold mt-4 mb-3 text-center"
                  style={{ color: "#08317a" }}
                >
                  Anti Drug Committee
                </h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: committeeData.antiDrug.content,
                  }}
                />
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead className="table">
                      <tr>
                        <th scope="col" style={{ width: "10%" }}>
                          Sno.
                        </th>
                        <th scope="col" style={{ width: "30%" }}>
                          Category
                        </th>
                        <th scope="col" style={{ width: "60%" }}>
                          Name of the member
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {committeeData.antiDrug.members.map((member) => (
                        <tr key={member.sno}>
                          <td>
                            <p>
                              <strong>{member.sno}</strong>
                            </p>
                          </td>
                          <td>
                            <p>
                              <strong>{member.category}</strong>
                            </p>
                          </td>
                          <td>
                            {member.names.map((name, index) => (
                              <p key={index}>
                                <strong>{name.name}</strong>
                                <br />
                                Ph: {name.phone}
                              </p>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Alliances Section */}
      <section
        className="placement-alliances-section py-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <PlacementAlliances />
      </section>
    </>
  );
}
