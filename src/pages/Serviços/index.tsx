import { Container, ContainerTitle, ServiceWrapper } from "./styles"
import { DATA_MOCK } from "../../mock/serviceCardsInfo"
import { ServiceCard } from "../../components/ServiceCard"

export const Servicos = () => {
  return (
    <Container>
      <ContainerTitle>Conheça nosso serviços!</ContainerTitle>
      <ServiceWrapper>
      {
        DATA_MOCK.map((item) => {
          return <ServiceCard key={item.title} item={item}/>
        })
      }
      </ServiceWrapper>
    </Container>
  )
}