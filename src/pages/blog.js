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
  }));
};

const blog = ({ data }) => {
  return (
    <Layout>
      <Header titulo="Blog" />
      <div className="container-wrap">
        {obtenerPost(data).map((post) => (
          <Post
            titulo={post.titulo}
            fecha={post.fecha}
            resumen={post.resumen}
            ruta={post.ruta}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          path
          date
          excerpt
        }
      }
    }
  }
`;

export default blog;
