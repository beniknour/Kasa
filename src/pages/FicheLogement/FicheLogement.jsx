import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import data from '../../data/logements.json';

const FicheLogement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  return (
    <div>
      {logement && (
        <>
          <Carrousel pictures={logement.pictures} />

        </>
      )}
    </div>
  );
};

export default FicheLogement;
