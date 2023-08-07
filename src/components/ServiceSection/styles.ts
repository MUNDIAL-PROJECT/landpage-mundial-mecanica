import { styled } from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding-top: 2rem;

  h2 {
    font-family: "Bai Jamjuree", sans-serif;
    font-size: clamp(2rem, 3vw, 2.5rem);
    color: ${(props) => props.theme["mundial-darkblue"]};
    text-align: center;
  }

  button {
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    max-width: 25rem;
    margin: 0 auto;
    align-items: center;
    cursor: pointer;
    border: 0;

    font-family: "Bai Jamjuree", sans-serif;
    font-size: clamp(1.25rem, 1.5vw, 1.75rem);
    background-color: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["white"]};

    padding: 1rem 2rem;
    border-radius: 50px;
  }

  button:hover {
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme["mundial-darkblue"]};
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  padding-inline: 1rem;
  align-items: center;
  font-family: "Bai Jamjuree", sans-serif;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  flex-direction: column;

  max-width: 21rem;
  min-height: 18.75rem;

  text-align: center;
  padding: 1rem;
  border-radius: 8px;

  background: ${(props) => props.theme["gray-100"]};

  p {
    font-size: clamp(1rem, 1.25rem, 1.5rem);
    color: ${(props) => props.theme["mundial-darkblue"]};
  }

  h3 {
    font-size: clamp(1.5rem, 1.75vw, 1.5rem);
  }

  .cardIcon {
    align-self: center;
  }

  @media (min-width: 2000px) {
    gap: 2rem;
    width: auto;
    height: auto;

    .cardIcon {
      width: 4rem;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    width: auto;
    height: auto;
  }
`;
