

export default function AdmissionProcessSection() {
  return (
    <section className="py-5 bg-light" id="admission">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Admission <span className="">Process</span>
          </h2>
          <p className="text-muted">
            Follow these simple steps to complete your admission
          </p>
        </div>
        <div className="row g-4">
          {/* Step 1 */}
          <div className="col-md-4">
            <div className="card shadow border-0 h-100 text-center p-4 rounded-4">
              <div
                className="icon-box bg-opacity-25 mb-3 mx-auto"
                style={{ backgroundColor: "#223b75" }}
              >
                <img src="/admission/media/imt01.png" alt="icon" />
              </div>
              <h5 className="fw-bold">STEP 1</h5>
              <p className="mb-0">Fill Online Application Form</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="col-md-4">
            <div className="card shadow border-0 h-100 text-center p-4 rounded-4">
              <div
                className="icon-box bg-opacity-25 mb-3 mx-auto"
                style={{ backgroundColor: "#223b75" }}
              >
                <img src="/admission/media/imt02.png" alt="icon" />
              </div>
              <h5 className="fw-bold">STEP 2</h5>
              <p className="mb-0">Submit Form by paying 3500 INR</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="col-md-4">
            <div className="card shadow border-0 h-100 text-center p-4 rounded-4">
              <div
                className="icon-box bg-opacity-25 mb-3 mx-auto"
                style={{ backgroundColor: "#223b75" }}
              >
                <img src="/admission/media/imt03.png" alt="icon" />
              </div>
              <h5 className="fw-bold">STEP 3</h5>
              <p className="mb-0">Submission of Documents</p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="col-md-4">
            <div className="card shadow border-0 h-100 text-center p-4 rounded-4">
              <div
                className="icon-box bg-opacity-25 mb-3 mx-auto"
                style={{ backgroundColor: "#223b75" }}
              >
                <img src="/admission/media/imt04.png" alt="icon" />
              </div>
              <h5 className="fw-bold">STEP 4</h5>
              <p className="mb-0">Offline Interview Process</p>
            </div>
          </div>
          {/* Step 5 */}
          <div className="col-md-4">
            <div className="card shadow border-0 h-100 text-center p-4 rounded-4">
              <div
                className="icon-box bg-opacity-25 mb-3 mx-auto"
                style={{ backgroundColor: "#223b75" }}
              >
                <img src="/admission/media/imt05.png" alt="icon" />
              </div>
              <h5 className="fw-bold">STEP 5</h5>
              <p className="mb-0">Selection Process</p>
            </div>
          </div>
          {/* Step 6 */}
          <div className="col-md-4">
            <div className="card shadow border-0 h-100 text-center p-4 rounded-4">
              <div
                className="icon-box bg-opacity-25 mb-3 mx-auto"
                style={{ backgroundColor: "#223b75" }}
              >
                <img src="/admission/media/imt06.png" alt="icon" />
              </div>
              <h5 className="fw-bold">STEP 6</h5>
              <p className="mb-0">Announcement of Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
