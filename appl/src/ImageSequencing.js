import React, { useState, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';

const ImageSequencing = () => {
  const images = [
    'path-to-image1.jpg',
    'path-to-image2.jpg',
    'path-to-image3.jpg',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (progress) => {
    const index = Math.floor(progress * (images.length - 1));
    setCurrentIndex(index);
  };

  return (
    <Controller>
      <Scene duration={500} triggerHook="onEnter" pin>
        {(progress) => (
          <div style={{ height: '100vh', backgroundColor: 'black' }}>
            <img
              src={images[currentIndex]}
              alt="Sequence"
              style={{ width: '100%', height: '100%' }}
            />
            {handleScroll(progress.progress)}
          </div>
        )}
      </Scene>
    </Controller>
  );
};

export default ImageSequencing;
