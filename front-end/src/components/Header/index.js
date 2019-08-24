import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import { GlobalContext } from '../context/GlobalState';
import { signout, removeUserLocalStorage } from '../../services/authService';
const Header = () => {

  const { currUser, setCurrUser } = useContext(GlobalContext);

  const handleSignout = () => {
    signout();
    setCurrUser(null);
    removeUserLocalStorage();
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
          { !currUser && (
            <Nav.Item>
              <NavLink exact activeClassName="active" className="nav-link mr-3" to="/login" >Login</NavLink>
            </Nav.Item>
          )}
          { !currUser && (
            <Nav.Item>
              <NavLink exact  activeClassName="active" className="nav-link" to="/register" >Register</NavLink>
            </Nav.Item>
          )}
          { currUser && (
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