import React from 'react';
import { graphql } from 'gatsby';
import { v4 as uuid } from 'uuid';

import Layout from '../components/layout';
import Header from '../components/header';
import Post from '../components/post';
import Seo from '../components/seo';

const obtenerProyectos = (data) =>
  data.allMarkdownRemark.nodes.map((post) => ({
    titulo: post.frontmatter.title,
    resumen: post.frontmatter.excerpt,
    fecha: post.frontmatter.date,
    ruta: post.frontmatter.path,
    tags: post.frontmatter.tags,
    imagen: post.frontmatter.cover.childImageSharp.fluid.src,
    id: uuid(),
  }));

const proyectos = ({ data }) => {
  const proyectos = obtenerProyectos(data);

  return (
    <Layout>
       <Seo
        title="proyectos"
        description="en este apartado se encuentran distintos proyectos que he realizado"
      />
      <Header titulo="Proyectos" />
      <div className='container-wrap'>
      {proyectos.map((proyecto) => (
        <Post
          ruta={proyecto.ruta}
          imagen={proyecto.imagen}
          titulo={proyecto.titulo}
          fecha={proyecto.fecha}
          resumen={proyecto.resumen}
          key={proyecto.id}
        />
      ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
    ) {
      nodes {
        frontmatter {
          title
          path
          date
          excerpt
          tags
          cover {
            childImageSharp {
              fluid(maxWidth: 288) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

export default proyectos;
