import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;
`;

export const PedidoContainerStyled = styled.div`
  background: var(--color-secondary-background);
  width: 380px;
  border-radius: 15px;
  border: 1px solid var(--color-border);
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;

  h3 {
    color: var(--color-text-black);
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResumenOrdenStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 100%;
    background: var(--color-secondary-background);
    border-radius: 15px;
    border: 1px solid var(--color-border);
    padding: 1.5rem 1rem;
    margin: 0 auto 10px auto;
`

export const CupcakeStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    text-align: center;

    img {
      width: 120px;
      height: 120px;
      object-fit: contain;
    }

    h3 {
      margin: 5px 0;
      font-size: 1.2rem;
      color: var(--color-text-dark);
    }

    p {
      font-size: 0.95rem;
      color: var(--color-text);
      margin: 2px 0;
    }

    hr {
      border: none; 
    }
`