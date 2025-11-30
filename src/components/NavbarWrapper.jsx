"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import PlacementsNavbar from "@/components/PlacementsNavbar";
import NavbarTwo from "./NavbarTwo.jsx/page"; // Adjust path if needed
import NavbarFour from "./NavbarFour";
export default function NavbarWrapper() {
  const pathname = usePathname();

  // Define placement-related routes
  const placementRoutes = [
    "/placements",
    "/campus-recruitment",
    "/internship",
    "/corporate-connect",
  ];

  // Check if current page starts with any placement route
  const isPlacementsPage = placementRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  // Check if current page starts with /executive-education
  const isExecutiveEducationPage = pathname?.startsWith("/executive-education");

  // Priority: Executive Education > Placements > Default
  if (isExecutiveEducationPage) {
    return <NavbarTwo />;
  }
  const isPGDMPage = pathname === "/admissions/pgdm";
  const isThankYouPage = pathname === "/admissions/pgdm-thankyou";

  if (isThankYouPage) {
    return null;
  }
  // Priority: PGDM > Executive Education > Placements > Default
  if (isPGDMPage) {
    return null;
  }

  if (isPlacementsPage) {
    return <PlacementsNavbar />;
  }

  return <Navbar />;
}
