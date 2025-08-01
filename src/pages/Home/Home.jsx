import React from 'react'

// Styled 
import { 
  HomeWrapper 
} from './HomeStyled'

import Hero from '../../components/Hero/Hero.jsx';

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
    </HomeWrapper>
  )
}

export default Home