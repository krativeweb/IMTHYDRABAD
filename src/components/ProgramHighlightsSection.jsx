// components/ProgramHighlightsSection.jsx
"use client";
import { useState } from "react";

export default function ProgramHighlightsSection() {
  const [showFaq, setShowFaq] = useState(false);

  return (
    <>
      <section className="py-5" style={{ background: "#0f265a" }}>
        <div className="container">
          <h3 className="text-center fw-bold mb-5 text-warning">
            PROGRAM HIGHLIGHTS
          </h3>

          <div className="row g-4 justify-content-center mt-4">
            {/* Card 1 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="highlight-card bg-light p-4 text-center h-100 border rounded-4 shadow-sm">
                <div className="icon-circle mb-3">
                  <img
                    src="/admission/media/imt1.png"
                    alt=""
                    style={{ width: 70 }}
                  />
                </div>
                <p className="mb-0">One to One Mentoring by Industry Leaders</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="highlight-card bg-light p-4 text-center h-100 border rounded-4 shadow-sm">
                <div className="icon-circle mb-3">
                  <img
                    src="/admission/media/imt9.png"
                    alt=""
                    style={{ width: 70 }}
                  />
                </div>
                <p className="mb-0">
                  IMT Sponsored Global Certifications in Select Areas
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="highlight-card bg-light p-4 text-center h-100 border rounded-4 shadow-sm">
                <div className="icon-circle mb-3">
                  <img
                    src="/admission/media/imt3.png"
                    alt=""
                    style={{ width: 70 }}
                  />
                </div>
                <p className="mb-0">
                  Hands on workshops on emerging areas in technology &amp;
                  business as a whole
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="highlight-card bg-light p-4 text-center h-100 border rounded-4 shadow-sm">
                <div className="icon-circle mb-3">
                  <img
                    src="/admission/media/imt4.png"
                    alt=""
                    style={{ width: 70 }}
                  />
                </div>
                <p className="mb-0">Distinguished Speaker Series</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="highlight-card bg-light p-4 text-center h-100 border rounded-4 shadow-sm">
                <div className="icon-circle mb-3">
                  <img
                    src="/admission/media/imt5.png"
                    alt=""
                    style={{ width: 70 }}
                  />
                </div>
                <p className="mb-0">Industry Immersion</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="highlight-card bg-light p-4 text-center h-100 border rounded-4 shadow-sm">
                <div className="icon-circle mb-3">
                  <img
                    src="/admission/media/imt6.png"
                    alt=""
                    style={{ width: 70 }}
                  />
                </div>
                <p className="mb-0">Social Immersion</p>
              </div>
            </div>

            {/* Card 7 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="highlight-card bg-light p-4 text-center h-100 border rounded-4 shadow-sm">
                <div className="icon-circle mb-3">
                  <img
                    src="/admission/media/imt7.png"
                    alt=""
                    style={{ width: 70 }}
                  />
                </div>
                <p className="mb-0">Industry Guided Courses</p>
              </div>
            </div>

            {/* Card 8 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="highlight-card bg-light p-4 text-center h-100 border rounded-4 shadow-sm">
                <div className="icon-circle mb-3">
                  <img
                    src="/admission/media/imt8.png"
                    alt=""
                    style={{ width: 70 }}
                  />
                </div>
                <p className="mb-0">Contemporary Domain Inputs</p>
              </div>
            </div>

            {/* Card 9 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="highlight-card bg-light p-4 text-center h-100 border rounded-4 shadow-sm">
                <div className="icon-circle mb-3">
                  <img
                    src="/admission/media/imt2.png"
                    alt=""
                    style={{ width: 70 }}
                  />
                </div>
                <p className="mb-0">Global Immersion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Band After Global Immersion */}
      <section style={{ background: "#0f2559" }}>
        <div className="container py-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <h3 className="mb-0 text-white fw-semibold">
            Know more about IMT-Hyderabad
          </h3>

          <button
            className="btn btn-warning px-4 py-2 fw-semibold"
            onClick={() => setShowFaq(!showFaq)}
            style={{ background: "#ffc108" }}
          >
            Read More
          </button>
        </div>
      </section>

      {/* Accordion Container (Content Part 2 & 3 mein aayega) */}
      {showFaq && (
        <section className="py-4" style={{ background: "#ffffff" }}>
          <div className="container">
            {/* Yahan PDF ka poora data exactly as-it-is aayega (Part 2 & 3) */}
            {showFaq && (
              <section className="py-8 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                  {/* Academic Block and LRC */}
                  <div className="mb-8">
                    <h3 className=" pb-2">
                      Admissions FAQs: Academic Block and LRC
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q1. What are the class (academic) timings?
                        </p>
                        <p className="text-gray-700">
                          The students would be provided with the proper
                          schedule upon the start of their academic sessions.
                          Usually, the classes for the first-year students begin
                          at 10:30AM.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q2. Are there classes on the weekends as well?
                        </p>
                        <p className="text-gray-700">
                          The regular classes are conducted only from Monday to
                          Friday and there are no classes on weekends. However,
                          on some weekends, industry connect sessions, guest
                          lectures are organized where students can gain
                          exposure and practical learning from industry experts.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q3. Can you tell us about the classrooms? How are they
                          equipped?
                        </p>
                        <p className="text-gray-700">
                          The Lecture Theatres (LTs) are well equipped with all
                          necessary facilities. There is a smartboard for better
                          learning and WIFI connection for everyone. The LTs are
                          equipped with both fans and Air Conditioners.
                          Biometric machines are installed in each LT for
                          attendance records. Students also get charging points
                          on their tables.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q4. Do we need to move to different classrooms for
                          each lecture?
                        </p>
                        <p className="text-gray-700">
                          No, each section is allotted with a Lecture Theatre
                          (LT) and all the lectures are conducted in that same
                          LT itself.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q5. Do we get the course books from the college or do
                          we need to purchase them?
                        </p>
                        <p className="text-gray-700">
                          All the students get the course books from the college
                          itself. There is a dedicated Learning Resource Centre
                          (LRC) from where you can collect the books and study
                          material.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q6. Is there any uniform or dress code to be followed
                          in the classes?
                        </p>
                        <p className="text-gray-700">
                          The students are expected to be in Business Casuals
                          during regular classes and Business Formals during
                          guest lectures, industry connect sessions etc.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q7. What are the resources available in college
                          library?
                        </p>
                        <p className="text-gray-700">
                          The college has access to various books, eBook,
                          journal, database software's, research paper, magazine
                          etc. To know more in detail please follow the link:{" "}

                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q8. What are the timings of LRC?
                        </p>
                        <p className="text-gray-700">
                          • Mon-Fri – 9.30 AM to 11.30 PM
                          <br />
                          • Sat - 9:30 AM to 8:30 PM
                          <br />• Sun – 9.30AM to 6.00 PM
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q9. Do we need to take subscription for accessing
                          various databases?
                        </p>
                        <p className="text-gray-700">
                          All the databases are included in the course
                          structure.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q10. Do we have remote access to databases?
                        </p>
                        <p className="text-gray-700">
                          The library provides users single window access to
                          their digital resources on the cloud. It has an
                          ability to provide access to scattered e-resources of
                          the institution, bringing them under one umbrella,
                          along with subscribed e-Journals, databases that too
                          anytime from anywhere.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q11. What is remote access facility to LRC resources?
                        </p>
                        <p className="text-gray-700">
                          This is a Web-based service for off-campus library
                          online access. All registered users are already
                          enrolled in the Remote Login server.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q12. Is there a dedicated computer lab?
                        </p>
                        <p className="text-gray-700">
                          Yes, there is a Computer Resource Centre (CRC),
                          equipped with 240 computers in the IT labs. It is open
                          6 days a week.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q13. Are faculty available in academic block for
                          assistance at all times?
                        </p>
                        <p className="text-gray-700">
                          Yes, there are dedicated faculty offices in the
                          academic block where students can access the faculty
                          for any assistance at specified timings.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Provisional Issues */}
                  <div className="mb-8">
                    <h3 className=" pb-2">Provisional Issues</h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          1. I am a final year student and haven't received my
                          results yet, so will my admission impliedly be
                          considered as a provisional admission?
                        </p>
                        <p className="text-gray-700">
                          Initially all the students are sent a provisional
                          admission offer letter. We do consider the final year
                          students and so provide them with a date post their
                          joining by which they will have to submit their
                          degrees.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          2. Can provisional students avail the college
                          facilities?
                        </p>
                        <p className="text-gray-700">
                          Yes, once we call you to the campus, we make sure that
                          we help and take your utmost responsibility as an
                          institute.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          3. In case, I become a provisional student, and I am
                          left with no other offers anymore, so how will I be
                          helped?
                        </p>
                        <p className="text-gray-700">
                          The college tries its best to accommodate the
                          students. In this case, we give you a chance to opt
                          for a different course if we have the availability of
                          seats.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          4. If I make a mistake in my application or documents,
                          will it affect my admission status?
                        </p>
                        <p className="text-gray-700">
                          You can reach out to the admissions office, and they
                          will guide you further.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          5. If my admission stands cancelled, will I be
                          refunded?
                        </p>
                        <p className="text-gray-700">
                          Once your admission stands cancelled, you will be
                          reimbursed with your installments after following the
                          procedure which will be communicated.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Scholarships */}
                  <div className="mb-8">
                    <h3 className=" pb-2">
                      Scholarships, Campus Life and Rules & Regulations
                    </h3>
                    <h3 className="text-2xl font-bold mb-4 text-gray-700">
                      Scholarships
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q1. What scholarships are available for students?
                        </p>
                        <p className="text-gray-700">
                          For detailed information on available scholarships and
                          financial aid please refer to the following link:{" "}
                        
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q2. How can I apply for scholarships?
                        </p>
                        <p className="text-gray-700">
                          Scholarship applications are typically submitted
                          during the admission process. Candidates need to
                          provide the required documents, such as income
                          certificates for the TFW Scheme, and meet the
                          eligibility criteria for merit-based scholarships.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q3. What is the process to avail the TFW waiver
                          scholarship?
                        </p>
                        <p className="text-gray-700">
                          The Tuition Fee Waiver (TFW) scheme offers a 100%
                          waiver on the academic fee for eligible and
                          shortlisted candidates. However, students must still
                          cover other fees and pay Rs 12,000 per month for
                          academic amenities and facilities. This payment is
                          made in advance on a quarterly basis.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q4. Are scholarships renewable every year?
                        </p>
                        <p className="text-gray-700">
                          Scholarships at IMT Hyderabad are generally awarded
                          for the entire program duration but are reviewed on a
                          term basis. To continue receiving the scholarship each
                          year, recipients must maintain their academic
                          performance and meet any specific conditions outlined.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q5. Can I avail multiple scholarships at once?
                        </p>
                        <p className="text-gray-700">
                          Generally, students can avail only one scholarship at
                          a time. However, specific rules may apply, and it's
                          best to consult the admissions office for detailed
                          information on combining scholarships.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q6. Are there any additional financial aid options
                          besides scholarships?
                        </p>
                        <p className="text-gray-700">
                          Students can also explore options like student loans,
                          work-study programs, and grants.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Campus Life */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-700">
                      Campus Life
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q1. What facilities are available on the IMT Hyderabad
                          campus, including health and wellness amenities?
                        </p>
                        <p className="text-gray-700">
                          IMT Hyderabad offers a modern library, well-equipped
                          classrooms, computer labs, sports facilities, a gym, a
                          cafeteria, and on-campus hostels for male and female
                          students. The campus also includes recreational areas,
                          a student activity centre, Wi-Fi access, a health
                          centre with a doctor on call, and mental health
                          support services.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q2. What extracurricular activities are available at
                          IMT Hyderabad, and what is the campus culture like?
                        </p>
                        <p className="text-gray-700">
                          IMT Hyderabad offers a vibrant and inclusive campus
                          culture, with numerous extracurricular activities.
                          Students can join various clubs and committees such as
                          the Media Relations Committee, TEDx, and the Cultural
                          Club. The campus regularly hosts sports tournaments,
                          cultural festivals, and industry interaction sessions,
                          providing ample opportunities for students to engage
                          in activities that match their interests and career
                          goals.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q3. What kind of student support services are
                          available?
                        </p>
                        <p className="text-gray-700">
                          The campus offers various support services, including
                          academic counselling, career guidance, and placement
                          support. There is also a dedicated student affairs
                          team to address any concerns related to campus life,
                          academics, or personal well-being.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rules and Regulations */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-700">
                      Rules and Regulations
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q1. What are the attendance requirements at IMT
                          Hyderabad?
                        </p>
                        <p className="text-gray-700">
                          Students are required to maintain a minimum of 80%
                          attendance in each course to be eligible for the
                          end-term examinations.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q2. What are the entry timings on the campus?
                        </p>
                        <p className="text-gray-700">
                          The entry timings are till 11:30 pm during the
                          weekdays and till 11:59 pm during the weekends.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q3. What is the procedure if we want to go for a night
                          out?
                        </p>
                        <p className="text-gray-700">
                          To apply for a night out, a request must be raised on
                          the ERP portal at least a day before the night out
                          providing the reason and the emergency contact number.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q4. What is the means of transport to commute to
                          nearby cities?
                        </p>
                        <p className="text-gray-700">
                          For commuting to nearby cities, students have several
                          options: Ola and Uber's services are available on
                          campus, local auto rickshaws can be booked, and there
                          is a college shuttle service on weekends.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q5. Is there any dress code to maintain during the
                          classes?
                        </p>
                        <p className="text-gray-700">
                          There is no dress code for the classes however
                          students are expected to dress decently. For all the
                          speaker sessions and formal events, business formals
                          are mandatory.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q6. What is the policy on alcohol and substance use?
                        </p>
                        <p className="text-gray-700">
                          The use of alcohol, drugs, or any other illegal
                          substances is strictly prohibited on campus. Any
                          student found violating this policy will face strict
                          disciplinary action, including possible expulsion.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Laundry and Medical Services */}
                  <div className="mb-8">
                    <h3 className=" pb-2">Laundry and Medical Services</h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          1. Where is the laundry room in the hostel?
                        </p>
                        <p className="text-gray-700">
                          There is no separate laundry room to wash your
                          clothes, but the college campus has laundry facilities
                          where you can get your clothes washed and ironed.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          2. Is the laundry service free?
                        </p>
                        <p className="text-gray-700">
                          NO, there are laundry charges that a student is
                          required to pay. The charges are very economical for a
                          student to avail of the services.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          3. How do we get our washed clothes delivered?
                        </p>
                        <p className="text-gray-700">
                          The laundry sends you a WhatsApp text mentioning your
                          order ID and that your clothes are ready, and you can
                          then go and pick up your clothes from the laundry
                          itself.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          4. What are the operating hours for laundry?
                        </p>
                        <p className="text-gray-700">
                          The laundry is operational for six days of the week
                          except Monday, and the timings are from morning 11 am
                          to 5 pm.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          5. Are there medical services available on the campus?
                        </p>
                        <p className="text-gray-700">
                          There is a medical clinic inside the campus; you can
                          contact the clinic during clinic hours and avail the
                          services. We also have an ambulance service in case of
                          emergencies. In addition to this, we also provide one
                          on one counselling sessions.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          6. Are Female doctors available for girls to consult?
                        </p>
                        <p className="text-gray-700">
                          No, female doctors are not residential on campus.
                          However, female doctors visit the campus on specific
                          days. We also get notified about the same well in
                          advance.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          7. Are there any fees for using medical facilities?
                        </p>
                        <p className="text-gray-700">
                          All the facilities, including consultation, are free
                          of cost for the students at the campus.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Courses and Pedagogy */}
                  <div className="mb-8">
                    <h3 className=" pb-2">Courses and Pedagogy</h3>
                    <h3 className="text-2xl font-bold mb-4 text-gray-700">
                      Pedagogy
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q1. How reliable and accessible is the
                          pedagogy/faculty of the institute?
                        </p>
                        <p className="text-gray-700">
                          IMT Hyderabad has a strong faculty base with highly
                          qualified professors who are willing to help students
                          as and when required.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q2. What is the qualification of the faculty?
                        </p>
                        <p className="text-gray-700">
                          IMT Hyderabad has a highly qualified faculty base with
                          professors who have been and currently still involved
                          in research work. To know more about the faculty base
                          visit the official page of IMT Hyderabad:{" "}
                       
                        </p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 mt-6 text-gray-700">
                      Courses and Curriculum
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q3. What is the concept of dual specialisation?
                        </p>
                        <p className="text-gray-700">
                          Dual specialisation takes effect in the second year of
                          the program where the student can take up any two
                          fields of specialisations that they might be
                          interested in.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q4. Does it apply to all streams or only those in
                          core? Will someone who has taken a specialisation
                          program in the first year also have the choice to take
                          up a dual major?
                        </p>
                        <p className="text-gray-700">
                          Dual specialisation is applicable for all streams.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q5. Are there separate cutoffs for all the programs or
                          is there one cutoff for all programs?
                        </p>
                        <p className="text-gray-700">
                          There is only one cutoff of all the respective
                          competitive examinations and that is applicable across
                          all the programs for that examination.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q6. What is the structure of the course?
                        </p>
                        <p className="text-gray-700">
                          A trimester system is followed. In the first year the
                          foundational subjects are covered that incorporates a
                          case study method for better understanding which is
                          followed by the SIP at the end of the first academic
                          year. In the second year specialisation and core
                          subjects are covered. The course is concluded with the
                          final placements in the 2nd academic year.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q7. Is the curriculum different for the different
                          specialisations?
                        </p>
                        <p className="text-gray-700">
                          Courses are same in the first year for all
                          irrespective of the specialisation. In the second
                          year, courses get specialised based on the
                          specialisation you take.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q8. What specializations are available in the second
                          year?
                        </p>
                        <p className="text-gray-700">
                          Finance, Marketing, HR, Operations (LSCM), Business
                          Analytics, Strategy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Career Opportunities and Placements */}
                  <div className="mb-8">
                    <h3 className=" pb-2">
                      Career Opportunities and Placements
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          1. How does IMT Hyderabad support students in securing
                          internships and placements?
                        </p>
                        <p className="text-gray-700">
                          IMT Hyderabad has a dedicated Corporate Relations
                          Office (CRO) that actively engages with students
                          throughout their academic journey. The CRO organises
                          pre-placement talks, workshops, and mock interviews to
                          prepare students for the recruitment process, ensuring
                          they are well-equipped to secure both internships and
                          final placements.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          2. What is the placement process at IMT Hyderabad?
                        </p>
                        <p className="text-gray-700">
                          The placement process begins with a pre-placement talk
                          where companies present themselves and outline job
                          roles, expectations, and the selection process. This
                          is followed by various rounds, including aptitude
                          tests, group discussions, and interviews as specified
                          by the recruiting companies.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          3. When does the placement season start, and what is
                          the average package offered?
                        </p>
                        <p className="text-gray-700">
                          The placement season typically starts around September
                          or October each year. The average package offered
                          varies depending on market conditions and student
                          performance, with IMT Hyderabad maintaining a
                          competitive average CTC. For further information about
                          placements, you can go the college's website:{" "}
                      
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          4. When does the internship process start, and what is
                          the average stipend?
                        </p>
                        <p className="text-gray-700">
                          The internship process begins during the second term
                          of the first year, with the actual internships taking
                          place over the summer break for 8 to 12 weeks. For the
                          average stipend figures and further details on
                          internship you can refer to the Placements page of the
                          college:{" "}
                        
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          5. Are internships mandatory for all students?
                        </p>
                        <p className="text-gray-700">
                          IMT Hyderabad offers three distinct options: the
                          Summer Internship Program (SIP), Student Exchange
                          Program (SEP), and Management Thesis (MTS). Students
                          are required to choose one of these options to fulfill
                          their program requirements. If the student doesn't
                          want to go with either of the two above, they could
                          write management thesis where they would be assigned a
                          faculty member to help them.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          6. What are the placement statistics for the new
                          courses in Supply Chain Management?
                        </p>
                        <p className="text-gray-700">
                          As this is a newly introduced course, specific
                          placement statistics will be available after the first
                          batch graduates. However, initial interactions with
                          industry leaders indicate strong interest, and we are
                          optimistic about the placement outcomes.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          7. What kind of companies visit the campus for
                          recruitment in Supply Chain Management?
                        </p>
                        <p className="text-gray-700">
                          Companies from diverse sectors, including logistics,
                          manufacturing and consulting, are expected to recruit
                          from these courses. Discussions with industry leaders
                          are ongoing to secure robust placement opportunities.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          8. How does IMT Hyderabad help students in building
                          their resumes and preparing for interviews?
                        </p>
                        <p className="text-gray-700">
                          The Corporate Relations Office conducts regular
                          resume-building workshops, interview preparation
                          sessions, and personalised coaching. Industry experts
                          also conduct sessions on current trends, helping
                          students align their skills with market needs.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          9. Does IMT Hyderabad offer any fellowship programs?
                        </p>
                        <p className="text-gray-700">
                          Yes, IMT Hyderabad offers a fellowship program
                          designed to provide students with unique opportunities
                          to engage in research, consultancy projects, or
                          teaching assistance, enhancing their academic and
                          professional experience. Link:{" "}
                         
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Collaborations and Industry Engagement */}
                  <div className="mb-8">
                    <h3 className=" pb-2">
                      Collaborations and Industry Engagement
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          1. What are the major industry collaborations IMT
                          Hyderabad has for the new course in Supply Chain
                          Management?
                        </p>
                        <p className="text-gray-700">
                          IMT Hyderabad actively collaborates with leading
                          companies and industry bodies in Supply Chain
                          Management. These collaborations include guest
                          lectures, live projects, and internships, providing
                          students with real-world exposure and insights. CII-IL
                          and IMT H(LSCM):{" "}
                         
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          2. Are there any special workshops or seminars
                          conducted by industry experts for Supply Chain
                          Management students?
                        </p>
                        <p className="text-gray-700">
                          Yes, IMT Hyderabad regularly hosts workshops and
                          seminars led by industry experts in this field. These
                          sessions focus on the latest trends, challenges, and
                          opportunities, keeping students updated and
                          industry-ready.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          3. How does IMT Hyderabad ensure that the curriculum
                          for Supply Chain Management remains aligned with
                          industry trends?
                        </p>
                        <p className="text-gray-700">
                          The curriculum is designed in consultation with
                          industry leaders and is regularly updated to reflect
                          the latest developments. Faculty members, with their
                          industry experience, bring relevant and practical
                          insights into the classroom.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          4. Can students engage in live projects or consulting
                          assignments with companies during their course?
                        </p>
                        <p className="text-gray-700">
                          Yes, students are encouraged to take on live projects
                          and consulting assignments with companies, allowing
                          them to apply their classroom learning to real-world
                          challenges and gain valuable hands-on experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Clubs and Committees */}
                  <div className="mb-8">
                    <h3 className=" pb-2">Clubs and Committees</h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q1. How do I join a club or committee?
                        </p>
                        <p className="text-gray-700">
                          You can usually join a club or committee by signing up
                          during the registration period, which is typically
                          held at the beginning of the academic year. The
                          selection for the same is carried out through multiple
                          rounds of interviews by a combination of existing
                          members and faculty.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q2. Are there any membership fees for joining clubs?
                        </p>
                        <p className="text-gray-700">
                          No, there are no membership fees required to join the
                          clubs.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q3. What kind of activities do clubs and committees
                          organize?
                        </p>
                        <p className="text-gray-700">
                          Clubs and committees organize a variety of activities
                          such as workshops, guest lectures, competitions,
                          cultural events, networking opportunities, and
                          community service projects.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q4. How can being a part of a club or committee
                          benefit me?
                        </p>
                        <p className="text-gray-700">
                          Being a part of a club or committee helps you develop
                          leadership skills, build a professional network, gain
                          practical experience, and strengthen your resume.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q5. Can I start a new club or committee?
                        </p>
                        <p className="text-gray-700">
                          Yes, if you have a unique idea and enough interest
                          from other students, you can start a new club or
                          committee with approval from the administration.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q6. Can you tell us about clubs and committees at IMT
                          Hyderabad?
                        </p>
                        <p className="text-gray-700">
                          IMT Hyderabad is a student-driven institute. We have
                          12 clubs and 6 committees. Clubs and Committees:{" "}
                          
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q7. Is there any placement committee driven by
                          students? If yes, what is the selection process for
                          it?
                        </p>
                        <p className="text-gray-700">
                          Yes, there is a Students Committee of Placements
                          (SCOP). The selection for the same is carried out
                          through multiple rounds of interviews by a combination
                          of existing SCOP members and faculty.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q8. Is there any club or society related to research
                          if someone wants to work under a professor?
                        </p>
                        <p className="text-gray-700">
                          There is currently no club for that. But you can
                          always form groups with students and carry out the
                          research. The faculty at the college is very
                          supportive and can offer valuable help and insights
                          for the same.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q9. How does this club/committee help in networking
                          with industry professionals?
                        </p>
                        <p className="text-gray-700">
                          The club facilitates networking with industry
                          professionals by organizing events like guest
                          lectures, panel discussions, webinars, and industry
                          visits. These events provide direct interaction
                          opportunities, allowing members to connect with and
                          learn from experienced professionals in the field.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Anti-Ragging, In and Out Timings and Registration Process */}
                  <div className="mb-8">
                    <h3 className=" pb-2">
                      Anti-Ragging, In and Out Timings and Registration Process
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q1. What if a student gets Ragging from seniors or by
                          any student?
                        </p>
                        <p className="text-gray-700">
                          The Students will be given a Anti-Ragging form in the
                          starting which they have to fill and submit. There
                          will be designated committee and they will make a
                          group in which all the students are members and if
                          students gets ragged then they can post their issue
                          and the issue will be resolved within a day or within
                          a specific time limit.{" "}
                          
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q2. What is the registration process when we come to
                          the college?
                        </p>
                        <p className="text-gray-700">
                          Once the student enters the campus, they are directed
                          to the various rooms where they will receive welcome
                          kits, after which they will have to submit their
                          documents and go through medical checkups. The flow of
                          the events:
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                          <li>
                            Welcome Kit: Includes the student handbook, hostel
                            contact details, ID number, and all forms required
                            during the registration process.
                          </li>
                          <li>
                            Fee Confirmation: Verification of fee payment
                            submission.
                          </li>
                          <li>
                            Photograph: Student photograph will be taken for the
                            official ID card.
                          </li>
                          <li>
                            Medical Examination: A full medical check-up will be
                            conducted, and the relevant medical form will be
                            completed for institutional records and future
                            reference.
                          </li>
                          <li>
                            Document Verification: Submission and verification
                            of all required documents along with their
                            photocopies.
                          </li>
                          <li>
                            LRC Kit: Name plate, bag, and water bottle will be
                            provided.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Hostel Facilities */}
                  <div className="mb-8">
                    <h3 className=" pb-2">Hostel Facilities</h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q1. Is there any Wi-Fi connectivity in the hostels?
                        </p>
                        <p className="text-gray-700">
                          Yes, Wi-Fi connectivity is available in each of the
                          hostel floors for the convenience of the students.
                          Additionally, there is a LAN cable facility provided
                          in every room to ensure a seamless and reliable
                          internet connection.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q2. Is there any laundry room in the hostel with
                          washing machines?
                        </p>
                        <p className="text-gray-700">
                          Yes, laundry service is available (not included in
                          academic fees, to be paid separately), however not in
                          each hostel. One of the hostels has a dedicated
                          laundry room for all students available at the ground
                          floor for service from Tuesday to Sunday. Students
                          would need to drop and pick their clothes from the
                          laundry room.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q3. Do students choose their hostel rooms? What is the
                          procedure for applying for a hostel room?
                        </p>
                        <p className="text-gray-700">
                          No, hostel rooms are randomly allotted once a student
                          enters the campus during the registration process.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q4. Is there any hostel timing?
                        </p>
                        <p className="text-gray-700">
                          No, there is no entry or exit time for the hostel.
                          However, a student must enter the campus by 11:30 pm
                          during the weekdays and 11:59 pm on the weekends. This
                          is done keeping students' safety in mind.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q5. Can students stay overnight outside the campus?
                        </p>
                        <p className="text-gray-700">
                          Yes, students can choose to stay overnight outside the
                          campus once they have submitted the night out request
                          via ERP which has to be approved by the warden.
                          However, students are free to roam around within the
                          campus 24x7.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q6. What do students get in the hostel room?
                        </p>
                        <p className="text-gray-700">
                          IMT's hostel rooms are furnished with a bed, a bed
                          side table, study table, chair, cupboard, a dry rack
                          and a fan.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q7. Can students stick posters or paint in the walls
                          of the hostel rooms?
                        </p>
                        <p className="text-gray-700">
                          No, sticking posters, painting on the walls or
                          damaging the walls/room is not entertained and would
                          lead to deduction from the security deposit paid.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q8. How can a student raise grievance regarding hostel
                          facilities?
                        </p>
                        <p className="text-gray-700">
                          There is a dedicated escalation matrix and process in
                          place through which students can raise their
                          grievances regarding hostel facilities which would be
                          resolved at the earliest.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q9. How many washrooms are there on each floor of the
                          hostel?
                        </p>
                        <p className="text-gray-700">
                          Generally, there are 2 common washrooms available on
                          each floor of the hostel. Each of them is equipped
                          with 4 washrooms (mix of Indian and Western), 4
                          bathrooms and 3 washbasins. Additionally, each
                          hostel's ground floor has a washroom for the disabled.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q10. Do we have single or double occupancy in the
                          hostel?
                        </p>
                        <p className="text-gray-700">
                          All the rooms are single occupancy rooms at IMT,
                          Hyderabad.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q11. Are CCTV cameras installed in hostel corridors?
                        </p>
                        <p className="text-gray-700">
                          No, CCTV cameras are not installed in the hostel
                          corridors keeping the privacy of the students in mind.
                          However, cameras are installed outside each hostel
                          entry.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q12. How many charging points are available in a room?
                        </p>
                        <p className="text-gray-700">
                          There are 2 charging points installed in a room.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q13. What is the wardrobe configuration in each room?
                        </p>
                        <p className="text-gray-700">
                          Each wardrobe is equipped with 4 racks providing ample
                          space to keep your belongings.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q14. Do hostel rooms have balconies or is there a
                          common balcony?
                        </p>
                        <p className="text-gray-700">
                          No, hostel rooms do not have balconies and there are
                          no common balconies in hostels.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q15. Is there a common room in each hostel? If yes, is
                          it gender restricted?
                        </p>
                        <p className="text-gray-700">
                          Yes, there is a dedicated common room in three
                          hostels. One common room is accessible for both boys
                          and girls and the other two for boys only.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q16. How often are the washrooms cleaned?
                        </p>
                        <p className="text-gray-700">
                          We have cleaners who clean the washrooms 3-4 times
                          every day.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q17. Are male helpers allowed in the girl's hostel?
                        </p>
                        <p className="text-gray-700">
                          Any male helper such as plumber, electrician or
                          carpenter is always accompanied by a female guard in
                          the girl's hostel. Also, the girls are always pre
                          informed about such male presence in the hostel.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q18. Is medical room available in hostels?
                        </p>
                        <p className="text-gray-700">
                          Yes, a dedicated medical room is available in one of
                          the hostels. It consists of 1 qualified doctor, 1
                          paramedic staff and basic medicines and medical
                          equipment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gym and Sports */}
                  <div className="mb-8">
                    <h3 className=" pb-2">Gym and Sports</h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          1. Is a Gym facility available on campus for students?
                        </p>
                        <p className="text-gray-700">
                          Yes, it is available for students in operational hours
                          with sufficient types of modern equipment and a cardio
                          room.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          2. What are the operational hours for the Gym?
                        </p>
                        <p className="text-gray-700">
                          In the morning, it is from 5:30 AM to 9:30 AM. In the
                          evening, it is from 5:30 PM to 9:30 PM on weekdays as
                          well as weekends.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          3. Is the gym fully air-conditioned?
                        </p>
                        <p className="text-gray-700">
                          No, it's not fully air-conditioned but there is enough
                          ventilation.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          4. Are there any rules and restrictions for the Gym?
                        </p>
                        <p className="text-gray-700">
                          Yes, there are rules to which one should adhere and no
                          property damage is acceptable.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          5. Is gym access included in the tuition fees or do
                          students need to purchase a separate membership?
                        </p>
                        <p className="text-gray-700">
                          It is included in the tuition fees so you don't have
                          to purchase membership separately for the same.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          6. What are the different equipments available for
                          exercise in Gym?
                        </p>
                        <p className="text-gray-700">
                          There are ample equipments which include dumbells of
                          different weights, smith machine, flat bench,
                          cross-fly leg press, and others.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          7. What are the sports events that take place on
                          campus?
                        </p>
                        <p className="text-gray-700">
                          There are many events like Football, Cricket,
                          Badminton championship, and many more for both girls
                          and boys. There are inter-college competitions in
                          which students from other B Schools come and compete
                          for the trophies.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          8. What about the sports equipments?
                        </p>
                        <p className="text-gray-700">
                          There is a storage room for the same where you can
                          avail all the required equipments after they are
                          issued by the Co-ordinator.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          9. Is there a gym trainer for the proper exercise?
                        </p>
                        <p className="text-gray-700">
                          Our college curriculum supports peer learning hence
                          there is no gym trainer so you can learn among
                          yourselves.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          10. Are there any student clubs or organizations
                          related to fitness and sports that we can join after
                          getting into college?
                        </p>
                        <p className="text-gray-700">
                          Yes, we have various clubs and committees for
                          different operations but for the gym we have the
                          ATHFLEX Committee and for sports events, we have the
                          ALTIUS Club which manages all the operations and
                          sports events of the campus.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          11. What are the sports facilities available on
                          campus?
                        </p>
                        <p className="text-gray-700">
                          There is sports equipment available that you can use
                          after the procedure, and there is a volleyball court,
                          a badminton court, a cricket court, a basketball
                          court, a football ground, and indoor games to promote
                          health and fitness along with academics.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          12. Do we have to be a part of any club or committee
                          to participate in the sports events?
                        </p>
                        <p className="text-gray-700">
                          These are open to all campus students. You can
                          participate and compete after the desired
                          participation process.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mess and Canteen */}
                  <div className="mb-8">
                    <h3 className=" pb-2">Mess and Canteen</h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q1. What are the amenities provided by the college?
                        </p>
                        <p className="text-gray-700">
                          The college offers a range of amenities designed to
                          facilitate and enhance the student experience. It
                          offers laundry services, gym, stationary and Xerox,
                          ATM, clinic, student parking, IT labs, cafeteria,
                          shuttle service, library and other online resources.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q2. How is the mess food? What varieties does it
                          offer?
                        </p>
                        <p className="text-gray-700">
                          We have a day-to-day basis food quality check for the
                          mess food. Keeping diversity in mind, we have fresh
                          menus designed every month. The menu includes a proper
                          balance of vegetarian and non-vegetarian delicacies.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q3. How many meals are served in a day?
                        </p>
                        <p className="text-gray-700">
                          Four meals are served in a day which includes
                          breakfast, lunch, the evening snacks and dinner.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q4. Does any food delivery app deliver to the campus?
                        </p>
                        <p className="text-gray-700">
                          Yes, apps like Zomato, Swiggy and Big Basket and
                          Blinkit deliver to the campus. Additionally, there is
                          also a cafeteria within the campus itself where
                          different food options are available for the students.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q5. Can students bring their vehicles?
                        </p>
                        <p className="text-gray-700">
                          Yes, students are permitted to bring their own
                          two-wheeled or four-wheeled vehicles to the college,
                          provided that they do so at their own risk and
                          responsibility. They also have their own dedicated
                          space for parking. Wearing a helmet and adhering to
                          traffic regulations are strictly mandatory.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q6. Is there a canteen or similar facility available
                          for students to access meals when the mess is closed?
                        </p>
                        <p className="text-gray-700">
                          Yes, there is an on-campus cafeteria that operates
                          from 11:00 AM to 2:00 AM. It offers a wide range of
                          items, including snacks, ice cream, fresh juices, etc.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q7. Does the college provide any transportation
                          facilities?
                        </p>
                        <p className="text-gray-700">
                          Yes, the college provides transportation services
                          which connects the students to the city once a week.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          Q8. Are parents allowed to stay in the campus for few
                          days? If yes, is the facility paid or not?
                        </p>
                        <p className="text-gray-700">
                          Parents are allowed in the campus until designated
                          timings but cannot reside in their rooms.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PGDM - LSCM */}
                  <div className="mb-8">
                    <h3 className=" pb-2">
                      PGDM – LSCM (Logistics and Supply Chain Management)
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          1. What program courses are included in the LSCM?
                        </p>
                        <p className="text-gray-700">
                          Refer to the website to find list of courses as per
                          the session 2025-27:{" "}
                         
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          2. What are the admission requirements for the LSCM
                          program?
                        </p>
                        <p className="text-gray-700">
                          A minimum of 60% in the 10th and 12th is required.
                          Minimum three years Bachelors' degree or equivalent in
                          any discipline with minimum 50% marks in aggregate.
                          (Student should exhibit demonstrated interest in the
                          field of logistics) * CAT (2025)/ XAT (2026)/ GMAT
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          3. What are the admission requirements for appearing
                          candidates for the LSCM program?
                        </p>
                        <p className="text-gray-700">
                          Applicants who are appearing for the final-year degree
                          examination can also apply, subject to submission of
                          all mark sheets and pass certificate to IMT's Academic
                          Program office later. Failing to do so will result in
                          admission being cancelled.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          4. What is the size of the student body for this
                          course?
                        </p>
                        <p className="text-gray-700">
                          The course intake is 30 students.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          5. Is the LSCM program accredited by any
                          industry-recognized organizations?
                        </p>
                        <p className="text-gray-700">
                          The PGDM (LSCM) program launched by IMT(H) in
                          collaboration with CII, Institute of Logistics is
                          aimed to bridge this talent gap of smart logistics
                          professionals.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          6. What is CII-IL?
                        </p>
                        <p className="text-gray-700">
                          CII-Institute of Logistics (CII-IL) was incepted in
                          year 2004 by Confederation of Indian Industry as a
                          Centre of Excellence, in Logistics and Supply Chain
                          Management. CII-IL, centring industry as a pivotal
                          player in national development provide Logistics and
                          Supply Chain solutions through industry specific
                          training programs governing the metrics set for their
                          growth with global benchmark practices to enhance
                          productivity, efficiency, and profitability both at
                          macro and micro level. Website:{" "}
                         
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          7. Are there opportunities for internships or co-op
                          programs in LSCM?
                        </p>
                        <p className="text-gray-700">
                          Yes students participate in summer internships for
                          which they are helped right from the commencement of
                          the course with CV building in accordance with the
                          Placement committee of IMT – H.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          8. What kind of career support does the college
                          provide for LSCM students?
                        </p>
                        <p className="text-gray-700">
                          The following are provided to students which help in
                          enriching their profile: One on One Mentoring by
                          Industry Leaders, Global Immersion, Hands on workshops
                          in technology and business, Distinguished speaker
                          series, Industry Immersion, Contemporary Domain
                          Inputs, Industry Guided Courses.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          9. Can you highlight some of the career paths that
                          graduates of the LSCM program typically pursue?
                        </p>
                        <p className="text-gray-700">
                          The graduating students will be suitable for the
                          following profiles / Organizations: In the Long Run -
                          Students can get into CXO (Chief experience officer)
                          roles considering they have built a strong foundation
                          in LSCM domain. In the short run - Management
                          Consultants and Management Analysts w.r.t Operations,
                          Logistics and ITES. User companies such as FMCG,
                          Retail and E-commerce also are Interested in acquiring
                          students.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          10. How does the LSCM program address emerging trends
                          such as sustainability and technology integration?
                        </p>
                        <p className="text-gray-700">
                          The courses are delivered using a mix of pedagogical
                          methods such as case discussions, lectures,
                          simulation, industry visits, seminars, guest lectures,
                          and leverages experiential learning through industry
                          projects.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          11. Is prior work experience a pre-requisite for LSCM
                          students at IMT Hyderabad?
                        </p>
                        <p className="text-gray-700">
                          In Logistics and Supply Chain Management, at IMT – H,
                          work experience is not a strict prerequisite but is
                          often highly recommended or preferred. IMT-Hyderabad
                          also considers applicants with little or no work
                          experience, particularly if they have strong academic
                          backgrounds or relevant internships.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          12. How accessible are faculty members for mentoring
                          or research opportunities in these fields?
                        </p>
                        <p className="text-gray-700">
                          Here are some points which show the student-faculty
                          relationship: Beyond Office Hours Availability,
                          Mentorship Programs, Research Opportunities and
                          Faculty guidance, Industry visits.
                        </p>
                      </div>

                      <div className="bg-gray-50  rounded-lg">
                        <p className="font-bold text-lg mb-2">
                          13. Are there clubs and committees through which we
                          can develop inferential knowledge about logistics?
                        </p>
                        <p className="text-gray-700">
                          Logistics is one such area which is a part of all the
                          clubs in some way or the other be it Altius (Sports
                          club), Antragna (Cultural club), Impelz, TEDx,
                          Opuskriya etc. All the clubs organize events which
                          include inter college and university and attract huge
                          engagement. These are fully student driven clubs and
                          so they get good exposure and experience through these
                          events.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </section>
      )}
