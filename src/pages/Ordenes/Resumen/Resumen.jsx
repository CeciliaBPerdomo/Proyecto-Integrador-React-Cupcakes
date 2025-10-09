import React, { useEffect, useState } from 'react'

// Estilos
import {
    ResumenStyled,
    ResumenInfoStyled,
    OrdenStyled,
    CupcakeCardContainer,
    ContenedorEncabezado,
    OrdenStyledWrapper
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
                <h1>🍓Tu orden: #{ordenId.slice(18)}</h1>
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

                <OrdenStyledWrapper>
                    <h2>Costos</h2>
                    <p>Precio: {formatoPrecio(verOrden?.price)}</p>
                    <p>Envío: {formatoPrecio(verOrden?.shippingCost)}</p>
                    <p>Total: <span>{formatoPrecio(verOrden?.total)}</span></p>
                    
                    <hr />

                    <h2>Detalles de envío</h2>
                    <p>Nombre: {verOrden?.shippingDetails.name}</p>
                    <p>Celular: {verOrden?.shippingDetails.cellphone}</p>
                    <p>Dirección: {verOrden?.shippingDetails.address}</p>
                    <p>Ciudad: {verOrden?.shippingDetails.location}</p>

                </OrdenStyledWrapper>
            </ResumenInfoStyled>

        </ResumenStyled>
    )
}

export default Resumen