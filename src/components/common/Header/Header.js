import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';

function Header({ darkMode, toggleTheme }) {
  return (
    <Navbar expand="lg p-2" fixed="top" bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'}>
      <Navbar.Brand as={Link} to="/">Aizen Work</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto" navbarScroll>
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/Galerie">Galerie</Nav.Link>
          <NavDropdown title="Liscences" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#idLiscence">One Piece</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex me-2">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant={darkMode ? 'light' : 'dark'}>Recherche</Button>
        </Form>
        <Button onClick={toggleTheme} variant={darkMode ? 'light' : 'dark'}>
          {darkMode ? 'Mode Clair' : 'Mode Sombre'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
