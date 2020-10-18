import React from "react";
import ShowRating from "./ShowRating";
import {Form, FormGroup} from "react-bootstrap";


const Sidebar = () => {

    return (
        <div>
            <Form>
                <h5>Gjennomsnittlig rating</h5>
                <FormGroup controlId={"FormRating"}>
                    <Form.Check type="checkbox" label={<ShowRating star1={"filledStar"} star2={"emptyStar"} star3={"emptyStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="checkbox" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"emptyStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="checkbox" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="checkbox" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"filledStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="checkbox" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"filledStar"} star5={"filledStar"}/>}/>
                </FormGroup>

                <h5>Antall reviews</h5>

                <h5>Språk</h5>
            </Form>
        </div>
    );
}

export default Sidebar;
