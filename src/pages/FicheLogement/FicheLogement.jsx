import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import data from '../../data/logements.json';
import Collapse from '../../components/Collapse/Collapse';
import Tags from '../../components/Tags/Tags';
import Rate from '../../components/Rate/Rate';
import Host from '../../components/Host/Host';
import Title from '../../components/Title/Title';

const FicheLogement = () => {
  const { id } = useParams(); //ici useParams va extraire la valeur du paramètre 'id'
  const logement = data.find((item) => item.id === id);
  if (!logement){

    return <Navigate to="/error" />
  }
  return (
    <div className='logement-container'>
      {logement && (
        <>
          <Carrousel pictures={logement.pictures} />
          <div className='fiche-container'>
            <div className='Container_logement'>
              <div className='Container_title_tags'>
                <Title title={logement.title} location={logement.location}/>
                <Tags tags={logement.tags} />
              </div>
              
              <div className='Container_host_rate'>
                <Host propHost={logement.host} />
                <Rate rating={logement.rating}/>
              </div>
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
          </div>
        </>
      )}
    </div>
  );
};

export default FicheLogement;
