import React from 'react';
import { graphql } from 'gatsby';
import { v4 } from 'uuid';

import Layout from '../components/layout';
import Header from '../components/header';
import '../styles/highlight-syntax.css';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const imagen = frontmatter.coverPage.childImageSharp.fluid.src;

  return (
    <Layout>
      <Header titulo={frontmatter.title} />
      <div className="imagen-post">
        <img src={imagen} alt={frontmatter.title} /> 
      </div>
      <div className="post-articulo">
        <h2 className="fecha-post">{frontmatter.date}</h2>
        <h3>
          {frontmatter.tags.map((tag) => (
            <p className="tag-post " key={v4()}>
              {' '}
              {tag}{' '}
            </p>
          ))}{' '}
        </h3>
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
        coverPage {
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
