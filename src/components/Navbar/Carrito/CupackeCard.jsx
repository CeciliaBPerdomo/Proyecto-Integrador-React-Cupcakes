import React from 'react'

// Estilos
import {
    CupcakeContainerStyled,
    CupcakeImagen,
    TextContainerStyled,
    ContadorStyled,
    CantidadStyled,
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
            {/* Imagen */}
            <CupcakeImagen
                src={imagen}
                alt={title}
            />

            <TextContainerStyled>
                <h4>{title}</h4>
                <p>{descripcion}</p>
                <span>{formatoPrecio(precio)}</span>

                <ContadorStyled>
                    {/* Disminuir */}
                    <Aumento
                        bgColor='var(--color-border)'
                        onClick={() => dispatch(borrarDelCarrito(id))}
                    >
                        {cantidad === 1 ? <BsTrash /> : <CiCircleMinus />}
                    </Aumento>

                    {/* Cantidad */}
                    <CantidadStyled>
                        {cantidad}
                    </CantidadStyled>

                    {/* Aumentar */}
                    <Aumento
                        bgColor='var(--color-border)'
                        onClick={() => dispatch(agregarCarrito({ id, imagen, title, descripcion, precio, cantidad }))}
                    >
                        <CiCirclePlus />
                    </Aumento>
                </ContadorStyled>
            </TextContainerStyled>

        </CupcakeContainerStyled>
    )
}

export default CupackeCard