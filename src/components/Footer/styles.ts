import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  background: ${(props) => props.theme["mundial-darkblue"]};
  padding-block: 1.875rem;
  padding-inline: 3.45rem;

  @media (max-width: 768px) {
    padding: 2rem;
    justify-content: center;
    gap: 2rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Bai Jamjuree", sans-serif;
  text-transform: uppercase;
  color: ${(props) => props.theme["mundial-gold"]};
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2.25rem;
  }
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

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    transform: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2.25rem;
  }
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
    font-size: clamp(1rem, 1vw, 1.5rem);
  }

  h4 {
    font-weight: bold;
    font-family: "Bai Jamjuree", sans-serif;
    color: ${(props) => props.theme["mundial-gold"]};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
    cursor: pointer;
  }
`;

export const ContactInfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;