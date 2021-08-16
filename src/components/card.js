import React from 'react';

const Card = ({ icon, alt, titulo, texto }) => (
  <div className="card">
    <div className="icon">
      <img alt={alt} src={icon} />{' '}
    </div>
    <p className="black"> {titulo} </p>
    <p className="bold"> {texto} </p>
  </div>
);

export default Card;
