import React, { useEffect } from 'react'

// Estilos
import {
    ContenedorPrincipal,
    ContenedorEncabezado,
} from "./OrdenesStyled"
import Button from "../../components/UI/Boton/Button"

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerOrdenes } from '../../axios/axios-orden'
import { clearError, fetchOrderFail } from '../../redux/ordenes/ordenesSlice'
import MisOrdenes from '../../components/Pedido/MisOrdenes/MisOrdenes'

const Ordenes = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { usuarioActual } = useSelector(state => state.usuario)
    const { ordenes, error } = useSelector(state => state.ordenes)

    useEffect(() => {
        if (!ordenes) {
            obtenerOrdenes(dispatch, usuarioActual)
        }

        if (!usuarioActual?.token) {
            dispatch(fetchOrderFail("Token"))
        } else {
            error && dispatch(clearError())
        }
    }, [dispatch, error, ordenes, usuarioActual])

    return (
        <ContenedorPrincipal>
            <ContenedorEncabezado>
                <h1>Mis órdenes</h1>
                <Button onClick={() => navigate("/")}>Volver a comprar</Button>
            </ContenedorEncabezado>

            <MisOrdenes />
        </ContenedorPrincipal>
    )
}

export default Ordenes