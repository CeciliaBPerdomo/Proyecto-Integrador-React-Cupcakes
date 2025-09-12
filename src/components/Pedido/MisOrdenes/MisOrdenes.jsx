import React from 'react'

// Estilos y ui
import Loader from '../../UI/Loader/Loader'
import {
    MisOrdenesContainerStyled,
} from "./MisOrdenesStyled"

import { useSelector } from 'react-redux'
import Orden from './Orden'

const MisOrdenes = () => {
    const { ordenes, loading, error } = useSelector(state => state.ordenes)

    if (loading && !ordenes) {
        return <Loader />
    }

    if (error) {
        return <h2 style={{ textAlign: "center" }}>{error}</h2>
    }

    return (
        <MisOrdenesContainerStyled>
            {ordenes?.length ? (
                ordenes.map((cupcakes) => {
                    return (
                        <Orden
                            key={cupcakes._id}
                            {...cupcakes}
                        />
                    )
                })
            ) : (
                <h2>Que esperas para hacer tu primer pedido!</h2>
            )}
        </MisOrdenesContainerStyled>
    )
}

export default MisOrdenes