import React from 'react'

import {
  EstadoOrdenWrapper,
} from "./MisOrdenesStyled"

export const EstadoOrden = ({ status }) => {
  return (
    <div>
      <EstadoOrdenWrapper>
        Estado: <span>{status === "pending" ? "pendiente" : status}</span>
      </EstadoOrdenWrapper>
    </div>
  )
}
