import React from "react";
import {useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";

const PopularSearches = () => {

    const history = useHistory();

    //IDE: hvis vi får tid kan vi også ha en komponent for "nylige søk" der f.eks. de siste 5 søkene som har blitt
    //skrevet inn i søkefeltet dukker opp som knapper som dette

    return (
        <div>
            {/*Plan: ved å trykke på disse forhåndsbestemte taggene vil søkeordet bli navnet på knappen*/}
            <div style={{marginTop:"2em"}} className={"mb-4"}>
                <h4>Populære søk:</h4>
                <Button size="sm" variant="primary" type="submit" onClick={() => history.push("/results/Harry%20Potter")}>Harry Potter</Button>{' '}
                <Button size="sm" variant="primary" type="submit" onClick={() => history.push("/results/J.R.R.%20Tolkien")}>J.R.R. Tolkien</Button>{' '}
                <Button size="sm" variant="primary" type="submit" onClick={() => history.push("/results/Oscar%20Wilde")}>Oscar Wilde</Button>{' '}
                <Button size="sm" variant="primary" type="submit" onClick={() => history.push("/results/Jane%20Austen")}>Jane Austen</Button>
            </div>
        </div>
    );
}

export default PopularSearches;
