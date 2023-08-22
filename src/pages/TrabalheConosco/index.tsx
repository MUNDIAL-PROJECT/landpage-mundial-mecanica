import { DescWorkContainer, WorkContainer, WppWorkContainer } from "./styles";
import { WppButton } from "../../components/WppButton/WppButton";

export const TrabalheConosco = () => {
  return (
    <WorkContainer>
      <DescWorkContainer>
        <h1>Trabalhe Conosco</h1>
        <p>
          Estamos sempre em busca de talentos apaixonados por automóveis e
          comprometidos em oferecer serviços de qualidade. Se você é um
          profissional dedicado, que valoriza o trabalho em equipe, o
          aprendizado contínuo e a excelência no atendimento ao cliente, você
          está no lugar certo.
        </p>
        <p>
          Aqui, oferecemos um ambiente acolhedor, oportunidades de crescimento e
          desenvolvimento profissional. Junte-se a nós e faça parte de uma
          equipe que ama o que faz e se esforça para superar expectativas.
        </p>
        <span>
          Envie seu currículo e vamos juntos construir um futuro automotivo de
          sucesso!
        </span>
      </DescWorkContainer>
      <WppWorkContainer>
        <h1>Envie seu CV via (Whatsapp):</h1>
        <WppButton
          phoneNumber="+5535991054663"
          message="Olá, como vai? Tenho desejo de trabalhar com vocês!"
          btnTitle="Whatsapp"
        />
      </WppWorkContainer>
    </WorkContainer>
  );
};
