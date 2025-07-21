import React, { useState } from 'react';

const ExploratoryScrolling = () => {
  const [section, setSection] = useState(0);

  const handleScroll = (e) => {
    const delta = e.deltaY > 0 ? 1 : -1;
    setSection((prev) => Math.max(0, Math.min(prev + delta, 4))); // Restrict to 5 sections
  };

  return (
    <div
      onWheel={handleScroll}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: section % 2 === 0 ? 'lightblue' : 'yellow',
        fontSize: '2rem',
        transition: 'background-color 0.1s',
      }}
    >
      <h1>Section {section + 1}</h1>
    </div>
  );
};

export default ExploratoryScrolling;
