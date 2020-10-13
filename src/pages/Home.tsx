import React from 'react';
import {Jumbotron, Container} from "react-bootstrap";
import Search from "../components/Search";

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
                </Container>
            </Jumbotron>

        </div>
    );
}

export default Home;
