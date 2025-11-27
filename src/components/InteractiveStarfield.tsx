"use client";

import { useEffect, useRef } from "react";

export default function InteractiveStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    interface Star {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        baseOpacity: number;
    }

    let stars: Star[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
       mouseRef.current = { x: -1000, y: -1000 };
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.min(Math.floor(window.innerWidth / 20), 80); 
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.05, 
          vy: Math.random() * 0.05 + 0.01,
          size: Math.random() * 1.5 + 0.5,
          baseOpacity: Math.random() * 0.4 + 0.1, 
        });
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const interactionRadius = 250; 
      const connectionDistance = 100; 

      // 1. Update positions
      stars.forEach((star) => {
        star.y += star.vy;
        star.x += star.vx;

        if (star.y > canvas.height) { star.y = 0; star.x = Math.random() * canvas.width; }
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
      });

      // 2. Draw stars & connections
      stars.forEach((star, i) => {
        const dxMouse = mouseRef.current.x - star.x;
        const dyMouse = mouseRef.current.y - star.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < interactionRadius) {
          const mouseFactor = 1 - (distMouse / interactionRadius); 

          for (let j = i + 1; j < stars.length; j++) {
            const star2 = stars[j];
            const dx = star.x - star2.x;
            const dy = star.y - star2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              const connectionOpacity = (1 - (dist / connectionDistance)) * mouseFactor * 0.4;
              
              ctx.beginPath();
              ctx.strokeStyle = `rgba(122, 162, 247, ${connectionOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(star2.x, star2.y);
              ctx.stroke();
            }
          }
          
          ctx.fillStyle = `rgba(122, 162, 247, ${star.baseOpacity + (mouseFactor * 0.4)})`;
        } else {
          ctx.fillStyle = `rgba(122, 162, 247, ${star.baseOpacity})`;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
