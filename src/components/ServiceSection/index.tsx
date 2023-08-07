import {
  ArrowRight,
  Circuitry,
  Disc,
  GearSix,
  Wrench,
} from "@phosphor-icons/react";
import { CardContainer, CardWrapper, ServiceContainer } from "./styles";
import { Link } from "react-router-dom";

export const ServiceSection = () => {
  return (
    <ServiceContainer>
      <h2>Conheça nossos serviços</h2>
      <CardWrapper>
        <CardContainer>
          <GearSix
            className="cardIcon"
            size={60}
            color="#BF9F24"
            weight="duotone"
          />
          <div>
            <h3>Manutenção Preventiva</h3>
          </div>
          <div>
            <p>
              Serviços periódicos para garantir o bom funcionamento do veículo,
              como troca de óleo, filtros, velas, entre outros.
            </p>
          </div>
        </CardContainer>
        <CardContainer>
          <Wrench
            className="cardIcon"
            size={60}
            color="#BF9F24"
            weight="duotone"
          />
          <div>
            <h3>Reparos Mecânicos</h3>
          </div>
          <div>
            <p>
              Serviços de reparo em componentes mecânicos, como motor,
              transmissão, entre outros.
            </p>
          </div>
        </CardContainer>
        <CardContainer>
          <Circuitry
            className="cardIcon"
            size={60}
            color="#BF9F24"
            weight="duotone"
          />
          <div>
            <h3>Diagnóstico Eletrônico</h3>
          </div>
          <div>
            <p>
              Utilização de equipamentos e softwares de diagnóstico para
              identificar e solucionar problemas.
            </p>
          </div>
        </CardContainer>
        <CardContainer>
          <Disc
            className="cardIcon"
            size={60}
            color="#BF9F24"
            weight="duotone"
          />
          <div>
            <h3>Serviços de Freios</h3>
          </div>
          <div>
            <p>
              Substituição de partes do sistema de freios e verificação para
              garantir a segurança do veículo.
            </p>
          </div>
        </CardContainer>
      </CardWrapper>
      <Link to="/serviços">
        <button>
          Ver todos serviços <ArrowRight size={22} />
        </button>
      </Link>
    </ServiceContainer>
  );
};
