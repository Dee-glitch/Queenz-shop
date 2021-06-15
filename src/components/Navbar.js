import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import logo from '../../src/logo.svg';
import {
  Button,
  NavContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './Styles';

export const Navbar = ({ currentUser }) => {
  return (
    <NavContainer>
      <LogoContainer to="/">
        <img src={logo} alt="Store" className="navbar-brand" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/" className="nav-link">
          Products
        </OptionLink>
        {currentUser ? (
          <div className="nav-link" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <OptionLink to="/signin" className="nav-link">
            Sign in
          </OptionLink>
        )}
        <Link to="/cart" className="ml-auto">
          <Button>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
          </Button>
        </Link>
      </OptionsContainer>
    </NavContainer>
  );
};

export default Navbar;
