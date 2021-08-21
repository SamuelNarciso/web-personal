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
  <>
    <Layout>
      <Seo title="Home" />
      <Header titulo="Acerca de" />
      <p className="regular parrafo">
        Hola ✋. Me llamo <span className="bold"> Samuel Narciso </span> , soy
        un desarrollador web orientado al frontend, apasionado a distintas
        tecnologias de desarrollo.
      </p>
      <p className="regular parrafo">
        Me gusta experimentar o jugar con distintas tecnologias asi como
        aprender cosas nuevas sobre ellas, la experiencia actual con la que
        cuento es con proyectos que he realizado en la escuela y algunos que he
        realizado por cuenta propia.
      </p>
      <p className="regular parrafo">
        Me gusta crear contenido y de esta manera enseñar a otros
        desarrolladores, mediante {' '}
        <Link className="bold texto-link" to="/blog">
          post en mi blog {' '}
        </Link>
         o 
        <a
          className="bold texto-link"
          href="https://www.youtube.com/channel/UCdlswAjW13BPfV9jo5VLJnQ"
          alt="canal de youtube samuel narciso"
        >
           {' '}videos de youtube
        </a>
        .
      </p>
      <p className="regular parrafo">
        Con las tecnologias que me siento comodo trabajando es con tecnologias
        de Javascript tales como react y NodeJS.
      </p>

      <p className="regular parrafo">
        Actualmente estoy estudiando una ingenieria en sistemas computacionales
        en el instituto tecnologico nacional de México campus Cuautla.
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
  </>
);

export default IndexPage;
