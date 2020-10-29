import React from 'react';
import {useHistory} from "react-router-dom"
import UserPage from "../components/user/UserPage";
//import {Table} from "react-bootstrap";

const Profile = () => {

    const history = useHistory();
    //const [searchResult, setSearchResult] = useState<any[]>([])

    if(sessionStorage.getItem("user")) {
        console.log(sessionStorage.getItem("user"))
        return <UserPage />
    } else {
        history.push("/login");
        return <div></div>
    }
}

export default Profile;
