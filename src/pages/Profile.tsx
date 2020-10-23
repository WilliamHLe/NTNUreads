import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import {Table} from "react-bootstrap";

const Profile = () => {

    const history = useHistory();
    const [searchResult, setSearchResult] = useState<any[]>([])

    if(sessionStorage.getItem("user")) {
        console.log(sessionStorage.getItem("user"))
    } else {
        history.push("/");
    }

    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        fetch("http://localhost:4000/favorite/user/"+user._id+"")
            .then(response => response.json())
            .then((data) => {
                console.log(data.books);
                setSearchResult(data.books)
            })
    },[])

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

export default Profile;
