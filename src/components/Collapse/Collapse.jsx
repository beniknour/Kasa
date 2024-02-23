import React, { useState } from 'react';
import fleche from "../../assets/images/fleche.png";


const Collapse = ({ section }) => {
  const [visible, setVisible] = useState(false);
  
  return (
    <div className="Collapse">
      <div className="divCollapse" onClick={() => setVisible(!visible)}>
        <h2>{section.title}</h2>
        <img
          className={`arrow-icon ${visible ? 'open' : 'closed'}`}
          src={fleche}
          alt={`Arrow`}
        />
      </div>
      {visible && (
        <div className="txt">
          <p>{section.content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
