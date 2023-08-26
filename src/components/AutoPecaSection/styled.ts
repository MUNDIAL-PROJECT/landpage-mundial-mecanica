import styled from 'styled-components';

export const AutoContianer = styled.section`
  padding: 1.5rem;
  margin-top: 2rem;
  background-color: ${({theme}) => theme['gray-100']};
  display: flex;
  flex-direction: column;


  h2{
    text-align: center;
    font-size: clamp(2rem, 3vw, 2.5rem);
  }

  button {
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    max-width: 25rem;
    margin: 0 auto;
    align-items: center;
    cursor: pointer;
    border: 0;

    font-family: "Bai Jamjuree", sans-serif;
    font-size: clamp(1.25rem, 1.5vw, 1.75rem);
    background-color: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["white"]};

    padding: 1rem 2rem;
    border-radius: 50px;
  }

  button:hover {
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme["mundial-darkblue"]};
  }
`;


export const AutoCardContainer = styled.div`
  width: 100%;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
`;