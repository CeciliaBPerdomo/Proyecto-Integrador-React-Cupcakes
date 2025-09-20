import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Contenedor = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem; 

    h1 {
        padding-top: 1rem;
        color: var(--color-text)
    }
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gridLength }) =>
        `repeat(${gridLength}, 1fr)`};
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:vertical {
    display: none;
  }
`;

export const CardRecomendado = styled(motion.div)`
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.7rem;
    margin-top: 1rem;
    background: var(--color-secondary-background);
    border-radius: 15px;
    border: 1px solid var(--color-border);

    cursor: pointer;
    transition: all 0.4s ease;
    will-change: transform, box-shadow;
`;

export const ContenedorImagen = styled.div`
  width: 30%;
`;

export const CardImagen = styled.img`
    height: 150px;
`;

export const ContenedorCardInfo= styled.div`
  width: 80%;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
        margin: 0;
        color: var(--color-text-black);
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    span { 
        text-align: end;
        font-weight: 800;
        font-size: 1.5rem;
        background: linear-gradient(83deg, var(--color-text), var(--color-text-dark));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const ContenedorEncabezado = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    h2 {
      color: var(--color-text-dark);
      margin: 2px;
    }

    button {
      position: absolute;
      top: 2px;
      right: 2px;
    }
`