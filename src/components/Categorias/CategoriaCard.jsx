import React from 'react'

// Estilos 
import {
    CardCategoria
} from "./CategoriasStyled"

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { seleccionarCategoria } from '../../redux/categorias/categoriasSlice'

const CategoriaCard = ({ imagen, categoria }) => {
    const dispatch = useDispatch()
    const seleccionada = useSelector(state => state.categorias.selectedCategoria)

    return (
        <CardCategoria
            selected={categoria == seleccionada}
            onClick={() => dispatch(seleccionarCategoria(categoria))}
            whileTap={{ scale: 0.95 }}
        >
            <img src={imagen} alt={categoria} />
            <h2>{categoria}</h2>
        </CardCategoria>
    )
}

export default CategoriaCard