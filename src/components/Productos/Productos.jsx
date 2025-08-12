import React from "react";
import CardProducto from "./CardProducto";

// Estilos baby
import {
    ProductosContainer,
    ContenedorProductos,
} from "./ProductosStyled";

// Redux sweet heart 
import { useSelector } from "react-redux";

const Productos = () => {

    let cupcakes = useSelector(state => state.productos.productos)
    const categoriaSeleccionada = useSelector(state => state.categorias.selectedCategoria)

    if(categoriaSeleccionada) {
        cupcakes = { [categoriaSeleccionada]: cupcakes[categoriaSeleccionada] }
    }

    return (
        <ContenedorProductos>
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