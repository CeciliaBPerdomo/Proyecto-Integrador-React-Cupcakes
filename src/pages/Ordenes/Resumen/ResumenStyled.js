import styled from 'styled-components';


export const ResumenStyled = styled.div`
  padding-top: 110px;
  text-align: center;

  h3 {
    color: var(--color-text);
  }
`

export const ResumenInfoStyled = styled.div`
  display: flex;
  width: 100%;
`

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
`

export const CupcakeCardContainer = styled.div`
    width: 80%;
    display: flex;   
    justify-content: center; 
    flex-direction: column; 
    flex-wrap: wrap; 
    gap: 20px;  
    align-items: center;
    margin: 0 auto; 
`