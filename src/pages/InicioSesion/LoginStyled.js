import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ContenedorPrincipal = styled.div`
    display: flex;
    padding-top: 110px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1, h3 {
        color: var(--color-text);
    }

    p {
        color: var(--color-text-dark);
    }

    @media (max-width: 768px) {
        padding-top: 150px;

        h1, p {
            text-align: center;
        }

        h1 {
            font-size: 1.5rem;
        }
    }
`;

export const FormFormik = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    gap: 20px;

    label {
        align-self: start;
        text-align: left; 
        color: var(--color-text-black);
        font-size: 1.5rem;
    }

    p {
        text-align: center;
        color: var(--color-text-dark);

        a {
            color: var(--color-text-dark);
            font-weight: 600; 
            transition: color 0.3s ease;
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;
        label {
            font-size: 1rem;
        }
    }
`;