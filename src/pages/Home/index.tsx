import { HomeContainer } from "./styles"
import { Hero } from '../../components/Hero';
import { FaleConosco } from "../../components/FaleConosco";
import { ServiceSection } from "../../components/ServiceSection";

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <ServiceSection />
      <FaleConosco />
    </HomeContainer>
  )
}
