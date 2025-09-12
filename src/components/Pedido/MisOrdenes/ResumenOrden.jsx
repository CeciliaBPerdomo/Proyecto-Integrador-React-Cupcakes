import React from 'react'

import {
    ResumenOrdenStyled,
    CupcakeStyled
} from "./MisOrdenesStyled"

import { formatoPrecio } from '../../../utilidades/precio'

const ResumenOrden = ({ title, desc, quantity, img, price }) => {
    return (
        <ResumenOrdenStyled>
            <CupcakeStyled>
                <img src={img} alt={title} />

                <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <hr />
                    <p>Cantidad: {quantity}</p>
                    <p>Precio: {formatoPrecio(price * quantity)}</p>
                </div>
            </CupcakeStyled>
        </ResumenOrdenStyled>
    )
}

export default ResumenOrden