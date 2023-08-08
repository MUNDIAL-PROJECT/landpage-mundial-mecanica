import { DataType } from "../../mock/serviceCardsInfo";
import { CardContainer } from "./styles";

interface ServiceCardProps {
  item: DataType;
}

export const ServiceCard = ({ item }: ServiceCardProps) => {
  return (
    <CardContainer>
      <h1>{item.title}</h1>
      <img src={item.bgImg} alt="" />
      <p>{item.description}</p>
    </CardContainer>
  );
};
