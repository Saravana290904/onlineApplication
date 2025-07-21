import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const InteractiveScrollTimelines = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.box', {
      x: 300,
      rotation: 360,
      scrollTrigger: {
        trigger: '.box',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <div
        className="box"
        style={{
          width: '200px',
          height: '300px',
          background: 'green',
        }}
      ></div>
    </div>
  );
};

export default InteractiveScrollTimelines;
