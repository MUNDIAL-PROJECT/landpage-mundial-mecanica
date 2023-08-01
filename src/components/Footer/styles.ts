import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  background: ${(props) => props.theme["mundial-darkblue"]};
  padding-block: 1.875rem;
  padding-inline: 3.45rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme["white"]};
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10rem;
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

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  address {
    color: ${(props) => props.theme["white"]};
    line-height: 1.6;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    max-width: 7rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10rem;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  gap: rem;
  color: ${(props) => props.theme["white"]};

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
  }

  h4 {
    font-weight: bold;
    color: ${props => props.theme['mundial-gold']}
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme["white"]};
  }
`;

export const ContactInfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const PoweredByContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  color: ${(props) => props.theme["white"]};
`;
