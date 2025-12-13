import React from 'react';
import { Header } from '../components/Header';

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
    <div className="min-h-screen bg-[#bfd5f1] text-[#121212] font-public">
      {/* Navigation Bar extracted to Header component to isolate useRouter context usage */}
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24"></div>

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-black mt-20 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-outfit font-bold text-gray-800">
            © {new Date().getFullYear()} NeoBrutal UI. Made with ❤️ by Himanshu Balani.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Converted to React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}