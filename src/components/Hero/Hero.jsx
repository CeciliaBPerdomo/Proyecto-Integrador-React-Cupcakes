import React from 'react'
import { Link } from 'react-router-dom'

// Botonazo
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
    HeroButtonContainerStyled,
    ContenedorImagenResponsive
} from './HeroStyled'

const Hero = () => {
    return (
        <HeroContainerStyled>
            <TituloContainerStyled>
                <h1>Bienvenid@ a</h1>
                <img src={cupcakeText} alt="CupcakeLandia" />

                <ContenedorImagenResponsive>
                    <img src={cupcakesHero} alt='Cupcakes' />
                </ContenedorImagenResponsive>

                <HeroParagraphStyled
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Descubrí sabores únicos, colores que enamoran 💜 y cupcakes que hacen sonreír a todos 🥰
                </HeroParagraphStyled>

                <HeroParagraphStyled
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    ¡Vení a probarlos y llevate tus favoritos a casa 🏠!
                </HeroParagraphStyled>

                <HeroButtonContainerStyled
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link to='/#productos'>
                        <Button radius='50'>
                            Conocé nuestros cupcakes
                        </Button>
                    </Link>
                </HeroButtonContainerStyled>

            </TituloContainerStyled>

            <ImagenContainerStyled>
                <img src={cupcakesHero} alt='Cupcakes' />
            </ImagenContainerStyled>

        </HeroContainerStyled>
    )
}

export default Hero