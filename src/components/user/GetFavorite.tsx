import {Button, Form, FormControl} from "react-bootstrap";
import React, {useEffect, useState} from "react";

const GetFavorite = (props:any) => {
    const book = props.book;
    const [Result, setResult] = useState<any>()

    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        console.log(user._id);
        console.log(book);
        fetch("http://localhost:4000/favorite/find/"+user._id+"/"+book+"")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setResult(data)
            })
    },[])


    const handleAddFavoriteSubmit = (event:any) => {
        event.preventDefault()
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        fetch('http://localhost:4000/favorite/add', {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                user: user._id,
                book: book
            })
        })
            .then( (response) => {
                console.log("Success")
            });
    }

    const handleRemoveFavoriteSubmit = (event:any) => {
        event.preventDefault()
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        fetch('http://localhost:4000/favorite/remove', {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                user: user._id,
                book: book
            })
        })
            .then( (response) => {
                console.log("Success")
            });
    }

    if(Result != null) {
        return (
            <div>
                <Form onSubmit={handleRemoveFavoriteSubmit}>
                    <Button variant="danger" type="submit">Fjern favoritt</Button>
                </Form>
            </div>
        )
    } else {
        return (
            <div>
                <Form onSubmit={handleAddFavoriteSubmit}>
                    <Button variant="primary" type="submit">Legg til favoritt</Button>
                </Form>
            </div>
        )
    }

}

export default GetFavorite;