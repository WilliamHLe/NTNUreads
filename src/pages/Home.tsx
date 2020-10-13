import React from 'react';
import {Jumbotron, Container} from "react-bootstrap";
import Search from "../components/Search";
import {Button} from "react-bootstrap";

function Home() {

    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Velkommen til NTNUreads</h1>
                    <p>
                        Her kan du søke etter bøker, lagre dem som favoritter - og til og med skrive anmeldelser!
                    </p>
                    <Search/>

                    {/*Plan: ved å trykke på disse forhåndsbestemte taggene vil søkeordet bli navnet på knappen*/}
                    <div style={{marginTop:"2em"}} className={"mb-4"}>
                        <h4>Populære søk:</h4>
                        <Button size="sm" variant="secondary" type="submit">Harry Potter</Button>{' '}
                        <Button size="sm" variant="secondary" type="submit">J.R.R Tolkien</Button>{' '}
                        <Button size="sm" variant="secondary" type="submit">Oscar Wilde</Button>{' '}
                        <Button size="sm" variant="secondary" type="submit">Jane Austen</Button>
                    </div>
                </Container>
            </Jumbotron>

        </div>
    );
}

export default Home;
