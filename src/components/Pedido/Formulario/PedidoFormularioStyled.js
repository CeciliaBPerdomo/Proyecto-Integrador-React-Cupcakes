import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';


export const FormularioContainerStyled = styled.div`
    width: 65%;
    padding: 2px 2px 2px 25px;
    color: var(--color-text);

    @media (max-width: 768px) {
        width: 80%; 
        margin-bottom: 1rem;

        h2 {
            text-align: center;
        }
    }
`;


export const Formik = styled(FormikContainer)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

