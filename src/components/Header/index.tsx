import { HeaderContainer } from "./styles";
import mundialLogo from "../../assets/mundial-logo.png";
import { SocialMedia } from "../SocialMedia";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={mundialLogo} alt="" />
      <h1>
        <strong>MUNDIAL</strong> CENTRO AUTOMOTIVO
      </h1>
      <div className="socialMenu">
        <SocialMedia />
      </div>
    </HeaderContainer>
  );
};
