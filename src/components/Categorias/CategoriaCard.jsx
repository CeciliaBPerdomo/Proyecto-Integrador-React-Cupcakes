import React from 'react'

// Estilos 
import {
    CardCategoria
} from "./CategoriasStyled"

const CategoriaCard = ({ imagen, categoria }) => {
    return (
        <CardCategoria
            selected={false}
            onClick={e => e.preventDefault()}
            whileTap={{ scale: 0.95 }}
        >
            <img
                src={imagen}
                alt={categoria}
            />
            <h2>{categoria}</h2>
        </CardCategoria>
    )
}

export default CategoriaCard