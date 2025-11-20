import React, { useEffect, useRef } from 'react';

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    
    const stars: { x: number; y: number; z: number; size: number }[] = [];
    const numStars = 300;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 2, // depth factor
        size: Math.random() * 1.5
      });
    }

    const animate = () => {
      ctx.fillStyle = '#030014';
      ctx.fillRect(0, 0, w, h);
      
      stars.forEach((star) => {
        // Move star based on depth
        star.y += (0.2 * (star.z + 0.5)); 
        
        if (star.y > h) {
          star.y = 0;
          star.x = Math.random() * w;
        }

        const alpha = 0.3 + (star.z * 0.3);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * star.z, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-20 opacity-80 pointer-events-none" />;
};

export default Starfield;