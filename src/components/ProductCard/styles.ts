import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 400px;

  background: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["white"]};

  border-radius: 10px;
  gap: 1rem;
  text-align: center;
  padding: 1rem 0;

  h1 {
    font-size: clamp(1.3rem, 1.5vw, 1.5rem);
    color: ${(props) => props.theme["mundial-gold"]};
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
    font-size: clamp(1rem, 1vw, 1.2rem);
  }

  &:hover{
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;
