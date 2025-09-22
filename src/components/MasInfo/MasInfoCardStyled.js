import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardContainer = styled(motion.div)`
    position: relative;
    display: flex;
    gap: 0.25rem;
    background-color: var(--color-secondary-background);
    border: 1px solid var(--color-border);
    border-radius: 15px;
    padding: 1.5rem;
    max-width: 900px;
    margin: 3rem auto;
    align-items: flex-start;
    cursor: pointer;
    flex-wrap: wrap;

    &:hover {
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
`

export const CardTitle = styled.h1`
    width: 100%;
    margin-bottom: 1rem;
    color: var(--color-text-dark);
    text-align: center;

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const ImagenWrapper = styled.div`
    flex: 1;
    max-width: 300px;

    @media (max-width: 768px) {
        max-width: 60%;
    }
`

export const CardImagen = styled.img`
  width: 100%;
  object-fit: cover;
`

export const InfoWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h2 {
    margin: 0;
    font-weight: 500;
    color: var(--color-text);

    @media (max-width: 768px) {
        text-align: center;
    }
  }

  p {
    margin: 0;
    color: var(--color-text-black);
    font-size: 1.5rem;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
  }
`

export const Precio = styled.p`
    text-align: right;
    font-weight: 800;
    font-size: 1.75rem;
    background: linear-gradient(83deg, var(--color-text), var(--color-text-dark));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const BotonesWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: auto; 
  
  button {
    font-size: 1.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.4s ease;
    border-radius: 50%;
    background: var(--color-botones);
    color: var(--color-text-white);

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
  }
`
