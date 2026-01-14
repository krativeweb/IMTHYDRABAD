// src/components/Footer.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fade out preloader after mount
    const timeout = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Preloader */}
      <div id="preloader" className={`preloader ${loaded ? "fade-out" : ""}`}>
        <Image
         className="bg-white"
          src="/media/imtpilllogo.webp"
          alt="Website Logo"
          width={150}
          height={100}
          priority
          unoptimized
          style={{ width: 300, height: 100 }}
        />
      </div>

      {/* Footer */}
      <footer className="footer position-relative dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            {/* About / Contact */}
            <div className="col-lg-4 col-md-6 footer-about">
              <h4 className="mb-3">Follow Us &amp; Get Connected</h4>
              <div className="footer-social d-flex gap-3 mb-3">
                <Link
                  href="https://facebook.com/IMTHyderabad"
                  className="text-reset"
                  aria-label="Facebook"
                >
                  <i className="fab fa-xl text-warning fa-facebook-f"></i>
                </Link>
                {/* <Link
                  href="https://twitter.com/IMTHyderabad"
                  className="text-reset"
                  aria-label="Twitter"
                >
                  <i className="fab fa-xl text-warning fa-x-twitter"></i>
                </Link> */}
                <Link
                  href="https://www.linkedin.com/company/institute-of-management-technology-hyderabad/"
                  className="text-reset"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-xl text-warning fa-linkedin-in"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/hyderabadimt?igsh=MXNsMmNmMmRrMWl2ZA=="
                  className="text-reset"
                  aria-label="Instagram"
                >
                  <i className="fab fa-xl text-warning fa-instagram"></i>
                </Link>
                <Link
                  href="https://youtube.com/@imthyderabadchannel?si=QfVmqF3W6tjFyiQl"
                  className="text-reset"
                  aria-label="YouTube"
                >
                  <i className="fab fa-xl text-warning fa-youtube"></i>
                </Link>
              </div>

              <div className="footer-contact pt-2">
                <h5 className="text-warning">
                  <b>Address:</b>
                </h5>
                <p className="text-light">
                  38, Cherlaguda, Shamshabad, Hyderabad-501 218, <br /> India
                </p>
                <p className="mt-3">
                  <strong className="text-warning">Email:</strong>{" "}
                  <span className="text-light">info@imthyderabad.edu.in</span>
                </p>
                <p className="text-light">
                  <strong className="text-warning">Phone:</strong>{" "}
                  <span>+91-08414 671661</span>
                </p>

                {/* QR Code Modal Trigger */}
                {/* <button
                  type="button"
                  className="btn btn-warning rounded-pill border-white"
                  data-bs-toggle="modal"
                  data-bs-target="#qrModal"
                >
                  View QR Code
                </button> */}

                {/* QR Code Modal */}
                <div
                  className="modal fade"
                  id="qrModal"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow-lg">
                      <div className="modal-header border-0">
                        <h5 className="modal-title">QR Code</h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-center">
                        <Image
                          src=""
                          alt="QR Code"
                          width={300}
                          height={300}
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6" style={{ paddingLeft:"29px" }}>
              <div className="row">
                <div className="col-6 footer-links">
                  <h4>Quick Links</h4>
                  <ul>
                    <li>
                      <Link href="pgdm-general-management">PGDM</Link>
                    </li>
                    <li>
                      <Link href="fpm-program-hyderabad">FPM</Link>
                    </li>
                    <li>
                      <Link href="executive-education">Executive Education</Link>
                    </li>
                    <li>
                      <Link href="placements">Placements</Link>
                    </li>
                    <li>
                      <Link href="https://alumni.imthyderabad.edu.in">Alumni</Link>
                    </li>
                    <li>
                      <Link href="Campus-Tour">Campus Tour</Link>
                    </li>
                    <li>
                      <Link href="contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 footer-links">
                  <h4>Other Links</h4>
                  <ul>
                    <li>
                      <Link href="student-life-imt">Student Life</Link>
                    </li>
                    <li>
                      <Link href="international-associations">International Relations</Link>
                    </li>
                    <li>
                      <Link href="sponsered-research-advisory">Research & Advisory</Link>
                    </li>
                    <li>
                      <Link href="mandatory-disclosure">Mandatory Disclosure</Link>
                    </li>
                    <li>
                      <Link href="newsletters">Newsletters</Link>
                    </li>
                    <li>
                      <Link href="online-grievance-redressal-mechanism">
                        Grievance Redressal
                      </Link>
                    </li>
                    <li>
                      <Link href="privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Get Connected / Accreditations */}
            <div className="col-lg-4 col-md-6 footer-subscribe">
             <div className="accreditations">
                <h6 className="text-white fw-bold">Accreditations & Approvals</h6>
                <div className="d-flex flex-wrap align-items-center gap-3 mt-2">
                  <Image
                   className=""
                    src="/media/acc/nba.png"
                    alt="Accreditation 1"
                    width={80}
                    height={80}
                  />
                  <Image
                   className=""
                    src="/media/acc/sas.jpg"
                    alt="Accreditation 2"
                    width={80}
                    height={80}
                  />
                  <Image
                   className=""
                    src="/media/acc/aiu.png"
                    alt="Accreditation 3"
                    width={80}
                    height={80}
                  />
                  <Image
                    src="/media/acc/aicte.png"
                    alt="Accreditation 4"
                    width={80}
                    height={80}
                  />
               
                </div>
              </div>

                 <div className="membership mt-4">
                <h6 className="text-white fw-bold">Member</h6>
                <div className="d-flex flex-wrap align-items-center gap-3 mt-2">
             
                  <Image
                   className=""
                    src="/media/aacsb-logo.webp"
                    alt="Accreditation 5"
                    width={120}
                    height={80}
                  />
                       <Image
                   className=""
                    src="/media/acc/ITU Acd Member Logo.jpg"
                    alt="Accreditation 5"
                    width={75}
                    height={80}
                  />
                  <Image
                   className=""
                    src="/media/acc/Shastri Logo.png"
                    alt="Accreditation 5"
                    width={140}
                    height={80}
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="container copyright text-center mt-4">
          <p className="text-light">
            ©2026 Copyright{" "}
            <strong className="text-warning">IMT Hyderabad.</strong> All Rights
            Reserved
          </p>
        </div>
      </footer>
    </>
  );
}



