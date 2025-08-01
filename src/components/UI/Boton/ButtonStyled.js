import styled from 'styled-components';

import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
    padding: 0.8rem 1.5rem;
    outline: none;
    border: 0.1rem solid white;
    border-radius: ${({ radius }) => `${radius}px`};
    background: var(--color-botones);
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        opacity: 45%;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`