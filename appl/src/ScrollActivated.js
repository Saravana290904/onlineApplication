import React, { useEffect, useState } from 'react';
import { TextPath } from 'react-svg-text-curve';

const ScrollActivated = () => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setOffset(scrollTop * 0.2); // Adjust speed of movement
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <svg width="400" height="200" viewBox="0 0 400 200">
      <path
        id="curve"
        d="M10 100 Q 200 10, 390 100 T 390 190"
        fill="none"
        stroke="black"
      />
      <TextPath href="#curve" text={`Scroll Offset: ${Math.round(offset)}`} />
    </svg>
  );
};

export default ScrollActivated;
