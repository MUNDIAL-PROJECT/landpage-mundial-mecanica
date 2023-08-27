import { CardType } from "../../mock/productCards";
import { CardContainer, CardInfo } from "./styles";

interface ProductCardProps {
  item: CardType;
}

export const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <CardContainer>
      <h1>{item.name}</h1>
      <CardInfo>
        <img src={item.imgPath} alt="" />
        <span>{item.category}</span>
        <p>{item.description}</p>
      </CardInfo>
    </CardContainer>
  );
};
