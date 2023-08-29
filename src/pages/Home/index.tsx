import { Hero } from '../../components/Hero';
import { FaleConosco } from "../../components/FaleConosco";
import { ServiceSection } from "../../components/ServiceSection";
import { AutoPecaSection } from "../../components/AutoPecaSection";

export const Home = () => {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <AutoPecaSection />
      <FaleConosco />
    </div>
  )
}
