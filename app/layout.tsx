import React from 'react';
import { Header } from '../components/Header';
// import BottomBar from '../components/Bottombar';
import { AppColors } from '../constants';
import BottomBar from '../components/Bottombar';

/**
 * Root layout component that provides the global page structure for all routes.
 *
 * Renders a site-wide container with a header, a spacer for the fixed header, the page content inside <main>, and a footer that displays the current year and branding text.
 *
 * @param children - The page content to render inside the layout's main area.
 * @returns The layout JSX element containing header, main (children), and footer.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-[#121212] font-public"
    style={{ backgroundColor: AppColors.lightLavender }}
    >
      {/* Navigation Bar extracted to Header component to isolate useRouter context usage */}
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24"></div>

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <BottomBar/>
    </div>
  );
}