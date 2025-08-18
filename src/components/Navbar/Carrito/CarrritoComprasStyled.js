import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const CarritoStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: calc(100vw - 350px);
    height: 100vh;

    ${({ oculto }) => !oculto && css`backdrop-filter: blur(4px);`}
`;

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    width: 350px;
    height: 1000px;

    padding: 2rem;
    background-color: var(--color-tertiary-background);
    border-radius: 1.5rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
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
    height: 100%;
`;

export const CupcakeStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    width: 100%;
    height: 400px;
    margin: 0 auto;
    padding: 1rem;

    padding-left: 0;

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

export const CupcakeContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 300px;

  background: var(--color-tertiary-background);
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid var(--color-botones);
`

export const CupcakeImagen = styled.img`
    width: 45%;
    height: 120px;
`

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 190px;

    h4, p {
        color: var(--color-text-black);
        margin: 0;  
    }

    span {
        margin: 0;
        background: linear-gradient(83deg, var(--color-text), var(--color-text-dark));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 600;
        text-align: end;
    }
`;

export const ContadorStyled = styled.div`
    display: flex;
    align-items: center;
`;


export const CantidadStyled = styled.span`
    width: 35px;
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    letter-spacing: 0.6px;
    padding-right:1rem;

`;
