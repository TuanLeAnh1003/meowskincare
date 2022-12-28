import React from 'react';
import './Creator.css';

function Creator({img, name, position, color}) {
  return (
    <div className="creator" style={{boxShadow: `0 4px 4px ${color}`}}>
      <img src={img} alt="Creator" />
      <p>{name}</p>
      <p>{position}</p>
    </div>
  )
}

export default Creator