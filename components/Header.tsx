'use client';

import { AppColors } from '../constants';
import { Link } from './Link';
import { useRouter } from './lib/router-context';

export const Header = () => {
  const { path } = useRouter();
  const headerpath = path === '/' ? '' : '/docs'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-[3px] border-black shadow-neo-sm h-16 md:h-20">
      <nav className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          href="/"
          className="cursor-pointer font-outfit text-xl md:text-3xl font-black tracking-tight hover:scale-105 transition-transform"
        >
          NB<span style={{color:AppColors.deepSaffron}}> 8 </span><span className="font-thin">{headerpath}</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-4 md:gap-8">
          <li>
            <Link 
              href="/"
              className={`font-bold text-sm md:text-lg hover:underline decoration-2 underline-offset-4 ${path === '/' ? 'text-black' : 'text-gray-500'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/docs"
              className={`font-bold text-sm md:text-lg hover:underline decoration-2 underline-offset-4 ${path === '/docs' ? 'text-black' : 'text-gray-500'}`}
            >
              Docs
            </Link>
          </li>
          <li>
            <a 
              href="https://github.com/himanshubalani" 
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center justify-center w-10 h-10 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};