import React from 'react'

// Estilos 
import {
    BarraContenedor,
    BusquedaContenedor
} from "./BarraBusquedaStyled"

//Boton e iconos
import Button from "../UI/Boton/Button"
import { BsSearch } from "react-icons/bs";


const BarraBusqueda = () => {
    return (
        <BarraContenedor>
            <h2>¿Qué categoría de cupcake estás buscando?</h2>
            <BusquedaContenedor>
                <input
                    type='text'
                    placeholder='Ej. Dulce de Leche'
                />
                <Button
                onClick={e => e.preventDefault()} 
                radius='25' 
                disabled='true'
                >
                    <BsSearch />
                </Button>
            </BusquedaContenedor>
        </BarraContenedor>
    )
}

export default BarraBusqueda