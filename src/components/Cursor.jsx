import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth <= 1200) return;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
    };

    const animate = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;
      setFollowerPosition({ x: posX - 20, y: posY - 20 });
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (window.innerWidth <= 1200) return null;

  return (
    <>
      <div 
        className="cursor" 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className="cursor-follower" 
        style={{ left: `${followerPosition.x}px`, top: `${followerPosition.y}px` }}
      />
    </>
  );
}
