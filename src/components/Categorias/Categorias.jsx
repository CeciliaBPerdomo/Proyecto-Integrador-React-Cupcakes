import React from 'react'

// Categorias 
import { categorias } from "../../data/categorias"

// Estilos 
import {
    CategoriasContainer,
    ContenedorPrincipal
} from "./CategoriasStyled"


import CategoriaCard from './CategoriaCard'

const Categorias = () => {
    return (
        <ContenedorPrincipal>
                    <h1>Nuestros cupcakes</h1>
        <CategoriasContainer>
            {categorias.map((categoria) => (
                <CategoriaCard
                key={categoria.id}
                {...categoria}
                />
            ))}
        </CategoriasContainer>
            </ContenedorPrincipal>
    )
}

export default Categorias