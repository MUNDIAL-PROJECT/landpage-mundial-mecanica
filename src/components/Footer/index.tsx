import {
  AddressContainer,
  ContactContainer,
  ContactInfoWrapper,
  FooterContainer,
  IconContainer,
  LeftContainer,
  LogoContainer,
  PoweredByContainer,
  RightContainer,
  SectionTitle,
  SocialMediaContainer,
} from "./styles";
import mundialLogo from "../../assets/mundial-logo.png";
import linkedinLogo from "../../assets/linkedin-icon.svg";
import instaLogo from "../../assets/insta-icon.svg";
import faceLogo from "../../assets/fb-icon.svg";
import dncLogo from "../../assets/dnc-logo.svg";
import { Engine, EnvelopeSimple, Wrench } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <FooterContainer>
      <LeftContainer>
        <SocialMediaContainer>
          <SectionTitle>Redes Sociais</SectionTitle>
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
        </SocialMediaContainer>
        <AddressContainer>
          <SectionTitle>Venha nos conhecer!</SectionTitle>
          <section>
            <address>
              Rua Dr. Tuany Toledo Júnior, 20
              <br />
              Bairro Nova Pouso Alegre
              <br />
              Pouso Alegre, MG
              <br />
              CEP 37553-476
            </address>
          </section>
        </AddressContainer>
      </LeftContainer>

      <LogoContainer>
        <img src={mundialLogo} alt="" />
      </LogoContainer>

      <RightContainer>
        <ContactContainer>
          <SectionTitle>Entre em contato conosco!</SectionTitle>
          <ContactInfoWrapper>
            <li>
              <EnvelopeSimple size={26} color="#BF9F24" weight="fill"/>
              <h4>
                Email: {' '}
                <a href="mailto:mecmundial@bol.com.br">mecmundial@bol.com.br</a>
              </h4>
            </li>
            <li>
              <Wrench size={26} color="#BF9F24" weight="fill" />
              <h4>Mecânica:</h4>
              <p>(35) 3422-1540</p>
            </li>
            <li>
              <Engine size={26} color="#BF9F24" weight="fill"/>
              <h4>Auto Peças:</h4> 
              <p>(35) 3025-0291</p>
            </li>
          </ContactInfoWrapper>
        </ContactContainer>
        <PoweredByContainer>
          <SectionTitle>Powered By</SectionTitle>
          <a href="">
            <img src={dncLogo} alt="" />
          </a>
        </PoweredByContainer>
      </RightContainer>
    </FooterContainer>
  );
};
