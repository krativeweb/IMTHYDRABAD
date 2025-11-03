"use client";

export default function VideoSection() {
  return (
    <section className="video-section">
      {/* Background Video */}
      <video autoPlay muted loop playsInline>
        <source src="/video/videob.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="video-overlay"></div>

      {/* Content */}
      <div className="container video-content d-flex flex-column justify-content-center h-100 text-center mt-5">
        <h1
          style={{ fontSize: "60px", textShadow: "0 5px rgb(0 18 51)" }}
          data-aos="fade-up"
        >
          Nurtures Socially Responsible
          <br />
          Business Leaders
        </h1>
      </div>
    </section>
  );
}
