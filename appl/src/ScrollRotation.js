import React, { useState, useEffect } from 'react';

const ScrollRotation = () => {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setRotation(scrollTop * 0.5); // Adjust rotation speed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '200vh', textAlign: 'center' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          margin: '100px auto',
          background: 'red',
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.1s ease',
        }}
      />
      <p>Scroll to rotate the box</p>
    </div>
  );
};

export default ScrollRotation;
