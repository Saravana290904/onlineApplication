import React, { useState, useEffect } from 'react';

const CollapsibleContent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setExpanded(scrollTop > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <div
        style={{
          maxHeight: expanded ? '500px' : '100px',
          overflow: 'hidden',
          background: 'lightgray',
          transition: 'max-height 0.5s ease',
          padding: '20px',
        }}
      >
        <h2>{expanded ? 'Expanded Content' : 'Collapsed Content'}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin orci nec nisi fringilla, ac malesuada risus viverra.
        </p>
      </div>
    </div>
  );
};

export default CollapsibleContent;
