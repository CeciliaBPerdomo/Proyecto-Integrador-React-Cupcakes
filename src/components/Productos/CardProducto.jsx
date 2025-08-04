
import React from 'react'

// Formato de la moneda
import { formatoPrecio } from "../../utilidades/precio";

// Boton e iconos
import Button from "../UI/Boton/Button";
import { BsCartPlus } from "react-icons/bs"

//Estilos
import {
    ProductosCard,
    ContainerPrecio,
    CardPrecio,
    ContainerBoton
} from "./ProductosStyled"

// id,
const CardProducto = ({ title, imagen, descripcion, precio }) => {
    return (
        <ProductosCard>
            <img
                src={imagen}
                alt={title}
            />
            <h2>{title}</h2>
            <p>{descripcion}</p>
            <ContainerPrecio>
                <CardPrecio>
                    {formatoPrecio(precio)}
                </CardPrecio>
            </ContainerPrecio>
            <ContainerBoton>
                <Button
                    onClick={e => e.preventDefault()}>
                    <BsCartPlus />
                    Agregar al carrito
                </Button>
            </ContainerBoton>
        </ProductosCard>
    )
}

export default CardProducto