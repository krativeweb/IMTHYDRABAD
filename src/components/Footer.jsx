// src/components/Footer.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [loaded, setLoaded] = useState(false);
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

    useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/footer`)
        .then((res) => res.json())
        .then((data) => setFooter(data))
        .catch(console.error);
    }, []);

      if (!footer) return null;

      const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Preloader */}
      {/* <div id="preloader" className={`preloader ${loaded ? "fade-out" : ""}`}>
        <Image
          src="/media/imtpilllogo.webp"
          alt="IMT Hyderabad Logo"
          width={300}
          height={100}
          priority
          unoptimized
        />
      </div> */}
      {/* Footer */}
      <footer className="footer position-relative dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            {/* SOCIAL + CONTACT */}
            <div className="col-lg-4 col-md-6 footer-about">
              <h4 className="mb-3">Follow Us &amp; Get Connected</h4>

              <div className="footer-social d-flex gap-3 mb-3">
                {footer.facebook_url && (
                  <Link href={footer.facebook_url} className="text-reset">
                    <i className="fab fa-xl text-warning fa-facebook-f" />
                  </Link>
                )}
                {footer.linkedin_url && (
                  <Link href={footer.linkedin_url} className="text-reset">
                    <i className="fab fa-xl text-warning fa-linkedin-in" />
                  </Link>
                )}
                {footer.instagram_url && (
                  <Link href={footer.instagram_url} className="text-reset">
                    <i className="fab fa-xl text-warning fa-instagram" />
                  </Link>
                )}
                {footer.youtube_url && (
                  <Link href={footer.youtube_url} className="text-reset">
                    <i className="fab fa-xl text-warning fa-youtube" />
                  </Link>
                )}
              </div>

              <div className="footer-contact pt-2">
                <h5 className="text-warning">
                  <b>Address:</b>
                </h5>
                <p className="text-light">{footer.address}</p>

                <p className="mt-3">
                  <strong className="text-warning">Email:</strong>{" "}
                  <span className="text-light">{footer.email}</span>
                </p>

                <p className="text-light">
                  <strong className="text-warning">Phone:</strong>{" "}
                  {footer.phone}
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6" style={{ paddingLeft: "29px" }}>
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
                      <Link href="executive-education">
                        Executive Education
                      </Link>
                    </li>
                    <li>
                      <Link href="placements">Placements</Link>
                    </li>
                    <li>
                      <Link href="https://alumni.imthyderabad.edu.in">
                        Alumni
                      </Link>
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
                      <Link href="international-associations">
                        International Relations
                      </Link>
                    </li>
                    <li>
                      <Link href="sponsered-research-advisory">
                        Research & Advisory
                      </Link>
                    </li>
                    <li>
                      <Link href="mandatory-disclosure">
                        Mandatory Disclosure
                      </Link>
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
              <h6 className="text-white fw-bold">Accreditations & Approvals</h6>
              <div className="d-flex flex-wrap gap-3 mt-2">
                {footer.accreditations?.map((img, i) => (
                  <Image
                    key={i}
                    src={`${process.env.NEXT_PUBLIC_API_URL}${img}`}
                    alt="Accreditation"
                    width={80}
                    height={80}
                  />
                ))}
              </div>

              <h6 className="text-white fw-bold mt-4">Member</h6>
              <div className="d-flex flex-wrap gap-3 mt-2">
                {footer.members?.map((img, i) => (
                  <Image
                    key={i}
                    src={`${process.env.NEXT_PUBLIC_API_URL}${img}`}
                    alt="Member"
                    width={100}
                    height={80}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="container copyright text-center mt-4">
          <p className="text-light">
            ©{new Date().getFullYear()} Copyright{" "}
            <strong className="text-warning">IMT Hyderabad.</strong> All Rights
            Reserved
          </p>
        </div>
      </footer>
    </>
  );
}


