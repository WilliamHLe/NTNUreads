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


/*
    useEffect(()=>{
        fetch(`http://localhost:4000/books/search/${searchText}`)
            .then(response => response.json())
            .then((data) => {
                setSearchResult(data)
            })

    }, [searchText])
*/
    //Dersom vi skal ta inn enkeltvariabler - bruk disse. Skal få satt state ved å bruke checkbox/select i Sidebar - bruk Redux til statehåndtering her?
    //const [filterRating, setFilterRating ]= useState<number>(1)
    const [filterAuthors, setFilterAuthors] = useState<string>("")
    //const [filterYear, setFilterYear] = useState<number>(4)
    const [showFilters, setShowFilters] = useState(false)


    //Her prøver jeg å få tak i søkeresultat på de bestemte filterne for testing. Hva skal vi evt. gjøre her dersom vi ikke har filter? Ny query hver gang?
    useEffect(()=>{

        console.log(filterAuthors)

        if (filterAuthors != "") {
            fetch(`http://localhost:4000/books/search/${searchText}/${filterAuthors}`)
                .then(response => response.json())
                .then((data) => {
                    setSearchResult(data)
                })
        }

        //history.push(`/results/${searchText}?authors=${filterAuthors}&average_rating=${filterRating}`)
        //fetch(`http://localhost:4000/books/search/${searchText}?authors=${filterAuthors}&average_rating=${filterRating}`)
        //fetch(`http://localhost:4000/books/search/${searchText}/${filterAuthors}/${filterYear}`) //DETTE FUNGERER!

        if (filterAuthors == "") {
            fetch(`http://localhost:4000/books/search/${searchText}`)
                .then(response => response.json())
                .then((data) => {
                    setSearchResult(data)
                })
        }

    }, [searchText, filterAuthors])


    const handleChangeAuthors = (ct:any) => {
        setFilterAuthors(ct)
        console.log(ct)
    }


    /*
    const handleChangeRating = (ct:any) => {
        setFilterRating(ct)
        console.log(ct)
    }


    const handleChangeYear = (ct:any) => {
        setFilterYear(ct)
        console.log(ct)
    }
    */


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
                        <Button className="btn-group-toggle" type="button" variant={"primary"} onClick={ toggleFilters } block>
                            Filtrer
                        </Button>
                        <div className={"collapse" + show}>
                            <Sidebar searchResult={searchResult} changeAuthor={handleChangeAuthors}/>
                        </div>
                    </Col>
                    {/*This column is hidden at screens smaller than md*/}
                    <Col md={3} className={"d-none d-md-block"}>
                        <Sidebar searchResult={searchResult} changeAuthor={handleChangeAuthors}/>
                    </Col>
                    <Col  md={9} className="page-content-wrapper">
                        <h5>Dette er resultatene fra søket: {searchText}</h5>
                        <p>Fant {searchResult.length} resultater</p>
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
                                    {/*<td>{item.language_code}</td>*/}
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
