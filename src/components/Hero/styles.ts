import styled from "styled-components";
import Imgback from "../../assets/Automotivo-mundial.jpg";

export const HeroContainer = styled.div`
  position: relative;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

export const HeroContent = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;

  h1 {
    color: ${(props) => props.theme["white"]};
    font-size: clamp(2.5rem, 3vw, 4rem);

    strong {
      color: ${(props) => props.theme["mundial-lightblue"]};
    }
  }

  p {
    color: ${(props) => props.theme["mundial-gold"]};
    font-style: italic;
    font-weight: bold;
    font-size: clamp(1.25rem, 1.5vw, 2rem);
    padding-inline: 1rem;
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1.25rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Bai Jamjuree", sans-serif;
      border-radius: 50px;
      color: #fff;
      font-size: clamp(1.5rem, 1.5vw, 1.75rem);
      background-color: ${(props) => props.theme["mundial-gold"]};
      width: 12.5rem;
      height: 3.125rem;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;

      &:hover {
        transition: background-color 0.3s;
        background-color: ${(props) => props.theme["mundial-darkblue"]};
      }
    }

    .about {
      background-color: ${(props) => props.theme["mundial-lightgold"]};
      color: #000;
    }

    .about:hover {
      color: #fff;
    }
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
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5));
  z-index: 1;
`;
