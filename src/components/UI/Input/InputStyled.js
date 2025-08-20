import styled from 'styled-components';

export const InputBoxStyled = styled.div`
    display: flex;
    margin: 0.5rem 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`;

export const InputLabelStyled = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    color: var(--color-text-black);
`;

export const InputStyled = styled.input`
  background-color: var(--color-secondary-dark);
  border: ${({ isError }) => (
    isError 
    ? '1px solid var(--color-botones)' 
    : '1px solid var(--color-text-white)'
    )};
  border-radius: 8px;
  height: 30px;
  padding: 0.5rem 1rem;
  color: var(--color-text-black);
  width: 70%;
  margin-top: 1rem;

  ::placeholder {
    opacity: 60%;
  }
  -webkit-text-fill-color: white;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--color-accent) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
    margin: 0;
    margin-top: 5px;
    color: var(--color-text-dark);
    font-size: 14px;
`;
