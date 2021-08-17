import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

import '../styles/global-styles.css';
import Header from './header';
import Nav from './nav';
import user from '../images/avatar.png';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="wrapper">
      <aside className="side">
        <div className="avatar">
          <img src={user} />
        </div>

        <h1 className="titulo t-center">
          <span className="bold"> Samuel </span>{' '}
          <span className="regular"> Narciso </span>
        </h1>
        <Nav />

        <div className="icons-social"></div>
      </aside>

      <div className="content">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
