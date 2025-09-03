import styled from 'styled-components';

export const InputContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputStyled = styled.input`
    width: 35rem;
    height: 1.5rem;
    padding: 1rem 1rem;
    color: var(--color-text-black);
    background-color: var(--color-primary-background);
    border-radius: 15px;
    border: ${({ isError }) => (
            isError ?
                '1px solid #fb103d ' :
                '1px solid var(--color-botones)')};

    ::placeholder {
        opacity: 80%;
    }
    -webkit-text-fill-color: var(--color-text-black);

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px var(--color-text-black) inset;
    }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;