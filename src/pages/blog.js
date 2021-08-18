import React from 'react';
import { graphql } from 'gatsby';
import { v4 as uuid} from 'uuid';

import Layout from '../components/layout';
import Header from '../components/header';
import Post from '../components/post';

const obtenerPost = (data) =>
  data.allMarkdownRemark.nodes.map((post) => ({
    titulo: post.frontmatter.title,
    resumen: post.frontmatter.excerpt,
    fecha: post.frontmatter.date,
    ruta: post.frontmatter.path,
    tags: post.frontmatter.tags,
    imagen: post.frontmatter.cover.childImageSharp.fluid.src,
    id: uuid()
  }));

const blog = ({ data }) => {
  const posts = obtenerPost(data);
  return (
    <Layout>
      <Header titulo="Blog" />
      <div className="opciones"></div>
      <div className="container-wrap">
        {posts.map((post) => (
          <Post
            key={post.id}
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
      filter: { fileAbsolutePath: { regex: "/(content)/" } }
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
