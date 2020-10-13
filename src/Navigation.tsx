import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation() {
    // if logged in = true -> sett logintekst til "Logg ut"
    // if logged in = false -> sett logintekst til "Logg inn"
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand as={Link} to="/">NTNUreads</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Hjem</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profil</Nav.Link>
                        <Nav.Link as={Link} to="/login">Logg inn</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;