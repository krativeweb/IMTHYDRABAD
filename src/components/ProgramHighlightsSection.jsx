// components/ProgramHighlightsSection.jsx
import Image from "next/image";



export default function ProgramHighlightsSection() {
  return (
    <section className="py-5" style={{ background: "#0f265a" }}>
      <div className="container">
        {/* Title */}
        <h2 className="text-center fw-bold mb-5 text-warning">
          PROGRAM HIGHLIGHTS
        </h2>
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
  );
}
