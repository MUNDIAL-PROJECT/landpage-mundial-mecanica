import { HomeContainer } from "./styles"
import { Hero } from '../../components/Hero';
import { FaleConosco } from "../../components/FaleConosco";

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <FaleConosco />
    </HomeContainer>
  )
}
