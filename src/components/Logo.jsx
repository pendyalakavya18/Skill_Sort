import React from 'react';

const Logo = ({ className = '', size = 'default' }) => {
  // Determine the dimensions based on size prop
  const dimensions = {
    small: { width: 32, height: 32 },
    default: { width: 40, height: 40 },
    large: { width: 48, height: 48 }
  }[size] || { width: 40, height: 40 };

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4F46E5' }} />
          <stop offset="100%" style={{ stopColor: '#06B6D4' }} />
        </linearGradient>
      </defs>
      <path
        d="M24 4L44 14V34L24 44L4 34V14L24 4Z"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 8L39 16V32L24 40L9 32V16L24 8Z"
        fill="url(#logoGradient)"
        fillOpacity="0.1"
      />
      <path
        d="M24 12L34 18V30L24 36L14 30V18L24 12Z"
        fill="url(#logoGradient)"
        fillOpacity="0.2"
      />
    </svg>
  );
};

export default Logo; 