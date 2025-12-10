"use client";

import Image from "next/image";
import Link from "next/link";
export default function NavbarFour() {
  return (
    <header id="masthead" className="header ttm-header-style-04">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container shadow-sm">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <Image
              src="/media/IMT-logo.png"
              alt="Logo"
              width={290}
              height={86}
              priority
              style={{ margin: "2px" }}
            />
          </a>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links & CTA */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link active" href="#admission">
                  ADMISSIONS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#program">
                  PROGRAMS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#placements">
                  PLACEMENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#more">
                  MORE
                </a>
              </li>
            </ul>

            {/* Contact Button */}
            <Link
              href="https://pgdm.imthyderabad.edu.in/login.htm"
              className="btn btn-warning border-dark rounded-pill mx-3"
              target="_blank"
            >
              Candidate Login
            </Link>
          </div>
        </div>
      </nav>

      {/* ALL YOUR GLOBAL STYLES — WORKING 100% IN NEXT.JS APP ROUTER */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
       .navbar-toggler {
            border-color: #ffc107; /* border */
          }
          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23ffc107' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
          }

          .navbar.sticky-top {
            z-index: 1020;
          }
          .navbar {
            position: fixed; /* or sticky-top if you prefer */
            top: 0;
            left: 0;
            width: 100%;
            z-index: 9999; /* stay above the hero video */
          }

          .custom-nav .btn:hover {
            background-color: #033593;
          }
          .navbar .container {
            /* background: linear-gradient(to bottom, rgb(7 97 255 / 53%) 0%, rgb(255 255 255 / 39%) 100%); */
            background-color: #022d7cad;
            transition: background 0.4s ease;
            width: 1200px;
          }

          /* Nav links hover */
          .navbar-nav .nav-link {
            font-weight: 600;
            margin-left: 20px;
            transition: color 0.3s ease;
          }
          .navbar-nav .nav-link:hover {
            color: #ffc107;
          }
          /* Dropdown container */
          .dropdown-menu {
            background: #ffffff;
            border: none;
            border-radius: 1.5rem; /* pill-like */
            padding: 0.8rem 0;
            min-width: 220px;
          }

          /* Dropdown items */
          .dropdown-item {
            font-weight: 500;
            color: #333;
            padding: 0.5rem 1.2rem;
            border-radius: 1.2rem; /* pill shape for each item */
            transition: all 0.25s ease;
          }
          .dropdown-item:hover {
            background: #ffb433;
            color: #fff;
          }

          /* Caret icon spacing */
          .navbar .dropdown-toggle::after {
            margin-left: 0.35em;
          }

          /* Mobile (collapsed) view */
          @media (max-width: 991.98px) {
            .dropdown-menu {
              border-radius: 1rem;
              margin-top: 0.5rem;
              box-shadow: none;
            }
            .dropdown-item {
              border-radius: 1rem;
              padding: 0.7rem -0.8rem;
            }
          }

          /* Search bar styling */
          .search-bar {
            display: none;
            border-top: 2px solid #eee;
          }
          /* Search bar styling */
          #searchBar {
            z-index: 1200;
            position: relative;
            transition: all 0.3s ease;
          }

          .breadcrumb {
            --bs-breadcrumb-divider-color: #ffffff; /* white divider */
          }
          .navbar-nav .nav-link {
            color: #ffffff !important;
            margin: 0 10px;
            font-weight: 800;
            position: relative;
          }
          .navbar-nav .nav-link:hover {
            color: #ffb433 !important;
          }

          /* Social icons */
          .navbar .social-icons i {
            color: #fff;
            margin-left: 15px;
            transition: 0.3s;
          }
          .navbar .social-icons i:hover {
            color: #ffb433;
          }
          /* Cart Badge */
          .cart-badge {
            position: relative;
          }
          .cart-badge span {
            position: absolute;
            top: -8px;
            right: -10px;
            background: #ffb433;
            color: #fff;
            font-size: 12px;
            padding: 2px 6px;
            border-radius: 50%;
          }
          /* Dropdown should overlay and scroll */
          .navbar .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            max-height: 80vh; /* limit height to viewport */
            overflow-y: auto; /* internal scroll if too tall */
            background: #fff;
            border-radius: 12px;
            z-index: 9999; /* above hero video */
            padding: 6px;
            width: 290px;
          }

          /* Optional prettier scrollbar */
          .navbar .dropdown-menu::-webkit-scrollbar {
            width: 6px;
          }
          .navbar .dropdown-menu::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 6px;
          }
            
      `,
        }}
      />
    </header>
  );
}
