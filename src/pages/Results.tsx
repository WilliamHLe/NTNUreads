import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Button, Table} from 'react-bootstrap';
import Sidebar from "../components/filter/Sidebar";
import {useHistory} from "react-router-dom";

import Page from "../components/Page";
import Sorting from "../components/Sorting";


const Results = () => {
    //her kan vi ha search component for å initialisere nytt søk, og også inkludere komponent for
    //filtrering og sortering
    const { searchText } = useParams()
    const [searchResult, setSearchResult] = useState<any[]>([])
    const [count, setCount] = useState(0)
    const [countRes, setCountRes] = useState(0)
    const [sortBy, setSortBy] = useState<any>("")
    //const [bookId,setBookId] = useState<any>()
    const history = useHistory();

    useEffect(() => {
        console.log(sortBy)
    }, [sortBy])

    useEffect(()=>{
        fetch(`http://localhost:4000/books/search/${searchText}`)
            .then(response => response.json())
            .then((data) => {
                setCountRes(data)
            })

    }, [searchText, countRes])


    useEffect(()=>{
        fetch(`http://localhost:4000/books/search/${searchText}/${count}/${sortBy}`)
            .then(response => response.json())
            .then((data) => {
                setSearchResult(data)
            })

    }, [searchText, count, sortBy] )


    const handlePagination = (ct:any) => {
        setCount(ct)
        console.log(sortBy)
    }

    const handleSort = (ct:any) => {
        setSortBy(ct)
    }


    const [showFilters, setShowFilters] = useState(false)

    const toggleFilters = () => {
        setShowFilters(!showFilters)
    }

    const toDetails = (id:any) => {
        console.log(id);
        history.push(`/book/${id}`)
    }

    const show = showFilters ? "show" : "" ;

    return (
        <div className="page-wrapper">
            <Container fluid>
                <Row>
                    {/*This column is hidden at screens wider than md*/}
                    <Col md={3} className={"d-md-none"}>
                        <Button className="btn-group-toggle" type="button" variant={"primary"} onClick={ toggleFilters } block>
                            Filtrer
                        </Button>
                        <br/>
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
                        <Table striped bordered hover  style={{tableLayout: "auto"}}>
                            <thead>
                            <tr>
                                <th>ISBN</th>
                                <th>Forfatter</th>
                                <th>Tittel</th>
                                <th>Vurdering</th>
                                <th>Detaljer</th>
                            </tr>
                            </thead>
                            <tbody>
                            {searchResult.map(item =>
                                <tr>
                                    <td>{item.isbn}</td>
                                    <td>{item.authors}</td>
                                    <td>{item.title}</td>
                                    <td>{item.average_rating}</td>
                                    <td><Button onClick={() => toDetails(item._id)}>Detaljer</Button></td>
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