<section className="contact-strip">
  <div className="container">
    <div className="strip-inner">
      <h4>Contact Details</h4>
      <div className="strip-info">
        <span>
          <strong>Email ID :</strong>{" "}
          <a
            href="mailto:admissions@imthyderabad.edu.in"
            className="contact-link"
          >
            admissions@imthyderabad.edu.in
          </a>
        </span>

        <span className="divider">|</span>

        <span>
          <strong>Phone :</strong>{" "}
          <a href="tel:9391424273" className="contact-link">
            9391424273
          </a>{" "}
          /{" "}
          <a href="tel:9391424275" className="contact-link">
            9391424275
          </a>
        </span>
      </div>
    </div>
  </div>
</section>

<style jsx>{`
  .contact-strip {
    width: 100%;
    background: #0f2559;
    color: #fff;
    padding: 18px 0;
  }

  .strip-inner {
    text-align: center;
  }

  .strip-inner h4 {
    color: #ffcc00;
    margin-bottom: 8px;
    font-weight: 700;
  }

  .strip-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    font-size: 15px;
  }

  .strip-info strong {
    color: #ffcc00;
  }

  .divider {
    opacity: 0.6;
  }

  @media (max-width: 576px) {
    .strip-info {
      flex-direction: column;
      gap: 6px;
    }

    .divider {
      display: none;
    }
  }
    .contact-link {
  color: #ffffff;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
  color: #ffcc00;
}

`}</style>

    </>
  );
}
