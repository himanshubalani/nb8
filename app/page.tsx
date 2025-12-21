// app/page.tsx

// TODO: ADD SHADOWS BACK IN COMPONENTS

'use client';

import { AnchorButton, Button, Browser, CodeBlock, Badge, Polaroid} from '../components';
import { useRouter } from 'next/navigation';
import { ArrowRight, Box, Zap, LayoutTemplate, Palette } from 'lucide-react';
import { AppColors } from '@/constants';
import './globals.css';

const RotatingStar = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-full h-full animate-[spin_10s_linear_infinite]"
    style={{ color: AppColors.black }}
  >
    <path 
      fill="currentColor" 
      d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" 
    />
  </svg>
);

const FeatureItem = ({ 
  title, 
  desc, 
  icon: Icon,
  color, 
  rotate = 0 
}: { 
  title: string; 
  desc: string; 
  icon: any; 
  color: string;
  rotate?: number;
}) => (
  <div 
    className="flex flex-col gap-4 p-6 border-[3px] border-black shadow-neo rounded-xl bg-white transition-transform hover:-translate-y-1 hover:shadow-neo-lg"
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <div 
      className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-full shadow-neo-sm"
      style={{ backgroundColor: color }}
    >
      <Icon size={24} strokeWidth={2.5} />
    </div>
    <div>
      <h3 className="font-quicksand font-bold text-xl mb-2">{title}</h3>
      <p className="font-public text-gray-600 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

/**
 * Render the site's homepage containing a hero card and a "Getting Started" teaser.
 *
 * The hero includes a prominent title, description, and a "Read Docs" button that navigates
 * to the documentation page and resets scroll position to the top.
 *
 * @returns The JSX element that renders the homepage UI.
 */
export default function Home() {
  const { push } = useRouter();

  const handleDocsClick = () => {
    push('/docs');
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full max-w-350 mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col gap-24 relative overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center text-center z-10 mt-8">
        
        {/* Decorative Floating Elements */}
        <div className="absolute top-0 right-[10%] w-16 h-16 md:w-24 md:h-24 text-black hidden md:block">
            <RotatingStar />
        </div>
        <div className="absolute top-20 left-[5%] -rotate-12 hidden lg:block">
            <Badge text="v0.1.0" size="lg" />
        </div>

        {/* Main Title */}
        <h1 className="font-quicksand text-6xl md:text-8xl lg:text-9xl font-black text-black leading-[0.9] tracking-tighter mb-6 relative">
          NB<span style={{ color: AppColors.deepSaffron }}>8</span>
          
          {/* Underline Decoration */}
          <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 md:h-6 bg-[#40d39c] -z-10 -rotate-1 rounded-full border-2 border-black" />
        </h1>

        <p className="font-public font-bold text-xl md:text-3xl text-gray-800 max-w-3xl mb-10 leading-tight">
          UI components that <span className="bg-[#FFA07A] px-2 border-2 border-black rounded-md inline-block -rotate-2">don't play safe</span>.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Button 
            color={AppColors.royalBlue} 
            className="w-48 h-14 md:w-56 md:h-16 text-xl"
            onClick={handleDocsClick}
          >
            <span className="flex items-center gap-2">
              Get Brutal <ArrowRight strokeWidth={3} />
            </span>
          </Button>
          
          <div className="flex flex-col items-center gap-2">
             <span className="font-outfit font-bold text-sm">Or install it now:</span>
             <CodeBlock code="npx nb8 init" language="bash" copy={true} />
          </div>
        </div>
      </section>

      {/* --- SHOWCASE STRIP --- */}
      <section className="w-full relative py-8">
        <div 
          className="absolute inset-0 bg-[#F4D738] border-y-[3px] border-black -skew-y-2 scale-110 z-0" 
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-wrap justify-center gap-8 md:gap-16 items-center">
             <div className="-rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                <Polaroid 
                    src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=600&auto=format&fit=crop" 
                    alt="Art"
                    maxWidth="200px"
                    maxHeight="200px"
                />
             </div>
             
             <div className="rotate-2">
                <div className="bg-white p-6 border-[3px] border-black shadow-neo rounded-2xl max-w-xs">
                    <h3 className="font-quicksand font-bold text-2xl mb-2">Pop!</h3>
                    <p className="font-public text-sm">Shadows that stick. Borders that kick.</p>
                </div>
             </div>

             <div className="-rotate-1">
                 <Button color={AppColors.hotPink} width="w-32">Button</Button>
             </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-2">
        <FeatureItem 
          title="React 19"
          desc="Built for the latest React ecosystem. Fast, server-friendly, and ready for the future."
          icon={Box}
          color={AppColors.lightBlue}
          rotate={-1}
        />
        <FeatureItem 
          title="Tailwind"
          desc="Styled strictly with utility classes. No hidden CSS files to hunt down. Just classes."
          icon={Palette}
          color={AppColors.paleGreen}
          rotate={1}
        />
        <FeatureItem 
          title="TypeScript"
          desc="Fully typed. IntelliSense loves it, and your compiler won't yell at you (mostly)."
          icon={LayoutTemplate}
          color={AppColors.lightPink}
          rotate={-2}
        />
        <FeatureItem 
          title="Fast"
          desc="Zero-runtime styling overhead. It's just HTML and classes at the end of the day."
          icon={Zap}
          color={AppColors.mustardYellow}
          rotate={2}
        />
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="flex justify-center mb-10">
        <div className="bg-white border-4 border-black p-8 md:p-12 rounded-4xl shadow-neo-lg text-center max-w-3xl w-full relative">
            {/* Corner Decoration */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-black rounded-full border-4 border-white" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-black rounded-full border-4 border-white" />

            <h2 className="font-quicksand font-bold text-4xl md:text-5xl mb-6">
                Ready to build?
            </h2>
            <p className="font-public text-lg text-gray-600 mb-8">
                Stop tweaking border-radius by 1px. Embrace the bold.
            </p>
            <div className="flex justify-center">
                 <Button 
                    color={AppColors.deepSaffron} 
                    className="w-full md:w-64"
                    onClick={handleDocsClick}
                >
                    Documentation
                </Button>
            </div>
        </div>
      </section>

    </div>
  );
}