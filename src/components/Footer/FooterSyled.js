import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    background-color: var(--color-secondary-background);
    padding: 2rem 1rem 0 1rem;
    border-top: 1px solid var(--color-border);
`


export const FooterContenido = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 90%;
  margin: auto;
`

export const FooterColumna = styled.div`
    flex: 1;
    min-width: 300px;
    color: var(--color-text-black);
  
    h2 {
        color: var(--color-text-dark);
    }

    p {
        span {
            color: var(--color-text-dark); 
        }

        a {
          text-decoration: none;
          color: var(--color-text-dark); 
        }
    }
`;

export const FooterMapa = styled.iframe`
  width: 100%;
  height: 200px;
  border: 0;
  border-radius: 10px;
`;

export const FooterLink = styled.a`
  display: block;
  margin-bottom: 1.25rem;
  color: var(--color-text-black);
  text-decoration: none;
  padding-left: 1.5rem;

  &:hover {
    color: var(--color-text-dark);
  }
`;

export const FooterCreditos = styled.p`
  text-align: right;
  font-size: 0.9rem;
  color: var(--color-text-dark);
  width: 100%;

  a {
      color: var(--color-text-dark);
    text-decoration: none;

    &:hover {
     color: var(--color-text-black);
    }
  }
`;

export const ModoAzulButton = styled.button`
    background: ${({ $isBlueMode }) => ($isBlueMode ? "pink" : "blue")};
    color: var(--color-text-white);
    border: none;
    border-radius: 20px;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
    transition: all 0.3s ease;
    display: inline-block;

    &:hover {
      background: ${({ $isBlueMode }) => ($isBlueMode ? "pink" : "blue")};
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.98);
    }
`;