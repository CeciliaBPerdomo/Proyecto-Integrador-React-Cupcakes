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
`;

export const ContenedorPrincipal = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
`;

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
        min-width: 50rem;
        height: 50px;
        outline: none;
    }

    @media (max-width: 768px) {
        width: 100%;

        input {
            min-width: 35rem;
        }
    }

    @media (max-width: 660px) {
        input {
            min-width: 25rem;
        }
    }

`;

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
`;

export const ContenedorBoton = styled.div`
    display: flex; 
    justify-content: center;
    width: 90%;

    button {
        width: 50%;
    }
`;