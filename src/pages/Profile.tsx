import React from 'react';
import {useHistory} from "react-router-dom"
import UserPage from "../components/user/UserPage";

const Profile = () => {

    const history = useHistory();

    if(sessionStorage.getItem("user")) {
        console.log(sessionStorage.getItem("user"))
        return <UserPage />
    } else {
        history.push("/login");
        return <div></div>
    }
}

export default Profile;
