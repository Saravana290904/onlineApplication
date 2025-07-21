import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <div
        ref={ref}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s, transform 0.6s',
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        I reveal on scroll!
      </div>
    </div>
  );
};

export default RevealOnScroll;
