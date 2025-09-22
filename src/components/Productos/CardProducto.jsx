
import React from 'react'

// Formato de la moneda
import { formatoPrecio } from "../../utilidades/precio";

// Boton e iconos
import Button from "../UI/Boton/Button";
import { BsCartPlus } from "react-icons/bs"
import { CiCirclePlus } from "react-icons/ci";

//Estilos
import {
    ProductosCard,
    ContainerPrecio,
    CardPrecio,
    ContenedorEncabezado,
    ContenedorBotones
} from "./ProductosStyled"

// Redux
import { useDispatch } from 'react-redux';
import { agregarCarrito } from '../../redux/carrito/carritoSlice';


const CardProducto = ({ id, title, imagen, descripcion, precio }) => {
    const dispatch = useDispatch()

    return (
        <ProductosCard>
            <ContenedorEncabezado>
                <h2>{title}</h2>
                <ContenedorBotones>
                    <Button onClick={() => dispatch(agregarCarrito({ id, title, imagen, descripcion, precio }))}>
                        <BsCartPlus />
                    </Button>
                    <Button onClick={()=> console.log("Hellou")}>
                        <CiCirclePlus />
                    </Button>
                </ContenedorBotones>
            </ContenedorEncabezado>
            <img
                src={imagen}
                alt={title}
            />
            <p>{descripcion}</p>
            <ContainerPrecio>
                <CardPrecio>
                    {formatoPrecio(precio)}
                </CardPrecio>
            </ContainerPrecio>
        </ProductosCard>
    )
}

export default CardProducto