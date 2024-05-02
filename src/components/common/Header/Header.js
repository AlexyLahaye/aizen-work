import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import theme from '../../../assets/themes/theme';

function Header({ darkMode, toggleTheme }) {
    const navBarBG = {backgroundColor: darkMode ? theme.dark.background : theme.light.background};
    const navBarCT = {color: darkMode ? theme.dark.text : theme.light.text,}
      
  return (
    <Navbar style={navBarBG} expand="lg p-2" fixed="top">
    <Navbar.Brand style={navBarCT} as={Link} to="/">Aizen Work</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto" navbarScroll>
        <Nav.Link style={navBarCT} as={Link} to="/">Accueil</Nav.Link>
        <Nav.Link style={navBarCT} as={Link} to="/Blog">Blog</Nav.Link>
        <Nav.Link style={navBarCT} as={Link} to="/Galerie">Galerie</Nav.Link>
        <NavDropdown style={navBarCT} title="Liscences" id="navbarScrollingDropdown">
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
