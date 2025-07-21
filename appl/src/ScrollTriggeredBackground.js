import React, { useState, useEffect } from 'react';

const ScrollTriggeredBackground = () => {
  const [bgColor, setBgColor] = useState('white');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 300) setBgColor('lightblue');
    else if (scrollPosition < 600) setBgColor('lightgreen');
    else setBgColor('lightcoral');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        height: '200vh',
        backgroundColor: bgColor,
        transition: 'background-color 0.5s ease',
      }}
    >
      <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>
        Scroll to Change Background
      </h1>
    </div>
  );
};

export default ScrollTriggeredBackground;
