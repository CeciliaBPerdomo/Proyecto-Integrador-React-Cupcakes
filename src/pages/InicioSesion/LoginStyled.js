import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const ContenedorPrincipal = styled.div`
    display: flex;
    padding-top: 110px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--color-text);
    }

    p {
        color: var(--color-text-dark);
    }
`

export const FormFormik = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    gap: 20px;
`;