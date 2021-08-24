import React from 'react';

const Card = ({ icon, alt, titulo, texto }) => (
  <div className="card-simple">
    <div className="icon">
      <img alt={alt} src={icon} />{' '}
    </div>
    <p className="bold"> {titulo} </p>
    <p className="regular"> {texto} </p>
  </div>
);

export default Card;
