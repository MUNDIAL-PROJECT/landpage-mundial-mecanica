import styled from "styled-components";

export const WorkContainer = styled.div`
  padding: 7rem 2rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const DescWorkContainer = styled.div`
  text-align: center;
  max-width: 1000px;

  h1 {
    font-size: clamp(2rem, 3vw, 3rem);
    padding-bottom: 3rem;
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
    line-height: 1.6;
    text-indent: 1.5rem;
  }

  span {
    font-weight: 700;
    color: ${props => props.theme['mundial-gold']};
    text-transform: uppercase;
    font-size: 2rem;
    text-align: justify;
    text-indent: 1.5rem;
    line-height: 1.6;
    display: inline-block;
    padding-top: 2rem;
    text-align: center;
  }

  @media (max-width: 560px) {
    p {
      font-size: 1.2rem;
      text-align: justify;
      text-indent: 0rem;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 490px) {
    p {
      font-size: 1.1rem;
    }
    span {
      font-size: 1.3rem;
    }
  }
`;

export const WppWorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  button {
    padding: 1rem 6rem;
    border-radius: 20px;
    background-color: green;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${props => props.theme['white']};
    gap: 0.5rem;
    font-weight: bold;
  }

  @media (max-width: 560px) {
    font-size: 0.7rem;

    button {
      padding: 1rem 5rem;
    }
  }
`;
