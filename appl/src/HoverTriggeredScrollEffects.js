import React, { useRef } from 'react';

const HoverTriggeredScrollEffects = () => {
  const scrollContainer = useRef(null);

  const handleHover = (direction) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onMouseOver={() => handleHover('left')}>◀</button>
      <div
        ref={scrollContainer}
        style={{
          display: 'flex',
          overflowX: 'auto',
          width: '300px',
          border: '1px solid #ddd',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: '0 0 auto',
              width: '200px',
              height: '200px',
              background: 'lightblue',
              margin: '5px',
              textAlign: 'center',
              lineHeight: '100px',
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <button onMouseOver={() => handleHover('right')}>▶</button>
    </div>
  );
};

export default HoverTriggeredScrollEffects;
