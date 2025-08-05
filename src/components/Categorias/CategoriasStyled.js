import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
    width: 100%;
    background-color: var(--color-tertiary-background);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
    user-select: none;
`;

export const CardCategoria = styled(motion.div)`
    width: 110px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    background-color: ${({ selected }) =>
        selected ? 'var(--color-botones)' : 'var(--color-tertiary-background)'};
    border: 1px solid white;
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
`;