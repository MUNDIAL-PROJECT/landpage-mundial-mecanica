import { CardType } from "../../mock/productCards";
import { CardSectionContainer } from "./styled";

interface ProductCardProps {
  item: CardType;
}

export const ProductSectionCard = ({ item }: ProductCardProps) => {
  return (
    <CardSectionContainer>
      <h1>{item.name}</h1>
      <img src={item.imgPath} alt="" />
      <p>{item.description}</p>
    </CardSectionContainer>
  );
};
