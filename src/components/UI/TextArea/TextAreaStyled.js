import styled from 'styled-components';

export const TextAreaStyled = styled.textarea`
    border: ${({ $isError }) => (
        $isError 
        ? '1px solid var(--color-botones)' 
        : '1px solid var(--color-text-white)'
    )};
    color: var(--color-text-black);
    background-color: var(--color-primary-background);
`;

export const ErrorMessageStyled = styled.p`
    margin: 0;
    margin-top: 5px;
    color: var(--color-text-dark);
    font-size: 14px;
`;
