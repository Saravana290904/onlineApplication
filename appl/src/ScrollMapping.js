import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ScrollMapping = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const springProps = useSpring({
    transform: `scale(${1 + scrollY / 1000})`,
  });

  return (
    <animated.div
      style={{
        ...springProps,
        width: '100px',
        height: '100px',
        background: 'red',
        margin: '100px auto',
      }}
    />
  );
};

export default ScrollMapping;
