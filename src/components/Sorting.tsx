import React from "react";
import {Form} from "react-bootstrap";

const Sorting = (props:any) => {

    const handleChange = (e:any) => {
        props.chan(e.target.value)
    }


    return(
        <div>
            <div>Sorter etter:</div>
            <Form.Group controlId={"FormLanguage"}>
                <Form.Control onChange={handleChange} className="col-10" as="select" custom>
                    <option value={""}>Relevant</option>
                    <option value="authors">Forfatter A-Z</option>
                    <option value="title">Tittel A-Z</option>
                    <option value="average_rating">Vurdering høy-lav</option>
                </Form.Control>
            </Form.Group>
        </div>
    )
}

export default Sorting
