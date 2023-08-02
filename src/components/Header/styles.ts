import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["mundial-darkblue"]};
  display: flex;
  align-items: center;
  justify-content: space-around;
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
    font-size: 3.5rem;
    color: ${(props) => props.theme["mundial-gold"]};
  }

  @media (max-width: 768px) {
    justify-content: center;

    h1 {
      display: none;
    }
  }
`;