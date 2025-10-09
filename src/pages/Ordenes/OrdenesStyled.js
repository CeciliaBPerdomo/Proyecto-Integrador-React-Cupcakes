import styled from 'styled-components';

export const ContenedorPrincipal = styled.div`
    display: flex;
    padding-top: 110px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--color-text);
    }

    p {
        color: var(--color-text-dark);
    }

    @media (max-width: 768px) {
        padding-top: 160px;
    }
`;

export const ContenedorEncabezado = styled.div`
    width: 72%;
    display: flex;
    justify-content: space-between; 

    @media (max-width: 768px) {
         width: 95%;
    }
`;