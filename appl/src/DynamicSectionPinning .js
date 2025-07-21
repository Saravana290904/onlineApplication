import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

const DynamicSectionPinning = () => {
  return (
    <Controller>
      <Scene duration={500} pin>
        <div style={{ height: '100vh', background: 'lightblue', textAlign: 'center' }}>
          <h1>Section Pinned While Scrolling</h1>
        </div>
      </Scene>
    </Controller>
  );
};

export default DynamicSectionPinning;
