
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
import { useNavigate } from 'react-router-dom';


const CardProducto = ({ id, title, imagen, descripcion, precio }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <ProductosCard
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
            <ContenedorEncabezado>
                <h2>{title}</h2>
                <ContenedorBotones>
                    <Button onClick={()=> navigate(`/mas-info/${id}`)}>
                        <CiCirclePlus />
                    </Button>
                    <Button onClick={() => dispatch(agregarCarrito({ id, title, imagen, descripcion, precio }))}>
                        <BsCartPlus />
                    </Button>
                </ContenedorBotones>
            </ContenedorEncabezado>
            <img src={imagen} alt={title} />
             <p>{descripcion}</p>
             <ContainerPrecio>
                <CardPrecio> {formatoPrecio(precio)} </CardPrecio>
            </ContainerPrecio>
        </ProductosCard>
    )
}

export default CardProducto