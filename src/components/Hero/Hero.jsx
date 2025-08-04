import React from 'react'
import Button from '../UI/Boton/Button'

// imagenes 
import cupcakesHero from '../../assets/cupcakes/hero.png'
import cupcakeText from "../../assets/CupcakeLandia.png"

// estilos 
import {
    HeroContainerStyled,
    TituloContainerStyled,
    ImagenContainerStyled,
    HeroParagraphStyled,
    HeroButtonContainerStyled
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
                    <p>Descubrí sabores únicos, colores que enamoran 💜 y cupcakes que hacen sonreír a todos 🥰</p>
                    <p>¡Vení a probarlos y llevates tu favoritos a casa 🏠!</p>
                </HeroParagraphStyled>
                <HeroButtonContainerStyled
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button
                        onClick={e => e.preventDefault()}
                        radius='50'
                    >
                        Conocé nuestros cupcakes
                    </Button>
                </HeroButtonContainerStyled>
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