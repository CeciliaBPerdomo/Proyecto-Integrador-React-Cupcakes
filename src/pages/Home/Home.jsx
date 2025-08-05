import React from 'react'

// Styled 
import {
  HomeWrapper
} from './HomeStyled'

import Hero from '../../components/Hero/Hero.jsx';
import Productos from '../../components/Productos/Productos.jsx';
import Categorias from '../../components/Categorias/Categorias.jsx';
import Recomendados from '../../components/Recomendados/Recomendados.jsx';

const Home = () => {
  return (
    <HomeWrapper>
      {/* Hero */}
      <Hero />

      {/* Barra de búsqueda */}

      {/* Productos destacados */}
      <Recomendados />

      {/* Categorías */}
      <Categorias/>

      {/* Productos */}
      <Productos />

      {/* Nosotros */}

      {/* Contacto */}
      
    </HomeWrapper>
  )
}

export default Home