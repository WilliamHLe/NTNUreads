import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import AddFavorite from "../components/user/AddFavorite"

const Detailed = () => {

    const { id } = useParams()
    const [book, setBook] = useState<any[]>([])

    useEffect(()=>{
        fetch(`http://localhost:4000/books/${id}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setBook(data)
                console.log(book);
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
                </div>
            )}
        </div>
    );
}

export default Detailed;