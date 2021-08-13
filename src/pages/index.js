import * as React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Header from '../components/header';


const IndexPage = ({ data }) => (
  <>
    <Layout>
      <Seo title="Home" />
      <Header titulo="Acerca de" />
    </Layout>
  </>
);

export const query = graphql`
  {
    allProjectsJson {
      nodes {
        titulo
        tecnologias
        fecha
      }
    }
  }
`;

export default IndexPage;
