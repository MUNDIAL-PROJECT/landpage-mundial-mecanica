import {
  AlternativeTitle,
  Container,
  ContainerTitle,
  ServiceWrapper,
  Subtitle,
  TextContainer,
  WppWorkContainer,
} from "./styles";
import { PRODUCT_MOCK } from "../../mock/productCards";
import { ProductCard } from "../../components/ProductCard";
import { WppButton } from "../../components/WppButton/WppButton";

export const AutoPecas = () => {
  return (
    <Container>
      <ContainerTitle>
        Auto Peças - Um leque de infinitas possibilidades!
      </ContainerTitle>
      <TextContainer>
        <Subtitle>
          Nossa loja de Auto Peças está mais que disponível para você!
          <br />
          Nos chame no Whatsapp e faça sua cotação HOJE!
        </Subtitle>
      </TextContainer>
      <WppWorkContainer>
        <WppButton
          phoneNumber="+5535991054663"
          message="Olá! Tenho interesse em fazer cotações para peças automotivas."
          btnTitle="Whatsapp"
        />
      </WppWorkContainer>

      <AlternativeTitle>
        Veja alguns exemplos de nossos produtos:
      </AlternativeTitle>
      <ServiceWrapper>
        {PRODUCT_MOCK.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </ServiceWrapper>
    </Container>
  );
};
