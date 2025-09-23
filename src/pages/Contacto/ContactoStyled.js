import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ContenedorContactos = styled.div`
    width: 100%; 
    background-color: var(--color-tertiary-background);
    padding: 1rem;
    margin: 0;
    color: var(--color-text-black);

    h2 {
        color: var(--color-text);
        font-size: 1.75rem;

        @media (max-width: 768px) {
            text-align: center;
        }        
    }
`

export const ContenedorPrincipal = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
`

export const ContenedorFormulario = styled(FormikForm)`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;

    label {
        margin-bottom: 10px;
        font-size: 24px;
    }

    input, textarea {
        width: 90%;
        padding: 0.5rem 0.75rem; 
        border-radius: 1rem;
        border: 1px solid var(--color-border);
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        resize: none;
        margin-bottom: 15px;
        font-size: 24px;
    }

    input {
        height: 50px;
        outline: none;
    }

    button {
        width: 80%;
    }

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

    input, textarea {
        width: 80%;
        padding: 0.5rem 0.75rem; 
        border-radius: 1rem;
        border: 1px solid var(--color-border);
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        resize: none;
    }

    input {
        height: 50px;
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
        @media (max-width: 768px) {
            width: 100%;
        }
    }

    &:has(button) {
        align-items: center; 

        button {
            width: auto;
            min-width: 350px;
            margin: 0 auto;
            display: block;
        }
    }

    @media (max-width: 768px) {
        margin-left: 0.5rem;
    }
` 