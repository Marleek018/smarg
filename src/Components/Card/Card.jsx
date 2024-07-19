import React from 'react'
import './Card.css'

const Card = ({element}) => {
  return (
    <div className="top-cont">    
        <img src={element.img} alt="IMAGE" />
        <h3>{element.heading}</h3>
        <p>{element.text}</p>
    </div>
  );
}

export default Card