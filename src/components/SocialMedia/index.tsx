import { IconContainer } from "./styles";
import linkedinLogo from "../../assets/linkedin-icon.svg";
import instaLogo from "../../assets/insta-icon.svg";
import faceLogo from "../../assets/fb-icon.svg";

export const SocialMedia = () => {
  return (
      <IconContainer>
        <a href="https://linkedin.com" target="blank">
          <img src={linkedinLogo} alt="" />
        </a>
        <a href="https://instagram.com" target="blank">
          <img src={instaLogo} alt="" />
        </a>
        <a href="https://www.facebook.com/mecanicamundial87" target="blank">
          <img src={faceLogo} alt="" />
        </a>
      </IconContainer>
  );
};
