import styled from 'styled-components';

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;
`;

export const ContenedorProductos = styled.div`
    width: 100%;
    background-color: var(--color-tertiary-background);
`;

// Card de productos
export const ProductosCard = styled.div`
    background: var(--color-secondary-background);
    width: 300px;
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
        height: 200px;
        margin: 0 auto 1rem auto;
    }

    h2 {
        color: var(--color-text-dark);
        font-weight: 600;
        margin: 0;
    }

    p {
        color: var(--color-text-black);
        font-size: 1.2rem;
    }
`;

export const ContainerPrecio = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const CardPrecio = styled.p`
    text-align: end;
    font-weight: 800;
    font-size: 1.75rem;
    background: linear-gradient(83deg, var(--color-text-dark), #ffa100);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ContainerBoton = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
