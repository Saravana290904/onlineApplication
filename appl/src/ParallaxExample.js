import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxExample = () => (
  <div>
    <Parallax bgImage="path-to-image.jpg" strength={300}>
      <div style={{ height: 500 }}>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Parallax Effect</h1>
      </div>
    </Parallax>
  </div>
);

export default ParallaxExample;
