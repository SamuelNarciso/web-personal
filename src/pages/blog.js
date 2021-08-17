import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/header';
import Post from '../components/post';

const obtenerPost = (data) => {
  const listaPosts = data.allMarkdownRemark.nodes;

  // console.log( listaPosts )
  return listaPosts.map((post) => ({
    titulo: post.frontmatter.title,
    resumen: post.frontmatter.excerpt,
    fecha: post.frontmatter.date,
    ruta: post.frontmatter.path,
    tags: post.frontmatter.tags,
    imagen: post.frontmatter.cover.childImageSharp.fluid.src,
  }));
};

const blog = ({ data }) => {
  return (
    <Layout>
      <Header titulo="Blog" />
      <div className="container-wrap">
        {obtenerPost(data).map((post) => (
          <Post
            imagen={post.imagen}
            titulo={post.titulo}
            fecha={post.fecha}
            resumen={post.resumen}
            ruta={post.ruta}
            tags={post.tags}
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

export default blog;
