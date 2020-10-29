import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from "./components/search/Search";
import ThemeSwitch from "./components/theme/ThemeSwitch";
import {useSelector} from "react-redux";
import {AppState} from "./store/rootStore";

/*
import {connect} from "react-redux";
import {AppState} from "./store/rootStore";

const mapStateToProps = (state: AppState) => ({
    theme: state.themeReducer.theme
})

interface NavigationProps {
    theme: string;
}

 */


const Navigation = () => {
    // if logged in = true -> sett logintekst til "Logg ut"
    // if logged in = false -> sett logintekst til "Logg inn"

    const theme = useSelector((state:AppState) => state.themeReducer.theme)

    return (
        <div>
            <Navbar bg={theme} variant={theme} expand="md" fixed="top">
                <Navbar.Brand as={Link} to="/">NTNUreads</Navbar.Brand>
                <Search/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Hjem</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profil</Nav.Link>
                        <Nav.Link as={Link} to="/login">Logg inn/ut</Nav.Link>
                        <ThemeSwitch/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
