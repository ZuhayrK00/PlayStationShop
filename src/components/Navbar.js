import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: #003791;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavMenuItem = styled.li`
  margin-right: 10px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: lightblue;
  }
`;

const Logo = styled.img`
  height: 25px;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 0.9%;
`;

const Navbar = ({ basketItems }) => {
  const totalItems = basketItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Nav>
      <NavMenu>
        <NavMenuItem>
          <NavLink to="/">Games</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/basket">Basket ({totalItems})</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/checkout">Checkout</NavLink>
        </NavMenuItem>
      </NavMenu>
      <Logo src="https://logodix.com/logo/411515.png" />
    </Nav>
  );
};

export default Navbar;
