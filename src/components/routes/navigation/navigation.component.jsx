import { useContext } from "react";
import { Outlet} from "react-router-dom";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { NavigationContainer,NavLinksContainer,NavLink,LogoContainer } from "./navigation.styles";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
    <NavigationContainer>
      <LogoContainer to="/">
        <CrwnLogo className="logo" />
      </LogoContainer>
      <NavLinksContainer>
        <NavLink to="/shop">SHOP</NavLink>
        {currentUser ? (
          <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
        ) : (
          <NavLink to="/auth">SIGN IN</NavLink>
        )}
        <CartIcon />
      </NavLinksContainer>
      {isCartOpen && <CartDropdown />}
    </NavigationContainer>
  <Outlet/>
    </>
  );
};
export default Navigation;
