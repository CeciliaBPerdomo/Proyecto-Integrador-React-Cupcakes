import React from 'react'

import {
    ResumenOrdenStyled,
    CupcakeStyled,
    ContenedorImagen,
    ContenedorInfo,
} from "./MisOrdenesStyled"

import { formatoPrecio } from '../../../utilidades/precio'

const ResumenOrden = ({ title, desc, quantity, img, price }) => {
    return (
        <ResumenOrdenStyled>
            <CupcakeStyled>

                <ContenedorImagen>
                    <img src={img} alt={title} />
                </ContenedorImagen>
                
                <ContenedorInfo>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <br />
                    <p>Cantidad: {quantity}</p>
                    <p>Precio: <span>{formatoPrecio(price * quantity)}</span></p>
                </ContenedorInfo>
            </CupcakeStyled>
        </ResumenOrdenStyled>
    )
}

export default ResumenOrden