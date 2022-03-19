import { Outlet } from "react-router-dom";

import { Fragment, useContext } from "react";
import { UserContext } from "../../context/userContext";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

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
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
