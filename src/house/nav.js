import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Navigation extends React.Component {

  render() {
    return (
        <Navbar collapseOnSelect expand="md" bg='white' sticky="top">
          <Navbar.Brand href="/">the APP!</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">the APP featues</Nav.Link>
              <Nav.Link href="#pricing">the APP Pricing</Nav.Link>
              <Nav.Link href="#pricing">about the APP</Nav.Link>
              <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Email
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Instagram
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Facebook
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}



export default Navigation;
