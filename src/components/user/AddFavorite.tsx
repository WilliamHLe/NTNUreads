import React from "react";
//import {useParams} from "react-router-dom";
import GetFavorite from "./GetFavorite"

const AddFavorite = (props:any) => {
    const book = props.book;
    //const [Result, setResult] = useState<any[]>([])

    //Checks if the user is logged in, and displays button to add or remove the book as favorite
    if(sessionStorage.getItem("user")) {
        return <GetFavorite book={book} />
        //If not, don't display anything
    } else {
        return (
            <div className="favoriteDiv">

            </div>
        )
    }
}

export default AddFavorite;
