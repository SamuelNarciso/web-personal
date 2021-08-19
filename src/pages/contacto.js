import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import Card from '../components/card';

import youtube from '../images/svg/social/youtube.svg';
import github from '../images/svg/social/github.svg';
import instagram from '../images/svg/social/instagram.svg';
import twitter from '../images/svg/social/twitter.svg';
import Seo from '../components/seo';

const contacto = () => {
  return (
    <Layout>
      <Seo
        title="contacto"
        description="en esta pagina podemos encontrar las distintas formas por las que te puedes poner en contacto mediante mis redes sociales."
      />
      <Header titulo="Contacto" />
      <div className="container-wrap">
        <a href="https://github.com/SamuelNarciso" className='link-contacto'>
          <Card
            titulo="Github"
            texto="SamuelNarciso"
            icon={github}
            alt="Cuenta de github SamuelNarciso"
          />
        </a>

        
        <a href="https://www.instagram.com/samuel_narciso/" className='link-contacto'>
          <Card
            titulo="Instagram"
            texto="Samuel_Narciso"
            icon={instagram}
            alt="Cuenta de github SamuelNarciso"
          />
        </a>
        <a href="https://twitter.com/SamuelNarciso28" className='link-contacto'>
          <Card
            titulo="Twitter"
            texto="SamuelNarciso28"
            icon={twitter}
            alt="Cuenta de github SamuelNarciso"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCdlswAjW13BPfV9jo5VLJnQ" className='link-contacto'>
          <Card
            titulo="Youtube"
            texto="SamuelNarciso"
            icon={youtube}
            alt="Cuenta de github SamuelNarciso"
          />
        </a>
      </div>
    </Layout>
  );
};

export default contacto;
