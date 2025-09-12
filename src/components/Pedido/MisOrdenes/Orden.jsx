import React from 'react'

// Estilos, ui, formatos
import {
    PedidoContainerStyled,
    TextContainerStyled
} from "./MisOrdenesStyled"
import {formatoFecha} from "../../../utilidades/fecha"
import { formatoPrecio } from '../../../utilidades/precio'
import { EstadoOrden } from './EstadoOrden'
import { useNavigate } from 'react-router-dom'

const Orden = ({ createdAt, status, total, _id }) => {
  const navigate = useNavigate()
  return (
    <PedidoContainerStyled onClick={() => navigate(`/resumen-orden/${_id}`)}>
        <TextContainerStyled>
            <h3>Número de pedido: #{_id.slice(18)}</h3>
            <p>Fecha: {formatoFecha(createdAt)}</p>
            <p>Precio: { formatoPrecio(total) }</p>
        <EstadoOrden status={status} />
        </TextContainerStyled>
    </PedidoContainerStyled>

  )
}

export default Orden