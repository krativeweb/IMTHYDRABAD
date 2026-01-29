'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const collapseRef = useRef(null);
  const stripRef = useRef(null);

  // === Scroll: Stick navbar + close on scroll ===
  useEffect(() => {
    const stripHeight = stripRef.current?.offsetHeight || 0;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > stripHeight);

      // Close mobile menu on scroll
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // === Collapse height animation ===
  useEffect(() => {
    if (collapseRef.current) {
      collapseRef.current.style.height = isOpen
        ? `${collapseRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isOpen]);

  // === Back-to-top button visibility ===
  useEffect(() => {
    const btn = document.getElementById('btn-back-to-top');
    const showBtn = () => {
      if (window.scrollY > 300) {
        btn?.classList.add('show');
      } else {
        btn?.classList.remove('show');
      }
    };
    window.addEventListener('scroll', showBtn);
    return () => window.removeEventListener('scroll', showBtn);
  }, []);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {/* ============ STYLES ============ */}
      <style jsx>{`
        /* Toggler */
        .navbar-toggler {
          border-color: #ffffffff;
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23ffc107' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }

        /* Announcement strip */
        .announcement-strip {
          width: 100%;
          background: #ffc107;
          color: #000;
          padding: 8px 0;
          overflow: hidden;
          position: relative;
          z-index: 1031;
          text-align: center;
        }
        .announcement-text {
          display: inline-block;
          white-space: nowrap;
          padding-left: 100%;
          animation: scroll-left 15s linear infinite;
        }
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          transition: top 0.3s ease;
        }
        .navbar.navbar-scrolled {
          top: 0;
        }

        /* Collapse */
        .navbar-collapse {
          overflow: hidden;
          transition: height 0.35s ease;
        }

        /* Back to top */
        #btn-back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: none;
          z-index: 9999;
        }
        #btn-back-to-top.show {
          display: block;
        }
      `}</style>

      {/* ============ ANNOUNCEMENT STRIP ============ */}
  

      {/* ============ NAVBAR ============ */}
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light sticky-top">
    <div className="container shadow-sm navbarcontainer p-1">
      {/* Logo */}
      <Link className="navbar-brand" href="/">
        <img
          src="./media/IMT-logo.png"
          alt="Logo"
          style={{ height: 86, marginLeft: "17px !important", margin: 2 }}
        />
      </Link>
      {/* Toggler (Mobile) */}
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/* Nav Links */}
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav align-items-lg-center">
          <li className="nav-item">
            <Link className="nav-link" href="placements">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="campus-recruitment">
              CAMPUS PLACEMENTS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="internship">
              SUMMER INTERNSHIPS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="corporate-connect">
              CORPORATE CONNECT
            </Link>
          </li>
          {/* Dropdown Menu */}
        </ul>
        {/* Contact Us Button */}
        <Link
          href="contact-us"
          className="btn btn-warning border-dark rounded-pill mx-3"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  </nav>
  {/* Back to Top Button */}
  <button type="button" className="btn btn-warning btn-lg" id="btn-back-to-top">
    {" "}
    ↑{" "}
  </button>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n/* Toggler */\n.navbar-toggler {\n  border-color: #ffffffff;\n}\n.navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23ffc107' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\n\n/* Announcement strip */\n.announcement-strip {\n  width: 100%;\n  background: #ffc107;\n  color: #000;\n  padding: 8px 0;\n  overflow: hidden;\n  position: relative;   /* not sticky */\n  z-index: 1031;\n  text-align: center;\n}\n.announcement-text {\n  display: inline-block;\n  white-space: nowrap;\n  padding-left: 100%;\n  animation: scroll-left 15s linear infinite;\n}\n@keyframes scroll-left {\n  0%   { transform: translateX(0); }\n  100% { transform: translateX(-100%); }\n}\n\n/* Navbar positions */\n.navbar {\n  position: fixed;\n  top: 0px;        /* sits below strip initially */\n  left: 0;\n  width: 100%;\n  z-index: 9999;\n  transition: top 0.3s ease;\n}\n\n/* When page scrolled past strip */\n.navbar.navbar-scrolled {\n  top: 0;\n}\n"
    }}
  />
  {/* Navbar & Mobile Submenu JS */}
</>


      {/* ============ BACK TO TOP ============ */}
      <button
        type="button"
        className="btn btn-warning btn-lg"
        id="btn-back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Up
      </button>
    </>
  );
}
