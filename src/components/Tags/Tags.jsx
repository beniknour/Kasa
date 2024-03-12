import React from 'react';
import './Tags.scss';
const Tags = ({tags}) => {
    return (
        <>
            <div className='tagsContainer'>
                {tags.map((tag, index)=>
                <p key={index}>{tag}</p>)}             
            </div>
        </>
    )

}

export default Tags;