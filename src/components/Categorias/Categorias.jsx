import React from 'react'

// Categorias 
import { categorias } from "../../data/categorias"

// Estilos 
import {
    CategoriasContainer
} from "./CategoriasStyled"


import CategoriaCard from './CategoriaCard'

const Categorias = () => {
    return (
        <CategoriasContainer>
            {categorias.map((categoria) => (
                <CategoriaCard
                    key={categoria.id}
                    {...categoria}
                />
            ))}
        </CategoriasContainer>
    )
}

export default Categorias