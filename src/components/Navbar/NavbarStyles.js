import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

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

  @media (max-width: 400px) {
    padding: 0.5rem;
    max-width: 100vw;
  }
`;

export const MenuIconos = styled.div`
  display: flex; 
  justify-content: flex-end;
  gap: 10px;

   @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      align-items: center;
      transition: max-height 0.3s ease;
      overflow: hidden;

      &.hide {
        max-height: 0;
        opacity: 0;
      }

      &.show {
        max-height: 500px; 
        opacity: 1;
      }
  }

    @media (max-width: 400px) {
      max-width: 100vw;
      gap: 4px;
      padding: 0.5rem 0;
    }
`

export const LogoContainerStyled = styled.div`
   // display: flex;
   padding-top: 0.5rem;

    img {
      height: 85px;

      @media (max-width: 400px) {
        height: 60px;
      }
    
    }

    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }
`;

export const LinksContainerStyled = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 5px;
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

    a .link-text {
      display: none;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;

      a {
        width: 250px;
        justify-content: center;
      }

      a .link-text {
        display: inline
      }
    }
`;

// export const CartNavStyled = styled.div`
//   position: relative;
//   cursor: pointer;
//   color: var(--color-text-dark);
//   font-size: 1.5rem;
// `;

// export const UserImageStyled = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 100px;
//   cursor: pointer;
// `;

export const CartBadge = styled.span`
    background-color: var(--color-primary-light);
    color: var(--color-texto);
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 50%;
    border: 1px solid var( --color-text-white);
    padding: 0.3rem 0.5rem;
    min-width: 1.5rem;
    min-height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -10px;
`;

export const CarritoWrapper = styled(Link)`
  position: relative; 
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  background: var(--color-primary-light);
  color: white;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    opacity: 1;
    visibility: visible;
    transform: translateY(-5px);
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  top: 120%; 
  left: 5px;
  transform: translateX(-50%);
  background: var(--color-botones);
  color: white;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 100;

  @media (max-width: 768px) {
      display: none;
  }
`;

export const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--color-text-dark);

    @media (max-width: 768px) {
      display: block;
      position: absolute;
      right: 20px;
      top: 30px;
    }

    @media (max-width: 400px) {
      padding: 0.15rem;
    }
`;
