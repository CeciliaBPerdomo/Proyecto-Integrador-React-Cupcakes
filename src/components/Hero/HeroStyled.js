import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainerStyled = styled.div`
    background-color: var(--color-tertiary-background);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 90vh;   
    margin: 0 auto;

    @media (max-width: 768px) { 
        height: auto;
    }
`;

export const TituloContainerStyled = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;

    h1 {
        font-size: 2.5rem;
        color: #FF66C4;
        margin-bottom: 0.25rem;
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            margin: 0;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 1rem;
        text-align: center;

        h1 { 
           font-size: 1.75rem; 
        }
    }
`;

export const HeroParagraphStyled = styled(motion.p)`
    color: var(--color-text-black);
    font-size: 1.5rem;
    line-height: 1.5;
    margin: 0;
    max-width: 600px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const ImagenContainerStyled = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 100%;

        @media (max-width: 768px) {
            display: none;
        }
    }
`;


export const HeroButtonContainerStyled = styled(motion.div)`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
