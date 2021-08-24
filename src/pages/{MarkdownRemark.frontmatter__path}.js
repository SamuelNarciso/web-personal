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
      <div className="imagen-articulo">
        <img src={imagen} alt={frontmatter.title} /> 
      </div>
      <Header titulo={frontmatter.title} />
      <article className="articulo">
        <h2 className="fecha-articulo">{frontmatter.date}</h2>
        <h3>
          {frontmatter.tags.map((tag) => (
            <p className="tag-articulo " key={v4()}>
              {' '}
              {tag}{' '}
            </p>
          ))}{' '}
        </h3>
        <section
          className="contenido-articulo"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
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
