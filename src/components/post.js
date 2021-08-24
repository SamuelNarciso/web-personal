import React from 'react';

import { Link } from 'gatsby';

import Utils from '../utils/pageUtils';

const Post = ({ titulo, fecha, resumen, ruta, imagen }) => (
  <Link className="card-articulo wo-decoration"  to={Utils.resolvePageUrl(ruta)}>
    <article >
      <img src={imagen} alt={titulo} />
      <h4 className="card-articulo-fecha">
        {new Date(fecha).toLocaleDateString('en-gb', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </h4>
      <h2 className="card-articulo-titulo"> {titulo} </h2>
      <p className="card-articulo-resumen"> {resumen} </p>
    </article>
  </Link>
);

export default Post;
