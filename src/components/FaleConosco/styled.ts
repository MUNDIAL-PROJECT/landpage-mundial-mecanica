import { styled } from "styled-components";

export const FaleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 1rem;
  background-color: ${({theme}) => theme["mundial-lightblack"]};
  color: #FFF;
  margin-top: 30px;

  
  @media(max-width: 800px){
    flex-direction: column;
  }
`;

export const FaleContentImg = styled.div`
  width: 100%;
  background-color: red;
  margin: 0 auto;
  @media(max-width: 800px){
    
  }
`;

export const FaleContentForm = styled.div`
  width: 100%;

  .faleForm{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    max-width: 600px;

    h3{
      hr{
        border: 2px solid ${(props) => props.theme["mundial-gold"]};
        width: 20%;
      }
    }

    input{
      padding: 10px 10px;
      border-radius: 10px;
      border: none;

    }
    textarea{
      padding: 10px 10px;
      border-radius: 10px;
      height: 8rem;
      border: none;
      resize: none;
    }
    button{
      background-color: ${(props) => props.theme["mundial-gold"]};
      padding: 15px;
      border-radius: 5px;
      border: none;
      color: #FFF;
      font-weight: 700;
      cursor: pointer;
      transition: .4s;
  
      &:hover{
        opacity: .6;
      }
    }
  }
`;