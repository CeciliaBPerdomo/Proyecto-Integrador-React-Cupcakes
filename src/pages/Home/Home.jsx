import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
  const productosRef = useRef()
  const nosotrosRef = useRef(null)
  const contactoRef = useRef(null)
  const location = useLocation()

    const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const hash = location.hash.replace('#', '')

    const scrollWithOffset = (el) => {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    if (hash === 'productos' && productosRef.current) scrollWithOffset(productosRef.current);
    if (hash === 'nosotros' && nosotrosRef.current) scrollWithOffset(nosotrosRef.current);
    if (hash === 'contacto' && contactoRef.current) scrollWithOffset(contactoRef.current);
  }, [location])


  return (
    <HomeWrapper>
      {/* Hero */}
      <Hero />

      {/* Barra de búsqueda */}
      <BarraBusqueda doScroll={() => scrollToSection(productosRef)} />

      {/* Productos destacados */}
      <Recomendados />

      {/* Categorías */}
      <Categorias />

      {/* Productos */}
      <div ref={productosRef} id="productos">
        <Productos />
      </div>

      {/* Nosotros */}
      <div ref={nosotrosRef} id="nosotros">
        <AcercaDeNosotros />
      </div>

      {/* Contacto */}
      <div ref={contactoRef} id="contacto">
        <Contacto />
      </div>
    </HomeWrapper>
  )
}

export default Home