import React from 'react';
import { Header } from '../components/Header';
import { BottomBar }from '../components';
import { AppColors } from '../constants';

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