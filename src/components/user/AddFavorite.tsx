import React from "react";
//import {useParams} from "react-router-dom";
import GetFavorite from "./GetFavorite"

const AddFavorite = (props:any) => {
    const book = props.book;
    //const [Result, setResult] = useState<any[]>([])

    if(sessionStorage.getItem("user")) {
        return <GetFavorite book={book} />
    } else {
        return (
            <div>
                You are not logged in
            </div>
        )
    }
}

export default AddFavorite;
