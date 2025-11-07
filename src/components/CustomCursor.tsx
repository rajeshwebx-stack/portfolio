import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
}

interface TrailDot {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  angle: number;
  velocity: number;
  size: number;
  opacity: number;
}

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [trailDots, setTrailDots] = useState<TrailDot[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const particleIdRef = useRef(0);
  const trailIdRef = useRef(0);
  const sparkleIdRef = useRef(0);

  useEffect(() => {
    let lastTrailTime = 0;
    const trailInterval = 30; // ms between trail dots

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail dots
      const now = Date.now();
      if (now - lastTrailTime > trailInterval) {
        setTrailDots(prev => [
          ...prev.slice(-15), // Keep only last 15 dots
          {
            id: trailIdRef.current++,
            x: e.clientX,
            y: e.clientY,
            opacity: 1,
          }
        ]);
        lastTrailTime = now;
      }

      // Add floating particles randomly
      if (Math.random() > 0.85) {
        setParticles(prev => [
          ...prev.slice(-20), // Keep only last 20 particles
          {
            id: particleIdRef.current++,
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            size: Math.random() * 3 + 1,
            opacity: 1,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2 - 1,
          }
        ]);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Create sparkle/confetti effect on click
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < 12; i++) {
        newSparkles.push({
          id: sparkleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / 12,
          velocity: Math.random() * 3 + 2,
          size: Math.random() * 4 + 2,
          opacity: 1,
        });
      }
      setSparkles(prev => [...prev, ...newSparkles]);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            opacity: p.opacity - 0.02,
          }))
          .filter(p => p.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Animate trail dots
  useEffect(() => {
    const interval = setInterval(() => {
      setTrailDots(prev =>
        prev
          .map(d => ({
            ...d,
            opacity: d.opacity - 0.05,
          }))
          .filter(d => d.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Animate sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev =>
        prev
          .map(s => ({
            ...s,
            x: s.x + Math.cos(s.angle) * s.velocity,
            y: s.y + Math.sin(s.angle) * s.velocity,
            velocity: s.velocity * 0.95,
            opacity: s.opacity - 0.03,
          }))
          .filter(s => s.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Trail dots */}
      {trailDots.map(dot => (
        <div
          key={dot.id}
          className="cursor-trail-dot"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: dot.opacity * 0.6,
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Sparkles/Confetti */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="cursor-sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: sparkle.opacity,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};
