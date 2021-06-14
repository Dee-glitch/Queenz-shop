import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Button = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 1px solid var(..light);
  border-color: ${(props) => (props.cart ? 'var(--Crimson)' : 'var(..light)')};
  color: ${(prop) => (prop.cart ? 'var(--Crimson)' : 'var(..light)')};
  color: var(--light);
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2re 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(prop) => (prop.cart ? 'var(--Crimson)' : 'var(..light)')};
    color: var(--main);
  }
  &:focus {
    outline: none;
  }
`;

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--light);
    border: none;
    color: #fff;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 1s linear;
  }
  .cart-btn:hover {
    color: var(--main);
    cursor: pointer;
  }
`;
