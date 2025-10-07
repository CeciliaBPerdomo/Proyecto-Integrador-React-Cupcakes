import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ContenedorPrincipal = styled.div`
    display: flex;
    padding: 110px 0 0 0; 
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
       padding: 150px 1rem 0 1rem;

        h1 {
            text-align: center;
            font-size: 1.5rem;
        }

        p {
            padding: 0.75rem;
            text-align: center;   
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
        padding: 0 1rem 0 1rem;
         label {
            font-size: 1rem;
         }
    }

`;