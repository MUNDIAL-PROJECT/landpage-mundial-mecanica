import { styled } from "styled-components";


export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  background: ${props => props.theme['mundial-darkblue']};
  padding-block: 1.875rem;
  padding-inline: 3.45rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transform: translateY(-25%);

    p {
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      color: ${props => props.theme['white']};
    }
`;

export const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

    a:hover {
      transition: all 0.3s;
      transform: scale(1.1);
    }
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 5rem;
`;

export const LogoContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

      img {
        width: 80%;
      }
`;

export const OwnersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    text-align: center;
    color: ${props => props.theme['white']};

      ul {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      h3 {
        font-size: 1.2rem;
        text-transform: uppercase;
      }
`;

export const PoweredByContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    color: ${props => props.theme['white']};

      p {
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
      }
`;