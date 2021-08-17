import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

const obtenerPost = (data) => {
  const listaPosts = data.allMarkdownRemark.nodes;
  return listaPosts.map((post) => ({
    titulo: post.frontmatter.title,
    resumen: post.frontmatter.excerpt,
    fecha: post.frontmatter.date,
    ruta: post.frontmatter.path,
    tags: post.frontmatter.tags,
    imagen: post.frontmatter.cover.childImageSharp.fluid.src,
  }));
};

const PaginaPost = ({ data }) => {
  const { titulo, fecha, ruta, tags, imagen } = obtenerPost(data);

  return <Layout>
    <Header titulo={titulo}/>
  </Layout>
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
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
export default PaginaPost;
