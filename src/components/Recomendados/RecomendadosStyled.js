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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
    gap: 10px;
    padding: 0.75rem;
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

    @media (max-width: 768px) {
      width: 100%;
    }
`;

export const ContenedorImagen = styled.div`
    width: 20%;
    min-width: 150px;
    display: flex;
    justify-content: flex-start;
    margin-right: 1rem;

    @media (max-width: 768px) {
        width: 5%;
        min-width: 80px;
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

  @media (max-width: 768px) {
    width: 100%;
  }
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

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
        
      p {
        text-align: center;
        font-size: 1.1rem;
      }
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
      top: 5px;
      right: 5px;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 1.25rem;
        margin: 0px;
        text-align: center;
        width: 70%;
      }
      button {
        font-size: 16px;
      }
    }
`;