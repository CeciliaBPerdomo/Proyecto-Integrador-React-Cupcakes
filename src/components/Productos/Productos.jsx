import React, { useState } from "react";

// Estilos baby
import {
    ProductosContainer,
    ContenedorProductos,
    ContainerBoton
} from "./ProductosStyled";
import Button from "../UI/Boton/Button";

// Cupcakes
import CardProducto from "./CardProducto";

// Redux sweet heart 
import { useSelector } from "react-redux";

// Paginacion 
import { limite_inicial } from "../../utilidades/constantes"

const Productos = () => {

    // Paginación
    const [limite, setLimite] = useState(limite_inicial)
    const totalCupcakes = useSelector((state) => state.productos.totalProductos)

    let cupcakes = useSelector(state => state.productos.productos)
    const categoriaSeleccionada = useSelector(state => state.categorias.selectedCategoria)
    
    if (categoriaSeleccionada) {
        const categoriaElegida = categoriaSeleccionada.toLowerCase();
        cupcakes = { [categoriaElegida]: cupcakes[categoriaElegida] || [] }
    }

    return (
        <ContenedorProductos>

            <ProductosContainer>
                {Object.entries(cupcakes).map(([, muffins]) => (
                    muffins.map((producto) => {
                        if (limite >= producto.id || categoriaSeleccionada) {
                            return (
                                <CardProducto
                                    {...producto}
                                    key={producto.id}
                                />
                            )
                        }
                        return null
                    })
                ))}
            </ProductosContainer>

            {/* Botones de ver más y menos */}
            {!categoriaSeleccionada && (
                <ContainerBoton>
                    <Button
                        onClick={() => setLimite(prevLimite => prevLimite - limite_inicial)}
                        secondary='true'
                        disabled={limite_inicial === limite}
                    >
                        Ver menos
                    </Button>
                    <Button
                        onClick={() => setLimite(prevLimite => prevLimite + limite_inicial)}
                        disabled={totalCupcakes <= limite}
                    >
                        Ver más
                    </Button>
                </ContainerBoton>
            )}

        </ContenedorProductos>
    )
}

export default Productos