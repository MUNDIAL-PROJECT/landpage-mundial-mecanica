import { styled } from "styled-components";

export const FaleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme["mundial-lightblack"]};
  color: #fff;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FaleContentImg = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (max-width: 800px) {
  }
`;

export const FaleContentForm = styled.div`
  width: 100%;

  .faleForm {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin: 0 auto;
    max-width: 600px;

    h3 {
      text-transform: uppercase;
      font-size: 2rem;
      border-bottom: 3px solid ${(props) => props.theme["mundial-gold"]};
    }

    input {
      padding: 1rem;
      border-radius: 10px;
      border: none;
    }

    textarea {
      padding: 1rem;
      border-radius: 10px;
      height: 8rem;
      border: none;
      resize: none;
    }

    button {
      background-color: ${(props) => props.theme["mundial-gold"]};
      padding: 1rem;
      border-radius: 5px;
      border: none;
      color: #fff;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        transition: all 0.3s;
        opacity: 0.6;
        color: ${(props) => props.theme["mundial-black"]};
      }
    }

    @media (max-width: 768px) {
      h3 {
        font-size: 1.5rem;
      }
    }
  }
`;

export const FormTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["white"]};
  }

  @media (max-width: 768px) {
    p {
      text-align: center;
      font-size: 1rem;
    }
  }
`;
