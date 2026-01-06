"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactUs() {
  // Form state for handling input and submission
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    category: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Basic form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // Placeholder for form submission logic (e.g., API call)
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setFormErrors({});
    alert("Message sent successfully!"); // Replace with actual submission logic
  };

  // Initialize AOS
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <>
      {/* Embedded CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Faculty Hero */
      .faculty-hero {
        background: url('/media/banners/contactus.webp');
        position: relative;
        background-size: cover;
        height: 60vh;
          background-position: center !important;
      }
      .faculty-hero::before {
        content: '';
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

      /* Card styling */
      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }

      /* Image glow & hover effect */
      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }

      /* Social icons */
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
        background: #052349ff;
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

      /* Form & Card styling */
      .card {
        border-radius: 0.75rem;
      }
      .form-control.is-invalid {
        border-color: #dc3545;
      }
      .invalid-feedback {
        display: none;
      }
      .form-control.is-invalid ~ .invalid-feedback {
        display: block;
      }
      .input-group-text {
        background-color: #e9ecef;
      }
      .rounded-5 {
        border-radius: 1.5rem !important;
      }
      .bi {
        color: #08317a;
      }
      .bi:hover {
        color: #ffc107;
      }

      @media (max-width: 580px) {
        .btn-submit {
          width: 100% !important;
        }
      }
    `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Faculty Section - Hero and Breadcrumb */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/contactus.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
              backgroundPosition: "center !important"
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Contact-Us</h2>
          <p className="text-white">
            Where every query matters and every connection begins a new
            opportunity. <br />
            Reach out to engage, explore, and evolve with us.
          </p>
        </div>
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22, 57, 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-white fw-bold"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Contact-Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="container">
          <div className="row">
            {/* Contact Form Card */}
            <div className="col-md-7">
              <div className="card p-3 mb-5 mt-3">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <span className="mb-1 fw-bold text-decoration-underline fs-4">
                        HAVE A QUERY?
                      </span>
                      <span className="mb-3 fw-semibold fs-6">
                        Do you have any questions? A complaint?
                      </span>
                      <div className="col-md">
                        <label htmlFor="firstName" className="form-label">
                          First Name :
                        </label>
                        <input
                          type="text"
                          className={`form-control  ${
                            formErrors.firstName ? "is-invalid" : ""
                          }`}
                          id="firstName"
                          name="firstName"
                          placeholder="First name"
                          aria-label="First name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                        {formErrors.firstName && (
                          <div className="invalid-feedback">
                            {formErrors.firstName}
                          </div>
                        )}
                      </div>
                      <div className="col-md">
                        <label htmlFor="lastName" className="form-label">
                          Last Name :
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          id="lastName"
                          name="lastName"
                          placeholder="Last name"
                          aria-label="Last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md mt-2 position-relative">
                        <label htmlFor="email" className="form-label">
                          Email :
                        </label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="emailPrepend">
                            <i className="bi bi-envelope-at-fill"></i>
                          </span>
                          <input
                            type="email"
                            className={`form-control ${
                              formErrors.email ? "is-invalid" : ""
                            }`}
                            id="email"
                            name="email"
                            aria-describedby="emailPrepend"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          {formErrors.email && (
                            <div className="invalid-feedback">
                              {formErrors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md mt-2">
                        <label htmlFor="phone" className="form-label">
                          Phone Number :
                        </label>
                        <input
                          type="tel"
                          className="form-control "
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          aria-label="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md">
                        <label htmlFor="category" className="form-label">
                          Category :
                        </label>
                        <select
                          id="category"
                          name="category"
                          className="form-select "
                          value={formData.category || ""}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a category</option>
                          <option value="cro">Cro</option>
                          <option value="admissions">Admissions</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="form-floating">
                        <textarea
                          className={`form-control ${
                            formErrors.message ? "is-invalid" : ""
                          }`}
                          placeholder="Leave a message here"
                          id="message"
                          name="message"
                          style={{ height: "100px" }}
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                        {formErrors.message && (
                          <div className="invalid-feedback">
                            {formErrors.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-3 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn-submit rounded-3 p-2 w-25 border-white text-light"
                        style={{ backgroundColor: "rgb(22, 57, 119)" }}
                      >
                        Send a message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="col-md-5">
              <div
                className="card p-3 mb-3 mt-3"
                style={{ backgroundColor: "rgb(22, 57, 119)" }}
              >
                <div className="card-body">
                  <div className="col mb-4">
                    <div className="mb-3">
                      <span className="text-light fw-semibold fs-5">
                        Let's get Connected
                      </span>
                    </div>
                    <div className="bg-light p-3 rounded-5">
                      <span className="fw-bold text-warning">ADMISSION</span>
                      <br />
                      <a href="mailto:admissions@imthyderabad.edu.in">
                        <b>PGDM Email</b> - admissions@imthyderabad.edu.in
                      </a>{" "}
                      <br />
                      <a href="mailto:fpmadmissions@imthyderabad.edu.in">
                        <b>FPM Email</b> - fpmadmissions@imthyderabad.edu.in
                      </a>
                      <br />
                      <span>
                        <b>Phone</b> - 08414 671657 / 08414 671600
                      </span>
                      <br />
                      <span>
                        <b>Mobile</b> - +91-939 142 4273 / +91-939 142 4275
                      </span>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="bg-light p-3 rounded-5">
                      <span className="fw-bold text-warning">
                        CORPORATE RELATIONS GROUP
                      </span>
                      <br />
                      <a href="mailto:cro@imthyderabad.edu.in">
                        <b>Email</b> - cro@imthyderabad.edu.in
                      </a>
                      <br />
                      <span>
                        <b>Phone</b> - 08414 671684 / 1698
                      </span>
                      <br />
                      <span>
                        <b>Mobile</b> - +91 - 939 142 4224
                      </span>
                    </div>
                  </div>

                  <div className="col mt-2">
                    <div className="bg-light p-3 rounded-5 d-flex justify-content-evenly">
                      <Link
                        href="https://www.instagram.com/hyderabadimt?igsh=MXNsMmNmMmRrMWl2ZA=="
                        className="social-icon"
                      >
                        <i className="bi bi-instagram fs-4"></i>
                      </Link>
                      <Link
                        href="https://facebook.com/IMTHyderabad"
                        className="social-icon"
                      >
                        <i className="bi bi-facebook fs-4"></i>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/institute-of-management-technology-hyderabad/"
                        className="social-icon"
                      >
                        <i className="bi bi-linkedin fs-4"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/hyderabadimt?igsh=MXNsMmNmMmRrMWl2ZA=="
                        className="social-icon"
                      >
                        <i className="bi bi-youtube fs-4"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="container mb-3">
          <div className="location">
            <div className="card mb-3">
              <div className="card-body">
                <h4 className="fw-bold text-center mt-3">
                  How to reach at IMT Hyderabad Campus
                </h4>
                <div className="mt-3">
                  <div className="card">
                    <div className="cardbody p-3">
                      <iframe
                        className="embed-map-frame"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Institute%20of%20Management%20Technology%20Hyderabad%20Survey%20No.38%2C%20Cherlaguda%20Village%2C%20Shamshabad%20Mandal%2C%20Hyderabad%2C%20Telangana%20501218&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                        style={{ height: "50vh", width: "100%" }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
