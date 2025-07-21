import React from 'react';

const ScrollJacking = () => {
  const handleWheel = (e) => {
    const container = e.currentTarget;
    const delta = e.deltaY > 0 ? 1 : -1;

    container.scrollBy({
      top: 0,
      left: delta * 300, // Customize scroll speed
      behavior: 'smooth',
    });

    e.preventDefault(); // Prevent default scroll behavior
  };

  return (
    <div
      onWheel={handleWheel}
      style={{
        display: 'flex',
        overflow: 'hidden',
        height: '100vh',
        whiteSpace: 'nowrap',
      }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: '100vw',
            background: i % 2 === 0 ? 'red' : 'lightgreen',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Section {i + 1}</h1>
        </div>
      ))}
    </div>
  );
};

export default ScrollJacking;
