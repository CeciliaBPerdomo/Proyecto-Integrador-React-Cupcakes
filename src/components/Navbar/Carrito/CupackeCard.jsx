import React from 'react'

// Estilos
import {
    CupcakeContainerStyled,
    CupcakeImagen,
    TextContainerStyled,
    ContadorStyled,
    CantidadStyled,
} from "./CarrritoComprasStyled"

import { formatoPrecio } from "../../../utilidades/precio"

// Botonazo 
import Aumento from "../../UI/Boton/Aumento/Aumento"

const CupackeCard = () => {

    return (
        <CupcakeContainerStyled>
            {/* Imagen */}
            <CupcakeImagen
                src='/cupcakes/LemonKiss.png'
                alt='LemonKiss'
            />

            <TextContainerStyled>
                <h4>Cupcakes</h4>
                <p>Una cosa barbara, una explosión de sabor</p>
                <span>{formatoPrecio(5000)}</span>

                <ContadorStyled>
                    <Aumento
                        bgColor='var(--color-border)'
                        onClick={() => console.log("Aumentar cantidad")}
                    >
                        +
                    </Aumento>
                    <CantidadStyled>8</CantidadStyled>
                    <Aumento
                        bgColor='var(--color-border)'
                        onClick={() => console.log("Disminuir cantidad")}
                    >
                        -
                    </Aumento>
                </ContadorStyled>
            </TextContainerStyled>

        </CupcakeContainerStyled>
    )
}

export default CupackeCard