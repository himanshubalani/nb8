import React from 'react';
import { Header } from '../components/Header';
import { AppColors } from '../constants';
import BottomBar from '../components/Bottombar';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';


// 1. Setup Fonts (replaces index.html <link> tags)
import { Outfit, Quicksand, Public_Sans, Lexend_Mega } from 'next/font/google';

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit',
  weight: ['400', '700']
});

const quicksand = Quicksand({ 
  subsets: ['latin'], 
  variable: '--font-quicksand',
  weight: ['700'] 
});

const publicSans = Public_Sans({ 
  subsets: ['latin'], 
  variable: '--font-public',
  weight: ['400', '600'] 
});

// 2. Setup Metadata (replaces index.html <title> and <meta>)
export const metadata: Metadata = {
  title: "NeoBrutal UI",
  description: "A React/Tailwind component library loosely based on Neo-Brutalism design principles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          min-h-screen text-[#121212] 
          ${outfit.variable} ${quicksand.variable} ${publicSans.variable} 
          font-public
        `}
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