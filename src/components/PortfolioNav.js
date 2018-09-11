import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const PortfolioNav = () => (
  <Navbar style={{ background: "black" }}>
    <NavbarBrand href="/">Ray Norman</NavbarBrand>
    <Nav>
      <NavItem>
        <NavLink href="#about">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#portfolio">Portfolio</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#contact">Contact</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default PortfolioNav;
