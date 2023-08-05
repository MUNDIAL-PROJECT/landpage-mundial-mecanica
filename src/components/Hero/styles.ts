import styled from "styled-components";
import Imgback from "../../assets/Automotivo-mundial.jpg";

export const HeroContainer = styled.div`
  position: relative;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  h1 {
    color: ${(props) => props.theme["white"]};
    font-size: clamp(2.5rem, 3vw, 4rem);
  }

  p {
    color: ${(props) => props.theme["mundial-gold"]};
    font-style: italic;
    text-align: center;
    font-size: clamp(1.25em, 1.5vw, 2.25rem);
  }

  .hero-buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 20px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      color: #fff;
      font-size: clamp(1.25rem, 1.5vw, 1.5rem);
      background-color: ${(props) => props.theme["mundial-gold"]};
      width: 200px;
      height: 50px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      transition: 0.4s;

      &:hover {
        background-color: ${(props) => props.theme["mundial-darkblue"]};
      }
    }
  }

  @media (max-width: 768px) {
    gap: 4rem;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${Imgback});
  background-size: cover;
  background-position: center bottom;
  background-attachment: fixed;
  position: absolute;
  inset: 0;
`;

//Darkoverlay na imagem para que o conteudo fique mais nitido
export const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
  z-index: 1;
`;
