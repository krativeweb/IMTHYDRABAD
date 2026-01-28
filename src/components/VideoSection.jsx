"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

/* -----------------------------------
   Extract YouTube Video ID
----------------------------------- */
const getYouTubeId = (url) => {
  if (!url) return null;

  // youtu.be/VIDEO_ID?t=10
  if (url.includes("youtu.be")) {
    return url.split("youtu.be/")[1].split("?")[0];
  }

  // youtube.com/watch?v=VIDEO_ID
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
};

/* -----------------------------------
   Render Slide (Arrow Function)
----------------------------------- */
const renderVideoSlide = (video, index) => {
  const videoId = getYouTubeId(video.video_url);
  if (!videoId) return null;

  return (
    <div className="embla__slide" key={video._id || index}>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title || `YouTube video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

/* -----------------------------------
   Main Component
----------------------------------- */
const VideoCarouselSection = ({ emblaRef }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`${API_URL}/api/learn-about-program`);
        const json = await res.json();

        // Only active videos
        setVideos(json.filter((v) => !v.isDeleted));
      } catch (err) {
        console.error("Failed to load videos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [API_URL]);

  if (loading) return <Loader />;
  if (!videos.length) return null;

  return (
    <section className="video-carousel-section py-5">
      <div className="container-fluid">
        <h2 className="text-center fw-bold mb-4 text-warning">
          LEARN ABOUT THE PROGRAM
        </h2>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">{videos.map(renderVideoSlide)}</div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarouselSection;
