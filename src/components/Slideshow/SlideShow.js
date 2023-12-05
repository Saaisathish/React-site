// SlideShow.js

import React, { useState } from 'react';

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // Replace with your items

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === items.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? items.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slideshow-container mx-auto max-w-xl my-8">
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={prevSlide}>
        Previous
      </button>
      <div className="slideshow-item bg-white p-4 shadow-md rounded mt-4">{items[currentSlide]}</div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default SlideShow;
