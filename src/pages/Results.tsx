import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Container, Row, Col, Button} from "react-bootstrap";
import Sidebar from "../components/filter/Sidebar";

import "./Results.css"


const Results = () => {
    //her kan vi ha search component for å initialisere nytt søk, og også inkludere komponent for
    //filtrering og sortering
    const { searchText } = useParams()

    const [showFilters, setShowFilters] = useState(false)

    const toggleFilters = () => {
        setShowFilters(!showFilters)
    }

    const show = showFilters ? "show" : "" ;

    return (
        <div className="results-wrapper">
            <Container fluid>
                <Row>
                    <Col sm={4} className={"d-block d-sm-none"}>
                        <Button className="btn-group-toggle" type="button" variant={"primary"} onClick={ toggleFilters }>
                            Filtrer
                        </Button>
                        <div className={"collapse" + show}>
                            <Sidebar/>
                        </div>
                    </Col>
                    <Col sm={4} className={"d-none d-sm-block"}>
                        <Sidebar/>
                    </Col>
                    <Col  sm={8} className="page-content-wrapper">
                        <h5>Dette er resultatene fra søket: {searchText}</h5>
                    </Col>
                </Row>
            </Container>


        </div>
    );
}

export default Results;
