import React from 'react';

const Card = ({cover, title}) => {
  return (
    <article className='cards'>
        <img src={cover} alt= {title}/>
        <h3>{title}</h3>
    </article>
  );
};

export default Card;

