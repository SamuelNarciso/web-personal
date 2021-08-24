import * as React from 'react';
import PropTypes from 'prop-types';

import '../styles/global-styles.scss';
import Nav from './nav';

import Autor from './autor';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <aside >
        <Autor />
         <Nav />
      </aside>

      <div className="content">
        <Nav  clase="menu-mobil " />
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
