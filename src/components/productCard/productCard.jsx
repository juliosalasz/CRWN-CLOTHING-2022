import Button from "../button/buttonComponent";

import { Name, Price, ProductCardContainer, Footer } from "./productCardStyles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted">Add to cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
