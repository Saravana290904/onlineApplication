import React, { useEffect, useState } from 'react';

const ScrollingGradientEffects = () => {
  const [gradient, setGradient] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const percentage = (scrollTop / height) * 100;
    setGradient(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        height: '200vh',
        background: `linear-gradient(to bottom, hsl(${gradient}, 80%, 50%), hsl(${gradient + 100}, 80%, 50%))`,
        transition: 'background 0.1s',
      }}
    >
      <h1 style={{ padding: '50px', color: 'green' }}>Scroll Down</h1>
    </div>
  );
};

export default ScrollingGradientEffects;
