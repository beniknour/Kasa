import React from 'react';
import './Host.scss'
const Host = ({ propHost }) => {
  return (
    <div className="host-container">
        <p>{propHost.name}</p>
        <img src={propHost.picture} alt={`Host ${propHost.name}`} />
    </div>
  );
};

export default Host;
