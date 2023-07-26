import { HeaderContainer, NavContainer } from "./styles"
import mundialLogo from '../../assets/mundial-logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <ul>
          <li>Início</li>
          <li>Serviços</li>
          <li>Agendamentos</li>
        </ul>
      </NavContainer>
      <img src={mundialLogo} alt=""/>
      <NavContainer>
        <ul>
          <li>Sobre Nós</li>
          <li>Trabalhe Conosco</li>
          <li>Contato</li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  )
}
