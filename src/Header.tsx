import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button"

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home">NTNUreads</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Hjem</Nav.Link>
                        <Nav.Link href="#profile">Profil</Nav.Link>
                        <Nav.Link href="#login">Logg inn</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Tittel, forfatter eller ISBN" className="mr-sm-2" />
                        <Button variant="outline-success">Søk</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;