import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Table} from 'react-bootstrap';

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

    return (
        <div>
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

        </div>
    );
}

export default Results;
