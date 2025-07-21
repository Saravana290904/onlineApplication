import React from 'react';

const StickyScrolling = () => (
  <div>
    <div style={{ height: '200vh' }}>Scroll Down</div>
    <div
      style={{
        position: 'sticky',
        top: '0',
        backgroundColor: 'lightcoral',
        padding: '20px',
      }}
    >
      I am Sticky!
    </div>
    <div style={{ height: '200vh' }}>Scroll More</div>
  </div>
);

export default StickyScrolling;
