import { styled } from "styled-components";

export const Container = styled.section`
  padding: 7rem 2rem;
  text-align: center;

  
  @media (max-width: 768px) {
    padding: 7rem 1rem;
  }
`;

export const ContainerTitle = styled.h1`
    font-size: clamp(1.75rem, 3vw, 3rem);
    padding-bottom: 2rem;
`

export const ServiceWrapper = styled.div`
  display: grid;
  grid: auto auto / auto-flow 1fr;
  justify-content: center;
  column-gap: 1rem;
  row-gap: 2rem;

  @media (min-width: 2100px) {
    grid: auto / auto auto auto;
    column-gap: 4rem;
  }

  @media (max-width: 768px) {
    grid: auto / auto;
  }
`;