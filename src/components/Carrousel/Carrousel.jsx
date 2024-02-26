import React, { useState, useEffect, useCallback } from 'react';
import left from '../../assets/Carrousel_Image/vector_left.png';
import right from '../../assets/Carrousel_Image/vector_right.png';

const Carrousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, [pictures]);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [pictures, nextSlide]);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };
  
    return (
      <div className="carrousel">
        <div className='carrouselArrow'>
            <img src={left} alt="left" onClick={prevSlide} className="arrow left" />
            <img src={right} alt="right" onClick={nextSlide} className="arrow right" />
        </div>
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} className="slide" />
        <p className="counter">
        {currentIndex + 1}/{pictures.length}
        </p>

      </div>
    );
  };
  
  export default Carrousel;