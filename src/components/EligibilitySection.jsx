// components/EligibilitySection.jsx
export default function EligibilitySection() {
  return (
    <section className="eligibility-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Eligibility</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-12">
            <div className="card shadow-sm border-0 p-4">
              <p className="mb-4">
                Minimum three years bachelor’s degree or equivalent in any
                discipline with
                <strong> minimum 50% marks in aggregate</strong>
                <br />
                <em>
                  * CAT (2025) / XAT (2026) / GMAT (January&nbsp;1,&nbsp;2022 –
                  January&nbsp;26,&nbsp;2026) **
                </em>
              </p>
              <p className="small mb-3">
                <strong>*</strong> Applicants who are appearing for the
                final-year degree examination can also apply, subject to the
                submission of all mark sheets and a pass certificate to IMT’s
                Academic Program office at a later date. Failing to do so will
                result in admission being cancelled.
              </p>
              <p className="small mb-0">
                <strong>**</strong>For the GMAT, the official GMAT score should
                be sent to the IMT Central admission office by January 15, 2026.
                For campus-specific applications, the GMAT official scores must
                be received by the respective campuses by March 31, 2026..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
