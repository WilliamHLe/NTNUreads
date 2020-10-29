import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Form, Button} from "react-bootstrap";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [securityCheck, setSecurityCheck] = useState(false);
    //const [content, setContent] = useState([""])
    const history = useHistory();

    if(sessionStorage.getItem("user")) {
        sessionStorage.removeItem("user");
        alert("Du har logget ut!");
        history.push("/");
    }



    const onFormSubmit = (event:any) => {
        event.preventDefault();

        if(username === "" || password === "") {
            alert("Vennligst fyll inn brukernavn og passord")
            return
        }

        if(!securityCheck) {
            alert("Vennligst bekreft at du er informert om usikker innlogging")
            return
        }

        fetch('http://localhost:4000/user/login/'+{username}.username+'/'+{password}.password+'', {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(
                (result) =>{
                    console.log(JSON.stringify(result[0]));
                    if (JSON.stringify(result[0]) === undefined) {
                        alert("ERROR: ikke gyldig bruker");
                    }
                    else {
                        sessionStorage.setItem("user",JSON.stringify(result[0]));
                        alert("Du har logget inn!");
                        history.push("/");
                    }
                }
            );

    }

    return (
        <div className={"page-wrapper"}>

            <Form onSubmit={onFormSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Brukernavn</Form.Label>
                    <Form.Control type="username" placeholder="Brukernavn" onChange={(e)=>setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Passord</Form.Label>
                    <Form.Control type="password" placeholder="Passord" onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Jeg er informert om at denne innloggingen er totalt usikker og kun til demonstrasjon." onChange={() => setSecurityCheck(!securityCheck)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Logg inn
                </Button>
            </Form>

        </div>
    )
}

export default LoginForm
