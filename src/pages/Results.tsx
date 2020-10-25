import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Button, Table} from 'react-bootstrap';
import Sidebar from "../components/filter/Sidebar";

import "./Results.css"
import Page from "../components/Page";
import Sorting from "../components/Sorting";


const Results = () => {
    //her kan vi ha search component for å initialisere nytt søk, og også inkludere komponent for
    //filtrering og sortering
    const { searchText } = useParams()
    const [searchResult, setSearchResult] = useState<any[]>([])
    const [count, setCount] = useState(0)
    const [countRes, setCountRes] = useState(0)
    const [sortBy, setSortBy] = useState("average_rating")

    /*useEffect(() => {
        console.log(countRes)
    })*/

    useEffect(()=>{
        fetch(`http://localhost:4000/books/search/${searchText}`)
            .then(response => response.json())
            .then((data) => {
                setCountRes(data)
            })

    }, [countRes])


    useEffect(()=>{

        fetch(`http://localhost:4000/books/search/${searchText}/${count}/${sortBy}`)
            .then(response => response.json())
            .then((data) => {
                setSearchResult(data)
            })

    }, [searchText] [count] [sortBy])


    const handlePagination = (ct:any) => {
        setCount(ct)
    }

    const handleSort = (ct:any) => {
        setSortBy(ct)
        console.log(ct)
    }


    const [showFilters, setShowFilters] = useState(false)

    const toggleFilters = () => {
        setShowFilters(!showFilters)
    }

    const show = showFilters ? "show" : "" ;

    return (
        <div className="results-wrapper">
            <Container fluid>
                <Row>
                    {/*This column is hidden at screens wider than md*/}
                    <Col md={3} className={"d-md-none"}>
                        <Button className="btn-group-toggle" type="button" variant={"primary"} onClick={ toggleFilters }>
                            Filtrer
                        </Button>
                        <div className={"collapse" + show}>
                            <Sidebar/>
                        </div>
                    </Col>
                    {/*This column is hidden at screens smaller than md*/}
                    <Col md={3} className={"d-none d-md-block"}>
                        <Sidebar/>
                    </Col>
                    <Col  md={9} className="page-content-wrapper">
                        <h5>Dette er resultatene fra søket: {searchText}</h5>
                        <Sorting chan={handleSort} />
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
                        <Page change={handlePagination} countRes={countRes}/>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Results;
