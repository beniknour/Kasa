import React from 'react';

const Card = ({cover, title}) => {
  return (
    <article className='cards'>
        <img src={cover} alt='Votre maison loin de chez vous.'/>
        <h3>{title}</h3>
    </article>
  );
};

export default Card;
