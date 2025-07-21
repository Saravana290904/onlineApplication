import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const InfiniteLoopScroll = () => {
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  return (
    <ScrollMenu>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'inline-block',
            margin: '0 10px',
            padding: '20px',
            background: '#4caf50',
            color: 'red',
            borderRadius: '10px',
            textAlign: 'center',
          }}
        >
          {item}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default InfiniteLoopScroll;
