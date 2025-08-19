import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';


export const FormularioContainerStyled = styled.div`
    width: 65%;
    padding: 2px 2px 2px 25px;
    color: var(--color-text);
`;


export const Formik = styled(FormikContainer)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

