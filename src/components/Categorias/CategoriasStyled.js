import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.5rem; 
    /* arriba derecha abajo izq */
    padding: 0 1rem 1rem 1rem;
    user-select: none;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const CardCategoria = styled(motion.div)`
    width: 120px;
    height: auto;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    background-color: ${({ selected }) => selected ? 'var(--color-botones)' : 'var(--color-tertiary-background)'};
    border: 1px solid var(--color-text-white);
    border-radius: 15px;
    cursor: pointer;

    h2 {
        text-align: center;
        font-size: 1rem;
        color: var(--color-text-white);
        text-transform: capitalize;
    }

    img {
        height: 80px;
    }

    @media (max-width: 768px) {
        flex-direction: row; 
        justify-content: flex-start;
        align-items: center;
        width: 100%; 

        min-height: 100px;
    
        img {
            margin-right: 0.5rem;
        }

        h2 {
            text-align: left;
        }
  }
`;

export const ContenedorPrincipal =  styled.div`
    width: 100%;
    margin: 0 auto;


    h1 {
        padding: 1rem 0 0 1rem;
        color: var(--color-text)
    }
`