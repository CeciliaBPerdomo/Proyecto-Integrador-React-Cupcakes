import styled from 'styled-components';

export const BarraContenedor = styled.div`
    width: 100%; 
    display: inline; 
    
    h2 {
        padding-top: 1.5rem;
        text-align: center;
        color: var(--color-text)
    }
`;

export const BusquedaContenedor = styled.form`
    display: flex;
    justify-content: center;
    
    input {
        width: 275px; 
        height: 40px;
        border: 1px solid var(--color-botones); 
        border-radius: 25px; 
        padding: 10px;
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;

        &:focus {
            border-color: var(--color-text);
            box-shadow: 0 0 5px rgba(255, 108, 170, 0.3);
        }
    }

    button {
        width: 40px;
        height: 40px;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 !important;

        svg {
            margin: 0 !important; 
        }
    }
`;