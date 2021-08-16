import * as React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Header from '../components/header';
import Card from '../components/card';

import location from '../images/svg/icons/location.svg';
import coding from '../images/svg/icons/coding.svg';
import cpu from '../images/svg/icons/cpu.svg';
import education from '../images/svg/icons/education.svg';
import gamepad from '../images/svg/icons/gamepad.svg';
import swim from '../images/svg/icons/swim.svg';

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <Seo title="Home" />
      <Header titulo="Acerca de" />
      <p className="regular parrafo">
        {' '}
        Hola ✋. Me llamo <span className="bold"> Samuel Narciso </span> , soy
        un desarrollador web orientado al{' '}
        <span className="resaltado"> frontend </span>, apasionado de distintas
        tecnologias .
        <br /> Me gusta experimentar o{' '}
        <span className="resaltado"> jugar </span> con distintas tecnologias asi
        como aprender cosas nuevas sobre ellas, la experiencia actual con la que
        cuento es con <span className="resaltado"> proyectos </span> que he
        realizado en la escuela y algunos que he realizado por cuenta propia. Me
        gusta crear contenido y de esta manera{' '}
        <span className="resaltado"> enseñar </span> a otros desarrolladores, ya
        sea mediante post de mi blog o videos de youtube.
        <br /> Con la tecnologia que me siento comodo trabajando es con
        tecnologias de <span className="resaltado"> Javascript </span> como
        react y NodeJS.
        <br /> Actualmente estoy estudiando una ingenieria en sistemas
        computacionales en el instituto tecnologico nacional de México campus
        Cuautla.
      </p>

      <div className="container-wrap">
        <Card
          icon={location}
          alt="Lugar de nacimiento"
          titulo="Naci y creci en"
          texto="Morelos, Mexico"
        />
        <Card
          icon={coding}
          alt="Lugar de nacimiento"
          titulo="Naci y creci en"
          texto="Morelos, Mexico"
        />
        <Card
          icon={cpu}
          alt="Lugar de nacimiento"
          titulo="Naci y creci en"
          texto="Morelos, Mexico"
        />
        <Card
          icon={education}
          alt="Lugar de nacimiento"
          titulo="Naci y creci en"
          texto="Morelos, Mexico"
        />
   
        <Card
          icon={gamepad}
          alt="Lugar de nacimiento"
          titulo="Naci y creci en"
          texto="Morelos, Mexico"
        />
        <Card
          icon={swim}
          alt="Lugar de nacimiento"
          titulo="Naci y creci en"
          texto="Morelos, Mexico"
        />
   
      </div>
      {/* <h3 className="subtitulo bold t-left">Tecnologias con las que he trabajado</h3> */}
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
