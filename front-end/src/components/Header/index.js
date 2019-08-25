import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import { GlobalContext } from '../context/GlobalState';
import { signout, removeUserLocalStorage } from '../../services/authService';
import { toast } from 'react-toastify';
const Header = () => {

  const { currUser, setCurrUser, isAdmin, setIsAdmin } = useContext(GlobalContext);

  const handleSignout = async  () => {
    const { data } = await signout();
    if(data) {
      toast(data.msg)
      setCurrUser({
        _id: '',
        email: '',
        isAdmin: ''
      });
      setIsAdmin('');
      removeUserLocalStorage();
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand to="/" as={Link} >ABC Limited</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <NavLink exact  activeClassName="active" className="nav-link mr-3"to="/">Home</NavLink>
          </Nav.Item>
          { currUser._id && (
            <Nav.Item>
              <NavLink exact activeClassName="active" className="nav-link mr-3" to="/questions" >Questions</NavLink>
            </Nav.Item>
          )}
          {
            (isAdmin !== 'false' && isAdmin !== '' && isAdmin) && (
              <Nav.Item>
                <NavLink exact activeClassName="active" className="nav-link mr-3" to="/users" >Users</NavLink>
              </Nav.Item>
            )
          }
          { !currUser._id && (
            <Nav.Item>
              <NavLink exact activeClassName="active" className="nav-link mr-3" to="/login" >Login</NavLink>
            </Nav.Item>
          )}
          { !currUser._id && (
            <Nav.Item>
              <NavLink exact  activeClassName="active" className="nav-link" to="/register" >Register</NavLink>
            </Nav.Item>
          )}
          { currUser._id && (
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