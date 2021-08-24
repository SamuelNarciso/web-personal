import React from 'react';
import user from '../images/avatar.png';

const Autor = () => (
  <div className="autor">
    <div className="avatar">
    <img src={user} alt="creador de la pagina web Samuel Narciso" />
    </div>

    <h2 className="subtitulo t-center">
      <span className="bold"> Samuel </span> 
      <span className="regular"> Narciso </span>    
    </h2>
  </div>
);

export default Autor;
