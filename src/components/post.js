import React from 'react';
import { Link } from 'gatsby';

import Utils from '../utils/pageUtils';

const Post = ({ titulo, fecha, resumen, ruta, imagen }) => (
  <Link className="post" to={Utils.resolvePageUrl(ruta)}>
    <img src={imagen} alt={titulo} />

    <h4 className="fecha-post">
      {new Date(fecha).toLocaleDateString('en-gb', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </h4>
    <h2 className="titulo-post"> {titulo} </h2>
    <p className="resumen-post"> {resumen} </p>
  </Link>
);

export default Post;
