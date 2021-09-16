import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Header from '../components/header';
import Card from '../components/card';

import cocina from '../images/svg/icons/cocina.svg';
import coding from '../images/svg/icons/coding.svg';
import libros from '../images/svg/icons/libros.svg';
import correr from '../images/svg/icons/correr.svg';
import gamepad from '../images/svg/icons/gamepad.svg';
import swim from '../images/svg/icons/swim.svg';
import { Link } from 'gatsby';

const IndexPage = ({ data }) => (
    <Layout>
      <Seo title="Home" />
      <Header titulo="Acerca de" />
      <p className="regular parrafo">
        Hola ✋. Me llamo <span className="bold"> Samuel Narciso </span>, soy
        estudiante de séptimo semestre de ingeniería en sistemas computacionales
        en el Tecnológico Nacional de México.
        <br />
        Me considero un apasionado por la tecnología y la programación.
        <br />
        El área de desarrollo que más me gusta es el desarrollo web, más
        específicamente el front-end.
      </p>
      <p className="regular parrafo">
        La experiencia con la que cuento actualmente es por proyectos que he
        realizado, ya sea para la escuela o por el mero gusto de practicar lo
        que estoy aprendiendo, algunos de dichos proyectos se encuentran en mi
        apartado de{' '}
        <Link className="bold texto-link" to="/proyectos">
          {' '}
          proyectos{' '}
        </Link>
        , de esta misma página, en ellos se pueden notar las distintas
        tecnologías con las que he trabajado, tales como HTML, CSS, Sass,
        Javascript, React js, Node js, Git.
      </p>
      <p className="regular parrafo">
        Quiero seguir aprendiendo aún más, y documentar ese proceso,
        con{' '}
        <a
          className="bold texto-link"
          href="https://www.youtube.com/channel/UCdlswAjW13BPfV9jo5VLJnQ"
          alt="canal de youtube samuel narciso"
        >
          {' '}
          videos en mí canal de YouTube{' '}
        </a>
        o
        <Link className="bold texto-link" to="/blog">
          {' '}
          post en mi blog{' '}
        </Link>
      </p>

      <br />
      <p className="subtitulo"> Aficiones y pasatiempos </p>
      <div className="container-wrap">
        <Card
          icon={cocina}
          alt="Aficionado de la cocina"
          titulo="Cocinar"
          texto=""
        />
        <Card
          icon={correr}
          alt="Correr como pasatiempo"
          titulo="Correr"
          texto=""
        />

        <Card
          icon={libros}
          alt="Estudiar como pasatiempo"
          titulo="Estudiar"
          texto=""
        />

        <Card
          icon={gamepad}
          alt="Aficionado a los videojuegos"
          titulo="Jugar videojuegos"
          texto=""
        />
        <Card
          icon={swim}
          alt="me gusta pasar el tiempo nadando"
          titulo="Nadar"
          texto=""
        />
        <Card
          icon={coding}
          alt="Aficionado a la programacion"
          titulo="Programar"
          texto=""
        />
      </div>
    </Layout>
  
);

export default IndexPage;
