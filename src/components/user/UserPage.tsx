import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import {Table} from "react-bootstrap";

const UserPage = () => {

    const history = useHistory();
    const [searchResult, setSearchResult] = useState<any[]>([])

    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        fetch("http://localhost:4000/favorite/user/"+user._id+"")
            .then(response => response.json())
            .then((data) => {
                console.log(data.books);
                setSearchResult(data.books)
            })
    },[])

    const toDetails = (id:any) => {
        console.log(id);
        history.push(`/book/${id}`)
    }

    return (
        <div>
            <p>Dette er profilen</p>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#ID</th>
                    <th>Forfatter</th>
                    <th>Tittel</th>
                    <th>Vurdering</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {searchResult.map(item =>
                    <tr>
                        <td>{item.bookID}</td>
                        <td>{item.authors}</td>
                        <td>{item.title}</td>
                        <td>{item.average_rating}</td>
                        <td onClick={() => toDetails(item._id)}>Detajer</td>
                    </tr>
                )}

                </tbody>
            </Table>
        </div>
    );
}

export default UserPage;
