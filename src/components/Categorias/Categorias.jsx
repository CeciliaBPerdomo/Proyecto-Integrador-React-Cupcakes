import React from 'react'

// Estilos 
import {
    CategoriasContainer,
    ContenedorPrincipal
} from "./CategoriasStyled"

// Cards de categorias
import CategoriaCard from './CategoriaCard'

// Redux
import { useSelector } from 'react-redux'

const Categorias = () => {

    const categorias = useSelector(state => state.categorias.categorias)

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