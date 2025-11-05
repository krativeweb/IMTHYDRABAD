'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PlacementsNavbar from '@/components/PlacementsNavbar';
import NavbarTwo from './NavbarTwo.jsx/page'; // Adjust path if needed

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Define placement-related routes
  const placementRoutes = [
    '/placement',
    '/placements',
    '/campus-recruitment',
    '/internship',
    '/corporate-connect'
  ];

  // Check if current page starts with any placement route
  const isPlacementsPage = placementRoutes.some(route => 
    pathname?.startsWith(route)
  );

  // Check if current page starts with /executive-education
  const isExecutiveEducationPage = pathname?.startsWith('/executive-education');

  // Priority: Executive Education > Placements > Default
  if (isExecutiveEducationPage) {
    return <NavbarTwo />;
  }

  if (isPlacementsPage) {
    return <PlacementsNavbar />;
  }

  return <Navbar />;
}