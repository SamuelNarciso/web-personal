import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HalfContainer from "../components/halfContainer"
import Container from "../components/container"
import Header from "../components/header"
import CardsWithText from "../components/cardsWithText"
import Cards from "../components/cards"

const linksHeader = () => {
  return (
    <>
      <Link className="logo" to="/">
        {" "}
        SN{" "}
      </Link>
      <Link to="/"> Inicio </Link>
      <Link to="/acerca"> Acerca </Link>
      <Link to="/blog"> Blog </Link>
      <Link to="/contacto"> Contacto </Link>
      <Link to="/proyectos"> Proyectos </Link>
    </>
  )
}

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />
      <Header siteTitle={linksHeader()} />
      <Container>
        <HalfContainer>
          <p className="tituloNormal">
            Samuel <span className="tituloResaltado"> Narciso</span>
          </p>
          <p className="parrafoNormal"> Bienvenido a mi mundo </p>
        </HalfContainer>
        <HalfContainer>
          <StaticImage
            src="../images/svg/WebDeveloper_Flatline.svg"
            width={450}
            alt="a guy coding"
            style={{ marginBottom: `1.45rem` }}
          />
        </HalfContainer>
      </Container>

      <Header
        siteTitle={
          <p className="tituloNormal">
            Acerca <span className="tituloResaltado"> de </span>{" "}
          </p>
        }
      />
      <Container>
        <HalfContainer>
          <StaticImage src="../images/svg/person.svg" width={200} />
        </HalfContainer>
        <HalfContainer>
          <p className="parrafoCursivo subtitulo">¿Quien Soy yo?</p>
          <p className="parrafoNormal">
            Me llamo Samuel Narciso, soy estudiante de ingenieria en sistemas
            computacionales y me considero un apasionado por la programacion y
            el aprendizaje constante.
          </p>
        </HalfContainer>
      </Container>

      <Header
        siteTitle={
          <p className="tituloNormal">
            Ultimas <span className="tituloResaltado"> entradas </span>{" "}
          </p>
        }
        url='blog'
      />
      <Container>
        <HalfContainer>
          <Header  url='#'
          siteTitle={<p className='subtitulo parrafoCursivo'> Youtube </p>}/>
          <CardsWithText>
            <StaticImage
            src='../images/svg/monster(white).svg'
            alt='ultima entrada de Youtube'
            width='200'
            />
            <p className='bold'> Titulo del video </p>
            <a href=''> Ver mas </a>
          </CardsWithText>
        </HalfContainer>
        <HalfContainer>
          <Header  url='blog'
          siteTitle={<p className='subtitulo parrafoCursivo'> Blog </p>}/>
          <CardsWithText>
            <StaticImage
            src='../images/svg/monster(white).svg'
            alt='ultima entrada de Blog'
            width='200'
            />
            <p className='bold'> Titulo del post </p>
            <a href=''> Ver mas </a>
          </CardsWithText>
        </HalfContainer>
      </Container>
      <Header
        siteTitle={
          <p className="tituloNormal">
            <span className="tituloResaltado"> Proyectos </span>{" "}
          </p>
        }
        url='proyectos'
      />

  <Container>
    <Cards> <StaticImage src='../images/svg/monster(white).svg' alt='Proyecto' width='250' /> <p className='tituloProyecto'>Titulo del proyecto</p> </Cards>
    <Cards> <StaticImage src='../images/svg/monster(white).svg' alt='Proyecto' width='250' /> <p className='tituloProyecto'>Titulo del proyecto</p> </Cards>
    <Cards> <StaticImage src='../images/svg/monster(white).svg' alt='Proyecto' width='250' /> <p className='tituloProyecto'>Titulo del proyecto</p> </Cards>
    <Cards> <StaticImage src='../images/svg/monster(white).svg' alt='Proyecto' width='250' /> <p className='tituloProyecto'>Titulo del proyecto</p> </Cards>
    <Cards> <StaticImage src='../images/svg/monster(white).svg' alt='Proyecto' width='250' /> <p className='tituloProyecto'>Titulo del proyecto</p> </Cards>
    <Cards> <StaticImage src='../images/svg/monster(white).svg' alt='Proyecto' width='250' /> <p className='tituloProyecto'>Titulo del proyecto</p> </Cards>
    <Cards> <StaticImage src='../images/svg/monster(white).svg' alt='Proyecto' width='250' /> <p className='tituloProyecto'>Titulo del proyecto</p> </Cards>
    <Cards> <StaticImage src='../images/svg/monster(white).svg' alt='Proyecto' width='250' /> <p className='tituloProyecto'>Titulo del proyecto</p> </Cards>
  </Container>
    </Layout>
  </>
)

export default IndexPage
