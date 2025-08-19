import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
    width: 55%;
    padding: 0 0 1rem 0;
    color: var(--color-text);

    h2 {
        text-align: center;
        font-weight: 600;
    }
`;


export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  min-height: 410px;
  
  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 270px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const ContenedorPrecio = styled.div`
    width: 50%;  
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 0 2rem 0 2.5rem; 

    p {
        font-weight: bold;
        line-height: 0.25px;
    }

    span {
        font-weight: bold;
        color: var(--color-botones);
    }
`

export const PreciosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-top: 1rem;

    hr {
        border: none; 
        border-top: 2px solid var(--color-botones);
        width: 80%; 
        margin-bottom: 1rem;
    }
`