import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Button, Table} from 'react-bootstrap';
import Sidebar from "../components/filter/Sidebar";

import "./Results.css"


const Results = () => {
    //her kan vi ha search component for å initialisere nytt søk, og også inkludere komponent for
    //filtrering og sortering
    const { searchText } = useParams()
    const [searchResult, setSearchResult] = useState<any[]>([])

    /*useEffect(() => {
        console.log(searchResult)
    }, [searchResult])*/

    useEffect(()=>{
        fetch(`http://localhost:4000/books/search/${searchText}`)
            .then(response => response.json())
            .then((data) => {
                setSearchResult(data)
            })

    }, [searchText])


    const [showFilters, setShowFilters] = useState(false)

    const toggleFilters = () => {
        setShowFilters(!showFilters)
    }

    const show = showFilters ? "show" : "" ;

    return (
        <div className="results-wrapper">
            <Container fluid>
                <Row>
                    {/*This column shows up at xs screen size*/}
                    <Col sm={4} className={"d-block d-sm-none"}>
                        <Button className="btn-group-toggle" type="button" variant={"primary"} onClick={ toggleFilters }>
                            Filtrer
                        </Button>
                        <div className={"collapse" + show}>
                            <Sidebar/>
                        </div>
                    </Col>
                    {/*This column shows up at all screen sizes except xs*/}
                    <Col sm={4} className={"d-none d-sm-block"}>
                        <Sidebar/>
                    </Col>
                    <Col  sm={8} className="page-content-wrapper">
                        <h5>Dette er resultatene fra søket: {searchText}</h5>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Forfatter</th>
                                <th>Tittel</th>
                                <th>Vurdering</th>
                            </tr>
                            </thead>
                            <tbody>
                            {searchResult.map(item =>
                                <tr>
                                    <td>{item.bookID}</td>
                                    <td>{item.authors}</td>
                                    <td>{item.title}</td>
                                    <td>{item.average_rating}</td>
                                </tr>
                            )}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Results;
