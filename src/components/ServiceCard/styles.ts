import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 400px;

  background: ${props => props.theme["gray-100"]};
  color: ${props => props.theme["mundial-darkblue"]};

  border-radius: 8px;
  gap: 1rem;
  text-align: center;
  padding: 1rem 0;

  h1 {
    font-size: clamp(1.3rem, 1.5vw, 1.5rem);
    text-decoration: underline;
    color: ${props => props.theme["mundial-gold"]};
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 220px;
    object-fit: cover;
  }

  p {
    padding: 0 1rem;
    line-height: 1.4;
    font-size: clamp(1rem, 0.875vw, 1.1rem);
  }
`;
