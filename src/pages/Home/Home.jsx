import React, { useRef } from 'react'

// Styled 
import {
  HomeWrapper
} from './HomeStyled'

import Hero from '../../components/Hero/Hero.jsx';
import Productos from '../../components/Productos/Productos.jsx';
import Categorias from '../../components/Categorias/Categorias.jsx';
import Recomendados from '../../components/Recomendados/Recomendados.jsx';
import BarraBusqueda from '../../components/Busqueda/BarraBusqueda.jsx';
import AcercaDeNosotros from '../AcercaDeNosotros/AcercaDeNosotros.jsx';
import Contacto from '../Contacto/Contacto.jsx';

const Home = () => {
   const productsRef = useRef()

  const doScroll = () => {
    // window.scrollTo(
    //   productsRef.current.getBoundingClientRect().x,
    //   productsRef.current.getBoundingClientRect().y,
    // )
  }

  return (
    <HomeWrapper>
      {/* Hero */}
      <Hero />

      {/* Barra de búsqueda */}
      <BarraBusqueda doScroll={doScroll}/>

      {/* Productos destacados */}
      <Recomendados />

      {/* Categorías */}
      <Categorias />

      {/* Productos */}
      <Productos ref={productsRef}/>

      {/* Nosotros */}
      <AcercaDeNosotros />

      {/* Contacto */}
      <Contacto />

    </HomeWrapper>
  )
}

export default Home