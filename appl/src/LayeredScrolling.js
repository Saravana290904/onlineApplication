import React from 'react';
import { Parallax } from 'react-parallax';

const LayeredScrolling = () => {
  return (
    <div>
      <Parallax bgImage="path-to-layer1.jpg" strength={300}>
        <div style={{ height: 500 }}>
          <h1 style={{ color: 'white', textAlign: 'center' }}>Layer 1</h1>
        </div>
      </Parallax>
      <Parallax bgImage="path-to-layer2.jpg" strength={200}>
        <div style={{ height: 500 }}>
          <h1 style={{ color: 'white', textAlign: 'center' }}>Layer 2</h1>
        </div>
      </Parallax>
    </div>
  );
};

export default LayeredScrolling;
