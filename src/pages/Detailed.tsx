import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button, Table} from 'react-bootstrap';

import {useParams} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
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
                setBook(data)
            })
        fetch(`http://localhost:4000/review/${id}`)
            .then(response => response.json())
            .then((data) => {
                setReview(data)
            })
    },[id])


    return (
        <div className={"page-wrapper"}>
            {book.map(item =>
                <div>
                    <h1>{item.title}</h1>
                    <br/>
                    <ListGroup>
                        <ListGroup.Item><b>Forfatter:</b> {item.authors}</ListGroup.Item>
                        <ListGroup.Item><b>ISBN/ISBN13:</b> {item.isbn} / {item.isbn13}</ListGroup.Item>
                        <ListGroup.Item><b>Utgivelsesdato:</b> {item.publication_date.substring(0,10)}</ListGroup.Item>
                        <ListGroup.Item><b>Utgiver:</b> {item.publisher}</ListGroup.Item>
                        <ListGroup.Item><b>Vurdering:</b> {item.average_rating} av 5 ({item.ratings_count} vurderinger totalt)</ListGroup.Item>
                    </ListGroup>
                    <br/>
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
                    <th>Dato lagt til</th>
                </tr>
                </thead>
                <tbody>
                {review.map(item =>
                   <tr>
                       <td>{item.name}</td>
                       <td>{item.rating}</td>
                       <td>{item.review}</td>
                       <td>{item.createdAt}</td>
                   </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default Detailed;
