'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PlacementsNavbar from '@/components/PlacementsNavbar';

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

  // Check if current page starts with any of those routes
  const isPlacementsPage = placementRoutes.some(route => pathname?.startsWith(route));

  return isPlacementsPage ? <PlacementsNavbar /> : <Navbar />;
}
