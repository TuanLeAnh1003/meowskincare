import React from 'react';
import './Advertisement.css';

function Advertisement({img, title, des}) {
  return (
    <div className="advertisement">
      <img src={img} alt="img" />
      <h2>{title}</h2>
      <p>{des}</p>
    </div>
  )
}

export default Advertisement