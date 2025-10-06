import React from 'react'

// Estilos
import {
    CupcakeContainerStyled,
    CupcakeImagen,
    TextContainerStyled,
    ContadorStyled,
    CantidadStyled,
    EncabezadoStyled,
    ImagenWrapper,
} from "./CarrritoComprasStyled"

// Iconos 
import { BsTrash } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

// Formato de precios
import { formatoPrecio } from "../../../utilidades/precio"

// Botonazo 
import Aumento from "../../UI/Boton/Aumento/Aumento"

// Redux
import { useDispatch } from 'react-redux'
import { agregarCarrito, borrarDelCarrito } from '../../../redux/carrito/carritoSlice'

const CupackeCard = ({ id, imagen, title, descripcion, precio, cantidad }) => {
    const dispatch = useDispatch()
    return (
        <CupcakeContainerStyled>

            {/* Encabezado: cupcake y precio */}
            <EncabezadoStyled>
                <h4>{title}</h4>
                <span>{formatoPrecio(precio * cantidad)}</span>
            </EncabezadoStyled>

            {/* Imagen y descripcion*/}
            <ImagenWrapper>
                <CupcakeImagen src={imagen} alt={title} />

                <TextContainerStyled>
                    <p>{descripcion}</p>
                </TextContainerStyled>
            </ImagenWrapper>

            {/* Cantidad */}
            <ContadorStyled>
                {/* Disminuir */}
                <Aumento bgColor='var(--color-border)' onClick={() => dispatch(borrarDelCarrito(id))} >
                    {cantidad === 1 ? <BsTrash /> : <CiCircleMinus />}
                </Aumento>

                {/* Cantidad */}
                <CantidadStyled>
                    {cantidad}
                </CantidadStyled>

                {/* Aumentar */}
                <Aumento bgColor='var(--color-border)' onClick={() => dispatch(agregarCarrito({ id, imagen, title, descripcion, precio, cantidad }))} >
                    <CiCirclePlus />
                </Aumento>
            </ContadorStyled>

        </CupcakeContainerStyled>
    )
}

export default CupackeCard