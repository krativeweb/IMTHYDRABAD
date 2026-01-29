// components/AdmissionInfoSection.jsx
export default function AdmissionInfoSection() {
  return (
    <section className="ttm-row features-section clearfix" id="more">
      <div className="container">
        <div className="row">
          <div className="ttm-bgcolor-skincolor position-relative mb-5 ml-15 res-991-ml-0 mr-15 res-991-mr-0">
            <div className="pt-35 pr-15 pb-25 pl-21 pl-25 ttm-bgcolor-white box-shadow">
              <div className="row align-items-center">
                <div className="col-12">
                  <h3 className="mb-4 text-center">Admission Information</h3>
                  <p className="mb-4 text-center">
                    Check eligibility criteria and available scholarship
                    opportunities.
                  </p>
                  <div className="row g-4">
                    {/* Eligibility Card */}
                    <div className="col-md-6">
                      <div className="card shadow border-0 h-100">
                        <div className="card-body p-4">
                          <h5 className="card-title mb-3 text-dark fw-bold">
                            PROGRAM FEE &amp; EDUCATION LOAN
                          </h5>
                          <p className="card-text text-muted mb-2">
                            Fee Structure for PGDM, PGDM (Finance), PGDM
                            (Marketing) and PGDM (Logistics &amp; Supply Chain
                            Management)
                          </p>
                          <p className="card-text text-muted mb-2">
                            Batch 2026 - 2028
                          </p>
                          <p className="card-text text-muted mb-2">
                            INR 16 Lakhs
                          </p>
                          <p className="card-text text-muted mb-0">
                            The academic fee includes accommodation and mess
                            charges.
                          </p>
                          <p className="card-text text-muted mb-0">
                            <strong className="text-dark">
                              Bank Assistance:
                            </strong>
                            <br />
                            <a href="" className="text-warning">
                              {" "}
                              click here{" "}
                            </a>
                            <br />
                            <em>
                              **Education Loan facility is available. Kindly
                              fill the candidate details form to know more about
                              the fee structure and payment schedule.
                            </em>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Scholarship Card */}
                    <div className="col-md-6">
                      <div className="card shadow border-0 h-100">
                        <div className="card-body p-4">
                          <h5 className="card-title mb-3 text-dark fw-bold">
                            SCHOLARSHIP
                          </h5>
                          <p className="card-text text-muted mb-2">
                            <strong className="text-dark">
                              Tuition Fee Waiver (TFW) scheme: </strong>
                            100% waiver on academic fees.
                          </p>
                          <p className="card-text text-muted mb-2">
                            <strong className="text-dark">
                              TFW Application:
                            </strong>
                          </p>
                          <p className="card-text text-muted mb-2">
                            <strong className="text-dark">
                              Smt Leela Nath Memorial Scholarship:
                            
                            </strong> 20% scholarship for all female candidates admitted
                            to any PGDM program at IMT Hyderabad.
                          </p>
                          <p className="card-text text-muted mb-2">
                            <strong className="text-dark">
                              Merit-Based Scholarship:
                           
                           </strong> Candidates are eligible for a
                            <strong className="text-dark"> 40% scholarship
                            
                          </strong>  on the academic fee if they meet any of the
                            following criteria:
                            <br />
                            <strong className="text-dark">CAT/XAT:</strong>{" "}
                            Score 90 percentile or above
                            <br />
                            <strong className="text-dark">
                              GMAT (Focus Edition):
                            </strong>{" "}
                            Score 645 or above
                            <br />
                            <strong className="text-dark">
                              GMAT (10th Edition):
                            </strong>{" "}
                            Score 700 or above
                           
                            <br />
                            <strong className="text-dark">
                              The Late Shri Mahendra Nath Merit-cum-Means
                              Scholarship:
                            
                           </strong> Awarded to second-year students who demonstrate
                            exceptional academic performance during their first
                            year. Selection is based on academic results,
                            socio-economic background, overall conduct, and
                            commitment to learning and community engagement.
                          </p>

                          <p className="card-text text-muted mb-0">
                            <em>
                              <strong className="text-dark">Note:</strong> The
                              decision of the Scholarship Committee(s) will be
                              final and binding.
                            </em>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="card shadow border-0 h-100">
                        <div className="card-body p-4">
                          <h5 className="card-title mb-3 text-dark fw-bold">
                            REFUND POLICY
                          </h5>
                          <p className="card-text text-muted mb-2">
                            Refund Policy As Per AICTE Guidelines
                          </p>
                          <p className="card-text text-muted mb-2">
                            <strong className="text-dark">
                              TFW Application:
                            </strong>
                            <a href="#">click here</a>
                          </p>
                          <p className="card-text text-muted mb-2">
                            The candidate, who has been provisionally admitted,
                            may request for a fee refund by applying on the
                            Candidate portal
                          </p>
                          <p className="card-text text-muted mb-2">
                            Beneficiary account must belong to the student only.
                          </p>
                          <p className="card-text text-muted mb-0">
                            To read the Refund Policy please <a href="" className="text-warning">
                              click here
                            </a>
                          </p>
                          <p className="card-text text-muted mb-0">
                            <em>
                              <strong className="text-dark"> Note: </strong>
                              Request(s) sent to any other place will not be
                              entertained and will be considered null and void.
                            </em>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
