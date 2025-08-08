import styled from "styled-components";
import { motion } from 'framer-motion'

export const CocinerosWrapper = styled.section`
  padding: 2rem 1rem;
  background-color: var(--color-secondary-background);
  color: var(--color-text);
  text-align: center;

  h2 {
    margin-bottom: 2rem;
  }
`

export const CocinerosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

export const CocineroCardContainer = styled(motion.div)`
    background-color: var(--color-primary-background);
    border: 1px solid var(--color-border);
    border-radius: 15px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);

    h2 {
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        color: var(--color-text-dark);
    }

    p { 
        font-size: 1.2rem;
        margin: 0.5rem 0;
        color: var(--color-text-black)
    }
`

export const CocineroImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid var(--color-botones);
  object-fit: cover;
  margin-bottom: 1rem;
`

export const RedesSociales = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: var(--color-primary);
    font-size: 3rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-accent);
    }
  }
`
