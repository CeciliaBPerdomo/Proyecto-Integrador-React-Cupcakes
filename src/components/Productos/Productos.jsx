import React from "react";

// Data
import { cupcakes } from "../../data/productos";

import CardProducto from "./CardProducto";

// Estilos baby
import {
    ProductosContainer,
    ContenedorProductos,
} from "./ProductosStyled";

const Productos = () => {
    return (
        <ContenedorProductos>
            <h1>Nuestros cupcakes</h1>
            <ProductosContainer>
                {Object.entries(cupcakes).map(([, muffins]) => (
                    muffins.map((producto) => (
                        <CardProducto
                            {...producto}
                            key={producto.id}
                        />
                    ))
                ))}
            </ProductosContainer>
        </ContenedorProductos>
    )
}

export default Productos