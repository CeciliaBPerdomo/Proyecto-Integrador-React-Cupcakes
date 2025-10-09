import React from 'react'
import { useNavigate } from 'react-router-dom'

// Estilos, ui, formatos
import {
  PedidoContainerStyled,
  TextContainerStyled,
  HorarioWrapper,
  PrecioWrapper,
} from "./MisOrdenesStyled"

// Formato de fecah y precio
import { formatoFecha } from "../../../utilidades/fecha"
import { formatoPrecio } from '../../../utilidades/precio'

// Estado de la orden
import { EstadoOrden } from './EstadoOrden'

const Orden = ({ createdAt, status, total, _id }) => {
  const navigate = useNavigate()
  return (
    <PedidoContainerStyled onClick={() => navigate(`/resumen-orden/${_id}`)}>
      <TextContainerStyled>
        <h3>🗒️​Número de pedido: #<strong>{_id.slice(18)}</strong></h3>
        <EstadoOrden status={status} />
        <HorarioWrapper>
          <p>Fecha: {formatoFecha(createdAt).slice(0, 10)}</p>
          <p>Hora: {formatoFecha(createdAt).slice(10)}</p>
        </HorarioWrapper>
        <PrecioWrapper>Precio: <span>{formatoPrecio(total)}</span></PrecioWrapper>
      </TextContainerStyled>
    </PedidoContainerStyled>

  )
}

export default Orden