// components/PlacementsSection.jsx
import Image from "next/image";

export default function PlacementsSection() {
  return (
    <section className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container-fluid">
        {/* Section Heading */}
        <h2 className="text-center fw-bold mb-5 text-warning text-uppercase">
          Impeccable Placements
        </h2>
        <div className="row g-4 justify-content-center mt-3">
          {/* Card 1 */}
          <div className="col-12 col-md-4">
            <div className="bg-white rounded-4 shadow-sm p-4 text-center">
              <h4 className="fw-semibold mb-3 text-warning">
                Hyderabad Placements
              </h4>
              <img
                src="/admission/media/ctc.jpg"
                alt="Hyderabad Placements"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-12 col-md-4">
            <div className="bg-white rounded-4 shadow-sm p-4 text-center">
              <h4 className="fw-semibold mb-3 text-warning">Salary Package</h4>
              <img
                src="/admission/media/placement.jpg"
                alt="Salary Package"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-12 col-md-4">
            <div className="bg-white rounded-4 shadow-sm p-4 text-center">
              <h4 className="fw-semibold mb-3 text-warning">
                Sector Wise Placement
              </h4>
              <img
                src="/admission/media/sec.jpg"
                alt="Sector Wise Placement"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
