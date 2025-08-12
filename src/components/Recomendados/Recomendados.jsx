import React from 'react'
// Estilos e iconos
import {
    Contenedor,
    CardsContainer
} from "./RecomendadosStyled"
import { GiCupcake } from "react-icons/gi";

// Card
import RecomendadosCard from './RecomendadosCard'

//Redux
import { useSelector } from 'react-redux';


const Recomendados = () => {

    const recomendados = useSelector(state => state.recomendados.recomendados)

    return (
        <Contenedor>
            <h1><GiCupcake /> Cupcakes destacados</h1>
            <CardsContainer gridLength={recomendados.length}>
                {recomendados.map((reTop) => (
                    <RecomendadosCard
                        key={reTop.id}
                        {...reTop}
                    />
                ))}
            </CardsContainer>
        </Contenedor>
    )
}

export default Recomendados