import React, { useEffect, useState } from 'react'

// Estilos 
import {
    ContenedorPrincipal,
} from "./MasInfoStyled"

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductos } from '../../redux/productos/productosSlice'
import MasInfoCard from '../../components/MasInfo/MasInfoCard'

const MasInfo = () => {
    const dispatch = useDispatch()
    
    const [ verCupcake, setVerCupcake ] = useState(null)
    const { cupcakeId } = useParams()

    let  productos  = useSelector(state => state.productos.productos)

    useEffect(() => {
        if (!productos) {
           dispatch(getProductos())
        } else {
            const todosLosProductos = Object.values(productos).flat()
            setVerCupcake(todosLosProductos.find(cupcake => cupcake.id.toString() === cupcakeId))
        }

    }, [productos, cupcakeId, dispatch])

    return (
        <ContenedorPrincipal>
            <MasInfoCard 
                cupcake={verCupcake}
            />
        </ContenedorPrincipal>
    )
}


export default MasInfo