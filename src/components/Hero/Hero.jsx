import React from 'react'

// imagenes 
import cupcakesHero from '../../assets/cupcakes/hero.png'
import cupcakeText from "../../assets/CupcakeLandia.png"

// estilos 
import {
    HeroContainerStyled,
    TituloContainerStyled,
    ImagenContainerStyled,
    HeroParagraphStyled
} from './HeroStyled'

const Hero = () => {
    return (
        <HeroContainerStyled>
            <TituloContainerStyled>
                <h1>Bienvenid@ a
                    <img
                        src={cupcakeText}
                        alt="CupcakeLandia"
                    />
                </h1>
                <HeroParagraphStyled
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p>Descubrí sabores únicos, colores que enamoran 💜 y cupcakes que hacen sonreír a todos 🥰​</p>
                    <p>¡Vení a probarlos y llevate tu favorito a casa 🏠!​</p>
                </HeroParagraphStyled>
            </TituloContainerStyled>

            <ImagenContainerStyled>
                <img
                    src={cupcakesHero}
                    alt='Cupcakes'
                />
            </ImagenContainerStyled>
        </HeroContainerStyled>
    )
}

export default Hero