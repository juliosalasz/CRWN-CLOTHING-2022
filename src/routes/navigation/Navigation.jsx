import { Outlet } from "react-router-dom";

import { Fragment, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/cartContext";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cartIcon/cartIcon";
import CartDropdown from "../../components/cartDropDown/cartDropdown";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
  NavLinkSpan,
} from "./navigationStyles";
import { SignOutUser } from "../../util/fireBase/firebaseUtil";

const Navigation = () => {
  const { curretnUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {curretnUser ? (
            <NavLinkSpan onClick={SignOutUser}>SIGN OUT</NavLinkSpan>
          ) : (
            <NavLink to="/sign-in">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
