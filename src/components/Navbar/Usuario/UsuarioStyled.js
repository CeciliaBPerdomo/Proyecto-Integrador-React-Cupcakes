import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ContainerStyled = styled(motion.div)`
    position: absolute;
    background-color: var(--color-tertiary-background);
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    width: 350px;
    top: 110px;
    right: 0;
    z-index: 9;
    border-radius: 1rem;
    border: 1px solid var(--color-botones);
    padding: 1.5rem;
    margin-right: 10px;

    h2 {
        text-align: center;
        color: var(--color-text-black);
    }

    p {
        text-align: center;
        color: var(--color-text-dark);
        font-size: 18px;
    } 

    hr {
        border: none;
        height: 0.1rem;
        background-color: var(--color-botones);
        margin-bottom: 15px;
    }

    span {
        display: flex;
        font-size: 18px;
        justify-content: center;
        color: var(--color-text-black);

        margin-top: 10px;
        margin-bottom: 12px;
        cursor: pointer;

        &:hover {
            opacity: 90%;
        }
    }
`;

export const LinkStyled = styled(Link)`
    color: var(--color-text-black);
    font-size: 18px;
    cursor: pointer;

    &:hover {
        opacity: 90%;
    }
`;