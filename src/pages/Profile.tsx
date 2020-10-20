import React from 'react';
import {useHistory} from "react-router-dom"

const Profile = () => {

    const history = useHistory();

    if(sessionStorage.getItem("user")) {
        console.log(sessionStorage.getItem("user"))
    } else {
        history.push("/");
    }

    return (
        <div>
            <p>Dette er profilen</p>
        </div>
    );
}

export default Profile;
