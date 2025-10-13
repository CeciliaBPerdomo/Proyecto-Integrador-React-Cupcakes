import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()
    return (
        <HeroContainerStyled>
            <TituloContainerStyled>
                <h1>Bienvenid@ a</h1>
                <img src={cupcakeText} alt="CupcakeLandia" />

                <ContenedorImagenResponsive
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <img src={cupcakesHero} alt='Cupcakes'
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
                    />
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
                    <Button radius='50' onClick={() => navigate('/#productos')}>
                        Conocé nuestros cupcakes
                    </Button>
                </HeroButtonContainerStyled>

            </TituloContainerStyled>

            <ImagenContainerStyled
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
                <img src={cupcakesHero} alt='Cupcakes'
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.5 } }}
                />
            </ImagenContainerStyled>

        </HeroContainerStyled>
    )
}

export default Hero