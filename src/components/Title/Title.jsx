import React from 'react';
import './Title.scss';
const Title = ({ title, location }) => {
  return (
    <div className="title-container">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
};

export default Title;
