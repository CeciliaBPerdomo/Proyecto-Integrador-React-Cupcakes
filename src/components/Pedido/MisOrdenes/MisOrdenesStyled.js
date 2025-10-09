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


// Resumen de ordenes
export const ResumenOrdenStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 100%;
    background: var(--color-secondary-background);
    border-radius: 15px;
    border: 1px solid var(--color-border);
    padding: 1rem;
`

export const CupcakeStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: left;
`;

export const ContenedorInfo = styled.div`
      width: 70%; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h3 {
        margin: 5px 0 0 0;
        font-size: 1.5rem;
        color: var(--color-text-dark);
      }

      p {
        font-size: 1.25rem;
        color: var(--color-text-black);
        margin: 2px 0;
        display: flex;
        align-items: center;

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
`;

export const ContenedorImagen = styled.div`
  width: 50%; 
  display: flex; 
  justify-content: center;

    img {
      width: 100%;
      height: 250px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
    }

`;

export const EstadoOrdenWrapper = styled.p`
    text-align: center;
    color: var(--color-text-black) !important;
`;