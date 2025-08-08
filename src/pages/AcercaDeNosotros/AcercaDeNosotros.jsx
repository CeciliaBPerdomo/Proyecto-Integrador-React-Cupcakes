import React from 'react'

// Cocineros
import { cocineros } from "../../data/cocineros"
import CocinerosCard from './CocinerosCard'

// Estilos
import {
  CocinerosWrapper,
  CocinerosGrid,
} from "./AcercaDeNosotrosStyled"

const AcercaDeNosotros = () => {
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