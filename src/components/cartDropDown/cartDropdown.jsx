import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsList,
  CartButton,
} from "./cartDropdownStyles";

import { useNavigate } from "react-router";

import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import CartItemComponent from "../cartItem/cartItem";

import Button from "../button/buttonComponent";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItemsList>
        {cartItems.map((cartItem) => (
          <CartItemComponent
            key={cartItem.id}
            cartItem={cartItem}
          ></CartItemComponent>
        ))}
      </CartItemsList>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

/*
{cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
        ))} */
