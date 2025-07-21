import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const ZoomScrolling = () => {
  const [{ scale }, api] = useSpring(() => ({ scale: 1 }));

  const handleScroll = () => {
    const scaleValue = 1 + window.scrollY / 1000;
    api.start({ scale: Math.min(scaleValue, 2) }); // Limit zoom
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [api]);

  return (
    <animated.div
      style={{
        transform: scale.to((s) => `scale(${s})`),
        width: '200px',
        height: '200px',
        background: 'orange',
        margin: '100px auto',
      }}
    />
  );
};

export default ZoomScrolling;
