import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Header from '../components/header';
import error404 from '../images/404.svg';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Header titulo="404: Not Found | Pagina no encontrada 😖" />
    <h2 className="bold">Oh no... Nos perdimos </h2>
    <div className="error-404-page">
      <img src={error404} alt="Error 404" />
    </div>
    <p className="regular parrafo">
      Puedes volver utilizando el panel lateral 🤖... Nos vemos del otro lado{' '}
    </p>
  </Layout>
);

export default NotFoundPage;
