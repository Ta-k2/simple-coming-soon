import { useMemo } from 'react';

interface BubbleProps {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export default function Bubbles() {
  const bubbles = useMemo<BubbleProps[]>(() =>
    Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 10 + 3,
      delay: Math.random() * 12,
      duration: Math.random() * 8 + 7,
      opacity: Math.random() * 0.35 + 0.08,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full bubble-rise"
          style={{
            left: `${b.x}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            bottom: '-20px',
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: b.opacity,
            background: `radial-gradient(circle at 30% 25%, rgba(251,250,248,0.9), rgba(211,165,34,0.3))`,
            border: `1px solid rgba(211,165,34,0.5)`,
            boxShadow: `inset 0 0 4px rgba(211,165,34,0.2)`,
          }}
        />
      ))}
    </div>
  );
}
