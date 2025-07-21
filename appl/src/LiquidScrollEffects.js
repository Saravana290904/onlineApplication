import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const LiquidScrollEffects = () => {
  const [{ y }, api] = useSpring(() => ({ y: 0 }));

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    api.start({ y: scrollTop * 0.5 });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [api]);

  return (
    <div style={{ height: '200vh', background: '#f0f0f0' }}>
      <animated.div
        style={{
          transform: y.to((value) => `scale(${1 + value / 500})`),
          background: 'red',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '100px auto',
        }}
      />
    </div>
  );
};

export default LiquidScrollEffects;
