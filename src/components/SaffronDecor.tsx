interface SaffronDecorProps {
  side: 'left' | 'right';
}

export default function SaffronDecor({ side }: SaffronDecorProps) {
  const flip = side === 'right';

  return (
    <div
      className="absolute top-0 h-full pointer-events-none select-none"
      style={{
        [side]: 0,
        width: '180px',
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
    >
      <svg
        viewBox="0 0 180 600"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`stemGrad${side}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d3a522" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6f531a" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id={`threadGrad${side}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d3a522" stopOpacity="1" />
            <stop offset="100%" stopColor="#d3a522" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Main stem 1 */}
        <path
          d="M 60 600 C 55 480 70 380 50 260 C 35 160 45 80 40 20"
          stroke={`url(#stemGrad${side})`}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Thread 1 */}
        <path
          d="M 50 260 C 80 240 110 220 130 195"
          stroke={`url(#threadGrad${side})`}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        {/* Stigma 1 */}
        <path
          d="M 130 195 C 140 185 148 172 145 162 C 143 155 135 152 130 158"
          stroke="#d3a522"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="138" cy="163" rx="3" ry="6" fill="#d3a522" opacity="0.8" transform="rotate(-20, 138, 163)" />

        {/* Main stem 2 */}
        <path
          d="M 80 600 C 75 500 90 410 75 320 C 62 240 70 150 65 60"
          stroke={`url(#stemGrad${side})`}
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Thread 2a */}
        <path
          d="M 75 320 C 100 305 118 285 128 265"
          stroke={`url(#threadGrad${side})`}
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
        />
        {/* Stigma 2a */}
        <path
          d="M 128 265 C 138 255 145 242 142 232"
          stroke="#d3a522"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="138" cy="234" rx="2.5" ry="5" fill="#d3a522" opacity="0.75" transform="rotate(-15, 138, 234)" />

        {/* Thread 2b */}
        <path
          d="M 65 200 C 90 188 108 170 118 150"
          stroke={`url(#threadGrad${side})`}
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Stigma 2b */}
        <ellipse cx="114" cy="152" rx="2.5" ry="5.5" fill="#d3a522" opacity="0.7" transform="rotate(-10, 114, 152)" />

        {/* Main stem 3 - thin */}
        <path
          d="M 30 600 C 28 520 40 440 30 370 C 22 300 28 220 20 140"
          stroke={`url(#stemGrad${side})`}
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
        />
        {/* Thread 3 */}
        <path
          d="M 30 370 C 55 355 72 335 82 312"
          stroke={`url(#threadGrad${side})`}
          strokeWidth="0.7"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="78" cy="314" rx="2" ry="4.5" fill="#d3a522" opacity="0.6" transform="rotate(-25, 78, 314)" />

        {/* Floating stigma hint top */}
        <path
          d="M 40 20 C 60 10 80 5 95 15"
          stroke={`url(#threadGrad${side})`}
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="92" cy="16" rx="2" ry="4" fill="#d3a522" opacity="0.5" transform="rotate(10, 92, 16)" />

        {/* Small leaf-like shapes */}
        <path
          d="M 55 430 C 70 420 80 408 72 400"
          stroke="#6f531a"
          strokeWidth="0.7"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 75 490 C 88 480 95 468 88 460"
          stroke="#6f531a"
          strokeWidth="0.7"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
