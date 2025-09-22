import React from 'react'

//Estilos 
import {
    CardContainer,
    ImagenWrapper,
    CardImagen,
    InfoWrapper,
    Precio,
    CardTitle,
    BotonesWrapper
} from "./MasInfoCardStyled"

// Iconos
import { BsCartPlus } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai";

import { formatoPrecio } from '../../utilidades/precio'
import Button from '../UI/Boton/Button'


import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {agregarCarrito} from "../../redux/carrito/carritoSlice"

const MasInfoCard = ({ cupcake }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    if (!cupcake) return <p>Cargando...</p>

    const { id, title, categoria, descripcion, imagen, ingredientes, precio, preparacion } = cupcake

    return (
        <CardContainer
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <BotonesWrapper>
                <Button>
                    <AiOutlineHome onClick={() => navigate("/")}/>
                </Button>
                <Button>
                    <BsCartPlus onClick={() => dispatch(agregarCarrito({ id, title, imagen, descripcion, precio }))}/>
                </Button>
            </BotonesWrapper>

            <CardTitle>{title}</CardTitle>

            <ImagenWrapper>
                <CardImagen src={imagen} alt={title} />
            </ImagenWrapper>

            <InfoWrapper>
                <h2>Categoría: <strong>{categoria}</strong></h2>
                <p>{descripcion}</p>
                <p><strong>Ingredientes:</strong> {ingredientes.join(", ")}</p>
                <p><strong>Preparación:</strong> {preparacion}</p>
                <Precio>{formatoPrecio(precio)}</Precio>
            </InfoWrapper>
        </CardContainer>
    )
}

export default MasInfoCard
