import React, {useState} from "react";

const LoginForm = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    onFormSubmit = () => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    return (
        <div>
            <form>
                <input type="username" onSubmit={this.onFormSubmit}/>
                <input type="password" />
                <button>Logg inn</button>
            </form>
        </div>
    )
}

export default LoginForm