import styled from 'styled-components';
// import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.div`
  position: fixed;  
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  z-index: 9;
  height: 100px;
  background-color: var(--color-secondary-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  box-sizing: border-box;
  border-bottom: 1px solid var(--color-tertiary-background);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 2rem;
    height: auto;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const LogoContainerStyled = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }
`;

export const LinksContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    max-width: 100%;
    box-sizing: border-box;

    a {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 1rem 1.5rem;
      background-color: var(--color-primary-light);
      border-radius: 1rem; 
      font-size: 1rem;
      color: var(--color-text-dark);
      transition: all 0.25s ease-in-out;
      white-space: nowrap;
      border: 1px solid white;

      &:hover {
        background-color: var(--color-primary);
        color: var(--color-text);
        transform: scale(1.03);
      }

      svg {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      a {
        width: 100%;
        justify-content: center;
      }
    }
`;


export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${props => (props.home ? '#c9184a' : '#ff66c4')};
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;
  color: var(--color-text-dark);
  font-size: 1.5rem;
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;