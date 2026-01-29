"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function MediaSection() {
  // Initialize AOS and handle tab activation
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize AOS
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
 
      // Custom tab activation script
      const tabs = document.querySelectorAll("#mediaTabs .nav-link");
      tabs.forEach((tab) => {
        tab.addEventListener("shown.bs.tab", (event) => {
          tabs.forEach((t) => {
            t.classList.remove("custom-active-bg");
            t.classList.add("bg-warning", "text-black");
          });
          event.target.classList.add("custom-active-bg");
          event.target.classList.remove("bg-warning", "text-black");
        });
      });

      // Cleanup event listeners
      return () => {
        tabs.forEach((tab) => {
          tab.removeEventListener("shown.bs.tab", () => {});
        });
      };
    }
  }, []);

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
        .custom-active-bg {
          background-color: #022d7c !important;
          color: white !important;
        }

        .faculty-hero {
          background: url("/media/banners/media.webp");
          position: relative;
          background-size: cover;
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

        .faculty-card {
          background: #f8f9fa;
          border: none;
          border-radius: 1.5rem;
        }

        .faculty-img {
          border-radius: 1.2rem;
          transition: transform 0.4s ease;
        }

        .faculty-img:hover {
          transform: scale(1.03);
        }

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
    `,
  }}
/>


      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-2">Media</h2>
          <p className="text-white">
           Here ideas create headlines and achievements inspire stories. <br />
Explore news, features, and insights showcasing our impact on education, industry, and society.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ backgroundColor: "rgb(22 57 119)" }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  Media
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container my-4">
          {/* Media Header */}
          <h1 className="mb-4 text-center fw-bold" style={{ color: "#08317a" }}>
            MEDIA
          </h1>

          {/* Tabs Navigation */}
          <ul className="nav mb-4 flex-wrap justify-content-center gap-3" id="mediaTabs">
            {[
              { id: "2024", label: "MEDIA ROOM 2024" },
              { id: "2022", label: "MEDIA ROOM 2022" },
              { id: "2019", label: "MEDIA ROOM 2019" },
              { id: "2018", label: "MEDIA ROOM 2018" },
              { id: "2016", label: "MEDIA ROOM 2016" },
              { id: "2015", label: "MEDIA ROOM 2015" },
            ].map((tab, index) => (
              <li className="nav-item" key={tab.id}>
                <Link
                  className={`nav-link ${index === 0 ? "active custom-active-bg" : "bg-warning text-black"} rounded-pill`}
                  href={`#${tab.id}`}
                  data-bs-toggle="pill"
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content" id="mediaTabContent">
            {/* 2024 Tab */}
            <div className="tab-pane fade show active" id="2024">
              <div className="container-fluid mt-4">
                <div className="row justify-content-center gap-3">
                  {[
                    "CII and IMT Hyderabad join forces to launch Innovative PGDM Program in Logistics and Supply Chain Management...",
                    "IMT Hyderabad and CII announce the launch of PGDM in Logistics & Supply Chain Management",
                    "CII-IMT jointly announces two-year PGDM in Logistics and Supply Chain Management",
                    "CII And IMT Hyderabad Join Forces To Launch Innovative PGDM Program In Logistics And Supply Chain Management",
                    "CII and IMT Hyderabad join forces to launch Innovative PGDM Program in Logistics and Supply Chain Management.",
                    "CII and IMT Hyderabad join forces to launch Innovative PGDM Program in Logistics and Supply Chain Management",
                  ].map((text, index) => (
                    <div className="col-12 col-sm-6 col-md-3 mb-3 text-center rounded-4 card" key={index}>
                      <Link href="#" className="list-group-item list-group-item-action py-3 d-block">
                        {text}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2022 Tab */}
            <div className="tab-pane fade" id="2022">
              <div className="container-fluid mt-4">
                <div className="row justify-content-center">
                  {[
                    {
                      href: "https://newsindia.vifree.in/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://newsindia.vifree.in/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://lifecarenews.in/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program/amp",
                      text: "https://lifecarenews.in/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program/amp",
                    },
                    {
                      href: "https://financeupdate.in/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://financeupdate.in/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://www.hydnow.in/tag/imt-hyderabad",
                      text: "https://www.hydnow.in/tag/imt-hyderabad",
                    },
                    {
                      href: "https://www.cityairnews.com/content/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://www.cityairnews.com/content/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://aazoopark.com/2022/06/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://aazoopark.com/2022/06/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://khandeshtimes.in/imt-hyderabad-inaugurates-abhyuday-2022-administration-orientation-program",
                      text: "https://khandeshtimes.in/imt-hyderabad-inaugurates-abhyuday-2022-administration-orientation-program",
                    },
                    {
                      href: "https://indtoday.com/imt-hyderabad-inaugurate-abhyudaya-2022",
                      text: "https://indtoday.com/imt-hyderabad-inaugurate-abhyudaya-2022",
                    },
                    {
                      href: "https://www.careerindia.com/news/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program-031997.html",
                      text: "https://www.careerindia.com/news/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program-031997.html",
                    },
                    {
                      href: "https://www.passionateinmarketing.com/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://www.passionateinmarketing.com/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://businessnewsweek.in/education/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://businessnewsweek.in/education/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "http://mediabulletins.com/education/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "http://mediabulletins.com/education/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://m.ap7am.com/amp/pn-7084/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://m.ap7am.com/amp/pn-7084/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://nrinews24x7.com/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://nrinews24x7.com/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://newspatrolling.com/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://newspatrolling.com/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "http://businessnewsthisweek.com/education/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "http://businessnewsthisweek.com/education/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://thenetionalnews.com/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://thenetionalnews.com/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://indiaeducationdiary.in/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://indiaeducationdiary.in/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "https://www.highereducationdigest.com/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                      text: "https://www.highereducationdigest.com/imt-hyderabad-inaugurates-abhyuday-2022-management-orientation-program",
                    },
                    {
                      href: "#",
                      text: "Interview with the Nitin Kumar Jain (Alumni of IMTH)",
                    },
                    {
                      href: "#",
                      text: "Interview with the Ridhima Kumar (Alumni of IMTH)",
                    },
                    {
                      href: "#",
                      text: "Panel Discussion - Navya Media",
                    },
                    {
                      href: "#",
                      text: "Panel Discussion - Business News This Week",
                    },
                    {
                      href: "#",
                      text: "Panel Discussion - Media Bulletins",
                    },
                    {
                      href: "#",
                      text: "Panel Discussion - City Air News",
                    },
                    {
                      href: "#",
                      text: "Panel Discussion - Tech Potential HUb",
                    },
                    {
                      href: "#",
                      text: "Panel Discussion - Passionate In Marketing",
                    },
                    {
                      href: "#",
                      text: "IMT-H and TimesPro Collaboration: Times of India",
                    },
                    {
                      href: "#",
                      text: "IMT Hyderabad Convocation 2022",
                    },
                  ].map((item, index) => (
                    <div className="col-12 col-sm-6 col-md-3 mb-3 text-center" key={index}>
                      <div className="card rounded-4 h-100 p-2">
                        <Link
                          href={item.href}
                          className="list-group-item list-group-item-action py-3 d-block text-dark text-decoration-none"
                          target={item.href !== "#" ? "_blank" : "_self"}
                          rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                        >
                          {item.text}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2019 Tab */}
            <div className="tab-pane fade" id="2019">
              <div className="mt-4 d-flex justify-content-center">
                <div className="list-group text-center w-100">
                  <Link href="#" className="list-group-item list-group-item-action py-3">
                    Article 2019
                  </Link>
                </div>
              </div>
            </div>

            {/* 2018 Tab */}
            <div className="tab-pane fade" id="2018">
              <div className="container-fluid mt-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
                  {[
                    {
                      href: "http://campusutra.com/ContentEvent.aspx?id=3227&name=Managing-the-future,-Kiran-Mazumdar-Shaw,-CMD,-Biocon-Limited--IMT-Hyderabad-Convocation-Speech",
                      text: "campusutra.com – Managing the future, Kiran Mazumdar-Shaw (CMD, Biocon) – IMT Hyderabad Convocation Speech",
                    },
                    {
                      href: "https://samacharpost.in/2018/03/07/data-is-quickly-becoming-21st-centurys-economic-fuel-kiran-mazumdar-shaw-at-imt-hyderabad",
                      text: "samacharpost.in – “Data is quickly becoming 21st century’s economic fuel” – Kiran Mazumdar-Shaw at IMT Hyderabad",
                    },
                    {
                      href: "https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/imt-plans-to-float-start-up-incubator-seeks-aid-from-biocon-chief-kiran-majumdar-shaw/articleshow/63208183.cms?from=mdr",
                      text: "economictimes.indiatimes.com – IMT plans start-up incubator; seeks aid from Biocon chief Kiran Mazumdar-Shaw",
                    },
                    {
                      href: "#",
                      text: "Media Coverage in the Month of December",
                    },
                  ].map((item, index) => (
                    <div className="col" key={index}>
                      <div className="card p-2 rounded-4 text-center h-100">
                        <Link
                          href={item.href}
                          className="list-group-item list-group-item-action py-3 d-block"
                          target={item.href !== "#" ? "_blank" : "_self"}
                          rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                        >
                          {item.text}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2016 Tab */}
            <div className="tab-pane fade" id="2016">
              <div className="container-fluid mt-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
                  {[
                    {
                      href: "#",
                      text: "Ortus",
                    },
                    {
                      href: "#",
                      text: "Supply Chain Analytics",
                    },
                    {
                      href: "#",
                      text: "Alumni Meet",
                    },
                    {
                      href: "http://campusutra.com/ContentEvent.aspx?id=1370&name=For-faculty-&-students-of-IMT-Hyderabad,-running-has-become-a-life-style.-",
                      text: "campusutra.com – “Running has become a lifestyle” @ IMT-Hyderabad",
                    },
                    {
                      href: "https://www.pocketnewsalert.com/2016/09/IMT-Hyderabad-awarded-Best-Upcoming-B-School-assocham.html",
                      text: "pocketnewsalert.com – IMT Hyderabad awarded “Best Upcoming B-School” by ASSOCHAM",
                    },
                    {
                      href: "http://campusutra.com/ContentEvent.aspx?id=MarE1383&name=IMT-Hyderabad-receives-‘Best-Upcoming-B-School-in-South-India’-award",
                      text: "campusutra.com – IMT Hyderabad receives “Best Upcoming B-School in South India” award",
                    },
                    {
                      href: "https://insideiim.com/imt-hyderabad-receives-best-upcoming-b-school-in-south-india-award/",
                      text: "insideiim.com – IMT Hyderabad receives “Best Upcoming B-School in South India” award",
                    },
                    {
                      href: "https://www.thehansindia.com/posts/index/Education-and-Careers/2016-09-06/Summit-cum-Awards-in-Skilling-India-by-ASSOCHAM/252368",
                      text: "thehansindia.com – Summit-cum-Awards in Skilling India by ASSOCHAM",
                    },
                  ].map((item, index) => (
                    <div className="col" key={index}>
                      <div className="card p-2 rounded-4 text-center h-100">
                        <Link
                          href={item.href}
                          className="list-group-item list-group-item-action py-3 d-block"
                          target={item.href !== "#" ? "_blank" : "_self"}
                          rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                        >
                          {item.text}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2015 Tab */}
            <div className="tab-pane fade" id="2015">
              <div className="mt-4 d-flex justify-content-center">
                <div className="list-group text-center" style={{ width: "fit-content" }}>
                  <Link href="#" className="list-group-item list-group-item-action py-3">
                    CII and IMT Hyderabad join forces to launch Innovative PGDM Program in Logistics and Supply Chain Management...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}