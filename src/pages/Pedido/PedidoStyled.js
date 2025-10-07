import styled from 'styled-components';

export const PedidoContainerStyled = styled.div`
    background-color: var(--color-tertiary-background);
    min-height: 85dvh;
    padding-top: 120px;
    
    h1 {
        padding-left: 15px;
        margin: 0 auto; 
        color: var( --color-text-dark);
    }

    @media (max-width: 768px) { 
        padding-top: 160px; 
        min-height: auto; 
        
        h1 {
            text-align: center;
        }
    }
`;

export const PedidoStyled = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;