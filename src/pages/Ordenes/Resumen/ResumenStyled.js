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

    h1 {
      color: var(--color-text);
    }
`;

export const ResumenInfoStyled = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }
`;

export const OrdenStyled = styled.div`
    width: 50%;

    h2 {
      color: var(--color-text-dark);
      text-decoration: underline;
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      width: 90%;
    }
`;

export const OrdenStyledWrapper = styled.div`
    width: 50%;
    
    h2 {
      color: var(--color-text-dark);
      text-decoration: underline;
      font-size: 1.5rem;
    }
    
    p {
      text-align: center;
      color: var(--color-text-black);
      font-size: 1rem;
      padding: 5px;

      span {
          font-size: 1.5rem;
          margin: 0;
          background: linear-gradient(83deg, var(--color-text), var(--color-text-dark));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
          text-align: end;
      }
    }

    hr {
        border: none; 
        border-top: 2px solid var(--color-botones);
        width: 80%; 
        margin-bottom: 1rem;
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

    @media (max-width: 768px) {
      width: 100%;
      min-width: 350px;
    }
`;