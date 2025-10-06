import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AumentoStyled = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: ${({ bgColor }) => bgColor || 'var(--color-accent-light)'};
    border-radius: 15px;
    border: 1px solid var(--color-text-white);
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--color-text-black);
    cursor: pointer;
    margin: 0 5px;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
