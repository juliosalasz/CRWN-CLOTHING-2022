import { useContext } from "react";

import { ProductContext } from "../../context/shopContext";
import ProductCard from "../../components/productCard/productCard";

import { ProductContainer } from "./shopStyles";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <ProductContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductContainer>
  );
};

export default Shop;
