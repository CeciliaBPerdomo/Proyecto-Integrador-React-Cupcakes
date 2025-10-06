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

    p {
        text-align: center;
        color: var(--color-text-dark);

        a {
            color: var(--color-text-dark);
            font-weight: 600; 
            transition: color 0.3s ease;
        }
    }
`;