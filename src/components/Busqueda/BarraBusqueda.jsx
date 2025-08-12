import React, { useState } from 'react'

// Estilos 
import {
    BarraContenedor,
    BusquedaContenedor
} from "./BarraBusquedaStyled"

//Boton e iconos
import Button from "../UI/Boton/Button"
import { BsSearch } from "react-icons/bs";

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { seleccionarCategoria } from "../../redux/categorias/categoriasSlice"

const BarraBusqueda = ({ doScroll }) => {
    const dispatch = useDispatch()
    const [valueCategoria, setValueCategoria] = useState("")

    const listofCategories = useSelector(state => state.categorias.categorias).map((category) => {
        return category.categoria
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const newCategory = valueCategoria.trim().toLowerCase().split(" ").join("")
        const categoriaSelecionado = listofCategories.find((categoria) => {
            return categoria.toLowerCase() === newCategory
        })

        if (categoriaSelecionado) {
            dispatch(seleccionarCategoria(categoriaSelecionado))
            doScroll()
        } else {
            return alert("Categoria no encontrada.")
        }

        setValueCategoria("")
    }

    return (
        <BarraContenedor>
            <h2>¿Qué categoría de cupcake estás buscando?</h2>
            <BusquedaContenedor>
                <input
                    type='text'
                    placeholder='Ej. Dulce de Leche'
                    value={valueCategoria}
                    onChange={(e) => setValueCategoria(e.target.value)}
                />
                <Button
                    onClick={(e) => handleSubmit(e)}
                    radius='25'
                    disabled={!valueCategoria}
                >
                    <BsSearch />
                </Button>
            </BusquedaContenedor>
        </BarraContenedor>
    )
}

export default BarraBusqueda