import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">ABC Limited</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <NavLink exact  activeClassName="active" className="nav-link"  to="/">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink  exact activeClassName="active" className="nav-link"  to="/login" >Login</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink exact  activeClassName="active" className="nav-link"  to="/register" >Register</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   );
}
 
export default Header;