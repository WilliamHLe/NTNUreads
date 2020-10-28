import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import AddFavorite from "../components/user/AddFavorite"

const Detailed = () => {

    const { id } = useParams()
    const [book, setBook] = useState<any[]>([])

    useEffect(()=>{
        fetch(`http://localhost:4000/books/${id}`)
            .then(response => response.json())
            .then((data) => {
                //console.log(data);
                setBook(data)
                //console.log(book);
            })
    },[id, book])


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
                </div>
            )}
        </div>
    );
}

export default Detailed;
