import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
      signOut(auth)
  }
    return (
        <>
        <Navbar className='nav fw-bolder ' collapseOnSelect sticky="top" expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand className='nav-title' as={Link} to="/">Motor House</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>
      {/* <Nav.Link as={Link} to="/">Pricing</Nav.Link> */}
     
    </Nav>
    <Nav>
      {
        user?(<button className='logout-btn' onClick={handleSignOut}>Logout</button>):(<Nav.Link as={Link} className='text-white' to="/login">Login</Nav.Link>)
      }
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </>
    );
};

export default Header;