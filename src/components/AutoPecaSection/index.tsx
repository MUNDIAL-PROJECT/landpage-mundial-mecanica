import { Link } from "react-router-dom";
import { AutoCardContainer, AutoContianer } from "./styled";
import { ArrowRight } from "@phosphor-icons/react";
import { PRODUCT_MOCK } from "../../mock/productCards";
import { ProductSectionCard } from "../ProductSectionCard";

export const AutoPecaSection = () => {
  return (
    <AutoContianer>
      <h2>Nossa loja de Auto Peças</h2>
        <AutoCardContainer>
        {PRODUCT_MOCK.slice(0, 4).map((item) => {
          return <ProductSectionCard key={item.id} item={item} />;
        })}
        </AutoCardContainer>

      <Link to="/autopeças">
        <button>
          Ver todos produtos <ArrowRight size={22} />
        </button>
      </Link>
    </AutoContianer>
  )
}
