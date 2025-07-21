import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TimelineBasedScrolls = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.box', {
      x: 300,
      duration: 2,
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
          width: '100px',
          height: '100px',
          background: 'blue',
        }}
      ></div>
    </div>
  );
};

export default TimelineBasedScrolls;
