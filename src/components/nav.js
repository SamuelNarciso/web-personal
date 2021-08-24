import React from 'react';

import { Link } from 'gatsby';
import Autor from './autor';
import {
  SmileOutlined,
  EditOutlined,
  ContactsOutlined,
  CodeSandboxOutlined,
} from '@ant-design/icons';

const Nav = ({ clase }) => (
  <nav className={clase || ''}>
    <Autor />
    <ul>
      <Link className="regular " to="/">
        <li>
          <SmileOutlined className="icon" />
          Acerca
        </li>
      </Link>
      <Link className="regular " to="/blog">
        <li>
          <EditOutlined className="icon" />
          Blog
        </li>
      </Link>
      <Link className="regular " to="/contacto">
        <li>
          <ContactsOutlined className="icon" />
          Contacto
        </li>
      </Link>
      <Link className="regular " to="/proyectos">
        <li>
          <CodeSandboxOutlined className="icon" />
          Proyectos
        </li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
