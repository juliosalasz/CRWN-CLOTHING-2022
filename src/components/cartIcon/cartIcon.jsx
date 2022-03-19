import {
  CartIconContainer,
  ItemCount,
  ShoppingIconSvg,
} from "./cartIconstyles";

import { useContext } from "react";

import { CartContext } from "../../context/cartContext";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIconSvg>
        <ShoppingIcon />
      </ShoppingIconSvg>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
