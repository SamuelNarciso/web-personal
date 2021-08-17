import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import Card from '../components/card';


import youtube from '../images/svg/social/youtube.svg'
import github from '../images/svg/social/github.svg'
import instagram from '../images/svg/social/instagram.svg'
import twitter from '../images/svg/social/twitter.svg'


const contacto = () => {
  return <Layout>
 <Header titulo="Contacto" />
  <div className='container-wrap'>
  <Card  titulo='Github' texto='SamuelNarciso' icon={github} alt='Cuenta de github SamuelNarciso'/>
  <Card  titulo='Youtube' texto='SamuelNarciso' icon={youtube} alt='Cuenta de github SamuelNarciso'/>
  <Card  titulo='Instagram' texto='SamuelNarciso' icon={instagram} alt='Cuenta de github SamuelNarciso'/>
  <Card  titulo='Twitter' texto='SamuelNarciso' icon={twitter} alt='Cuenta de github SamuelNarciso'/>
  </div>
  </Layout>;
};

export default contacto;
