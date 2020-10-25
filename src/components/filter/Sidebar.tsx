import React from "react";
//import ShowRating from "./ShowRating";
import {Form} from "react-bootstrap";

interface SidebarProps {
    searchResult: any[];
    //changeRating: any;
    changeAuthor: any;
    //changeYear: any;
}

//const Sidebar = ({searchResult, changeRating, changeAuthor, changeYear}: SidebarProps) => {
const Sidebar = ({searchResult, changeAuthor}: SidebarProps) => {

    console.log(searchResult);

    //returnerer en array med alle unike forfattere
    const uniqueAuthors = Array.from(new Set(searchResult.map((item: any) => item.authors)))
    //console.log("unique author: ", uniqueAuthors)

    /*
    //returnerer en array med alle unike språkkoder
    const uniqueLanguages = Array.from(new Set(searchResult.map((item: any) => item.language_code)))
    //console.log("unique lang: ", uniqueLanguages)

    //returnerer en array med alle unike publikasjonsår sortert fra lav til høy
    const uniqueYears = Array.from(new Set(searchResult.map((item: any) => item.publication_date.substring(0,4)))).sort()
    //console.log("unique year: ", uniqueYears)
    */

    const callbackAuthor = (e:any) => {
        changeAuthor(e.target.value)
    }

    /*
    const callbackRating = (e:any) => {
        changeRating(e.target.value)
    }

    const callbackYear = (e:any) => {
        changeYear(e.target.value)
    }
    */



    return (
        <div>
            <Form>

                {/*

                <h5>Gjennomsnittlig rating</h5>

                <Form.Group controlId={"FormRatingSelect"}>
                    <Form.Control className="col-10" as="select" custom>
                        <option value={1}>0-1.5</option>
                        <option value={2}>1.5-2.5</option>
                        <option value={3}>2.5-3.5</option>
                        <option value={4}>3.5-4.5</option>
                        <option value={5}>4.5 og opp</option>
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId={"FormRating"} onChange={callbackRating}>
                    <Form.Check type="radio" value={"radio1"} label={<ShowRating star1={"filledStar"} star2={"emptyStar"} star3={"emptyStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="radio" value={"radio2"} label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"emptyStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="radio" value={"radio3"} label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="radio" value={"radio4"} label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"filledStar"} star5={"emptyStar"}/>}/>
                    <Form.Check type="radio" value={"radio5"} label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"filledStar"} star5={"filledStar"}/>}/>
                </Form.Group>
                */}



                <h5>Forfatter</h5>

                <Form.Group controlId={"FormAuthorSelect"} onChange={callbackAuthor}>
                    <Form.Control className="col-10" as="select" custom>
                        <option value={""}>Alle</option>
                        {uniqueAuthors.map(author => {
                            return (
                                <option value={author}> {author} </option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>

                {/*
                <h5>Utgivelsesår</h5>

                <Form.Group controlId={"FormYearSelect"} onChange={callbackYear}>
                    <Form.Control className="col-10" as="select" custom>
                        <option value={""}>Alle</option>
                        {uniqueYears.map(year => {
                            return (
                                <option value={year}> {year} </option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>

                <h5>Språk</h5>
                <Form.Group controlId={"FormLangSelect"}>
                    <Form.Control className="col-10" as="select" custom>
                        <option value={""}>Alle</option>
                        {uniqueLanguages.map(lang => {
                            return (
                                <option value={lang}> {lang} </option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>
                */}

            </Form>
        </div>
    );
}

export default Sidebar;
