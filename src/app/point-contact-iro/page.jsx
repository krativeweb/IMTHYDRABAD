"use client";

import { useEffect } from "react";
import Link from "next/link";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";
export default function PointOfContactSection() {
  // Initialize AOS
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
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
      /* Faculty Hero */
      .faculty-hero {
        background: url("/media/banners/Group 5.jpg") center/cover no-repeat;
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
        background: #5390D9;
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

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      /* Point of Contact Section */
      .point-of-contact .card {
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .point-of-contact .card img {
        border-radius: 12px 0 0 12px;
      }
      .point-of-contact .card-body {
        padding: 1.5rem;
      }
      .point-of-contact h2 {
        color: #022d7c;
      }
    `,
  }}
/>


      {/* Top Banner */}
      <div className="faculty-hero text-center text-white py-5" data-aos="fade-up">
        <h2 className="display-5 fw-bold mb-2">Point of Contact</h2>
        <p className="text-white">
         Your bridge to global collaboration. <br />
Our International Relations Office facilitates partnerships, student mobility, and cross-border academic engagement.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb p-4">
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent p-0 m-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white fw-bold" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                Point of Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
     <InternationalAssociationStickyBtns/>
      {/* Point of Contact Section */}
      <section className="point-of-contact py-4">
        <div className="container bg-white p-4 mb-4 rounded-4">
          <div className="mb-4">
            <h2 className="fw-bold text-center mt-2">Point Of Contact – IRO</h2>
          </div>
          <p>For more details please contact:</p>
          <div className="card mb-4 w-100">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/images/nitin.webp" className="img-fluid rounded-start h-100" alt="Prof. (Dr.) Nitin Gupta" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <strong>Name:</strong>
                  <p>Prof. (Dr.) Nitin Gupta</p>
                  <strong>Designation:</strong>
                  <p>Chairperson – International Relations</p>
                  <strong>Address:</strong>
                  <p>
                   38, Cherlaguda, Shamshabad, Hyderabad-501218,India
                  </p>
                  <strong>Email:</strong>
                  <p>
                    iro@imthyderabad.edu.in, <br /> ngupta@imthyderabad.edu.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
