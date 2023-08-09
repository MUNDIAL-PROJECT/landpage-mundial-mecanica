import { HomeContainer } from "./styles"
import { Hero } from '../../components/Hero';
import { FaleConosco } from "../../components/FaleConosco";
import { ServiceSection } from "../../components/ServiceSection";
import { TrabalheConosco } from "../TrabalheConosco";

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <ServiceSection />
      <FaleConosco />
      <TrabalheConosco/>
    </HomeContainer>
  )
}
