import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.div`
  height: 100px;
  background-color: var(--color-secondary-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;

export const LinksContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 1rem 1.5rem;
    background-color: var(--color-primary-light); /* fondo más clarito */
    border-radius: 1rem;
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-text-dark);
    transition: all 0.25s ease-in-out;

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-text);
      transform: scale(1.03);
    }

    svg {
      font-size: 1.3rem;
    }
  }
`;




export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${props => (props.home ? '#ff9d01' : '#ff9300')};
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;
  color: var(--color-text-dark);
  font-size: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #ff5c8a;
    color: white;
    font-size: 0.75rem;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
  }
`;

export const UserNavStyled = styled.div`
 height: 100px;
  background-color: var(--color-secondary-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border-bottom: 2px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 9;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
 display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-dark);
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
    color: var(--color-accent);
  }
`;
