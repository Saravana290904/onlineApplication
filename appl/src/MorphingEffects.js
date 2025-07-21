import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const MorphingEffects = () => {
  const props = useSpring({
    from: { borderRadius: '0%' },
    to: { borderRadius: '50%' },
    loop: { reverse: true },
  });

  return (
    <animated.div
      style={{
        ...props,
        width: '600px',
        height: '600px',
        backgroundColor: 'red',
      }}
    />
  );
};

export default MorphingEffects;
