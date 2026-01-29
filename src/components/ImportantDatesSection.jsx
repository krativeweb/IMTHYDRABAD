// components/ImportantDatesSection.jsx
export default function ImportantDatesSection() {


  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#0f265a" }}
      id="important-dates"
    >
      <div className="container">
        <h2 className="text-center text-warning fw-bold mb-5">
          REMEMBER IMPORTANT DATES
        </h2>
        <div className="row g-4 text-center mt-4">
          {/* Box 1 */}
          <div className="col-12 col-md-6 col-lg-2 flex-grow-1">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body d-flex flex-column justify-content-center">
                <h6 className="fw-semibold mb-2">
                  Online Common Application Open!
                </h6>
                <span className="badge bg-warning fs-6">September 2025</span>
              </div>
            </div>
          </div>
          {/* Box 2 */}
          <div className="col-12 col-md-6 col-lg-2 flex-grow-1">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body d-flex flex-column justify-content-center">
                <h6 className="fw-semibold mb-2">
                  Information &amp; Counselling Session
                </h6>
                <span className="badge bg-warning fs-6">To be updated</span>
              </div>
            </div>
          </div>
          {/* Box 3 */}
          <div className="col-12 col-md-6 col-lg-2 flex-grow-1">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body d-flex flex-column justify-content-center">
                <h6 className="fw-semibold mb-2">
                  IMT Admission Process Starts
                </h6>
                <span className="badge bg-warning fs-6">
                  1st week of Feb 2026
                </span>
              </div>
            </div>
          </div>
          {/* Box 4 */}
          <div className="col-12 col-md-6 col-lg-2 flex-grow-1">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body d-flex flex-column justify-content-center">
                <h6 className="fw-semibold mb-2">Declaration of Results</h6>
                <span className="badge bg-warning fs-6">
                  3rd week of Mar 2026
                </span>
              </div>
            </div>
          </div>
          {/* Box 5 */}
          <div className="col-12 col-md-6 col-lg-2 flex-grow-1">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body d-flex flex-column justify-content-center">
                <h6 className="fw-semibold mb-2">Classes Begin</h6>
                <span className="badge bg-warning fs-6">June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
