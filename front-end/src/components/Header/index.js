import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import { GlobalContext } from '../context/GlobalState';
import { signout } from '../../services/authService';
const Header = () => {

  const { user, setUser } = useContext(GlobalContext);

  const handleSignout = () => {
    signout();
    setUser(null);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">ABC Limited</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <NavLink exact  activeClassName="active" className="nav-link mr-3"to="/">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink exact activeClassName="active" className="nav-link mr-3" to="/questions" >Questions</NavLink>
          </Nav.Item>
          { !user && (
            <Nav.Item>
              <NavLink exact activeClassName="active" className="nav-link mr-3" to="/login" >Login</NavLink>
            </Nav.Item>
          )}
          { !user && (
            <Nav.Item>
              <NavLink exact  activeClassName="active" className="nav-link" to="/register" >Register</NavLink>
            </Nav.Item>
          )}
          { user && (
            <Nav.Item>
              <Nav.Link onClick={handleSignout}>Sign Out</Nav.Link>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   );
}
 
export default Header;