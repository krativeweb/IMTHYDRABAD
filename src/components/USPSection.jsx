// src/components/USPSection.jsx
export default function USPSection() {
  const usps = [
    { rank: "#1", text: "Private B-School Telangana" },
    { rank: "#9", text: "Top 10 in South Indias" },
    { rank: "#17", text: "India’s Top 100 B-Schools" },
    { rank: "#35", text: "Private B-Schools by Careers360" },
    { rank: "#72", text: "NIRF India Ranking 2024" },
  ];

  return (
    <section className="usp-section py-4">
      <div className="container">
        <div className="row text-center justify-content-center">
          {usps.map((usp, i) => (
            <div key={i} className="col-6 col-md-2 usp-item" data-aos="fade-up" data-aos-delay={i * 100}>
              <h2 className="usp-number">{usp.rank}</h2>
              <p>{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}