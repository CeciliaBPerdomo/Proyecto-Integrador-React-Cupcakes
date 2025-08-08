import styled from 'styled-components';

export const ContenedorContactos = styled.div`
    width: 100%; 
    background-color: var(--color-tertiary-background);
    padding: 1rem;
    margin: 0;
    color: var(--color-text-black);

    h2 {
        color: var(--color-text);
        font-size: 1.5rem;

    }
`

export const ContenedorPrincipal = styled.div`
    width: 100%;
    display: flex;
`

export const ContenedorFormulario = styled.div`
    width: 50%;
    display: flex;
`

export const ContenedorImagen = styled.div`
    width: 50%;
    display: flex;

    img {
        width: 40%;
        border-radius: 15px; 
    }
`