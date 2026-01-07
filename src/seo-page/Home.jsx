// app/page.jsx
"use client";
import AnnouncementStrip from "@/components/AnnouncementStrip";
import VideoSection from "@/sections/VideoSection";
import AboutSection from "@/sections/AboutSection";
import USPSection from "@/sections/USPSection";
import ResearchCarousel from "@/sections/ResearchCarousel";
import ProgramsSection from "@/sections/ProgramsSection";
import HappeningsSection from "@/sections/HappeningsSection";
import EventsSection from "@/sections/EventsSection";
import AnnouncementsSection from "@/sections/AnnouncementsSection";
import ConnectSection from "@/sections/ConnectSection";
import InternationalAssociations from "@/sections/InternationalAssociations";
import CampusLifeGallery from "@/sections/CampusLifeGallery";
import PlacementAlliances from "@/sections/PlacementAlliances";
import ApplyButton from "@/components/ApplyButton";


export default function Home() {
  return (
    <>
      <style jsx global>{`
        .navbar {
          margin-top: 41px !important;
        }
      `}</style>

      {/* Announcement Strip */}
      <AnnouncementStrip />

      <VideoSection />
      <AboutSection />
      <USPSection />
      <ResearchCarousel />
      <ProgramsSection />
      <HappeningsSection />
      <EventsSection />
      <AnnouncementsSection />
      <ConnectSection />
      <InternationalAssociations />
      <CampusLifeGallery />
      <PlacementAlliances />
      <ApplyButton />
    </>
  );
}
