import React from 'react'

// Styled 
import {
  HomeWrapper
} from './HomeStyled'

import Hero from '../../components/Hero/Hero.jsx';
import Productos from '../../components/Productos/Productos.jsx';

const Home = () => {
  return (
    <HomeWrapper>
      {/* Hero */}
      <Hero />

      {/* Barra de búsqueda */}

      {/* Productos destacados */}

      {/* Categorías */}

      {/* Productos */}
      <Productos />

      {/* Nosotros */}

      {/* Contacto */}
    </HomeWrapper>
  )
}

export default Home