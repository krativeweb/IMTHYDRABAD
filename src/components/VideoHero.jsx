// src/components/VideoHero.jsx
export default function VideoHero() {
  return (
    <section className="video-section relative h-screen overflow-hidden">
      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src="/video/videob.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay absolute inset-0 bg-black/50 z-10" />
      <div className="container video-content absolute inset-0 z-20 flex flex-col justify-center h-full text-center mt-5">
        <h1
          style={{ fontSize: 60, textShadow: "0 5px rgb(0 18 51)" }}
          data-aos="fade-up"
          className="text-white"
        >
          Nurtures Socially Responsible<br />Business Leaders
        </h1>
      </div>
    </section>
  );
}