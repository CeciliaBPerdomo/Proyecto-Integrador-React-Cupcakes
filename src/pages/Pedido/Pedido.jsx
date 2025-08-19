import React from 'react'

// Estilos
import {
    PedidoContainerStyled,
    PedidoStyled
} from "./PedidoStyled"

// Redux
import { useSelector } from 'react-redux'

// Componentes
import Productos from '../../components/Pedido/Producto/Productos'
import PedidoFormulario from '../../components/Pedido/Formulario/PedidoFormulario'

const Pedido = () => {
    const { itemsCarrito, envio } = useSelector((state) => state.carrito)

    // Precio total de compra
    const precio = itemsCarrito.reduce((acc, item) => {
        return (acc += (item.precio * item.cantidad))
    }, 0)

    return (
        <PedidoContainerStyled>
            <h1>Tu pedido</h1>

            <PedidoStyled>
                {/* Formulario de pedido */}
                <PedidoFormulario
                    itemsCarrito={itemsCarrito}
                    envio={envio}
                    precio={precio}
                />

                {/* Pedido */}
                <Productos
                    itemsCarrito={itemsCarrito}
                    envio={envio}
                    precio={precio}
                />
            </PedidoStyled>
        </PedidoContainerStyled>
    )
}

export default Pedido