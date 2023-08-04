import {
  AddressContainer,
  ContactContainer,
  ContactInfoWrapper,
  FooterContainer,
  LeftContainer,
  LogoContainer,
  RightContainer,
  SectionTitle,
} from "./styles";
import mundialLogo from "../../assets/mundial-logo.png";
import { Engine, EnvelopeSimple, Wrench } from "@phosphor-icons/react";
import { SocialMedia } from "../SocialMedia";

export const Footer = () => {
  return (
    <FooterContainer>
      <LeftContainer>
        <div>
          <SectionTitle>Redes Sociais</SectionTitle>
          <SocialMedia />
        </div>
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
              <EnvelopeSimple size={26} color="#BF9F24" weight="fill" />
              <h4>
                Email{"  "}
                <a href="mailto:mecmundial@bol.com.br">
                  mecmundial@bol.com.br
                </a>
              </h4>
            </li>
            <li>
              <Wrench size={26} color="#BF9F24" weight="fill" />
              <h4>Mecânica</h4>
              <p>(35) 3422-1540</p>
            </li>
            <li>
              <Engine size={26} color="#BF9F24" weight="fill" />
              <h4>Auto-Peças</h4>
              <p>(35) 3025-0291</p>
            </li>
          </ContactInfoWrapper>
        </ContactContainer>
      </RightContainer>
    </FooterContainer>
  );
};
