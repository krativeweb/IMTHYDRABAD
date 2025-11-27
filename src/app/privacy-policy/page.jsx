"use client";

import { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default function PrivacyPolicySection() {
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

  // Owl Carousel options for placement alliances
  const placementCarouselOptions = {
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
  };

  // Placement alliances data
  const placementAlliances = [
  { src: "/media/placementimg/1.webp", alt: "Logo 1" },
  { src: "/media/placementimg/2.webp", alt: "Logo 2" },
  { src: "/media/placementimg/3.webp", alt: "Logo 3" },
  { src: "/media/placementimg/4.webp", alt: "Logo 4" },
  { src: "/media/placementimg/5.webp", alt: "Logo 5" },
  { src: "/media/placementimg/6.webp", alt: "Logo 6" },
  { src: "/media/placementimg/7.webp", alt: "Logo 7" },
  { src: "/media/placementimg/8.webp", alt: "Logo 8" },
  { src: "/media/placementimg/9.webp", alt: "Logo 9" },
  { src: "/media/placementimg/10.webp", alt: "Logo 10" },
  { src: "/media/placementimg/11.webp", alt: "Logo 11" },
  { src: "/media/placementimg/12.webp", alt: "Logo 12" },
  { src: "/media/placementimg/13.webp", alt: "Logo 13" },
  { src: "/media/placementimg/14.webp", alt: "Logo 14" },
  { src: "/media/placementimg/15.webp", alt: "Logo 15" },
  { src: "/media/placementimg/16.webp", alt: "Logo 16" },
  { src: "/media/placementimg/17.webp", alt: "Logo 17" },
  { src: "/media/placementimg/18.webp", alt: "Logo 18" },
  { src: "/media/placementimg/19.webp", alt: "Logo 19" },
  { src: "/media/placementimg/20.webp", alt: "Logo 20" },
  { src: "/media/placementimg/21.webp", alt: "Logo 21" },
  { src: "/media/placementimg/22.webp", alt: "Logo 22" },
  { src: "/media/placementimg/23.webp", alt: "Logo 23" },
  { src: "/media/placementimg/24.webp", alt: "Logo 24" },
  { src: "/media/placementimg/25.webp", alt: "Logo 25" },
  { src: "/media/placementimg/26.webp", alt: "Logo 26" },
  { src: "/media/placementimg/27.webp", alt: "Logo 27" },
  { src: "/media/placementimg/28.webp", alt: "Logo 28" },
  { src: "/media/placementimg/29.webp", alt: "Logo 29" },
  { src: "/media/placementimg/30.webp", alt: "Logo 30" },
  { src: "/media/placementimg/31.webp", alt: "Logo 31" },
  { src: "/media/placementimg/32.webp", alt: "Logo 32" },
  { src: "/media/placementimg/33.webp", alt: "Logo 33" },
  { src: "/media/placementimg/34.webp", alt: "Logo 34" },
  { src: "/media/placementimg/35.webp", alt: "Logo 35" },
  { src: "/media/placementimg/36.webp", alt: "Logo 36" },
  { src: "/media/placementimg/37.webp", alt: "Logo 37" },
  { src: "/media/placementimg/38.webp", alt: "Logo 38" },
  { src: "/media/placementimg/39.webp", alt: "Logo 39" },
  { src: "/media/placementimg/40.webp", alt: "Logo 40" },
  { src: "/media/placementimg/41.webp", alt: "Logo 41" },
  { src: "/media/placementimg/42.webp", alt: "Logo 42" },
  { src: "/media/placementimg/43.webp", alt: "Logo 43" },
  { src: "/media/placementimg/44.webp", alt: "Logo 44" },
  { src: "/media/placementimg/45.webp", alt: "Logo 45" },
  { src: "/media/placementimg/46.webp", alt: "Logo 46" },
  { src: "/media/placementimg/47.webp", alt: "Logo 47" },
  { src: "/media/placementimg/48.webp", alt: "Logo 48" },
  { src: "/media/placementimg/49.webp", alt: "Logo 49" },
  { src: "/media/placementimg/50.webp", alt: "Logo 50" },
  { src: "/media/placementimg/51.webp", alt: "Logo 51" },
  { src: "/media/placementimg/52.webp", alt: "Logo 52" },
  { src: "/media/placementimg/53.webp", alt: "Logo 53" },
  { src: "/media/placementimg/54.webp", alt: "Logo 54" },
  { src: "/media/placementimg/55.webp", alt: "Logo 55" },
  { src: "/media/placementimg/56.webp", alt: "Logo 56" },
  { src: "/media/placementimg/57.webp", alt: "Logo 57" },
  { src: "/media/placementimg/58.webp", alt: "Logo 58" },
  { src: "/media/placementimg/59.webp", alt: "Logo 59" },
  { src: "/media/placementimg/60.webp", alt: "Logo 60" },
  { src: "/media/placementimg/61.webp", alt: "Logo 61" },
  { src: "/media/placementimg/62.webp", alt: "Logo 62" },
  { src: "/media/placementimg/63.webp", alt: "Logo 63" },
  { src: "/media/placementimg/64.webp", alt: "Logo 64" },
  { src: "/media/placementimg/65.webp", alt: "Logo 65" },
  { src: "/media/placementimg/66.webp", alt: "Logo 66" },
  ];

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
        background: url("./media/banners/carrier.webp") center/cover no-repeat;
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
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000000ff !important;
      }
      .small-placeholder::placeholder {
        font-size: 0.85rem;
      }
      .nav-pills .nav-link.active,
      .nav-pills .show > .nav-link {
        border-radius: 50rem !important;
        background: #ffc107 !important;
        color: #333 !important;
        transition: all 0.3s !important;
      }
      .nav-pills .nav-link {
        border-radius: var(--bs-nav-pills-border-radius);
        background-color: #e9ecef;
        border-radius: 30px;
        color: #333;
      }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      /* Privacy Policy Section */
      .section-title {
        color: #08317a;
      }
      #executive-education .card {
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      #executive-education h5 {
        color: #08317a;
      }

      /* Placement Alliances Section */
      .placement-alliances-section .subtitle {
        font-size: 1rem;
        text-transform: uppercase;
      }
      .placement-alliances-section .section-title {
        font-size: 2rem;
        font-weight: bold;
      }
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
      .custom-card {
        transition: background-color 0.3s ease, transform 0.3s ease;
        cursor: pointer;
      }
      .custom-card:hover {
        background-color: #ffc107;
        border: 1px solid #03255f;
        transform: translateY(-5px);
      }

      /* Contact Strip */
      .contact-strip {
        background-color: rgb(21, 30, 84);
        color: white;
      }
    `,
  }}
/>


      {/* Top Banner */}
      <div className="faculty-hero text-center text-white py-5" data-aos="fade-up">
        <h2 className="display-5 fw-bold mb-2">Privacy Policy</h2>
        <p className="text-white">
         Committed to protecting trust and transparency.<br/>
Our privacy policy safeguards personal information with integrity, ensuring responsible data use and confidentiality across all platforms.

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
                Privacy Policy
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <section id="executive-education" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="card p-4">
            <h2 className="section-title text-center" data-aos="fade-up" data-aos-delay="200">
              Privacy Policy
            </h2>
            <div className="row justify-content-center mt-3">
              <div className="col-lg-12 text-justify">
                <p>
                  This privacy policy has been compiled to better serve those who are concerned with how their
                  ‘Personally Identifiable Information’ (PII) is being used online. PII, as described in US privacy law
                  and information security, is information that can be used on its own or with other information to
                  identify, contact, or locate a single person, or to identify an individual in context. Please read our
                  privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise
                  handle your Personally Identifiable Information in accordance with our website.
                </p>
                <h5 style={{ color: "#08317a" }}>What personal information do we collect?</h5>
                <p>
                  When ordering or registering on our site, you may be asked to enter your name, email address, phone
                  number, or other details to help you with your experience.
                </p>
                <h5 style={{ color: "#08317a" }}>When do we collect information?</h5>
                <p>
                  We collect information when you register on our site, fill out a form, or provide feedback on our
                  products or services.
                </p>
                <h5 style={{ color: "#08317a" }}>How do we use your information?</h5>
                <ul>
                  <li>To personalize your experience and deliver content and products of interest.</li>
                  <li>To improve our website to better serve you.</li>
                  <li>To respond to customer service requests.</li>
                  <li>To send periodic emails regarding orders or other products and services.</li>
                  <li>To follow up after correspondence (live chat, email, or phone inquiries).</li>
                </ul>
                <h5 style={{ color: "#08317a" }}>How do we protect your information?</h5>
                <p>
                  Our website is scanned regularly for security vulnerabilities. Your personal information is contained
                  behind secured networks, accessible only to a limited number of persons with special access rights.
                  Sensitive/credit information is encrypted via SSL technology. All transactions are processed through a
                  gateway provider and are not stored on our servers.
                </p>
                <h5 style={{ color: "#08317a" }}>Do we use cookies?</h5>
                <p>
                  Yes. Cookies are small files that help us remember and process items in your shopping cart, understand
                  your preferences, and compile aggregate data about site traffic and interactions.
                </p>
                <ul>
                  <li>Understand and save user’s preferences for future visits.</li>
                  <li>Keep track of advertisements.</li>
                  <li>Compile aggregate data to offer better site experiences.</li>
                </ul>
                <h5 style={{ color: "#08317a" }}>Third-party disclosure</h5>
                <p>
                  We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties
                  unless required by law or necessary to operate our website, provided those parties keep the information
                  confidential.
                </p>
                <h5 style={{ color: "#08317a" }}>Third-party links</h5>
                <p>
                  We may include third-party products or services. These sites have independent privacy policies, and we
                  are not responsible for their content or activities.
                </p>
                <h5 style={{ color: "#08317a" }}>Google</h5>
                <p>
                  We use Google AdSense and Google Analytics. Google and other third-party vendors use cookies to serve
                  ads and compile data. Users can opt out via Google Ad Settings or Network Advertising Initiative Opt
                  Out.
                </p>
                <h5 style={{ color: "#08317a" }}>California Online Privacy Protection Act (CalOPPA)</h5>
                <p>
                  Our site follows CalOPPA regulations, allowing users to visit anonymously, update their personal
                  information, and receive notifications of privacy policy changes.
                </p>
                <h5 style={{ color: "#08317a" }}>Do Not Track signals</h5>
                <p>
                  We honor Do Not Track signals and do not track or use advertising if the DNT mechanism is in place.
                </p>
                <h5 style={{ color: "#08317a" }}>COPPA (Children Online Privacy Protection Act)</h5>
                <p>
                  We do not collect personal information from children under 13 and do not market to them.
                </p>
                <h5 style={{ color: "#08317a" }}>Fair Information Practices</h5>
                <p>
                  We follow Fair Information Practices, notifying users within 7 business days in case of a data breach
                  and allowing recourse to legal rights.
                </p>
                <h5 style={{ color: "#08317a" }}>CAN-SPAM Act</h5>
                <p>
                  We comply with the CAN-SPAM Act regarding commercial emails, opt-out requests, and correct
                  identification of messages. Users can unsubscribe at any time.
                </p>
                <h5 style={{ color: "#08317a" }}>Contacting Us</h5>
                <p>If you have any questions regarding this privacy policy, contact us at:</p>
                <p>
                  <Link href="https://www.imthyderabad.edu.in/" className="text-decoration-none">
                    https://www.imthyderabad.edu.in/
                  </Link>
                  <br />
                  Survey No. 38, Cherlaguda Village,
                  <br />
                  Shamshabad Mandal, RR District,
                  <br />
                  Hyderabad - 501218
                  <br />
                  Phone: <Link href="tel:08414671661" className="text-decoration-none">08414 671661</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Alliances Section */}
      <section className="placement-alliances-section py-4" data-aos="fade-up" data-aos-duration="1000">
        <div className="container text-center">
          <h6 className="subtitle text-center text-warning" data-aos="fade-down" data-aos-delay="100">
            Our Clients
          </h6>
          <h2 className="section-title mb-4" data-aos="zoom-in" data-aos-delay="200">
            Our Distinguished Clients
          </h2>
          <p className="mb-5" data-aos="fade-up" data-aos-delay="300">
            We are proud to be associated with top companies.
          </p>
          <OwlCarousel className="owl-theme" {...placementCarouselOptions}>
            {placementAlliances.map((item, index) => (
              <div key={index} className="item">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="contact-strip py-3">
        <h4 className="text-center fw-bold text-warning" data-aos="zoom-in" data-aos-delay="200">
          Contact Details
        </h4>
        <div
          className="container d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start gap-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div data-aos="fade-up" data-aos-delay="200">
            <strong className="text-warning">Email ID :</strong>
            <Link href="mailto:exedu@imthyderabad.edu.in" className="text-light text-decoration-none ms-1">
              exedu@imthyderabad.edu.in
            </Link>
          </div>
          <div className="vr d-none d-md-block"></div>
          <div data-aos="fade-up" data-aos-delay="200">
            <strong className="text-warning">Phone :</strong>
            <Link href="tel:9971802773" className="text-light text-decoration-none ms-1">
              9971802773
            </Link>{" "}
            /
            <Link href="tel:9160501754" className="text-light text-decoration-none">
              9160501754
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
