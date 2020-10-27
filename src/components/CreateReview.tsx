import React, {useState} from "react";
import {Button, Form, FormControl} from "react-bootstrap";

const CreateReview = (props:any) => {
    const book = props.book;

    const [name, setName] = useState("wdaa")
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

    const onFormSubmit = (event:any) => {
        event.preventDefault();

        fetch('http://localhost:4000/review/add', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name: name,
                rating: rating,
                review: review,
                book: book
            })
        })
            .then( (response) => {
                console.log("Success")
            });
    }

    const onChangeRadio = (e:any) => {
        const r = parseInt(e.target.value)
        setRating(r)
    }

    return(
        <div>
            <Form onSubmit={onFormSubmit}>
                <FormControl value={name} onChange={(e) => {setName(e.target.value)}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                    <input type="radio" value="1" name="gender" onChange={onChangeRadio} /> 1
                    <input type="radio" value="2" name="gender" onChange={onChangeRadio} /> 2
                    <input type="radio" value="3" name="gender" onChange={onChangeRadio} /> 3
                    <input type="radio" value="4" name="gender" onChange={onChangeRadio} /> 4
                    <input type="radio" value="5" name="gender" onChange={onChangeRadio} /> 5
                <FormControl value={review} onChange={(e) => {setReview(e.target.value)}} as="textarea" aria-label="With textarea" />
                <textarea value={review} onChange={(e) => {setReview(e.target.value)}}></textarea>
                <Button type="submit">Legg til</Button>
            </Form>
        </div>
    )
}

export default CreateReview

