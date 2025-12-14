// components/BottomBar.tsx
"use client";

import { useEffect, useRef } from "react";
import { Copyright } from "lucide-react";



export default function BottomBar() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const circlesRef = useRef<any[]>([]);

  // Init set of circles
  const initCircles = (width: number, height: number) => {
    const circles = [];
    const bubblenumber = width < 768 ? 14 : 24;
    const bubblesize = width < 768 ? 40 : 80;


    for (let i = 0; i < bubblenumber; i++) {
      const radius = 10 + Math.random() * bubblesize; //size

      circles.push({
        //start before the bar 
        x: width < 768 ? -radius -100 :-radius - 200, 
        y: height + Math.random() * 150, // start below the bar
        radius,
        speed: 0.2 + Math.random() * 0.6, // bubble rise speed
        drift: (Math.random() - 0.5) * 0.4, // horizontal drift
        offset: Math.random() * Math.PI * 2,
        vx: 0.2 + Math.random() * 0.6, // velocity x
        vy: (Math.random() - 0.5) * 0.4, // velocity y
      });
    }

    circlesRef.current = circles;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId: number;
    if (!ctx) return;
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      initCircles(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check collisions between all pairs of circles
      for (let i = 0; i < circlesRef.current.length; i++) {
        for (let j = i + 1; j < circlesRef.current.length; j++) {
          const c1 = circlesRef.current[i];
          const c2 = circlesRef.current[j];

          const dx = c2.x - c1.x;
          const dy = c2.y - c1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDist = c1.radius + c2.radius;

          // If circles are colliding
          if (distance < minDist) {
            // Calculate angle of collision
            const angle = Math.atan2(dy, dx);
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            // Rotate velocities
            const vx1 = c1.vx * cos + c1.vy * sin;
            const vy1 = c1.vy * cos - c1.vx * sin;
            const vx2 = c2.vx * cos + c2.vy * sin;
            const vy2 = c2.vy * cos - c2.vx * sin;

            // Swap x velocities (elastic collision)
            const vx1Final = vx2;
            const vx2Final = vx1;

            // Rotate back
            c1.vx = vx1Final * cos - vy1 * sin;
            c1.vy = vy1 * cos + vx1Final * sin;
            c2.vx = vx2Final * cos - vy2 * sin;
            c2.vy = vy2 * cos + vx2Final * sin;

            // Separate circles to prevent overlap
            const overlap = minDist - distance;
            const separateX = (overlap / 2) * cos;
            const separateY = (overlap / 2) * sin;

            c1.x -= separateX;
            c1.y -= separateY;
            c2.x += separateX;
            c2.y += separateY;
          }
        }
      }

      for (let circle of circlesRef.current) {
        // Horizontal movement using velocity
        circle.x += circle.vx;

        // Vertical movement with drift
        circle.y += circle.vy + Math.sin(circle.offset) * circle.drift;

        // animate drift offset
        circle.offset += 0.01;

        // Reset when fully out of view on right
        if (circle.x - circle.radius > canvas.width) {
          circle.x = -circle.radius; // restart at left edge
          circle.y = Math.random() * canvas.height; // random fresh vertical position
          circle.vx = 0.2 + Math.random() * 0.6;
          circle.vy = (Math.random() - 0.5) * 0.4;
        }

        // OUTER CIRCLE — bigC (40% opacity)
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(144,168,237,0.4)"; // 40% opacity
        ctx.fill();

        // INNER CIRCLE — smallC (transparent center ring)
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = "#f1f1f1";
        ctx.fill();
      }

      requestAnimationFrame(draw);
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {  
+      window.removeEventListener("resize", resize);  
+      cancelAnimationFrame(animationId);  
+    };  
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden w-full px-10 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 bg-[#f1f1f1] text-[#2a2a2a] select-none border-t-2 border-black">
      {/* Animated Concentric Circles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-[1] flex flex-row items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center">
          <img src="nb8 logo.png" alt="icon" />
        </div>

        <div className={`flex flex-col gap-1 uppercase text-[10px] sm:text-[14px] tracking-wide font-quicksand `}>
          <p className="leading-none">HIMANSHU BALANI</p>
          <p className="leading-none mt-0.5 opacity-80 flex items-center gap-2">
            <Copyright size={10} />
            {year} • All Rights Reserved
          </p>

          <div className={`flex flex-row gap-4 text-[10px] sm:text-[12px] uppercase tracking-wide font-quicksand `}>
            <a  
              href="mailto:hello@himanshubalani.com"  
              target="_blank"  
              className="text-[#8c8c8c] hover:text-black transition-colors"  
            >  
              Email  
            </a>  
           <span className="text-[#8c8c8c]">•</span>  
            <a  
              href="https://x.com/himanshubalani5"  
              target="_blank"  
              rel="noopener noreferrer"  
              className="text-[#8c8c8c] hover:text-black transition-colors"  
            >  
+              X  
+            </a>  
          </div>
        </div>
      </div>
    </footer>
  );
}