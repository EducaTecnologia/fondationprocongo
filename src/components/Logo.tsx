import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showContainer?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'auto',
  showContainer = true,
  size = 'md',
}) => {
  const isDarkBg = variant === 'dark';
  
  // Sizing tokens
  const containerClasses = {
    sm: 'px-2.5 py-1.5 rounded-lg border-[1.5px]',
    md: 'px-3.5 py-2 rounded-xl border-2',
    lg: 'px-5 py-3 rounded-2xl border-2',
  }[size];

  const titleSize = {
    sm: 'text-sm font-extrabold tracking-tight',
    md: 'text-base sm:text-lg font-extrabold tracking-tight',
    lg: 'text-xl sm:text-2xl font-extrabold tracking-tight',
  }[size];

  const taglineSize = {
    sm: 'text-[9px] -mt-0.5 font-bold',
    md: 'text-[11px] sm:text-xs -mt-1 font-bold',
    lg: 'text-xs sm:text-sm -mt-1 font-bold',
  }[size];

  const mapSvgSize = {
    sm: 'w-10 h-9',
    md: 'w-14 h-12 sm:w-16 sm:h-14',
    lg: 'w-20 h-16 sm:w-24 sm:h-20',
  }[size];

  const textColor = isDarkBg ? 'text-white' : 'text-[#1B2A6B]';
  const borderColor = isDarkBg ? 'border-white/30 bg-white/5 backdrop-blur-sm' : 'border-[#1B2A6B] bg-white';

  return (
    <div
      className={`inline-flex items-center justify-between gap-3 select-none transition-transform hover:scale-[1.02] ${
        showContainer ? `${containerClasses} ${borderColor} shadow-xs` : ''
      } ${className}`}
      aria-label="Fondation Pro-Congo — En faveur du peuple Congolais"
    >
      {/* Text Brand Block */}
      <div className="flex flex-col justify-center leading-none">
        <div className={`flex items-baseline font-display ${titleSize} ${textColor}`}>
          <span>Fondation&nbsp;</span>
          <span className="relative inline-block">
            <span>Pro-C</span>
            <span className="relative">
              <span
                className="absolute -top-1 left-0 right-0 h-[2.5px] bg-[#D71920] rounded-full"
                aria-hidden="true"
              />
              <span>ongo</span>
            </span>
          </span>
        </div>
        <span
          className={`font-display text-[#D71920] tracking-tight ${taglineSize}`}
        >
          En faveur du peuple Congolais
        </span>
      </div>

      {/* Stylized Tricolor DRC Map Contour */}
      <div className={`relative shrink-0 ${mapSvgSize} flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
          role="img"
          aria-label="Contour RDC Tricolore"
        >
          {/* North and West segment (Blue) */}
          <path
            d="M 12 56 C 10 52, 14 50, 18 50 C 22 50, 22 44, 25 38 C 28 32, 28 20, 36 15 C 44 10, 60 8, 70 12 C 78 15, 86 20, 88 28 C 88 32, 85 36, 85 40"
            stroke="#2A3EB1"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* East and Southeast segment (Yellow/Gold) */}
          <path
            d="M 85 40 C 84 46, 88 52, 88 60 C 88 66, 83 70, 84 74 C 84 76, 85 78, 85 82"
            stroke="#F7C600"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* South and Atlantic outlet segment (Red) */}
          <path
            d="M 85 82 C 80 87, 72 87, 68 80 C 65 74, 62 70, 56 68 C 50 66, 44 65, 40 58 C 38 54, 34 54, 28 54 C 22 54, 18 55, 12 56"
            stroke="#D71920"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Small internal Atlantic mouth estuary hook (Blue) */}
          <path
            d="M 12 56 C 8 57, 5 60, 9 63 C 14 65, 18 64, 22 63"
            stroke="#2A3EB1"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
