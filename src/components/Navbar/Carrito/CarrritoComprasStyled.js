import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';


// Carrito de compras
export const CarritoStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: calc(100vw - 350px);
    height: 100%;
    ${({ oculto }) => !oculto && css`backdrop-filter: blur(4px);`}
`;

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;

    display: flex;
    flex-direction: column;
    gap: 30px;

    width: 350px;
    height: 100vh;
    padding: 1.5rem;

    background-color: var(--color-tertiary-background);
    border-radius: 1.5rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

    overflow-y: auto;
    scrollbar-width: none;          
    -ms-overflow-style: none;       

    &::-webkit-scrollbar {          
        display: none;
    }
`;

export const ContenedorBotonCierre = styled.div`
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    z-index: 9;

     button {
        background: transparent;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: var(--color-text-dark);
        transition: transform 0.2s ease;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const BotonVaciarStyled = styled.div`
    position: absolute;
    top: 2.25rem;
    right: 0.25rem;
    z-index: 9;

    button {
        background: transparent;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: var(--color-text-dark);
        transition: transform 0.2s ease;
        transform: scaleX(-1);

        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const ContenedorHeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-dark);

    h1 {
        margin: 0;
        padding: 0.5rem;
    } 
`;

export const ContenedorPrincipalStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    
    p {
        color: var(--color-text);
    }
`;

export const CupcakeStyled = styled.div`
    flex: 1 1 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 0.25rem;

    overflow-y: auto;
    overflow: scroll;

    &::-webkit-scrollbar {
        background: transparent;
    }

    &::-webkit-scrollbar:horizontal {
        display: none;
    }

    @media (max-height: 800px) {
        height: 235px;
    }
`;

export const TotalesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 1.5rem;

    hr {
        border: none;
        height: 1px;
        background: linear-gradient(83deg, var(--color-text), var(--color-text-dark));
        margin: 5px 0;
    }
`;

export const TotalesFila = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    font-weight: 700;
    font-size: 1rem;
    color: var(--color-text-dark);

    span {
        text-align: center;
        min-width: 80px;
    }
`;

export const TotalesFilaValores = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-text-black);

    span {
        text-align: center;
        min-width: 80px;
    }
`;

export const TotalFinal = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--color-text-black);
    margin-bottom: 1rem;

    span:first-child {
        margin-right: 0.5rem;
    }
`;

// Cupackes card
export const CupcakeContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    max-width: 280px;

    background: var(--color-tertiary-background);
    padding: 1rem;
    border-radius: 15px;
    border: 1px solid var(--color-botones);
`;

export const EncabezadoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
        color: var(--color-text-black);
        margin: 0; 
        font-size: 1.25rem;
    }

    span {
        font-size: 1rem;
        margin: 0;
        background: linear-gradient(83deg, var(--color-text), var(--color-text-dark));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 600;
        text-align: end;
    }
`;

export const ImagenWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const CupcakeImagen = styled.img`
    width: 40%;
    height: auto;
    max-height: 100px;
    object-fit: contain;
`;

export const TextContainerStyled = styled.div`
    flex: 1;
    display: flex; 
    align-items: center;

    p {
        text-align: center;
        color: var(--color-text-black);
        margin: 0;  
        font-size: 0.9rem;
    }
`;

export const ContadorStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 5px;
`;


export const CantidadStyled = styled.span`
    width: 35px;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.6px;
    color: var(--color-text-black);
`;

export const SinProductos = styled(motion.p)`
    text-align: center;
    font-size: 2rem;
    color: var(--color-text-dark);
`