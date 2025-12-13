'use client';
import React from 'react';
import { AppColors } from '../constants';
import { Button } from '../components/Button';
import { useRouter } from '../components/lib/router-context';

export default function Home() {
  const { push } = useRouter();

  const handleDocsClick = () => {
    push('/docs');
    setTimeout(() => window.scrollTo(0, 0), 0);  
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      {/* Hero Section */}
      <div className="
        relative w-full max-w-4xl 
        bg-[#ffe600] border-[4px] border-black shadow-neo-lg rounded-[1.5rem]
        p-8 md:p-16 text-center
        flex flex-col items-center justify-center
        mb-12
      ">
        {/* Decorative background shapes */}
        <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#40d39c] -top-10 -left-6 md:-left-12 -z-10 opacity-40 md:opacity-100 border-2 border-black" />
        <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0077b6] -bottom-8 -right-8 -z-10 opacity-40 md:opacity-100 border-2 border-black" />

        <h1 className="font-quicksand text-4xl md:text-6xl lg:text-7xl font-black text-black mb-6 relative z-10">
          NB8
          <span className="block h-3 w-24 bg-[#40d39c] mx-auto mt-[-10px] rounded-full relative -z-10"></span>
        </h1>

        <p className="font-public text-lg md:text-2xl text-gray-800 max-w-2xl mb-8 relative z-10">
          A component library that loosely follows Neo-Brutalism design principles for React & Tailwind CSS.
        </p>

        <div className="font-public font-medium text-gray-700 mb-10 relative z-10">
          Lightweight. Fast. Brutal.
        </div>

        <div className="flex gap-4 z-10">
          <Button 
            color={AppColors.royalBlue} 
            className="w-48"
            onClick={handleDocsClick}
          >
            Read Docs
          </Button>
        </div>
      </div>

      {/* Getting Started Teaser */}
      <div className="max-w-4xl w-full bg-white border-[4px] border-black shadow-neo-lg rounded-2xl p-8 mb-12">
        <h2 className="font-quicksand text-3xl font-bold mb-4">Why use this?</h2>
        <p className="font-public text-lg text-gray-600 mb-6">
          Because standard Material Design and Bootstrap are boring. You want your app to pop.
          You want borders that are thick enough to stand on. You want shadows that don't fade away.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 border-2 border-black p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">React 18+</h3>
            <p>Built for the modern web ecosystem.</p>
          </div>
          <div className="bg-gray-50 border-2 border-black p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Tailwind CSS</h3>
            <p>Fully styled with utility classes. No extra CSS files.</p>
          </div>
          <div className="bg-gray-50 border-2 border-black p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">TypeScript</h3>
            <p>Type-safe interfaces for all components.</p>
          </div>
        </div>
      </div>
    </div>
  );
}