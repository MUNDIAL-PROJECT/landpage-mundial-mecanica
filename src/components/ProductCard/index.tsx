import { CardType } from "../../mock/productCards";
import { CardContainer } from "./styles";

interface ProductCardProps {
  item: CardType;
}

export const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <CardContainer>
      <h1>{item.name}</h1>
      <img src={item.imgPath} alt="" />
      <p>{item.description}</p>
    </CardContainer>
  );
};
