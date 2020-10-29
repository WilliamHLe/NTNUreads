import React from 'react';
import {Jumbotron, Container} from "react-bootstrap";
import Search from "../components/search/Search";
import PopularSearches from "../components/search/PopularSearches";

import "./Home.css"

function Home() {



    return (
        <div>
            <Jumbotron className="jumbo" fluid>
                <Container className="home-info">
                    <h1>Velkommen til NTNUreads</h1>
                    <p>
                        Her kan du søke etter bøker, lagre dem som favoritter - og til og med skrive anmeldelser!
                    </p>
                    <Search />
                    <PopularSearches/>
                </Container>
            </Jumbotron>

        </div>
    );
}

export default Home;
