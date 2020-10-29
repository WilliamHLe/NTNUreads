import {Button, Form, FormControl} from "react-bootstrap";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
//import {log} from "util";

const Search = () => {

    //const [searchResult, setSearchResult] = useState([])
    const [searchText, setSearchText] = useState("")
    const history = useHistory();

    /*useEffect(() => {
        console.log(searchResult)
    }, [searchResult])

    const fetchData = () => {
        fetch(`http://localhost:4000/books/search/${searchText}`)
            .then(response => response.json())
            .then((data) => {          setSearchResult(data)

            })
        console.log(searchResult)
    }*/


    const handleSearchSubmit = (event:any) => {
        event.preventDefault()
        //fetchData()




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
            <Form inline onSubmit={handleSearchSubmit}>
                <FormControl id="search" type="text" placeholder="Tittel, forfatter eller ISBN" value={searchText} onChange={event => {setSearchText(event.target.value)}} className="col" />
                <Button variant="primary" type="submit">Søk</Button>
            </Form>
        </div>
    );
}

export default Search;

