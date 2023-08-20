import { GearFine } from "@phosphor-icons/react";
import {
  AboutBlock,
  AboutContainer,
  AboutHistory,
  AboutTitle,
  AboutWrapper,
} from "./styles";

export const Sobre = () => {
  return (
    <AboutContainer>
      <AboutTitle>Sobre Nós</AboutTitle>
      <AboutWrapper>
        <AboutHistory>
          <span>HISTÓRIA</span>
          <div>
            <p>
              Bem-vindo à nossa oficina com uma história de mais de 30 anos!
              Fundada em 1987 pelo Toninho, um apaixonado por automóveis que
              veio de São Paulo aos 14 anos e encontrou em Pouso Alegre sua vida
              profissional e seu lar.{" "}
            </p>
            <p>
              Desde então, estamos comprometidos em oferecer serviços de alta
              qualidade para nossos clientes. Nosso ambiente é familiar e
              acolhedor, transmitindo a dedicação e o carinho que permeiam nossa
              trajetória. Localizada nesta mesma região desde 1990, somos
              referência na cidade quando se trata de cuidar dos veículos dos
              nossos clientes.{" "}
            </p>
            <p>
              Administramos nossa oficina com muito orgulho e dedicação,
              contando com uma equipe de mecânicos capacitados e responsáveis,
              que se dedicam em fornecer um serviço excepcional. Valorizamos a
              confiança e a satisfação dos nossos clientes, buscando sempre
              superar suas expectativas.
            </p>
          </div>
        </AboutHistory>
        <AboutBlock>
          <span>MISSÃO</span>
          <p>
            Nossa missão é oferecer serviços personalizados aos nossos clientes
            com qualidade, agilidade e profissionais capacitados para cuidar dos
            mínimos detalhes do seu veículo. Nossa satisfação é garantir o
            melhor produto e serviço com o menor preço e as melhores condições
            do mercado.
          </p>
        </AboutBlock>

        <AboutBlock>
          <span>VISÃO</span>
          <p>
            Ser reconhecida no mercado como sinônimo de superação e inovação,
            acreditando sempre em novas tecnologias e no ser humano como
            principais forças de trabalho.
          </p>
        </AboutBlock>

        <AboutBlock>
          <span>VALORES</span>
          <ul>
            <li>
              <strong><GearFine size={32} color={'#BF9F24'} />Transparência</strong>
              <p>
                Ser claro e preciso na comunicação e em sua conduta
                organizacional{" "}
              </p>
            </li>
            <li>
              <strong><GearFine size={32} color={'#BF9F24'} />Respeito</strong>
              <p>
                Através das atitudes concretas, valorizando o ser humano de
                forma moral e ética{" "}
              </p>
            </li>
            <li>
              <strong><GearFine size={32} color={'#BF9F24'} />Comprometimento</strong>
              <p>
                Conscientização na atuação de cada um com o compromisso da
                qualidade superior.{" "}
              </p>
            </li>
            <li>
              <strong><GearFine size={32} color={'#BF9F24'} />Responsabilidade Ambiental</strong>
              <p>
                Através da reciclagem no descarte de materiais, dentre outras
                atitudes, contribuímos para a preservação do nosso planeta.{" "}
              </p>
            </li>
          </ul>
        </AboutBlock>
      </AboutWrapper>
    </AboutContainer>
  );
};
