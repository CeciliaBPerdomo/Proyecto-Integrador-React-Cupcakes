import React from 'react'

import { formatoPrecio } from "../../utilidades/precio"

// Estilos
import {
    CardRecomendado,
    CardImagen,
    CardInfo,
    ContenedorImagen,
    ContenedorCardInfo,
    ContenedorEncabezado
} from './RecomendadosStyled'

// Boton del carrito
import Button from "../UI/Boton/Button"
import { MdAddShoppingCart } from "react-icons/md";

// Redux
import { useDispatch } from 'react-redux';
import { agregarCarrito } from '../../redux/carrito/carritoSlice';

const RecomendadosCard = ({ id, title, imagen, descripcion, precio }) => {
    const dispatch = useDispatch()
    return (
        <CardRecomendado
            whileHover={{ y: -12, scale: 1.02, boxShadow: "0 14px 25px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.25,  ease: "easeInOut" }}
        >
            <ContenedorImagen>
                <CardImagen src={imagen} alt={title} />
            </ContenedorImagen> 

            <ContenedorCardInfo>
                <CardInfo>
                    <ContenedorEncabezado>
                        <h2>{title}</h2>

                        <Button onClick={()=> dispatch(agregarCarrito({id, title, imagen, descripcion, precio}))} >
                            <MdAddShoppingCart />
                        </Button>
                    </ContenedorEncabezado>

                    <p>{descripcion}</p>
                    <span> {formatoPrecio(precio)} </span>
                                        
                </CardInfo>
            </ContenedorCardInfo>
        </CardRecomendado>
    )
}

export default RecomendadosCard