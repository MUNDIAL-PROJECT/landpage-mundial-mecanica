import { HeaderContainer } from "./styles";
import mundialLogo from "../../assets/mundial-logo.png";
import { SocialMedia } from "../SocialMedia";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/"><img src={mundialLogo} alt="" /></Link>
      <h1>
        <strong>MUNDIAL</strong> CENTRO AUTOMOTIVO
      </h1>
      <div className="socialMenu">
        <SocialMedia />
      </div>
    </HeaderContainer>
  );
};
