import styled from 'styled-components';

export const BarraContenedor = styled.div`
    width: 100%; 
    display: inline; 
    
    h2 {
        padding-top: 1.5rem;
        text-align: center;
        color: var(--color-text)
    }
`

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
    }
`