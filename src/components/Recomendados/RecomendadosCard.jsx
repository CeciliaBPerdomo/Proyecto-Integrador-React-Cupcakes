import React from 'react'

import { formatoPrecio } from "../../utilidades/precio"

// Estilos
import {
    CardRecomendado,
    CardImagen,
    CardInfo
} from './RecomendadosStyled'

// Boton del carrito
import Button from "../UI/Boton/Button"
import { MdAddShoppingCart } from "react-icons/md";

const RecomendadosCard = ({ title, imagen, descripcion, precio }) => {
    return (
        <CardRecomendado
            whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: "0 14px 25px rgba(0,0,0,0.15)"
            }}
            transition={{ 
                duration: 0.25, 
                ease: "easeInOut" 
            }}
        >
            <CardImagen
                src={imagen}
                alt={title}
            />
            <CardInfo>
                <h2>{title}</h2>
                <p>{descripcion}</p>
                <span>
                    {formatoPrecio(precio)}
                </span>
                {/* <Button
                    onClick={e => e.preventDefault()}
                >
                    <MdAddShoppingCart />
                </Button> */}
            </CardInfo>
        </CardRecomendado>
    )
}

export default RecomendadosCard