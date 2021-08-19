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

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <Seo title="Home" />
      <Header titulo="Acerca de" />
      <p className="regular parrafo">
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
      <br/>
    <p className='titulo'> Aficiones y pasatiempos </p>
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
      {/* <h3 className="subtitulo bold t-left">Tecnologias con las que he trabajado</h3> */}
    </Layout>
  </>
);

// export const query = graphql`
//   {
//     allProjectsJson {
//       nodes {
//         titulo
//         tecnologias
//         fecha
//       }
//     }
//   }
// `;

export default IndexPage;
