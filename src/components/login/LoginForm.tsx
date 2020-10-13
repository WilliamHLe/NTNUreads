import React, {useState} from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [content, setContent] = useState([""])

    const onFormSubmit = (event:any) => {
        event.preventDefault();
        setUsername(event.target.value)
        setPassword(event.target.value)

        fetch('http://localhost:4000/user/')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input value={username} type="username" />
                <input value={password} type="password" />
                <button type="submit">Logg inn</button>
            </form>
        </div>
    )
}

export default LoginForm