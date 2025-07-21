import React from 'react';
import { useInView } from 'react-intersection-observer';

const ViewportAnimations = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% is visible
  });

  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 0.6s, transform 0.6s',
          background: 'black',
          color: 'red',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        I animate on entering the viewport!
      </div>
    </div>
  );
};

export default ViewportAnimations;
