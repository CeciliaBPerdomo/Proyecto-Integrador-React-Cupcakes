import React, { useEffect, useState } from 'react'

// Estilos
import {
    ResumenStyled,
    ResumenInfoStyled,
    OrdenStyled,
    CupcakeCardContainer,
    ContenedorEncabezado,
} from "./ResumenStyled"

// Formato Precio y fecha
import { formatoPrecio } from '../../../utilidades/precio'
// import { formatoFecha } from '../../../utilidades/fecha'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerOrdenes } from '../../../axios/axios-orden'
import ResumenOrden from '../../../components/Pedido/MisOrdenes/ResumenOrden'

import { EstadoOrden } from '../../../components/Pedido/MisOrdenes/EstadoOrden'
const Resumen = () => {
    const dispatch = useDispatch()

    const [verOrden, setVerOrden] = useState(null)
    const { ordenId } = useParams()

    const { ordenes } = useSelector(state => state.ordenes)
    const { usuarioActual } = useSelector(state => state.usuario)


    useEffect(() => {
        if (!ordenes) {
            obtenerOrdenes(dispatch, usuarioActual)
        }
        setVerOrden(ordenes?.find((orden) => orden._id === ordenId))
    }, [usuarioActual, dispatch, ordenes, ordenId])

    return (
        <ResumenStyled>
            <ContenedorEncabezado>
                <h2>🍓Tu orden: #{ordenId.slice(18)}</h2>
                <EstadoOrden status={verOrden?.status} />
            </ContenedorEncabezado>

            <ResumenInfoStyled>
                <OrdenStyled>
                    <h2>Tus cupcakes</h2>
                    <CupcakeCardContainer>
                        {verOrden?.items.map((item) => {
                            return (
                                <ResumenOrden
                                    key={item._uid}
                                    {...item}
                                />
                            )
                        })}
                    </CupcakeCardContainer>

                </OrdenStyled>
                <OrdenStyled>
                    <h2>Costos</h2>
                    <span>Precio: {formatoPrecio(verOrden?.price)}</span>
                    <span>Envío: {formatoPrecio(verOrden?.shippingCost)}</span>
                    <span>Total: {formatoPrecio(verOrden?.total)}</span>
                    <hr />

                    <h2>Detalles de envío</h2>
                    <span>Nombre: {verOrden?.shippingDetails.name}</span>
                    <span>Celular: {verOrden?.shippingDetails.cellphone}</span>
                    <span>Dirección: {verOrden?.shippingDetails.address}</span>
                    <span>Ciudad: {verOrden?.shippingDetails.location}</span>

                </OrdenStyled>
            </ResumenInfoStyled>

        </ResumenStyled>
    )
}

export default Resumen