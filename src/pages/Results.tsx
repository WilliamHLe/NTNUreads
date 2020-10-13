import React from "react";
import { useParams } from "react-router-dom";
import Search from "../components/search/Search";

const Results = () => {
    //her kan vi ha search component for å initialisere nytt søk, og også inkludere komponent for
    //filtrering og sortering
    const { searchText } = useParams()
    return (
        <div>
            <Search/>
            <h5>Dette er resultatene fra søket: {searchText}</h5>
            {/*Legg inn tabell som viser resultat fra søk under her*/}
        </div>
    );
}

export default Results;
