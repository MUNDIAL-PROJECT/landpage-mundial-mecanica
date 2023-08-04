import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["mundial-darkblue"]};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-inline: 3.45rem;
  padding-block: 1rem;

  img {
    max-width: 7rem;
  }

  strong {
    color: ${(props) => props.theme["mundial-lightblue"]};
  }

  h1 {
    font-family: "Bai Jamjuree", sans-serif;
    font-size: clamp(1.75rem, 2.5vw, 3rem);
    color: ${(props) => props.theme["mundial-gold"]};
  }

  @media (max-width: 768px) {
    gap: 2rem;
    text-align: center;
    padding-block: 2rem;
  }
`;
