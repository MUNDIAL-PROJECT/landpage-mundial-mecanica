import { IconContainer } from "./styles";
import faceLogo from "../../assets/fb-icon.svg";

export const SocialMedia = () => {
  return (
      <IconContainer>
        <a href="https://www.facebook.com/mecanicamundial87" target="blank">
          <img src={faceLogo} alt="" />
        </a>
        <span>Acesse nosso Facebook!</span>
      </IconContainer>
  );
};
