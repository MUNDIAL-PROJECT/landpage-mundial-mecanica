import { styled } from "styled-components";

export const AboutContainer = styled.section`
  padding: 7rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 3rem;
  gap: 5rem;

  span {
    font-size: 2.25rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid ${(props) => props.theme["mundial-gold"]};

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
    line-height: 1.6;
    text-indent: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;

    p {
      font-size: 1.25rem;
    }
  }
`;

export const AboutHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    strong {
      font-size: 1.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      @media (max-width: 768px) {
        font-size: 1.25rem;
      }
    }
  }
`;

export const AboutTitle = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme["mundial-darkblue"]};
  text-align: center;
`;
