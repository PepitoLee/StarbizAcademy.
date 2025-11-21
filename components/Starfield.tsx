
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number; // 0 to Math.PI * 2
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  life: number;
  maxLife: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    
    const stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    
    // Increased density for a "starry night" feel
    const numStars = Math.floor((w * h) / 3000); // Responsive density

    // Initialize static twinkling stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.5 + 0.5, // Varied sizes
        opacity: Math.random(),
        speed: Math.random() * 0.05 + 0.01, // Very slow drift
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2
      });
    }

    let animationFrameId: number;

    const animate = () => {
      // Clear with a very slight trail effect or just clear
      // Using a dark gradient background instead of solid color
      // But here we just clear because the CSS background handles the deep color
      ctx.clearRect(0, 0, w, h);
      
      // Draw Stars
      stars.forEach((star) => {
        // Twinkle Logic
        star.twinklePhase += star.twinkleSpeed;
        const twinkleVal = Math.sin(star.twinklePhase); 
        // Map -1..1 to 0.3..1 opacity
        const currentOpacity = 0.3 + (twinkleVal + 1) * 0.35; 

        // Slow Drift
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = h;
          star.x = Math.random() * w;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Random Shooting Star Spawn
      if (Math.random() < 0.015 && shootingStars.length < 3) { // 1.5% chance per frame
        shootingStars.push({
          x: Math.random() * w,
          y: Math.random() * (h * 0.5), // Start in top half
          vx: (Math.random() - 0.5) * 10 + 5, // Fast horizontal
          vy: Math.random() * 5 + 2, // Downward
          length: Math.random() * 50 + 50,
          life: 60,
          maxLife: 60
        });
      }

      // Draw Shooting Stars
      // Update and filter dead shooting stars
      shootingStars = shootingStars.filter(s => s.life > 0);
      
      shootingStars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.life--;

        const lifePercent = s.life / s.maxLife;
        // Fade in and out
        const alpha = Math.sin(lifePercent * Math.PI) * 0.8;

        const tailX = s.x - s.vx * (s.length / 10); // Trail calculation
        const tailY = s.y - s.vy * (s.length / 10);

        const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.lineWidth = 2;
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        
        // Head glow
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      // Ideally re-init stars here to maintain density, but simpler to just let them be for now
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-screen z-0"
      style={{ opacity: 0.8 }} 
    />
  );
};

export default Starfield;
