import React from 'react';

import { Link } from 'gatsby';
import {
  SmileOutlined,
  EditOutlined,
  ContactsOutlined,
  CodeSandboxOutlined,
} from '@ant-design/icons';

const Nav = () => (
  <div className="nav">
    <ul>
      <Link className="bold " to="/">
        <li>
          <SmileOutlined className="icon" />
          Acerca de
        </li>
      </Link>
      <Link className="bold " to="/blog">
        <li>
          <EditOutlined className="icon" />
          Blog
        </li>
      </Link>
      <Link className="bold " to="/contacto">
        <li>
          <ContactsOutlined className="icon" />
          Contacto
        </li>
      </Link>
      <Link className="bold " to="/proyectos">
        <li>
          <CodeSandboxOutlined className="icon" />
          Proyectos
        </li>
      </Link>
    </ul>
  </div>
);

export default Nav;
