import { BackgroundImage, DarkOverlay, HeroContainer, HeroContent } from './styles';
import { Link } from 'react-router-dom';
export const Hero = () => {
  
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Mecânica Mundial</h1>
        <p>“Confiabilidade e Performance em Cada Rotação, <br /> somos a Mecânica de Confiança!”</p>
        <div className="hero-buttons">
          <Link to="/sobre">Sobre nós</Link>
          <a href="#faleconosco">Contato</a>
        </div>
      </HeroContent>
      <BackgroundImage />
      <DarkOverlay />
    </HeroContainer>
  )
}
