import React, { useState, useEffect  } from 'react';
import load from '../../assets/load.svg';

const Card = ({ cover, title }) => {
  const [loading, setLoading] = useState(true);

  // utilisation d'un setTimeout pour voir le rendu du chargement avant l'affichage de l'image
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer); 
  }, []);
  return (
      <div className='cards'>
        {loading && 
            <img src={load} alt='load'/>

        }
        {!loading && (
          <img
            src={cover}
            alt={title}
            style={{
              display: loading ? 'none' : 'block',
            }}
          />
        )
        }
        <h3>{title}</h3>
      </div>
     
  );
};

export default Card;


