import {
  AlternativeTitle,
  Container,
  ContainerTitle,
  ProductWrapper,
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
          Conheça alguns de nossos produtos:
        </AlternativeTitle>
        <ProductWrapper>
          {PRODUCT_MOCK.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </ProductWrapper>
    </Container>
  );
};
