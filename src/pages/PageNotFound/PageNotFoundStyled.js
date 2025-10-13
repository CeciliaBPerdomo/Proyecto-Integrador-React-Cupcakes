import styled from 'styled-components'

export const ContenedorPrincipal = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; 
    padding: 120px 0 1rem 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 140px 1rem 1rem 1rem;
    }
`;

export const ContenedorInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
       color: var(--color-text);
    }

    h2 {
        color: var(--color-text-dark);
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ContenedorBoton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ContenedorImagen = styled.div`
    width: 50%;
    display: flex;
    justify-content: center; 

    img {
        width: 90%;
        border-radius: 25px;
    }

    @media (max-width: 768px) {
        width: 100%;
        
        img {
            width: 80%;
            margin-top: 1rem;
        }
        
    }
`;