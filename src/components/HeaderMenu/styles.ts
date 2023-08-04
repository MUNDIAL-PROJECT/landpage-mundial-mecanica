import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  z-index: 999;
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  .hamburguer {
    color: ${(props) => props.theme["mundial-darkblue"]};
    font-size: 4rem;
    display: none;
  }

  ul {
    background: radial-gradient(
      circle,
      rgba(191, 159, 36, 1) 0%,
      rgba(130, 112, 59, 0.75) 50%,
      rgba(191, 159, 36, 1) 100%
    );

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-width: 15rem;

    gap: 3rem;
    padding: 0.75rem 2rem;
    max-width: 50vw;

    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  li {
    font-family: "Bai Jamjuree", sans-serif;
    color: ${(props) => props.theme["white"]};
    text-transform: uppercase;
    font-weight: bold;
    font-size: clamp(1rem, 0.9vw, 1.5rem);

    &:hover {
      transition: color 0.2s;
      color: ${(props) => props.theme["mundial-darkblue"]};
    }
  }

  @media (max-width: 768px) {
    .hamburguer {
      display: block;
      padding-bottom: 1rem;
    }

    ul {
      flex-direction: column;
      gap: 0;
      width: auto;
      background: radial-gradient(
        circle,
        rgba(191, 159, 36, 1) 0%,
        rgba(130, 112, 59, 1) 50%,
        rgba(191, 159, 36, 1) 100%
      );
    }

    li {
      display: none;
    }
  }
`;
