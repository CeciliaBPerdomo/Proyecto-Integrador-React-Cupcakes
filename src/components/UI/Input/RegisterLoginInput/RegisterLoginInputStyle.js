import styled from 'styled-components';

export const InputContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const InputStyled = styled.input`
    width: 100%;
    min-width: 60rem;
    height: 3.5rem;
    font-size: 1.25rem;
    padding: 1rem 1rem;
    color: var(--color-text-black);
    background-color: var(--color-primary-background);
    border-radius: 15px;
    border: ${({ $isError }) => (
        $isError ?
            '1px solid var(--color-text-dark)' :
            '1px solid var(--color-botones)')};

    ::placeholder {
        opacity: 80%;
    }

    --webkit-text-fill-color: var(--color-text-black);

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px var(--color-text-black) inset;
    }

    @media (max-width: 768px) {
        width: 95%;   
        min-width: 35rem;       
        padding: 0.8rem;
        font-size: 0.9rem;
    }

    @media (max-width: 576px) {
        width: 90%;
        min-width: 25rem;
        padding: 0.7rem 0.7rem;
        font-size: 0.85rem;
    }
`;

export const ErrorMessageStyled = styled.p`
    margin: 0;
    margin-top: 1px;
    color: var(--color-text-dark);
    font-size: 14px;
    margin-bottom: 3px;
`;