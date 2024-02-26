import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import data from '../../data/logements.json';
import Collapse from '../../components/Collapse/Collapse';
import Tags from '../../components/Tags/Tags';
import Rate from '../../components/Rate/Rate';

const FicheLogement = () => {
  const { id } = useParams(); //ici useParams va extraire la valeur du paramètre 'id'
  const logement = data.find((item) => item.id === id);

  return (
    <div>
      {logement && (
        <>
          <Carrousel pictures={logement.pictures} />
          <div className='tagRateContainer'>
            <Tags LogementProp={id}/>
            <Rate rating={logement.rating}/>
          </div>
          <div className='collapse_logement'>
            <Collapse
              section={{
                title: "Description",
                content: logement.description,
              }}
            />
            <Collapse
              section={{
                title: "Équipements",
                content: (
                  <ul>
                    {logement.equipments.map((equipment, index)=>
                      (
                        <li key={index}>{equipment}</li>
                      )
                    )}
                  </ul>
                )
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FicheLogement;
