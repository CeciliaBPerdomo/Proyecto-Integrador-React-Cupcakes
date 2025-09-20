import styled from 'styled-components';

export const ContenedorContactos = styled.div`
    width: 100%; 
    background-color: var(--color-tertiary-background);
    padding: 1rem;
    margin: 0;
    color: var(--color-text-black);

    h2 {
        color: var(--color-text);
        font-size: 1.75rem;
    }
`

export const ContenedorPrincipal = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
`

export const ContenedorFormulario = styled.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const ContenedorImagen = styled.div`
    width: 50%;
    display: flex;

    img {
        width: 90%;
        border-radius: 2rem; 
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const FormularioBloque = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
    gap: 0.5rem; 
    padding: 1rem;

    label {
        font-weight: 500;
        font-size: 1.25rem;
    }

    input {
        width: 80%;
        height: 50px;
        padding: 0.5rem 0.75rem; 
        border-radius: 1rem;
        border: 1px solid var(--color-border);
        font-size: 1rem;
        outline: none;

        @media (max-width: 768px) {
            width: 100%;
            height: 45px;
        } 
    }

    input:focus {
        border-color: var(--color-primary);
        box-shadow: 0 0 4px var(--color-primary);
    }

    textarea {
        width: 82%;
        padding: 0.5rem 0.75rem; 
        border-radius: 1rem;
        border: 1px solid var(--color-border);
        font-size: 1rem;
        resize: none;
        font-family: 'Montserrat', sans-serif;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    &:has(button) {
        align-items: center;
    } 

    button {
        width: 50%;

        @media (max-width: 768px) {
            width: 70%;
        }
    }

    @media (max-width: 768px) {
        margin-left: 0.5rem;
    }
` 