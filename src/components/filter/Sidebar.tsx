import React, {useState} from "react";
import ShowRating from "./ShowRating";
import {Form} from "react-bootstrap";

interface SideBarProps {
    chang: any;
}
const Sidebar = ({chang}: SideBarProps) => {

    const handleChange = (e:any) => {
        chang(e.target.value)
    }

    return (
        <div>
            <Form>
                <h5>Gjennomsnittlig rating</h5>
                {/*HER MÅ 1 STJERNE VÆRE ALLE BØKER FRA 0-1.5, 2 STJERNER FRA 1.5-2.5 OSV?*/}
                <Form.Group controlId={"FormRating"} onChange={handleChange}>
                    <Form.Check type="radio" name="rating" value="1" label={<ShowRating star1={"filledStar"} star2={"emptyStar"} star3={"emptyStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="radio" name="rating" value="2" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"emptyStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="radio" name="rating" value="3" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="radio" name="rating" value="4" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"filledStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="radio" name="rating" value="5" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"filledStar"} star5={"filledStar"}/>}/>
                </Form.Group>


                <h5>Forfatter</h5>
                {/*MULIG Å FIKSE SLIK AT KUN FORFATTERE SOM ER RELEVANT FOR SØKET KOMMER OPP HER?*/}
                {/*Dersom man kun søker på en forfatter så bør kun denne forfatteren komme opp, som kanskje gir litt lite mening, men går greit*/}
                <Form.Group controlId={"FormAuthor"}>
                    <Form.Check type="checkbox" label={"Relevant forfatter nr 1"}/>
                    <Form.Check type="checkbox" label={"Relevant forfatter nr 2"}/>
                    <Form.Check type="checkbox" label={"Relevant forfatter nr 3"}/>
                    <Form.Check type="checkbox" label={"Relevant forfatter nr 4"}/>
                    <Form.Check type="checkbox" label={"Relevant forfatter nr 5"}/>
                </Form.Group>

                <h5>Utgivelsesår</h5>
                {/*MULIG Å FIKSE SLIK AT KUN UTGIVELSESÅR SOM ER RELEVANT FOR SØKET KOMMER OPP HER?*/}
                {/*Dersom man kun søker på en forfatter så bør kun denne forfatteren komme opp, som kanskje gir litt lite mening, men går greit*/}
                <Form.Group controlId={"FormYear"}>
                    <Form.Check type="checkbox" label={"2020"}/>
                    <Form.Check type="checkbox" label={"2017"}/>
                    <Form.Check type="checkbox" label={"2018"}/>
                    <Form.Check type="checkbox" label={"2010"}/>
                    <Form.Check type="checkbox" label={"2008"}/>
                </Form.Group>

                <h5>Språk</h5>
                {/*MULIG Å FIKSE SLIK AT KUN SPRÅK SOM ER RELEVANT FOR SØKET KOMMER OPP HER?*/}
                <Form.Group controlId={"FormLanguage"}>
                    <Form.Control className="col-10" as="select" custom>
                        <option>Norsk</option>
                        <option>Engelsk</option>
                        <option>Fransk</option>
                        <option>Spansk</option>
                        <option>Italiensk</option>
                        <option>Kinesisk</option>
                    </Form.Control>
                </Form.Group>

            </Form>
        </div>
    );
}

export default Sidebar;
