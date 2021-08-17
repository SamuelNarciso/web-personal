import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

import  '../styles/remark-sintax.css';

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

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {

   const { markdownRemark } = data; // data.markdownRemark holds your post data
   const { frontmatter, html } = markdownRemark;
  // const { titulo, resumen, fecha, ruta, tags, imagen } = obtenerPost(data);
  // console.log(titulo)
  return (
    <Layout className="blog-post-container">
      <Header titulo={ frontmatter.title } />
      <div className="blog-post container">
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content "
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
      }
    }
  }`;
