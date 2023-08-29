import { styled } from "styled-components";

export const Container = styled.section`
  padding: 7rem 5rem;
  text-align: center;
  background-color: ${props => props.theme['gray-100']};

  
  @media (max-width: 768px) {
    padding: 7rem 1rem;
  }
`;

export const ContainerTitle = styled.h1`
    font-size: clamp(1.75rem, 3vw, 3rem);
    padding-bottom: 2rem;
`

export const ProductWrapper = styled.div`
  display: grid;
  grid: auto auto / auto-flow 1fr;
  justify-content: center;
  margin: 0 auto;
  column-gap: 1rem;
  row-gap: 2rem;

  @media (min-width: 2100px) {
    grid: auto / auto auto auto auto auto;
    column-gap: 4rem;
  }

  @media (max-width: 768px) {
    grid: auto / auto;
  }
`;

export const TextContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${props => props.theme['mundial-lightblack']};
  border-radius: 15px;
`

export const Subtitle = styled.h2`
  color: ${props => props.theme['mundial-gold']};
  line-height: 1.6;
  font-size: 1.75rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0 10px;
  }
`

export const AlternativeTitle = styled.h3`
    font-size: 2rem;
    text-align: left;
    padding-top: 2rem;
    padding-bottom: 0.75rem;

    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding-bottom: 1.2rem;
      margin-left: auto;
    }
`

export const WppWorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding-top: 1rem;

  button {
    padding: 1rem 6rem;
    border-radius: 20px;
    background-color: green;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${props => props.theme['white']};
    gap: 0.5rem;
    font-weight: bold;

    &:hover {
    opacity: 0.65;
    transition: opacity 0.3s;
  }
  }

  @media (max-width: 560px) {
    font-size: 0.7rem;

    button {
      padding: 1rem 5rem;
    }
  }
`;