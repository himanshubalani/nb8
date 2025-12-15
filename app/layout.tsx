import React from 'react';
import { Header } from '../components/Header';
import { AppColors } from '../constants';
import BottomBar from '../components/Bottombar';
import { Analytics } from "@vercel/analytics/next"

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
    <html lang="en">
      <body
        className="min-h-screen text-[#121212] font-public"
        style={{ backgroundColor: AppColors.lightLavender }}
      >
        <Header />

        <div className="h-20 md:h-24" />

        <main>{children}</main>

        <BottomBar />

        <Analytics />
      </body>
    </html>
  );
}