import React from "react";
import { useParams } from "react-router-dom";
import {Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/filter/Sidebar";

import "./Results.css"


const Results = () => {
    //her kan vi ha search component for å initialisere nytt søk, og også inkludere komponent for
    //filtrering og sortering
    const { searchText } = useParams()
    return (
        <div className="results-wrapper">
            <Container fluid>
                <Row>
                    <Col xs={3} className="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col  xs={9} className="page-content-wrapper">
                        {/*Legg inn tabell som viser resultat fra søk under her*/}
                        <h5>Dette er resultatene fra søket: {searchText}</h5>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Results;
