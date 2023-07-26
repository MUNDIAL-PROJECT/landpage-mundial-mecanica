import { styled } from "styled-components";


export const HeaderContainer = styled.header`
  background: ${props => props.theme['mundial-darkblue']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 3.45rem;
  padding-block: 1rem;

  img {
    max-width: 7rem;
  }
`;

export const NavContainer = styled.nav`

  ul {
    display: flex;
    gap: 4.5rem;
  }

  li {
    color: ${props => props.theme['white']};
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.4rem 0.7rem;

    &:hover {
      color: ${props => props.theme['mundial-lightblack']};
      border: 0;
      border-radius: 8px;
      background: ${props => props.theme['mundial-gold']};
      transition: all 0.2s;
    }
  }
`;