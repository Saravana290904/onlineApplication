import React, { useEffect, useState } from 'react';

const ScrollActivatedSVG = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    setProgress((window.scrollY / maxScroll) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <svg width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="blue"
          strokeWidth="5"
          fill="none"
          strokeDasharray="251.2" // 2πr
          strokeDashoffset={251.2 - (251.2 * progress) / 100}
        />
      </svg>
      <p>Scroll to animate the SVG circle</p>
    </div>
  );
};

export default ScrollActivatedSVG;
