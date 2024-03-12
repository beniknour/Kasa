import React from 'react';
import starI from '../../assets/rates/star-inactive.png';
import starA from '../../assets/rates/star-active.png';
import './Rate.scss';
const Rate = ({ rating }) => {
  const maxRating = 5;
  const stars = Array.from({ length: maxRating }, (_, index) => (
    <img
      key={index}
      className="star"
      src={index < rating ? starA : starI}
      alt={`Star ${index + 1}`}
    />
  ));

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default Rate;

