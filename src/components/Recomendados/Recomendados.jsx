import React from 'react'

// Recomendados
import { recomendados } from "../../data/recomendados"

// Estilos
import {
    Contenedor,
    CardsContainer
} from "./RecomendadosStyled"

// Card
import RecomendadosCard from './RecomendadosCard'

import { GiCupcake } from "react-icons/gi";

const Recomendados = () => {
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