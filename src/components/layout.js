import * as React from 'react';
import PropTypes from 'prop-types';

import '../styles/global-styles.scss';
import Nav from './nav';



const Layout = ({ children }) => {
  return (
    <main className="layout">
      <aside >
         <Nav />
      </aside>

      <section className="layout-section">
        <Nav  clase="menu-mobil " />
        {children}
      </section>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
