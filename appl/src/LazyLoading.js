import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyLoading = () => (
  <div>
    {Array.from({ length: 10 }).map((_, i) => (
      <LazyLoadImage
        key={i}
        src={`https://via.placeholder.com/300x200?text=Image+${i + 1}`}
        alt={`Image ${i + 1}`}
        height="200px"
        width="300px"
        effect="blur"
      />
    ))}
  </div>
);

export default LazyLoading;
