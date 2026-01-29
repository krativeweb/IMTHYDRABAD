"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const strip = document.querySelector(".announcement-strip");
    const stripHeight = strip ? strip.offsetHeight : 0;

    // Navbar scroll behavior
    const handleScroll = () => {
      if (window.scrollY > stripHeight) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }

      // Close all dropdowns on scroll
      const navbarNav = document.getElementById("navbarNav");
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarNav);

      // Close the main navbar (mobile)
      if (bsCollapse._isShown()) {
        bsCollapse.hide();
        document.querySelector(".navbar-toggler").classList.remove("active");
      }

      // Close all open dropdowns (desktop)
      document
        .querySelectorAll(".dropdown-menu.show, .dropdown-submenu ul.show")
        .forEach((menu) => menu.classList.remove("show"));
    };

    window.addEventListener("scroll", handleScroll);

    // Hamburger toggler
    const toggler = document.querySelector(".navbar-toggler");
    const navbarNav = document.getElementById("navbarNav");

    toggler.addEventListener("click", () => {
      toggler.classList.toggle("active");
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarNav);
      bsCollapse.toggle();
    });

    // Close mobile menu on link click
    document.querySelectorAll("#navbarNav a").forEach((link) => {
      link.addEventListener("click", () => {
        if (
          window.innerWidth < 992 &&
          !link.classList.contains("dropdown-toggle")
        ) {
          bootstrap.Collapse.getOrCreateInstance(navbarNav).hide();
          toggler.classList.remove("active");
        }
      });
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container shadow-sm navbarcontainer p-1">
          {/* Logo */}
          <Link className="navbar-brand" href="/">
            <Image
              src="/media/IMT-logo.png"
              alt="Logo"
              width={290} // 2x retina
              height={86}
              style={{ margin: "2px", marginLeft: "17px" }}
            />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            style={{ marginRight: "25px" }}
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </button>

          {/* Nav Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-lg-center">
              {/* ADMISSIONS */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="admissionsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  ADMISSIONS
                </Link>
                <ul
                  className="dropdown-menu shadow-lg border-0 rounded-4 mega-dropdown"
                  aria-labelledby="admissionsDropdown"
                >
                  <li>
                    <Link className="dropdown-item" href="/admissions/pgdm">
                      PGDM
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/fpm-admission">
                      Fellow Program in Management
                    </Link>
                  </li>
                </ul>
              </li>

              {/* PROGRAMS */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="programsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  PROGRAMS
                </Link>
                <ul
                  className="dropdown-menu shadow-lg border-0 rounded-4 mega-dropdown"
                  aria-labelledby="programsDropdown"
                  style={{ minWidth: "245px" }}
                >
                  <div className="row mx-3">
                    <li className="dropdown-submenu mt-2">
                      <Link className="fw-bold" href="#">
                        PGDM
                      </Link>
                      <ul className="position-static border-0 p-0 mt-2 spaced-list list-unstyled">
                        <li>
                          <Link
                            className="item"
                            href="/pgdm-course-in-hyderabad"
                          >
                            About PGDM
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="item"
                            href="/pgdm-general-management"
                          >
                            PGDM
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="item"
                            href="/pgdm-finance-management"
                          >
                            PGDM (Finance)
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="item"
                            href="/pgdm-marketing-management"
                          >
                            PGDM (Marketing)
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href="/pgdm-lscm">
                            PGDM (LSCM)
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href="/fpm-program-hyderabad">
                            Fellow Program in Management
                          </Link>
                        </li>
                        <li>
                          <Link className="item" href="/executive-education">
                              Executive Education
                            </Link>
                          </li>
            
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>

              {/* FACULTY & RESEARCH */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="facultyDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  FACULTY & RESEARCH
                </Link>
                <ul
                  className="dropdown-menu shadow-lg border-0 rounded-4 mega-dropdown"
                  aria-labelledby="facultyDropdown"
                  style={{ minWidth: "650px" }}
                >
                  <div className="row mx-3">
                    <div className="col-md-4 col-sm-12">
                      <li className="dropdown-submenu mt-2">
                        <Link className="fw-bold" href="#">
                          Faculty
                        </Link>
                        <ul className="position-static border-0 p-0 mt-2 spaced-list list-unstyled">
                          <li>
                            <Link className="item" href="/faculties">
                              Faculty Directory
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="/awards-and-recognisation"
                            >
                              Awards & Recognitions
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="/conferences-workshops"
                            >
                              Workshop & Conference
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <li className="dropdown-submenu mt-2">
                        <Link className="fw-bold" href="#">
                          Research
                        </Link>
                        <ul className="position-static border-0 p-0 mt-2 spaced-list list-unstyled">
                          <li>
                            <Link className="item" href="/research-archive">
                              Research Archive
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/research-publication">
                              Research Publication
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="/sponsered-research-advisory"
                            >
                              Sponsored Research and Advisory
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <li className="dropdown-submenu mt-2">
                        <Link className="fw-bold" href="#">
                          Center & Labs
                        </Link>
                        <ul className="position-static border-0 p-0 mt-2 spaced-list list-unstyled">
                          <li>
                            <Link className="item" href="/centre-cdt">
                              Centre for Digital Transformation
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/centre-csr">
                              Centre for Sustainability
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/innovation-lab">
                              Innovation Labs
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>

              {/* MORE */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="moreDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  MORE
                </Link>
                <ul
                  className="dropdown-menu shadow-lg border-0 rounded-4 mega-dropdown"
                  aria-labelledby="moreDropdown"
                  style={{ minWidth: "840px" }}
                >
                  <div className="row mx-3">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-12">
                      <li className="dropdown-submenu mt-2">
                        <Link className="fw-bold" href="#">
                          Mandatory Disclosure
                        </Link>
                        <ul className="position-static border-0 p-0 mt-2 spaced-list list-unstyled">
                          <li>
                            <Link className="item" href="/mandatory-disclosure">
                              Mandatory Disclosure
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/committees">
                              Committees
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/ombudsman">
                              Ombudsman
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="/model-code-of-conduct"
                            >
                              Model Code Of Conduct
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="/scholarship-and-professionalism"
                            >
                              Standards Of Scholarship
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/refund-policy">
                              Refund Policy
                            </Link>
                          </li>

                          <li>
                            <Link className="item" href="/feedback">
                              Feedback Faculties
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="/online-grievance-redressal-mechanism"
                            >
                              Grievance Redressal
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/mom-bog">
                              MOM BOG
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/financial-statements">
                              Financial Statements
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/placementdata">
                              Placement Data
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/tenders">
                              Tenders
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-12">
                      <li className="dropdown-submenu mt-2">
                        <Link className="fw-bold" href="#">
                          About IMT Hyderabad
                        </Link>
                        <ul className="position-static border-0 p-0 mt-2 spaced-list list-unstyled">
                          <li>
                            <Link className="item" href="/about-imt-hyderabad">
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/message-desk">
                              Leadership & Governance
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/industry-relevance">
                              Industry Relevance
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/campus">
                              Campus
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/anualevents">
                              Annual Events
                            </Link>
                          </li>

                          <li>
                            <Link className="item" href="/accredations">
                              Accreditation
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/approvals">
                              Approvals
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-12">
                      <li className="dropdown-submenu mt-2">
                        <Link className="fw-bold" href="#">
                          International Relations
                        </Link>
                        <ul className="position-static border-0 p-0 mt-2 spaced-list list-unstyled">
                          <li>
                            <Link
                              className="item"
                              href="/studying-at-imt-hyderabad"
                            >
                              Studying at IMT Hyderabad
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="/international-associations"
                            >
                              International Associations
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/faculty-exchange">
                              Faculty Exchange
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/student-exchange">
                              Student Exchange
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/step-dubai">
                              Step @ IMT DUBAI
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/gip">
                              Global Immersion
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/photo-gallery">
                              Photo Gallery
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/news">
                              News
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="/frequently-asked-questions"
                            >
                              FAQs
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/point-contact-iro">
                              Point of Contact
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-12">
                      <li className="dropdown-submenu mt-2">
                        <Link className="fw-bold" href="#">
                          Others
                        </Link>
                        <ul className="position-static border-0 p-0 mt-2 spaced-list list-unstyled">
                          <li>
                            <Link className="item" href="/Careers">
                              Careers
                            </Link>
                          </li>
                          <li>
                            <Link className="item" href="/placements">
                              Placements
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="/business-school-ranking"
                            >
                              Rankings
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="https://alumni.imthyderabad.edu.in/"
                            >
                              Alumni
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="/learning-resource-center-lrc"
                            >
                              LRC
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="item"
                              href="https://drive.google.com/file/d/18awgCd_sfTOyXtCvyc2dB9O3BGfZ96JA/view"
                            >
                              NIRF
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>

              {/* CONTACT */}
              <li className="nav-item">
                <Link
                  href="/contact-us"
                  className="btn btn-warning border-dark rounded-pill mx-3"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      <button
        type="button"
        className="btn btn-warning btn-lg"
        id="btn-back-to-top"
      >
        ↑
      </button>
    </>
  );
}
