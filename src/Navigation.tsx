import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from "./components/search/Search";


const Navigation = () => {
    // if logged in = true -> sett logintekst til "Logg ut"
    // if logged in = false -> sett logintekst til "Logg inn"
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand as={Link} to="/">NTNUreads</Navbar.Brand>
                <Search/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
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
