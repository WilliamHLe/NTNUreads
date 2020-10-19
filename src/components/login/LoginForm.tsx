import React, {useState} from "react";
import {setJsonSession} from "../storage/JsonStorage";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [content, setContent] = useState([""])

    const onFormSubmit = (event:any) => {
        event.preventDefault();

        fetch('http://localhost:4000/user/login/'+{username}.username+'/'+{password}.password+'', {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then( (response) => {
                console.log(response)
            });

    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input value={username} type="username" onChange={(e)=>setUsername(e.target.value)}/>
                <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Logg inn</button>
            </form>
        </div>
    )
}

export default LoginForm