import React from 'react';
import {Button, Form, FormControl} from "react-bootstrap";

function Home() {
    return (
        <div>
            <p>Dette er hjem</p>
            <Form inline>
                <FormControl type="text" placeholder="Tittel, forfatter eller ISBN" className="mr-sm-2" />
                <Button variant="outline-success">Søk</Button>
            </Form>
        </div>
    );
}

export default Home;
