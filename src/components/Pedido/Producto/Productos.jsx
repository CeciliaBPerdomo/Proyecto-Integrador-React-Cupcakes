import React from 'react'

// Estilos 
import {
    ProductosContainerStyled,
    CardsWrapperStyled,
    ContenedorPrecio,
    PreciosWrapper,
} from "./ProductosStyled"

import { formatoPrecio } from "../../../utilidades/precio"

// Componente de cupcakes
import CupackeCard from '../../Navbar/Carrito/CupackeCard'

const Productos = ({ itemsCarrito, envio, precio }) => {

    return (
        <ProductosContainerStyled>
            <h2>Tus cupcakes</h2>
            <CardsWrapperStyled>
                {itemsCarrito.length ? (
                    itemsCarrito.map((cupcake) => {
                        return (
                            <CupackeCard
                                key={cupcake.id}
                                {...cupcake}
                            />
                        )
                    })
                ) : (
                    <p>No hay cupcakes pedidos</p>
                )}
            </CardsWrapperStyled>

            {/* Precios */}
            <PreciosWrapper>
                <hr />
                <ContenedorPrecio>
                    <p>SubTotal:</p>
                    <p>{formatoPrecio(precio)}</p>
                </ContenedorPrecio>
                <ContenedorPrecio>
                    <p>Envio:</p>
                    <p>{formatoPrecio(envio)}</p>
                </ContenedorPrecio>

                <ContenedorPrecio>
                    <p>Total:</p>
                    <span>{formatoPrecio(precio + envio)}</span>
                </ContenedorPrecio>
            </PreciosWrapper>
        </ProductosContainerStyled>
    )
}

export default Productos