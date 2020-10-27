import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //const [content, setContent] = useState([""])
    const history = useHistory();

    if(sessionStorage.getItem("user")) {
        sessionStorage.removeItem("user");
        history.push("/");
    }



    const onFormSubmit = (event:any) => {
        event.preventDefault();

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
                    sessionStorage.setItem("user",JSON.stringify(result[0]));
                    history.push("/");
                }
            );

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
