import { Outlet } from "react-router-dom";

import { Fragment } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigationStyles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/sign-in">SIGN IN</NavLink>
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
