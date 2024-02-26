import data from '../../data/logements.json';
import React from 'react';
const Tags = ({LogementProp}) => {
    const logement = data.find((item) => item.id === LogementProp);
    return (
        <>
            <div className='tagsContainer'>
                {logement.tags.map((tag, index)=>
                <p key={index}>{tag}</p>)}             
            </div>
        </>
    )

}

export default Tags;