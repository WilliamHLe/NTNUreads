import {Button, Form, FormControl} from "react-bootstrap";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const Search = () => {

    const [searchText, setSearchText] = useState("")
    const history = useHistory();

    const handleSearchSubmit = () => {
        //Det eneste denne gjør for øyeblikket er å route til results og sende med searchText som param
        //Må hente relevant data fra datasett ved å bruke searchText
        if (searchText !== "") {
            //console.log(searchText)
            history.push(`/results/${searchText}`)
        } else {
            alert("Please enter some search text!");
        }

    };

    return (
        <div>
            <Form inline>
                <FormControl type="text" placeholder="Tittel, forfatter eller ISBN" onChange={event => {setSearchText(event.target.value)}} className="col-lg-3" />
                <Button variant="primary" onClick={handleSearchSubmit}>Søk</Button>
            </Form>
        </div>
    );
}

export default Search;

