import styled from 'styled-components';

export const ContenedorProductos = styled.div`
    width: 100%;
    background-color: var(--color-tertiary-background);
`;

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 2rem 0 2rem 0;
`;

// Card de productos
export const ProductosCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 380px;
    height: auto;
    min-height: 460px;

    border-radius: 15px;
    padding: 1.5rem;
    background: var(--color-secondary-background);
    border: 1px solid var(--color-border);
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 10px 25px rgba(0,0,0,0.12);
    }

    img {
        height: 200px;
        padding-top: 5px;
        margin: 0 auto 1rem auto;
    }

    p {
        color: var(--color-text-black);
        font-size: 1.2rem;
        text-align: center;
    }
`;


export const ContenedorEncabezado = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5;

    h2 {
        flex: 1;
        color: var(--color-text-dark);
        margin: 0;
        text-align: left;
    }
`;

export const ContenedorBotones = styled.div`
    display: flex;
    gap: 0.5rem;

    button {
        font-size: 1.5rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ContainerPrecio = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const CardPrecio = styled.p`
    text-align: right;
    font-weight: 800;
    font-size: 1.75rem;
    background: linear-gradient(83deg, var(--color-text), var(--color-text-dark));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ContainerBoton = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 10px;
    padding-bottom: 1rem;
`;
