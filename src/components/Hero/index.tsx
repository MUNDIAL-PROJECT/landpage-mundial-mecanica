import {
  BackgroundImage,
  DarkOverlay,
  HeroContainer,
  HeroContent,
} from "./styles";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <p>
          Qualidade, agilidade e preço justo.
          <br />
          Cuidando do seu veículo nos mínimos detalhes!
        </p>
        <div className="hero-buttons">
          <Link className="about" to="/sobre-nos">Sobre nós</Link>
          <a  href="#faleconosco">Contato</a>
        </div>
      </HeroContent>
      <BackgroundImage />
      <DarkOverlay />
    </HeroContainer>
  );
};
