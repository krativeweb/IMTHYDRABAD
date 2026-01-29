"use client";

import PlacementAlliances from "@/sections/PlacementAlliances.jsx";
import Link from "next/link";
import { useEffect } from "react";

export default function StandardsOfScholarship() {
  // Initialize Owl Carousel safely after jQuery & Owl are loaded
  useEffect(() => {
    const initCarousel = () => {
      if (
        !window.$ ||
        !window.$.fn.owlCarousel ||
        !document.getElementById("placement-carousel")
      )
        return;

      const $carousel = $("#placement-carousel");

      // Destroy previous instance to prevent conflicts
      if ($carousel.hasClass("owl-loaded")) {
        $carousel
          .trigger("destroy.owl.carousel")
          .removeClass("owl-loaded owl-drag");
      }

      $carousel.owlCarousel({
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
      });
    };

    // Wait for Owl to be ready
    if (window.$ && window.$.fn.owlCarousel) {
      initCarousel();
    } else {
      const timer = setInterval(() => {
        if (window.$ && window.$.fn.owlCarousel) {
          clearInterval(timer);
          initCarousel();
        }
      }, 50);
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
        />
      </noscript>

      {/* Page-specific styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .table-responsive {
        border-radius: 0.5rem;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
        margin-bottom: 1rem;
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
        background: #5390d9;
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
    `,
        }}
      />

      {/* Main Section */}
      <section className="faculty-section">
        {/* Hero Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
        >
          <h2 className="display-5 fw-bold mb-2">
            Standards Of Scholarship And Professionalism
          </h2>
          <p className="text-white">
            Recognizing merit, nurturing integrity. <br />
            Our scholarships reward excellence and encourage professionalism
            grounded in ethics, diligence, and leadership potential.
          </p>
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22, 57, 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link
                    href="/"
                    className="text-white fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Standards Of Scholarship And Professionalism
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Policy Content */}
        <section id="executive-education" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="card p-4">
              <h2
                className="section-title text-center"
                style={{ color: "#08317a" }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Standards Of Scholarship And Professionalism
              </h2>

              <div className="row justify-content-center mt-3">
                <div className="col-lg-12 text-justify">
                  <p>
                    The reputation and pride of the institute depends on the
                    manner in which each member of the community conducts
                    himself / herself, both within and outside the premises of
                    the institute. Classroom, extracurricular, and professional
                    relationships must be based on the values and principles of
                    mutual respect and acceptance, and also on the affirmation
                    of the personal rights of all members of the community.
                  </p>
                  <p>
                    As responsible members of the IMT Hyderabad community, all
                    students are expected to handle their academic, professional
                    and personal matters independently by themselves.
                  </p>
                  <p>
                    <b>
                      Interference from parents and / or other family members in
                      academic matters pertaining to the institute amounts to
                      demeaning the maturity of students and is strictly
                      discouraged.
                    </b>
                  </p>

                  <p>
                    <b>1. Prevention and Prohibition of Ragging</b>
                  </p>
                  <p>
                    It has been Institute’s endeavor to keep it free from any
                    act of ragging among students on its premises or outside.
                    All students are hereby advised not to indulge in any act of
                    ragging including any conduct by any student, which has the
                    effect of teasing, treating or handling with rudeness a
                    fresher or any other student or an act of indiscipline
                    causing annoyance, hardship or psychological harm, etc. to
                    any fresher or any other student.
                  </p>

                  <p>
                    <b>
                      I. Ragging constitutes one or more of any of the following
                      acts
                    </b>
                  </p>
                  <div className="crs_list">
                    <ul>
                      <li>
                        Any conduct by any student or students whether by words
                        spoken or written or by an act which has the effect of
                        teasing, treating or handling with rudeness a fresher or
                        any other student.
                      </li>
                      <li>
                        Indulging in rowdy or undisciplined activities by any
                        student or students, which causes or is likely to cause
                        annoyance, hardship, physical or psychological harm or
                        to raise fear or apprehension thereof in any fresher or
                        any other student.
                      </li>
                      <li>
                        Asking any student to do any act which such student will
                        not in the ordinary course do and which has the effect
                        of causing or generating a sense of shame, or torment or
                        embarrassment so as to adversely affect the physique or
                        psyche of such fresher or any other student.
                      </li>
                      <li>
                        Any act by a senior student that prevents, disrupts or
                        disturbs the regular academic activity of any other
                        student or a fresher.
                      </li>
                      <li>
                        Exploiting the services of a fresher or any other
                        student for completing the academic tasks assigned to an
                        individual or a group of students.
                      </li>
                      <li>
                        Any act of financial extortion or forceful expenditure
                        burden put on a fresher or any other student by
                        students.
                      </li>
                      <li>
                        Any act of physical abuse including all variants of it:
                        sexual abuse, homosexual assaults, and stripping,
                        forcing obscene and lewd acts, gestures, causing bodily
                        harm or any other danger to health or person.
                      </li>
                      <li>
                        Any act or abuse by spoken words, emails, posts, public
                        insults which would also include deriving perverted
                        pleasure, vicarious or sadistic thrill from actively or
                        passively participating in the discomfiture to fresher
                        or any other student.
                      </li>
                      <li>
                        Any act that affects the mental health and
                        self-confidence of a fresher or any other student with
                        or without an intent to derive a sadistic pleasure or
                        showing off power, authority or superiority by a student
                        over any fresher or any other student.
                      </li>
                    </ul>
                  </div>

                  <br />

                  <p>
                    <b>II. Administrative action in the event of ragging</b>
                  </p>
                  <p>
                    The Anti-Ragging Committee of the institution shall take an
                    appropriate decision, in regard to punishment or otherwise,
                    depending on the facts of each incident of ragging and
                    nature and gravity of the incident of ragging.
                  </p>
                  <p>
                    The Anti-Ragging Committee may depending on the nature and
                    gravity of the guild established by the Anti-Ragging Squad,
                    award, to those found guilty, one or more of the following
                    punishments, namely:
                  </p>
                  <div className="crs_list">
                    <ul>
                      <li>Cancellation of admission</li>
                      <li>Suspension from attending classes</li>
                      <li>
                        Withholding/withdrawing scholarship/fellowship and other
                        benefits
                      </li>
                      <li>
                        Debarring from appearing in any test/examination or
                        other evaluation process
                      </li>
                      <li>Withholding results</li>
                      <li>
                        Debarring from representing the institution in any
                        regional, national or international meet, tournament,
                        youth festival, etc.
                      </li>
                      <li>Suspension/expulsion from the hostel</li>
                      <li>
                        Rustication from the institution for period ranging from
                        1 to 3 trimesters
                      </li>
                      <li>
                        Expulsion from the institution and consequent debarring
                        from admission to any other institution
                      </li>
                      <li>
                        Collective punishment: when the persons committing or
                        abetting the crime of ragging are not identified, the
                        institution shall resort to collective punishment as a
                        deterrent to ensure community pressure on the potential
                        raggers
                      </li>
                    </ul>
                  </div>

                  <br />

                  <p className="inv-txt">
                    <b>
                      III. Anti-Ragging committee of the Institute shall consist
                      of the following:
                    </b>
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered table-sm">
                      <thead className="bg-light">
                        <tr>
                          <th className="fw-bold">
                            Name of the Committee Member
                          </th>
                          <th className="fw-bold">Designation</th>
                          <th className="fw-bold">Phone No.</th>
                          <th className="fw-bold">Landline No.</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Prof. (Dr.) K. M. Baharul Islam</td>
                          <td>Director</td>
                          <td>8392811111</td>
                          <td>08414-671661</td>
                        </tr>

                        <tr>
                          <td>Prof. Romina Mathew</td>
                          <td>Chairperson – Disciplinary</td>
                          <td>9246295292</td>
                          <td>08414-671689</td>
                        </tr>

                        <tr>
                          <td>Prof. Vinay Kumar K</td>
                          <td>Associate Dean (Accreditation & Rankings)</td>
                          <td>8639342389</td>
                          <td>08414-671688</td>
                        </tr>

                        <tr>
                          <td>Prof. Pushpesh Pant</td>
                          <td>Warden – Boys Hostel</td>
                          <td>8827218443</td>
                          <td>08414-671602</td>
                        </tr>

                        <tr>
                          <td>Prof. Irfan Ahmad Shah</td>
                          <td>Warden – Boys Hostel</td>
                          <td>9567452826</td>
                          <td>08414-671601</td>
                        </tr>

                        <tr>
                          <td>Prof. Sanchari Guha Niyogi</td>
                          <td>Warden – Girls Hostel</td>
                          <td>8584968955</td>
                          <td>08414-671625</td>
                        </tr>

                        <tr>
                          <td>Mr. Raj Kumar Meena</td>
                          <td>Chief Admin. Officer</td>
                          <td>9582805564</td>
                          <td>08414-671683</td>
                        </tr>

                        <tr>
                          <td>Ms. Jaya Vamshi</td>
                          <td>Asst. Manager – HR</td>
                          <td>9885770267</td>
                          <td>08414-671656</td>
                        </tr>

                        <tr>
                          <td>
                            Dr. Mamatha Rahuveer Achanta (NGO Representative)
                          </td>
                          <td>Social Worker</td>
                          <td>9849418592</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Mr. K. Srinivasa Rao</td>
                          <td>ACP – Shamshabad Police Station</td>
                          <td>9490617481</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Mr. A. Ravindra Seshu (Media Representative)</td>
                          <td>Senior Reporter, Khammam District</td>
                          <td>9063718675</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Parent Representative</td>
                          <td>Hyderabad</td>
                          <td>9391424271</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>
                            Mr. Ekansh Uniyal (Sr. Student Representative)
                          </td>
                          <td>IMT Hyderabad</td>
                          <td>7020132115</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Ms. Priya Arya (Sr. Student Representative)</td>
                          <td>IMT Hyderabad</td>
                          <td>9810302199</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>
                            Mr. Shailendra Gautam (Jr. Student Representative)
                          </td>
                          <td>IMT Hyderabad</td>
                          <td>7078587873</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    The Anti-Ragging squad shall be responsible for maintaining
                    vigil, oversight and patrolling functions and shall remain
                    mobile, alert and active at all times.
                  </p>
                  <p>
                    It shall be the duty of the Anti-Ragging Squad to make
                    surprise raids on hostels and other places vulnerable to
                    incidents of and having the potential of, ragging and shall
                    be empowered to inspect such places.
                  </p>
                  <p>
                    It shall be the duty of the Anti-Ragging Squad to conduct an
                    on-the-spot enquiry into any incident of ragging referred to
                    it by any student and the enquiry report along with the
                    recommendations shall be submitted to the Anti-Ragging
                    Committee of the Institute for action as specified in the
                    Policy.
                  </p>
                  <p>
                    In case of an appeal against the order of punishment by the
                    Anti-Ragging Committee, the discretionary power shall lie
                    with the Director.
                  </p>
                  <p>
                    <b>
                      <i>
                        This policy comes in force from the date of issue of
                        this Circular as an immediate measure to prohibit
                        ragging in the Institute.
                      </i>
                    </b>
                  </p>

                  <p>
                    <b>2. Academic Integrity</b>
                  </p>
                  <p>
                    Academic integrity is fundamental to a successful academic
                    community. Students should recognize their responsibility to
                    uphold highest standards of intellectual honesty and to
                    report apparent violations to the appropriate persons. The
                    following are the descriptions and examples of behaviours
                    that are inconsistent with academic integrity.
                  </p>
                  <div className="crs_list">
                    <ul>
                      <li>
                        Malpractices in the examination hall - Giving or
                        receiving of any unauthorized assistance or providing or
                        obtaining unfair advantage in examinations. It includes
                        the use of unauthorized materials during exams,
                        unauthorized possession of a test paper prior to the
                        test date, copying from other students' answer books, or
                        talking to other students during exams
                      </li>
                      <li>
                        Multiple submissions of the same work - Submission of
                        work that was prepared for one course for credit in
                        another or to submit the same work for credit in two
                        courses, without permission from the concerned faculty
                        member(s)
                      </li>
                      <li>
                        Fabrication and deception - The falsification of data,
                        information or any untruth either verbally or in writing
                        with respect to any academic work including giving a
                        false excuse for missing a deadline or falsely claiming
                        to have submitted work
                      </li>
                      <li>
                        Attempts / Facilitation - Any attempt toward or
                        facilitation of any act of academic dishonesty are also
                        cases of academic dishonesty. It includes facilitating a
                        student's efforts to cheat in an examination,
                        facilitating another in an act of plagiarism, or
                        facilitating the falsification of data or other
                        information
                      </li>
                      <li>
                        Sabotage - Acting to prevent others from completing
                        their work. It includes, but is not limited to cutting
                        pages out of library books or willfully disrupting the
                        work of others.
                      </li>
                    </ul>
                  </div>
                  <p>
                    All such cases of malpractices will be reported to the
                    Chairperson-Examination Committee for necessary action.
                  </p>

                  <p>
                    <b>3. Plagiarism</b>
                  </p>
                  <p>
                    Plagiarism is the copying of the language, structure, ideas,
                    or thoughts of another and representing the same as one's
                    own original work. Examples of plagiarism include: failing
                    to use quotation marks when directly quoting from a source;
                    failing to document distinctive ideas from a source;
                    fabricating or inventing sources; and copying information
                    from books and the internet.
                  </p>

                  <p>
                    <b>4. Sexual Harassment</b>
                  </p>
                  <div className="crs_list">
                    <ul>
                      <li>
                        Sexual harassment has come to be widely condemned as a
                        form of human rights violation, and as an infringement
                        on life and liberty as defined by the Constitution of
                        India
                      </li>
                      <li>
                        Sexual harassment by any member of the institute is
                        prohibited
                      </li>
                      <li>
                        Without feeling constrained by specific definitions, any
                        person who believes that his or her professional work or
                        personal values are compromised by sexual harassment
                        should feel free to report the matter to internal
                        committee.
                      </li>
                      <li>
                        Any complaint in this regard will be given due
                        cognizance and appropriate action will be taken against
                        the guilty by Chairperson Internal Complaints Committee
                        (ICC)
                      </li>
                    </ul>
                  </div>

                  <p className="inv-txt">
                    <b>5. Smoking, Alcohol and Contraband</b>
                  </p>
                  <div className="crs_list">
                    <ul>
                      <li>
                        Smoking is strictly prohibited in all public areas in
                        the campus.
                      </li>
                      <li>
                        Possession and consumption of alcohol by students inside
                        the campus or outside the immediate campus premises is
                        banned
                      </li>
                      <li>
                        Possession and consumption of contraband, narcotics, and
                        psychotropic drugs is illegal and is banned.
                      </li>
                    </ul>
                  </div>

                  <p className="inv-txt">
                    <b>6. Dressing and Grooming</b>
                  </p>
                  <div className="crs_list">
                    <ul>
                      <li>
                        Appropriate dressing and grooming can aid us in
                        projecting a professional image. Dress or clothing,
                        includes all articles of clothing, accessories, bags, or
                        visible body art. Grooming includes attention to
                        hygiene, neatness, as well as care and presentation of
                        the skin, hair, and nails
                      </li>
                      <li>
                        While we believe that the way of dressing should be, at
                        best, left to individual, it requires the students to be
                        dressed in a dignified manner conducive to a business
                        school environment. Students need to cultivate an
                        appearance that expresses motivation and professionalism
                      </li>
                      <li>
                        Students are required to be dressed in business formals
                        or business casuals in the classrooms as well as in
                        other areas where academic activities take place.
                        Clothes like shorts, Bermuda’s, flip flops, bathroom
                        slippers etc., must be avoided
                      </li>
                      <li>
                        Students will be given identification (ID) cards in Term
                        I. Students are expected to wear their ID cards inside
                        the campus and should always carry it with them when
                        they go outside the campus.
                      </li>
                    </ul>
                  </div>

                  <p className="inv-txt">
                    <b>7. Mobile Phones in Classroom</b>
                  </p>
                  <div className="crs_list">
                    <ul>
                      <li>
                        Students are not allowed to use their mobile phones in
                        the classrooms.
                      </li>
                      <li>
                        Students may use their laptops for their digital
                        requirements and may also use the network connectivity
                        in the class. However, to do so, use of mobile phones or
                        any similar hand-held devices will not be allowed in the
                        class.
                      </li>
                    </ul>
                  </div>

                  <p>
                    If any student violates the abovementioned regulations with
                    respect to professional behavior indicated in this section,
                    it will be referred to the Disciplinary Committee and will
                    be liable for the punishment awarded by the committee. Refer
                    to section I-3.2 for further details on possible punitive
                    actions.
                  </p>
                  <p>
                    The institute will not be held responsible if a student gets
                    involved in activities which are illegal as per the law of
                    the land, resulting in action by regulatory authorities like
                    the police.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Carousel */}
        <section
          className="placement-alliances-section py-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <PlacementAlliances />
        </section>
      </section>
    </>
  );
}
