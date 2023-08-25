import { styled } from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  gap: 1rem;

  img:hover {
    transition: all 0.3s;
    transform: scale(1.1);
    background-color: ${props => props.theme['mundial-gold']};
    border-radius: 999px;
  }

  span {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme['mundial-gold']};
  }
`;