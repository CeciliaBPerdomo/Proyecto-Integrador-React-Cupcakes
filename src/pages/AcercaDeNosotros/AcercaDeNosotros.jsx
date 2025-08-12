import React from 'react'

import CocinerosCard from "./CocinerosCard"

// Estilos
import {
  CocinerosWrapper,
  CocinerosGrid,
} from "./AcercaDeNosotrosStyled"

//Redux
import { useSelector } from 'react-redux'

const AcercaDeNosotros = () => {

  const cocineros = useSelector(state => state.cocineros.cocineros)

  return (
    <CocinerosWrapper>
      <h2>👩‍🍳 Nuestros Maestros Cupcakeros 👨‍🍳</h2>

      <CocinerosGrid>
        {cocineros.map((cocinero, index) => (
          <CocinerosCard
            key={cocinero.id}
            {...cocinero}
            index={index}
          />
        ))}
      </CocinerosGrid>

    </CocinerosWrapper>
  )
}

export default AcercaDeNosotros