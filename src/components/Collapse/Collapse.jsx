import fleche from "../../assets/images/fleche.png"
import React, { useState } from 'react';

const CollapseSection = ({ title, content }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Collapse">
      <div className="divCollapse" onClick={() => setVisible(!visible)}>
        <h2>{title}</h2>
        <img
          className={`arrow-icon ${visible ? 'open' : 'closed'}`}
          src={fleche}
          alt={`Arrow`}
        />
      </div>
      {visible && (
        <div className="txt">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Collapse = () => {
  return (
    <div className="collapseContainer">
      <CollapseSection
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />

      <CollapseSection
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />

      <CollapseSection
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />

      <CollapseSection
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
  );
};

export default Collapse;



