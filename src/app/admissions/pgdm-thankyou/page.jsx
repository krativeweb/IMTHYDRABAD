"use client";
import Script from "next/script";
const ThankYouPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/bootstrap.min.css"
      />

      {/* fontawesome */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/font-awesome.css"
      />

      {/* themify */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/themify-icons.css"
      />

      {/* flaticon */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/flaticon.css"
      />

      {/* slick */}
      <link rel="stylesheet" type="text/css" href="/admission/css/slick.css" />

      {/* prettyphoto */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/prettyPhoto.css"
      />

      {/* shortcodes */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/shortcodes.css"
      />

      {/* main */}
      <link rel="stylesheet" type="text/css" href="/admission/css/main.css" />

      {/* megamenu */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/megamenu.css"
      />

      {/* responsive */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/responsive.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      <div
        className="main"
        style={{ height: "100vh", display: "grid", alignItems: "center" }}
      >
        <section>
          <div className="container text-center">
            <a href="/" className="d-block mb-3">
              <img
                src="/media/imtpilllogo.png"
                alt="logo"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </a>

            <img src="/media/check.gif" alt="success" />

            <h2
              className="font-72 font-weight-800"
              style={{ fontSize: "40px", color: "#012749" }}
            >
              Thank You
            </h2>

            <p className="fw-bold">
              Your application has been submitted successfully. <br />
              We will get back to you shortly.
            </p>

            <div className="d-flex gap-3 justify-content-center mt-3 flex-wrap button-group">
              <a href="/admissions/pgdm" className="btn-back-home">
                Back To Home
              </a>
              <a
                href="https://pgdm.imthyderabad.edu.in/applicantStudentProfileGuidlinesCampusWiseHydrabad.json"
                className="btn-apply-now"
              >
                Apply Now
              </a>

               <a
    href="/admission/ADMISSIONS-BROCHURE.pdf"
    className="btn-brochure"
    target="_blank"
    rel="noopener noreferrer"
  >
    Admissions Brochure
  </a>
            </div>

            <style jsx>{`
        .button-group {
    row-gap: 12px;
  }

  .btn-back-home,
  .btn-apply-now,
  .btn-brochure {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 28px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 50px;
    border: 2px solid #000;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;
  }

  .btn-apply-now {
    background: #f6bd04;
    color: #000;
  }

  .btn-apply-now:hover {
    background: #012749;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  }

  .btn-back-home {
    background: #012749;
    color: #ffffff;
  }

  .btn-back-home:hover {
    background: #f6bd04;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  }

  .btn-brochure {
    border-color: #012749;
    background: #ffffff;
    color: #012749;
  }

  .btn-brochure:hover {
    background: #012749;
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  }

  /* ✅ MOBILE FIX */
  @media (max-width: 576px) {
    .btn-back-home,
    .btn-apply-now,
    .btn-brochure {
      width: 100%;
      max-width: 280px;
      font-size: 15px;
    }
  }
            `}</style>
          </div>
        </section>
      </div>

      <Script
        src="/admission/js/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/admission/js/jquery-migrate-3.4.1.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/admission/js/tether.min.js" strategy="beforeInteractive" />
      <Script
        src="/admission/js/bootstrap.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/admission/js/jquery.easing.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/jquery-waypoints.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/jquery-validate.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/jquery.prettyPhoto.js"
        strategy="afterInteractive"
      />
      <Script src="/admission/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/admission/js/numinate.min.js" strategy="afterInteractive" />
      <Script
        src="/admission/js/imagesloaded.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/jquery-isotope.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/lazysizes.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/circle-progress.min.js"
        strategy="afterInteractive"
      />
      <Script src="/admission/js/main.js" strategy="afterInteractive" />
    </>
  );
};

export default ThankYouPage;
