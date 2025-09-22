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

    @media (max-width: 768px){
      padding: 0.5rem;

      h1 {
        text-align: center;
        font-size: 1.75rem;
      }
    }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  gap: 20px;
  overflow-x: auto;
  padding: 0 1rem;

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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
    gap: 10px;
    padding: 0.75rem;
  }
`;


// RecomendadosCard.jsx

export const CardRecomendado = styled(motion.div)`
    width: 95%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1.7rem;
    margin-top: 1rem;
    background: var(--color-secondary-background);
    border-radius: 15px;
    border: 1px solid var(--color-border);

    cursor: pointer;
    transition: all 0.4s ease;
    will-change: transform, box-shadow;

    @media (max-width: 768px) {
      width: 98%;
      padding: 1rem;
    }
`;

export const ContenedorEncabezado = styled.div`
    width: 100%;  
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h2 {
      color: var(--color-text-dark);
      margin: 0;
      align-items: left;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 1.25rem;
        margin: 0px;
        width: 70%;
      }
    }
`;

export const ContenedorImagen = styled.div`
    width: 20%;
    min-width: 150px;
    margin-right: 1rem;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

export const CardImagen = styled.img`
    height: 150px;

    @media (max-width: 768px) {
      min-width: 100px;
    }
`;

export const ContenedorCardInfo= styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    p {
      height: 40%;
      margin: 0;
      color: var(--color-text-black);
      font-size: 1.2rem;
      padding-bottom: 1rem;
    }

    span { 
        height: 30%;
        text-align: right;
        font-weight: 800;
        font-size: 1.5rem;
        background: linear-gradient(83deg, var(--color-text), var(--color-text-dark));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
      margin-top: 10px;
        
      p {
        text-align: center;
        font-size: 1.1rem;
      }
    }
`;

export const ContenedorContenido = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ContenedorBotones = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: auto; 
  
  button {
    font-size: 1.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
