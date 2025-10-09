import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;
  margin: 1rem 0 1rem 0;
`;

export const PedidoContainerStyled = styled.div`
  background: var(--color-secondary-background);
  max-width: 380px;
  border-radius: 15px;
  border: 1px solid var(--color-border);
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-bottom: 0;
    color: var(--color-text-black);
    text-align: center;
  }
`;

export const HorarioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const PrecioWrapper = styled.p`
  text-align: end;
  font-size: 1.25rem;

  span {
      margin: 0;
      background: linear-gradient(83deg, var(--color-text), var(--color-text-dark));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 600;
  }
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
      margin: 5px 0 0 0;
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
`;

export const EstadoOrdenWrapper = styled.p`
    text-align: center;
    color: var(--color-text-black) !important;
`;