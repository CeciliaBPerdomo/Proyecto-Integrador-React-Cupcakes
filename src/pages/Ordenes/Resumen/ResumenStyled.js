import styled from 'styled-components';

export const ResumenStyled = styled.div`
  padding-top: 110px;
  text-align: center;
  margin: 1rem 0 1.5rem 0;

  @media (max-width: 768px) {
    padding-top: 150px;
    margin-bottom: 1rem;
  }
`;

export const ContenedorEncabezado = styled.div`
  display: flex;
  justify-content: space-around; 

  h {
    color: var(--color-text);
  }
`;

export const ResumenInfoStyled = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const OrdenStyled = styled.div`
    width: 50%;

    h2 {
      color: var(--color-text-dark);
      text-decoration: underline;
    }

    span {
      display: flex; 
      justify-content: center;
      padding: 5px;
    }

    @media (max-width: 768px) {
      width: 90%;
    }
`;

export const CupcakeCardContainer = styled.div`
    width: 80%;
    display: flex;   
    justify-content: center; 
    flex-direction: column; 
    flex-wrap: wrap; 
    gap: 20px;  
    align-items: center;
    margin: 0 auto; 
`;