import React from 'react'

// Estilo 
import {
    AumentoStyled
} from "./AumentoStyled"


const Aumento = ({
    children,
    bgColor,
    disabled = false,
    onClick = e => e.preventDefault(),
}) => {
    return (
        <AumentoStyled
            whileTap={{ scale: 0.95 }}
            bgColor={bgColor}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </AumentoStyled>
    );
}

export default Aumento