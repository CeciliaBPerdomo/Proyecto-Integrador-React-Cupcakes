import React from 'react'

// Estilos 
import {
    CocineroCardContainer,
    CocineroImg,
    RedesSociales
} from "./AcercaDeNosotrosStyled"

// Iconos de redes sociales
import { PiFacebookLogoLight, PiYoutubeLogoThin, PiInstagramLogoLight } from "react-icons/pi";


const CocinerosCard = ({ index, nombre, especialidad, experiencia, imagen, redes }) => {
    return (
        <CocineroCardContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.3,
                delay: index * 0.2
            }}
        >
            <CocineroImg
                src={imagen}
                alt={nombre}
            />
            <h2>{nombre}</h2>
            <p><strong>Especialidad:</strong> {especialidad}</p>
            <p>{experiencia}</p>

            <RedesSociales>
                <a href={redes.facebook} target="_blank" rel="noopener noreferrer">
                    <PiFacebookLogoLight />
                </a>

                <a href={redes.youtube} target="_blank" rel="noopener noreferrer">
                    <PiYoutubeLogoThin />
                </a>

                <a href={redes.instagram} target="_blank" rel="noopener noreferrer">
                    <PiInstagramLogoLight />
                </a>
            </RedesSociales>
        </CocineroCardContainer>
    )
}

export default CocinerosCard