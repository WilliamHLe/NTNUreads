import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button, Table} from 'react-bootstrap';

import {useParams} from "react-router-dom";
import AddFavorite from "../components/user/AddFavorite"
import CreateReview from "../components/CreateReview";

const Detailed = () => {

    const { id } = useParams()
    const [book, setBook] = useState<any[]>([])
    const [review, setReview] = useState<any[]>([])

    useEffect(()=>{
        fetch(`http://localhost:4000/books/${id}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setBook(data)
                console.log(book);
            })
        fetch(`http://localhost:4000/review/${id}`)
            .then(response => response.json())
            .then((data) => {
                console.log("sup");
                setReview(data)
            })
    },[id])


    return (
        <div>
            {book.map(item =>
                <div>
                    <h1>{item.title}</h1>
                    <p>Forfatter: {item.authors}</p>
                    <p>ISBN/ISBN13: {item.isbn} / {item.isbn13}</p>
                    <p>Utgivelsesdato: {item.publication_date}</p>
                    <p>Utgiver: {item.publisher}</p>
                    <p>Vurdering: {item.average_rating} ({item.ratings_count} vurderinger)</p>
                    <AddFavorite book={id}/>
                    <CreateReview book={item._id}/>
                </div>
            )}
            Anmeldelser
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Bruker</th>
                    <th>Score</th>
                    <th>Review</th>
                </tr>
                </thead>
                <tbody>
                {review.map(item =>
                   <tr>
                       <td>{item.name}</td>
                       <td>{item.rating}</td>
                       <td>{item.review}</td>
                   </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default Detailed;