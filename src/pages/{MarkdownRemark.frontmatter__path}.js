import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

import '../styles/highlight-syntax.css';

export default function Template({ data }) {
  const { markdownRemark } = data; 
  const { frontmatter, html } = markdownRemark;
  const imagen = frontmatter.cover.childImageSharp.fluid.src;
  return (
    <Layout>
      <Header titulo={frontmatter.title} />
      <div className="imagen-post">
        <img src={imagen} alt={frontmatter.title} />
      </div>
      <div className="post-articulo">
        <h2 className="fecha-post">{frontmatter.date}</h2>

        <article
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
