import { FooterContainer, IconContainer, LeftContainer, LogoContainer, OwnersContainer, PoweredByContainer, RightContainer } from "./styles"
import mundialLogo from '../../assets/mundial-logo.svg'
import linkedinLogo from '../../assets/linkedin-icon.svg'
import instaLogo from '../../assets/insta-icon.svg'
import faceLogo from '../../assets/fb-icon.svg'
import dncLogo from '../../assets/dnc-logo.svg'

export const Footer = () => {
  return (
    <FooterContainer>
      <LeftContainer>
          <p>Redes Sociais</p>
          <IconContainer>
            <a href="https://linkedin.com" target="blank">
              <img src={linkedinLogo} alt="" />
            </a>
            <a href="https://instagram.com" target="blank">
              <img src={instaLogo} alt="" />
            </a>
            <a href="https://facebook.com" target="blank">
              <img src={faceLogo} alt="" />
            </a>
          </IconContainer>
      </LeftContainer>
      <LogoContainer>
        <img src={mundialLogo} alt="" />
      </LogoContainer>
      <RightContainer>
        <OwnersContainer>
          <h3>Desenvolvimento</h3>
          <ul>
            <li>Douglas Dantas</li>
            <li>Eric Kunzel</li>
            <li>Guilherme Ferreira</li>
            <li>Pedro Magalhães</li>
            <li>Rafael Ribeiro</li>
          </ul>
        </OwnersContainer>

        <PoweredByContainer>
          <p>Powered By</p>
          <a href=""><img src={dncLogo} alt="" /></a>
        </PoweredByContainer>
      </RightContainer>

    </FooterContainer>
  )
}