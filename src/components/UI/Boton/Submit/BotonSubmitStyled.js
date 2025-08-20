import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
    margin-top: 15px;
    padding: 0.8rem 1.5rem;
    border: 0.1rem solid var(--color-text-white);
    border-radius: ${({ radius }) => `${radius}px`};
    background: var(--color-botones);
    color: var(--color-text-white);
    font-weight: 400;
    font-size: 1.2rem;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
