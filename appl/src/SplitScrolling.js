import React from 'react';
import './SplitScrolling.css'; // Optional: Use CSS for styling.

const SplitScrolling = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <div
        style={{
          flex: 1,
          overflowY: 'scroll',
          background: '#f0f0f0',
          padding: '20px',
        }}
      >
        <h2>Left Section</h2>
        <p>Scroll independently on the left side...</p>
        {[...Array(50).keys()].map((i) => (
          <p key={i}>Left Content {i + 1}</p>
        ))}
      </div>
      <div
        style={{
          flex: 1,
          overflowY: 'scroll',
          background: '#e0e0e0',
          padding: '20px',
        }}
      >
        <h2>Right Section</h2>
        <p>Scroll independently on the right side...</p>
        {[...Array(50).keys()].map((i) => (
          <p key={i}>Right Content {i + 1}</p>
        ))}
      </div>
    </div>
  );
};

export default SplitScrolling;
