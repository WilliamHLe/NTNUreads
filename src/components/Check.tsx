import React, {useState} from "react";

const Check = () => {

    const GetUser =() => {
        if(sessionStorage.getItem("user")) {
            const getUser = sessionStorage.getItem("user") || "{}";
            const userJson = JSON.parse(getUser);
            const username = userJson.username
            return <h1>Hello {username}</h1>
        } else {
            return <h1>Hello, please log in</h1>
        }
    }

    return (
        <div>
            <GetUser />
        </div>
    )
}

export default Check