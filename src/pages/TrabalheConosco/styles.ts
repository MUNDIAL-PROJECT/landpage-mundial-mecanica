import styled from 'styled-components';

export const WorkContianer = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px;
justify-content: center;
  @media(max-width: 770px){
    height: 100vh;
  }
  
  @media(max-width: 390px){
    height: 120vh;
    padding-top: 50px;
  }
`;

export const DescWorkContianer = styled.div`
text-align: center;
max-width: 1000px;
p, span {
  font-size: 1.5rem;
  text-align: justify;
  line-height: 1.6;
  text-indent: 1.5rem;
}
span{
  font-weight: 700;
}

  @media(max-width: 560px){
    p, span {
      font-size: 1.2rem;
      text-align: justify;
      text-indent: 0rem;
      margin-bottom: 30px;
    }
  }
  @media(max-width: 490px){
    p, span {
      font-size: .9rem;
    }
  }
`;

export const WppWorkContianer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  button{
    padding: 15px 130px;
    border-radius: 20px;
    background-color: green;
    border: none;
    cursor: pointer;
  }

  @media(max-width: 560px){
    font-size: .7rem;
    
    button{
      padding: 10px 100px;
    }
  }
`;

