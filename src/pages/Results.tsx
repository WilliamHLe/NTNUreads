import React from "react";
import { useParams } from "react-router-dom";

const Results = () => {
    //her skal vi ha search component for å initialisere nytt søk, og også inkludere komponent for
    //filtrering og sortering
    const { searchText } = useParams()
    return (
        <div>
            <p>Dette er resultatene fra søket: {searchText}</p>
        </div>
    );
}

export default Results;
