'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function NavbarTwo() {
  const navbarRef = useRef(null);
  const collapseRef = useRef(null);
  const togglerRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const collapseEl = collapseRef.current;
    const toggler = togglerRef.current;
    const strip = stripRef.current;
    const stripHeight = strip ? strip.offsetHeight : 0;

    // Remove default Bootstrap toggle behavior
    toggler.removeAttribute('data-bs-toggle');
    toggler.removeAttribute('data-bs-target');

    // Scroll handler: adjust navbar position + close collapse
    const handleScroll = () => {
      if (window.scrollY > stripHeight) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }

      // Close navbar and submenus on scroll
      if (collapseEl.classList.contains('show')) {
        collapseEl.classList.remove('show');
        collapseEl.style.height = '0px';
        collapseEl.querySelectorAll('.dropdown-submenu.show').forEach(sub => sub.classList.remove('show'));
      }
    };

    // Toggler click: open/close navbar
    const handleTogglerClick = () => {
      if (collapseEl.classList.contains('show')) {
        collapseEl.classList.remove('show');
        collapseEl.style.height = '0px';
        collapseEl.querySelectorAll('.dropdown-submenu.show').forEach(sub => sub.classList.remove('show'));
      } else {
        collapseEl.classList.add('show');
        collapseEl.style.height = collapseEl.scrollHeight + 'px';
      }
    };

    // Mobile submenu toggle
    const handleSubmenuToggle = (e) => {
      if (window.innerWidth >= 1200) return;
      e.preventDefault();
      e.stopPropagation();

      const parent = e.currentTarget.parentElement;
      parent.classList.toggle('show');

      // Close sibling submenus
      parent.parentElement.querySelectorAll(':scope > .dropdown-submenu').forEach(sub => {
        if (sub !== parent) sub.classList.remove('show');
      });
    };

    // Attach event listeners
    window.addEventListener('scroll', handleScroll);
    toggler.addEventListener('click', handleTogglerClick);
    document.querySelectorAll('.dropdown-submenu > a.dropdown-toggle').forEach(el => {
      el.addEventListener('click', handleSubmenuToggle);
    });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      toggler.removeEventListener('click', handleTogglerClick);
      document.querySelectorAll('.dropdown-submenu > a.dropdown-toggle').forEach(el => {
        el.removeEventListener('click', handleSubmenuToggle);
      });
    };
  }, []);

  return (
    <>
      {/* Announcement Strip */}
      {/* <div ref={stripRef} className="announcement-strip">
        <div className="announcement-text">
          Welcome to Executive Education Programs at IMTH
        </div>
      </div> */}

      {/* Navbar */}
     <nav   ref={navbarRef}  className="navbar navbar-expand-lg navbar-light sticky-top" >
    <div className="container shadow-sm navbarcontainer p-1">
      {/* Logo */}
      <a className="navbar-brand" href="/">
        <img
          src="./media/IMT-logo.png"
          alt="Logo"
          style={{ height: 86, marginLeft: "16px !important", margin: 2 }}
        />
      </a>
      {/* Toggler (Mobile) */}
<button
  ref={togglerRef} // ✅ attach ref here
  className="navbar-toggler border-0"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
>
  <span className="navbar-toggler-icon" />
</button>

      {/* Nav Links */}
      <div
      ref={collapseRef}
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav align-items-lg-center">
          <li className="nav-item">
            <Link className="nav-link" href="executive-education">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#recent-programs">
              MDPs @ IMTH
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#calendar">
              EDP CALENDAR
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#offering">
              OFFERINGS
            </a>
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


      {/* Back to Top Button */}
      <button type="button" className="btn btn-warning btn-lg" id="btn-back-to-top">
        Up Arrow
      </button>

      {/* Inline Styles */}
      <style jsx global>{`
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
  position: relative;   /* not sticky */
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

/* Navbar positions */
.navbar {
  position: fixed;
  top: 0px;        /* sits below strip initially */
  left: 0;
  width: 100%;
  z-index: 9999;
  transition: top 0.3s ease;
}

/* When page scrolled past strip */
.navbar.navbar-scrolled {
  top: 0;
}
      `}</style>
    </>
  );
}

