import React from 'react';
import Particles from 'react-tsparticles';

const ParticleScrollingEffects = () => {
  return (
    <div style={{ height: '70vh', background: 'lightblue' }}>
      <Particles
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 70 },
            size: { value: 2 },
            move: { speed: 1 },
          },
        }}
        style={{ height: '70%' }}
      />
    </div>
  );
};

export default ParticleScrollingEffects;
